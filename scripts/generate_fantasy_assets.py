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

FRAME_SIZE = 48
CX = 16 # (48 - 16) // 2
HY = 8  # Head Y in 48x48
BY = 18 # Body Y in 48x48 (HY + 10)
LY = 25 # Legs Y in 48x48 (BY + 7)

def make_48_frame(crop, px, py):
    """Pastes 16x16 crop onto a 48x48 frame at (px, py)."""
    frame = Image.new('RGBA', (FRAME_SIZE, FRAME_SIZE), (0, 0, 0, 0))
    frame.paste(crop, (px, py), crop)
    return frame

def make_thumb(im_48, thumb_size=128):
    """Generates a crisp 128x128 thumbnail with 100% transparent background."""
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
# 1. RACES (Chủng tộc & Gương mặt)
# =========================================================================
HUMAN_RACES = [
    ("race_human_fair", "Người - Da Sáng (Fair Human)", 0),
    ("race_human_peach", "Người - Da Hồng Hào (Peach)", 1),
    ("race_human_tan", "Người - Da Nâu Đồng (Tan)", 2),
    ("race_human_dark", "Người - Da Ngăm Đen (Dark)", 3),
    ("race_human_sunburnt", "Người - Nắng Gió (Sunburnt)", 4),
    ("race_orc", "Đại Ma Tộc - Chiến Binh Orc (Green)", 5),
    ("race_dark_elf", "Hắc Tiên Tộc - Dạ Thuật Drow", 6),
    ("race_beastman", "Hoang Thú Tộc - Hổ Báo", 7),
    ("race_high_elf", "Thượng Tiên Tộc - Tai Nhọn", 8),
    ("race_vampire", "Huyết Tộc Dạ Thần - Vampire", 9),
    ("race_undead", "Xác Sống Cổ Thành - Zombie", 10),
    ("race_skeleton", "Khung Xương Ma Thuật - Mắt Đỏ", 11),
    ("race_golden_lich", "Hoàng Kim Vu Yêu - Mắt Vàng", 12),
    ("race_stone_golem", "Người Đá Cổ Thạch - Golem", 13),
    ("race_reptilian", "Thằn Lằn Đầm Lầy - Bò Sát", 14),
    ("race_alien", "Dị Tộc Không Gian - Ngoại Giới", 15),
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
    ("race_fox", "Linh Hồ Tộc - Cáo Lửa Kitsune", 1, 6),
    ("race_wolf", "Lang Tộc - Sói Xám Hoang Dã", 2, 6),
    ("race_raccoon", "Gấu Mèo Du Mục - Raccoon", 3, 6),
    ("race_cat", "Miêu Tộc - Mèo Mun Huyền Bí", 4, 6),
    ("race_bat", "Dạ Điệp Tộc - Dơi Ma Cà Rồng", 5, 6),
    ("race_devil", "Tiểu Dạ Quỷ - Ác Ma Bé", 6, 6),
    ("race_rabbit", "Ngọc Thố Tộc - Thỏ Trắng", 7, 6),
    ("race_dog", "Khuyển Hiệp Sĩ - Chó Trung Thành", 8, 6),
    ("race_minotaur", "Ngưu Ma Tộc - Trâu Rừng", 9, 6),
    ("race_snake", "Bạch Xà Tộc - Rắn Ma Thuật", 10, 6),
    ("race_goose", "Ngỗng Trời Tinh Nghịch - Duck", 11, 6),
    ("race_dragon", "Long Tộc - Viêm Long Hỏa Diệm", 12, 6),
    ("race_frog", "Cóc Tinh Ma Thuật - Frog Mage", 13, 6),
    ("race_crocodile", "Cá Sấu Đầm Lầy - Swamp Croc", 14, 6),
]

RACES_CONFIG = []
EXPRESSIONS_CONFIG = []

# Generate all race heads and expressions
for r_id, r_name, col in HUMAN_RACES:
    # Save default neutral head
    neutral_cell = get_cell(col, 0)
    frame_48 = make_48_frame(neutral_cell, CX, HY)
    src, thumb = save_asset("races", r_id, frame_48)
    
    # Save expression sub-variants for this race
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

# Beast races
for b_id, b_name, col, row in BEAST_RACES:
    b_cell = get_cell(col, row)
    frame_48 = make_48_frame(b_cell, CX, HY)
    src, thumb = save_asset("races", b_id, frame_48)
    
    # Beast open mouth is row+1
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
HAIR_PALETTES = [
    ("brown", "Nâu Hạt Dẻ", 8),
    ("orange", "Cam Lửa / Hung Đỏ", 9),
    ("blonde", "Vàng Hoàng Kim", 10),
    ("silver", "Bạc / Bạch Kim", 11),
    ("black", "Đen Huyền Bí", 12),
    ("blue", "Lam Ngọc Ma Pháp", 12),
    ("green", "Lục Bảo Rừng Sâu", 12),
    ("white", "Trắng Thuần Khiết", 13),
]

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
        
        # Color group
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
# 3. OUTFITS (128 Trang phục & Y phục)
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
    for c in range(16):
        cell = get_cell(c, r)
        if not cell.getbbox():
            continue
        o_id = f"outfit_r{r}_c{c}"
        o_name = outfit_names_matrix[r_idx][c]
        o_grp = outfit_groups.get(r, "quytoc")
        
        frame_48 = make_48_frame(cell, CX, BY)
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
# 4. BOTTOMS & LEGS (Quần & Giày Ủng)
# =========================================================================
BOTTOMS_CONFIG = []
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
    frame_48 = make_48_frame(cell, CX, LY)
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
    frame_48 = make_48_frame(cell, CX, LY)
    src, thumb = save_asset("bottoms", b_id, frame_48)
    BOTTOMS_CONFIG.append({
        "id": b_id, "name": b_name, "src": thumb, "type": "bottoms",
        "layers": [{ "src": src, "z_index": 20, "category": "bottoms" }]
    })

