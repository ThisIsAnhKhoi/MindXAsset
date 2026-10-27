import os
import base64
from io import BytesIO
from PIL import Image, ImageDraw
import numpy as np

VEHICLES_DIR = 'frontend/public/assets/vehicles'
THUMBS_DIR = os.path.join(VEHICLES_DIR, 'thumbs')
os.makedirs(THUMBS_DIR, exist_ok=True)

# 1. Load source CustomizableCarsDemo.png
src_path = 'temp_inspect/cars/CustomizableCarsDemo/CustomizableCarsDemo.png'
demo_img = Image.open(src_path)

# Segment cuts in CustomizableCarsDemo.png
# Seg 0: Green (y=46)
# Seg 2: Blue Muscle (y=227)
# Seg 3: Red Sports GT (y=321)
# Seg 4: Orange Pickup (y=412)

def extract_car_layers(seg_y):
    car = demo_img.crop((0, seg_y, 65, seg_y + 42))
    arr = np.array(car)
    
    # Wheel mask
    wheel_mask = np.zeros(arr.shape[:2], dtype=bool)
    for y in range(32, 42):
        for x in range(65):
            if arr[y, x, 3] > 100:
                r, g, b = arr[y, x, :3]
                is_rear = (x >= 10 and x <= 22)
                is_front = (x >= 47 and x <= 59)
                if (is_rear or is_front) and (r < 80 and g < 80 and b < 80 or (abs(int(r)-int(g)) < 15 and abs(int(g)-int(b)) < 15)):
                    wheel_mask[y, x] = True

    # Windows mask
    window_mask = np.zeros(arr.shape[:2], dtype=bool)
    for y in range(14, 27):
        for x in range(65):
            if arr[y, x, 3] > 100:
                r, g, b = arr[y, x, :3]
                if (b > r + 10 or (b > 100 and b >= g)):
                    window_mask[y, x] = True

    # Body mask
    body_mask = (arr[:, :, 3] > 100) & (~wheel_mask) & (~window_mask)

    def to_img(mask):
        c = np.zeros_like(arr)
        c[mask] = arr[mask]
        return Image.fromarray(c)

    return car, to_img(body_mask), to_img(wheel_mask), to_img(window_mask)

car_sports, body_sports, wheels_sports_img, windows_sports = extract_car_layers(321) # Red Sports
car_muscle, body_muscle, wheels_muscle_img, windows_muscle = extract_car_layers(227) # Blue Muscle
car_pickup, body_pickup, wheels_pickup_img, windows_pickup = extract_car_layers(412) # Orange Pickup

def img_to_b64(img):
    buf = BytesIO()
    img.save(buf, format='PNG')
    return base64.b64encode(buf.getvalue()).decode('utf-8')

# Coordinates to place 65x42 car on 256x256 canvas:
# Scaled 3x -> 195x126. Placed at x=35, y=91. Wheel bottom touches Y=217!
CAR_X = 35
CAR_Y = 91
CAR_W = 195
CAR_H = 126

# ===== 1. CHASSIS ASSETS =====
# chassis_sports.svg
with open(os.path.join(VEHICLES_DIR, 'chassis_sports.svg'), 'w', encoding='utf-8') as f:
    f.write(f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256">
  <!-- Sports GT Car Chassis (Red Aerodynamic Body) -->
  <image href="data:image/png;base64,{img_to_b64(body_sports)}" x="{CAR_X}" y="{CAR_Y}" width="{CAR_W}" height="{CAR_H}" style="image-rendering: pixelated;"/>
</svg>''')

# chassis_muscle.svg
with open(os.path.join(VEHICLES_DIR, 'chassis_muscle.svg'), 'w', encoding='utf-8') as f:
    f.write(f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256">
  <!-- Muscle Car Chassis (Blue Street Performance) -->
  <image href="data:image/png;base64,{img_to_b64(body_muscle)}" x="{CAR_X}" y="{CAR_Y}" width="{CAR_W}" height="{CAR_H}" style="image-rendering: pixelated;"/>
</svg>''')

