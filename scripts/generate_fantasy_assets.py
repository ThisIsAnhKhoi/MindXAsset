import os, json
from PIL import Image
import numpy as np

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC_PNG = os.path.join(BASE_DIR, "NewAsset", "extracted_custom_character", "Customizable 2D Pixel Character Spritesheet.png")

OUTPUT_DIR = os.path.join(BASE_DIR, "frontend", "public", "assets", "fantasy")
THUMBS_DIR = os.path.join(OUTPUT_DIR, "thumbs")
CONFIG_JS = os.path.join(BASE_DIR, "frontend", "src", "pages", "CharacterBuilder", "fantasy_config.js")

for sub in ["races", "hairs", "outfits", "bottoms", "headgear", "accessories", "weapons", "shadows", "thumbs"]:
    os.makedirs(os.path.join(OUTPUT_DIR, sub), exist_ok=True)

# =========================================================================
# MATHEMATICAL ANATOMICAL ALIGNMENT CONSTANTS (48x48 Canvas)
# =========================================================================
FRAME_SIZE = 48
CX = 16  # Centers 16px character horizontally: (48 - 16) // 2
HY = 3   # Head placed at Y=3. Forehead at Y=7, Eyes at Y=12-13, Chin at Y=15
BY = 14  # Body / Outfit placed at Y=14. Collar sits at Y=15 right beneath chin
LY = 17  # Legs / Bottoms placed at Y=17. Waist starts at Y=17, Soles end at Y=32
SY = 18  # Shadow placed at Y=18. Shadow line 14 sits at Y=32, hugging the soles

def make_48_frame(crop, px, py):
    """Pastes 16x16 crop onto a 48x48 frame at (px, py)."""
    frame = Image.new('RGBA', (FRAME_SIZE, FRAME_SIZE), (0, 0, 0, 0))
    frame.paste(crop, (px, py), crop)
    return frame

def make_thumb(im_48, thumb_size=128):
    """Generates a crisp 128x128 thumbnail with 100% transparent background and integer scaling."""
    bbox = im_48.getbbox()
    if not bbox:
        return Image.new('RGBA', (thumb_size, thumb_size), (0, 0, 0, 0))
    cropped = im_48.crop(bbox)
    cw, ch = cropped.size
    
    target_inner = int(thumb_size * 0.85)
    scale = min(target_inner / cw, target_inner / ch)
    int_scale = max(1, int(round(scale)))
    if abs(int_scale - scale) < 0.35:
        scale = int_scale
        resample = Image.Resampling.NEAREST
    else:
        resample = Image.Resampling.NEAREST if scale >= 2.0 else Image.Resampling.LANCZOS
        
    new_w = max(1, int(round(cw * scale)))
    new_h = max(1, int(round(ch * scale)))
    scaled = cropped.resize((new_w, new_h), resample)
    
    thumb = Image.new('RGBA', (thumb_size, thumb_size), (0, 0, 0, 0))
    ox = (thumb_size - new_w) // 2
    oy = (thumb_size - new_h) // 2
    thumb.paste(scaled, (ox, oy), scaled)
    return thumb

def save_asset(subfolder, item_id, frame_img):
    item_path = os.path.join(OUTPUT_DIR, subfolder, f"{item_id}.png")
    thumb_path = os.path.join(THUMBS_DIR, f"{item_id}.png")
    
    frame_img.save(item_path, "PNG", optimize=True)
    thumb_img = make_thumb(frame_img, 128)
    thumb_img.save(thumb_path, "PNG", optimize=True)
    
    return f"/assets/fantasy/{subfolder}/{item_id}.png", f"/assets/fantasy/thumbs/{item_id}.png"

im = Image.open(SRC_PNG)
print(f"Loaded master spritesheet: {im.size}")

def get_cell(col, row):
    return im.crop((col * 16, row * 16, (col + 1) * 16, (row + 1) * 16))