print(f"Generated {len(BOTTOMS_CONFIG)} Bottoms/Legs.")

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
# 6. ACCESSORIES & TAILS (Đuôi & Thắt Lưng)
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
    (10, 14, "Đuôi Sói Xám Hoang Dã", "accessories", BY, 10),
    (11, 14, "Đuôi Cáo Lửa Kitsune Nâu Đỏ", "accessories", BY, 10),
    (12, 14, "Đuôi Chồn Đen Uốn Lượn", "accessories", BY, 10),
    (13, 14, "Đuôi Ác Ma Mũi Tên Nhọn (Devil Tail)", "accessories", BY, 10),
    (0, 24, "Thắt Lưng Chiến Binh Khóa Đồng Đỏ", "accessories", BY, 35),
    (1, 24, "Khóa Thắt Lưng Vàng Da Sáng", "accessories", BY, 35),
    (2, 24, "Thắt Lưng Da Nâu Đen Thợ Săn", "accessories", BY, 35),
    (3, 24, "Khóa Lưng Lục Bảo Cổ Điển", "accessories", BY, 35),
    (4, 24, "Đai Lưng Lam Ngọc Pháp Sư", "accessories", BY, 35),
    (5, 24, "Thắt Lưng Da Bò Quý Phái", "accessories", BY, 35),
    (6, 24, "Thắt Lưng Thép Titan Chiến Binh", "accessories", BY, 35),
    (7, 24, "Đai Lụa Trắng Hoàng Tộc", "accessories", BY, 35),
    (12, 24, "Thắt Lưng Vàng Kim Khảm Đá Đen", "accessories", BY, 35),
    (13, 24, "Đai Lưng Lam Thạch Huyền Bí", "accessories", BY, 35),
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
# 7. SHADOWS & AURAS (Bóng Đổ Mặt Đất & Hào Quang)
# =========================================================================
SHADOWS_CONFIG = [
    {
        "id": "shadow_none",
        "name": "Không bóng đổ (Trống)",
        "type": "shadows",
        "layers": []
    }
]

# Ground shadow from row 29
sh_cell = get_cell(12, 29) # horizontal shadow
sh_frame = Image.new('RGBA', (FRAME_SIZE, FRAME_SIZE), (0, 0, 0, 0))
# Center shadow below the feet (at y=41..43)
sh_frame.paste(sh_cell, (CX, 27), sh_cell)
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

# Extra Magical Auras from prop library
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

# We can position weapons elegantly in the character's hand at (22, 14) or left hand (8, 18)
weapon_defs = [
    ("sword_iron", "Thanh Kiếm Hiệp Sĩ Sắt", "sword_iron.png", 22, 14, 22, 80),
    ("sword_gold", "Hoàng Kim Trảm Long Kiếm", "sword_gold.png", 22, 14, 22, 80),
    ("sword_frost", "Băng Hàn Trảm Kiếm", "sword_frost.png", 22, 14, 22, 80),
    ("sword_void", "Hư Không Đoạt Hồn Kiếm", "sword_void.png", 22, 14, 22, 80),
    ("dagger_iron", "Dao Găm Sát Thủ Thép Đen", "dagger_iron.png", 24, 18, 18, 80),
    ("bow_iron", "Cung Gỗ Săn Bắn Thợ Săn", "bow_iron.png", 8, 16, 20, 80),
    ("wand_gold", "Trượng Phép Hoàng Kim Trí Tuệ", "wand_gold.png", 22, 12, 22, 80),
    ("wand_frost", "Quyền Trượng Hàn Băng Cổ Đại", "wand_frost.png", 22, 12, 22, 80),
    ("gear_wood_shield", "Khiên Gỗ Chiến Binh Viền Thép", "gear_wood_shield.png", 6, 18, 20, 75),
    ("shield_kite_gold", "Khiên Hoàng Kim Vương Quốc", "shield_kite_gold.png", 6, 18, 20, 75),
    ("shield_tower_iron", "Khiên Tháp Pháo Đài Vững Chắc", "shield_tower_iron.png", 6, 18, 20, 75),
    ("potion_health", "Bình Thuốc Sinh Mệnh Đỏ", "potion_health.png", 24, 20, 16, 80),
    ("potion_mana", "Bình Dược Năng Lượng Lam Ngọc", "potion_mana.png", 24, 20, 16, 80),
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
            "src": f"/assets/props/thumbs/{prop_file}", # use high-res prop thumb
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

  // 3. Bottoms / Legs
  const bottomId = selections.bottoms || 'bottom_r30_c0';
  if (bottomId && !bottomId.endsWith('_none')) {{
    const group = fantasyConfig.bottoms;
    const item = group.find(i => i.id === bottomId);
    if (item && item.layers) {{
      item.layers.forEach(l => layers.push({{ ...l, color: activeColors.bottoms || '#ffffff' }}));
    }}
  }}

  // 4. Outfits (Torso / Clothes / Armor)
  const outfitId = selections.outfits || 'outfit_r19_c11';
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
    // Check if dynamic expression sprite exists
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
