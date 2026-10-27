"""
Comprehensive Master Prop Generator & Defringer for MindXAsset
Extracts, defringes (removes white halo via alpha un-multiplying),
crops tightly to bounding boxes, centers and scales cleanly to 48x48 (with ~42px inner coverage),
and generates 128x128 crisp thumbnails for the UI.
Categorizes all items into 10 rich, accurate, game-industry-grade categories.
"""

import os, sys, glob, zipfile, json, re
from PIL import Image
import numpy as np

OUTPUT_ITEMS_DIR = "frontend/public/assets/props/items"
OUTPUT_THUMBS_DIR = "frontend/public/assets/props/thumbs"
PROP_CONFIG_PATH = "frontend/src/pages/CharacterBuilder/prop_config.js"

os.makedirs(OUTPUT_ITEMS_DIR, exist_ok=True)
os.makedirs(OUTPUT_THUMBS_DIR, exist_ok=True)

def defringe_white(crop, t_low=170.0, t_high=246.0):
    """
    Un-multiplies white background from anti-aliased sprites.
    Eliminates all white halos and creates smooth alpha blending.
    """
    arr = np.array(crop.convert('RGBA')).astype(np.float32)
    rgb = arr[:, :, :3]
    min_c = np.min(rgb, axis=2)
    
    alpha = np.ones_like(min_c) * 255.0
    alpha[min_c >= t_high] = 0.0
    
    trans_mask = (min_c >= t_low) & (min_c < t_high)
    ratio = (min_c[trans_mask] - t_low) / (t_high - t_low)
    alpha[trans_mask] = 255.0 * (1.0 - ratio)
    
    a_norm = alpha / 255.0
    a_safe = np.maximum(a_norm, 0.01)[:, :, np.newaxis]
    clean_rgb = (rgb - (1.0 - a_safe) * 255.0) / a_safe
    clean_rgb = np.clip(clean_rgb, 0, 255)
    clean_rgb[alpha == 0] = 0
    
    out = np.dstack([clean_rgb, alpha]).astype(np.uint8)
    return Image.fromarray(out, 'RGBA')

def fit_to_frame(im, canvas_size=48, target_inner=42):
    """
    Tightly crops bounding box and centers into canvas_size with target_inner scale.
    Ensures sprite fills the frame crisply without being a tiny dot.
    """
    bbox = im.getbbox()
    if not bbox:
        return Image.new('RGBA', (canvas_size, canvas_size), (0, 0, 0, 0))
    cropped = im.crop(bbox)
    cw, ch = cropped.size
    scale = min(target_inner / cw, target_inner / ch)
    new_w = max(1, int(round(cw * scale)))
    new_h = max(1, int(round(ch * scale)))
    
    resample = Image.Resampling.LANCZOS if scale < 1.0 else Image.Resampling.NEAREST
    scaled = cropped.resize((new_w, new_h), resample)
    
    canvas = Image.new('RGBA', (canvas_size, canvas_size), (0, 0, 0, 0))
    ox = (canvas_size - new_w) // 2
    oy = (canvas_size - new_h) // 2
    canvas.paste(scaled, (ox, oy), scaled)
    return canvas

def make_thumb(im, thumb_size=128):
    """Generates crisp high-res 128x128 thumbnail for sidebar/inspector."""
    bbox = im.getbbox()
    if not bbox:
        return Image.new('RGBA', (thumb_size, thumb_size), (0, 0, 0, 0))
    cropped = im.crop(bbox)
    cw, ch = cropped.size
    target_inner = int(thumb_size * 0.88)
    scale = min(target_inner / cw, target_inner / ch)
    new_w = max(1, int(round(cw * scale)))
    new_h = max(1, int(round(ch * scale)))
    
    resample = Image.Resampling.NEAREST if scale >= 1.5 else Image.Resampling.LANCZOS
    scaled = cropped.resize((new_w, new_h), resample)
    
    thumb = Image.new('RGBA', (thumb_size, thumb_size), (0, 0, 0, 0))
    ox = (thumb_size - new_w) // 2
    oy = (thumb_size - new_h) // 2
    thumb.paste(scaled, (ox, oy), scaled)
    return thumb

def save_prop(img_rgba, item_id):
    """Saves 48x48 item and 128x128 thumb."""
    item_img = fit_to_frame(img_rgba, 48, 42)
    thumb_img = make_thumb(img_rgba, 128)
    
    item_path = os.path.join(OUTPUT_ITEMS_DIR, f"{item_id}.png")
    thumb_path = os.path.join(OUTPUT_THUMBS_DIR, f"{item_id}.png")
    
    item_img.save(item_path, "PNG", optimize=True)
    thumb_img.save(thumb_path, "PNG", optimize=True)
    
    return f"/assets/props/items/{item_id}.png", f"/assets/props/thumbs/{item_id}.png"

def slice_sheet_row(sheet_img, y0, y1, min_w=8, min_h=8, threshold=235):
    """Slices non-background blocks in horizontal row y0..y1."""
    arr = np.array(sheet_img.convert('RGB'))
    fg = np.any(arr < threshold, axis=2)
    row_fg = fg[y0:y1, :]
    x_proj = np.sum(row_fg, axis=0)
    
    x_blocks = []
    x_in = False
    x_start = 0
    for x in range(len(x_proj)):
        if x_proj[x] > 3 and not x_in:
            x_in = True
            x_start = x
        elif x_proj[x] <= 3 and x_in:
            x_in = False
            if x - x_start >= min_w:
                x_blocks.append((x_start, x))
    if x_in and len(x_proj) - x_start >= min_w:
        x_blocks.append((x_start, len(x_proj)))
        
    crops = []
    for x0, x1 in x_blocks:
        crop = sheet_img.crop((max(0, x0 - 1), max(0, y0 - 1), min(sheet_img.width, x1 + 1), min(sheet_img.height, y1 + 1)))
        crops.append(crop)
    return crops

# ==================== DATA DEFINITIONS ====================
PROP_TYPES = [
    {
        "id": "melee_weapons",
        "name": "⚔️ Vũ Khí Cận Chiến",
        "thumbSrc": "/assets/props/thumbs/sword_iron.png",
        "defaultState": "sword_iron"
    },
    {
        "id": "ranged_weapons",
        "name": "🏹 Vũ Khí Tầm Xa",
        "thumbSrc": "/assets/props/thumbs/bow_iron.png",
        "defaultState": "bow_iron"
    },
    {
        "id": "shields",
        "name": "🛡️ Khiên Chiến Binh",
        "thumbSrc": "/assets/props/thumbs/gear_wood_shield.png",
        "defaultState": "gear_wood_shield"
    },
    {
        "id": "armor_helmets",
        "name": "🪖 Mũ Giáp & Giáp Trụ",
        "thumbSrc": "/assets/props/thumbs/helm_iron.png",
        "defaultState": "helm_iron"
    },
    {
        "id": "potions",
        "name": "🧪 Độc Dược & Bình Thuốc",
        "thumbSrc": "/assets/props/thumbs/potion_health.png",
        "defaultState": "potion_health"
    },
    {
        "id": "chests_storage",
        "name": "📦 Rương Kho Báu & Thùng Chứa",
        "thumbSrc": "/assets/props/thumbs/chest_wood_closed.png",
        "defaultState": "chest_wood_closed"
    },
    {
        "id": "tomes_relics",
        "name": "📜 Pháp Khí, Cổ Thư & Bản Đồ",
        "thumbSrc": "/assets/props/thumbs/book_iron.png",
        "defaultState": "book_iron"
    },
    {
        "id": "gems_loot",
        "name": "💎 Châu Báu, Đá Quý & Tiền Tệ",
        "thumbSrc": "/assets/props/thumbs/gem_ruby.png",
        "defaultState": "gem_ruby"
    },
    {
        "id": "provisions",
        "name": "🍗 Lương Thực, Yến Tiệc & Đồ Uống",
        "thumbSrc": "/assets/props/thumbs/food_roast_01.png",
        "defaultState": "food_roast_01"
    },
    {
        "id": "tools_mechanisms",
        "name": "⚙️ Dụng Cụ Sinh Tồn & Cơ Quan",
        "thumbSrc": "/assets/props/thumbs/lever_off.png",
        "defaultState": "lever_off"
    }
]

ALL_STATES = []
seen_ids = set()

def add_state(item_id, name, for_type, src=None, thumbSrc=None):
    if item_id in seen_ids:
        return
    seen_ids.add(item_id)
    if src is None:
        src = f"/assets/props/items/{item_id}.png"
    if thumbSrc is None:
        thumbSrc = f"/assets/props/thumbs/{item_id}.png"
    ALL_STATES.append({
        "id": item_id,
        "name": name,
        "src": src,
        "thumbSrc": thumbSrc,
        "forType": for_type
    })

