import os
from PIL import Image, ImageDraw
import numpy as np

THUMBS_DIR = 'frontend/public/assets/vehicles/thumbs'
os.makedirs(THUMBS_DIR, exist_ok=True)

# Helper to create transparent 48x48 image
def make_thumb():
    return Image.new('RGBA', (48, 48), (0, 0, 0, 0))

# Load car parts from CustomizableCarsDemo.png
src_path = 'temp_inspect/cars/CustomizableCarsDemo/CustomizableCarsDemo.png'
demo_img = Image.open(src_path)

# 1. CHASSIS THUMBNAILS
# chassis_sports (Red Sports GT)
t_sports = demo_img.crop((4, 321, 62, 321 + 42)).resize((44, 32), Image.Resampling.NEAREST)
th = make_thumb()
th.paste(t_sports, (2, 8), t_sports)
th.save(os.path.join(THUMBS_DIR, 'chassis_sports.png'))

# chassis_muscle (Blue Muscle Car)
t_muscle = demo_img.crop((4, 227, 62, 227 + 42)).resize((44, 32), Image.Resampling.NEAREST)
th = make_thumb()
th.paste(t_muscle, (2, 8), t_muscle)
th.save(os.path.join(THUMBS_DIR, 'chassis_muscle.png'))

# chassis_pickup (Orange Pickup)
t_pickup = demo_img.crop((4, 412, 62, 412 + 42)).resize((44, 32), Image.Resampling.NEAREST)
th = make_thumb()
th.paste(t_pickup, (2, 8), t_pickup)
th.save(os.path.join(THUMBS_DIR, 'chassis_pickup.png'))

# chassis_rover (Martian Rover Chassis)
th = make_thumb()
draw = ImageDraw.Draw(th)
# Chassis body
draw.polygon([(4, 28), (14, 18), (34, 18), (44, 24), (44, 32), (4, 32)], fill='#CC6600', outline='#111111', width=1)
draw.rectangle([16, 20, 32, 26], fill='#FF9933')
draw.ellipse([8, 26, 14, 30], fill='#00F0FF')
th.save(os.path.join(THUMBS_DIR, 'chassis_rover.png'))

# chassis_tank (Armored Tank Chassis)
th = make_thumb()
draw = ImageDraw.Draw(th)
draw.polygon([(4, 30), (10, 20), (38, 20), (44, 30)], fill='#4B5320', outline='#111111', width=1)
draw.rectangle([14, 16, 34, 20], fill='#5C6626', outline='#111111', width=1)
th.save(os.path.join(THUMBS_DIR, 'chassis_tank.png'))

# chassis_hover (Sci-Fi Hovercraft Chassis)
th = make_thumb()
draw = ImageDraw.Draw(th)
draw.polygon([(4, 26), (12, 16), (36, 16), (44, 26), (40, 32), (8, 32)], fill='#007799', outline='#00F0FF', width=1)
draw.line([(10, 32), (38, 32)], fill='#00F0FF', width=2)
th.save(os.path.join(THUMBS_DIR, 'chassis_hover.png'))


# 2. WHEELS THUMBNAILS
# wheels_sports: 5-spoke alloy racing wheel
th = make_thumb()
draw = ImageDraw.Draw(th)
# Dual wheels preview
for cx in [16, 32]:
    draw.ellipse([cx-10, 24-10, cx+10, 24+10], fill='#1E2022', outline='#000', width=1)
    draw.ellipse([cx-7, 24-7, cx+7, 24+7], fill='#D4D4D8', outline='#3F3F46', width=1)
    draw.line([cx, 24-6, cx, 24+6], fill='#18181B', width=2)
    draw.line([cx-5, 24-3, cx+5, 24+3], fill='#18181B', width=2)
    draw.line([cx-5, 24+3, cx+5, 24-3], fill='#18181B', width=2)
    draw.ellipse([cx-2, 24-2, cx+2, 24+2], fill='#DC2626')
th.save(os.path.join(THUMBS_DIR, 'wheels_sports.png'))

# wheels_offroad: Rugged beadlock tire
th = make_thumb()
draw = ImageDraw.Draw(th)
for cx in [16, 32]:
    draw.ellipse([cx-11, 24-11, cx+11, 24+11], fill='#09090B', outline='#000', width=1)
    draw.ellipse([cx-8, 24-8, cx+8, 24+8], fill='#D97706', outline='#000', width=1)
    draw.ellipse([cx-5, 24-5, cx+5, 24+5], fill='#27272A', outline='#000', width=1)
    draw.ellipse([cx-2, 24-2, cx+2, 24+2], fill='#A1A1AA')
th.save(os.path.join(THUMBS_DIR, 'wheels_offroad.png'))