# chassis_pickup.svg
with open(os.path.join(VEHICLES_DIR, 'chassis_pickup.svg'), 'w', encoding='utf-8') as f:
    f.write(f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256">
  <!-- Off-Road Pickup Chassis (Orange High-Clearance) -->
  <image href="data:image/png;base64,{img_to_b64(body_pickup)}" x="{CAR_X}" y="{CAR_Y}" width="{CAR_W}" height="{CAR_H}" style="image-rendering: pixelated;"/>
</svg>''')


# ===== 2. WHEELS ASSETS =====
# wheels_sports.svg: High-performance 5-spoke alloy racing rims & low-profile rubber
with open(os.path.join(VEHICLES_DIR, 'wheels_sports.svg'), 'w', encoding='utf-8') as f:
    f.write('''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256">
  <!-- Sports Racing Alloy Wheels (Front X:179, Rear X:86, Y:199, R:18) -->
  <defs>
    <radialGradient id="sportsTireGrad" cx="50%" cy="50%" r="50%">
      <stop offset="60%" stop-color="#242628"/>
      <stop offset="100%" stop-color="#0A0B0C"/>
    </radialGradient>
    <radialGradient id="sportsRimGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="60%" stop-color="#C0C0C0"/>
      <stop offset="100%" stop-color="#707070"/>
    </radialGradient>
  </defs>

  <!-- Rear Wheel -->
  <circle cx="86" cy="199" r="18" fill="url(#sportsTireGrad)" stroke="#111" stroke-width="2"/>
  <circle cx="86" cy="199" r="13" fill="url(#sportsRimGrad)" stroke="#222" stroke-width="1.5"/>
  <!-- 5 Spokes -->
  <line x1="86" y1="189" x2="86" y2="209" stroke="#333" stroke-width="2.5"/>
  <line x1="77" y1="194" x2="95" y2="204" stroke="#333" stroke-width="2.5"/>
  <line x1="79" y1="206" x2="93" y2="192" stroke="#333" stroke-width="2.5"/>
  <circle cx="86" cy="199" r="4.5" fill="#E53E3E" stroke="#111" stroke-width="1"/>
  <circle cx="86" cy="199" r="2" fill="#FFF"/>

  <!-- Front Wheel -->
  <circle cx="179" cy="199" r="18" fill="url(#sportsTireGrad)" stroke="#111" stroke-width="2"/>
  <circle cx="179" cy="199" r="13" fill="url(#sportsRimGrad)" stroke="#222" stroke-width="1.5"/>
  <!-- 5 Spokes -->
  <line x1="179" y1="189" x2="179" y2="209" stroke="#333" stroke-width="2.5"/>
  <line x1="170" y1="194" x2="188" y2="204" stroke="#333" stroke-width="2.5"/>
  <line x1="172" y1="206" x2="186" y2="192" stroke="#333" stroke-width="2.5"/>
  <circle cx="179" cy="199" r="4.5" fill="#E53E3E" stroke="#111" stroke-width="1"/>
  <circle cx="179" cy="199" r="2" fill="#FFF"/>
</svg>''')

# wheels_offroad.svg: Rugged beadlock deep tread tires
with open(os.path.join(VEHICLES_DIR, 'wheels_offroad.svg'), 'w', encoding='utf-8') as f:
    f.write('''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256">
  <!-- Rugged Beadlock Off-road Wheels (Y:197, R:20) -->
  <defs>
    <radialGradient id="offroadTire" cx="50%" cy="50%" r="50%">
      <stop offset="65%" stop-color="#1E2022"/>
      <stop offset="100%" stop-color="#050607"/>
    </radialGradient>
  </defs>

  <!-- Rear Wheel -->
  <circle cx="86" cy="197" r="20" fill="url(#offroadTire)" stroke="#000" stroke-width="2.5"/>
  <circle cx="86" cy="197" r="18" fill="none" stroke="#3A3D40" stroke-width="3" stroke-dasharray="4,5"/>
  <circle cx="86" cy="197" r="12" fill="#D97706" stroke="#000" stroke-width="1.5"/>
  <circle cx="86" cy="197" r="9" fill="#18181B" stroke="#000" stroke-width="1"/>
  <circle cx="86" cy="197" r="4" fill="#A1A1AA"/>

  <!-- Front Wheel -->
  <circle cx="179" cy="197" r="20" fill="url(#offroadTire)" stroke="#000" stroke-width="2.5"/>
  <circle cx="179" cy="197" r="18" fill="none" stroke="#3A3D40" stroke-width="3" stroke-dasharray="4,5"/>
  <circle cx="179" cy="197" r="12" fill="#D97706" stroke="#000" stroke-width="1.5"/>
  <circle cx="179" cy="197" r="9" fill="#18181B" stroke="#000" stroke-width="1"/>
  <circle cx="179" cy="197" r="4" fill="#A1A1AA"/>
</svg>''')

# wheels_classic.svg: Classic chrome dish wheels
with open(os.path.join(VEHICLES_DIR, 'wheels_classic.svg'), 'w', encoding='utf-8') as f:
    f.write(f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256">
  <!-- Classic Pixel Wheels (From CustomizableCars Demo) -->
  <image href="data:image/png;base64,{img_to_b64(wheels_sports_img)}" x="{CAR_X}" y="{CAR_Y}" width="{CAR_W}" height="{CAR_H}" style="image-rendering: pixelated;"/>
</svg>''')