# 1. BASELINE ITEMS (Existing curated icons, re-processed with defringe/tight frame)
base_items = [
    # Melee Weapons
    ("sword_iron", "Thanh Gươm Thép Hiệp Sĩ", "melee_weapons"),
    ("sword_frost", "Thanh Gươm Băng Thanh Thần Bí", "melee_weapons"),
    ("sword_void", "Thanh Gươm Hư Không Bóng Đêm", "melee_weapons"),
    ("sword_gold", "Thanh Gươm Hoàng Kim Excalibur", "melee_weapons"),
    ("gear_iron_sword", "Thanh Kiếm Thép Cổ Điển", "melee_weapons"),
    ("axe_iron", "Rìu Chiến Phá Giáp Thép", "melee_weapons"),
    ("axe_frost", "Rìu Chiến Băng Tuyết Thần Bí", "melee_weapons"),
    ("axe_void", "Rìu Chiến Hư Không Huyền Ảo", "melee_weapons"),
    ("axe_gold", "Rìu Chiến Hoàng Kim Tráng Lệ", "melee_weapons"),
    ("gear_crystal_staff", "Quyền Trượng Pha Lê Cung Đình", "melee_weapons"),
    ("gear_wizard_wand", "Đũa Phép Thuật Thuần Khiết", "melee_weapons"),
    
    # Ranged Weapons
    ("bow_iron", "Cung Tên Săn Bắn Thép", "ranged_weapons"),
    ("bow_frost", "Cung Băng Tuyết Thần Xạ", "ranged_weapons"),
    ("bow_void", "Cung Hư Không Tầm Xa", "ranged_weapons"),
    ("bow_gold", "Cung Hoàng Kim Thần Thánh", "ranged_weapons"),
    
    # Shields
    ("gear_wood_shield", "Khiên Gỗ Chiến Binh Viking", "shields"),
    
    # Armor & Helmets
    ("helm_iron", "Mũ Giáp Trụ Thép Hiệp Sĩ", "armor_helmets"),
    ("helm_frost", "Nón Trụ Băng Bạc Thần Bí", "armor_helmets"),
    ("helm_void", "Mũ Giáp Hư Không Bóng Đêm", "armor_helmets"),
    ("helm_gold", "Mũ Giáp Hoàng Kim Thần Thánh", "armor_helmets"),
    ("armor_iron", "Áo Giáp Tấm Thép Kiên Cố", "armor_helmets"),
    ("armor_frost", "Giáp Băng Thanh Tuyết Sơn", "armor_helmets"),
    ("armor_void", "Giáp Hắc Ám Hư Không", "armor_helmets"),
    ("armor_gold", "Giáp Hoàng Kim Thánh Hiệp Sĩ", "armor_helmets"),
    ("cape_iron", "Áo Choàng Xám Chiến Binh", "armor_helmets"),
    ("cape_frost", "Áo Choàng Băng Lam Thần Bí", "armor_helmets"),
    ("cape_void", "Áo Choàng Dạ Nguyệt Tím Đậm", "armor_helmets"),
    ("cape_gold", "Áo Choàng Hoàng Kim Quý Tộc", "armor_helmets"),
    ("hat_iron", "Mũ Nón Thép Thợ Săn", "armor_helmets"),
    ("hat_frost", "Mũ Nón Băng Sơn", "armor_helmets"),
    ("hat_void", "Mũ Nón Pháp Sư Hư Không", "armor_helmets"),
    ("hat_gold", "Mũ Vương Miện Hoàng Kim", "armor_helmets"),
    ("gloves_leather", "Găng Tay Da Thợ Săn", "armor_helmets"),
    ("gloves_gold", "Găng Tay Hoàng Kim Giáp", "armor_helmets"),
    ("gloves_crystal", "Găng Tay Pha Lê Tinh Xảo", "armor_helmets"),
    ("crown_gold_belt", "Thắt Lưng Hoàng Kim Giáp", "armor_helmets"),
    
    # Potions
    ("potion_health", "Bình Sinh Mệnh Đỏ Tươi", "potions"),
    ("potion_health_small", "Bình Sinh Mệnh Cỡ Nhỏ", "potions"),
    ("potion_mana", "Bình Mana Ma Lực Xanh Lam", "potions"),
    ("potion_mana_small", "Bình Mana Cỡ Nhỏ", "potions"),
    ("potion_poison", "Bình Thuốc Độc Lục Bảo", "potions"),
    ("potion_elixir", "Tiên Dược Hoàng Kim Phục Sinh", "potions"),
    ("magic_shroom_blue", "Nấm Ma Thuật Xanh Huyền Bí", "potions"),
    
    # Chests & Storage
    ("chest_wood_closed", "Rương Gỗ Hầm Ngục (Khóa Chặt)", "chests_storage"),
    ("chest_wood_open", "Rương Gỗ Mở Bung (Tràn Vàng Bạc)", "chests_storage"),
    ("chest_iron_closed", "Rương Sắt Cổ Đại (Khóa Chặt)", "chests_storage"),
    ("chest_iron_open", "Rương Sắt Mở Bung (Kho Báu Hiếm)", "chests_storage"),
    ("chest_gold_closed", "Rương Hoàng Kim Thần Thoại (Khóa Chặt)", "chests_storage"),
    ("chest_gold_open", "Rương Hoàng Kim Mở (Châu Báu Vô Giá)", "chests_storage"),
    ("chest_sheet_iron", "Hòm Đồ Thép Viền Đinh", "chests_storage"),
    ("chest_sheet_blue", "Rương Kho Báu Biển Sâu Lam Ngọc", "chests_storage"),
    ("chest_sheet_purple", "Rương Hư Không Ma Thuật Tím", "chests_storage"),
    ("chest_sheet_gold", "Rương Vàng Cung Điện Cổ", "chests_storage"),
    ("chest_sheet_red", "Rương Hỏa Diệm Rực Cháy", "chests_storage"),
    
    # Tomes & Relics
    ("book_iron", "Cổ Thư Ma Thuật Thép", "tomes_relics"),
    ("book_frost", "Cổ Thư Băng Giá Cực Bắc", "tomes_relics"),
    ("book_void", "Cổ Thư Hư Không Bóng Tối", "tomes_relics"),
    ("book_gold", "Kinh Thánh Hoàng Kim Thần Khí", "tomes_relics"),
    ("book_open_sheet", "Cổ Thư Ma Pháp Mở Trang Thần Chú", "tomes_relics"),
    ("dragon_horns", "Cặp Sừng Rồng Hộ Vệ Thần Linh", "tomes_relics"),
    
    # Gems & Loot
    ("gem_ruby", "Hồng Ngọc Huyết Tinh (Ruby Gem)", "gems_loot"),
    ("gem_emerald", "Ngọc Lục Bảo Rực Rỡ (Emerald Gem)", "gems_loot"),
    ("gem_sapphire", "Lam Ngọc Hoàng Gia (Sapphire Gem)", "gems_loot"),
    ("gem_sapphire_cut", "Lam Ngọc Giác Cắt Hoàng Gia", "gems_loot"),
    ("gem_diamond", "Kim Cương Bất Hoại (Diamond Gem)", "gems_loot"),
    ("gem_drop_cyan", "Giọt Lệ Thần Linh Lam Ngọc", "gems_loot"),
    ("gem_drop_gold", "Giọt Hoàng Kim Tinh Túy", "gems_loot"),
    ("gem_drop_green", "Giọt Lục Bảo Thảo Mộc", "gems_loot"),
    ("gem_drop_purple", "Giọt Thạch Anh Tím Hư Không", "gems_loot"),
    ("crystal_shard_purple", "Mảnh Tinh Thể Pha Lê Tím", "gems_loot"),
    ("crystals_ice_cluster", "Cụm Tinh Thể Băng Tinh", "gems_loot"),
    ("gold_bar", "Thỏi Vàng Ròng 9999", "gems_loot"),
    ("coins_gold_stack", "Chồng Tiền Vàng Hoàng Kim", "gems_loot"),
    ("bracelet_blue", "Vòng Tay Thủy Tinh Lam", "gems_loot"),
    ("bracelet_jade", "Vòng Tay Phỉ Thúy Lục Bảo", "gems_loot"),
    ("bracelet_purple", "Vòng Tay Thạch Anh Tím", "gems_loot"),
    ("bracelet_wood", "Vòng Tay Gỗ Cổ Thụ", "gems_loot"),
    ("choker_green", "Vòng Cổ Ngọc Bích Thần Rừng", "gems_loot"),
    ("choker_purple", "Vòng Cổ Huyền Bí Bóng Đêm", "gems_loot"),
    
    # Provisions
    ("apple_sheet", "Quả Táo Đỏ Rừng Mọng Nước", "provisions"),
    ("apple_green", "Quả Táo Xanh Chua Giòn", "provisions"),
    ("banana_ripe", "Nải Chuối Vàng Chín Ngọt", "provisions"),
    ("berries_red", "Chùm Dâu Rừng Đỏ Thắm", "provisions"),
    ("blackberries_dark", "Chùm Mâm Xôi Đen Mọng", "provisions"),
    ("blueberries_wild", "Việt Quất Rừng Hoang Dã", "provisions"),
    ("bread_loaf_sheet", "Ổ Bánh Mì Nướng Nứt Lò", "provisions"),
    ("cheese_wedge", "Miếng Phô Mai Vàng Béo Ngậy", "provisions"),
    ("carrot_fresh", "Củ Cà Rốt Tươi Giòn", "provisions"),
    ("leek_fresh", "Cây Tỏi Tây Gia Vị Thơm", "provisions"),
    ("fish_fresh_sheet", "Con Cá Biển Tươi Roi Rói", "provisions"),
    
    # Tools & Mechanisms
    ("lever_off", "Cần Gạt Cơ Quan (Trạng Thái Đóng / OFF)", "tools_mechanisms"),
    ("lever_on", "Cần Gạt Cơ Quan (Trạng Thái Mở / ON)", "tools_mechanisms"),
    ("portal_active", "Cổng Dịch Chuyển Không Gian Sáng Rực", "tools_mechanisms")
]

for item_id, name, for_type in base_items:
    # Re-crop tightly to make sure it fills the frame and has zero white halo
    item_file = os.path.join(OUTPUT_ITEMS_DIR, f"{item_id}.png")
    if os.path.exists(item_file):
        im = Image.open(item_file).convert('RGBA')
        # defringe if needed
        im_clean = defringe_white(im)
        save_prop(im_clean, item_id)
    add_state(item_id, name, for_type)

print(f"Loaded {len(ALL_STATES)} baseline items.")