# wheels_classic: Classic steel wheels
th = make_thumb()
draw = ImageDraw.Draw(th)
for cx in [16, 32]:
    draw.ellipse([cx-10, 24-10, cx+10, 24+10], fill='#18181B', outline='#000', width=1)
    draw.ellipse([cx-6, 24-6, cx+6, 24+6], fill='#E4E4E7', outline='#71717A', width=1)
    draw.ellipse([cx-2, 24-2, cx+2, 24+2], fill='#18181B')
th.save(os.path.join(THUMBS_DIR, 'wheels_classic.png'))

# wheels_rover: Giant Rover Tread Wheel
th = make_thumb()
draw = ImageDraw.Draw(th)
for cx in [16, 32]:
    draw.ellipse([cx-11, 24-11, cx+11, 24+11], fill='#141517', outline='#000', width=1)
    draw.ellipse([cx-9, 24-9, cx+9, 24+9], fill='#2B2D2F')
    draw.ellipse([cx-6, 24-6, cx+6, 24+6], fill='#FF9933', outline='#CC6600', width=1)
    draw.ellipse([cx-2, 24-2, cx+2, 24+2], fill='#222')
th.save(os.path.join(THUMBS_DIR, 'wheels_rover.png'))

# wheels_tank: Caterpillar Tank Tracks
th = make_thumb()
draw = ImageDraw.Draw(th)
draw.rounded_rectangle([4, 18, 44, 30], radius=6, fill='#111111', outline='#000', width=1)
for cx in [10, 18, 26, 34]:
    draw.ellipse([cx-3, 24-3, cx+3, 24+3], fill='#555555', outline='#222', width=1)
draw.line([4, 21, 44, 21], fill='#333', width=1)
draw.line([4, 27, 44, 27], fill='#333', width=1)
th.save(os.path.join(THUMBS_DIR, 'wheels_tank.png'))

# wheels_hover: Magnetic Levitation Glow Thrusters
th = make_thumb()
draw = ImageDraw.Draw(th)
for cx in [16, 32]:
    draw.rectangle([cx-8, 18, cx+8, 26], fill='#1E293B', outline='#000', width=1)
    draw.line([cx-7, 28, cx+7, 28], fill='#00F0FF', width=3)
    draw.line([cx-4, 32, cx+4, 32], fill='#38BDF8', width=2)
th.save(os.path.join(THUMBS_DIR, 'wheels_hover.png'))


# 3. CABIN THUMBNAILS
# cabin_sports: Aero Tinted Windshield & Windows
th = make_thumb()
draw = ImageDraw.Draw(th)
draw.polygon([(6, 30), (32, 14), (42, 30)], fill='#0284C7', outline='#38BDF8', width=1)
draw.line([(14, 28), (30, 18)], fill='#E0F2FE', width=1)
th.save(os.path.join(THUMBS_DIR, 'cabin_sports.png'))

# cabin_convertible: Open Top with Dual Headrests & Wind Deflector
th = make_thumb()
draw = ImageDraw.Draw(th)
draw.polygon([(26, 30), (38, 18), (42, 30)], fill=(56, 189, 248, 180), outline='#0284C7', width=1)
draw.rectangle([12, 18, 18, 30], fill='#18181B', outline='#000', width=1)
draw.ellipse([13, 16, 17, 20], fill='#3F3F46')
draw.rectangle([20, 18, 26, 30], fill='#27272A', outline='#000', width=1)
draw.ellipse([21, 16, 25, 20], fill='#52525B')
th.save(os.path.join(THUMBS_DIR, 'cabin_convertible.png'))

# cabin_dome: Bubble Space Dome
th = make_thumb()
draw = ImageDraw.Draw(th)
draw.ellipse([8, 12, 40, 36], fill=(0, 240, 255, 100), outline='#00F0FF', width=2)
draw.arc([12, 16, 28, 28], start=200, end=300, fill='#FFFFFF', width=2)
th.save(os.path.join(THUMBS_DIR, 'cabin_dome.png'))

# cabin_armor: Armored Heavy Plating
th = make_thumb()
draw = ImageDraw.Draw(th)
draw.polygon([(8, 32), (14, 16), (34, 16), (40, 32)], fill='#3F3F46', outline='#18181B', width=2)
draw.rectangle([18, 22, 30, 25], fill='#DC2626', outline='#000') # Vision slit
th.save(os.path.join(THUMBS_DIR, 'cabin_armor.png'))

# cabin_tinted: Dark Polarized VIP Privacy Glass
th = make_thumb()
draw = ImageDraw.Draw(th)
draw.polygon([(6, 30), (28, 14), (42, 30)], fill='#090A0F', outline='#374151', width=2)
draw.line([(10, 28), (28, 16)], fill='#4B5563', width=1)
th.save(os.path.join(THUMBS_DIR, 'cabin_tinted.png'))

