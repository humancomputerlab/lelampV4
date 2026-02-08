#!/bin/bash
#
# LeLamp Installation Script
# One-click setup for LeLamp project on Raspberry Pi
#
# This script:
#   1. Installs system dependencies
#   2. Installs UV package manager
#   3. Sets up Python environment
#   4. Configures udev rules for /dev/lelamp
#   5. Assigns servo motor IDs (interactive)
#   6. Runs servo calibration
#
# Usage:
#   ./install.sh              # Full interactive installation
#   ./install.sh -y           # Non-interactive mode (skip confirmations)
#   ./install.sh --help       # Show help
#

set -e

# ============================================
# Color Definitions
# ============================================
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# ============================================
# Helper Functions
# ============================================
print_header() {
    echo -e "\n${BLUE}============================================${NC}"
    echo -e "${BLUE}$1${NC}"
    echo -e "${BLUE}============================================${NC}\n"
}

print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

print_info() {
    echo -e "${BLUE}→ $1${NC}"
}

# Setup input device for interactive mode
setup_input_device() {
    if [ -t 0 ]; then
        export INPUT_DEVICE="/dev/stdin"
    elif [ -e /dev/tty ]; then
        export INPUT_DEVICE="/dev/tty"
    else
        export INPUT_DEVICE="/dev/stdin"
        print_warning "Running in non-interactive mode"
    fi
}

# Ask yes/no question with default
ask_yes_no() {
    local question="$1"
    local default="${2:-n}"
    local prompt

    if [ "$default" = "y" ] || [ "$default" = "Y" ]; then
        prompt="[Y/n]"
    else
        prompt="[y/N]"
    fi

    read -p "$question $prompt: " response < "$INPUT_DEVICE"

    if [ -z "$response" ]; then
        response="$default"
    fi

    case "$response" in
        [Yy]*) return 0 ;;
        *) return 1 ;;
    esac
}

# Check if a command exists
command_exists() {
    command -v "$1" &> /dev/null
}

# ============================================
# Script Variables
# ============================================
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SKIP_CONFIRM=false

# Motor configuration
MOTORS=(
    "1:base_yaw"
    "2:base_pitch"
    "3:elbow_pitch"
    "4:wrist_roll"
    "5:wrist_pitch"
)

# ============================================
# Parse Arguments
# ============================================
show_help() {
    echo "LeLamp Installation Script"
    echo ""
    echo "Usage: $0 [OPTIONS]"
    echo ""
    echo "Options:"
    echo "  -y, --yes        Skip confirmation prompts"
    echo "  -h, --help       Show this help message"
    echo ""
    echo "Steps performed:"
    echo "  1. Install system dependencies"
    echo "  2. Install UV package manager"
    echo "  3. Setup Python environment (uv sync)"
    echo "  4. Configure udev rules (/dev/lelamp)"
    echo "  5. Assign servo motor IDs (1-5)"
    echo "  6. Run servo calibration"
    echo ""
}

parse_args() {
    while [[ $# -gt 0 ]]; do
        case $1 in
            -y|--yes|--skip-confirm)
                SKIP_CONFIRM=true
                shift
                ;;
            -h|--help)
                show_help
                exit 0
                ;;
            *)
                shift
                ;;
        esac
    done
}

# ============================================
# Step 1: Install System Dependencies
# ============================================
install_dependencies() {
    print_header "Step 1: Installing System Dependencies"

    if [ "$SKIP_CONFIRM" != "true" ]; then
        if ! ask_yes_no "Install system packages?" "y"; then
            print_info "Skipping dependency installation"
            return 0
        fi
    fi

    print_info "Updating package lists..."
    sudo apt-get update

    print_info "Installing portaudio19-dev for audio support..."
    sudo apt-get install -y portaudio19-dev

    print_info "Installing audio tools (sox, mpg123)..."
    sudo apt-get install -y sox libsox-fmt-mp3 mpg123 alsa-utils

    print_info "Installing pipewire for audio streaming..."
    sudo apt-get install -y pipewire pipewire-alsa pipewire-pulse

    print_info "Installing build essentials..."
    sudo apt-get install -y build-essential python3-dev

    print_info "Installing i2c-tools..."
    sudo apt-get install -y i2c-tools

    print_info "Installing swig for Python bindings..."
    sudo apt-get install -y swig

    print_info "Installing lgpio library for GPIO access..."
    sudo apt-get install -y liblgpio-dev

    print_info "Installing curl..."
    sudo apt-get install -y curl

    # Add user to dialout group for serial port access
    print_info "Adding user to dialout group..."
    sudo usermod -a -G dialout "$USER"

    print_success "System dependencies installed"
}