# 2. DAWNKEEP ASSETS (Clean 48x48 inventory icons)
dawnkeep_zip = "NewAsset/Dawnkeep_Free_Sample_v1.0.zip"
if os.path.exists(dawnkeep_zip):
    with zipfile.ZipFile(dawnkeep_zip, 'r') as z:
        dawnkeep_mapping = [
            ("002_Heart_Flask", "Bình Sinh Mệnh Trái Tim (Heart Flask)", "potions"),
            ("005_Twin_Chamber_Elixir", "Thuốc Tiên Buồng Kép (Twin Elixir)", "potions"),
            ("021_Bread_Loaf", "Ổ Bánh Mì Lúa Mạch Nướng", "provisions"),
            ("026_Apple", "Táo Rừng Đỏ Tươi", "provisions"),
            ("041_Wheat_Sheaf", "Bó Lúa Mì Vàng Óng Mùa Gặt", "provisions"),
            ("048_Sunflower_Head", "Bông Hoa Hướng Dương Mặt Trời", "provisions"),
            ("061_Iron_Ore", "Cục Quặng Sắt Hầm Mỏ Thô", "gems_loot"),
            ("065_Silver_Ingot", "Thỏi Bạc Trắng Đúc Khối", "gems_loot"),
            ("081_Wood_Log", "Khúc Gỗ Sồi Rừng Nguyên Khối", "tools_mechanisms"),
            ("089_Thread_Spools", "Cuộn Chỉ Khâu Da Thuật Sĩ", "tools_mechanisms"),
            ("101_Coin_Pouch", "Túi Tiền Xu Vàng Đầy Ắp", "gems_loot"),
            ("106_Signet_Ring", "Nhẫn Ấn Gia Huy Quý Tộc", "gems_loot"),
            ("121_Blue_Grimoire", "Cổ Thư Xanh Huyền Bí (Grimoire)", "tomes_relics"),
            ("128_Blank_Parchment", "Cuộn Giấy Da Trắng Phong Ấn", "tomes_relics"),
            ("141_Candle", "Cây Nến Sáp Ong Chiếu Sáng", "tools_mechanisms"),
            ("149_Hand_Mirror", "Gương Soi Bạc Tiên Tri", "tomes_relics"),
            ("161_Backpack", "Ba Lô Thám Hiểm Da Bò Cổ Điển", "tools_mechanisms"),
            ("172_Straw_Hat", "Nón Rơm Du Mục Đồng Quê", "armor_helmets"),
            ("181_Town_Key", "Chìa Khóa Cổng Thành Đồ Sộ", "tools_mechanisms"),
            ("191_Feather_Charm", "Bùa Lông Vũ Thần Phong", "tomes_relics")
        ]
        for name_base, title, for_type in dawnkeep_mapping:
            entry_name = f"Dawnkeep_Free_Sample/Icons_48px/{name_base}.png"
            if entry_name in z.namelist():
                with z.open(entry_name) as zf:
                    im = Image.open(zf).convert('RGBA')
                    save_prop(im, name_base)
                    add_state(name_base, title, for_type)

print(f"Total after Dawnkeep: {len(ALL_STATES)} items.")

# 3. 32 MEDIEVAL FOOD & DRINK ICONS (Transparent 256x256 icons)
food_zip = "NewAsset/32_medieval_food_drink_icons_FREE.zip"
if os.path.exists(food_zip):
    with zipfile.ZipFile(food_zip, 'r') as z:
        food_mapping = [
            ("ale_01", "Vại Bia Men Lúa Mạch Bọt Tuyết"),
            ("berries_01", "Bát Quả Mọng Rừng Đỏ Tươi"),
            ("bread_01", "Ổ Bánh Mì Nướng Nứt Men Vàng Rụm"),
            ("brew_01", "Cốc Rượu Ủ Quán Trọ Thảo Mộc"),
            ("butter_01", "Khối Bơ Sữa Vàng Thơm Béo"),
            ("cake_01", "Bánh Bông Lan Nướng Cung Đình"),
            ("cheese_01", "Ổ Phô Mai Vàng Thượng Hạng"),
            ("cider_01", "Bình Rượu Táo Cider Lên Men"),
            ("dried_01", "Thịt Sấy Khô Dự Trữ Dã Ngoại"),
            ("eggs_01", "Rổ Trứng Gà Đồng Tươi Mới"),
            ("fish_01", "Cá Hồi Nướng Than Hồng Tươi Ngon"),
            ("fruits_01", "Đĩa Trái Cây Thập Cẩm Quý Tộc"),
            ("grain_01", "Bao Hạt Ngũ Cốc Thu Hoạch"),
            ("ham_01", "Đùi Heo Muối Xông Khói Nguyên Chiếc"),
            ("herbs_01", "Bó Thảo Mộc Gia Vị Rừng"),
            ("honey_01", "Hũ Mật Ong Rừng Vàng Óng"),
            ("mead_01", "Cốc Rượu Mật Ong Mead Chiến Binh"),
            ("meat_01", "Tảng Thịt Bò Tươi Thượng Hạng"),
            ("milk_01", "Bình Sữa Bò Tươi Vắt Trong Ngày"),
            ("mushrooms_01", "Nấm Hương Rừng Thơm Ngon"),
            ("nuts_01", "Hạt Dẻ Rừng Nướng Thơm Lừng"),
            ("pie_01", "Bánh Pie Nướng Nhân Thịt Cừu"),
            ("porridge_01", "Bát Cháo Yến Mạch Nóng Hổi"),
            ("poultry_01", "Gà Quay Mật Ong Nguyên Con"),
            ("preserves_01", "Lọ Mứt Quả Ngâm Đường Phèn"),
            ("roast_01", "Thịt Bít Tết Nướng Lửa Hồng"),
            ("sausages_01", "Xúc Xích Hun Khói Vườn Nhà"),
            ("stew_01", "Nồi Hầm Thịt Củ Nóng Hổi"),
            ("vegetables_01", "Giỏ Rau Củ Tươi Vườn Lâu Đài"),
            ("water_01", "Bình Nước Suối Đầu Nguồn Thanh Mát"),
            ("wine_01", "Bình Rượu Vang Đỏ Thượng Hạng"),
            ("wine_02", "Chai Rượu Vang Cổ Lâu Năm")
        ]
        for name_base, title in food_mapping:
            fname = f"256x256/{name_base}.png"
            if fname in z.namelist():
                with z.open(fname) as zf:
                    im = Image.open(zf).convert('RGBA')
                    item_id = f"food_{name_base}"
                    save_prop(im, item_id)
                    add_state(item_id, title, "provisions")

print(f"Total after Food & Drinks: {len(ALL_STATES)} items.")

# 4. MEDIEVAL (7) SHEET - WEAPONS, SHIELDS, ARMOR & HELMETS
# Rows:
# R1 (61-90): Swords/Daggers (15) -> melee_weapons
# R2 (93-122): Greatswords/Rapiers (16) -> melee_weapons
# R3 (124-153): Battleaxes (13) -> melee_weapons
# R4 (155-184): Warhammers/Maces (11) -> melee_weapons
# R5 (186-215): Polearms/Halberds/Spears (15) -> melee_weapons
# R6 (218-247): Bows & Crossbows (12) -> ranged_weapons
# R7 (249-278): Quivers & Arrows (9) -> ranged_weapons
# R8 (280-309): Viking Round Shields (13) -> shields
# R9 (311-340): Knight Heater Shields (16) -> shields
# R10 (342-372): Iron Helmets (16) -> armor_helmets
# R11 (373-403): Great Helms & Visors (16) -> armor_helmets
# R12 (405-434): Chainmail & Cuirasses (13) -> armor_helmets
# R13 (436-465): Plate Armors (15) -> armor_helmets
# R14 (468-496): Gauntlets (17) -> armor_helmets
# R15 (499-528): Greaves & Armored Boots (17) -> armor_helmets

