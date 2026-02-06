import sounddevice as sd
import logging
import threading
from typing import Callable, Optional
import numpy as np
import asyncio
import inspect
import websockets
import json
import base64
import os
from dotenv import load_dotenv
import glob
import tools

logging.basicConfig(level=logging.INFO, force=True)
logger = logging.getLogger(__name__)

# Default animations directory (relative to this file)
ANIMATIONS_DIR = os.path.join(os.path.dirname(__file__), "servo_animations")


class Agent:
    def __init__(self):
        system_prompt = "You are a voice-first assistant. ALWAYS respond to the user using your voice (audio modality). Do not send text messages to the user. Text modality should be used EXCLUSIVELY for internal tool calling/function calling. Use functions of animations and LED animations to express your emotion, OFTEN"
        system_prompt += "\n"
        available_animations = self.get_available_animations()
        animations_list = ", ".join(available_animations) if available_animations else "No animations available"
        system_prompt+=f"Available animations you can play using play_recording function: {animations_list}"
        system_prompt += "\n"
        system_prompt += self.load_personality_prompt()
        self.instruction = system_prompt
        self.tool_registry={}
        self.tools_schema=[]
        
        # Controller instances
        self.servo_controller = None
        self.rgb_controller = None
    
    def set_servo_controller(self, controller):
        """Set servo controller instance"""
        self.servo_controller = controller
    
    def set_rgb_controller(self, controller):
        """Set RGB controller instance"""
        self.rgb_controller = controller

    def load_personality_prompt(self):
        with open("/home/lelamp/old_lelampv2/lelamp/personality/characters/LeLamp.json", 'r', encoding='utf-8') as f:
            personality = json.load(f)

        # 2. Read instruction template file
        with open("/home/lelamp/old_lelampv2/lelamp/personality/instructions.txt", 'r', encoding='utf-8') as f:
            template = f.read()

        # 3. Prepare fill data
        # Note: JSON key names need to correspond to placeholders in template
        # For example: name -> robot_name, description -> description
        context = {
            "robot_name": personality.get("name", ""),
            "description": personality.get("description", ""),
            "speech_style": personality.get("speech_style", ""),
            "ideals": personality.get("ideals", ""),
            "flaws": personality.get("flaws", ""),
            "bio": personality.get("bio", "")
        }

        # 4. Use format function to fill template
        # Extra { } in template (like {{ }} in function calls) need to be written as double braces {{ }}
        # to avoid being mistakenly interpreted as placeholders by python's format function
        full_prompt = template.format(**context)

        return full_prompt

    def get_available_animations(self) -> list[str]:
        """
        Scan the servo_animations directory for available animation CSV files.
        Returns a list of animation names (without .csv extension).
        """
        if not os.path.exists(ANIMATIONS_DIR):
            logger.warning(f"Animations directory does not exist: {ANIMATIONS_DIR}")
            return []

        pattern = os.path.join(ANIMATIONS_DIR, "*.csv")
        animation_files = glob.glob(pattern)

        animations = []
        for file_path in sorted(animation_files):
            filename = os.path.basename(file_path)
            animation_name = filename.replace(".csv", "")
            animations.append(animation_name)

        return animations

    def register_tools(self, tools_module):
        for name, obj in inspect.getmembers(tools_module, inspect.isfunction):
            if obj.__module__ == tools_module.__name__ and hasattr(obj, "_is_tool"):
                func_name = name
                func_doc = obj.__doc__
                sig = inspect.signature(obj)
                parameters = {"type": "object", "properties": {}, "required": []}

                for param_name, param in sig.parameters.items():
                    if param_name == "agent":continue
                    param_type = "string"
                    if param.annotation == int: param_type = "integer"
                    elif param.annotation == bool: param_type = "boolean"
                    elif param.annotation == float: param_type = "number"

                    parameters["properties"][param_name] = {
                        "type": param_type,
                        "description": f"Arg: {param_name}"
                    }
                    if param.default == inspect.Parameter.empty:
                        parameters["required"].append(param_name)

                tool_def = {
                    "type": "function",
                    "function": {
                        "name": func_name,
                        "description": func_doc.strip(),
                        "parameters": parameters
                    }
                }
                self.tool_registry[func_name] = obj
                self.tools_schema.append(tool_def)

    async def execute(self, func_name: str, arguments: str, agent: "Agent") -> str:
        """
        Execute a registered tool function by name with the given arguments.
        Non-blocking: uses asyncio.to_thread for sync functions, or awaits async functions directly.
        
        Args:
            func_name: Name of the function to execute
            arguments: JSON string of arguments
            agent: Reference to the Agent instance (for tools that need it)
            
        Returns:
            JSON string with the result or error message
        """
        if func_name not in self.tool_registry:
            return json.dumps({"error": f"Function '{func_name}' not found"})
        
        func = self.tool_registry[func_name]
        
        try:
            # Parse JSON arguments
            args_dict = json.loads(arguments) if arguments else {}
            
            # Check if the function is async or sync
            if asyncio.iscoroutinefunction(func):
                # Async function - await directly, pass agent as first argument (self)
                result = await func(agent, **args_dict)
            else:
                # Sync function - run in thread pool to avoid blocking, pass agent as first argument (self)
                result = await asyncio.to_thread(func, agent, **args_dict)
            
            # Return result as JSON string
            if isinstance(result, str):
                return result
            else:
                return json.dumps({"result": result})
                
        except json.JSONDecodeError as e:
            return json.dumps({"error": f"Invalid JSON arguments: {str(e)}"})
        except TypeError as e:
            return json.dumps({"error": f"Argument error: {str(e)}"})
        except Exception as e:
            return json.dumps({"error": f"Execution error: {str(e)}"})

