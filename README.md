## Installation guidance
#### 1. Pull the code
 - Run `git clone https://github.com/humancomputerlab/lelampV4.git`
 - `cd lelampV4/`
#### 2. Install packages

- `bash install.sh`
- Follow the instructions until ID motors.

#### 3. Id motors

 - Follow the instruction, connect and id the motors one by one. 
 - **Must be one at a time**

#### 4. Assemble

- Connect all the motors and make sure all the motors are back to zero position
- Assemble everything
- Continue the script to generate `lelamp.json` calibration file

#### 5. Config API key

 - Use `export` or `.env` to set `OPENAI_API_KEY`

#### 6. Run

 - `uv run main.py`