med7_path = "NewAsset/medieval (7)500.png"
if os.path.exists(med7_path):
    im_med7 = Image.open(med7_path).convert('RGB')
    
    med7_rows = [
        # (y0, y1, category, prefix, viet_names)
        (61, 90, "melee_weapons", "med7_sw", [
            "Kiếm Hiệp Sĩ Thép Lưỡi Thẳng", "Đoản Kiếm Sát Thủ Bén Ngọt", "Kiếm Ngắn Lính Bộ Binh",
            "Kiếm Bản Rộng Hiệp Sĩ Sắt", "Thanh Gươm Sắt Chém Sắt", "Kiếm Chữ Thập Thánh Binh",
            "Kiếm Hiệp Sĩ Vệ Quốc", "Đoản Kiếm Thép Găm Áo", "Kiếm Tầm Sét Thép Sáng",
            "Thanh Kiếm Nhọn Xuyên Giáp", "Kiếm Hiệp Sĩ Lâu Đài", "Kiếm Cận Chiến Đấu Trường",
            "Thanh Gươm Sắt Cổ Truyền", "Kiếm Dài Du Mục Thép", "Thanh Kiếm Sĩ Quan Hoàng Gia", "Kiếm Sắc Thợ Rèn"
        ]),
        (93, 122, "melee_weapons", "med7_gsw", [
            "Đại Đao Hiệp Sĩ Hai Tay", "Kiếm Liễu Quý Tộc Rapier", "Trảm Mã Kiếm Hai Lưỡi",
            "Kiếm Liễu Cung Đình Mạ Vàng", "Đại Kiếm Phá Trận Cổ Đại", "Kiếm Liễu Đấu Kiếm Cổ",
            "Đại Gươm Chiến Tuyến Nặng", "Kiếm Liễu Sát Thủ Hoàng Tộc", "Đại Đao Bản Lớn Thép",
            "Kiếm Liễu Xuyên Hộ Thân", "Thanh Kiếm Kỵ Binh Lưỡi Cong", "Đại Kiếm Lưỡi Răng Cưa",
            "Kiếm Liễu Thép Damascus", "Đại Gươm Phá Thành Trụ", "Kiếm Bản Rộng Cận Chiến", "Đại Kiếm Tinh Luyện"
        ]),
        (124, 153, "melee_weapons", "med7_axe", [
            "Rìu Chiến Hai Lưỡi Phá Giáp", "Rìu Bổ Củi Chiến Binh Sắt", "Rìu Chiến Một Lưỡi Nặng",
            "Rìu Phá Thành Đao To", "Rìu Chiến Hiệp Sĩ Viking", "Rìu Săn Rừng Cán Gỗ",
            "Rìu Chém Giáp Răng Thép", "Rìu Chiến Lưỡi Trăng Khuyết", "Rìu Chiến Hạng Nặng Bộ Binh",
            "Rìu Chiến Đầu Búa Hai Tác Dụng", "Rìu Ngắn Tác Chiến Nhanh", "Rìu Bổ Lưỡi Thép Rèn", "Rìu Răng Sói Chiến Binh"
        ]),
        (155, 184, "melee_weapons", "med7_mace", [
            "Búa Tạ Đập Thép Chiến Binh", "Chùy Gai Morningstar Huyền Bí", "Chùy Sắt Nghiền Giáp Nặng",
            "Búa Chiến Đầu Dẹt Phá Khiên", "Chùy Tròn Viền Đinh Nhọn", "Búa Chiến Hai Đầu Khối Thép",
            "Chùy Xích Hiệp Sĩ Thập Tự", "Chùy Gai Lục Giác Sắt", "Búa Rìu Phá Khối Trụ",
            "Chùy Bọc Sắt Đầu Tròn", "Búa Chiến Hộ Vệ Thần Lực"
        ]),
        (186, 215, "melee_weapons", "med7_pol", [
            "Thương Dài Kỵ Binh Xuyên Giáp", "Kích Hai Đầu Halberd Cận Vệ", "Lưỡi Hái Tử Thần Chiến Trường",
            "Giáo Sắt Lính Gác Cổng Thành", "Thương Hiệp Sĩ Mũi Tam Giác", "Kích Chiến Phá Trận Bộ Binh",
            "Lưỡi Hái Chiến Đấu Răng Thép", "Giáo Săn Heo Rừng Mũi Dài", "Kích Lưỡi Búa Tráng Lệ",
            "Thương Mũi Lửa Đầu Đồng", "Giáo Ngắn Cận Chiến Ném Xa", "Kích Chiến Vệ Sĩ Hoàng Gia",
            "Lưỡi Hái Thu Hoạch Linh Hồn", "Thương Kỵ Binh Mạ Bạc", "Kích Giáo Trấn Giữ Cung Đình"
        ]),
        (218, 247, "ranged_weapons", "med7_bow", [
            "Cung Dài Cổ Thụ Hiệp Sĩ", "Cung Săn Bắn Thợ Săn Rừng", "Nỏ Chiến Hạng Nặng Phá Thành",
            "Nỏ Bắn Nhanh Cầm Tay Gọn", "Cung Gỗ Du Mục Uốn Cong", "Nỏ Săn Thú Khung Thép",
            "Cung Chiến Bộ Binh Bọc Da", "Nỏ Tự Nạp Mũi Tên Đôi", "Cung Ngắn Kỵ Xạ Lưng Ngựa",
            "Nỏ Chiến Binh Viền Sắt", "Cung Gỗ Sồi Căng Dây Cước", "Nỏ Sát Thủ Khung Gỗ Mun"
        ]),
        (249, 278, "ranged_weapons", "med7_quiv", [
            "Ống Đựng Mũi Tên Da Bò Rừng", "Bao Tên Hiệp Sĩ Hoàng Gia Thêu Chỉ", "Bó Mũi Tên Sắt Xuyên Giáp",
            "Ống Tên Thợ Săn Rừng Rậm", "Bao Tên Kỵ Xạ Đeo Lưng Da", "Bó Mũi Tên Đuôi Lông Vũ Trắng",
            "Ống Tên Chiến Trận Bọc Kim Loại", "Bao Tên Nỏ Ngắn Gọn Gàng", "Bó Mũi Tên Nhúng Dầu Lửa"
        ]),
        (280, 309, "shields", "med7_sh_rd", [
            "Khiên Tròn Viking Gỗ Bọc Sắt", "Khiên Tròn Chiến Binh Viền Đinh", "Khiên Tròn Khắc Biểu Tượng Sói",
            "Khiên Tròn Thép Chống Búa", "Khiên Tròn Du Mục Bọc Da Bò", "Khiên Tròn Hộ Vệ Sơn Đỏ",
            "Khiên Tròn Sơn Xanh Biển Sâu", "Khiên Tròn Viền Đồng Chiến Trận", "Khiên Tròn Thần Khí Runes",
            "Khiên Tròn Thợ Săn Cứng Cáp", "Khiên Tròn Gỗ Sồi Cổ Thụ", "Khiên Tròn Chiến Hạm Biển Bắc", "Khiên Tròn Sơn Đen Bí Ẩn"
        ]),
        (311, 340, "shields", "med7_sh_ht", [
            "Khiên Hiệp Sĩ Gia Huy Sư Tử", "Khiên Chữ Thập Thập Tự Quân", "Khiên Tháp Thép Phòng Thủ Thành",
            "Khiên Bầu Dục Kỵ Binh Hoàng Gia", "Khiên Gai Cản Đòn Phản Công", "Khiên Gia Huy Đại Bàng Tung Cánh",
            "Khiên Chữ Thập Đỏ Hộ Quốc", "Khiên Bầu Dục Viền Vàng Quý Tộc", "Khiên Thép Khắc Họa Tiết Lâu Đài",
            "Khiên Phòng Ngự Bản Rộng Hiệp Sĩ", "Khiên Gai Thép Chống Kỵ Binh", "Khiên Tam Giác Kiểu Cổ",
            "Khiên Gia Huy Vương Triều", "Khiên Chiến Sĩ Giữ Thành Kiên Cố", "Khiên Thép Mạ Bạc Sáng Loáng", "Khiên Vệ Binh Hoàng Cung"
        ]),
        (342, 372, "armor_helmets", "med7_hl_ir", [
            "Mũ Sắt Hiệp Sĩ Cổ Điển", "Mũ Sắt Kính Ngắm Visor Lật", "Mũ Chiến Binh Spartan Đồng Thau",
            "Mũ Nón Thép Hở Mặt Lính Canh", "Mũ Sắt Lưới Xích Trùm Đầu", "Mũ Chóp Nhọn Cận Vệ",
            "Mũ Sắt Viền Vàng Chỉ Huy", "Mũ Visor Xẻ Rãnh Thở", "Mũ Nồi Sắt Binh Nhì",
            "Mũ Sắt Chiến Tuyến Vết Chém", "Mũ Spartan Viền Bạc", "Mũ Thép Che Tai Kiên Cố",
            "Mũ Nón Thép Đấu Trường", "Mũ Chiến Binh Cổ Bọc Da", "Mũ Visor Kỵ Binh Nặng", "Mũ Sắt Đúc Liền Khối"
        ]),
        (373, 403, "armor_helmets", "med7_hl_gt", [
            "Mũ Đại Hiệp Sĩ Great Helm Chữ Thập", "Mũ Trụ Thập Tự Chinh Cổ Điển", "Mũ Hiệp Sĩ Nạm Đá Quý",
            "Mũ Great Helm Khe Mắt Mạ Vàng", "Mũ Trụ Sắt Thùng Lính Trọng Giáp", "Mũ Hiệp Sĩ Lông Vũ Thượng Hạng",
            "Mũ Great Helm Hộ Thân Tuyệt Đối", "Mũ Trụ Khắc Hoa Văn Cung Đình", "Mũ Đại Hiệp Sĩ Chiến Trận",
            "Mũ Thập Tự Chinh Bọc Đồng", "Mũ Trọng Binh Đầu Đạn", "Mũ Hiệp Sĩ Gai Nhọn Uy Vũ",
            "Mũ Great Helm Sắt Đen Huyền Bí", "Mũ Trụ Thép Mũi Nhọn", "Mũ Vệ Thần Thành Trì", "Mũ Đại Hiệp Sĩ Trấn Quốc"
        ]),
        (405, 434, "armor_helmets", "med7_ar_ch", [
            "Giáp Lưới Xích Thép Kiên Cố", "Áo Giáp Da Thợ Săn Lót Lông", "Giáp Ngực Da Đính Đinh Tán",
            "Áo Giáp Lưới Hiệp Sĩ Dài Tay", "Giáp Da Du Mục Đệm Mút", "Giáp Ngực Lưới Sắt Nhẹ",
            "Áo Giáp Da Bò Rừng Chống Tên", "Giáp Xích Thép Bọc Cổ", "Áo Giáp Kỵ Xạ Thoải Mái",
            "Giáp Da Chiến Binh Sơn Đen", "Giáp Lưới Vảy Cá Thần Tốc", "Giáp Da Thuật Sĩ Đai Đồng", "Giáp Lưới Kháng Chém"
        ]),
        (436, 465, "armor_helmets", "med7_ar_pl", [
            "Giáp Tấm Thép Toàn Thân Hiệp Sĩ", "Giáp Ngực Mạ Bạc Hoàng Gia", "Giáp Tấm Thép Nặng Chiến Binh",
            "Giáp Ngực Khắc Phù Điêu Sư Tử", "Giáp Tấm Hiệp Sĩ Bọc Khớp Đồng", "Giáp Ngực Thập Tự Quân Sắt",
            "Giáp Tấm Cung Đình Mạ Vàng", "Giáp Ngực Chống Đạn Bắn Nỏ", "Giáp Tấm Đen Kỵ Binh Hắc Ám",
            "Giáp Ngực Đại Tướng Quân", "Giáp Tấm Khối Rèn Thủ Công", "Giáp Ngực Hiệp Sĩ Bão Táp",
            "Giáp Tấm Thánh Hiệp Sĩ Trắng", "Giáp Ngực Thép Cường Lực", "Bộ Giáp Tấm Thần Hộ Mệnh"
        ]),
        (468, 496, "armor_helmets", "med7_gt_ir", [
            "Găng Tay Sắt Khớp Động Hiệp Sĩ", "Găng Da Chiến Binh Bọc Mu Thép", "Găng Tay Thép Gai Đấm Nặng",
            "Găng Sắt Khắc Hoa Văn Quý Tộc", "Găng Tay Giáp Lưới Linh Hoạt", "Găng Da Dày Kéo Cung Săn",
            "Găng Tay Thép Dài Tay Cận Vệ", "Găng Sắt Đúc Nguyên Khối", "Găng Tay Da Bò Viền Đồng",
            "Găng Thép Cầm Kiếm Chắc Tay", "Găng Tay Lính Bắn Nỏ Da Sần", "Găng Sắt Mạ Bạc Hoàng Tộc",
            "Găng Tay Hiệp Sĩ Gai Bọc Ngón", "Găng Tay Giáp Sắt Đen", "Găng Da Bọc Thép Cổ Tay", "Găng Thép Đấu Kiếm", "Găng Vệ Binh"
        ]),
        (499, 528, "armor_helmets", "med7_bt_ir", [
            "Ủng Sắt Hộ Vệ Hiệp Sĩ Toàn Thân", "Giày Da Chiến Binh Bọc Mũi Thép", "Ủng Thép Khớp Động Đi Tuyết",
            "Giày Da Du Mục Cổ Cao Chống Gai", "Ủng Sắt Kỵ Binh Cựa Ngựa Đồng", "Giày Bốt Da Thợ Săn Rừng",
            "Ủng Thép Nặng Trọng Binh Hầm Mỏ", "Giày Chiến Đấu Lót Lông Ấm", "Ủng Sắt Khắc Chữ Thập",
            "Giày Da Bò Đinh Tán Chống Trượt", "Ủng Thép Mạ Vàng Cung Đình", "Giày Bốt Da Binh Nhì Bền Bỉ",
            "Ủng Sắt Đen Hiệp Sĩ Hắc Ám", "Giày Da Cao Cổ Kỵ Sĩ", "Ủng Thép Hộ Vệ Cổ Chân", "Giày Chiến Lính Gác", "Ủng Giáp Binh Sĩ"
        ])
    ]
    
    for y0, y1, cat, pfx, names in med7_rows:
        crops = slice_sheet_row(im_med7, y0, y1)
        for idx, crop in enumerate(crops):
            item_id = f"{pfx}_{idx+1:02d}"
            name = names[idx] if idx < len(names) else f"{pfx} #{idx+1}"
            clean = defringe_white(crop)
            save_prop(clean, item_id)
            add_state(item_id, name, cat)