# ============================================
# Step 2: Install UV Package Manager
# ============================================
install_uv() {
    print_header "Step 2: Installing UV Package Manager"

    # Check if already installed
    if command_exists uv; then
        local version
        version=$(uv --version 2>/dev/null | head -1)
        print_success "UV is already installed: $version"

        if [ "$SKIP_CONFIRM" != "true" ]; then
            if ! ask_yes_no "Reinstall UV?" "n"; then
                return 0
            fi
        else
            return 0
        fi
    fi

    print_info "Downloading and installing UV..."

    # Download UV installer
    if ! curl -LsSf https://astral.sh/uv/install.sh -o /tmp/uv-install.sh 2>/dev/null; then
        print_warning "Primary URL failed, trying GitHub URL..."
        if ! curl -LsSf https://github.com/astral-sh/uv/releases/latest/download/uv-installer.sh -o /tmp/uv-install.sh; then
            print_error "Failed to download UV installer"
            return 1
        fi
    fi

    # Install UV to /usr/local/bin for system-wide access
    print_info "Installing UV to /usr/local/bin..."
    sudo UV_INSTALL_DIR=/usr/local/bin sh /tmp/uv-install.sh
    rm -f /tmp/uv-install.sh

    if [ ! -f "/usr/local/bin/uv" ]; then
        print_error "UV installation failed"
        return 1
    fi

    print_success "UV installed successfully"
    uv --version
}

# ============================================
# Step 3: Setup Python Environment
# ============================================
setup_python() {
    print_header "Step 3: Setting Up Python Environment"

    cd "$SCRIPT_DIR"

    if [ ! -f "pyproject.toml" ]; then
        print_error "pyproject.toml not found in $SCRIPT_DIR"
        return 1
    fi

    print_info "Installing Python dependencies with uv sync..."
    print_warning "This may take several minutes on Raspberry Pi..."

    # Skip Git LFS downloads for lerobot test assets
    export GIT_LFS_SKIP_SMUDGE=1

    uv sync

    print_success "Python environment setup complete"
}

# ============================================
# Step 4: Configure Udev Rules
# ============================================
setup_udev() {
    print_header "Step 4: Configuring Udev Rules"

    if [ "$SKIP_CONFIRM" != "true" ]; then
        echo "This creates a persistent /dev/lelamp symlink for your motor controller."
        echo ""
        print_warning "Please plug in your Waveshare Servo Bus Adapter now"
        echo ""
        if ! ask_yes_no "Setup udev rules for motor controller?" "y"; then
            print_info "Skipping udev setup"
            return 0
        fi
    fi

    # Try to detect serial number
    local serial_number=""

    while true; do
        # Attempt auto-detection (Vendor: 1a86, Product: 55d3)
        local detected_serial
        detected_serial=$(usb-devices 2>/dev/null | tr -d '\0' | grep -A 10 "Vendor=1a86 ProdID=55d3" | grep "SerialNumber=" | sed 's/.*SerialNumber=//' | head -1)

        if [ -n "$detected_serial" ]; then
            echo ""
            print_success "Waveshare USB Servo Bus Adapter Found!"
            print_info "SerialNumber: $detected_serial"

            if [ "$SKIP_CONFIRM" = "true" ]; then
                serial_number="$detected_serial"
                break
            fi

            echo ""
            if ask_yes_no "Use this device?" "y"; then
                serial_number="$detected_serial"
                break
            fi
        else
            echo ""
            print_warning "Waveshare USB Servo Bus Adapter not detected"

            if [ "$SKIP_CONFIRM" = "true" ]; then
                print_info "No device found, skipping udev rules"
                return 0
            fi
        fi

        echo ""
        echo "  1) Search again"
        echo "  2) Manual entry"
        echo "  3) Skip"
        echo ""
        read -p "Enter choice [1-3]: " search_choice < "$INPUT_DEVICE"

        case $search_choice in
            1)
                print_info "Searching for device..."
                ;;
            2)
                read -p "Enter SerialNumber: " serial_number < "$INPUT_DEVICE"
                if [ -n "$serial_number" ]; then
                    break
                fi
                ;;
            3|*)
                print_info "Skipping udev rules setup"
                return 0
                ;;
        esac
    done

    # Create udev rule
    UDEV_RULE_FILE="/etc/udev/rules.d/99-lelamp.rules"
    print_info "Creating udev rule at $UDEV_RULE_FILE..."

    if echo "SUBSYSTEM==\"tty\", ATTRS{idVendor}==\"1a86\", ATTRS{idProduct}==\"55d3\", ATTRS{serial}==\"$serial_number\", MODE=\"0660\", GROUP=\"dialout\", SYMLINK+=\"lelamp\"" | sudo tee $UDEV_RULE_FILE > /dev/null; then
        print_success "Udev rule created successfully"
    else
        print_error "Failed to create udev rule"
        return 1
    fi

    # Reload udev rules
    print_info "Reloading udev rules..."
    sudo udevadm control --reload-rules
    sudo udevadm trigger

    print_success "Udev rules configured - /dev/lelamp will be available after reboot"
}

