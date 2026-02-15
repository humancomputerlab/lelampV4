"""
Web dashboard server for LeLamp V4.

Runs a Flask REST API in a daemon thread alongside the main asyncio event loop.
Provides endpoints for servo animations, RGB LEDs, motor positions, camera, and agent control.

Usage:
    web = WebServer(servo_controller, rgb_controller, vision_controller, llm, loop)
    web.start()  # starts daemon thread, auto-dies with main process
"""

import asyncio
import logging
import threading
from pathlib import Path

from flask import Flask, jsonify, request

from tools import (
    _rainbow_animation,
    _breathing_animation,
    _flowing_animation,
    _sparkle_animation,
    _police_animation,
)

logger = logging.getLogger(__name__)

_BASE_DIR = Path(__file__).resolve().parent
STATIC_DIR = _BASE_DIR / "static"
ANIMATIONS_DIR = _BASE_DIR / "servo_animations"

RGB_ANIMATIONS = {
    "rainbow": {"name": "Rainbow", "description": "Flowing rainbow cycle", "func": _rainbow_animation},
    "breathing": {"name": "Breathing", "description": "Warm breathing glow", "func": _breathing_animation},
    "flowing": {"name": "Flowing", "description": "Flowing light trail", "func": _flowing_animation},
    "sparkle": {"name": "Sparkle", "description": "Sparkling stars", "func": _sparkle_animation},
    "police": {"name": "Police", "description": "Red/blue police flash", "func": _police_animation},
}


