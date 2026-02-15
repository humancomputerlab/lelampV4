#!/bin/bash
#
# LeLamp Space Invaders - one script for both Pi and laptop
#
# Usage:
#   bash run_game.sh           # with hardware (Pi)
#   bash run_game.sh --debug   # no hardware needed (Pi)
#

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo ""
echo "Are you running this on the Pi or your laptop?"
echo "  1) Raspberry Pi  (starts the bridge server)"
echo "  2) Laptop        (starts the game frontend)"
echo ""
read -p "Enter 1 or 2: " choice

case "$choice" in
    1)
        echo "Installing Python dependencies..."
        cd "$SCRIPT_DIR"
        uv sync

        echo ""
        echo "Did you SSH in with port forwarding?"
        echo "  ssh -L 8765:localhost:8765 <user>@<pi-address>"
        echo ""
        read -p "Continue? (y/n): " confirm
        if [[ "$confirm" != [Yy]* ]]; then
            echo "SSH in with the command above first, then re-run this script."
            exit 0
        fi

        echo ""
        echo "Starting bridge server on ws://localhost:8765 ..."
        echo "Now run this same script on your laptop."
        echo ""

        cd "$SCRIPT_DIR"
        uv run python -m bridge.server "$@"
        ;;
    2)
        if ! command -v node &>/dev/null; then
            echo "Node.js not found. Install it first:"
            echo "  https://nodejs.org"
            exit 1
        fi

        echo "Installing game dependencies..."
        cd "$SCRIPT_DIR/game"
        npm install

        echo ""
        echo "Make sure you also have another terminal SSH'd with port forwarding:"
        echo "  ssh -L 8765:localhost:8765 <user>@<pi-address>"
        echo ""
        echo "Starting game at http://localhost:5173 ..."
        echo ""

        cd "$SCRIPT_DIR/game"
        npm run dev
        ;;
    *)
        echo "Invalid choice. Enter 1 or 2."
        exit 1
        ;;
esac