# ============================================
# Step 5: Assign Servo Motor IDs
# ============================================
assign_motor_ids() {
    print_header "Step 5: Assigning Servo Motor IDs"

    if [ "$SKIP_CONFIRM" != "true" ]; then
        echo "This will assign IDs 1-5 to your servo motors."
        echo ""
        echo -e "${YELLOW}════════════════════════════════════════════════════════════════${NC}"
        echo -e "${YELLOW}  ⚡ IMPORTANT: Motor Controller Power Required ⚡${NC}"
        echo -e "${YELLOW}════════════════════════════════════════════════════════════════${NC}"
        echo ""
        echo "  The motor controller needs BOTH:"
        echo "    1. USB cable connected to Raspberry Pi"
        echo "    2. External power supply (7.4V or 12V)"
        echo ""
        echo "  Without external power, motors will NOT be detected!"
        echo ""
        echo -e "${YELLOW}════════════════════════════════════════════════════════════════${NC}"
        echo ""

        if ! ask_yes_no "Continue with motor ID setup?" "y"; then
            print_info "Skipping motor ID setup"
            return 0
        fi
    else
        print_info "Skipping motor ID setup in non-interactive mode"
        return 0
    fi

    # Determine port
    local port="/dev/lelamp"
    if [ ! -e "$port" ]; then
        print_warning "/dev/lelamp not found, trying to detect port..."
        # Try to find the port using lerobot
        port=$(uv run lerobot-find-port 2>/dev/null | grep -oP '/dev/tty\w+' | head -1) || true
        if [ -z "$port" ]; then
            print_error "Could not detect motor port"
            print_info "Please ensure the motor controller is connected and powered"
            return 1
        fi
        print_info "Using port: $port"
    fi

    cd "$SCRIPT_DIR"

    # ID each motor one by one
    for motor_entry in "${MOTORS[@]}"; do
        local motor_id="${motor_entry%%:*}"
        local motor_name="${motor_entry##*:}"

        echo ""
        echo -e "${YELLOW}════════════════════════════════════════════════════════════════${NC}"
        echo -e "${YELLOW}  Motor ID $motor_id: $motor_name${NC}"
        echo -e "${YELLOW}════════════════════════════════════════════════════════════════${NC}"
        echo ""
        echo "  1. Disconnect ALL other motors from the bus"
        echo "  2. Connect ONLY the motor for $motor_name"
        echo "  3. Power the motor controller"
        echo ""

        if ! ask_yes_no "Is only the $motor_name motor connected?" "y"; then
            print_info "Skipping motor $motor_id ($motor_name)"
            continue
        fi

        print_info "Assigning ID $motor_id to $motor_name..."

        # Use Python to assign motor ID
        if uv run python -c "
from lerobot.motors.feetech import FeetechMotorsBus
from scservo_sdk import PacketHandler, PortHandler

port_handler = PortHandler('$port')
if not port_handler.openPort():
    print('Failed to open port')
    exit(1)

port_handler.setBaudRate(1000000)
packet_handler = PacketHandler(0)

# Broadcast ping to find any motor
result = []
for test_id in range(1, 254):
    model, comm, error = packet_handler.ping(port_handler, test_id)
    if comm == 0:
        result.append(test_id)
        break

if not result:
    print('No motor found on bus')
    exit(1)

current_id = result[0]
print(f'Found motor at ID {current_id}')

if current_id != $motor_id:
    # Change ID (address 5, 1 byte)
    comm_result, error = packet_handler.write1ByteTxRx(port_handler, current_id, 5, $motor_id)
    if comm_result != 0:
        print(f'Failed to change ID: {comm_result}')
        exit(1)
    print(f'Changed motor ID from {current_id} to $motor_id')
else:
    print(f'Motor already has ID $motor_id')

port_handler.closePort()
print('Success!')
" 2>&1; then
            print_success "Motor $motor_id ($motor_name) configured"
        else
            print_error "Failed to configure motor $motor_id ($motor_name)"
            if ! ask_yes_no "Continue with remaining motors?" "y"; then
                return 1
            fi
        fi
    done

    print_success "Motor ID assignment complete"
}