print(f"Total after Medieval (7) Weapons & Armor: {len(ALL_STATES)} items.")

# 5. MEDIEVAL (5) SHEET - STAVES, TOOLS, POTIONS, TOMES, GEMS, KEYS
med5_path = "NewAsset/medieval (5)500.png"
if os.path.exists(med5_path):
    im_med5 = Image.open(med5_path).convert('RGB')
    med5_rows = [
        # Wizard staves & wands (R1, R2: 56-117, 119-179) -> melee_weapons
        (56, 117, "melee_weapons", "med5_staff", [
            "Quyền Trượng Ma Pháp Tinh Cầu Lam", "Trượng Thần Rừng Gỗ Sồi Đầu Rồng", "Gậy Phép Thuật Pha Lê Hồng Tím",
            "Quyền Trượng Sấm Sét Hoàng Kim", "Trượng Pháp Sư Cực Bắc Băng Tinh", "Gậy Phù Thủy Cổ Thụ Nanh Sói",
            "Trượng Ma Pháp Hư Không Nguyệt Tộc", "Quyền Trượng Hỏa Diệm Rực Cháy", "Trượng Thánh Binh Thập Tự Bạc",
            "Đũa Phép Thuật Gỗ Mun Thần Kỳ", "Trượng Tiên Tộc Ngọc Phỉ Thúy", "Gậy Thần Hộ Mệnh Cổ Đại"
        ]),
        (119, 179, "melee_weapons", "med5_wand", [
            "Đũa Phép Thủy Tinh Khảm Vàng", "Đũa Phép Gỗ Thần Đầu Hồng Ngọc", "Trượng Ngắn Pháp Sư Tập Sự",
            "Đũa Phép Phù Thủy Độc Dược", "Đũa Thần Băng Giá Tuyết Tinh", "Đũa Phép Hắc Thuật Đầu Rắn",
            "Đũa Thần Ánh Sáng Thánh Linh", "Trượng Ngắn Pha Lê Xanh Thẳm", "Đũa Phép Triệu Hồi Linh Hồn",
            "Đũa Thần Hoàng Kim Cổ Điển", "Trượng Ngắn Hỏa Long Cực Nóng", "Đũa Phép Sấm Chớp Tinh Linh"
        ]),
        # Blacksmith Tools (R3, R4: 181-210, 213-242) -> tools_mechanisms
        (181, 210, "tools_mechanisms", "med5_tool", [
            "Đe Rèn Sắt Nặng Của Thợ Rèn", "Búa Đập Sắt Cán Gỗ Chắc Nịch", "Kìm Kẹp Phôi Sắt Nóng Đỏ",
            "Cái Cưa Gỗ Răng Thép Cầm Tay", "Đục Khắc Đá & Thép Tôi Nhọn", "Kìm Cắt Kim Loại Dã Ngoại",
            "Búa Nhỏ Gõ Khớp Giáp Chi Tiết", "Cái Dũa Thép Mài Dao Kiếm", "Mỏ Lết Cổ Khóa Ốc Cơ Quan",
            "Dụng Cụ Thổi Lửa Bễ Rèn Lò", "Cái Cào Than Lò Nung Cực Nóng", "Búa Đập Đinh Tán Giáp Sắt"
        ]),
        (213, 242, "tools_mechanisms", "med5_craft", [
            "Búa Rèn Nhọn Đầu Đột Thép", "Kìm Bẻ Uốn Dây Đồng Thau", "Dao Cắt Da Thuộc Bản Rộng",
            "Dụng Cụ Đục Lỗ Giáp Da Sần", "Cưa Lọng Cắt Gỗ Tinh Xảo", "Búa Rìu Thợ Rèn Hai Đầu",
            "Cái Bay Trét Vữa Xây Thành", "Dụng Cụ Mài Đá Quý Giác Cắt", "Thước Góc Đo Kim Loại Thợ Rèn",
            "Chày Giã Quặng Hầm Mỏ", "Kìm Móc Khóa Kim Loại Nóng", "Cái Đục Gỗ Khắc Phù Điêu"
        ]),
        # Alchemical Flasks (R5, R6: 243-273, 275-304) -> potions
        (243, 273, "potions", "med5_pot_rd", [
            "Bình Sinh Mệnh Giọt Máu Đỏ", "Bình Mana Năng Lượng Lam Tươi", "Lọ Thuốc Độc Nhện Lục Bảo",
            "Tiên Dược Hoàng Kim Phục Hồi", "Bình Dược Tím Tăng Tốc Độ", "Bình Thí Nghiệm Đáy Cầu Có Quai",
            "Ống Nghiệm Giả Kim Sủi Bọt Khí", "Lọ Độc Dược Đầu Lâu Chết Chóc", "Bình Tinh Chất Thảo Mộc Rừng",
            "Lọ Năng Lượng Tinh Thể Sáng", "Bình Kháng Lửa Hỏa Tinh Dược", "Bình Kháng Băng Hàn Băng Dược"
        ]),
        (275, 304, "potions", "med5_pot_el", [
            "Bình Dược Thủy Tinh Giác Cắt", "Lọ Thuốc Tàng Hình Khói Lam", "Bình Tăng Lực Cuồng Nộ Đỏ Ngầu",
            "Lọ Thuốc Giải Độc Thảo Dược", "Bình Thể Lực Bền Bỉ Màu Cam", "Lọ Dầu Bôi Vũ Khí Tê Liệt",
            "Bình Thuốc Phát Sáng Hang Tối", "Lọ Thuốc Hồi Phục Linh Hồn", "Bình Dược Giả Kim Thuần Khiết",
            "Lọ Nước Thánh Ban Phước", "Bình Tiên Tộc Tinh Tú Trường Sinh", "Lọ Thuốc Đổi Màu Ảo Ảnh"
        ]),
        # Grimoires & Scrolls (R7, R8: 306-335, 338-367) -> tomes_relics
        (306, 335, "tomes_relics", "med5_tome", [
            "Cổ Thư Grimoire Bìa Da Cổ Khóa Vàng", "Cuộn Giấy Da Niêm Phong Sáp Đỏ", "Bản Đồ Kho Báu Cổ Mạ Vàng",
            "Sách Phép Thuật Băng Giá Nguyệt Tộc", "Sách Hỏa Diệm Chú Bìa Da Rồng", "Cuộn Giấy Da Thần Chú Cấm",
            "Sách Thần Chú Triệu Hồi Hư Không", "Bản Đồ Thiên Cầu Xem Sao", "Cổ Thư Giả Kim Thuật Kỳ Bí",
            "Cuộn Giấy Da Trắng Chờ Viết Chú", "Sách Luật Cổ Vương Quốc Cung Đình", "Bản Đồ Hầm Ngục Cổ Xưa"
        ]),
        (338, 367, "tomes_relics", "med5_scr", [
            "Cuộn Giấy Da Thần Sấm Sét", "Sách Kinh Thánh Cổ Niêm Phong", "Cuộn Thư Tịch Cổ Thời Đại Cũ",
            "Bản Đồ Địa Đạo Thành Quách", "Sách Phép Thuật Trị Thương Thánh", "Cuộn Giấy Da Chú Nguyền Cổ",
            "Cổ Thư Khắc Chữ Phù Hiệu Runes", "Bản Đồ Hòn Đảo Huyền Bí", "Cuộn Chiếu Chỉ Hoàng Đế Cổ",
            "Sách Tiên Tri Tương Lai Quá Khứ", "Cuộn Giấy Phong Thư Bí Mật", "Sách Ghi Chép Quái Vật Cổ"
        ]),
        # Jewelry, Rings, Amulets (R9, R10: 369-398, 400-429) -> gems_loot
        (369, 398, "gems_loot", "med5_jewel", [
            "Nhẫn Ấn Quý Tộc Signet Ring Vàng", "Mặt Dây Chuyền Bùa Chú Thái Dương", "Nhẫn Ngọc Bích Cổ Thần Linh",
            "Dây Chuyền Hồng Ngọc Cung Đình", "Nhẫn Bạc Thạch Anh Tím Sâu", "Bùa Hộ Mệnh Đĩa Kim Loại Cổ",
            "Nhẫn Kim Cương Lấp Lánh Khảm", "Dây Chuyền Lam Ngọc Biển Sâu", "Vòng Cổ Vàng Ròng Nạm Ngọc",
            "Nhẫn Độc Dược Khắc Hình Rắn", "Bùa Hộ Mệnh Mắt Thần Horus", "Mặt Dây Chuyền Pha Lê Sao Băng"
        ]),
        (400, 429, "gems_loot", "med5_ring", [
            "Nhẫn Bạc Hiệp Sĩ Khắc Chữ Chìm", "Dây Chuyền Khắc Huy Hiệu Hoàng Tộc", "Nhẫn Vàng Nạm Viên Ngọc Lục",
            "Mặt Dây Chuyền Băng Tinh Lam", "Nhẫn Hư Không Khảm Đá Tím", "Dây Chuyền Răng Nanh Thú Bọc Vàng",
            "Nhẫn Phù Thủy Tích Tụ Mana", "Bùa Hộ Mệnh Thập Tự Bạc Cổ", "Vòng Tay Chuỗi Hạt Mã Não",
            "Nhẫn Thần Lực Ban Phước Chiến", "Dây Chuyền Lông Chim Ưng Bạc", "Mặt Dây Chuyền Trăng Khuyết Vàng"
        ]),
        # Ingots & Cut Gems (R11, R12: 431-460, 463-492) -> gems_loot
        (431, 460, "gems_loot", "med5_ingot", [
            "Thỏi Vàng Ròng Đúc Khối Sáng Chói", "Thỏi Bạc Trắng Tinh Khiết 999", "Thỏi Đồng Đỏ Đúc Lò Rèn",
            "Thỏi Sắt Rèn Nguyên Khối Nặng", "Thỏi Thép Damascus Vân Gợn", "Viên Hồng Ngọc Giác Cắt Bát Giác",
            "Viên Lam Ngọc Hoàng Gia Sáng Ngời", "Viên Ngọc Lục Bảo Vuông Vức", "Viên Kim Cương Đỉnh Cao Tinh Khiết",
            "Viên Thạch Anh Tím Hư Không", "Cục Quặng Vàng Thô Hầm Mỏ", "Cục Quặng Sắt Chưa Lọc Tạp Chất"
        ]),
        (463, 492, "gems_loot", "med5_gem", [
            "Viên Hoàng Ngọc Topaz Rực Rỡ", "Viên Ngọc Mắt Hổ Vân Nâu Vàng", "Thỏi Vàng Nhỏ Khắc Con Dấu",
            "Thỏi Bạc Cỡ Vừa Đúc Khối", "Viên Ngọc Phỉ Thúy Tròn Trĩnh", "Cụm Pha Lê Băng Trong Suốt",
            "Viên Huyết Thạch Đỏ Thẫm Ma Mị", "Viên Ngọc Xanh Thủy Cung Tinh Tú", "Cục Quặng Bạc Lấp Lánh Ánh Sao",
            "Viên Kim Cương Đen Quý Hiếm", "Thỏi Đồng Đen Cổ Đại", "Đá Mặt Trăng Sáng Mờ Bí Ẩn"
        ]),
        # Keys & Scales (R13, R14: 494-523, 525-554) -> tools_mechanisms
        (494, 523, "tools_mechanisms", "med5_key", [
            "Chìa Khóa Cổ Cổng Thành Đồ Sộ", "Chìa Khóa Vàng Mở Rương Báu", "Bộ Dụng Cụ Mở Khóa Lockpick",
            "Cân Tiểu Ly Của Nhà Giả Kim", "Đồng Hồ Cát Thủy Tinh Tính Giờ", "Chìa Khóa Bạc Hầm Rượu Cổ",
            "Chìa Khóa Sắt Rỉ Sét Ngục Tối", "Chuông Đồng Cầm Tay Báo Động", "Kính Lúp Soi Đá Quý Cổ Điển",
            "Chìa Khóa Ma Thuật Khắc Runes", "Bộ Quả Cân Đồng Thau Chuẩn", "Dụng Cụ Đo Góc Bầu Trời Sao"
        ]),
        (525, 554, "tools_mechanisms", "med5_misc", [
            "Chìa Khóa Hòm Kho Báu Vàng", "Đồng Hồ Cát Gỗ Cổ Đo Thời Gian", "Cân Cán Nghiêng Đo Vàng Bạc",
            "Chìa Khóa Cổng Sắt Hầm Ngục", "Bộ Móc Khóa Đồng Thau Lính Gác", "Chuông Thánh Rung Trừ Tà",
            "Ống Nhòm Đồng Thao Kéo Dài", "Chìa Khóa Bí Mật Phòng Cơ Quan", "Đồng Hồ Mặt Trời Bỏ Túi Đồng",
            "Cân Treo Cầm Tay Đo Trọng Lượng", "Chìa Khóa Cửa Thư Viện Cổ", "Bộ Kìm Móc Cơ Khí Nhỏ"
        ])
    ]
    
    for y0, y1, cat, pfx, names in med5_rows:
        crops = slice_sheet_row(im_med5, y0, y1)
        for idx, crop in enumerate(crops):
            item_id = f"{pfx}_{idx+1:02d}"
            name = names[idx] if idx < len(names) else f"{pfx} #{idx+1}"
            clean = defringe_white(crop)
            save_prop(clean, item_id)
            add_state(item_id, name, cat)

