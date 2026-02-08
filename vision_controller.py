"""
VisionController - Camera capture controller for LLM visual input.

Usage:
    vision_controller = VisionController(fps=1.0, camera_id=0)
    await vision_controller.start()
    # Get latest frame with get_latest_image()
    await vision_controller.stop()
"""

import asyncio
import base64
import logging
import cv2
from typing import Optional

logging.basicConfig(level=logging.INFO, force=True)
logger = logging.getLogger(__name__)


class VisionController:
    """
    Captures camera frames at a specified FPS and maintains the latest frame.
    
    Only the latest frame is kept - no queue, just direct access to the most recent capture.
    """
    
    def __init__(self, fps: float = 1.0, camera_id: int = 0):
        """
        Initialize the VisionController.
        
        Args:
            fps: Frames per second to capture (default: 1.0)
            camera_id: Camera device ID (default: 0)
        """
        self.fps = fps
        self.camera_id = camera_id
        self.capture_interval = 1.0 / fps
        
        # Latest captured frame
        self._latest_frame: Optional[str] = None
        self._frame_lock = asyncio.Lock()
        
        # Camera and control
        self.cap: Optional[cv2.VideoCapture] = None
        self._running = False
        self._capture_task: Optional[asyncio.Task] = None
    
    def _open_camera(self) -> bool:
        """Open camera device. Returns True on success."""
        try:
            self.cap = cv2.VideoCapture(self.camera_id)
            if not self.cap.isOpened():
                logger.error(f"Failed to open camera {self.camera_id}")
                return False
            
            # Set reasonable resolution for bandwidth efficiency
            self.cap.set(cv2.CAP_PROP_FRAME_WIDTH, 640)
            self.cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 480)
            
            logger.info(f"Camera {self.camera_id} opened successfully")
            return True
        except Exception as e:
            logger.error(f"Error opening camera: {e}")
            return False
    
    def _capture_frame(self) -> Optional[str]:
        """
        Capture a single frame and encode as base64 JPEG.
        
        Returns:
            Base64-encoded JPEG string, or None on failure
        """
        if self.cap is None or not self.cap.isOpened():
            return None
        
        ret, frame = self.cap.read()
        if not ret:
            logger.warning("Failed to capture frame")
            return None
        
        # Encode as JPEG with 80% quality for bandwidth efficiency
        ret, buffer = cv2.imencode('.jpg', frame, [cv2.IMWRITE_JPEG_QUALITY, 80])
        if not ret:
            logger.warning("Failed to encode frame")
            return None
        
        # Convert to base64
        base64_image = base64.b64encode(buffer).decode('utf-8')
        return base64_image
    
    async def _capture_loop(self):
        """Main capture loop - runs at specified FPS."""
        logger.info(f"Starting capture loop at {self.fps} FPS")
        
        while self._running:
            try:
                # Capture frame in thread pool to avoid blocking
                base64_image = await asyncio.get_event_loop().run_in_executor(
                    None, self._capture_frame
                )
                
                if base64_image:
                    async with self._frame_lock:
                        self._latest_frame = base64_image
                
                # Wait for next capture interval
                await asyncio.sleep(self.capture_interval)
                
            except asyncio.CancelledError:
                break
            except Exception as e:
                logger.error(f"Error in capture loop: {e}")
                await asyncio.sleep(self.capture_interval)
        
        logger.info("Capture loop stopped")
    
    async def start(self) -> bool:
        """
        Start the vision controller.
        
        Returns:
            True if started successfully, False otherwise
        """
        if self._running:
            logger.warning("VisionController is already running")
            return True
        
        # Open camera
        success = await asyncio.get_event_loop().run_in_executor(
            None, self._open_camera
        )
        
        if not success:
            return False
        
        self._running = True
        self._capture_task = asyncio.create_task(self._capture_loop())
        
        logger.info("VisionController started")
        return True
    
    async def stop(self):
        """Stop the vision controller and release camera resources."""
        if not self._running:
            return
        
        self._running = False
        
        # Cancel capture task
        if self._capture_task:
            self._capture_task.cancel()
            try:
                await self._capture_task
            except asyncio.CancelledError:
                pass
            self._capture_task = None
        
        # Release camera
        if self.cap:
            self.cap.release()
            self.cap = None
        
        logger.info("VisionController stopped")
    
    def get_latest_image(self) -> Optional[str]:
        """
        Get the latest captured image.
        
        Returns:
            Base64-encoded JPEG string, or None if no image captured yet
        """
        return self._latest_frame
    
    async def __aenter__(self):
        """Async context manager entry."""
        await self.start()
        return self
    
    async def __aexit__(self, exc_type, exc_val, exc_tb):
        """Async context manager exit."""
        await self.stop()
        return False


if __name__ == "__main__":
    # Quick test
    async def main():
        controller = VisionController(fps=1.0)
        await controller.start()
        
        print("Capturing 3 frames...")
        for i in range(3):
            await asyncio.sleep(1.1)
            image = controller.get_latest_image()
            if image:
                print(f"  Frame {i+1}: captured {len(image)} bytes (base64)")
            else:
                print(f"  Frame {i+1}: no image available")
        
        await controller.stop()
        print("Test complete!")
    
    asyncio.run(main())