class LLM:
    def __init__(self):
        # Configuration
        self.API_KEY = os.getenv("OPENAI_API_KEY")
        # Use the latest Realtime model
        self.URL = "wss://api.openai.com/v1/realtime?model=gpt-4o-realtime-preview"

        # Audio configuration (OpenAI Realtime API standard is 24kHz PCM16 Mono)
        self.SAMPLE_RATE = 24000
        self.CHANNELS = 1
        self.DTYPE = 'int16'
        self.CHUNK_SIZE = 1024  # Size of audio frame read each time

        # Thread-safe queue for transferring data between audio callback and asyncio
        self.input_queue = asyncio.Queue()
        self.audio_buffer = bytearray()
        self.buffer_lock = threading.Lock()

        self.agent = Agent()

        self.device = self.get_audio_device_id()

    def get_audio_device_id(self) -> Optional[int]:
        """
        Find audio device ID by name, preferring PipeWire/PulseAudio virtual devices.
        kind: 'input' or 'output'
        """
        # Get list of all devices
        devices = sd.query_devices()

        # 1. Prefer devices explicitly containing 'pulse' or 'pipewire'
        # This is usually a virtual mixer device that ensures routing through PipeWire
        for i, dev in enumerate(devices):
            print(i, dev)
            dev_name = dev['name'].lower()
            if 'pipewire' in dev_name:
                logger.info(f"Found PipeWire device for: {dev['name']} (ID: {i})")
                return i
        raise Exception("No pipewire found")

    def _fix_tools_format(self, original_tools):
        """Convert Chat Completion format tools to Realtime API format"""
        fixed_tools = []
        for t in original_tools:
            # If it is the old format {"type": "function", "function": {"name":...}}
            if "function" in t:
                func_def = t["function"]
                fixed_tools.append({
                    "type": "function",
                    "name": func_def.get("name"),
                    "description": func_def.get("description", ""),
                    "parameters": func_def.get("parameters", {})
                })
            # If it is already the new format (with name at the top level), use it directly
            elif "name" in t:
                fixed_tools.append(t)
        return fixed_tools

    def input_callback(self, indata, frames, time, status):
        """Microphone recording callback: put recorded raw audio data into the queue"""
        # if status:
        #     print(status)
        # Convert numpy array to bytes
        mono_data = indata[:, 0]

        # Ensure memory is contiguous (may not be after slicing), then convert to bytes
        # Note: OpenAI Realtime API requires mono PCM16, which is exactly what we extract
        audio_bytes = mono_data.copy(order='C').tobytes()
        # audio_bytes = indata.tobytes()
        # Note: We cannot use await directly here because this runs in a non-async thread
        # We use asyncio.run_coroutine_threadsafe or simple loop.call_soon_threadsafe
        # For simplicity, we use put_nowait of asyncio.Queue (if in the same loop)
        # But since this is cross-thread, standard queue with async wrapper is usually more robust,
        # Or handle directly in the main loop. Here for code brevity, we assume the loop is running.
        try:
            self.loop.call_soon_threadsafe(self.input_queue.put_nowait, audio_bytes)
        except Exception as e:
            pass

    def output_callback(self, outdata, frames, time, status):
        """Audio playback callback"""
        if status:
            logger.warning(f"Output status: {status}")

        bytes_needed = frames * self.CHANNELS * 2

        with self.buffer_lock:
            if len(self.audio_buffer) >= bytes_needed:
                # Buffer has sufficient data: slice, remove, convert
                chunk = self.audio_buffer[:bytes_needed]
                del self.audio_buffer[:bytes_needed]

                # Directly convert bytes to int16 numpy array
                samples = np.frombuffer(chunk, dtype=np.int16)
                outdata[:] = samples.reshape(-1, self.CHANNELS)
            else:
                # Buffer has insufficient data: fill with silence (avoid clicking)
                outdata.fill(0)


    async def send_audio(self, websocket):
        """Continuously read data from microphone queue and send to OpenAI"""
        while True:
            audio_bytes = await self.input_queue.get()
            # Base64 encoding
            base64_audio = base64.b64encode(audio_bytes).decode('utf-8')

            # Send input_audio_buffer.append event
            event = {
                "type": "input_audio_buffer.append",
                "audio": base64_audio
            }
            await websocket.send(json.dumps(event))

    async def receive(self, websocket):
        """Continuously receive OpenAI responses and put into playback queue"""
        async for message in websocket:
            event = json.loads(message)
            event_type = event.get("type")
            current_stream_type = None
            # print(message)

            # Print some logs for debugging
            # --- 1. User Voice Transcription Result (User Input) ---
            # Need to enable input_audio_transcription in session to receive this event
            if event_type == "conversation.item.input_audio_transcription.completed":
                transcript = event.get("transcript", "").strip()
                if transcript:
                    if current_stream_type: print("") # Newline
                    print(f"[User Voice Transcription]: {transcript}")
                    current_stream_type = None

            # --- 2. AI Text Streaming Output (AI Response) ---
            # Because modalities=["text"], we listen to response.text.delta instead of audio
            elif event_type == "response.text.delta":
                delta = event.get("delta", "")
                if current_stream_type != "text":
                    print(f"[AI Response]: ", end="")
                    current_stream_type = "text"
                print(delta, end="", flush=True)

            elif event_type == "response.audio.delta":
                # Decode and play audio chunk
                audio_b64 = event.get("delta", "")
                if audio_b64:
                    audio_bytes = base64.b64decode(audio_b64)
                    with self.buffer_lock:
                        self.audio_buffer.extend(audio_bytes)
            elif event_type == "response.audio.done":
                print("\n[AI finished speaking]")

            elif event_type == "input_audio_buffer.speech_started":
                print(">> User Interruption Detected! (Clearing Buffer)")
                # Key action: Immediately cut off current playback
                with self.buffer_lock:
                    self.audio_buffer.clear()

            # --- 3. Response Ended ---
            elif event_type == "response.done":
                if current_stream_type == "text":
                    print(f"") # End color
                    current_stream_type = None

            elif event['type'] == "response.function_call_arguments.done":
                # AI has generated complete function call arguments
                call_id = event["call_id"]
                name = event["name"]
                arguments = event["arguments"]

                print(f"\n[System] AI requests tool call: {name}({arguments})")
                output_str = await self.agent.execute(name, arguments, self.agent)
                print(output_str)
                # 1. Create a new conversation item (Item) consisting of tool output
                item_create_event = {
                    "type": "conversation.item.create",
                    "item": {
                        "type": "function_call_output",
                        "call_id": call_id,  # Must correspond to the previous call_id
                        "output": output_str
                    }
                }
                await websocket.send(json.dumps(item_create_event))

                # 2. Tell AI: "Result given to you, now please reply to me based on this result" (triggers response.create)
                response_create_event = {
                    "type": "response.create",
                    "response": {
                        "modalities": ["text", "audio"],
                    }
                }
                await websocket.send(json.dumps(response_create_event))

    async def start(self):
        headers = {
            "Authorization": "Bearer " + self.API_KEY,
            "OpenAI-Beta": "realtime=v1"
        }

        print("Connecting to OpenAI Realtime API...")
        async with websockets.connect(self.URL, additional_headers=headers) as websocket:

            # 1. Initialize session (Optional: set voice, VAD mode, etc.)
            session_update = {
                "type": "session.update",
                "session": {
                    "modalities": ["audio", "text"],
                    "voice": "ballad",  # Optional: alloy, ash, ballad, coral, echo, sage, shimmer, verse
                    "input_audio_format": "pcm16",
                    "output_audio_format": "pcm16",
                    "turn_detection": {
                        "type": "server_vad",  # Enable server-side voice activity detection (auto interruption, auto reply)
                    },
                    "tools": self._fix_tools_format(self.agent.tools_schema),
                    "tool_choice": "auto",
                    "input_audio_transcription": {
                        "model": "whisper-1",
                    },
                    "instructions": self.agent.instruction
                }
            }
            await websocket.send(json.dumps(session_update))

            input_stream = sd.InputStream(
                device=self.device,
                samplerate=self.SAMPLE_RATE,
                channels=2,
                dtype=self.DTYPE,
                callback=self.input_callback,
                blocksize=self.CHUNK_SIZE
            )
            output_stream = sd.OutputStream(
                device=self.device,
                samplerate=self.SAMPLE_RATE,
                channels=1,
                dtype=self.DTYPE,
                callback=self.output_callback,
                blocksize=self.CHUNK_SIZE
            )

            with input_stream, output_stream:
                # 3. Run send and receive tasks concurrently
                send_task = asyncio.create_task(self.send_audio(websocket))
                receive_task = asyncio.create_task(self.receive(websocket))

                try:
                    await asyncio.gather(send_task, receive_task)
                except KeyboardInterrupt:
                    print("Stopping conversation...")