print(f"Total after Medieval (5) Staves & Craft: {len(ALL_STATES)} items.")

# 6. MEDIEVAL (2) SHEET - PROVISIONS & FEAST
med2_path = "NewAsset/medieval (2)500.png"
if os.path.exists(med2_path):
    im_med2 = Image.open(med2_path).convert('RGB')
    med2_rows = [
        # Breads (R1: 60-84)
        (60, 84, "provisions", "med2_bread", [
            "Ổ Bánh Mì Lúa Mạch Nướng Nứt Men", "Bánh Mì Tròn Du Mục Nướng Than", "Bánh Mì Baguette Dài Giòn Rụm",
            "Bánh Sừng Bò Nướng Bơ Thơm", "Ổ Bánh Mì Đen Lên Men Cổ Điển", "Bánh Mì Ngọt Rắc Hạt Vừng",
            "Bánh Mì Lát Nướng Cháy Cạnh", "Bánh Mì Bện Dây Hoàng Gia", "Bánh Quy Giòn Dự Trữ Hành Quân",
            "Bánh Mì Kẹp Phô Mai Chảy", "Ổ Bánh Mì Trắng Xốp Mềm", "Bánh Mì Yến Mạch Mật Ong"
        ]),
        # Hams & Meats (R2: 91-115)
        (91, 115, "provisions", "med2_meat", [
            "Đùi Heo Muối Xông Khói Nguyên Chiếc", "Dải Thịt Ba Chỉ Hun Khói Muối", "Xúc Xích Nướng Lửa Trại Thơm",
            "Tảng Thịt Bò Tươi Rực Đỏ", "Miếng Sườn Cừu Nướng Mật Ong", "Thịt Heo Rừng Sấy Khô Dã Ngoại",
            "Khoanh Giò Thủ Heo Lâu Đài", "Thịt Bò Bít Tết Than Hồng", "Xúc Xích Cay Kiểu Cổ",
            "Thịt Hun Khói Móc Treo Bếp", "Sườn Heo Nướng Vàng Giòn", "Thịt Cừu Hầm Nước Sốt"
        ]),
        # Poultry & Fish (R3, R4: 122-146, 154-178)
        (122, 146, "provisions", "med2_poultry", [
            "Gà Quay Mật Ong Nguyên Con Vàng Ruộm", "Đùi Gà Nướng Mỡ Hành Cháy Cạnh", "Vịt Quay Lò Đất Cung Đình",
            "Chim Cút Nướng Lá Thơm", "Gà Luộc Nước Dừa Lâu Đài", "Ức Gà Nướng Muối Ớt",
            "Cánh Gà Nướng Mật Rừng", "Đùi Vịt Muối Xông Khói", "Gà Tây Nướng Yến Tiệc",
            "Chim Bồ Câu Nướng Rơm", "Đùi Gà Chiên Giòn Rụm", "Gà Hầm Hạt Dẻ Thơm Nức"
        ]),
        (154, 178, "provisions", "med2_fish", [
            "Cá Hồi Biển Nướng Chanh Vàng", "Cá Tuyết Phi Lê Áp Chảo", "Cá Biển Tươi Roi Rói Đánh Bắt",
            "Cá Khô Nướng Than Dự Trữ", "Mực Ống Nướng Muối Ớt", "Tôm Sông Nướng Que Tre",
            "Cá Trích Ngâm Dầu Oliu", "Cá Chép Om Dưa Nóng Hổi", "Cá Rán Giòn Vảy Vàng",
            "Cá Thu Hun Khói Thơm Ngon", "Cá Trắm Đen Kho Nồi Đất", "Cá Biển Nướng Giấy Bạc"
        ]),
        # Cheeses & Pastries (R5, R6: 185-209, 214-243)
        (185, 209, "provisions", "med2_cheese", [
            "Bánh Phô Mai Thụy Sĩ Thơm Béo Lỗ Khí", "Miếng Phô Mai Vàng Cheddar Đậm Vị", "Khối Bơ Sữa Tươi Vàng Óng",
            "Bánh Phô Mai Dê Núi Lâu Năm", "Phô Mai Mốc Xanh Thượng Hạng", "Bánh Phô Mai Tròn Bọc Sáp Đỏ",
            "Miếng Phô Mai Tươi Mềm Mại", "Hũ Kem Sữa Béo Ngậy Đánh Bông", "Bơ Tươi Phết Bánh Mì",
            "Phô Mai Hun Khói Kiểu Bắc Âu", "Bánh Phô Mai Cắt Miếng Tam Giác", "Phô Mai Nướng Chảy Thơm Lừng"
        ]),
        (214, 243, "provisions", "med2_pie", [
            "Bánh Pie Nướng Nhân Thịt Bò Đậm Đà", "Bánh Tart Quả Mọng Dâu Rừng", "Bánh Kem Hoàng Gia Nướng Men",
            "Bánh Bông Lan Trứng Nướng Xốp", "Bánh Pie Táo Quế Thơm Lừng", "Bánh Ngọt Nhân Hạt Dẻ Cung Đình",
            "Bánh Mì Nướng Phủ Đường Mật", "Bánh Nướng Nhân Cá Hồi Phô Mai", "Bánh Pie Bí Ngô Mùa Thu",
            "Bánh Tart Chanh Vàng Thanh Mát", "Bánh Cuộn Kem Mứt Trái Cây", "Bánh Nướng Men Bơ Ngon Ngọt"
        ]),
        # Fruits & Veggies (R7, R8: 245-273, 276-305)
        (245, 273, "provisions", "med2_fruit", [
            "Chùm Nho Đỏ Mọng Rượu Vang", "Quả Táo Đỏ Rừng Tươi Ngọt", "Quả Lê Vàng Mọng Nước Ngọt Mát",
            "Chùm Nho Xanh Quán Trọ", "Quả Bí Ngô Vàng Mùa Thu Hoạch", "Chùm Dâu Rừng Tươi Hái Sớm",
            "Quả Mận Đen Chín Ngọt Đậm", "Quả Đào Hồng Mọng Lông Tơ", "Quả Lựu Đỏ Hạt Ngọc Long Lanh",
            "Quả Dưa Lưới Thơm Mát Ngọt Lịm", "Chùm Quả Mọng Đen Núi Cao", "Quả Sung Mật Vàng Ươm"
        ]),
        (276, 305, "provisions", "med2_veg", [
            "Củ Cà Rốt Tươi Giòn Ngọt", "Cây Tỏi Tây Gia Vị Dài Mượt", "Bắp Cải Tròn Cuộn Chặt Tươi Xanh",
            "Củ Hành Tây Vàng Bọc Vỏ Mỏng", "Củ Khoai Tây Đào Từ Lòng Đất", "Củ Cải Đỏ Tròn Xoe Tươi Sạch",
            "Bó Măng Tây Xanh Non Thượng Hạng", "Quả Cà Tím Dài Mượt Mà", "Củ Cải Trắng Giòn Ngọt Mát",
            "Bắp Ngô Nếp Vàng Hạt Đều", "Rổ Đậu Hà Lan Tươi Hái Sớm", "Bó Cải Xanh Vườn Lâu Đài"
        ]),
        # Beers & Wines (R10, R11: 338-368, 370-430)
        (338, 368, "provisions", "med2_beer", [
            "Ly Bia Bơ Bọt Tuyết Quán Trọ", "Cốc Rượu Mật Ong Mead Gỗ Sồi", "Vại Bia Men Lúa Mạch Cầm Tay",
            "Ly Bia Đen Nặng Độ Đậm Vị", "Cốc Rượu Men Trắng Lên Men", "Vại Rượu Chiến Binh Bọc Sắt",
            "Bình Rượu Táo Đục Bọt Lăn Tăn", "Ly Bia Vàng Ánh Kim Sủi Bọt", "Cốc Sứ Uống Bia Quán Trọ Cổ",
            "Vại Bia Đôi Cho Khách Lữ Hành", "Ly Rượu Rừng Hạt Dẻ Đậm Đà", "Cốc Men Lúa Mì Thanh Mát"
        ]),
        (370, 430, "provisions", "med2_wine", [
            "Bình Rượu Vang Đỏ Thượng Hạng", "Chai Rượu Vang Cổ Niêm Sáp", "Ly Thủy Tinh Vang Đỏ Long Lanh",
            "Bình Rượu Vang Trắng Thanh Tao", "Vò Rượu Vang Đất Nung Ủ Hầm", "Chai Rượu Vang Nho Hoàng Gia",
            "Ly Pha Lê Rượu Vang Cung Đình", "Bình Rượu Vang Ngọt Sa Mạc", "Chai Rượu Vang Nổ Sủi Bọt",
            "Vò Rượu Rơm Ủ Dưới Lòng Đất", "Bình Thủy Tinh Rượu Thảo Dược", "Chai Rượu Vang Hảo Hạng Lâu Năm"
        ]),
        # Kitchen pots (R12: 432-493) -> tools_mechanisms
        (432, 493, "tools_mechanisms", "med2_pot", [
            "Nồi Vạc Đồng Đun Súp Nóng", "Ấm Đun Nước Bằng Đồng Thau", "Chảo Gang Nướng Thịt Tay Dài",
            "Nồi Đất Nung Kho Thịt Cổ", "Cái Chày Cối Đá Giã Tiêu", "Cái Muôi Đồng Múc Canh Dài",
            "Rổ Đựng Bánh Mì Bằng Nan Tre", "Ấm Trà Thủy Tinh Cung Đình", "Chảo Đáy Sâu Xào Nấu Bếp",
            "Thùng Gỗ Múc Nước Có Quai", "Bình Gốm Đựng Dầu Oliu", "Dao Bếp Bản Lớn Thép Tôi"
        ])
    ]
    
    for y0, y1, cat, pfx, names in med2_rows:
        crops = slice_sheet_row(im_med2, y0, y1)
        for idx, crop in enumerate(crops):
            item_id = f"{pfx}_{idx+1:02d}"
            name = names[idx] if idx < len(names) else f"{pfx} #{idx+1}"
            clean = defringe_white(crop)
            save_prop(clean, item_id)
            add_state(item_id, name, cat)

