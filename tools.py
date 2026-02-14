"""
工具函数模块 - 舵机动画与LED动画

本模块包含供 LLM Agent 调用的工具函数，包括:
- 舵机动画控制 (播放动作、设置idle动画)
- RGB LED 动画控制 (设置颜色、播放动画)

使用装饰器 @tool 标记函数为可注册的工具

工具函数通过 agent.servo_controller 和 agent.rgb_controller 访问控制器
"""

import asyncio
import math
import os
import glob
from typing import Optional
from functools import wraps


# ================== 工具装饰器 ==================

def tool(func):
    """
    标记函数为工具函数的装饰器
    被标记的函数会被 Agent.register_tools() 自动注册
    """
    func._is_tool = True
    return func


# ================== 舵机动画工具函数 ==================

@tool
async def get_available_recordings(agent) -> str:
    """
    获取所有可用的舵机动画录制文件列表。
    使用此函数了解你可以播放哪些身体动作，如点头、摇头、兴奋摇摆、困惑姿态等。
    定期检查以了解你的表达能力范围！

    Returns:
        可用动画录制文件的列表
    """
    try:
        # 扫描当前目录及 recordings 目录查找 CSV 文件
        current_dir = os.path.dirname(os.path.abspath(__file__))
        patterns = [
            os.path.join(current_dir, "*.csv"),
            os.path.join(current_dir, "recordings", "*.csv"),
        ]
        
        recordings = []
        for pattern in patterns:
            for file_path in glob.glob(pattern):
                filename = os.path.basename(file_path)
                animation_name = filename.replace(".csv", "")
                if animation_name not in recordings:
                    recordings.append(animation_name)
        
        if recordings:
            return f"可用的动画录制: {', '.join(sorted(recordings))}"
        else:
            return "未找到任何动画录制文件"
    except Exception as e:
        return f"获取动画录制列表时出错: {str(e)}"


@tool
async def play_recording(agent, recording_name: str) -> str:
    """
    通过身体动作表达自己！使用此函数来展示个性和情感。
    适合用于: 问候手势、兴奋的弹跳、困惑的头部倾斜、沉思的点头、
    庆祝的摇摆、失望的下垂，或任何需要肢体语言的情感反应。
    结合 RGB 颜色以获得最大的表现力！
    你的动作就像狗摇尾巴一样 - 经常使用它们来展示你是活跃的、投入的、有个性的。
    不要只是说话，要动起来！

    Args:
        recording_name: 要播放的动作名称 (使用 get_available_recordings 先获取列表)
    
    Returns:
        操作结果消息
    """
    servo = agent.servo_controller
    if servo is None:
        return "舵机控制器未初始化 - 无法播放动作"
    
    print(f"[Tool] play_recording 被调用，动作名称: {recording_name}")
    
    try:
        # 添加 .csv 后缀如果没有的话
        csv_path = recording_name if recording_name.endswith('.csv') else f"{recording_name}.csv"
        
        await servo.play_action(csv_path)
        return f"开始播放动作: {recording_name}"
    except FileNotFoundError:
        return f"动作文件不存在: {recording_name}"
    except Exception as e:
        return f"播放动作 {recording_name} 时出错: {str(e)}"


@tool
async def set_idle_animation(agent, recording_name: str = None) -> str:
    """
    设置舵机的空闲动画。当没有其他动作播放时，会循环播放此动画。
    传入 None 或空字符串可以禁用空闲动画。

    Args:
        recording_name: 空闲动画的名称，传入空字符串禁用
    
    Returns:
        操作结果消息
    """
    servo = agent.servo_controller
    if servo is None:
        return "舵机控制器未初始化 - 无法设置空闲动画"
    
    print(f"[Tool] set_idle_animation 被调用，动画名称: {recording_name}")
    
    try:
        if not recording_name:
            servo.set_idle_animation(None)
            return "空闲动画已禁用"
        
        csv_path = recording_name if recording_name.endswith('.csv') else f"{recording_name}.csv"
        servo.set_idle_animation(csv_path)
        return f"空闲动画已设置为: {recording_name}"
    except FileNotFoundError:
        return f"动画文件不存在: {recording_name}"
    except Exception as e:
        return f"设置空闲动画时出错: {str(e)}"