# =========================================================================
# ANATOMICAL RE-ENGINEERING FUNCTIONS
# =========================================================================
def build_anatomy_legs(cell_raw):
    """
    Transforms raw 4-pixel column into TRUE 2-LEGGED PIXEL ART ANATOMY:
    - Left Leg: x=4..6 (outer contour, fill highlight)
    - Inseam Crease: x=7 (dark shadow separating left & right legs)
    - Right Leg: x=8..10 (fill, outer contour)
    - Flared boots with distinct left toe (x=3..6) and right toe (x=8..10)
    - Solid dark soles at line 15 (y=15)
    - Continuous fabric from y=0 down to y=15 guaranteeing zero gaps!
    """
    arr = np.array(cell_raw)
    out = np.zeros((16, 16, 4), dtype=np.uint8)
    
    for y in range(16):
        raw_row = arr[y, 6:10]
        has_color = raw_row[:, 3] > 0
        if not np.any(has_color):
            src_row = arr[8, 6:10]
        else:
            src_row = raw_row
            
        c_left_out = src_row[0]  
        c_left_mid = src_row[1]  
        c_right_mid = src_row[2] 
        c_right_out = src_row[3] 
        
        # Dark shadow crease down the center seam
        c_crease = (c_left_out.astype(int) * 3 // 4).astype(np.uint8)
        c_crease[3] = 255
        
        if y < 10: # Hips / Thighs (y=0..9)
            out[y, 4] = c_left_out
            out[y, 5] = c_left_mid
            out[y, 6] = c_left_mid
            out[y, 7] = c_crease
            out[y, 8] = c_right_mid
            out[y, 9] = c_right_mid
            out[y, 10] = c_right_out
        elif y < 12: # Knees / Upper Boot (y=10..11)
            out[y, 4] = c_left_out
            out[y, 5] = c_left_mid
            out[y, 6] = c_left_mid
            out[y, 7] = c_crease
            out[y, 8] = c_right_mid
            out[y, 9] = c_right_mid
            out[y, 10] = c_right_out
        elif y == 12: # Lower Boot Flare
            out[y, 4] = c_left_out
            out[y, 5] = c_left_mid
            out[y, 6] = c_left_mid
            out[y, 7] = c_crease
            out[y, 8] = c_right_mid
            out[y, 9] = c_right_mid
            out[y, 10] = c_right_out
        elif y == 13: # Flare outward left
            out[y, 3] = c_left_out
            out[y, 4] = c_left_mid
            out[y, 5] = c_left_mid
            out[y, 6] = c_crease
            out[y, 7] = c_crease
            out[y, 8] = c_right_mid
            out[y, 9] = c_right_mid
            out[y, 10] = c_right_out
        elif y == 14: # Foot base / toes
            out[y, 3] = c_left_out
            out[y, 4] = c_left_mid
            out[y, 5] = c_left_mid
            out[y, 6] = c_left_out
            out[y, 7] = c_crease
            out[y, 8] = c_right_mid
            out[y, 9] = c_right_mid
            out[y, 10] = c_right_out
        elif y == 15: # Solid soles / heels
            sole_color = np.array([25, 20, 20, 255], dtype=np.uint8)
            out[y, 4:7] = sole_color
            out[y, 8:11] = sole_color

    return Image.fromarray(out, 'RGBA')

def shape_outfit(cell, is_long=False, skin_color=(235, 195, 175, 255)):
    """
    Shapes raw rectangular block into natural clothing:
    1. Slopes shoulders by trimming blocky outer 90-degree corners
    2. Adds skin hands / cuffs at sleeve ends
    3. Trims hem at line 9 so pants and 2 legs are fully visible (or open front for robes)
    """
    arr = np.array(cell).copy()
    
    # 1. Slope shoulders (trim outer block corners)
    corners = [(1, 1), (1, 2), (2, 1), (1, 14), (1, 13), (2, 14), (0, 0), (0, 1), (0, 14), (0, 15)]
    for cy, cx in corners:
        if cy < 16 and cx < 16:
            arr[cy, cx] = [0, 0, 0, 0]
            
    # 2. Add skin hands at sleeve cuffs
    skin = np.array(skin_color, dtype=np.uint8)
    shadow_skin = (skin.astype(int) * 3 // 4).astype(np.uint8)
    shadow_skin[3] = 255
    
    # Left hand at x=2..3
    arr[7, 2] = skin
    arr[7, 3] = skin
    arr[8, 2] = shadow_skin
    arr[8, 3] = shadow_skin
    
    # Right hand at x=12..13
    arr[7, 12] = skin
    arr[7, 13] = skin
    arr[8, 12] = shadow_skin
    arr[8, 13] = shadow_skin
    
    # 3. For standard shirts / jackets / tunics (not full-length robes):
    if not is_long:
        # Trim from line 9 down to 15 in the center (x=4..11) so pants show cleanly
        arr[9:16, 4:12] = [0, 0, 0, 0]
        # Trim sleeves below line 8
        arr[9:16, 0:4] = [0, 0, 0, 0]
        arr[9:16, 12:16] = [0, 0, 0, 0]
    else:
        # For long cloaks / robes, open front at bottom so 2 feet peek through
        arr[12:16, 5:11] = [0, 0, 0, 0]
        
    return Image.fromarray(arr, 'RGBA')

# =========================================================================
# 1. RACES (Chủng tộc & Gương mặt)
# =========================================================================
HUMAN_RACES = [
    ("race_human_fair", "Người - Da Sáng (Fair Human)", 0, (235, 195, 175, 255)),
    ("race_human_peach", "Người - Da Hồng Hào (Peach)", 1, (245, 205, 185, 255)),
    ("race_human_tan", "Người - Da Nâu Đồng (Tan)", 2, (195, 140, 105, 255)),
    ("race_human_dark", "Người - Da Ngăm Đen (Dark)", 3, (120, 80, 60, 255)),
    ("race_human_sunburnt", "Người - Nắng Gió (Sunburnt)", 4, (215, 135, 115, 255)),
    ("race_orc", "Đại Ma Tộc - Chiến Binh Orc (Green)", 5, (70, 130, 50, 255)),
    ("race_dark_elf", "Hắc Tiên Tộc - Dạ Thuật Drow", 6, (110, 95, 130, 255)),
    ("race_beastman", "Hoang Thú Tộc - Hổ Báo", 7, (180, 120, 80, 255)),
    ("race_high_elf", "Thượng Tiên Tộc - Tai Nhọn", 8, (245, 220, 200, 255)),
    ("race_vampire", "Huyết Tộc Dạ Thần - Vampire", 9, (230, 225, 235, 255)),
    ("race_undead", "Xác Sống Cổ Thành - Zombie", 10, (140, 160, 140, 255)),
    ("race_skeleton", "Khung Xương Ma Thuật - Mắt Đỏ", 11, (220, 220, 220, 255)),
    ("race_golden_lich", "Hoàng Kim Vu Yêu - Mắt Vàng", 12, (230, 210, 150, 255)),
    ("race_stone_golem", "Người Đá Cổ Thạch - Golem", 13, (150, 150, 150, 255)),
    ("race_reptilian", "Thằn Lằn Đầm Lầy - Bò Sát", 14, (90, 140, 90, 255)),
    ("race_alien", "Dị Tộc Không Gian - Ngoại Giới", 15, (100, 180, 190, 255)),
]

EXPRESSIONS = [
    ("expr_neutral", "Bình Thản (Neutral)", 0),
    ("expr_smile", "Mỉm Cười (Smile)", 1),
    ("expr_shy", "Thẹn Thùng (Shy)", 2),
    ("expr_shy_smile", "Cười E Ấp (Blushing)", 3),
    ("expr_focused", "Tập Trung (Determined)", 4),
    ("expr_battle_cry", "Gầm Vang (Battle Cry)", 5),
]

BEAST_RACES = [
    ("race_fox", "Linh Hồ Tộc - Cáo Lửa Kitsune", 1, 6, (220, 120, 60, 255)),
    ("race_wolf", "Lang Tộc - Sói Xám Hoang Dã", 2, 6, (140, 140, 150, 255)),
    ("race_raccoon", "Gấu Mèo Du Mục - Raccoon", 3, 6, (160, 150, 140, 255)),
    ("race_cat", "Miêu Tộc - Mèo Mun Huyền Bí", 4, 6, (50, 50, 50, 255)),
    ("race_bat", "Dạ Điệp Tộc - Dơi Ma Cà Rồng", 5, 6, (80, 60, 90, 255)),
    ("race_devil", "Tiểu Dạ Quỷ - Ác Ma Bé", 6, 6, (200, 60, 60, 255)),
    ("race_rabbit", "Ngọc Thố Tộc - Thỏ Trắng", 7, 6, (240, 240, 240, 255)),
    ("race_dog", "Khuyển Hiệp Sĩ - Chó Trung Thành", 8, 6, (190, 150, 110, 255)),
    ("race_minotaur", "Ngưu Ma Tộc - Trâu Rừng", 9, 6, (130, 80, 60, 255)),
    ("race_snake", "Bạch Xà Tộc - Rắn Ma Thuật", 10, 6, (120, 170, 120, 255)),
    ("race_goose", "Ngỗng Trời Tinh Nghịch - Duck", 11, 6, (240, 240, 220, 255)),
    ("race_dragon", "Long Tộc - Viêm Long Hỏa Diệm", 12, 6, (180, 50, 40, 255)),
    ("race_frog", "Cóc Tinh Ma Thuật - Frog Mage", 13, 6, (80, 160, 70, 255)),
    ("race_crocodile", "Cá Sấu Đầm Lầy - Swamp Croc", 14, 6, (60, 110, 70, 255)),
]

RACES_CONFIG = []
EXPRESSIONS_CONFIG = []

for r_id, r_name, col, skin in HUMAN_RACES:
    neutral_cell = get_cell(col, 0)
    frame_48 = make_48_frame(neutral_cell, CX, HY)
    src, thumb = save_asset("races", r_id, frame_48)
    
    expr_map = {}
    for exp_id, exp_name, exp_row in EXPRESSIONS:
        exp_cell = get_cell(col, exp_row)
        exp_frame = make_48_frame(exp_cell, CX, HY)
        var_id = f"{r_id}_{exp_id}"
        v_src, _ = save_asset("races", var_id, exp_frame)
        expr_map[exp_id] = v_src
        
    r_group = "human" if col < 5 else ("fantasy" if col < 10 else "undead")
    RACES_CONFIG.append({
        "id": r_id,
        "name": r_name,
        "src": thumb,
        "type": "races",
        "group": r_group,
        "defaultSrc": src,
        "expressions": expr_map,
        "layers": [
            { "src": src, "z_index": 40, "category": "races" }
        ]
    })

for b_id, b_name, col, row, skin in BEAST_RACES:
    b_cell = get_cell(col, row)
    frame_48 = make_48_frame(b_cell, CX, HY)
    src, thumb = save_asset("races", b_id, frame_48)
    
    mouth_cell = get_cell(col, row + 1)
    mouth_frame = make_48_frame(mouth_cell, CX, HY)
    m_src, _ = save_asset("races", f"{b_id}_expr_battle_cry", mouth_frame)
    
    RACES_CONFIG.append({
        "id": b_id,
        "name": b_name,
        "src": thumb,
        "type": "races",
        "group": "beast",
        "defaultSrc": src,
        "expressions": {
            "expr_neutral": src,
            "expr_smile": m_src,
            "expr_shy": src,
            "expr_shy_smile": m_src,
            "expr_focused": src,
            "expr_battle_cry": m_src
        },
        "layers": [
            { "src": src, "z_index": 40, "category": "races" }
        ]
    })

for exp_id, exp_name, exp_row in EXPRESSIONS:
    sample_cell = get_cell(0, exp_row)
    sample_frame = make_48_frame(sample_cell, CX, HY)
    _, thumb = save_asset("races", f"thumb_{exp_id}", sample_frame)
    EXPRESSIONS_CONFIG.append({
        "id": exp_id,
        "name": exp_name,
        "src": thumb,
        "type": "expressions",
        "layers": []
    })

print(f"Generated {len(RACES_CONFIG)} Races and {len(EXPRESSIONS_CONFIG)} Expressions.")

# =========================================================================
# 2. HAIRSTYLES (Kiểu tóc & Râu)
# =========================================================================
HAIR_STYLES = [
    (0, "Tóc Ngắn Chiến Binh"),
    (1, "Tóc Vuốt Kèm Râu Quai Nón"),
    (2, "Tóc Ngắn Lãng Tử"),
    (3, "Búi Tóc Samurai / Đạo Sĩ"),
    (4, "Tóc Đuôi Ngựa Quý Tộc"),
    (5, "Tóc Dài Suôn Mượt"),
    (6, "Tóc Rẽ Ngôi Lãng Mạn"),
    (7, "Tóc Nam Tính Kèm Râu Rậm"),
    (8, "Tóc Búi Đôi Phong Cách"),
    (9, "Tóc Hai Bím Dài"),
    (10, "Mái Tóc Ngắn Đơn Giản"),
    (11, "Tóc Dựng Spiky Cá Tính"),
    (12, "Tóc Dreadlock Dài"),
    (13, "Tóc Bồng Bềnh Quý Tộc"),
    (14, "Tóc Mái Bằng Nữ Tính"),
    (15, "Tóc Xoăn Xù Bồng Bềnh"),
]

HAIRS_CONFIG = [
    {
        "id": "hair_none",
        "name": "Trọc đầu / Không tóc (Bald)",
        "type": "hairs",
        "layers": []
    }
]

hair_count = 0
for r in range(8, 14):
    for c in range(16):
        cell = get_cell(c, r)
        if not cell.getbbox():
            continue
        h_id = f"hair_r{r}_c{c}"
        
        if r == 8: c_name = "Nâu"
        elif r == 9: c_name = "Hung Đỏ"
        elif r == 10: c_name = "Vàng"
        elif r == 11: c_name = "Bạc"
        elif r == 12 and c < 4: c_name = "Lam Ngọc"
        elif r == 12 and c < 8: c_name = "Lục Bảo"
        elif r == 12: c_name = "Đen"
        else: c_name = "Bạch Kim"
        
        style_name = HAIR_STYLES[c][1] if c < len(HAIR_STYLES) else f"Kiểu #{c+1}"
        h_name = f"{style_name} ({c_name})"
        
        frame_48 = make_48_frame(cell, CX, HY)
        src, thumb = save_asset("hairs", h_id, frame_48)
        
        HAIRS_CONFIG.append({
            "id": h_id,
            "name": h_name,
            "src": thumb,
            "type": "hairs",
            "group": c_name,
            "layers": [
                { "src": src, "z_index": 60, "category": "hairs" }
            ]
        })
        hair_count += 1

print(f"Generated {hair_count} Hairstyles.")

# =========================================================================
# 3. OUTFITS (128 Trang phục & Y phục - Đã tạo hình vai và ống tay tự nhiên)
# =========================================================================
OUTFITS_CONFIG = []
outfit_names_matrix = [
    # Row 16
    [
        "Áo Choàng Đỏ Cổ Viền Vàng", "Áo Dài Dạ Hội Tím Than", "Y Phục Corset Thợ Săn Nâu", "Váy Dạ Hội Caro Lục Bảo",
        "Váy Caro Hoàng Gia Xanh Đen", "Lễ Phục Trắng Dải Vàng Quý Tộc", "Áo Sơ Mi Trắng Kẻ Sọc Quý Phái", "Y Phục Hầu Gái Đen Trắng",
        "Áo Thụng Pháp Sư Đen Cổ Vàng", "Y Phục Bạch Y Tiên Tử", "Áo Gile Đen Lãng Tử", "Áo Len Kem Quý Tộc",
        "Áo Choàng Khăn Quàng Đỏ Sát Thủ", "Áo Khoác Da Biker Đen", "Áo Len Dệt Đen Sọc Xanh", "Áo Choàng Pháp Sư Đêm Huyền Bí"
    ],
    # Row 17
    [
        "Chiến Bào Kẻ Caro Vàng Đỏ", "Áo Len Cổ Lọ Đỏ Phối Đen", "Áo Len Đỏ Đô Thêu Gia Huy", "Yếm Xanh Dã Ngoại Thợ Thủ Công",
        "Áo Dệt Thổ Cẩm Vàng Đỏ Cổ Xưa", "Áo Thô Tím Xám Thường Dân", "Áo Gile Trắng Thêu Chỉ Bạc", "Yếm Nâu Thợ Rèn Da Bò",
        "Y Phục Bác Sĩ Cổ Điển", "Áo Nỉ Xám Phong Cách Đời Thường", "Áo Khoác Cánh Dơi Đen Quý Tộc", "Áo Len Mận Chín Đốm Trắng",
        "Áo Choàng Tím Xám Xé Rách Sát Thủ", "Áo Khoác Nỉ Đỏ Mận Mùa Đông", "Áo Thô Nâu Xám Nông Dân", "Y Phục Xanh Thẫm Viền Bạc Đạo Sĩ"
    ],
    # Row 18
    [
        "Áo Khoác Đen Viền Tím Huyền Bí", "Áo Choàng Sát Thủ Viền Hồng", "Áo Đen Tuyền Tối Giản", "Y Phục Đen Đai Lưng Đỏ Nổi Bật",
        "Áo Thụng Cổ Thuyền Đỏ Rượu", "Khăn Quàng Xanh Áo Len Mận Đỏ", "Áo Choàng Du Ca Nhành Gai Cổ", "Chiến Bào Đai Lưng Da Nâu Đỏ",
        "Áo Lụa Trắng Thêu Dây Kim Tuyến", "Y Phục Thổ Dân Thắt Lưng Bện Vàng", "Áo Lụa Trắng Thuần Khiết", "Áo Choàng Đỏ Đô Sang Trọng",
        "Áo Nỉ Đen Tuyền Chiến Binh", "Chiến Giáp Hắc Báo Thầm Lặng", "Áo Dài Lục Bảo Phối Trắng Thanh Nhã", "Y Phục Đỏ Đô Dải Lụa Trắng"
    ],
    # Row 19
    [
        "Lễ Phục Tuxedo Nơ Đỏ Quý Tộc", "Chiến Giáp Da Xanh Lá Cung Thủ", "Áo Da Nâu Dây Chéo Đeo Tên", "Áo Thợ Săn Rừng Sâu Dây Đạn",
        "Chiến Giáp Da Báo Săn Thú", "Áo Choàng Lông Thú Man Tộc Đỏ Nâu", "Hoàng Bào Vua Đỏ Viền Lông Chồn", "Áo Giáp Bản Da Đỏ Viền Trắng",
        "Áo Giáp Bản Đỏ Đô Nẹp Kim Loại", "Chiến Bào Hiệp Sĩ Xanh Dương Đai Trắng", "Áo Thụng Hiệp Sĩ Xanh Thẫm Cổ Vàng", "Giáp Xích Thép Hiệp Sĩ Paladin",
        "Giáp Thép Tấm Nặng Knight Templar", "Giáp Bản Kim Loại Chống Phép", "Áo Giáp Vảy Cá Biển Sâu Lam Xanh", "Chiến Bào Quân Đội Rừng Xanh Thẫm"
    ],
    # Row 20
    [
        "Áo Choàng Bay Đỏ Nhung Lãng Tử", "Áo Choàng Bóng Đêm Sát Thủ", "Váy Nữ Tính Xanh Lam Nhạt", "Váy Lụa Trắng Xanh Hoàng Gia",
        "Áo Sơ Mi Trắng Nút Cúc Đen", "Pháp Phục Lam Ngọc Thắt Đai Xanh", "Áo Choàng Thần Bí Đen Phối Vàng", "Pháp Y Dạ Thần Xanh Thẫm Thắt Nơ",
        "Pháp Phục Lôi Điện Xanh Băng", "Chiến Bào Hộ Vệ Lam Ngọc Nạm Bạc", "Áo Da Bọc Ống Thép Nâu Đất", "Áo Da Cung Thủ Kèm Dây Đạn",
        "Áo Thợ Săn Xanh Lục Dã Ngoại", "Áo Du Mục Xanh Rêu Đeo Nhành Cây", "Áo Khoác Da Thợ Săn Xanh Rêu", "Y Phục Xanh Rêu Nẹp Vàng Quý Tộc"
    ],
    # Row 21
    [
        "Áo Choàng Nhung Nâu Nẹp Vàng", "Áo Len Tím Khói Thắt Dây Lưng", "Áo Khoác Da Nâu Hạt Dẻ Khỏe Khoắn", "Chiến Bào Nhung Đỏ Đai Lưng Đen",
        "Hoàng Bào Đỏ Thẫm Nẹp Vàng Đế Vương", "Áo Choàng Da Nâu Khắc Họa Tiết", "Áo Gile Vàng Hoàng Kim Quý Tộc", "Áo Choàng Kỵ Sĩ Đỏ Thẫm Thắt Nơ",
        "Chiến Y Nâu Sẫm Dải Lụa Vàng", "Áo Kẻ Sọc Vàng Nâu Nổi Bật", "Y Phục Vàng Nghệ Thêu Hoa Văn Cổ", "Áo Gile Dạ Hội Tím Than Cổ Thêu",
        "Áo Khoác Dạ Tím Than Dây Lưng Lụa", "Áo Choàng Nhung Tím Thẫm Cúc Vàng", "Áo Thổ Cẩm Tím Kẻ Caro Hoàng Tộc", "Chiến Bào Hắc Ám Nẹp Bạc Đầu Lâu"
    ],
    # Row 22
    [
        "Thân Trần Cơ Bắp - Da Sáng", "Thân Trần Cơ Bắp - Da Hồng", "Thân Trần Cơ Bắp - Da Nâu Đồng", "Thân Trần Cơ Bắp - Da Ngăm",
        "Thân Trần Ma Tộc - Da Lam Thẫm", "Thân Trần Thú Tộc - Da Nâu", "Thân Trần Orc - Da Xanh Lục", "Thân Trần Yêu Tiên - Da Trắng",
        "Thân Trần Hắc Tiên - Da Tím Khói", "Thân Trần Mộc Tộc - Da Xám", "Áo Len Thép Tối Giản", "Áo Thun Sọc Xanh Rêu Thể Thao",
        "Áo Len Ô Liu Đơn Sắc", "Áo Thun Đỏ Đô Thể Thao", "Chiến Y Đỏ Thẫm Trơn", "Chiến Y Huyết Sắc Hoa Văn"
    ],
    # Row 23
    [
        "Áo Dệt Lông Da Báo Thổ Dân", "Áo Lụa Trắng Băng Giá", "Áo Gile Da Bò Thường Dân", "Áo Khoác Nỉ Thám Hiểm Xám",
        "Áo Khoác Da Xanh Kẻ Sọc", "Áo Vảy Cá Rồng Xanh Dương", "Thân Thể Xăm Họa Tiết Đá Cổ", "Cơ Bắp 6 Múi Vạm Vỡ - Da Sáng",
        "Cơ Bắp 6 Múi Vạm Vỡ - Da Hồng", "Cơ Bắp 6 Múi Vạm Vỡ - Da Nâu Đồng", "Cơ Bắp 6 Múi Vạm Vỡ - Da Ngăm", "Cơ Bắp 6 Múi - Ác Ma Lam Thẫm",
        "Cơ Bắp 6 Múi - Hoang Thú Nâu", "Cơ Bắp 6 Múi - Đại Ma Orc Xanh", "Cơ Bắp 6 Múi - Bạch Tạng Vampire", "Cơ Bắp 6 Múi - Dạ Ma Tím Khói"
    ]
]

outfit_groups = {
    16: "quytoc",
    17: "thuongdan",
    18: "duhiep",
    19: "chiengiap",
    20: "phapsu",
    21: "quytoc",
    22: "cobap",
    23: "cobap"
}

outfit_count = 0
for r_idx, r in enumerate(range(16, 24)):
    is_long_robe = r in [16, 20, 21]
    for c in range(16):
        cell = get_cell(c, r)
        if not cell.getbbox():
            continue
        o_id = f"outfit_r{r}_c{c}"
        o_name = outfit_names_matrix[r_idx][c]
        o_grp = outfit_groups.get(r, "quytoc")
        
        shaped_cell = shape_outfit(cell, is_long=is_long_robe)
        frame_48 = make_48_frame(shaped_cell, CX, BY)
        src, thumb = save_asset("outfits", o_id, frame_48)
        
        OUTFITS_CONFIG.append({
            "id": o_id,
            "name": o_name,
            "src": thumb,
            "type": "outfits",
            "group": o_grp,
            "layers": [
                { "src": src, "z_index": 30, "category": "outfits" }
            ]
        })
        outfit_count += 1

print(f"Generated {outfit_count} Outfits.")

# =========================================================================
# 4. BOTTOMS & LEGS (Quần & Giày Ủng - 2 Chân Hoàn Chỉnh Chuẩn Pixel Art)
# =========================================================================
BOTTOMS_CONFIG = []

# Bare legs from Row 26
bare_leg_names = [
    "Chân Trần - Da Sáng", "Chân Trần - Da Hồng", "Chân Trần - Da Nâu Đồng", "Chân Trần - Da Ngăm",
    "Chân Trần - Nắng Gió", "Chân Trần - Orc Xanh", "Chân Trần - Hắc Tiên Tím", "Chân Trần - Thú Tộc",
    "Chân Trần - Thượng Tiên", "Chân Trần - Vampire Trắng", "Chân Trần - Zombie Xám", "Khung Xương Trần Mắt Đỏ",
    "Hoàng Kim Xương Trần", "Chân Đá Cổ Thạch", "Chân Trần Thằn Lằn", "Chân Dị Tộc Ngoại Giới"
]

for c in range(16):
    cell = get_cell(c, 26)
    if not cell.getbbox(): continue
    b_id = f"bottom_r26_c{c}"
    b_name = bare_leg_names[c]
    cell_2leg = build_anatomy_legs(cell)
    frame_48 = make_48_frame(cell_2leg, CX, LY)
    src, thumb = save_asset("bottoms", b_id, frame_48)
    BOTTOMS_CONFIG.append({
        "id": b_id, "name": b_name, "src": thumb, "type": "bottoms",
        "layers": [{ "src": src, "z_index": 20, "category": "bottoms" }]
    })

leg_names_row30 = [
    "Ủng Hiệp Sĩ Xanh Thẫm Viền Vàng", "Ủng Chiến Binh Xanh Phối Đỏ", "Ủng Hiệp Sĩ Hắc Ám Viền Đỏ", "Ủng Vàng Đen Hiệp Sĩ Hoàng Gia",
    "Quần Da Thợ Săn Rừng Xanh Thẫm", "Quần Vải Lụa Đen Sát Thủ", "Quần Lụa Đen Đế Thép Nổi Bật", "Quần Nâu Thợ Rèn Viền Vàng",
    "Quần Lụa Tím Sát Thủ Độc Dược", "Quần Xám Khói Viền Đỏ Mận", "Quần Xanh Rêu Viền Da Bò", "Quần Đỏ Đô Thợ Săn Hoang Dã",
    "Quần Đỏ Rượu Vang Tối Giản", "Quần Nhung Tím Than Chiến Binh", "Quần Vải Xanh Thẫm Tối Giản", "Quần Hiệp Sĩ Hắc Báo"
]

leg_names_row31 = [
    "Ủng Da Bò Cổ Điển", "Ủng Da Xám Du Mục", "Ủng Da Đen Hiệp Sĩ Bọc Thép", "Ủng Da Tím Quý Tộc",
    "Quần Xanh Lục Đậm Chân Trần", "Quần Vàng Hoàng Gia Chân Trần", "Quần Đen Sát Thủ Chân Trần", "Chân Trần Dã Ngoại Tự Nhiên",
    "Ủng Da Dài Đen Tuyền", "Ủng Chiến Binh Viền Trắng Nổi Bật", "Ủng Đen Đế Trắng Thể Thao", "Ủng Da Nâu Đậm Du Mục",
    "Ủng Da Đen Nẹp Đồng", "Quần Nhung Tím Phong Cách"
]

for c in range(16):
    cell = get_cell(c, 30)
    if not cell.getbbox(): continue
    b_id = f"bottom_r30_c{c}"
    b_name = leg_names_row30[c] if c < len(leg_names_row30) else f"Quần Giáp #{c+1}"
    cell_2leg = build_anatomy_legs(cell)
    frame_48 = make_48_frame(cell_2leg, CX, LY)
    src, thumb = save_asset("bottoms", b_id, frame_48)
    BOTTOMS_CONFIG.append({
        "id": b_id, "name": b_name, "src": thumb, "type": "bottoms",
        "layers": [{ "src": src, "z_index": 20, "category": "bottoms" }]
    })

for c in range(14):
    cell = get_cell(c, 31)
    if not cell.getbbox(): continue
    b_id = f"bottom_r31_c{c}"
    b_name = leg_names_row31[c] if c < len(leg_names_row31) else f"Ủng Giày #{c+1}"
    cell_2leg = build_anatomy_legs(cell)
    frame_48 = make_48_frame(cell_2leg, CX, LY)
    src, thumb = save_asset("bottoms", b_id, frame_48)
    BOTTOMS_CONFIG.append({
        "id": b_id, "name": b_name, "src": thumb, "type": "bottoms",
        "layers": [{ "src": src, "z_index": 20, "category": "bottoms" }]
    })

print(f"Generated {len(BOTTOMS_CONFIG)} Bottoms/Legs with true 2-leg anatomy.")

# =========================================================================
# 5. HEADGEAR & EARS & MASKS (Mũ, Tai Thú, Sừng & Kính)
# =========================================================================
HEADGEAR_CONFIG = [
    {
        "id": "headgear_none",
        "name": "Không đội mũ / phụ kiện đầu (Trống)",
        "type": "headgear",
        "layers": []
    }
]

headgear_items = [
    (0, 14, "Tai Thỏ Trắng Dài Hồng", "headgear"),
    (1, 14, "Cặp Sừng Linh Dương Xám", "headgear"),
    (2, 14, "Tai Chó Cụp Nâu Xám", "headgear"),
    (3, 14, "Tai Chó Vểnh Đen", "headgear"),
    (4, 14, "Băng Bịt Mắt Sát Thủ (Eye Patch)", "headgear"),
    (5, 14, "Kính Râm Quý Tộc / Điệp Viên (Glasses)", "headgear"),
    (6, 14, "Băng Đô Ninja Đỏ (Headband)", "headgear"),
    (7, 14, "Tai Cáo Lửa Nâu Vàng (Kitsune Ears)", "headgear"),
    (8, 14, "Tai Cáo Hoàng Kim Thần Thoại", "headgear"),
    (9, 14, "Tai Sói Xám Hoang Dã", "headgear"),
    (14, 14, "Kính Mắt Cyber / Ma Pháp Viền Tím", "headgear"),
    (15, 14, "Vết Sẹo Phong Trần / Lông Mày Độc", "headgear"),
    (15, 15, "Cặp Sừng Ác Ma Uốn Cong (Demon Horns)", "headgear"),
]

for c, r, name, cat in headgear_items:
    cell = get_cell(c, r)
    if not cell.getbbox(): continue
    hg_id = f"hg_r{r}_c{c}"
    frame_48 = make_48_frame(cell, CX, HY)
    src, thumb = save_asset("headgear", hg_id, frame_48)
    HEADGEAR_CONFIG.append({
        "id": hg_id, "name": name, "src": thumb, "type": "headgear",
        "layers": [{ "src": src, "z_index": 70, "category": "headgear" }]
    })

print(f"Generated {len(HEADGEAR_CONFIG)} Headgear items.")

# =========================================================================
# 6. ACCESSORIES & TAILS & BELTS (Đuôi & Thắt Lưng)
# =========================================================================
ACCESSORIES_CONFIG = [
    {
        "id": "acc_none",
        "name": "Không phụ kiện lưng/đuôi (Trống)",
        "type": "accessories",
        "layers": []
    }
]

tails_and_belts = [
    # Tails (pasted at LY, z=10 behind body)
    (10, 14, "Đuôi Sói Xám Hoang Dã", "accessories", LY, 10),
    (11, 14, "Đuôi Cáo Lửa Kitsune Nâu Đỏ", "accessories", LY, 10),
    (12, 14, "Đuôi Chồn Đen Uốn Lượn", "accessories", LY, 10),
    (13, 14, "Đuôi Ác Ma Mũi Tên Nhọn (Devil Tail)", "accessories", LY, 10),
    # Belts (pasted at LY, z=35 on top of waistline)
    (0, 24, "Thắt Lưng Chiến Binh Khóa Đồng Đỏ", "accessories", LY, 35),
    (1, 24, "Khóa Thắt Lưng Vàng Da Sáng", "accessories", LY, 35),
    (2, 24, "Thắt Lưng Da Nâu Đen Thợ Săn", "accessories", LY, 35),
    (3, 24, "Khóa Lưng Lục Bảo Cổ Điển", "accessories", LY, 35),
    (4, 24, "Đai Lưng Lam Ngọc Pháp Sư", "accessories", LY, 35),
    (5, 24, "Thắt Lưng Da Bò Quý Phái", "accessories", LY, 35),
    (6, 24, "Thắt Lưng Thép Titan Chiến Binh", "accessories", LY, 35),
    (7, 24, "Đai Lụa Trắng Hoàng Tộc", "accessories", LY, 35),
    (12, 24, "Thắt Lưng Vàng Kim Khảm Đá Đen", "accessories", LY, 35),
    (13, 24, "Đai Lưng Lam Thạch Huyền Bí", "accessories", LY, 35),
]

for c, r, name, cat, py, z in tails_and_belts:
    cell = get_cell(c, r)
    if not cell.getbbox(): continue
    a_id = f"acc_r{r}_c{c}"
    frame_48 = make_48_frame(cell, CX, py)
    src, thumb = save_asset("accessories", a_id, frame_48)
    ACCESSORIES_CONFIG.append({
        "id": a_id, "name": name, "src": thumb, "type": "accessories",
        "layers": [{ "src": src, "z_index": z, "category": "accessories" }]
    })

print(f"Generated {len(ACCESSORIES_CONFIG)} Accessories/Tails.")

# =========================================================================
# 7. SHADOWS & AURAS (Bóng Đổ Mặt Đất - Ôm Khít Gót Giày)
# =========================================================================
SHADOWS_CONFIG = [
    {
        "id": "shadow_none",
        "name": "Không bóng đổ (Trống)",
        "type": "shadows",
        "layers": []
    }
]

# Ground shadow from row 29 pasted at SY=18 so line 14 sits directly at Y=32
sh_cell = get_cell(12, 29)
sh_frame = Image.new('RGBA', (FRAME_SIZE, FRAME_SIZE), (0, 0, 0, 0))
sh_frame.paste(sh_cell, (CX, SY), sh_cell)
src_sh, thumb_sh = save_asset("shadows", "shadow_ground_pixel", sh_frame)

SHADOWS_CONFIG.append({
    "id": "shadow_ground_pixel",
    "name": "Bóng Đổ Mặt Đất (Pixel Shadow)",
    "src": thumb_sh,
    "type": "shadows",
    "layers": [
        { "src": src_sh, "z_index": 5, "category": "shadows" }
    ]
})

# Magical Auras
for aura_id, aura_name in [
    ("aura_arcane_blue", "Hào Quang Lam Ngọc Ma Pháp"),
    ("aura_fire_red", "Hào Quang Hỏa Diệm Rực Lửa"),
    ("aura_legendary_gold", "Hào Quang Hoàng Kim Truyền Thuyết"),
    ("aura_nether_purple", "Hào Quang Hư Không Hắc Ám"),
]:
    aura_src = f"/assets/props/auras/{aura_id}.png"
    SHADOWS_CONFIG.append({
        "id": aura_id,
        "name": aura_name,
        "src": aura_src,
        "type": "shadows",
        "layers": [
            { "src": src_sh, "z_index": 5, "category": "shadows" },
            { "src": aura_src, "z_index": 2, "category": "shadows" }
        ]
    })

print(f"Generated {len(SHADOWS_CONFIG)} Shadows/Auras.")

# =========================================================================
# 8. WEAPONS (Vũ khí & Pháp cụ)
# =========================================================================
WEAPONS_CONFIG = [
    {
        "id": "weapon_none",
        "name": "Không trang bị vũ khí (Trống)",
        "type": "weapons",
        "layers": []
    }
]

weapon_defs = [
    ("sword_iron", "Thanh Kiếm Hiệp Sĩ Sắt", "sword_iron.png", 26, 12, 20, 80),
    ("sword_gold", "Hoàng Kim Trảm Long Kiếm", "sword_gold.png", 26, 12, 20, 80),
    ("sword_frost", "Băng Hàn Trảm Kiếm", "sword_frost.png", 26, 12, 20, 80),
    ("sword_void", "Hư Không Đoạt Hồn Kiếm", "sword_void.png", 26, 12, 20, 80),
    ("dagger_iron", "Dao Găm Sát Thủ Thép Đen", "dagger_iron.png", 26, 16, 16, 80),
    ("bow_iron", "Cung Gỗ Săn Bắn Thợ Săn", "bow_iron.png", 8, 14, 20, 80),
    ("wand_gold", "Trượng Phép Hoàng Kim Trí Tuệ", "wand_gold.png", 26, 10, 20, 80),
    ("wand_frost", "Quyền Trượng Hàn Băng Cổ Đại", "wand_frost.png", 26, 10, 20, 80),
    ("gear_wood_shield", "Khiên Gỗ Chiến Binh Viền Thép", "gear_wood_shield.png", 8, 16, 18, 75),
    ("shield_kite_gold", "Khiên Hoàng Kim Vương Quốc", "shield_kite_gold.png", 8, 16, 18, 75),
    ("shield_tower_iron", "Khiên Tháp Pháo Đài Vững Chắc", "shield_tower_iron.png", 8, 16, 18, 75),
    ("potion_health", "Bình Thuốc Sinh Mệnh Đỏ", "potion_health.png", 26, 18, 14, 80),
    ("potion_mana", "Bình Dược Năng Lượng Lam Ngọc", "potion_mana.png", 26, 18, 14, 80),
]

for w_id, w_name, prop_file, wx, wy, w_size, z in weapon_defs:
    prop_path = os.path.join(BASE_DIR, "frontend", "public", "assets", "props", "items", prop_file)
    if os.path.exists(prop_path):
        p_im = Image.open(prop_path).convert('RGBA')
        p_scaled = p_im.resize((w_size, w_size), Image.Resampling.NEAREST)
        
        w_frame = Image.new('RGBA', (FRAME_SIZE, FRAME_SIZE), (0, 0, 0, 0))
        w_frame.paste(p_scaled, (wx, wy), p_scaled)
        
        src_w, thumb_w = save_asset("weapons", w_id, w_frame)
        WEAPONS_CONFIG.append({
            "id": w_id,
            "name": w_name,
            "src": f"/assets/props/thumbs/{prop_file}",
            "type": "weapons",
            "layers": [
                { "src": src_w, "z_index": z, "category": "weapons" }
            ]
        })

print(f"Generated {len(WEAPONS_CONFIG)} Weapons.")

# =========================================================================
# WRITE JAVASCRIPT CONFIGURATION
# =========================================================================
js_content = f"""// ============================================================
// FANTASY CHARACTER CONFIGURATION (Nhân Vật Fantasy Chibi RPG)
// Frame Size: 48x48 Pixel-Perfect Integer Scaled, Crisp 0-blur Rendering
// ============================================================

export const fantasyPalettes = [
  {{ name: 'Mặc định (Nguyên bản)', hex: '#ffffff' }},
  {{ name: 'Hoàng Kim (Royal Gold)', hex: '#eab308' }},
  {{ name: 'Lam Ngọc (Arcane Blue)', hex: '#38bdf8' }},
  {{ name: 'Lục Bảo (Forest Jade)', hex: '#22c55e' }},
  {{ name: 'Hỏa Diệm (Fire Crimson)', hex: '#ef4444' }},
  {{ name: 'Hư Không (Nether Purple)', hex: '#a855f7' }},
  {{ name: 'Hắc Ám (Shadow Onyx)', hex: '#334155' }},
  {{ name: 'Bạch Kim (Silver Pure)', hex: '#e2e8f0' }}
];

export const fantasyColorPalettes = {{
  races: fantasyPalettes,
  hairs: fantasyPalettes,
  outfits: fantasyPalettes,
  bottoms: fantasyPalettes,
  headgear: fantasyPalettes,
  accessories: fantasyPalettes,
  weapons: fantasyPalettes
}};

export const fantasyGroups = {{
  races: [
    {{ id: 'all', name: 'Tất Cả (30)' }},
    {{ id: 'human', name: '👤 Loài Người' }},
    {{ id: 'fantasy', name: '🧝 Tiên & Ma Tộc' }},
    {{ id: 'undead', name: '💀 Dị Chủng & Bất Tử' }},
    {{ id: 'beast', name: '🦊 Hoang Thú Tộc' }}
  ],
  hairs: [
    {{ id: 'all', name: 'Tất Cả (96)' }},
    {{ id: 'Nâu', name: '🟤 Nâu' }},
    {{ id: 'Vàng', name: '🟡 Vàng' }},
    {{ id: 'Bạc', name: '⚪ Bạc' }},
    {{ id: 'Đen', name: '⚫ Đen' }},
    {{ id: 'Lam Ngọc', name: '🔵 Lam Ngọc' }},
    {{ id: 'Lục Bảo', name: '🟢 Lục Bảo' }},
    {{ id: 'Hung Đỏ', name: '🟠 Hung Đỏ' }},
    {{ id: 'Bạch Kim', name: '✨ Bạch Kim' }}
  ],
  outfits: [
    {{ id: 'all', name: 'Tất Cả (128)' }},
    {{ id: 'chiengiap', name: '⚔️ Hiệp Sĩ & Áo Giáp' }},
    {{ id: 'phapsu', name: '🔮 Pháp Sư & Thuật Sĩ' }},
    {{ id: 'duhiep', name: '🏹 Du Hiệp & Sát Thủ' }},
    {{ id: 'quytoc', name: '👑 Quý Tộc & Lễ Phục' }},
    {{ id: 'thuongdan', name: '🌾 Thường Dân & Dã Ngoại' }},
    {{ id: 'cobap', name: '🥋 Thân Trần & Cơ Bắp' }}
  ]
}};

export const fantasyConfig = {{
  races: {json.dumps(RACES_CONFIG, ensure_ascii=False, indent=2)},
  expressions: {json.dumps(EXPRESSIONS_CONFIG, ensure_ascii=False, indent=2)},
  hairs: {json.dumps(HAIRS_CONFIG, ensure_ascii=False, indent=2)},
  outfits: {json.dumps(OUTFITS_CONFIG, ensure_ascii=False, indent=2)},
  bottoms: {json.dumps(BOTTOMS_CONFIG, ensure_ascii=False, indent=2)},
  headgear: {json.dumps(HEADGEAR_CONFIG, ensure_ascii=False, indent=2)},
  accessories: {json.dumps(ACCESSORIES_CONFIG, ensure_ascii=False, indent=2)},
  weapons: {json.dumps(WEAPONS_CONFIG, ensure_ascii=False, indent=2)},
  shadows: {json.dumps(SHADOWS_CONFIG, ensure_ascii=False, indent=2)}
}};

export const getFantasyLayers = (selections, activeColors = {{}}) => {{
  const layers = [];

  // 1. Shadows (Ground shadow & aura)
  const shadowId = selections.shadows || 'shadow_ground_pixel';
  if (shadowId && !shadowId.endsWith('_none')) {{
    const group = fantasyConfig.shadows;
    const item = group.find(i => i.id === shadowId);
    if (item && item.layers) {{
      item.layers.forEach(l => layers.push({{ ...l, color: activeColors.shadows || '#ffffff' }}));
    }}
  }}

  // 2. Tails & Back accessories (behind body)
  const accId = selections.accessories;
  if (accId && !accId.endsWith('_none')) {{
    const group = fantasyConfig.accessories;
    const item = group.find(i => i.id === accId);
    if (item && item.layers) {{
      item.layers.forEach(l => layers.push({{ ...l, color: activeColors.accessories || '#ffffff' }}));
    }}
  }}

  // 3. Bottoms / Legs (2 distinct legs, pants & boots)
  const bottomId = selections.bottoms || 'bottom_r30_c0';
  if (bottomId && !bottomId.endsWith('_none')) {{
    const group = fantasyConfig.bottoms;
    const item = group.find(i => i.id === bottomId);
    if (item && item.layers) {{
      item.layers.forEach(l => layers.push({{ ...l, color: activeColors.bottoms || '#ffffff' }}));
    }}
  }}

  // 4. Outfits (Torso / Clothes / Armor)
  const outfitId = selections.outfits || 'outfit_r19_c0';
  if (outfitId && !outfitId.endsWith('_none')) {{
    const group = fantasyConfig.outfits;
    const item = group.find(i => i.id === outfitId);
    if (item && item.layers) {{
      item.layers.forEach(l => layers.push({{ ...l, color: activeColors.outfits || '#ffffff' }}));
    }}
  }}

  // 5. Races & Expressions (Head / Face)
  const raceId = selections.races || 'race_human_fair';
  const exprId = selections.expressions || 'expr_neutral';
  const raceGroup = fantasyConfig.races;
  const raceItem = raceGroup.find(i => i.id === raceId) || raceGroup[0];
  
  if (raceItem) {{
    let headSrc = raceItem.defaultSrc;
    if (raceItem.expressions && raceItem.expressions[exprId]) {{
      headSrc = raceItem.expressions[exprId];
    }}
    layers.push({{
      src: headSrc,
      z_index: 40,
      category: 'races',
      color: activeColors.races || '#ffffff'
    }});
  }}

  // 6. Hairstyles
  const hairId = selections.hairs || 'hair_r8_c0';
  if (hairId && !hairId.endsWith('_none')) {{
    const group = fantasyConfig.hairs;
    const item = group.find(i => i.id === hairId);
    if (item && item.layers) {{
      item.layers.forEach(l => layers.push({{ ...l, color: activeColors.hairs || '#ffffff' }}));
    }}
  }}

  // 7. Headgear (Horns, Animal ears, Headbands, Glasses)
  const hgId = selections.headgear;
  if (hgId && !hgId.endsWith('_none')) {{
    const group = fantasyConfig.headgear;
    const item = group.find(i => i.id === hgId);
    if (item && item.layers) {{
      item.layers.forEach(l => layers.push({{ ...l, color: activeColors.headgear || '#ffffff' }}));
    }}
  }}

  // 8. Weapons & Tools
  const weaponId = selections.weapons;
  if (weaponId && !weaponId.endsWith('_none')) {{
    const group = fantasyConfig.weapons;
    const item = group.find(i => i.id === weaponId);
    if (item && item.layers) {{
      item.layers.forEach(l => layers.push({{ ...l, color: activeColors.weapons || '#ffffff' }}));
    }}
  }}

  return layers.sort((a, b) => (a.z_index || 0) - (b.z_index || 0));
}};
"""

with open(CONFIG_JS, "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Generated {CONFIG_JS} successfully!")