print(f"Total after Medieval (2) Feast & Provisions: {len(ALL_STATES)} items.")

# 7. MEDIEVAL (6) SHEET - CHESTS, CRATES, BARRELS, CAMPFIRES
med6_path = "NewAsset/medieval (6)500.png"
if os.path.exists(med6_path):
    im_med6 = Image.open(med6_path).convert('RGB')
    med6_rows = [
        # Barrels & Crates (y=308-400) -> chests_storage
        (308, 400, "chests_storage", "med6_crate", [
            "Thùng Gỗ Sồi Ủ Rượu Lâu Năm", "Hòm Gỗ Chứa Quân Nhu Buộc Dây", "Bao Tải Bột Mì Đầy Ắp",
            "Thùng Nước Ngọt Bằng Gỗ Bọc Sắt", "Hòm Gỗ Khắc Chữ Hàng Hóa", "Thùng Gỗ Đựng Cá Muối Đi Biển",
            "Bao Tải Ngũ Cốc Thu Hoạch", "Vò Gốm Cổ Niêm Phong Nắp Đậy", "Hòm Gỗ Xếp Chồng Hàng Hải",
            "Thùng Rượu Nhỏ Có Vòi Rót", "Bao Da Chứa Lương Thảo", "Thùng Gỗ Đựng Đinh Sắt Thợ Rèn"
        ]),
        # Banded Chests (y=432-494) -> chests_storage
        (432, 494, "chests_storage", "med6_chest", [
            "Rương Gỗ Sồi Viền Đai Sắt Chắc Chắn", "Rương Sắt Đúc Hầm Ngục Khóa Nặng", "Rương Gỗ Mở Hé Ánh Kim Quang",
            "Rương Hoàng Kim Nạm Ngọc Quý", "Rương Cổ Điển Bọc Da Bò Chống Nước", "Rương Vàng Tràn Tiền Xu Cổ",
            "Rương Sắt Kiên Cố Chống Cạy Khóa", "Rương Ma Thuật Khắc Ấn Phong Tỏa", "Hòm Gỗ Nhỏ Chứa Trang Sức",
            "Rương Lớn Đựng Binh Khí Hiệp Sĩ", "Rương Gỗ Thông Đơn Sơ", "Rương Đồng Đỏ Cổ Xưa Khóa Chặt"
        ]),
        # Bonfires & Lanterns (y=497-557) -> tools_mechanisms
        (497, 557, "tools_mechanisms", "med6_fire", [
            "Đống Lửa Trại Đang Cháy Bập Bùng", "Đèn Bão Dầu Cổ Điển Thắp Sáng", "Ngọn Đuốc Nhúng Dầu Cháy Sáng",
            "Lò Sưởi Đá Than Hồng Ấm Áp", "Đèn Lồng Treo Cột Gỗ Thành Trì", "Chậu Lửa Đốt Báo Động Tháp Canh",
            "Đèn Cầy Sáp Chân Đồng Cổ", "Đống Lửa Tro Tàn Còn Than Đỏ", "Đèn Thủy Tinh Chống Gió Đêm",
            "Cọc Đuốc Cắm Đất Dã Ngoại", "Đèn Bão Xách Tay Đi Đêm", "Bếp Lò Than Nướng Dã Chiến"
        ])
    ]
    for y0, y1, cat, pfx, names in med6_rows:
        crops = slice_sheet_row(im_med6, y0, y1)
        for idx, crop in enumerate(crops):
            item_id = f"{pfx}_{idx+1:02d}"
            name = names[idx] if idx < len(names) else f"{pfx} #{idx+1}"
            clean = defringe_white(crop)
            save_prop(clean, item_id)
            add_state(item_id, name, cat)

print(f"Total after Medieval (6) Chests & Campfires: {len(ALL_STATES)} items.")