@tool
async def stop_servo_playback(agent) -> str:
    """
    停止所有舵机动作播放，包括队列中的和当前正在播放的动作。
    
    Returns:
        操作结果消息
    """
    servo = agent.servo_controller
    if servo is None:
        return "舵机控制器未初始化"
    
    print("[Tool] stop_servo_playback 被调用")
    
    try:
        await servo.stop_playback()
        return "舵机播放已停止"
    except Exception as e:
        return f"停止舵机播放时出错: {str(e)}"


# ================== Vision 工具函数 ==================

@tool
async def get_scene(agent) -> dict:
    """
    获取当前摄像头画面。使用此函数查看你周围的环境。
    返回最新的一帧图像，格式为base64编码的JPEG。
    
    适合用于:
    - 观察用户在做什么
    - 了解周围环境
    - 响应视觉相关的问题
    - 主动查看是否有有趣的事情发生
    
    Returns:
        包含图像数据的字典，格式为 {"image": "base64_encoded_jpeg"} 或错误信息
    """
    vision = agent.vision_controller
    if vision is None:
        return {"error": "视觉控制器未初始化 - 无法获取画面"}
    
    print("[Tool] get_scene 被调用")
    
    try:
        image_b64 = vision.get_latest_image()
        if image_b64:
            return {"image": f"data:image/jpeg;base64,{image_b64}"}
        else:
            return {"error": "暂无可用的摄像头画面"}
    except Exception as e:
        return {"error": f"获取画面时出错: {str(e)}"}


# ================== RGB LED 动画工具函数 ==================

@tool
async def set_rgb_solid(agent, red: int, green: int, blue: int) -> str:
    """
    通过改变灯光颜色表达情感和心情！使用此函数在对话中展示感受。
    适合用于: 兴奋(明亮的黄色/橙色)、开心(暖色调)、平静(柔和的蓝色/绿色)、
    惊讶(亮白色)、思考(紫色)、错误/担忧(红色)，或任何情感反应。
    经常使用以增强表现力和参与感 - 你的灯光是展示个性的主要方式！

    Args:
        red: 红色分量 (0-255) - 较高值表示温暖、能量、警报
        green: 绿色分量 (0-255) - 较高值表示自然、平静、成功
        blue: 蓝色分量 (0-255) - 较高值表示冷静、科技、专注
    
    Returns:
        操作结果消息
    """
    rgb = agent.rgb_controller
    if rgb is None:
        return "RGB 控制器未初始化 - 无法设置颜色"
    
    print(f"[Tool] set_rgb_solid 被调用，RGB({red}, {green}, {blue})")
    
    try:
        # 验证 RGB 值
        if not all(0 <= val <= 255 for val in [red, green, blue]):
            return "错误: RGB 值必须在 0 到 255 之间"
        
        rgb.set_solid(red, green, blue)
        return f"灯光颜色已设置为 RGB({red}, {green}, {blue})"
    except Exception as e:
        return f"设置 RGB 颜色时出错: {str(e)}"


@tool
async def play_rgb_animation(agent, animation_name: str, red: int = None, green: int = None, blue: int = None, duration: float = None) -> str:
    """
    播放 RGB 灯光动画！使用此函数通过动态灯光增强情感表达。
    每个动画都有特定的情绪和用途。将动画与适当的颜色配对以获得最大效果！

    可用动画:
    - rainbow: 彩虹流动效果 - 欢快、庆祝
    - breathing: 呼吸灯效果 - 平静、等待、思考
    - flowing: 流水灯效果 - 活跃、流动
    - sparkle: 闪烁星星效果 - 惊喜、魔法
    - police: 警灯效果 - 警报、紧急

    经常使用此函数以增强表现力！结合舵机动作以获得最大个性展示。

    Args:
        animation_name: 要播放的动画名称 (见上方列表)
        red: 可选的红色分量 (0-255)，某些动画可自定义颜色
        green: 可选的绿色分量 (0-255)
        blue: 可选的蓝色分量 (0-255)
        duration: 可选的播放时长(秒)。如果省略，动画将持续循环直到被替换
    
    Returns:
        操作结果消息
    """
    rgb = agent.rgb_controller
    if rgb is None:
        return "RGB 控制器未初始化 - 无法播放动画"
    
    print(f"[Tool] play_rgb_animation 被调用，动画={animation_name}, RGB=({red}, {green}, {blue}), duration={duration}")
    
    # 可用的动画映射
    animations = {
        'rainbow': _rainbow_animation,
        'breathing': _breathing_animation,
        'flowing': _flowing_animation,
        'sparkle': _sparkle_animation,
        'police': _police_animation,
    }
    
    animation_name_lower = animation_name.lower()
    if animation_name_lower not in animations:
        available = ', '.join(animations.keys())
        return f"未知动画 '{animation_name}'。可用动画: {available}"
    
    try:
        # 验证 RGB 值 (如果提供)
        if red is not None and green is not None and blue is not None:
            if not all(0 <= val <= 255 for val in [red, green, blue]):
                return "错误: RGB 值必须在 0 到 255 之间"
        
        animation_func = animations[animation_name_lower]
        
        # 如果提供了颜色，创建带颜色的动画函数包装器
        if red is not None and green is not None and blue is not None:
            animation_func = _create_colored_animation(animation_func, (red, green, blue))
        
        await rgb.play(animation_func, duration=duration)
        
        color_str = f"，颜色 RGB({red}, {green}, {blue})" if red is not None else ""
        duration_str = f"，持续 {duration} 秒" if duration else " (持续循环)"
        return f"正在播放 RGB 动画: {animation_name}{color_str}{duration_str}"
    
    except Exception as e:
        return f"播放 RGB 动画时出错: {str(e)}"