class WebServer:
    def __init__(self, servo_controller, rgb_controller, vision_controller, llm, loop, port=8080):
        self.servo = servo_controller
        self.rgb = rgb_controller
        self.vision = vision_controller
        self.llm = llm
        self.loop = loop
        self.port = port

        self.app = Flask(__name__, static_folder=str(STATIC_DIR))
        self._register_routes()

    # ------------------------------------------------------------------
    # Helpers
    # ------------------------------------------------------------------

    def _run_async(self, coro, timeout=10):
        """Bridge async coroutine from Flask thread to the main asyncio loop."""
        future = asyncio.run_coroutine_threadsafe(coro, self.loop)
        return future.result(timeout=timeout)

    def _fire_and_forget(self, coro):
        """Schedule a coroutine without waiting for the result."""
        asyncio.run_coroutine_threadsafe(coro, self.loop)

    # ------------------------------------------------------------------
    # Route registration
    # ------------------------------------------------------------------

    def _register_routes(self):
        app = self.app

        # --- Static files ---
        @app.route("/")
        def index():
            return app.send_static_file("index.html")

        # --- Servo Animations ---
        @app.route("/api/animations")
        def list_animations():
            try:
                files = sorted(ANIMATIONS_DIR.glob("*.csv"))
                names = [f.stem for f in files]
                current_idle = None
                if self.servo and self.servo._idle_animation_path:
                    current_idle = Path(self.servo._idle_animation_path).stem
                return jsonify({"animations": names, "current_idle": current_idle})
            except Exception as e:
                return jsonify({"error": str(e)}), 500

        @app.route("/api/animations/play", methods=["POST"])
        def play_animation():
            data = request.get_json(silent=True) or {}
            name = data.get("name")
            if not name:
                return jsonify({"error": "Missing 'name'"}), 400
            if not self.servo:
                return jsonify({"error": "Servo controller not available"}), 503
            try:
                csv_path = name if name.endswith(".csv") else f"{name}.csv"
                self._run_async(self.servo.play_action(csv_path))
                return jsonify({"status": "ok", "animation": name})
            except Exception as e:
                return jsonify({"error": str(e)}), 500

        @app.route("/api/animations/stop", methods=["POST"])
        def stop_animation():
            if not self.servo:
                return jsonify({"error": "Servo controller not available"}), 503
            try:
                self._run_async(self.servo.stop_playback())
                return jsonify({"status": "ok"})
            except Exception as e:
                return jsonify({"error": str(e)}), 500

        @app.route("/api/animations/idle", methods=["POST"])
        def set_idle():
            data = request.get_json(silent=True) or {}
            name = data.get("name")  # None or "" to disable
            if not self.servo:
                return jsonify({"error": "Servo controller not available"}), 503
            try:
                if name:
                    csv_path = name if name.endswith(".csv") else f"{name}.csv"
                    self.servo.set_idle_animation(csv_path)
                else:
                    self.servo.set_idle_animation(None)
                return jsonify({"status": "ok", "idle": name or None})
            except Exception as e:
                return jsonify({"error": str(e)}), 500

        # --- RGB ---
        @app.route("/api/rgb/animations")
        def list_rgb_animations():
            info = {k: {"name": v["name"], "description": v["description"]} for k, v in RGB_ANIMATIONS.items()}
            return jsonify({"animations": info})

        @app.route("/api/rgb/solid", methods=["POST"])
        def set_rgb_solid():
            data = request.get_json(silent=True) or {}
            r, g, b = data.get("r"), data.get("g"), data.get("b")
            if r is None or g is None or b is None:
                return jsonify({"error": "Missing r, g, b"}), 400
            if not self.rgb:
                return jsonify({"error": "RGB controller not available"}), 503
            try:
                self._run_async(self.rgb.stop())
                self.rgb.set_solid(int(r), int(g), int(b))
                return jsonify({"status": "ok", "color": [r, g, b]})
            except Exception as e:
                return jsonify({"error": str(e)}), 500

        @app.route("/api/rgb/animation", methods=["POST"])
        def play_rgb_animation():
            data = request.get_json(silent=True) or {}
            name = data.get("name", "").lower()
            duration = data.get("duration")
            if name not in RGB_ANIMATIONS:
                return jsonify({"error": f"Unknown animation '{name}'", "available": list(RGB_ANIMATIONS.keys())}), 400
            if not self.rgb:
                return jsonify({"error": "RGB controller not available"}), 503
            try:
                func = RGB_ANIMATIONS[name]["func"]
                # Fire and forget so we don't block Flask on long/infinite animations
                self._fire_and_forget(self.rgb.play(func, duration=duration))
                return jsonify({"status": "ok", "animation": name})
            except Exception as e:
                return jsonify({"error": str(e)}), 500

        @app.route("/api/rgb/stop", methods=["POST"])
        def stop_rgb():
            if not self.rgb:
                return jsonify({"error": "RGB controller not available"}), 503
            try:
                self._run_async(self.rgb.stop())
                return jsonify({"status": "ok"})
            except Exception as e:
                return jsonify({"error": str(e)}), 500

        # --- Motor positions ---
        @app.route("/api/motors/positions")
        def read_positions():
            if not self.servo:
                return jsonify({"error": "Servo controller not available"}), 503
            try:
                positions = self.servo.read_position()
                return jsonify({"positions": positions})
            except Exception as e:
                return jsonify({"error": str(e)}), 500

        @app.route("/api/motors/positions", methods=["POST"])
        def write_positions():
            data = request.get_json(silent=True) or {}
            positions = data.get("positions")
            if not positions or not isinstance(positions, dict):
                return jsonify({"error": "Missing 'positions' dict"}), 400
            if not self.servo:
                return jsonify({"error": "Servo controller not available"}), 503
            try:
                # Convert values to float
                float_positions = {k: float(v) for k, v in positions.items()}
                self.servo.write_position(float_positions)
                return jsonify({"status": "ok", "positions": float_positions})
            except Exception as e:
                return jsonify({"error": str(e)}), 500

        # --- Camera ---
        @app.route("/api/camera/snapshot")
        def camera_snapshot():
            if not self.vision:
                return jsonify({"error": "Vision controller not available"}), 503
            try:
                image_b64 = self.vision.get_latest_image()
                if image_b64:
                    return jsonify({"image": f"data:image/jpeg;base64,{image_b64}"})
                else:
                    return jsonify({"error": "No image available"}), 404
            except Exception as e:
                return jsonify({"error": str(e)}), 500

        # --- Agent status ---
        @app.route("/api/agent/status")
        def agent_status():
            try:
                sleeping = self.llm.agent.is_sleeping if self.llm else False
                return jsonify({"is_sleeping": sleeping})
            except Exception as e:
                return jsonify({"error": str(e)}), 500

        @app.route("/api/agent/sleep", methods=["POST"])
        def agent_sleep():
            if not self.llm:
                return jsonify({"error": "LLM not available"}), 503
            try:
                async def _sleep_sequence():
                    agent = self.llm.agent
                    if agent.rgb_controller:
                        await agent.rgb_controller.stop()
                    if agent.servo_controller:
                        agent.servo_controller.set_idle_animation(None)
                    if agent.servo_controller:
                        await agent.servo_controller.stop_playback()
                    if agent.servo_controller:
                        sleep_positions = {
                            "base_yaw": 1.6049787094660957,
                            "base_pitch": -92.73066169617894,
                            "elbow_pitch": -97.96875,
                            "wrist_roll": -3.5775127768313553,
                            "wrist_pitch": 16.213683223992504,
                        }
                        agent.servo_controller.write_position(sleep_positions)
                    await agent.update_sleep_state(True)

                self._run_async(_sleep_sequence())
                return jsonify({"status": "ok", "is_sleeping": True})
            except Exception as e:
                return jsonify({"error": str(e)}), 500

        @app.route("/api/agent/wake", methods=["POST"])
        def agent_wake():
            if not self.llm:
                return jsonify({"error": "LLM not available"}), 503
            try:
                async def _wake_sequence():
                    agent = self.llm.agent
                    await agent.update_sleep_state(False)
                    if agent.servo_controller:
                        agent.servo_controller.set_idle_animation("idle.csv")
                    if agent.rgb_controller:
                        agent.rgb_controller.set_solid(255, 255, 255)

                self._run_async(_wake_sequence())
                return jsonify({"status": "ok", "is_sleeping": False})
            except Exception as e:
                return jsonify({"error": str(e)}), 500

    # ------------------------------------------------------------------
    # Start
    # ------------------------------------------------------------------

    def start(self):
        """Start Flask in a daemon thread."""
        # Suppress Flask/Werkzeug request logs
        logging.getLogger("werkzeug").setLevel(logging.ERROR)

        def _run():
            self.app.run(host="0.0.0.0", port=self.port, threaded=True)

        thread = threading.Thread(target=_run, daemon=True)
        thread.start()