# 8. 2D SURVIVAL SHEETS - TOOLS, GEAR, CAMPING
for surv_idx, surv_path in enumerate(["NewAsset/2Dsurvival500.png", "NewAsset/2Dsurvival500-1.png", "NewAsset/2Dsurvival500-2.png"]):
    if os.path.exists(surv_path):
        im_surv = Image.open(surv_path).convert('RGB')
        # Slice distinct items
        arr = np.array(im_surv)
        fg = np.any(arr < 235, axis=2)
        y_proj = np.sum(fg, axis=1)
        y_blocks = []
        in_b = False
        start = 0
        for y in range(len(y_proj)):
            if y_proj[y] > 5 and not in_b:
                in_b = True
                start = y
            elif y_proj[y] <= 5 and in_b:
                in_b = False
                if y - start > 12:
                    y_blocks.append((start, y))
        if in_b and len(y_proj) - start > 12:
            y_blocks.append((start, len(y_proj)))
            
        for r_idx, (y0, y1) in enumerate(y_blocks):
            if y1 - y0 > 80: # skip big composite banners or giant buildings
                continue
            crops = slice_sheet_row(im_surv, y0, y1, min_w=10)
            for c_idx, crop in enumerate(crops[:6]): # take up to 6 per row
                item_id = f"surv_s{surv_idx}_r{r_idx}_{c_idx}"
                # Determine category
                if r_idx in [0, 1, 2, 3]:
                    cat = "tools_mechanisms"
                    name = f"Dụng Cụ Sinh Tồn Dã Ngoại #{surv_idx+1}-{r_idx+1}-{c_idx+1}"
                elif r_idx in [4, 5]:
                    cat = "tools_mechanisms"
                    name = f"Thiết Bị Dã Chiến & Lửa Trại #{surv_idx+1}-{c_idx+1}"
                else:
                    cat = "gems_loot"
                    name = f"Vật Liệu & Quặng Sinh Tồn #{surv_idx+1}-{c_idx+1}"
                clean = defringe_white(crop)
                save_prop(clean, item_id)
                add_state(item_id, name, cat)

print(f"Grand Total Items Extracted: {len(ALL_STATES)} items across 10 categories!")

# Pedestals, Auras, Effects configurations
PEDESTALS = [
    {
        "id": "none",
        "name": "Không dùng bệ đỡ (Trống)",
        "thumbSrc": None,
        "src": None
    },
    {
        "id": "pedestal_stone_altar",
        "name": "Bệ Đá Cổ Tế Thần Rêu Phong",
        "thumbSrc": "/assets/props/pedestals/pedestal_stone_altar.png",
        "src": "/assets/props/pedestals/pedestal_stone_altar.png"
    },
    {
        "id": "pedestal_rune_circle",
        "name": "Vòng Tròn Ma Pháp Trận Cổ Runes",
        "thumbSrc": "/assets/props/pedestals/pedestal_rune_circle.png",
        "src": "/assets/props/pedestals/pedestal_rune_circle.png"
    },
    {
        "id": "pedestal_royal_cushion",
        "name": "Đệm Nhung Hoàng Gia Viền Kim Tuyến",
        "thumbSrc": "/assets/props/pedestals/pedestal_royal_cushion.png",
        "src": "/assets/props/pedestals/pedestal_royal_cushion.png"
    },
    {
        "id": "pedestal_wood_plinth",
        "name": "Bục Gỗ Sồi Cổ Đồ Sộ Khắc Hoa",
        "thumbSrc": "/assets/props/pedestals/pedestal_wood_plinth.png",
        "src": "/assets/props/pedestals/pedestal_wood_plinth.png"
    }
]

AURAS = [
    {
        "id": "none",
        "name": "Không hào quang",
        "thumbSrc": None,
        "src": None
    },
    {
        "id": "aura_arcane_blue",
        "name": "Hào Quang Lam Ngọc Ma Pháp",
        "thumbSrc": "/assets/props/auras/aura_arcane_blue.png",
        "src": "/assets/props/auras/aura_arcane_blue.png"
    },
    {
        "id": "aura_fire_red",
        "name": "Hào Quang Hỏa Diệm Rực Lửa",
        "thumbSrc": "/assets/props/auras/aura_fire_red.png",
        "src": "/assets/props/auras/aura_fire_red.png"
    },
    {
        "id": "aura_legendary_gold",
        "name": "Hào Quang Hoàng Kim Truyền Thuyết",
        "thumbSrc": "/assets/props/auras/aura_legendary_gold.png",
        "src": "/assets/props/auras/aura_legendary_gold.png"
    },
    {
        "id": "aura_nether_purple",
        "name": "Hào Quang Hư Không Hắc Ám Tím",
        "thumbSrc": "/assets/props/auras/aura_nether_purple.png",
        "src": "/assets/props/auras/aura_nether_purple.png"
    },
    {
        "id": "aura_celestial_jade",
        "name": "Hào Quang Phỉ Thúy Thiên Tộc",
        "thumbSrc": "/assets/props/auras/aura_celestial_jade.png",
        "src": "/assets/props/auras/aura_celestial_jade.png"
    }
]

EFFECTS = [
    {
        "id": "none",
        "name": "Không hiệu ứng",
        "thumbSrc": None,
        "src": None
    },
    {
        "id": "fx_sparkle_gold",
        "name": "Bụi Sao Hoàng Kim Lấp Lánh",
        "thumbSrc": "/assets/props/effects/fx_sparkle_gold.png",
        "src": "/assets/props/effects/fx_sparkle_gold.png"
    },
    {
        "id": "fx_sparkle_arcane",
        "name": "Tia Sáng Ma Thuật Tinh Tú",
        "thumbSrc": "/assets/props/effects/fx_sparkle_arcane.png",
        "src": "/assets/props/effects/fx_sparkle_arcane.png"
    },
    {
        "id": "fx_sparkle_cosmic",
        "name": "Hạt Năng Lượng Vũ Trụ Bay Bổng",
        "thumbSrc": "/assets/props/effects/fx_sparkle_cosmic.png",
        "src": "/assets/props/effects/fx_sparkle_cosmic.png"
    }
]

# Write out prop_config.js
config_content = f"""/**
 * Configuration & Layer Composer for Grand In-Game Props & Items Studio
 * Features {len(ALL_STATES)} high-definition pixel art & RPG items across 10 rich categories:
 * Melee Weapons, Ranged Weapons, Shields, Armor & Helmets, Potions, Chests & Storage,
 * Tomes & Relics, Gems & Loot, Provisions, Tools & Mechanisms.
 * Defringed with alpha un-multiplying to eliminate white halos completely.
 */

export const propConfig = {{
  // 1. 10 Nhóm Danh Mục Vật Phẩm In-Game
  prop_type: {json.dumps(PROP_TYPES, ensure_ascii=False, indent=4)},

  // 2. Toàn Bộ Vật Phẩm Chi Tiết Theo Nhóm
  state: {json.dumps(ALL_STATES, ensure_ascii=False, indent=4)},

  // 3. Bệ Đỡ Trưng Bày (Pedestals)
  pedestal: {json.dumps(PEDESTALS, ensure_ascii=False, indent=4)},

  // 4. Hào Quang Phép Thuật (Auras)
  aura: {json.dumps(AURAS, ensure_ascii=False, indent=4)},

  // 5. Hiệu Ứng Bụi Sao (Effects)
  effects: {json.dumps(EFFECTS, ensure_ascii=False, indent=4)}
}};

// Preset bảng màu cho hiệu ứng & hào quang
export const propColorPalettes = {{
  aura: [
    '#ffffff', '#60a5fa', '#f87171', '#fbbf24', '#c084fc', '#34d399', '#f472b6', '#38bdf8'
  ],
  effects: [
    '#ffffff', '#fbbf24', '#60a5fa', '#e879f9', '#4ade80', '#f87171', '#38bdf8', '#facc15'
  ],
  pedestal: [
    '#ffffff', '#94a3b8', '#d97706', '#dc2626', '#475569', '#1e293b', '#78350f', '#0f766e'
  ]
}};

/**
 * Layer composer function for character builder
 * Assembles Pedestal -> Aura -> Main Prop Item -> Particle Effects
 */
export const getPropLayers = (selections = {{}}, colors = {{}}) => {{
  const layers = [];
  const selectedType = selections.prop_type || 'melee_weapons';
  const stateId = selections.state;
  const pedestalId = selections.pedestal !== undefined ? selections.pedestal : 'pedestal_stone_altar';
  const auraId = selections.aura !== undefined ? selections.aura : 'none';
  const effectId = selections.effects !== undefined ? selections.effects : 'none';

  // 1. Layer Bệ Đỡ (z_index: 1)
  if (pedestalId && pedestalId !== 'none') {{
    const pedOpt = propConfig.pedestal.find(p => p.id === pedestalId);
    if (pedOpt && pedOpt.src) {{
      layers.push({{
        id: `pedestal_${{pedOpt.id}}`,
        category: 'pedestal',
        name: pedOpt.name,
        src: pedOpt.src,
        color: colors.pedestal || '#ffffff',
        z_index: 1
      }});
    }}
  }}

  // 2. Layer Hào Quang Phép Thuật (z_index: 2)
  if (auraId && auraId !== 'none') {{
    const auraOpt = propConfig.aura.find(a => a.id === auraId);
    if (auraOpt && auraOpt.src) {{
      layers.push({{
        id: `aura_${{auraOpt.id}}`,
        category: 'aura',
        name: auraOpt.name,
        src: auraOpt.src,
        color: colors.aura || '#ffffff',
        z_index: 2
      }});
    }}
  }}

  // 3. Layer Vật Phẩm Chính (z_index: 3)
  let matchingItem = propConfig.state.find(s => s.id === stateId);
  if (!matchingItem || matchingItem.forType !== selectedType) {{
    matchingItem = propConfig.state.find(s => s.forType === selectedType) || propConfig.state[0];
  }}

  if (matchingItem && matchingItem.src) {{
    layers.push({{
      id: `prop_${{matchingItem.id}}`,
      category: 'state',
      name: matchingItem.name,
      src: matchingItem.src,
      color: colors.state || colors.prop || '#ffffff',
      z_index: 3
    }});
  }}

  // 4. Layer Hiệu Ứng Lấp Lánh (z_index: 4)
  if (effectId && effectId !== 'none') {{
    const effOpt = propConfig.effects.find(e => e.id === effectId);
    if (effOpt && effOpt.src) {{
      layers.push({{
        id: `effect_${{effOpt.id}}`,
        category: 'effects',
        name: effOpt.name,
        src: effOpt.src,
        color: colors.effects || '#ffffff',
        z_index: 4
      }});
    }}
  }}

  return layers;
}};
"""

with open(PROP_CONFIG_PATH, "w", encoding="utf-8") as f:
    f.write(config_content)

print(f"Successfully generated {PROP_CONFIG_PATH} with {len(ALL_STATES)} items!")