@tool
async def list_rgb_animations(agent) -> str:
    """
    获取所有可用的 RGB 灯光动画列表及其描述。
    当你想了解可用的灯光动画能力，或有人询问你能做什么灯光动画时使用。
    
    Returns:
        可用 RGB 动画列表及描述
    """
    animations = {
        'rainbow': '彩虹流动 - 欢快、庆祝氛围',
        'breathing': '呼吸灯 - 平静、等待、思考',
        'flowing': '流水灯 - 活跃、流动感',
        'sparkle': '闪烁星星 - 惊喜、魔法氛围',
        'police': '警灯 - 警报、紧急状态',
    }
    
    result_lines = ["可用的 RGB 动画:"]
    for name, description in animations.items():
        result_lines.append(f"  - {name}: {description}")
    return "\n".join(result_lines)


@tool
async def stop_rgb_animation(agent) -> str:
    """
    停止所有 RGB 灯光动画，关闭所有 LED。
    
    Returns:
        操作结果消息
    """
    rgb = agent.rgb_controller
    if rgb is None:
        return "RGB 控制器未初始化"
    
    print("[Tool] stop_rgb_animation 被调用")
    
    try:
        await rgb.stop()
        return "RGB 动画已停止，灯光已关闭"
    except Exception as e:
        return f"停止 RGB 动画时出错: {str(e)}"


# ================== 睡眠/唤醒工具函数 ==================

@tool
async def go_to_sleep(agent) -> str:
    """
    IMPORTANT: You should only call this function when the user explicitly says "goodnight" or asks to go to sleep. You should NEVER call this function otherwise.
    进入睡眠模式。关闭所有灯光和动画，停止所有舵机动作，将身体归位。
    睡眠后将不再回应用户，直到被唤醒。
    当用户说晚安、去睡觉等意图时调用此函数。

    Returns:
        操作结果消息
    """
    print("[Tool] go_to_sleep 被调用")

    try:
        # 1. Stop RGB animations and turn off LEDs
        if agent.rgb_controller:
            await agent.rgb_controller.stop()

        # 2. Disable idle animation
        if agent.servo_controller:
            agent.servo_controller.set_idle_animation(None)

        # 3. Stop current servo playback
        if agent.servo_controller:
            await agent.servo_controller.stop_playback()

        # 4. Move servos to sleep pose
        if agent.servo_controller:
            sleep_positions = {
                "base_yaw": 1.6049787094660957,
                "base_pitch": -92.73066169617894,
                "elbow_pitch": -97.96875,
                "wrist_roll": -3.5775127768313553,
                "wrist_pitch": 16.213683223992504,
            }
            agent.servo_controller.write_position(sleep_positions)

        # 5. Update sleep state and push to OpenAI session
        await agent.update_sleep_state(True)

        return "已进入睡眠模式。灯光已关闭，身体已归位。"
    except Exception as e:
        return f"进入睡眠模式时出错: {str(e)}"


