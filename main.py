"""
Usage:
    uv run main.py

Environment Variables:
    OPENAI_API_KEY: OpenAI API key
"""

import asyncio
import logging
from dotenv import load_dotenv

load_dotenv()

from llm import LLM
from servo_controller import SimpleServoController
from rgb_controller import RgbController
from vision_controller import VisionController
import tools

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


async def main():
    print("=" * 50)
    print("🤖 LeLamp Chatbot Starting...")
    print("=" * 50)
    
    # Initialize controllers
    servo_controller = None
    rgb_controller = None
    vision_controller = None
    llm = None
    
    try:
        # 1. Initialize servo controller
        print("\n🦾 Initializing servo controller...")
        servo_controller = SimpleServoController(auto_connect=True)
        print("   ✅ Servo controller ready")
        
        # 2. Initialize RGB controller
        print("\n💡 Initializing RGB controller...")
        rgb_controller = RgbController()
        print("   ✅ RGB controller ready")
        
        # 3. Initialize LLM
        print("\n🧠 Initializing LLM...")
        llm = LLM()
        
        # 4. Set controllers to Agent
        llm.agent.set_servo_controller(servo_controller)
        llm.agent.set_rgb_controller(rgb_controller)
        
        # 5. Register tool functions
        llm.agent.register_tools(tools)
        print(f"   ✅ Registered {len(llm.agent.tools_schema)} tool functions")
        
        # 6. Initialize and start vision controller
        print("\n👁️ Initializing vision controller...")
        vision_controller = VisionController(fps=1.0, camera_id=0)
        if await vision_controller.start():
            llm.set_vision_controller(vision_controller)
            llm.agent.set_vision_controller(vision_controller)
            print("   ✅ Vision controller ready")
        else:
            print("   ⚠️ Vision controller failed to start, continuing without camera")
        
        # 6. Set default idle animation (optional)
        try:
            servo_controller.set_idle_animation("servo_animations/idle.csv")
            print("   ✅ Default idle animation set")
        except FileNotFoundError:
            print("   ⚠️ idle.csv not found, skipping default animation setup")
        
        print("\n" + "=" * 50)
        print("✅ Initialization complete! Starting voice dialogue...")
        print("   Press Ctrl+C to exit")
        print("=" * 50 + "\n")
        
        # Save event loop reference for callback use
        llm.loop = asyncio.get_event_loop()

        # Start web dashboard
        from web_server import WebServer
        web = WebServer(servo_controller, rgb_controller, vision_controller, llm, asyncio.get_event_loop())
        web.start()
        print("   ✅ Web dashboard at http://0.0.0.0:8080")

        # Start LLM
        await llm.start()
        
    except KeyboardInterrupt:
        print("\n\n⚠️ User interrupt (Ctrl+C)")
    except Exception as e:
        logger.error(f"Runtime error: {e}", exc_info=True)
    finally:
        # Clean up resources
        print("\n🔧 Cleaning up resources...")
        
        if rgb_controller:
            try:
                await rgb_controller.stop()
                rgb_controller.deinit()
                print("   ✅ RGB controller closed")
            except Exception as e:
                logger.warning(f"Error closing RGB controller: {e}")
        
        if servo_controller:
            try:
                await servo_controller.disconnect()
                print("   ✅ Servo controller disconnected")
            except Exception as e:
                logger.warning(f"Error disconnecting servo controller: {e}")
        
        if vision_controller:
            try:
                await vision_controller.stop()
                print("   ✅ Vision controller stopped")
            except Exception as e:
                logger.warning(f"Error stopping vision controller: {e}")
        
        print("\n👋 Goodbye!")


if __name__ == "__main__":
    asyncio.run(main())