# ===== 3. CABIN ASSETS =====
# cabin_sports.svg: Aero Tinted Windshield & Windows
with open(os.path.join(VEHICLES_DIR, 'cabin_sports.svg'), 'w', encoding='utf-8') as f:
    f.write(f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256">
  <!-- Sports Aerodynamic Tinted Glass -->
  <image href="data:image/png;base64,{img_to_b64(windows_sports)}" x="{CAR_X}" y="{CAR_Y}" width="{CAR_W}" height="{CAR_H}" style="image-rendering: pixelated;"/>
</svg>''')

# cabin_convertible.svg: Open Cockpit Convertible with headrests
with open(os.path.join(VEHICLES_DIR, 'cabin_convertible.svg'), 'w', encoding='utf-8') as f:
    f.write('''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256">
  <!-- Convertible Open-Top Cockpit with Dual Roll Hoops & Tinted Low Windshield -->
  <!-- Low Raked Windshield -->
  <polygon points="182,142 208,142 196,120 182,120" fill="rgba(56, 189, 248, 0.75)" stroke="#0284C7" stroke-width="2"/>
  <line x1="184" y1="123" x2="204" y2="140" stroke="#E0F2FE" stroke-width="1.5"/>
  <!-- Driver Headrest / Roll Hoop -->
  <rect x="135" y="112" width="16" height="28" rx="8" fill="#18181B" stroke="#000" stroke-width="2"/>
  <circle cx="143" cy="120" r="4" fill="#3F3F46"/>
  <!-- Passenger Roll Hoop -->
  <rect x="110" y="112" width="16" height="28" rx="8" fill="#27272A" stroke="#000" stroke-width="2"/>
  <circle cx="118" cy="120" r="4" fill="#52525B"/>
</svg>''')

# cabin_tinted.svg: Dark Polarized VIP Privacy Glass
with open(os.path.join(VEHICLES_DIR, 'cabin_tinted.svg'), 'w', encoding='utf-8') as f:
    f.write('''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256">
  <!-- VIP Dark Polarized Glass -->
  <rect x="74" y="132" width="28" height="22" rx="2" fill="#090A0F" stroke="#1F2937" stroke-width="2"/>
  <line x1="76" y1="135" x2="100" y2="151" stroke="#374151" stroke-width="1.5"/>
  <rect x="108" y="132" width="48" height="22" rx="2" fill="#090A0F" stroke="#1F2937" stroke-width="2"/>
  <line x1="110" y1="135" x2="154" y2="151" stroke="#374151" stroke-width="1.5"/>
  <polygon points="164,154 204,154 188,132 164,132" fill="#090A0F" stroke="#1F2937" stroke-width="2"/>
  <line x1="168" y1="135" x2="200" y2="151" stroke="#374151" stroke-width="1.5"/>
</svg>''')

# cabin_rack.svg: Expedition Roof Luggage Rack with Jerry Can and Cargo
with open(os.path.join(VEHICLES_DIR, 'cabin_rack.svg'), 'w', encoding='utf-8') as f:
    f.write('''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256">
  <!-- Expedition Heavy Roof Rack & Cargo -->
  <rect x="72" y="80" width="96" height="12" rx="2" fill="none" stroke="#27272A" stroke-width="3"/>
  <line x1="72" y1="86" x2="168" y2="86" stroke="#3F3F46" stroke-width="2"/>
  <!-- Struts to car roof -->
  <line x1="82" y1="92" x2="82" y2="98" stroke="#18181B" stroke-width="4"/>
  <line x1="120" y1="92" x2="120" y2="98" stroke="#18181B" stroke-width="4"/>
  <line x1="158" y1="92" x2="158" y2="98" stroke="#18181B" stroke-width="4"/>
  <!-- Red Jerry Can -->
  <rect x="80" y="68" width="16" height="14" rx="2" fill="#DC2626" stroke="#991B1B" stroke-width="1.5"/>
  <line x1="84" y1="65" x2="92" y2="65" stroke="#991B1B" stroke-width="2"/>
  <!-- Hard Cargo Pelicase -->
  <rect x="102" y="66" width="38" height="16" rx="2" fill="#365314" stroke="#1A2E05" stroke-width="2"/>
  <line x1="112" y1="66" x2="112" y2="82" stroke="#1A2E05" stroke-width="2"/>
  <line x1="130" y1="66" x2="130" y2="82" stroke="#1A2E05" stroke-width="2"/>
  <!-- Tie-down yellow straps -->
  <line x1="78" y1="72" x2="144" y2="72" stroke="#FBBF24" stroke-width="1.5" stroke-dasharray="6,4"/>
</svg>''')


# ===== 4. TOOL / ACCESSORY ASSETS =====
# tool_spoiler.svg: Carbon GT-Wing Racing Spoiler
with open(os.path.join(VEHICLES_DIR, 'tool_spoiler.svg'), 'w', encoding='utf-8') as f:
    f.write('''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256">
  <!-- Aerodynamic Carbon GT-Wing Racing Spoiler on Rear Trunk -->
  <defs>
    <linearGradient id="spoilerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3F3F46"/>
      <stop offset="100%" stop-color="#18181B"/>
    </linearGradient>
  </defs>
  <!-- Struts from trunk -->
  <line x1="58" y1="126" x2="52" y2="106" stroke="#000" stroke-width="4" stroke-linecap="round"/>
  <line x1="68" y1="126" x2="62" y2="106" stroke="#000" stroke-width="4" stroke-linecap="round"/>
  <!-- Wing Blade -->
  <polygon points="40,104 78,104 80,109 38,109" fill="url(#spoilerGrad)" stroke="#09090B" stroke-width="2"/>
  <!-- Left & Right Endplates -->
  <polygon points="36,98 44,98 42,113 34,113" fill="#DC2626" stroke="#000" stroke-width="1.5"/>
  <polygon points="76,98 84,98 82,113 74,113" fill="#DC2626" stroke="#000" stroke-width="1.5"/>
</svg>''')

# tool_rooflights.svg: 4-Pod LED Rally Light Bar
with open(os.path.join(VEHICLES_DIR, 'tool_rooflights.svg'), 'w', encoding='utf-8') as f:
    f.write('''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256">
  <!-- 4-Pod Ultra-Bright Off-road Rally Roof Light Bar -->
  <rect x="140" y="86" width="46" height="4" fill="#18181B"/>
  <!-- Pod 1 -->
  <circle cx="145" cy="84" r="5" fill="#FEF08A" stroke="#18181B" stroke-width="2"/>
  <circle cx="145" cy="84" r="2.5" fill="#FFF"/>
  <!-- Pod 2 -->
  <circle cx="157" cy="84" r="5" fill="#FEF08A" stroke="#18181B" stroke-width="2"/>
  <circle cx="157" cy="84" r="2.5" fill="#FFF"/>
  <!-- Pod 3 -->
  <circle cx="169" cy="84" r="5" fill="#FEF08A" stroke="#18181B" stroke-width="2"/>
  <circle cx="169" cy="84" r="2.5" fill="#FFF"/>
  <!-- Pod 4 -->
  <circle cx="181" cy="84" r="5" fill="#FEF08A" stroke="#18181B" stroke-width="2"/>
  <circle cx="181" cy="84" r="2.5" fill="#FFF"/>
</svg>''')

# tool_nitro.svg: Dual Titanium Nitro Exhaust with Cyan Flame
with open(os.path.join(VEHICLES_DIR, 'tool_nitro.svg'), 'w', encoding='utf-8') as f:
    f.write('''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256">
  <!-- Dual Nitro Titanium Exhaust with Glowing Blue Flame Boost -->
  <defs>
    <linearGradient id="nitroFlame" x1="100%" y1="50%" x2="0%" y2="50%">
      <stop offset="0%" stop-color="#38BDF8"/>
      <stop offset="50%" stop-color="#0284C7"/>
      <stop offset="100%" stop-color="rgba(14, 165, 233, 0)"/>
    </linearGradient>
  </defs>
  <!-- Twin Exhaust Tips -->
  <rect x="42" y="200" width="14" height="6" rx="2" fill="#71717A" stroke="#18181B" stroke-width="1.5"/>
  <rect x="42" y="207" width="14" height="6" rx="2" fill="#71717A" stroke="#18181B" stroke-width="1.5"/>
  <ellipse cx="42" cy="203" rx="2" ry="3" fill="#06B6D4"/>
  <ellipse cx="42" cy="210" rx="2" ry="3" fill="#06B6D4"/>
  <!-- Nitro Flame Jets shooting backwards -->
  <polygon points="40,201 16,203 40,205" fill="url(#nitroFlame)"/>
  <polygon points="40,208 12,210 40,212" fill="url(#nitroFlame)"/>
  <ellipse cx="36" cy="203" rx="4" ry="2" fill="#FFF"/>
  <ellipse cx="36" cy="210" rx="4" ry="2" fill="#FFF"/>
</svg>''')

print('All 24 SVG vehicle layers generated successfully!')