# ============================================
# Step 6: Run Servo Calibration
# ============================================
run_calibration() {
    print_header "Step 6: Running Servo Calibration"

    cd "$SCRIPT_DIR"

    if [ ! -f "calibrate_servo.py" ]; then
        print_error "calibrate_servo.py not found in $SCRIPT_DIR"
        return 1
    fi

    if [ "$SKIP_CONFIRM" != "true" ]; then
        echo "This will run the interactive servo calibration."
        echo ""
        echo "  1. The script will reset all servos to center position"
        echo "  2. You will position the arm at its neutral position"
        echo "  3. You will move each joint through its full range"
        echo "  4. Calibration will be saved to ~/.lelamp/calibration/config.yaml"
        echo ""

        if ! ask_yes_no "Run servo calibration now?" "y"; then
            print_info "Skipping calibration"
            print_info "You can run it later with: uv run python calibrate_servo.py"
            return 0
        fi
    else
        print_info "Skipping calibration in non-interactive mode"
        print_info "Run manually later: uv run python calibrate_servo.py"
        return 0
    fi

    print_info "Starting calibration..."
    uv run python calibrate_servo.py

    print_success "Calibration complete"
}

# ============================================
# Final Instructions
# ============================================
print_final_instructions() {
    print_header "Installation Complete!"

    print_success "LeLamp has been installed successfully"

    echo -e "\n${GREEN}Installation Summary:${NC}"
    echo "  - Installation Directory: $SCRIPT_DIR"
    echo "  - Python Environment: $SCRIPT_DIR/.venv"
    echo "  - Calibration File: ~/.lelamp/calibration/config.yaml"

    echo -e "\n${YELLOW}Next Steps:${NC}"
    echo "  1. Reboot your system: sudo reboot"
    echo "  2. After reboot, verify /dev/lelamp exists"
    echo "  3. Run the main program: uv run python main.py"

    echo -e "\n${BLUE}Useful Commands:${NC}"
    echo "  - Re-run calibration: uv run python calibrate_servo.py"
    echo "  - Test servos: uv run python test.py"

    echo ""
}

# ============================================
# Main
# ============================================
main() {
    print_header "LeLamp Installation"
    echo "This script will set up LeLamp on your Raspberry Pi"
    echo ""

    # Initialize
    setup_input_device
    parse_args "$@"

    # Step 1: System dependencies
    install_dependencies

    # Step 2: UV package manager
    install_uv

    # Step 3: Python environment
    setup_python

    # Step 4: Udev rules
    setup_udev

    # Step 5: Motor ID assignment
    assign_motor_ids

    # Step 6: Calibration
    run_calibration

    # Done!
    print_final_instructions
}

# Run main with all arguments
main "$@"
