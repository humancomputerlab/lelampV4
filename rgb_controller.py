import asyncio
from typing import Callable, Optional

import board
import neopixel


class RgbController:
    """
    RGB LED Controller Class
    
    Usage Example:
        async def rainbow_animation(pixels):
            # 1. Modify pixels
            for i in range(len(pixels)):
                hue = (i / len(pixels)) * 255
                pixels[i] = (int(hue), int(255 - hue), 128)
            # 2. Call show
            pixels.show()
            # 3. await asyncio.sleep
            await asyncio.sleep(0.05)
        
        controller = RgbController()
        
        # Set as background animation (duration=None)
        await controller.play(rainbow_animation, duration=None)
        
        # Play for specific duration then return to background animation
        await controller.play(some_effect, duration=5.0)
    """
    
    def __init__(self):
        LED_COUNT = 93        # Number of LEDs
        LED_PIN = board.D10   # GPIO pin 10
        BRIGHTNESS = 0.3      # Brightness (0.0-1.0)
        self.pixels = neopixel.NeoPixel(
            LED_PIN,
            LED_COUNT,
            brightness=BRIGHTNESS,
            auto_write=False
        )
        
        # Currently running animation task
        self._current_animation_task: Optional[asyncio.Task] = None
        # Background animation function
        self._background_animation: Optional[Callable] = None
        # Stop flag
        self._stop_requested = False
        # Set initial LED
        self.set_solid(255, 255, 255)
    
    def set_solid(self, r: int, g: int, b: int) -> None:
        """Set solid color"""
        self.pixels.fill((r, g, b))
        self.pixels.show()
    
    async def _run_animation(
        self, 
        animation_func: Callable, 
        duration: Optional[float]
    ) -> None:
        """
        Internal method: Run animation
        
        Args:
            animation_func: Animation function, signature is async def func(pixels)
            duration: Playback duration, None means infinite loop
        """
        start_time = asyncio.get_event_loop().time() if duration else None
        
        try:
            while not self._stop_requested:
                # Check if exceeded playback duration
                if duration is not None:
                    elapsed = asyncio.get_event_loop().time() - start_time
                    if elapsed >= duration:
                        break
                
                # Execute animation function
                await animation_func(self.pixels)
                
        except asyncio.CancelledError:
            # Animation cancelled
            pass
    
    async def _start_background_animation(self) -> None:
        """Start background animation"""
        if self._background_animation is not None:
            self._stop_requested = False
            self._current_animation_task = asyncio.create_task(
                self._run_animation(self._background_animation, duration=None)
            )
    
    async def play(
        self, 
        animation_func: Callable, 
        duration: Optional[float] = None
    ) -> None:
        """
        Play animation effect
        
        Args:
            animation_func: Animation playback function, should follow this pattern:
                1. Modify pixels
                2. Call pixels.show()
                3. await asyncio.sleep(...)
            duration: Playback duration (seconds)
                - If None, set this animation as background animation
                - If has value, play for specified duration then switch back to background animation
        """
        # Stop currently playing animation
        if self._current_animation_task is not None:
            self._stop_requested = True
            self._current_animation_task.cancel()
            try:
                await self._current_animation_task
            except asyncio.CancelledError:
                pass
            self._current_animation_task = None
        
        self._stop_requested = False
        
        if duration is None:
            # Set as background animation
            self._background_animation = animation_func
            self._current_animation_task = asyncio.create_task(
                self._run_animation(animation_func, duration=None)
            )
        else:
            # Play for specified duration
            self._current_animation_task = asyncio.create_task(
                self._run_animation(animation_func, duration=duration)
            )
            # Wait for playback to complete
            try:
                await self._current_animation_task
            except asyncio.CancelledError:
                return
            
            self._current_animation_task = None
            # Switch back to background animation after playback
            await self._start_background_animation()
    
    async def stop(self) -> None:
        """Stop all animations"""
        self._stop_requested = True
        if self._current_animation_task is not None:
            self._current_animation_task.cancel()
            try:
                await self._current_animation_task
            except asyncio.CancelledError:
                pass
            self._current_animation_task = None
        
        # Turn off all LEDs
        self.pixels.fill((0, 0, 0))
        self.pixels.show()
    
    def deinit(self) -> None:
        """Release resources"""
        self.pixels.deinit()