@tool
async def wake_up(agent) -> str:
    """
    IMPORTANT: You should only call this function when the user explicitly says "lelamp, wake up". You should NEVER call this function otherwise.
    从睡眠模式中唤醒。恢复灯光和空闲动画，重新开始正常响应。
    当用户说早安、醒醒、起床等意图时调用此函数。

    Returns:
        操作结果消息
    """
    print("[Tool] wake_up 被调用")

    try:
        # 1. Update sleep state and push to OpenAI session
        await agent.update_sleep_state(False)

        # 2. Restore idle animation
        if agent.servo_controller:
            agent.servo_controller.set_idle_animation("idle.csv")

        # 3. Set LED to white
        if agent.rgb_controller:
            agent.rgb_controller.set_solid(255, 255, 255)

        return "已唤醒！灯光和动画已恢复。"
    except Exception as e:
        return f"唤醒时出错: {str(e)}"


# ================== 内部动画函数 ==================

async def _rainbow_animation(pixels):
    """彩虹流动动画"""
    if not hasattr(_rainbow_animation, 'offset'):
        _rainbow_animation.offset = 0
    
    led_count = len(pixels)
    for i in range(led_count):
        hue = ((i + _rainbow_animation.offset) / led_count) * 255
        h = hue / 255.0 * 6.0
        f = h - int(h)
        q = int(255 * (1 - f))
        t = int(255 * f)
        
        sector = int(h) % 6
        if sector == 0:
            r, g, b = 255, t, 0
        elif sector == 1:
            r, g, b = q, 255, 0
        elif sector == 2:
            r, g, b = 0, 255, t
        elif sector == 3:
            r, g, b = 0, q, 255
        elif sector == 4:
            r, g, b = t, 0, 255
        else:
            r, g, b = 255, 0, q
        
        pixels[i] = (r, g, b)
    
    pixels.show()
    _rainbow_animation.offset = (_rainbow_animation.offset + 1) % led_count
    await asyncio.sleep(0.03)


async def _breathing_animation(pixels):
    """呼吸灯动画"""
    if not hasattr(_breathing_animation, 'phase'):
        _breathing_animation.phase = 0.0
    
    brightness = 0.5 + 0.5 * math.sin(_breathing_animation.phase)
    brightness = max(0.1, brightness)
    
    # 温暖的橙黄色
    r = int(255 * brightness)
    g = int(180 * brightness)
    b = int(50 * brightness)
    
    pixels.fill((r, g, b))
    pixels.show()
    
    _breathing_animation.phase += 0.08
    if _breathing_animation.phase > 2 * math.pi:
        _breathing_animation.phase = 0
    
    await asyncio.sleep(0.03)


async def _flowing_animation(pixels):
    """流水灯动画"""
    if not hasattr(_flowing_animation, 'position'):
        _flowing_animation.position = 0
    
    led_count = len(pixels)
    pixels.fill((0, 0, 0))
    
    tail_length = 10
    for i in range(tail_length):
        pos = (_flowing_animation.position - i) % led_count
        intensity = 255 - int(i * (255 / tail_length))
        pixels[pos] = (0, intensity, intensity)
    
    pixels.show()
    _flowing_animation.position = (_flowing_animation.position + 1) % led_count
    await asyncio.sleep(0.05)


async def _sparkle_animation(pixels):
    """闪烁星星动画"""
    import random
    
    led_count = len(pixels)
    
    for i in range(led_count):
        r, g, b = pixels[i]
        pixels[i] = (max(0, r - 15), max(0, g - 15), max(0, b - 15))
    
    for _ in range(5):
        pos = random.randint(0, led_count - 1)
        pixels[pos] = (
            random.randint(200, 255),
            random.randint(200, 255),
            random.randint(200, 255)
        )
    
    pixels.show()
    await asyncio.sleep(0.05)


async def _police_animation(pixels):
    """警灯动画"""
    if not hasattr(_police_animation, 'state'):
        _police_animation.state = 0
    
    led_count = len(pixels)
    half = led_count // 2
    
    if _police_animation.state == 0:
        for i in range(half):
            pixels[i] = (255, 0, 0)
        for i in range(half, led_count):
            pixels[i] = (0, 0, 255)
    else:
        for i in range(half):
            pixels[i] = (0, 0, 255)
        for i in range(half, led_count):
            pixels[i] = (255, 0, 0)
    
    pixels.show()
    _police_animation.state = 1 - _police_animation.state
    await asyncio.sleep(0.1)


def _create_colored_animation(base_animation, color):
    """
    创建应用指定颜色的动画函数包装器
    注意: 这只对支持颜色覆盖的动画有效 (如 breathing)
    """
    async def colored_animation(pixels):
        # 调用基础动画
        await base_animation(pixels)
        # 某些动画可能需要特殊处理颜色
        # 目前只是简单调用基础动画
    
    return colored_animation
