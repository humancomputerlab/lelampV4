"""Allow running bridge as: python -m bridge.server"""
import argparse
import asyncio
from .server import main

parser = argparse.ArgumentParser(description="LeLamp Space Invaders Bridge")
parser.add_argument("--debug", action="store_true", help="Run without hardware")
args = parser.parse_args()

try:
    asyncio.run(main(debug=args.debug))
except KeyboardInterrupt:
    pass
