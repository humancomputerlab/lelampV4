"""Pre-loaded sound effects for bridge game events."""

import logging
from pathlib import Path

logger = logging.getLogger(__name__)

_shoot_data = None
_shoot_sr = None

try:
    import sounddevice as sd
    import soundfile as sf

    _wav_path = Path(__file__).parent / "sounds" / "laser.wav"
    if _wav_path.exists():
        _shoot_data, _shoot_sr = sf.read(_wav_path, dtype="float32")
        logger.info(f"Loaded laser sound: {len(_shoot_data)} samples @ {_shoot_sr}Hz")
    else:
        logger.warning(f"laser.wav not found at {_wav_path}")
except Exception as e:
    sd = None  # type: ignore
    logger.warning(f"Sound system unavailable: {e}")


def play_shoot():
    """Play the laser shoot sound (non-blocking)."""
    if sd is None or _shoot_data is None:
        return
    try:
        sd.play(_shoot_data, _shoot_sr)
    except Exception as e:
        logger.error(f"Failed to play shoot sound: {e}")


if __name__ == "__main__":
    import time

    logging.basicConfig(level=logging.INFO)
    print("Playing laser sound...")
    play_shoot()
    time.sleep(1)
    print("Done.")