# cabin_rack: Expedition Luggage Rack with Crate & Fuel Can
th = make_thumb()
draw = ImageDraw.Draw(th)
draw.rectangle([4, 26, 44, 32], fill=None, outline='#27272A', width=2)
draw.rectangle([8, 16, 18, 26], fill='#DC2626', outline='#991B1B', width=1) # Jerry can
draw.rectangle([22, 14, 38, 26], fill='#365314', outline='#1A2E05', width=1) # Ammo crate
draw.line([6, 20, 42, 20], fill='#FBBF24', width=1) # Tie down
th.save(os.path.join(THUMBS_DIR, 'cabin_rack.png'))


# 4. TOOL / ACCESSORY THUMBNAILS
# tool_spoiler: Carbon GT-Wing Racing Spoiler
th = make_thumb()
draw = ImageDraw.Draw(th)
# Wing blade
draw.polygon([(6, 18), (42, 18), (40, 24), (8, 24)], fill='#18181B', outline='#000', width=1)
# Red endplates
draw.polygon([(4, 14), (8, 14), (6, 28), (2, 28)], fill='#DC2626')
draw.polygon([(40, 14), (44, 14), (42, 28), (38, 28)], fill='#DC2626')
# Struts
draw.line([(16, 24), (14, 34)], fill='#000', width=2)
draw.line([(32, 24), (30, 34)], fill='#000', width=2)
th.save(os.path.join(THUMBS_DIR, 'tool_spoiler.png'))

# tool_rooflights: 4-Pod LED Rally Light Bar
th = make_thumb()
draw = ImageDraw.Draw(th)
draw.rectangle([4, 22, 44, 26], fill='#18181B')
for i, cx in enumerate([10, 19, 28, 37]):
    draw.ellipse([cx-4, 24-4, cx+4, 24+4], fill='#FEF08A', outline='#18181B', width=1)
    draw.ellipse([cx-1.5, 24-1.5, cx+1.5, 24+1.5], fill='#FFF')
th.save(os.path.join(THUMBS_DIR, 'tool_rooflights.png'))

# tool_radar: Planetary Satellite Dish
th = make_thumb()
draw = ImageDraw.Draw(th)
draw.arc([8, 10, 40, 34], start=180, end=360, fill='#FF9933', width=3)
draw.line([(24, 22), (24, 36)], fill='#444', width=2)
draw.line([(24, 14), (24, 8)], fill='#FF0055', width=2)
draw.ellipse([22, 6, 26, 10], fill='#FF0055')
th.save(os.path.join(THUMBS_DIR, 'tool_radar.png'))

# tool_drill: Plasma Ground Excavator Drill
th = make_thumb()
draw = ImageDraw.Draw(th)
draw.polygon([(40, 24), (10, 14), (10, 34)], fill='#38BDF8', outline='#0284C7', width=1)
draw.line([(16, 16), (36, 24)], fill='#FFF', width=2)
draw.line([(16, 32), (36, 24)], fill='#0284C7', width=2)
draw.rectangle([6, 16, 10, 32], fill='#333', outline='#111')
th.save(os.path.join(THUMBS_DIR, 'tool_drill.png'))

# tool_cannon: Heavy Ballistic Plasma Cannon
th = make_thumb()
draw = ImageDraw.Draw(th)
# Long Cannon Barrel
draw.rectangle([8, 20, 38, 28], fill='#4B5320', outline='#111', width=1)
draw.rectangle([36, 18, 42, 30], fill='#222', outline='#111') # Muzzle
draw.ellipse([41, 22, 44, 26], fill='#FF5500') # Energy tip
draw.rectangle([6, 18, 12, 30], fill='#282C10', outline='#111') # Breech
th.save(os.path.join(THUMBS_DIR, 'tool_cannon.png'))

# tool_nitro: Dual Titanium Nitro Exhaust with Cyan Flame
th = make_thumb()
draw = ImageDraw.Draw(th)
draw.rectangle([24, 18, 38, 23], fill='#71717A', outline='#18181B', width=1)
draw.rectangle([24, 25, 38, 30], fill='#71717A', outline='#18181B', width=1)
draw.polygon([(24, 19), (6, 20.5), (24, 22)], fill='#00F0FF')
draw.polygon([(24, 26), (4, 27.5), (24, 29)], fill='#00F0FF')
draw.ellipse([16, 19.5, 22, 21.5], fill='#FFF')
draw.ellipse([16, 26.5, 22, 28.5], fill='#FFF')
th.save(os.path.join(THUMBS_DIR, 'tool_nitro.png'))

print('All 24 thumbnails (48x48) generated successfully in frontend/public/assets/vehicles/thumbs/ !')
