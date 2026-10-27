/**
 * Configuration & Layer Composer for Grand In-Game Props & Items Studio
 * Features 1007 high-definition pixel art & RPG items across 10 rich categories:
 * Melee Weapons, Ranged Weapons, Shields, Armor & Helmets, Potions, Chests & Storage,
 * Tomes & Relics, Gems & Loot, Provisions, Tools & Mechanisms.
 * Defringed with alpha un-multiplying to eliminate white halos completely.
 */

export const propConfig = {
  // 1. 10 Nhóm Danh Mục Vật Phẩm In-Game
  prop_type: [
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
],

  // 2. Toàn Bộ Vật Phẩm Chi Tiết Theo Nhóm
  state: [
    {
        "id": "sword_iron",
        "name": "Thanh Gươm Thép Hiệp Sĩ",
        "src": "/assets/props/items/sword_iron.png",
        "thumbSrc": "/assets/props/thumbs/sword_iron.png",
        "forType": "melee_weapons"
    },
    {
        "id": "sword_frost",
        "name": "Thanh Gươm Băng Thanh Thần Bí",
        "src": "/assets/props/items/sword_frost.png",
        "thumbSrc": "/assets/props/thumbs/sword_frost.png",
        "forType": "melee_weapons"
    },
    {
        "id": "sword_void",
        "name": "Thanh Gươm Hư Không Bóng Đêm",
        "src": "/assets/props/items/sword_void.png",
        "thumbSrc": "/assets/props/thumbs/sword_void.png",
        "forType": "melee_weapons"
    },
    {
        "id": "sword_gold",
        "name": "Thanh Gươm Hoàng Kim Excalibur",
        "src": "/assets/props/items/sword_gold.png",
        "thumbSrc": "/assets/props/thumbs/sword_gold.png",
        "forType": "melee_weapons"
    },
    {
        "id": "gear_iron_sword",
        "name": "Thanh Kiếm Thép Cổ Điển",
        "src": "/assets/props/items/gear_iron_sword.png",
        "thumbSrc": "/assets/props/thumbs/gear_iron_sword.png",
        "forType": "melee_weapons"
    },
    {
        "id": "axe_iron",
        "name": "Rìu Chiến Phá Giáp Thép",
        "src": "/assets/props/items/axe_iron.png",
        "thumbSrc": "/assets/props/thumbs/axe_iron.png",
        "forType": "melee_weapons"
    },
    {
        "id": "axe_frost",
        "name": "Rìu Chiến Băng Tuyết Thần Bí",
        "src": "/assets/props/items/axe_frost.png",
        "thumbSrc": "/assets/props/thumbs/axe_frost.png",
        "forType": "melee_weapons"
    },
    {
        "id": "axe_void",
        "name": "Rìu Chiến Hư Không Huyền Ảo",
        "src": "/assets/props/items/axe_void.png",
        "thumbSrc": "/assets/props/thumbs/axe_void.png",
        "forType": "melee_weapons"
    },
    {
        "id": "axe_gold",
        "name": "Rìu Chiến Hoàng Kim Tráng Lệ",
        "src": "/assets/props/items/axe_gold.png",
        "thumbSrc": "/assets/props/thumbs/axe_gold.png",
        "forType": "melee_weapons"
    },
    {
        "id": "gear_crystal_staff",
        "name": "Quyền Trượng Pha Lê Cung Đình",
        "src": "/assets/props/items/gear_crystal_staff.png",
        "thumbSrc": "/assets/props/thumbs/gear_crystal_staff.png",
        "forType": "melee_weapons"
    },
    {
        "id": "gear_wizard_wand",
        "name": "Đũa Phép Thuật Thuần Khiết",
        "src": "/assets/props/items/gear_wizard_wand.png",
        "thumbSrc": "/assets/props/thumbs/gear_wizard_wand.png",
        "forType": "melee_weapons"
    },
    {
        "id": "bow_iron",
        "name": "Cung Tên Săn Bắn Thép",
        "src": "/assets/props/items/bow_iron.png",
        "thumbSrc": "/assets/props/thumbs/bow_iron.png",
        "forType": "ranged_weapons"
    },
    {
        "id": "bow_frost",
        "name": "Cung Băng Tuyết Thần Xạ",
        "src": "/assets/props/items/bow_frost.png",
        "thumbSrc": "/assets/props/thumbs/bow_frost.png",
        "forType": "ranged_weapons"
    },
    {
        "id": "bow_void",
        "name": "Cung Hư Không Tầm Xa",
        "src": "/assets/props/items/bow_void.png",
        "thumbSrc": "/assets/props/thumbs/bow_void.png",
        "forType": "ranged_weapons"
    },
    {
        "id": "bow_gold",
        "name": "Cung Hoàng Kim Thần Thánh",
        "src": "/assets/props/items/bow_gold.png",
        "thumbSrc": "/assets/props/thumbs/bow_gold.png",
        "forType": "ranged_weapons"
    },
    {
        "id": "gear_wood_shield",
        "name": "Khiên Gỗ Chiến Binh Viking",
        "src": "/assets/props/items/gear_wood_shield.png",
        "thumbSrc": "/assets/props/thumbs/gear_wood_shield.png",
        "forType": "shields"
    },
    {
        "id": "helm_iron",
        "name": "Mũ Giáp Trụ Thép Hiệp Sĩ",
        "src": "/assets/props/items/helm_iron.png",
        "thumbSrc": "/assets/props/thumbs/helm_iron.png",
        "forType": "armor_helmets"
    },
    {
        "id": "helm_frost",
        "name": "Nón Trụ Băng Bạc Thần Bí",
        "src": "/assets/props/items/helm_frost.png",
        "thumbSrc": "/assets/props/thumbs/helm_frost.png",
        "forType": "armor_helmets"
    },
    {
        "id": "helm_void",
        "name": "Mũ Giáp Hư Không Bóng Đêm",
        "src": "/assets/props/items/helm_void.png",
        "thumbSrc": "/assets/props/thumbs/helm_void.png",
        "forType": "armor_helmets"
    },
    {
        "id": "helm_gold",
        "name": "Mũ Giáp Hoàng Kim Thần Thánh",
        "src": "/assets/props/items/helm_gold.png",
        "thumbSrc": "/assets/props/thumbs/helm_gold.png",
        "forType": "armor_helmets"
    },
    {
        "id": "armor_iron",
        "name": "Áo Giáp Tấm Thép Kiên Cố",
        "src": "/assets/props/items/armor_iron.png",
        "thumbSrc": "/assets/props/thumbs/armor_iron.png",
        "forType": "armor_helmets"
    },
    {
        "id": "armor_frost",
        "name": "Giáp Băng Thanh Tuyết Sơn",
        "src": "/assets/props/items/armor_frost.png",
        "thumbSrc": "/assets/props/thumbs/armor_frost.png",
        "forType": "armor_helmets"
    },
    {
        "id": "armor_void",
        "name": "Giáp Hắc Ám Hư Không",
        "src": "/assets/props/items/armor_void.png",
        "thumbSrc": "/assets/props/thumbs/armor_void.png",
        "forType": "armor_helmets"
    },
    {
        "id": "armor_gold",
        "name": "Giáp Hoàng Kim Thánh Hiệp Sĩ",
        "src": "/assets/props/items/armor_gold.png",
        "thumbSrc": "/assets/props/thumbs/armor_gold.png",
        "forType": "armor_helmets"
    },
    {
        "id": "cape_iron",
        "name": "Áo Choàng Xám Chiến Binh",
        "src": "/assets/props/items/cape_iron.png",
        "thumbSrc": "/assets/props/thumbs/cape_iron.png",
        "forType": "armor_helmets"
    },
    {
        "id": "cape_frost",
        "name": "Áo Choàng Băng Lam Thần Bí",
        "src": "/assets/props/items/cape_frost.png",
        "thumbSrc": "/assets/props/thumbs/cape_frost.png",
        "forType": "armor_helmets"
    },
    {
        "id": "cape_void",
        "name": "Áo Choàng Dạ Nguyệt Tím Đậm",
        "src": "/assets/props/items/cape_void.png",
        "thumbSrc": "/assets/props/thumbs/cape_void.png",
        "forType": "armor_helmets"
    },
    {
        "id": "cape_gold",
        "name": "Áo Choàng Hoàng Kim Quý Tộc",
        "src": "/assets/props/items/cape_gold.png",
        "thumbSrc": "/assets/props/thumbs/cape_gold.png",
        "forType": "armor_helmets"
    },
    {
        "id": "hat_iron",
        "name": "Mũ Nón Thép Thợ Săn",
        "src": "/assets/props/items/hat_iron.png",
        "thumbSrc": "/assets/props/thumbs/hat_iron.png",
        "forType": "armor_helmets"
    },
    {
        "id": "hat_frost",
        "name": "Mũ Nón Băng Sơn",
        "src": "/assets/props/items/hat_frost.png",
        "thumbSrc": "/assets/props/thumbs/hat_frost.png",
        "forType": "armor_helmets"
    },
    {
        "id": "hat_void",
        "name": "Mũ Nón Pháp Sư Hư Không",
        "src": "/assets/props/items/hat_void.png",
        "thumbSrc": "/assets/props/thumbs/hat_void.png",
        "forType": "armor_helmets"
    },
    {
        "id": "hat_gold",
        "name": "Mũ Vương Miện Hoàng Kim",
        "src": "/assets/props/items/hat_gold.png",
        "thumbSrc": "/assets/props/thumbs/hat_gold.png",
        "forType": "armor_helmets"
    },
    {
        "id": "gloves_leather",
        "name": "Găng Tay Da Thợ Săn",
        "src": "/assets/props/items/gloves_leather.png",
        "thumbSrc": "/assets/props/thumbs/gloves_leather.png",
        "forType": "armor_helmets"
    },
    {
        "id": "gloves_gold",
        "name": "Găng Tay Hoàng Kim Giáp",
        "src": "/assets/props/items/gloves_gold.png",
        "thumbSrc": "/assets/props/thumbs/gloves_gold.png",
        "forType": "armor_helmets"
    },
    {
        "id": "gloves_crystal",
        "name": "Găng Tay Pha Lê Tinh Xảo",
        "src": "/assets/props/items/gloves_crystal.png",
        "thumbSrc": "/assets/props/thumbs/gloves_crystal.png",
        "forType": "armor_helmets"
    },
    {
        "id": "crown_gold_belt",
        "name": "Thắt Lưng Hoàng Kim Giáp",
        "src": "/assets/props/items/crown_gold_belt.png",
        "thumbSrc": "/assets/props/thumbs/crown_gold_belt.png",
        "forType": "armor_helmets"
    },
    {
        "id": "potion_health",
        "name": "Bình Sinh Mệnh Đỏ Tươi",
        "src": "/assets/props/items/potion_health.png",
        "thumbSrc": "/assets/props/thumbs/potion_health.png",
        "forType": "potions"
    },
    {
        "id": "potion_health_small",
        "name": "Bình Sinh Mệnh Cỡ Nhỏ",
        "src": "/assets/props/items/potion_health_small.png",
        "thumbSrc": "/assets/props/thumbs/potion_health_small.png",
        "forType": "potions"
    },
    {
        "id": "potion_mana",
        "name": "Bình Mana Ma Lực Xanh Lam",
        "src": "/assets/props/items/potion_mana.png",
        "thumbSrc": "/assets/props/thumbs/potion_mana.png",
        "forType": "potions"
    },
    {
        "id": "potion_mana_small",
        "name": "Bình Mana Cỡ Nhỏ",
        "src": "/assets/props/items/potion_mana_small.png",
        "thumbSrc": "/assets/props/thumbs/potion_mana_small.png",
        "forType": "potions"
    },
    {
        "id": "potion_poison",
        "name": "Bình Thuốc Độc Lục Bảo",
        "src": "/assets/props/items/potion_poison.png",
        "thumbSrc": "/assets/props/thumbs/potion_poison.png",
        "forType": "potions"
    },
    {
        "id": "potion_elixir",
        "name": "Tiên Dược Hoàng Kim Phục Sinh",
        "src": "/assets/props/items/potion_elixir.png",
        "thumbSrc": "/assets/props/thumbs/potion_elixir.png",
        "forType": "potions"
    },
    {
        "id": "magic_shroom_blue",
        "name": "Nấm Ma Thuật Xanh Huyền Bí",
        "src": "/assets/props/items/magic_shroom_blue.png",
        "thumbSrc": "/assets/props/thumbs/magic_shroom_blue.png",
        "forType": "potions"
    },
    {
        "id": "chest_wood_closed",
        "name": "Rương Gỗ Hầm Ngục (Khóa Chặt)",
        "src": "/assets/props/items/chest_wood_closed.png",
        "thumbSrc": "/assets/props/thumbs/chest_wood_closed.png",
        "forType": "chests_storage"
    },
    {
        "id": "chest_wood_open",
        "name": "Rương Gỗ Mở Bung (Tràn Vàng Bạc)",
        "src": "/assets/props/items/chest_wood_open.png",
        "thumbSrc": "/assets/props/thumbs/chest_wood_open.png",
        "forType": "chests_storage"
    },
    {
        "id": "chest_iron_closed",
        "name": "Rương Sắt Cổ Đại (Khóa Chặt)",
        "src": "/assets/props/items/chest_iron_closed.png",
        "thumbSrc": "/assets/props/thumbs/chest_iron_closed.png",
        "forType": "chests_storage"
    },
    {
        "id": "chest_iron_open",
        "name": "Rương Sắt Mở Bung (Kho Báu Hiếm)",
        "src": "/assets/props/items/chest_iron_open.png",
        "thumbSrc": "/assets/props/thumbs/chest_iron_open.png",
        "forType": "chests_storage"
    },
    {
        "id": "chest_gold_closed",
        "name": "Rương Hoàng Kim Thần Thoại (Khóa Chặt)",
        "src": "/assets/props/items/chest_gold_closed.png",
        "thumbSrc": "/assets/props/thumbs/chest_gold_closed.png",
        "forType": "chests_storage"
    },
    {
        "id": "chest_gold_open",
        "name": "Rương Hoàng Kim Mở (Châu Báu Vô Giá)",
        "src": "/assets/props/items/chest_gold_open.png",
        "thumbSrc": "/assets/props/thumbs/chest_gold_open.png",
        "forType": "chests_storage"
    },
    {
        "id": "chest_sheet_iron",
        "name": "Hòm Đồ Thép Viền Đinh",
        "src": "/assets/props/items/chest_sheet_iron.png",
        "thumbSrc": "/assets/props/thumbs/chest_sheet_iron.png",
        "forType": "chests_storage"
    },
    {
        "id": "chest_sheet_blue",
        "name": "Rương Kho Báu Biển Sâu Lam Ngọc",
        "src": "/assets/props/items/chest_sheet_blue.png",
        "thumbSrc": "/assets/props/thumbs/chest_sheet_blue.png",
        "forType": "chests_storage"
    },
    {
        "id": "chest_sheet_purple",
        "name": "Rương Hư Không Ma Thuật Tím",
        "src": "/assets/props/items/chest_sheet_purple.png",
        "thumbSrc": "/assets/props/thumbs/chest_sheet_purple.png",
        "forType": "chests_storage"
    },
    {
        "id": "chest_sheet_gold",
        "name": "Rương Vàng Cung Điện Cổ",
        "src": "/assets/props/items/chest_sheet_gold.png",
        "thumbSrc": "/assets/props/thumbs/chest_sheet_gold.png",
        "forType": "chests_storage"
    },
    {
        "id": "chest_sheet_red",
        "name": "Rương Hỏa Diệm Rực Cháy",
        "src": "/assets/props/items/chest_sheet_red.png",
        "thumbSrc": "/assets/props/thumbs/chest_sheet_red.png",
        "forType": "chests_storage"
    },
    {
        "id": "book_iron",
        "name": "Cổ Thư Ma Thuật Thép",
        "src": "/assets/props/items/book_iron.png",
        "thumbSrc": "/assets/props/thumbs/book_iron.png",
        "forType": "tomes_relics"
    },
    {
        "id": "book_frost",
        "name": "Cổ Thư Băng Giá Cực Bắc",
        "src": "/assets/props/items/book_frost.png",
        "thumbSrc": "/assets/props/thumbs/book_frost.png",
        "forType": "tomes_relics"
    },
    {
        "id": "book_void",
        "name": "Cổ Thư Hư Không Bóng Tối",
        "src": "/assets/props/items/book_void.png",
        "thumbSrc": "/assets/props/thumbs/book_void.png",
        "forType": "tomes_relics"
    },
    {
        "id": "book_gold",
        "name": "Kinh Thánh Hoàng Kim Thần Khí",
        "src": "/assets/props/items/book_gold.png",
        "thumbSrc": "/assets/props/thumbs/book_gold.png",
        "forType": "tomes_relics"
    },
    {
        "id": "book_open_sheet",
        "name": "Cổ Thư Ma Pháp Mở Trang Thần Chú",
        "src": "/assets/props/items/book_open_sheet.png",
        "thumbSrc": "/assets/props/thumbs/book_open_sheet.png",
        "forType": "tomes_relics"
    },
    {
        "id": "dragon_horns",
        "name": "Cặp Sừng Rồng Hộ Vệ Thần Linh",
        "src": "/assets/props/items/dragon_horns.png",
        "thumbSrc": "/assets/props/thumbs/dragon_horns.png",
        "forType": "tomes_relics"
    },
    {
        "id": "gem_ruby",
        "name": "Hồng Ngọc Huyết Tinh (Ruby Gem)",
        "src": "/assets/props/items/gem_ruby.png",
        "thumbSrc": "/assets/props/thumbs/gem_ruby.png",
        "forType": "gems_loot"
    },
    {
        "id": "gem_emerald",
        "name": "Ngọc Lục Bảo Rực Rỡ (Emerald Gem)",
        "src": "/assets/props/items/gem_emerald.png",
        "thumbSrc": "/assets/props/thumbs/gem_emerald.png",
        "forType": "gems_loot"
    },
    {
        "id": "gem_sapphire",
        "name": "Lam Ngọc Hoàng Gia (Sapphire Gem)",
        "src": "/assets/props/items/gem_sapphire.png",
        "thumbSrc": "/assets/props/thumbs/gem_sapphire.png",
        "forType": "gems_loot"
    },
    {
        "id": "gem_sapphire_cut",
        "name": "Lam Ngọc Giác Cắt Hoàng Gia",
        "src": "/assets/props/items/gem_sapphire_cut.png",
        "thumbSrc": "/assets/props/thumbs/gem_sapphire_cut.png",
        "forType": "gems_loot"
    },
    {
        "id": "gem_diamond",
        "name": "Kim Cương Bất Hoại (Diamond Gem)",
        "src": "/assets/props/items/gem_diamond.png",
        "thumbSrc": "/assets/props/thumbs/gem_diamond.png",
        "forType": "gems_loot"
    },
    {
        "id": "gem_drop_cyan",
        "name": "Giọt Lệ Thần Linh Lam Ngọc",
        "src": "/assets/props/items/gem_drop_cyan.png",
        "thumbSrc": "/assets/props/thumbs/gem_drop_cyan.png",
        "forType": "gems_loot"
    },
    {
        "id": "gem_drop_gold",
        "name": "Giọt Hoàng Kim Tinh Túy",
        "src": "/assets/props/items/gem_drop_gold.png",
        "thumbSrc": "/assets/props/thumbs/gem_drop_gold.png",
        "forType": "gems_loot"
    },
    {
        "id": "gem_drop_green",
        "name": "Giọt Lục Bảo Thảo Mộc",
        "src": "/assets/props/items/gem_drop_green.png",
        "thumbSrc": "/assets/props/thumbs/gem_drop_green.png",
        "forType": "gems_loot"
    },
    {
        "id": "gem_drop_purple",
        "name": "Giọt Thạch Anh Tím Hư Không",
        "src": "/assets/props/items/gem_drop_purple.png",
        "thumbSrc": "/assets/props/thumbs/gem_drop_purple.png",
        "forType": "gems_loot"
    },
    {
        "id": "crystal_shard_purple",
        "name": "Mảnh Tinh Thể Pha Lê Tím",
        "src": "/assets/props/items/crystal_shard_purple.png",
        "thumbSrc": "/assets/props/thumbs/crystal_shard_purple.png",
        "forType": "gems_loot"
    },
    {
        "id": "crystals_ice_cluster",
        "name": "Cụm Tinh Thể Băng Tinh",
        "src": "/assets/props/items/crystals_ice_cluster.png",
        "thumbSrc": "/assets/props/thumbs/crystals_ice_cluster.png",
        "forType": "gems_loot"
    },
    {
        "id": "gold_bar",
        "name": "Thỏi Vàng Ròng 9999",
        "src": "/assets/props/items/gold_bar.png",
        "thumbSrc": "/assets/props/thumbs/gold_bar.png",
        "forType": "gems_loot"
    },
    {
        "id": "coins_gold_stack",
        "name": "Chồng Tiền Vàng Hoàng Kim",
        "src": "/assets/props/items/coins_gold_stack.png",
        "thumbSrc": "/assets/props/thumbs/coins_gold_stack.png",
        "forType": "gems_loot"
    },
    {
        "id": "bracelet_blue",
        "name": "Vòng Tay Thủy Tinh Lam",
        "src": "/assets/props/items/bracelet_blue.png",
        "thumbSrc": "/assets/props/thumbs/bracelet_blue.png",
        "forType": "gems_loot"
    },
    {
        "id": "bracelet_jade",
        "name": "Vòng Tay Phỉ Thúy Lục Bảo",
        "src": "/assets/props/items/bracelet_jade.png",
        "thumbSrc": "/assets/props/thumbs/bracelet_jade.png",
        "forType": "gems_loot"
    },
    {
        "id": "bracelet_purple",
        "name": "Vòng Tay Thạch Anh Tím",
        "src": "/assets/props/items/bracelet_purple.png",
        "thumbSrc": "/assets/props/thumbs/bracelet_purple.png",
        "forType": "gems_loot"
    },
    {
        "id": "bracelet_wood",
        "name": "Vòng Tay Gỗ Cổ Thụ",
        "src": "/assets/props/items/bracelet_wood.png",
        "thumbSrc": "/assets/props/thumbs/bracelet_wood.png",
        "forType": "gems_loot"
    },
    {
        "id": "choker_green",
        "name": "Vòng Cổ Ngọc Bích Thần Rừng",
        "src": "/assets/props/items/choker_green.png",
        "thumbSrc": "/assets/props/thumbs/choker_green.png",
        "forType": "gems_loot"
    },
    {
        "id": "choker_purple",
        "name": "Vòng Cổ Huyền Bí Bóng Đêm",
        "src": "/assets/props/items/choker_purple.png",
        "thumbSrc": "/assets/props/thumbs/choker_purple.png",
        "forType": "gems_loot"
    },
    {
        "id": "apple_sheet",
        "name": "Quả Táo Đỏ Rừng Mọng Nước",
        "src": "/assets/props/items/apple_sheet.png",
        "thumbSrc": "/assets/props/thumbs/apple_sheet.png",
        "forType": "provisions"
    },
    {
        "id": "apple_green",
        "name": "Quả Táo Xanh Chua Giòn",
        "src": "/assets/props/items/apple_green.png",
        "thumbSrc": "/assets/props/thumbs/apple_green.png",
        "forType": "provisions"
    },
    {
        "id": "banana_ripe",
        "name": "Nải Chuối Vàng Chín Ngọt",
        "src": "/assets/props/items/banana_ripe.png",
        "thumbSrc": "/assets/props/thumbs/banana_ripe.png",
        "forType": "provisions"
    },
    {
        "id": "berries_red",
        "name": "Chùm Dâu Rừng Đỏ Thắm",
        "src": "/assets/props/items/berries_red.png",
        "thumbSrc": "/assets/props/thumbs/berries_red.png",
        "forType": "provisions"
    },
    {
        "id": "blackberries_dark",
        "name": "Chùm Mâm Xôi Đen Mọng",
        "src": "/assets/props/items/blackberries_dark.png",
        "thumbSrc": "/assets/props/thumbs/blackberries_dark.png",
        "forType": "provisions"
    },
    {
        "id": "blueberries_wild",
        "name": "Việt Quất Rừng Hoang Dã",
        "src": "/assets/props/items/blueberries_wild.png",
        "thumbSrc": "/assets/props/thumbs/blueberries_wild.png",
        "forType": "provisions"
    },
    {
        "id": "bread_loaf_sheet",
        "name": "Ổ Bánh Mì Nướng Nứt Lò",
        "src": "/assets/props/items/bread_loaf_sheet.png",
        "thumbSrc": "/assets/props/thumbs/bread_loaf_sheet.png",
        "forType": "provisions"
    },
    {
        "id": "cheese_wedge",
        "name": "Miếng Phô Mai Vàng Béo Ngậy",
        "src": "/assets/props/items/cheese_wedge.png",
        "thumbSrc": "/assets/props/thumbs/cheese_wedge.png",
        "forType": "provisions"
    },
    {
        "id": "carrot_fresh",
        "name": "Củ Cà Rốt Tươi Giòn",
        "src": "/assets/props/items/carrot_fresh.png",
        "thumbSrc": "/assets/props/thumbs/carrot_fresh.png",
        "forType": "provisions"
    },
    {
        "id": "leek_fresh",
        "name": "Cây Tỏi Tây Gia Vị Thơm",
        "src": "/assets/props/items/leek_fresh.png",
        "thumbSrc": "/assets/props/thumbs/leek_fresh.png",
        "forType": "provisions"
    },
    {
        "id": "fish_fresh_sheet",
        "name": "Con Cá Biển Tươi Roi Rói",
        "src": "/assets/props/items/fish_fresh_sheet.png",
        "thumbSrc": "/assets/props/thumbs/fish_fresh_sheet.png",
        "forType": "provisions"
    },
    {
        "id": "lever_off",
        "name": "Cần Gạt Cơ Quan (Trạng Thái Đóng / OFF)",
        "src": "/assets/props/items/lever_off.png",
        "thumbSrc": "/assets/props/thumbs/lever_off.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "lever_on",
        "name": "Cần Gạt Cơ Quan (Trạng Thái Mở / ON)",
        "src": "/assets/props/items/lever_on.png",
        "thumbSrc": "/assets/props/thumbs/lever_on.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "portal_active",
        "name": "Cổng Dịch Chuyển Không Gian Sáng Rực",
        "src": "/assets/props/items/portal_active.png",
        "thumbSrc": "/assets/props/thumbs/portal_active.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "002_Heart_Flask",
        "name": "Bình Sinh Mệnh Trái Tim (Heart Flask)",
        "src": "/assets/props/items/002_Heart_Flask.png",
        "thumbSrc": "/assets/props/thumbs/002_Heart_Flask.png",
        "forType": "potions"
    },
    {
        "id": "005_Twin_Chamber_Elixir",
        "name": "Thuốc Tiên Buồng Kép (Twin Elixir)",
        "src": "/assets/props/items/005_Twin_Chamber_Elixir.png",
        "thumbSrc": "/assets/props/thumbs/005_Twin_Chamber_Elixir.png",
        "forType": "potions"
    },
    {
        "id": "021_Bread_Loaf",
        "name": "Ổ Bánh Mì Lúa Mạch Nướng",
        "src": "/assets/props/items/021_Bread_Loaf.png",
        "thumbSrc": "/assets/props/thumbs/021_Bread_Loaf.png",
        "forType": "provisions"
    },
    {
        "id": "026_Apple",
        "name": "Táo Rừng Đỏ Tươi",
        "src": "/assets/props/items/026_Apple.png",
        "thumbSrc": "/assets/props/thumbs/026_Apple.png",
        "forType": "provisions"
    },
    {
        "id": "041_Wheat_Sheaf",
        "name": "Bó Lúa Mì Vàng Óng Mùa Gặt",
        "src": "/assets/props/items/041_Wheat_Sheaf.png",
        "thumbSrc": "/assets/props/thumbs/041_Wheat_Sheaf.png",
        "forType": "provisions"
    },
    {
        "id": "048_Sunflower_Head",
        "name": "Bông Hoa Hướng Dương Mặt Trời",
        "src": "/assets/props/items/048_Sunflower_Head.png",
        "thumbSrc": "/assets/props/thumbs/048_Sunflower_Head.png",
        "forType": "provisions"
    },
    {
        "id": "061_Iron_Ore",
        "name": "Cục Quặng Sắt Hầm Mỏ Thô",
        "src": "/assets/props/items/061_Iron_Ore.png",
        "thumbSrc": "/assets/props/thumbs/061_Iron_Ore.png",
        "forType": "gems_loot"
    },
    {
        "id": "065_Silver_Ingot",
        "name": "Thỏi Bạc Trắng Đúc Khối",
        "src": "/assets/props/items/065_Silver_Ingot.png",
        "thumbSrc": "/assets/props/thumbs/065_Silver_Ingot.png",
        "forType": "gems_loot"
    },
    {
        "id": "081_Wood_Log",
        "name": "Khúc Gỗ Sồi Rừng Nguyên Khối",
        "src": "/assets/props/items/081_Wood_Log.png",
        "thumbSrc": "/assets/props/thumbs/081_Wood_Log.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "089_Thread_Spools",
        "name": "Cuộn Chỉ Khâu Da Thuật Sĩ",
        "src": "/assets/props/items/089_Thread_Spools.png",
        "thumbSrc": "/assets/props/thumbs/089_Thread_Spools.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "101_Coin_Pouch",
        "name": "Túi Tiền Xu Vàng Đầy Ắp",
        "src": "/assets/props/items/101_Coin_Pouch.png",
        "thumbSrc": "/assets/props/thumbs/101_Coin_Pouch.png",
        "forType": "gems_loot"
    },
    {
        "id": "106_Signet_Ring",
        "name": "Nhẫn Ấn Gia Huy Quý Tộc",
        "src": "/assets/props/items/106_Signet_Ring.png",
        "thumbSrc": "/assets/props/thumbs/106_Signet_Ring.png",
        "forType": "gems_loot"
    },
    {
        "id": "121_Blue_Grimoire",
        "name": "Cổ Thư Xanh Huyền Bí (Grimoire)",
        "src": "/assets/props/items/121_Blue_Grimoire.png",
        "thumbSrc": "/assets/props/thumbs/121_Blue_Grimoire.png",
        "forType": "tomes_relics"
    },
    {
        "id": "128_Blank_Parchment",
        "name": "Cuộn Giấy Da Trắng Phong Ấn",
        "src": "/assets/props/items/128_Blank_Parchment.png",
        "thumbSrc": "/assets/props/thumbs/128_Blank_Parchment.png",
        "forType": "tomes_relics"
    },
    {
        "id": "141_Candle",
        "name": "Cây Nến Sáp Ong Chiếu Sáng",
        "src": "/assets/props/items/141_Candle.png",
        "thumbSrc": "/assets/props/thumbs/141_Candle.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "149_Hand_Mirror",
        "name": "Gương Soi Bạc Tiên Tri",
        "src": "/assets/props/items/149_Hand_Mirror.png",
        "thumbSrc": "/assets/props/thumbs/149_Hand_Mirror.png",
        "forType": "tomes_relics"
    },
    {
        "id": "161_Backpack",
        "name": "Ba Lô Thám Hiểm Da Bò Cổ Điển",
        "src": "/assets/props/items/161_Backpack.png",
        "thumbSrc": "/assets/props/thumbs/161_Backpack.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "172_Straw_Hat",
        "name": "Nón Rơm Du Mục Đồng Quê",
        "src": "/assets/props/items/172_Straw_Hat.png",
        "thumbSrc": "/assets/props/thumbs/172_Straw_Hat.png",
        "forType": "armor_helmets"
    },
    {
        "id": "181_Town_Key",
        "name": "Chìa Khóa Cổng Thành Đồ Sộ",
        "src": "/assets/props/items/181_Town_Key.png",
        "thumbSrc": "/assets/props/thumbs/181_Town_Key.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "191_Feather_Charm",
        "name": "Bùa Lông Vũ Thần Phong",
        "src": "/assets/props/items/191_Feather_Charm.png",
        "thumbSrc": "/assets/props/thumbs/191_Feather_Charm.png",
        "forType": "tomes_relics"
    },
    {
        "id": "food_ale_01",
        "name": "Vại Bia Men Lúa Mạch Bọt Tuyết",
        "src": "/assets/props/items/food_ale_01.png",
        "thumbSrc": "/assets/props/thumbs/food_ale_01.png",
        "forType": "provisions"
    },
    {
        "id": "food_berries_01",
        "name": "Bát Quả Mọng Rừng Đỏ Tươi",
        "src": "/assets/props/items/food_berries_01.png",
        "thumbSrc": "/assets/props/thumbs/food_berries_01.png",
        "forType": "provisions"
    },
    {
        "id": "food_bread_01",
        "name": "Ổ Bánh Mì Nướng Nứt Men Vàng Rụm",
        "src": "/assets/props/items/food_bread_01.png",
        "thumbSrc": "/assets/props/thumbs/food_bread_01.png",
        "forType": "provisions"
    },
    {
        "id": "food_brew_01",
        "name": "Cốc Rượu Ủ Quán Trọ Thảo Mộc",
        "src": "/assets/props/items/food_brew_01.png",
        "thumbSrc": "/assets/props/thumbs/food_brew_01.png",
        "forType": "provisions"
    },
    {
        "id": "food_butter_01",
        "name": "Khối Bơ Sữa Vàng Thơm Béo",
        "src": "/assets/props/items/food_butter_01.png",
        "thumbSrc": "/assets/props/thumbs/food_butter_01.png",
        "forType": "provisions"
    },
    {
        "id": "food_cake_01",
        "name": "Bánh Bông Lan Nướng Cung Đình",
        "src": "/assets/props/items/food_cake_01.png",
        "thumbSrc": "/assets/props/thumbs/food_cake_01.png",
        "forType": "provisions"
    },
    {
        "id": "food_cheese_01",
        "name": "Ổ Phô Mai Vàng Thượng Hạng",
        "src": "/assets/props/items/food_cheese_01.png",
        "thumbSrc": "/assets/props/thumbs/food_cheese_01.png",
        "forType": "provisions"
    },
    {
        "id": "food_cider_01",
        "name": "Bình Rượu Táo Cider Lên Men",
        "src": "/assets/props/items/food_cider_01.png",
        "thumbSrc": "/assets/props/thumbs/food_cider_01.png",
        "forType": "provisions"
    },
    {
        "id": "food_dried_01",
        "name": "Thịt Sấy Khô Dự Trữ Dã Ngoại",
        "src": "/assets/props/items/food_dried_01.png",
        "thumbSrc": "/assets/props/thumbs/food_dried_01.png",
        "forType": "provisions"
    },
    {
        "id": "food_eggs_01",
        "name": "Rổ Trứng Gà Đồng Tươi Mới",
        "src": "/assets/props/items/food_eggs_01.png",
        "thumbSrc": "/assets/props/thumbs/food_eggs_01.png",
        "forType": "provisions"
    },
    {
        "id": "food_fish_01",
        "name": "Cá Hồi Nướng Than Hồng Tươi Ngon",
        "src": "/assets/props/items/food_fish_01.png",
        "thumbSrc": "/assets/props/thumbs/food_fish_01.png",
        "forType": "provisions"
    },
    {
        "id": "food_fruits_01",
        "name": "Đĩa Trái Cây Thập Cẩm Quý Tộc",
        "src": "/assets/props/items/food_fruits_01.png",
        "thumbSrc": "/assets/props/thumbs/food_fruits_01.png",
        "forType": "provisions"
    },
    {
        "id": "food_grain_01",
        "name": "Bao Hạt Ngũ Cốc Thu Hoạch",
        "src": "/assets/props/items/food_grain_01.png",
        "thumbSrc": "/assets/props/thumbs/food_grain_01.png",
        "forType": "provisions"
    },
    {
        "id": "food_ham_01",
        "name": "Đùi Heo Muối Xông Khói Nguyên Chiếc",
        "src": "/assets/props/items/food_ham_01.png",
        "thumbSrc": "/assets/props/thumbs/food_ham_01.png",
        "forType": "provisions"
    },
    {
        "id": "food_herbs_01",
        "name": "Bó Thảo Mộc Gia Vị Rừng",
        "src": "/assets/props/items/food_herbs_01.png",
        "thumbSrc": "/assets/props/thumbs/food_herbs_01.png",
        "forType": "provisions"
    },
    {
        "id": "food_honey_01",
        "name": "Hũ Mật Ong Rừng Vàng Óng",
        "src": "/assets/props/items/food_honey_01.png",
        "thumbSrc": "/assets/props/thumbs/food_honey_01.png",
        "forType": "provisions"
    },
    {
        "id": "food_mead_01",
        "name": "Cốc Rượu Mật Ong Mead Chiến Binh",
        "src": "/assets/props/items/food_mead_01.png",
        "thumbSrc": "/assets/props/thumbs/food_mead_01.png",
        "forType": "provisions"
    },
    {
        "id": "food_meat_01",
        "name": "Tảng Thịt Bò Tươi Thượng Hạng",
        "src": "/assets/props/items/food_meat_01.png",
        "thumbSrc": "/assets/props/thumbs/food_meat_01.png",
        "forType": "provisions"
    },
    {
        "id": "food_milk_01",
        "name": "Bình Sữa Bò Tươi Vắt Trong Ngày",
        "src": "/assets/props/items/food_milk_01.png",
        "thumbSrc": "/assets/props/thumbs/food_milk_01.png",
        "forType": "provisions"
    },
    {
        "id": "food_mushrooms_01",
        "name": "Nấm Hương Rừng Thơm Ngon",
        "src": "/assets/props/items/food_mushrooms_01.png",
        "thumbSrc": "/assets/props/thumbs/food_mushrooms_01.png",
        "forType": "provisions"
    },
    {
        "id": "food_nuts_01",
        "name": "Hạt Dẻ Rừng Nướng Thơm Lừng",
        "src": "/assets/props/items/food_nuts_01.png",
        "thumbSrc": "/assets/props/thumbs/food_nuts_01.png",
        "forType": "provisions"
    },
    {
        "id": "food_pie_01",
        "name": "Bánh Pie Nướng Nhân Thịt Cừu",
        "src": "/assets/props/items/food_pie_01.png",
        "thumbSrc": "/assets/props/thumbs/food_pie_01.png",
        "forType": "provisions"
    },
    {
        "id": "food_porridge_01",
        "name": "Bát Cháo Yến Mạch Nóng Hổi",
        "src": "/assets/props/items/food_porridge_01.png",
        "thumbSrc": "/assets/props/thumbs/food_porridge_01.png",
        "forType": "provisions"
    },
    {
        "id": "food_poultry_01",
        "name": "Gà Quay Mật Ong Nguyên Con",
        "src": "/assets/props/items/food_poultry_01.png",
        "thumbSrc": "/assets/props/thumbs/food_poultry_01.png",
        "forType": "provisions"
    },
    {
        "id": "food_preserves_01",
        "name": "Lọ Mứt Quả Ngâm Đường Phèn",
        "src": "/assets/props/items/food_preserves_01.png",
        "thumbSrc": "/assets/props/thumbs/food_preserves_01.png",
        "forType": "provisions"
    },
    {
        "id": "food_roast_01",
        "name": "Thịt Bít Tết Nướng Lửa Hồng",
        "src": "/assets/props/items/food_roast_01.png",
        "thumbSrc": "/assets/props/thumbs/food_roast_01.png",
        "forType": "provisions"
    },
    {
        "id": "food_sausages_01",
        "name": "Xúc Xích Hun Khói Vườn Nhà",
        "src": "/assets/props/items/food_sausages_01.png",
        "thumbSrc": "/assets/props/thumbs/food_sausages_01.png",
        "forType": "provisions"
    },
    {
        "id": "food_stew_01",
        "name": "Nồi Hầm Thịt Củ Nóng Hổi",
        "src": "/assets/props/items/food_stew_01.png",
        "thumbSrc": "/assets/props/thumbs/food_stew_01.png",
        "forType": "provisions"
    },
    {
        "id": "food_vegetables_01",
        "name": "Giỏ Rau Củ Tươi Vườn Lâu Đài",
        "src": "/assets/props/items/food_vegetables_01.png",
        "thumbSrc": "/assets/props/thumbs/food_vegetables_01.png",
        "forType": "provisions"
    },
    {
        "id": "food_water_01",
        "name": "Bình Nước Suối Đầu Nguồn Thanh Mát",
        "src": "/assets/props/items/food_water_01.png",
        "thumbSrc": "/assets/props/thumbs/food_water_01.png",
        "forType": "provisions"
    },
    {
        "id": "food_wine_01",
        "name": "Bình Rượu Vang Đỏ Thượng Hạng",
        "src": "/assets/props/items/food_wine_01.png",
        "thumbSrc": "/assets/props/thumbs/food_wine_01.png",
        "forType": "provisions"
    },
    {
        "id": "food_wine_02",
        "name": "Chai Rượu Vang Cổ Lâu Năm",
        "src": "/assets/props/items/food_wine_02.png",
        "thumbSrc": "/assets/props/thumbs/food_wine_02.png",
        "forType": "provisions"
    },
    {
        "id": "med7_sw_01",
        "name": "Kiếm Hiệp Sĩ Thép Lưỡi Thẳng",
        "src": "/assets/props/items/med7_sw_01.png",
        "thumbSrc": "/assets/props/thumbs/med7_sw_01.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_sw_02",
        "name": "Đoản Kiếm Sát Thủ Bén Ngọt",
        "src": "/assets/props/items/med7_sw_02.png",
        "thumbSrc": "/assets/props/thumbs/med7_sw_02.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_sw_03",
        "name": "Kiếm Ngắn Lính Bộ Binh",
        "src": "/assets/props/items/med7_sw_03.png",
        "thumbSrc": "/assets/props/thumbs/med7_sw_03.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_sw_04",
        "name": "Kiếm Bản Rộng Hiệp Sĩ Sắt",
        "src": "/assets/props/items/med7_sw_04.png",
        "thumbSrc": "/assets/props/thumbs/med7_sw_04.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_sw_05",
        "name": "Thanh Gươm Sắt Chém Sắt",
        "src": "/assets/props/items/med7_sw_05.png",
        "thumbSrc": "/assets/props/thumbs/med7_sw_05.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_sw_06",
        "name": "Kiếm Chữ Thập Thánh Binh",
        "src": "/assets/props/items/med7_sw_06.png",
        "thumbSrc": "/assets/props/thumbs/med7_sw_06.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_sw_07",
        "name": "Kiếm Hiệp Sĩ Vệ Quốc",
        "src": "/assets/props/items/med7_sw_07.png",
        "thumbSrc": "/assets/props/thumbs/med7_sw_07.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_sw_08",
        "name": "Đoản Kiếm Thép Găm Áo",
        "src": "/assets/props/items/med7_sw_08.png",
        "thumbSrc": "/assets/props/thumbs/med7_sw_08.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_sw_09",
        "name": "Kiếm Tầm Sét Thép Sáng",
        "src": "/assets/props/items/med7_sw_09.png",
        "thumbSrc": "/assets/props/thumbs/med7_sw_09.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_sw_10",
        "name": "Thanh Kiếm Nhọn Xuyên Giáp",
        "src": "/assets/props/items/med7_sw_10.png",
        "thumbSrc": "/assets/props/thumbs/med7_sw_10.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_sw_11",
        "name": "Kiếm Hiệp Sĩ Lâu Đài",
        "src": "/assets/props/items/med7_sw_11.png",
        "thumbSrc": "/assets/props/thumbs/med7_sw_11.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_sw_12",
        "name": "Kiếm Cận Chiến Đấu Trường",
        "src": "/assets/props/items/med7_sw_12.png",
        "thumbSrc": "/assets/props/thumbs/med7_sw_12.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_sw_13",
        "name": "Thanh Gươm Sắt Cổ Truyền",
        "src": "/assets/props/items/med7_sw_13.png",
        "thumbSrc": "/assets/props/thumbs/med7_sw_13.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_sw_14",
        "name": "Kiếm Dài Du Mục Thép",
        "src": "/assets/props/items/med7_sw_14.png",
        "thumbSrc": "/assets/props/thumbs/med7_sw_14.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_sw_15",
        "name": "Thanh Kiếm Sĩ Quan Hoàng Gia",
        "src": "/assets/props/items/med7_sw_15.png",
        "thumbSrc": "/assets/props/thumbs/med7_sw_15.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_sw_16",
        "name": "Kiếm Sắc Thợ Rèn",
        "src": "/assets/props/items/med7_sw_16.png",
        "thumbSrc": "/assets/props/thumbs/med7_sw_16.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_gsw_01",
        "name": "Đại Đao Hiệp Sĩ Hai Tay",
        "src": "/assets/props/items/med7_gsw_01.png",
        "thumbSrc": "/assets/props/thumbs/med7_gsw_01.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_gsw_02",
        "name": "Kiếm Liễu Quý Tộc Rapier",
        "src": "/assets/props/items/med7_gsw_02.png",
        "thumbSrc": "/assets/props/thumbs/med7_gsw_02.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_gsw_03",
        "name": "Trảm Mã Kiếm Hai Lưỡi",
        "src": "/assets/props/items/med7_gsw_03.png",
        "thumbSrc": "/assets/props/thumbs/med7_gsw_03.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_gsw_04",
        "name": "Kiếm Liễu Cung Đình Mạ Vàng",
        "src": "/assets/props/items/med7_gsw_04.png",
        "thumbSrc": "/assets/props/thumbs/med7_gsw_04.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_gsw_05",
        "name": "Đại Kiếm Phá Trận Cổ Đại",
        "src": "/assets/props/items/med7_gsw_05.png",
        "thumbSrc": "/assets/props/thumbs/med7_gsw_05.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_gsw_06",
        "name": "Kiếm Liễu Đấu Kiếm Cổ",
        "src": "/assets/props/items/med7_gsw_06.png",
        "thumbSrc": "/assets/props/thumbs/med7_gsw_06.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_gsw_07",
        "name": "Đại Gươm Chiến Tuyến Nặng",
        "src": "/assets/props/items/med7_gsw_07.png",
        "thumbSrc": "/assets/props/thumbs/med7_gsw_07.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_gsw_08",
        "name": "Kiếm Liễu Sát Thủ Hoàng Tộc",
        "src": "/assets/props/items/med7_gsw_08.png",
        "thumbSrc": "/assets/props/thumbs/med7_gsw_08.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_gsw_09",
        "name": "Đại Đao Bản Lớn Thép",
        "src": "/assets/props/items/med7_gsw_09.png",
        "thumbSrc": "/assets/props/thumbs/med7_gsw_09.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_gsw_10",
        "name": "Kiếm Liễu Xuyên Hộ Thân",
        "src": "/assets/props/items/med7_gsw_10.png",
        "thumbSrc": "/assets/props/thumbs/med7_gsw_10.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_gsw_11",
        "name": "Thanh Kiếm Kỵ Binh Lưỡi Cong",
        "src": "/assets/props/items/med7_gsw_11.png",
        "thumbSrc": "/assets/props/thumbs/med7_gsw_11.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_gsw_12",
        "name": "Đại Kiếm Lưỡi Răng Cưa",
        "src": "/assets/props/items/med7_gsw_12.png",
        "thumbSrc": "/assets/props/thumbs/med7_gsw_12.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_gsw_13",
        "name": "Kiếm Liễu Thép Damascus",
        "src": "/assets/props/items/med7_gsw_13.png",
        "thumbSrc": "/assets/props/thumbs/med7_gsw_13.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_gsw_14",
        "name": "Đại Gươm Phá Thành Trụ",
        "src": "/assets/props/items/med7_gsw_14.png",
        "thumbSrc": "/assets/props/thumbs/med7_gsw_14.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_gsw_15",
        "name": "Kiếm Bản Rộng Cận Chiến",
        "src": "/assets/props/items/med7_gsw_15.png",
        "thumbSrc": "/assets/props/thumbs/med7_gsw_15.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_gsw_16",
        "name": "Đại Kiếm Tinh Luyện",
        "src": "/assets/props/items/med7_gsw_16.png",
        "thumbSrc": "/assets/props/thumbs/med7_gsw_16.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_axe_01",
        "name": "Rìu Chiến Hai Lưỡi Phá Giáp",
        "src": "/assets/props/items/med7_axe_01.png",
        "thumbSrc": "/assets/props/thumbs/med7_axe_01.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_axe_02",
        "name": "Rìu Bổ Củi Chiến Binh Sắt",
        "src": "/assets/props/items/med7_axe_02.png",
        "thumbSrc": "/assets/props/thumbs/med7_axe_02.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_axe_03",
        "name": "Rìu Chiến Một Lưỡi Nặng",
        "src": "/assets/props/items/med7_axe_03.png",
        "thumbSrc": "/assets/props/thumbs/med7_axe_03.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_axe_04",
        "name": "Rìu Phá Thành Đao To",
        "src": "/assets/props/items/med7_axe_04.png",
        "thumbSrc": "/assets/props/thumbs/med7_axe_04.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_axe_05",
        "name": "Rìu Chiến Hiệp Sĩ Viking",
        "src": "/assets/props/items/med7_axe_05.png",
        "thumbSrc": "/assets/props/thumbs/med7_axe_05.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_axe_06",
        "name": "Rìu Săn Rừng Cán Gỗ",
        "src": "/assets/props/items/med7_axe_06.png",
        "thumbSrc": "/assets/props/thumbs/med7_axe_06.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_axe_07",
        "name": "Rìu Chém Giáp Răng Thép",
        "src": "/assets/props/items/med7_axe_07.png",
        "thumbSrc": "/assets/props/thumbs/med7_axe_07.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_axe_08",
        "name": "Rìu Chiến Lưỡi Trăng Khuyết",
        "src": "/assets/props/items/med7_axe_08.png",
        "thumbSrc": "/assets/props/thumbs/med7_axe_08.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_axe_09",
        "name": "Rìu Chiến Hạng Nặng Bộ Binh",
        "src": "/assets/props/items/med7_axe_09.png",
        "thumbSrc": "/assets/props/thumbs/med7_axe_09.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_axe_10",
        "name": "Rìu Chiến Đầu Búa Hai Tác Dụng",
        "src": "/assets/props/items/med7_axe_10.png",
        "thumbSrc": "/assets/props/thumbs/med7_axe_10.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_axe_11",
        "name": "Rìu Ngắn Tác Chiến Nhanh",
        "src": "/assets/props/items/med7_axe_11.png",
        "thumbSrc": "/assets/props/thumbs/med7_axe_11.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_axe_12",
        "name": "Rìu Bổ Lưỡi Thép Rèn",
        "src": "/assets/props/items/med7_axe_12.png",
        "thumbSrc": "/assets/props/thumbs/med7_axe_12.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_axe_13",
        "name": "Rìu Răng Sói Chiến Binh",
        "src": "/assets/props/items/med7_axe_13.png",
        "thumbSrc": "/assets/props/thumbs/med7_axe_13.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_axe_14",
        "name": "med7_axe #14",
        "src": "/assets/props/items/med7_axe_14.png",
        "thumbSrc": "/assets/props/thumbs/med7_axe_14.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_axe_15",
        "name": "med7_axe #15",
        "src": "/assets/props/items/med7_axe_15.png",
        "thumbSrc": "/assets/props/thumbs/med7_axe_15.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_axe_16",
        "name": "med7_axe #16",
        "src": "/assets/props/items/med7_axe_16.png",
        "thumbSrc": "/assets/props/thumbs/med7_axe_16.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_mace_01",
        "name": "Búa Tạ Đập Thép Chiến Binh",
        "src": "/assets/props/items/med7_mace_01.png",
        "thumbSrc": "/assets/props/thumbs/med7_mace_01.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_mace_02",
        "name": "Chùy Gai Morningstar Huyền Bí",
        "src": "/assets/props/items/med7_mace_02.png",
        "thumbSrc": "/assets/props/thumbs/med7_mace_02.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_mace_03",
        "name": "Chùy Sắt Nghiền Giáp Nặng",
        "src": "/assets/props/items/med7_mace_03.png",
        "thumbSrc": "/assets/props/thumbs/med7_mace_03.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_mace_04",
        "name": "Búa Chiến Đầu Dẹt Phá Khiên",
        "src": "/assets/props/items/med7_mace_04.png",
        "thumbSrc": "/assets/props/thumbs/med7_mace_04.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_mace_05",
        "name": "Chùy Tròn Viền Đinh Nhọn",
        "src": "/assets/props/items/med7_mace_05.png",
        "thumbSrc": "/assets/props/thumbs/med7_mace_05.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_mace_06",
        "name": "Búa Chiến Hai Đầu Khối Thép",
        "src": "/assets/props/items/med7_mace_06.png",
        "thumbSrc": "/assets/props/thumbs/med7_mace_06.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_mace_07",
        "name": "Chùy Xích Hiệp Sĩ Thập Tự",
        "src": "/assets/props/items/med7_mace_07.png",
        "thumbSrc": "/assets/props/thumbs/med7_mace_07.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_mace_08",
        "name": "Chùy Gai Lục Giác Sắt",
        "src": "/assets/props/items/med7_mace_08.png",
        "thumbSrc": "/assets/props/thumbs/med7_mace_08.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_mace_09",
        "name": "Búa Rìu Phá Khối Trụ",
        "src": "/assets/props/items/med7_mace_09.png",
        "thumbSrc": "/assets/props/thumbs/med7_mace_09.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_mace_10",
        "name": "Chùy Bọc Sắt Đầu Tròn",
        "src": "/assets/props/items/med7_mace_10.png",
        "thumbSrc": "/assets/props/thumbs/med7_mace_10.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_mace_11",
        "name": "Búa Chiến Hộ Vệ Thần Lực",
        "src": "/assets/props/items/med7_mace_11.png",
        "thumbSrc": "/assets/props/thumbs/med7_mace_11.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_mace_12",
        "name": "med7_mace #12",
        "src": "/assets/props/items/med7_mace_12.png",
        "thumbSrc": "/assets/props/thumbs/med7_mace_12.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_mace_13",
        "name": "med7_mace #13",
        "src": "/assets/props/items/med7_mace_13.png",
        "thumbSrc": "/assets/props/thumbs/med7_mace_13.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_mace_14",
        "name": "med7_mace #14",
        "src": "/assets/props/items/med7_mace_14.png",
        "thumbSrc": "/assets/props/thumbs/med7_mace_14.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_mace_15",
        "name": "med7_mace #15",
        "src": "/assets/props/items/med7_mace_15.png",
        "thumbSrc": "/assets/props/thumbs/med7_mace_15.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_mace_16",
        "name": "med7_mace #16",
        "src": "/assets/props/items/med7_mace_16.png",
        "thumbSrc": "/assets/props/thumbs/med7_mace_16.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_pol_01",
        "name": "Thương Dài Kỵ Binh Xuyên Giáp",
        "src": "/assets/props/items/med7_pol_01.png",
        "thumbSrc": "/assets/props/thumbs/med7_pol_01.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_pol_02",
        "name": "Kích Hai Đầu Halberd Cận Vệ",
        "src": "/assets/props/items/med7_pol_02.png",
        "thumbSrc": "/assets/props/thumbs/med7_pol_02.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_pol_03",
        "name": "Lưỡi Hái Tử Thần Chiến Trường",
        "src": "/assets/props/items/med7_pol_03.png",
        "thumbSrc": "/assets/props/thumbs/med7_pol_03.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_pol_04",
        "name": "Giáo Sắt Lính Gác Cổng Thành",
        "src": "/assets/props/items/med7_pol_04.png",
        "thumbSrc": "/assets/props/thumbs/med7_pol_04.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_pol_05",
        "name": "Thương Hiệp Sĩ Mũi Tam Giác",
        "src": "/assets/props/items/med7_pol_05.png",
        "thumbSrc": "/assets/props/thumbs/med7_pol_05.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_pol_06",
        "name": "Kích Chiến Phá Trận Bộ Binh",
        "src": "/assets/props/items/med7_pol_06.png",
        "thumbSrc": "/assets/props/thumbs/med7_pol_06.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_pol_07",
        "name": "Lưỡi Hái Chiến Đấu Răng Thép",
        "src": "/assets/props/items/med7_pol_07.png",
        "thumbSrc": "/assets/props/thumbs/med7_pol_07.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_pol_08",
        "name": "Giáo Săn Heo Rừng Mũi Dài",
        "src": "/assets/props/items/med7_pol_08.png",
        "thumbSrc": "/assets/props/thumbs/med7_pol_08.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_pol_09",
        "name": "Kích Lưỡi Búa Tráng Lệ",
        "src": "/assets/props/items/med7_pol_09.png",
        "thumbSrc": "/assets/props/thumbs/med7_pol_09.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_pol_10",
        "name": "Thương Mũi Lửa Đầu Đồng",
        "src": "/assets/props/items/med7_pol_10.png",
        "thumbSrc": "/assets/props/thumbs/med7_pol_10.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_pol_11",
        "name": "Giáo Ngắn Cận Chiến Ném Xa",
        "src": "/assets/props/items/med7_pol_11.png",
        "thumbSrc": "/assets/props/thumbs/med7_pol_11.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_pol_12",
        "name": "Kích Chiến Vệ Sĩ Hoàng Gia",
        "src": "/assets/props/items/med7_pol_12.png",
        "thumbSrc": "/assets/props/thumbs/med7_pol_12.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_pol_13",
        "name": "Lưỡi Hái Thu Hoạch Linh Hồn",
        "src": "/assets/props/items/med7_pol_13.png",
        "thumbSrc": "/assets/props/thumbs/med7_pol_13.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_pol_14",
        "name": "Thương Kỵ Binh Mạ Bạc",
        "src": "/assets/props/items/med7_pol_14.png",
        "thumbSrc": "/assets/props/thumbs/med7_pol_14.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_pol_15",
        "name": "Kích Giáo Trấn Giữ Cung Đình",
        "src": "/assets/props/items/med7_pol_15.png",
        "thumbSrc": "/assets/props/thumbs/med7_pol_15.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_pol_16",
        "name": "med7_pol #16",
        "src": "/assets/props/items/med7_pol_16.png",
        "thumbSrc": "/assets/props/thumbs/med7_pol_16.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med7_bow_01",
        "name": "Cung Dài Cổ Thụ Hiệp Sĩ",
        "src": "/assets/props/items/med7_bow_01.png",
        "thumbSrc": "/assets/props/thumbs/med7_bow_01.png",
        "forType": "ranged_weapons"
    },
    {
        "id": "med7_bow_02",
        "name": "Cung Săn Bắn Thợ Săn Rừng",
        "src": "/assets/props/items/med7_bow_02.png",
        "thumbSrc": "/assets/props/thumbs/med7_bow_02.png",
        "forType": "ranged_weapons"
    },
    {
        "id": "med7_bow_03",
        "name": "Nỏ Chiến Hạng Nặng Phá Thành",
        "src": "/assets/props/items/med7_bow_03.png",
        "thumbSrc": "/assets/props/thumbs/med7_bow_03.png",
        "forType": "ranged_weapons"
    },
    {
        "id": "med7_bow_04",
        "name": "Nỏ Bắn Nhanh Cầm Tay Gọn",
        "src": "/assets/props/items/med7_bow_04.png",
        "thumbSrc": "/assets/props/thumbs/med7_bow_04.png",
        "forType": "ranged_weapons"
    },
    {
        "id": "med7_bow_05",
        "name": "Cung Gỗ Du Mục Uốn Cong",
        "src": "/assets/props/items/med7_bow_05.png",
        "thumbSrc": "/assets/props/thumbs/med7_bow_05.png",
        "forType": "ranged_weapons"
    },
    {
        "id": "med7_bow_06",
        "name": "Nỏ Săn Thú Khung Thép",
        "src": "/assets/props/items/med7_bow_06.png",
        "thumbSrc": "/assets/props/thumbs/med7_bow_06.png",
        "forType": "ranged_weapons"
    },
    {
        "id": "med7_bow_07",
        "name": "Cung Chiến Bộ Binh Bọc Da",
        "src": "/assets/props/items/med7_bow_07.png",
        "thumbSrc": "/assets/props/thumbs/med7_bow_07.png",
        "forType": "ranged_weapons"
    },
    {
        "id": "med7_bow_08",
        "name": "Nỏ Tự Nạp Mũi Tên Đôi",
        "src": "/assets/props/items/med7_bow_08.png",
        "thumbSrc": "/assets/props/thumbs/med7_bow_08.png",
        "forType": "ranged_weapons"
    },
    {
        "id": "med7_bow_09",
        "name": "Cung Ngắn Kỵ Xạ Lưng Ngựa",
        "src": "/assets/props/items/med7_bow_09.png",
        "thumbSrc": "/assets/props/thumbs/med7_bow_09.png",
        "forType": "ranged_weapons"
    },
    {
        "id": "med7_bow_10",
        "name": "Nỏ Chiến Binh Viền Sắt",
        "src": "/assets/props/items/med7_bow_10.png",
        "thumbSrc": "/assets/props/thumbs/med7_bow_10.png",
        "forType": "ranged_weapons"
    },
    {
        "id": "med7_bow_11",
        "name": "Cung Gỗ Sồi Căng Dây Cước",
        "src": "/assets/props/items/med7_bow_11.png",
        "thumbSrc": "/assets/props/thumbs/med7_bow_11.png",
        "forType": "ranged_weapons"
    },
    {
        "id": "med7_bow_12",
        "name": "Nỏ Sát Thủ Khung Gỗ Mun",
        "src": "/assets/props/items/med7_bow_12.png",
        "thumbSrc": "/assets/props/thumbs/med7_bow_12.png",
        "forType": "ranged_weapons"
    },
    {
        "id": "med7_bow_13",
        "name": "med7_bow #13",
        "src": "/assets/props/items/med7_bow_13.png",
        "thumbSrc": "/assets/props/thumbs/med7_bow_13.png",
        "forType": "ranged_weapons"
    },
    {
        "id": "med7_bow_14",
        "name": "med7_bow #14",
        "src": "/assets/props/items/med7_bow_14.png",
        "thumbSrc": "/assets/props/thumbs/med7_bow_14.png",
        "forType": "ranged_weapons"
    },
    {
        "id": "med7_bow_15",
        "name": "med7_bow #15",
        "src": "/assets/props/items/med7_bow_15.png",
        "thumbSrc": "/assets/props/thumbs/med7_bow_15.png",
        "forType": "ranged_weapons"
    },
    {
        "id": "med7_bow_16",
        "name": "med7_bow #16",
        "src": "/assets/props/items/med7_bow_16.png",
        "thumbSrc": "/assets/props/thumbs/med7_bow_16.png",
        "forType": "ranged_weapons"
    },
    {
        "id": "med7_quiv_01",
        "name": "Ống Đựng Mũi Tên Da Bò Rừng",
        "src": "/assets/props/items/med7_quiv_01.png",
        "thumbSrc": "/assets/props/thumbs/med7_quiv_01.png",
        "forType": "ranged_weapons"
    },
    {
        "id": "med7_quiv_02",
        "name": "Bao Tên Hiệp Sĩ Hoàng Gia Thêu Chỉ",
        "src": "/assets/props/items/med7_quiv_02.png",
        "thumbSrc": "/assets/props/thumbs/med7_quiv_02.png",
        "forType": "ranged_weapons"
    },
    {
        "id": "med7_quiv_03",
        "name": "Bó Mũi Tên Sắt Xuyên Giáp",
        "src": "/assets/props/items/med7_quiv_03.png",
        "thumbSrc": "/assets/props/thumbs/med7_quiv_03.png",
        "forType": "ranged_weapons"
    },
    {
        "id": "med7_quiv_04",
        "name": "Ống Tên Thợ Săn Rừng Rậm",
        "src": "/assets/props/items/med7_quiv_04.png",
        "thumbSrc": "/assets/props/thumbs/med7_quiv_04.png",
        "forType": "ranged_weapons"
    },
    {
        "id": "med7_quiv_05",
        "name": "Bao Tên Kỵ Xạ Đeo Lưng Da",
        "src": "/assets/props/items/med7_quiv_05.png",
        "thumbSrc": "/assets/props/thumbs/med7_quiv_05.png",
        "forType": "ranged_weapons"
    },
    {
        "id": "med7_quiv_06",
        "name": "Bó Mũi Tên Đuôi Lông Vũ Trắng",
        "src": "/assets/props/items/med7_quiv_06.png",
        "thumbSrc": "/assets/props/thumbs/med7_quiv_06.png",
        "forType": "ranged_weapons"
    },
    {
        "id": "med7_quiv_07",
        "name": "Ống Tên Chiến Trận Bọc Kim Loại",
        "src": "/assets/props/items/med7_quiv_07.png",
        "thumbSrc": "/assets/props/thumbs/med7_quiv_07.png",
        "forType": "ranged_weapons"
    },
    {
        "id": "med7_quiv_08",
        "name": "Bao Tên Nỏ Ngắn Gọn Gàng",
        "src": "/assets/props/items/med7_quiv_08.png",
        "thumbSrc": "/assets/props/thumbs/med7_quiv_08.png",
        "forType": "ranged_weapons"
    },
    {
        "id": "med7_quiv_09",
        "name": "Bó Mũi Tên Nhúng Dầu Lửa",
        "src": "/assets/props/items/med7_quiv_09.png",
        "thumbSrc": "/assets/props/thumbs/med7_quiv_09.png",
        "forType": "ranged_weapons"
    },
    {
        "id": "med7_quiv_10",
        "name": "med7_quiv #10",
        "src": "/assets/props/items/med7_quiv_10.png",
        "thumbSrc": "/assets/props/thumbs/med7_quiv_10.png",
        "forType": "ranged_weapons"
    },
    {
        "id": "med7_quiv_11",
        "name": "med7_quiv #11",
        "src": "/assets/props/items/med7_quiv_11.png",
        "thumbSrc": "/assets/props/thumbs/med7_quiv_11.png",
        "forType": "ranged_weapons"
    },
    {
        "id": "med7_quiv_12",
        "name": "med7_quiv #12",
        "src": "/assets/props/items/med7_quiv_12.png",
        "thumbSrc": "/assets/props/thumbs/med7_quiv_12.png",
        "forType": "ranged_weapons"
    },
    {
        "id": "med7_quiv_13",
        "name": "med7_quiv #13",
        "src": "/assets/props/items/med7_quiv_13.png",
        "thumbSrc": "/assets/props/thumbs/med7_quiv_13.png",
        "forType": "ranged_weapons"
    },
    {
        "id": "med7_quiv_14",
        "name": "med7_quiv #14",
        "src": "/assets/props/items/med7_quiv_14.png",
        "thumbSrc": "/assets/props/thumbs/med7_quiv_14.png",
        "forType": "ranged_weapons"
    },
    {
        "id": "med7_quiv_15",
        "name": "med7_quiv #15",
        "src": "/assets/props/items/med7_quiv_15.png",
        "thumbSrc": "/assets/props/thumbs/med7_quiv_15.png",
        "forType": "ranged_weapons"
    },
    {
        "id": "med7_quiv_16",
        "name": "med7_quiv #16",
        "src": "/assets/props/items/med7_quiv_16.png",
        "thumbSrc": "/assets/props/thumbs/med7_quiv_16.png",
        "forType": "ranged_weapons"
    },
    {
        "id": "med7_sh_rd_01",
        "name": "Khiên Tròn Viking Gỗ Bọc Sắt",
        "src": "/assets/props/items/med7_sh_rd_01.png",
        "thumbSrc": "/assets/props/thumbs/med7_sh_rd_01.png",
        "forType": "shields"
    },
    {
        "id": "med7_sh_rd_02",
        "name": "Khiên Tròn Chiến Binh Viền Đinh",
        "src": "/assets/props/items/med7_sh_rd_02.png",
        "thumbSrc": "/assets/props/thumbs/med7_sh_rd_02.png",
        "forType": "shields"
    },
    {
        "id": "med7_sh_rd_03",
        "name": "Khiên Tròn Khắc Biểu Tượng Sói",
        "src": "/assets/props/items/med7_sh_rd_03.png",
        "thumbSrc": "/assets/props/thumbs/med7_sh_rd_03.png",
        "forType": "shields"
    },
    {
        "id": "med7_sh_rd_04",
        "name": "Khiên Tròn Thép Chống Búa",
        "src": "/assets/props/items/med7_sh_rd_04.png",
        "thumbSrc": "/assets/props/thumbs/med7_sh_rd_04.png",
        "forType": "shields"
    },
    {
        "id": "med7_sh_rd_05",
        "name": "Khiên Tròn Du Mục Bọc Da Bò",
        "src": "/assets/props/items/med7_sh_rd_05.png",
        "thumbSrc": "/assets/props/thumbs/med7_sh_rd_05.png",
        "forType": "shields"
    },
    {
        "id": "med7_sh_rd_06",
        "name": "Khiên Tròn Hộ Vệ Sơn Đỏ",
        "src": "/assets/props/items/med7_sh_rd_06.png",
        "thumbSrc": "/assets/props/thumbs/med7_sh_rd_06.png",
        "forType": "shields"
    },
    {
        "id": "med7_sh_rd_07",
        "name": "Khiên Tròn Sơn Xanh Biển Sâu",
        "src": "/assets/props/items/med7_sh_rd_07.png",
        "thumbSrc": "/assets/props/thumbs/med7_sh_rd_07.png",
        "forType": "shields"
    },
    {
        "id": "med7_sh_rd_08",
        "name": "Khiên Tròn Viền Đồng Chiến Trận",
        "src": "/assets/props/items/med7_sh_rd_08.png",
        "thumbSrc": "/assets/props/thumbs/med7_sh_rd_08.png",
        "forType": "shields"
    },
    {
        "id": "med7_sh_rd_09",
        "name": "Khiên Tròn Thần Khí Runes",
        "src": "/assets/props/items/med7_sh_rd_09.png",
        "thumbSrc": "/assets/props/thumbs/med7_sh_rd_09.png",
        "forType": "shields"
    },
    {
        "id": "med7_sh_rd_10",
        "name": "Khiên Tròn Thợ Săn Cứng Cáp",
        "src": "/assets/props/items/med7_sh_rd_10.png",
        "thumbSrc": "/assets/props/thumbs/med7_sh_rd_10.png",
        "forType": "shields"
    },
    {
        "id": "med7_sh_rd_11",
        "name": "Khiên Tròn Gỗ Sồi Cổ Thụ",
        "src": "/assets/props/items/med7_sh_rd_11.png",
        "thumbSrc": "/assets/props/thumbs/med7_sh_rd_11.png",
        "forType": "shields"
    },
    {
        "id": "med7_sh_rd_12",
        "name": "Khiên Tròn Chiến Hạm Biển Bắc",
        "src": "/assets/props/items/med7_sh_rd_12.png",
        "thumbSrc": "/assets/props/thumbs/med7_sh_rd_12.png",
        "forType": "shields"
    },
    {
        "id": "med7_sh_rd_13",
        "name": "Khiên Tròn Sơn Đen Bí Ẩn",
        "src": "/assets/props/items/med7_sh_rd_13.png",
        "thumbSrc": "/assets/props/thumbs/med7_sh_rd_13.png",
        "forType": "shields"
    },
    {
        "id": "med7_sh_rd_14",
        "name": "med7_sh_rd #14",
        "src": "/assets/props/items/med7_sh_rd_14.png",
        "thumbSrc": "/assets/props/thumbs/med7_sh_rd_14.png",
        "forType": "shields"
    },
    {
        "id": "med7_sh_rd_15",
        "name": "med7_sh_rd #15",
        "src": "/assets/props/items/med7_sh_rd_15.png",
        "thumbSrc": "/assets/props/thumbs/med7_sh_rd_15.png",
        "forType": "shields"
    },
    {
        "id": "med7_sh_rd_16",
        "name": "med7_sh_rd #16",
        "src": "/assets/props/items/med7_sh_rd_16.png",
        "thumbSrc": "/assets/props/thumbs/med7_sh_rd_16.png",
        "forType": "shields"
    },
    {
        "id": "med7_sh_ht_01",
        "name": "Khiên Hiệp Sĩ Gia Huy Sư Tử",
        "src": "/assets/props/items/med7_sh_ht_01.png",
        "thumbSrc": "/assets/props/thumbs/med7_sh_ht_01.png",
        "forType": "shields"
    },
    {
        "id": "med7_sh_ht_02",
        "name": "Khiên Chữ Thập Thập Tự Quân",
        "src": "/assets/props/items/med7_sh_ht_02.png",
        "thumbSrc": "/assets/props/thumbs/med7_sh_ht_02.png",
        "forType": "shields"
    },
    {
        "id": "med7_sh_ht_03",
        "name": "Khiên Tháp Thép Phòng Thủ Thành",
        "src": "/assets/props/items/med7_sh_ht_03.png",
        "thumbSrc": "/assets/props/thumbs/med7_sh_ht_03.png",
        "forType": "shields"
    },
    {
        "id": "med7_sh_ht_04",
        "name": "Khiên Bầu Dục Kỵ Binh Hoàng Gia",
        "src": "/assets/props/items/med7_sh_ht_04.png",
        "thumbSrc": "/assets/props/thumbs/med7_sh_ht_04.png",
        "forType": "shields"
    },
    {
        "id": "med7_sh_ht_05",
        "name": "Khiên Gai Cản Đòn Phản Công",
        "src": "/assets/props/items/med7_sh_ht_05.png",
        "thumbSrc": "/assets/props/thumbs/med7_sh_ht_05.png",
        "forType": "shields"
    },
    {
        "id": "med7_sh_ht_06",
        "name": "Khiên Gia Huy Đại Bàng Tung Cánh",
        "src": "/assets/props/items/med7_sh_ht_06.png",
        "thumbSrc": "/assets/props/thumbs/med7_sh_ht_06.png",
        "forType": "shields"
    },
    {
        "id": "med7_sh_ht_07",
        "name": "Khiên Chữ Thập Đỏ Hộ Quốc",
        "src": "/assets/props/items/med7_sh_ht_07.png",
        "thumbSrc": "/assets/props/thumbs/med7_sh_ht_07.png",
        "forType": "shields"
    },
    {
        "id": "med7_sh_ht_08",
        "name": "Khiên Bầu Dục Viền Vàng Quý Tộc",
        "src": "/assets/props/items/med7_sh_ht_08.png",
        "thumbSrc": "/assets/props/thumbs/med7_sh_ht_08.png",
        "forType": "shields"
    },
    {
        "id": "med7_sh_ht_09",
        "name": "Khiên Thép Khắc Họa Tiết Lâu Đài",
        "src": "/assets/props/items/med7_sh_ht_09.png",
        "thumbSrc": "/assets/props/thumbs/med7_sh_ht_09.png",
        "forType": "shields"
    },
    {
        "id": "med7_sh_ht_10",
        "name": "Khiên Phòng Ngự Bản Rộng Hiệp Sĩ",
        "src": "/assets/props/items/med7_sh_ht_10.png",
        "thumbSrc": "/assets/props/thumbs/med7_sh_ht_10.png",
        "forType": "shields"
    },
    {
        "id": "med7_sh_ht_11",
        "name": "Khiên Gai Thép Chống Kỵ Binh",
        "src": "/assets/props/items/med7_sh_ht_11.png",
        "thumbSrc": "/assets/props/thumbs/med7_sh_ht_11.png",
        "forType": "shields"
    },
    {
        "id": "med7_sh_ht_12",
        "name": "Khiên Tam Giác Kiểu Cổ",
        "src": "/assets/props/items/med7_sh_ht_12.png",
        "thumbSrc": "/assets/props/thumbs/med7_sh_ht_12.png",
        "forType": "shields"
    },
    {
        "id": "med7_sh_ht_13",
        "name": "Khiên Gia Huy Vương Triều",
        "src": "/assets/props/items/med7_sh_ht_13.png",
        "thumbSrc": "/assets/props/thumbs/med7_sh_ht_13.png",
        "forType": "shields"
    },
    {
        "id": "med7_sh_ht_14",
        "name": "Khiên Chiến Sĩ Giữ Thành Kiên Cố",
        "src": "/assets/props/items/med7_sh_ht_14.png",
        "thumbSrc": "/assets/props/thumbs/med7_sh_ht_14.png",
        "forType": "shields"
    },
    {
        "id": "med7_sh_ht_15",
        "name": "Khiên Thép Mạ Bạc Sáng Loáng",
        "src": "/assets/props/items/med7_sh_ht_15.png",
        "thumbSrc": "/assets/props/thumbs/med7_sh_ht_15.png",
        "forType": "shields"
    },
    {
        "id": "med7_sh_ht_16",
        "name": "Khiên Vệ Binh Hoàng Cung",
        "src": "/assets/props/items/med7_sh_ht_16.png",
        "thumbSrc": "/assets/props/thumbs/med7_sh_ht_16.png",
        "forType": "shields"
    },
    {
        "id": "med7_hl_ir_01",
        "name": "Mũ Sắt Hiệp Sĩ Cổ Điển",
        "src": "/assets/props/items/med7_hl_ir_01.png",
        "thumbSrc": "/assets/props/thumbs/med7_hl_ir_01.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_hl_ir_02",
        "name": "Mũ Sắt Kính Ngắm Visor Lật",
        "src": "/assets/props/items/med7_hl_ir_02.png",
        "thumbSrc": "/assets/props/thumbs/med7_hl_ir_02.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_hl_ir_03",
        "name": "Mũ Chiến Binh Spartan Đồng Thau",
        "src": "/assets/props/items/med7_hl_ir_03.png",
        "thumbSrc": "/assets/props/thumbs/med7_hl_ir_03.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_hl_ir_04",
        "name": "Mũ Nón Thép Hở Mặt Lính Canh",
        "src": "/assets/props/items/med7_hl_ir_04.png",
        "thumbSrc": "/assets/props/thumbs/med7_hl_ir_04.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_hl_ir_05",
        "name": "Mũ Sắt Lưới Xích Trùm Đầu",
        "src": "/assets/props/items/med7_hl_ir_05.png",
        "thumbSrc": "/assets/props/thumbs/med7_hl_ir_05.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_hl_ir_06",
        "name": "Mũ Chóp Nhọn Cận Vệ",
        "src": "/assets/props/items/med7_hl_ir_06.png",
        "thumbSrc": "/assets/props/thumbs/med7_hl_ir_06.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_hl_ir_07",
        "name": "Mũ Sắt Viền Vàng Chỉ Huy",
        "src": "/assets/props/items/med7_hl_ir_07.png",
        "thumbSrc": "/assets/props/thumbs/med7_hl_ir_07.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_hl_ir_08",
        "name": "Mũ Visor Xẻ Rãnh Thở",
        "src": "/assets/props/items/med7_hl_ir_08.png",
        "thumbSrc": "/assets/props/thumbs/med7_hl_ir_08.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_hl_ir_09",
        "name": "Mũ Nồi Sắt Binh Nhì",
        "src": "/assets/props/items/med7_hl_ir_09.png",
        "thumbSrc": "/assets/props/thumbs/med7_hl_ir_09.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_hl_ir_10",
        "name": "Mũ Sắt Chiến Tuyến Vết Chém",
        "src": "/assets/props/items/med7_hl_ir_10.png",
        "thumbSrc": "/assets/props/thumbs/med7_hl_ir_10.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_hl_ir_11",
        "name": "Mũ Spartan Viền Bạc",
        "src": "/assets/props/items/med7_hl_ir_11.png",
        "thumbSrc": "/assets/props/thumbs/med7_hl_ir_11.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_hl_ir_12",
        "name": "Mũ Thép Che Tai Kiên Cố",
        "src": "/assets/props/items/med7_hl_ir_12.png",
        "thumbSrc": "/assets/props/thumbs/med7_hl_ir_12.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_hl_ir_13",
        "name": "Mũ Nón Thép Đấu Trường",
        "src": "/assets/props/items/med7_hl_ir_13.png",
        "thumbSrc": "/assets/props/thumbs/med7_hl_ir_13.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_hl_ir_14",
        "name": "Mũ Chiến Binh Cổ Bọc Da",
        "src": "/assets/props/items/med7_hl_ir_14.png",
        "thumbSrc": "/assets/props/thumbs/med7_hl_ir_14.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_hl_ir_15",
        "name": "Mũ Visor Kỵ Binh Nặng",
        "src": "/assets/props/items/med7_hl_ir_15.png",
        "thumbSrc": "/assets/props/thumbs/med7_hl_ir_15.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_hl_ir_16",
        "name": "Mũ Sắt Đúc Liền Khối",
        "src": "/assets/props/items/med7_hl_ir_16.png",
        "thumbSrc": "/assets/props/thumbs/med7_hl_ir_16.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_hl_gt_01",
        "name": "Mũ Đại Hiệp Sĩ Great Helm Chữ Thập",
        "src": "/assets/props/items/med7_hl_gt_01.png",
        "thumbSrc": "/assets/props/thumbs/med7_hl_gt_01.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_hl_gt_02",
        "name": "Mũ Trụ Thập Tự Chinh Cổ Điển",
        "src": "/assets/props/items/med7_hl_gt_02.png",
        "thumbSrc": "/assets/props/thumbs/med7_hl_gt_02.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_hl_gt_03",
        "name": "Mũ Hiệp Sĩ Nạm Đá Quý",
        "src": "/assets/props/items/med7_hl_gt_03.png",
        "thumbSrc": "/assets/props/thumbs/med7_hl_gt_03.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_hl_gt_04",
        "name": "Mũ Great Helm Khe Mắt Mạ Vàng",
        "src": "/assets/props/items/med7_hl_gt_04.png",
        "thumbSrc": "/assets/props/thumbs/med7_hl_gt_04.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_hl_gt_05",
        "name": "Mũ Trụ Sắt Thùng Lính Trọng Giáp",
        "src": "/assets/props/items/med7_hl_gt_05.png",
        "thumbSrc": "/assets/props/thumbs/med7_hl_gt_05.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_hl_gt_06",
        "name": "Mũ Hiệp Sĩ Lông Vũ Thượng Hạng",
        "src": "/assets/props/items/med7_hl_gt_06.png",
        "thumbSrc": "/assets/props/thumbs/med7_hl_gt_06.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_hl_gt_07",
        "name": "Mũ Great Helm Hộ Thân Tuyệt Đối",
        "src": "/assets/props/items/med7_hl_gt_07.png",
        "thumbSrc": "/assets/props/thumbs/med7_hl_gt_07.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_hl_gt_08",
        "name": "Mũ Trụ Khắc Hoa Văn Cung Đình",
        "src": "/assets/props/items/med7_hl_gt_08.png",
        "thumbSrc": "/assets/props/thumbs/med7_hl_gt_08.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_hl_gt_09",
        "name": "Mũ Đại Hiệp Sĩ Chiến Trận",
        "src": "/assets/props/items/med7_hl_gt_09.png",
        "thumbSrc": "/assets/props/thumbs/med7_hl_gt_09.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_hl_gt_10",
        "name": "Mũ Thập Tự Chinh Bọc Đồng",
        "src": "/assets/props/items/med7_hl_gt_10.png",
        "thumbSrc": "/assets/props/thumbs/med7_hl_gt_10.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_hl_gt_11",
        "name": "Mũ Trọng Binh Đầu Đạn",
        "src": "/assets/props/items/med7_hl_gt_11.png",
        "thumbSrc": "/assets/props/thumbs/med7_hl_gt_11.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_hl_gt_12",
        "name": "Mũ Hiệp Sĩ Gai Nhọn Uy Vũ",
        "src": "/assets/props/items/med7_hl_gt_12.png",
        "thumbSrc": "/assets/props/thumbs/med7_hl_gt_12.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_hl_gt_13",
        "name": "Mũ Great Helm Sắt Đen Huyền Bí",
        "src": "/assets/props/items/med7_hl_gt_13.png",
        "thumbSrc": "/assets/props/thumbs/med7_hl_gt_13.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_hl_gt_14",
        "name": "Mũ Trụ Thép Mũi Nhọn",
        "src": "/assets/props/items/med7_hl_gt_14.png",
        "thumbSrc": "/assets/props/thumbs/med7_hl_gt_14.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_hl_gt_15",
        "name": "Mũ Vệ Thần Thành Trì",
        "src": "/assets/props/items/med7_hl_gt_15.png",
        "thumbSrc": "/assets/props/thumbs/med7_hl_gt_15.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_hl_gt_16",
        "name": "Mũ Đại Hiệp Sĩ Trấn Quốc",
        "src": "/assets/props/items/med7_hl_gt_16.png",
        "thumbSrc": "/assets/props/thumbs/med7_hl_gt_16.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_ar_ch_01",
        "name": "Giáp Lưới Xích Thép Kiên Cố",
        "src": "/assets/props/items/med7_ar_ch_01.png",
        "thumbSrc": "/assets/props/thumbs/med7_ar_ch_01.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_ar_ch_02",
        "name": "Áo Giáp Da Thợ Săn Lót Lông",
        "src": "/assets/props/items/med7_ar_ch_02.png",
        "thumbSrc": "/assets/props/thumbs/med7_ar_ch_02.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_ar_ch_03",
        "name": "Giáp Ngực Da Đính Đinh Tán",
        "src": "/assets/props/items/med7_ar_ch_03.png",
        "thumbSrc": "/assets/props/thumbs/med7_ar_ch_03.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_ar_ch_04",
        "name": "Áo Giáp Lưới Hiệp Sĩ Dài Tay",
        "src": "/assets/props/items/med7_ar_ch_04.png",
        "thumbSrc": "/assets/props/thumbs/med7_ar_ch_04.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_ar_ch_05",
        "name": "Giáp Da Du Mục Đệm Mút",
        "src": "/assets/props/items/med7_ar_ch_05.png",
        "thumbSrc": "/assets/props/thumbs/med7_ar_ch_05.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_ar_ch_06",
        "name": "Giáp Ngực Lưới Sắt Nhẹ",
        "src": "/assets/props/items/med7_ar_ch_06.png",
        "thumbSrc": "/assets/props/thumbs/med7_ar_ch_06.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_ar_ch_07",
        "name": "Áo Giáp Da Bò Rừng Chống Tên",
        "src": "/assets/props/items/med7_ar_ch_07.png",
        "thumbSrc": "/assets/props/thumbs/med7_ar_ch_07.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_ar_ch_08",
        "name": "Giáp Xích Thép Bọc Cổ",
        "src": "/assets/props/items/med7_ar_ch_08.png",
        "thumbSrc": "/assets/props/thumbs/med7_ar_ch_08.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_ar_ch_09",
        "name": "Áo Giáp Kỵ Xạ Thoải Mái",
        "src": "/assets/props/items/med7_ar_ch_09.png",
        "thumbSrc": "/assets/props/thumbs/med7_ar_ch_09.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_ar_ch_10",
        "name": "Giáp Da Chiến Binh Sơn Đen",
        "src": "/assets/props/items/med7_ar_ch_10.png",
        "thumbSrc": "/assets/props/thumbs/med7_ar_ch_10.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_ar_ch_11",
        "name": "Giáp Lưới Vảy Cá Thần Tốc",
        "src": "/assets/props/items/med7_ar_ch_11.png",
        "thumbSrc": "/assets/props/thumbs/med7_ar_ch_11.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_ar_ch_12",
        "name": "Giáp Da Thuật Sĩ Đai Đồng",
        "src": "/assets/props/items/med7_ar_ch_12.png",
        "thumbSrc": "/assets/props/thumbs/med7_ar_ch_12.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_ar_ch_13",
        "name": "Giáp Lưới Kháng Chém",
        "src": "/assets/props/items/med7_ar_ch_13.png",
        "thumbSrc": "/assets/props/thumbs/med7_ar_ch_13.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_ar_ch_14",
        "name": "med7_ar_ch #14",
        "src": "/assets/props/items/med7_ar_ch_14.png",
        "thumbSrc": "/assets/props/thumbs/med7_ar_ch_14.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_ar_ch_15",
        "name": "med7_ar_ch #15",
        "src": "/assets/props/items/med7_ar_ch_15.png",
        "thumbSrc": "/assets/props/thumbs/med7_ar_ch_15.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_ar_ch_16",
        "name": "med7_ar_ch #16",
        "src": "/assets/props/items/med7_ar_ch_16.png",
        "thumbSrc": "/assets/props/thumbs/med7_ar_ch_16.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_ar_ch_17",
        "name": "med7_ar_ch #17",
        "src": "/assets/props/items/med7_ar_ch_17.png",
        "thumbSrc": "/assets/props/thumbs/med7_ar_ch_17.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_ar_pl_01",
        "name": "Giáp Tấm Thép Toàn Thân Hiệp Sĩ",
        "src": "/assets/props/items/med7_ar_pl_01.png",
        "thumbSrc": "/assets/props/thumbs/med7_ar_pl_01.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_ar_pl_02",
        "name": "Giáp Ngực Mạ Bạc Hoàng Gia",
        "src": "/assets/props/items/med7_ar_pl_02.png",
        "thumbSrc": "/assets/props/thumbs/med7_ar_pl_02.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_ar_pl_03",
        "name": "Giáp Tấm Thép Nặng Chiến Binh",
        "src": "/assets/props/items/med7_ar_pl_03.png",
        "thumbSrc": "/assets/props/thumbs/med7_ar_pl_03.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_ar_pl_04",
        "name": "Giáp Ngực Khắc Phù Điêu Sư Tử",
        "src": "/assets/props/items/med7_ar_pl_04.png",
        "thumbSrc": "/assets/props/thumbs/med7_ar_pl_04.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_ar_pl_05",
        "name": "Giáp Tấm Hiệp Sĩ Bọc Khớp Đồng",
        "src": "/assets/props/items/med7_ar_pl_05.png",
        "thumbSrc": "/assets/props/thumbs/med7_ar_pl_05.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_ar_pl_06",
        "name": "Giáp Ngực Thập Tự Quân Sắt",
        "src": "/assets/props/items/med7_ar_pl_06.png",
        "thumbSrc": "/assets/props/thumbs/med7_ar_pl_06.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_ar_pl_07",
        "name": "Giáp Tấm Cung Đình Mạ Vàng",
        "src": "/assets/props/items/med7_ar_pl_07.png",
        "thumbSrc": "/assets/props/thumbs/med7_ar_pl_07.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_ar_pl_08",
        "name": "Giáp Ngực Chống Đạn Bắn Nỏ",
        "src": "/assets/props/items/med7_ar_pl_08.png",
        "thumbSrc": "/assets/props/thumbs/med7_ar_pl_08.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_ar_pl_09",
        "name": "Giáp Tấm Đen Kỵ Binh Hắc Ám",
        "src": "/assets/props/items/med7_ar_pl_09.png",
        "thumbSrc": "/assets/props/thumbs/med7_ar_pl_09.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_ar_pl_10",
        "name": "Giáp Ngực Đại Tướng Quân",
        "src": "/assets/props/items/med7_ar_pl_10.png",
        "thumbSrc": "/assets/props/thumbs/med7_ar_pl_10.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_ar_pl_11",
        "name": "Giáp Tấm Khối Rèn Thủ Công",
        "src": "/assets/props/items/med7_ar_pl_11.png",
        "thumbSrc": "/assets/props/thumbs/med7_ar_pl_11.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_ar_pl_12",
        "name": "Giáp Ngực Hiệp Sĩ Bão Táp",
        "src": "/assets/props/items/med7_ar_pl_12.png",
        "thumbSrc": "/assets/props/thumbs/med7_ar_pl_12.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_ar_pl_13",
        "name": "Giáp Tấm Thánh Hiệp Sĩ Trắng",
        "src": "/assets/props/items/med7_ar_pl_13.png",
        "thumbSrc": "/assets/props/thumbs/med7_ar_pl_13.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_ar_pl_14",
        "name": "Giáp Ngực Thép Cường Lực",
        "src": "/assets/props/items/med7_ar_pl_14.png",
        "thumbSrc": "/assets/props/thumbs/med7_ar_pl_14.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_ar_pl_15",
        "name": "Bộ Giáp Tấm Thần Hộ Mệnh",
        "src": "/assets/props/items/med7_ar_pl_15.png",
        "thumbSrc": "/assets/props/thumbs/med7_ar_pl_15.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_ar_pl_16",
        "name": "med7_ar_pl #16",
        "src": "/assets/props/items/med7_ar_pl_16.png",
        "thumbSrc": "/assets/props/thumbs/med7_ar_pl_16.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_gt_ir_01",
        "name": "Găng Tay Sắt Khớp Động Hiệp Sĩ",
        "src": "/assets/props/items/med7_gt_ir_01.png",
        "thumbSrc": "/assets/props/thumbs/med7_gt_ir_01.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_gt_ir_02",
        "name": "Găng Da Chiến Binh Bọc Mu Thép",
        "src": "/assets/props/items/med7_gt_ir_02.png",
        "thumbSrc": "/assets/props/thumbs/med7_gt_ir_02.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_gt_ir_03",
        "name": "Găng Tay Thép Gai Đấm Nặng",
        "src": "/assets/props/items/med7_gt_ir_03.png",
        "thumbSrc": "/assets/props/thumbs/med7_gt_ir_03.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_gt_ir_04",
        "name": "Găng Sắt Khắc Hoa Văn Quý Tộc",
        "src": "/assets/props/items/med7_gt_ir_04.png",
        "thumbSrc": "/assets/props/thumbs/med7_gt_ir_04.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_gt_ir_05",
        "name": "Găng Tay Giáp Lưới Linh Hoạt",
        "src": "/assets/props/items/med7_gt_ir_05.png",
        "thumbSrc": "/assets/props/thumbs/med7_gt_ir_05.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_gt_ir_06",
        "name": "Găng Da Dày Kéo Cung Săn",
        "src": "/assets/props/items/med7_gt_ir_06.png",
        "thumbSrc": "/assets/props/thumbs/med7_gt_ir_06.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_gt_ir_07",
        "name": "Găng Tay Thép Dài Tay Cận Vệ",
        "src": "/assets/props/items/med7_gt_ir_07.png",
        "thumbSrc": "/assets/props/thumbs/med7_gt_ir_07.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_gt_ir_08",
        "name": "Găng Sắt Đúc Nguyên Khối",
        "src": "/assets/props/items/med7_gt_ir_08.png",
        "thumbSrc": "/assets/props/thumbs/med7_gt_ir_08.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_gt_ir_09",
        "name": "Găng Tay Da Bò Viền Đồng",
        "src": "/assets/props/items/med7_gt_ir_09.png",
        "thumbSrc": "/assets/props/thumbs/med7_gt_ir_09.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_gt_ir_10",
        "name": "Găng Thép Cầm Kiếm Chắc Tay",
        "src": "/assets/props/items/med7_gt_ir_10.png",
        "thumbSrc": "/assets/props/thumbs/med7_gt_ir_10.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_gt_ir_11",
        "name": "Găng Tay Lính Bắn Nỏ Da Sần",
        "src": "/assets/props/items/med7_gt_ir_11.png",
        "thumbSrc": "/assets/props/thumbs/med7_gt_ir_11.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_gt_ir_12",
        "name": "Găng Sắt Mạ Bạc Hoàng Tộc",
        "src": "/assets/props/items/med7_gt_ir_12.png",
        "thumbSrc": "/assets/props/thumbs/med7_gt_ir_12.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_gt_ir_13",
        "name": "Găng Tay Hiệp Sĩ Gai Bọc Ngón",
        "src": "/assets/props/items/med7_gt_ir_13.png",
        "thumbSrc": "/assets/props/thumbs/med7_gt_ir_13.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_gt_ir_14",
        "name": "Găng Tay Giáp Sắt Đen",
        "src": "/assets/props/items/med7_gt_ir_14.png",
        "thumbSrc": "/assets/props/thumbs/med7_gt_ir_14.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_gt_ir_15",
        "name": "Găng Da Bọc Thép Cổ Tay",
        "src": "/assets/props/items/med7_gt_ir_15.png",
        "thumbSrc": "/assets/props/thumbs/med7_gt_ir_15.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_gt_ir_16",
        "name": "Găng Thép Đấu Kiếm",
        "src": "/assets/props/items/med7_gt_ir_16.png",
        "thumbSrc": "/assets/props/thumbs/med7_gt_ir_16.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_gt_ir_17",
        "name": "Găng Vệ Binh",
        "src": "/assets/props/items/med7_gt_ir_17.png",
        "thumbSrc": "/assets/props/thumbs/med7_gt_ir_17.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_gt_ir_18",
        "name": "med7_gt_ir #18",
        "src": "/assets/props/items/med7_gt_ir_18.png",
        "thumbSrc": "/assets/props/thumbs/med7_gt_ir_18.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_gt_ir_19",
        "name": "med7_gt_ir #19",
        "src": "/assets/props/items/med7_gt_ir_19.png",
        "thumbSrc": "/assets/props/thumbs/med7_gt_ir_19.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_bt_ir_01",
        "name": "Ủng Sắt Hộ Vệ Hiệp Sĩ Toàn Thân",
        "src": "/assets/props/items/med7_bt_ir_01.png",
        "thumbSrc": "/assets/props/thumbs/med7_bt_ir_01.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_bt_ir_02",
        "name": "Giày Da Chiến Binh Bọc Mũi Thép",
        "src": "/assets/props/items/med7_bt_ir_02.png",
        "thumbSrc": "/assets/props/thumbs/med7_bt_ir_02.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_bt_ir_03",
        "name": "Ủng Thép Khớp Động Đi Tuyết",
        "src": "/assets/props/items/med7_bt_ir_03.png",
        "thumbSrc": "/assets/props/thumbs/med7_bt_ir_03.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_bt_ir_04",
        "name": "Giày Da Du Mục Cổ Cao Chống Gai",
        "src": "/assets/props/items/med7_bt_ir_04.png",
        "thumbSrc": "/assets/props/thumbs/med7_bt_ir_04.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_bt_ir_05",
        "name": "Ủng Sắt Kỵ Binh Cựa Ngựa Đồng",
        "src": "/assets/props/items/med7_bt_ir_05.png",
        "thumbSrc": "/assets/props/thumbs/med7_bt_ir_05.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_bt_ir_06",
        "name": "Giày Bốt Da Thợ Săn Rừng",
        "src": "/assets/props/items/med7_bt_ir_06.png",
        "thumbSrc": "/assets/props/thumbs/med7_bt_ir_06.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_bt_ir_07",
        "name": "Ủng Thép Nặng Trọng Binh Hầm Mỏ",
        "src": "/assets/props/items/med7_bt_ir_07.png",
        "thumbSrc": "/assets/props/thumbs/med7_bt_ir_07.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_bt_ir_08",
        "name": "Giày Chiến Đấu Lót Lông Ấm",
        "src": "/assets/props/items/med7_bt_ir_08.png",
        "thumbSrc": "/assets/props/thumbs/med7_bt_ir_08.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_bt_ir_09",
        "name": "Ủng Sắt Khắc Chữ Thập",
        "src": "/assets/props/items/med7_bt_ir_09.png",
        "thumbSrc": "/assets/props/thumbs/med7_bt_ir_09.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_bt_ir_10",
        "name": "Giày Da Bò Đinh Tán Chống Trượt",
        "src": "/assets/props/items/med7_bt_ir_10.png",
        "thumbSrc": "/assets/props/thumbs/med7_bt_ir_10.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_bt_ir_11",
        "name": "Ủng Thép Mạ Vàng Cung Đình",
        "src": "/assets/props/items/med7_bt_ir_11.png",
        "thumbSrc": "/assets/props/thumbs/med7_bt_ir_11.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_bt_ir_12",
        "name": "Giày Bốt Da Binh Nhì Bền Bỉ",
        "src": "/assets/props/items/med7_bt_ir_12.png",
        "thumbSrc": "/assets/props/thumbs/med7_bt_ir_12.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_bt_ir_13",
        "name": "Ủng Sắt Đen Hiệp Sĩ Hắc Ám",
        "src": "/assets/props/items/med7_bt_ir_13.png",
        "thumbSrc": "/assets/props/thumbs/med7_bt_ir_13.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_bt_ir_14",
        "name": "Giày Da Cao Cổ Kỵ Sĩ",
        "src": "/assets/props/items/med7_bt_ir_14.png",
        "thumbSrc": "/assets/props/thumbs/med7_bt_ir_14.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_bt_ir_15",
        "name": "Ủng Thép Hộ Vệ Cổ Chân",
        "src": "/assets/props/items/med7_bt_ir_15.png",
        "thumbSrc": "/assets/props/thumbs/med7_bt_ir_15.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_bt_ir_16",
        "name": "Giày Chiến Lính Gác",
        "src": "/assets/props/items/med7_bt_ir_16.png",
        "thumbSrc": "/assets/props/thumbs/med7_bt_ir_16.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med7_bt_ir_17",
        "name": "Ủng Giáp Binh Sĩ",
        "src": "/assets/props/items/med7_bt_ir_17.png",
        "thumbSrc": "/assets/props/thumbs/med7_bt_ir_17.png",
        "forType": "armor_helmets"
    },
    {
        "id": "med5_staff_01",
        "name": "Quyền Trượng Ma Pháp Tinh Cầu Lam",
        "src": "/assets/props/items/med5_staff_01.png",
        "thumbSrc": "/assets/props/thumbs/med5_staff_01.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med5_staff_02",
        "name": "Trượng Thần Rừng Gỗ Sồi Đầu Rồng",
        "src": "/assets/props/items/med5_staff_02.png",
        "thumbSrc": "/assets/props/thumbs/med5_staff_02.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med5_staff_03",
        "name": "Gậy Phép Thuật Pha Lê Hồng Tím",
        "src": "/assets/props/items/med5_staff_03.png",
        "thumbSrc": "/assets/props/thumbs/med5_staff_03.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med5_staff_04",
        "name": "Quyền Trượng Sấm Sét Hoàng Kim",
        "src": "/assets/props/items/med5_staff_04.png",
        "thumbSrc": "/assets/props/thumbs/med5_staff_04.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med5_staff_05",
        "name": "Trượng Pháp Sư Cực Bắc Băng Tinh",
        "src": "/assets/props/items/med5_staff_05.png",
        "thumbSrc": "/assets/props/thumbs/med5_staff_05.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med5_staff_06",
        "name": "Gậy Phù Thủy Cổ Thụ Nanh Sói",
        "src": "/assets/props/items/med5_staff_06.png",
        "thumbSrc": "/assets/props/thumbs/med5_staff_06.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med5_staff_07",
        "name": "Trượng Ma Pháp Hư Không Nguyệt Tộc",
        "src": "/assets/props/items/med5_staff_07.png",
        "thumbSrc": "/assets/props/thumbs/med5_staff_07.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med5_staff_08",
        "name": "Quyền Trượng Hỏa Diệm Rực Cháy",
        "src": "/assets/props/items/med5_staff_08.png",
        "thumbSrc": "/assets/props/thumbs/med5_staff_08.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med5_staff_09",
        "name": "Trượng Thánh Binh Thập Tự Bạc",
        "src": "/assets/props/items/med5_staff_09.png",
        "thumbSrc": "/assets/props/thumbs/med5_staff_09.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med5_staff_10",
        "name": "Đũa Phép Thuật Gỗ Mun Thần Kỳ",
        "src": "/assets/props/items/med5_staff_10.png",
        "thumbSrc": "/assets/props/thumbs/med5_staff_10.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med5_staff_11",
        "name": "Trượng Tiên Tộc Ngọc Phỉ Thúy",
        "src": "/assets/props/items/med5_staff_11.png",
        "thumbSrc": "/assets/props/thumbs/med5_staff_11.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med5_staff_12",
        "name": "Gậy Thần Hộ Mệnh Cổ Đại",
        "src": "/assets/props/items/med5_staff_12.png",
        "thumbSrc": "/assets/props/thumbs/med5_staff_12.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med5_staff_13",
        "name": "med5_staff #13",
        "src": "/assets/props/items/med5_staff_13.png",
        "thumbSrc": "/assets/props/thumbs/med5_staff_13.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med5_staff_14",
        "name": "med5_staff #14",
        "src": "/assets/props/items/med5_staff_14.png",
        "thumbSrc": "/assets/props/thumbs/med5_staff_14.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med5_staff_15",
        "name": "med5_staff #15",
        "src": "/assets/props/items/med5_staff_15.png",
        "thumbSrc": "/assets/props/thumbs/med5_staff_15.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med5_staff_16",
        "name": "med5_staff #16",
        "src": "/assets/props/items/med5_staff_16.png",
        "thumbSrc": "/assets/props/thumbs/med5_staff_16.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med5_wand_01",
        "name": "Đũa Phép Thủy Tinh Khảm Vàng",
        "src": "/assets/props/items/med5_wand_01.png",
        "thumbSrc": "/assets/props/thumbs/med5_wand_01.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med5_wand_02",
        "name": "Đũa Phép Gỗ Thần Đầu Hồng Ngọc",
        "src": "/assets/props/items/med5_wand_02.png",
        "thumbSrc": "/assets/props/thumbs/med5_wand_02.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med5_wand_03",
        "name": "Trượng Ngắn Pháp Sư Tập Sự",
        "src": "/assets/props/items/med5_wand_03.png",
        "thumbSrc": "/assets/props/thumbs/med5_wand_03.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med5_wand_04",
        "name": "Đũa Phép Phù Thủy Độc Dược",
        "src": "/assets/props/items/med5_wand_04.png",
        "thumbSrc": "/assets/props/thumbs/med5_wand_04.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med5_wand_05",
        "name": "Đũa Thần Băng Giá Tuyết Tinh",
        "src": "/assets/props/items/med5_wand_05.png",
        "thumbSrc": "/assets/props/thumbs/med5_wand_05.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med5_wand_06",
        "name": "Đũa Phép Hắc Thuật Đầu Rắn",
        "src": "/assets/props/items/med5_wand_06.png",
        "thumbSrc": "/assets/props/thumbs/med5_wand_06.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med5_wand_07",
        "name": "Đũa Thần Ánh Sáng Thánh Linh",
        "src": "/assets/props/items/med5_wand_07.png",
        "thumbSrc": "/assets/props/thumbs/med5_wand_07.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med5_wand_08",
        "name": "Trượng Ngắn Pha Lê Xanh Thẳm",
        "src": "/assets/props/items/med5_wand_08.png",
        "thumbSrc": "/assets/props/thumbs/med5_wand_08.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med5_wand_09",
        "name": "Đũa Phép Triệu Hồi Linh Hồn",
        "src": "/assets/props/items/med5_wand_09.png",
        "thumbSrc": "/assets/props/thumbs/med5_wand_09.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med5_wand_10",
        "name": "Đũa Thần Hoàng Kim Cổ Điển",
        "src": "/assets/props/items/med5_wand_10.png",
        "thumbSrc": "/assets/props/thumbs/med5_wand_10.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med5_wand_11",
        "name": "Trượng Ngắn Hỏa Long Cực Nóng",
        "src": "/assets/props/items/med5_wand_11.png",
        "thumbSrc": "/assets/props/thumbs/med5_wand_11.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med5_wand_12",
        "name": "Đũa Phép Sấm Chớp Tinh Linh",
        "src": "/assets/props/items/med5_wand_12.png",
        "thumbSrc": "/assets/props/thumbs/med5_wand_12.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med5_wand_13",
        "name": "med5_wand #13",
        "src": "/assets/props/items/med5_wand_13.png",
        "thumbSrc": "/assets/props/thumbs/med5_wand_13.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med5_wand_14",
        "name": "med5_wand #14",
        "src": "/assets/props/items/med5_wand_14.png",
        "thumbSrc": "/assets/props/thumbs/med5_wand_14.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med5_wand_15",
        "name": "med5_wand #15",
        "src": "/assets/props/items/med5_wand_15.png",
        "thumbSrc": "/assets/props/thumbs/med5_wand_15.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med5_wand_16",
        "name": "med5_wand #16",
        "src": "/assets/props/items/med5_wand_16.png",
        "thumbSrc": "/assets/props/thumbs/med5_wand_16.png",
        "forType": "melee_weapons"
    },
    {
        "id": "med5_tool_01",
        "name": "Đe Rèn Sắt Nặng Của Thợ Rèn",
        "src": "/assets/props/items/med5_tool_01.png",
        "thumbSrc": "/assets/props/thumbs/med5_tool_01.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med5_tool_02",
        "name": "Búa Đập Sắt Cán Gỗ Chắc Nịch",
        "src": "/assets/props/items/med5_tool_02.png",
        "thumbSrc": "/assets/props/thumbs/med5_tool_02.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med5_tool_03",
        "name": "Kìm Kẹp Phôi Sắt Nóng Đỏ",
        "src": "/assets/props/items/med5_tool_03.png",
        "thumbSrc": "/assets/props/thumbs/med5_tool_03.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med5_tool_04",
        "name": "Cái Cưa Gỗ Răng Thép Cầm Tay",
        "src": "/assets/props/items/med5_tool_04.png",
        "thumbSrc": "/assets/props/thumbs/med5_tool_04.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med5_tool_05",
        "name": "Đục Khắc Đá & Thép Tôi Nhọn",
        "src": "/assets/props/items/med5_tool_05.png",
        "thumbSrc": "/assets/props/thumbs/med5_tool_05.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med5_tool_06",
        "name": "Kìm Cắt Kim Loại Dã Ngoại",
        "src": "/assets/props/items/med5_tool_06.png",
        "thumbSrc": "/assets/props/thumbs/med5_tool_06.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med5_tool_07",
        "name": "Búa Nhỏ Gõ Khớp Giáp Chi Tiết",
        "src": "/assets/props/items/med5_tool_07.png",
        "thumbSrc": "/assets/props/thumbs/med5_tool_07.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med5_tool_08",
        "name": "Cái Dũa Thép Mài Dao Kiếm",
        "src": "/assets/props/items/med5_tool_08.png",
        "thumbSrc": "/assets/props/thumbs/med5_tool_08.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med5_tool_09",
        "name": "Mỏ Lết Cổ Khóa Ốc Cơ Quan",
        "src": "/assets/props/items/med5_tool_09.png",
        "thumbSrc": "/assets/props/thumbs/med5_tool_09.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med5_tool_10",
        "name": "Dụng Cụ Thổi Lửa Bễ Rèn Lò",
        "src": "/assets/props/items/med5_tool_10.png",
        "thumbSrc": "/assets/props/thumbs/med5_tool_10.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med5_tool_11",
        "name": "Cái Cào Than Lò Nung Cực Nóng",
        "src": "/assets/props/items/med5_tool_11.png",
        "thumbSrc": "/assets/props/thumbs/med5_tool_11.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med5_tool_12",
        "name": "Búa Đập Đinh Tán Giáp Sắt",
        "src": "/assets/props/items/med5_tool_12.png",
        "thumbSrc": "/assets/props/thumbs/med5_tool_12.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med5_tool_13",
        "name": "med5_tool #13",
        "src": "/assets/props/items/med5_tool_13.png",
        "thumbSrc": "/assets/props/thumbs/med5_tool_13.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med5_tool_14",
        "name": "med5_tool #14",
        "src": "/assets/props/items/med5_tool_14.png",
        "thumbSrc": "/assets/props/thumbs/med5_tool_14.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med5_tool_15",
        "name": "med5_tool #15",
        "src": "/assets/props/items/med5_tool_15.png",
        "thumbSrc": "/assets/props/thumbs/med5_tool_15.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med5_tool_16",
        "name": "med5_tool #16",
        "src": "/assets/props/items/med5_tool_16.png",
        "thumbSrc": "/assets/props/thumbs/med5_tool_16.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med5_craft_01",
        "name": "Búa Rèn Nhọn Đầu Đột Thép",
        "src": "/assets/props/items/med5_craft_01.png",
        "thumbSrc": "/assets/props/thumbs/med5_craft_01.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med5_craft_02",
        "name": "Kìm Bẻ Uốn Dây Đồng Thau",
        "src": "/assets/props/items/med5_craft_02.png",
        "thumbSrc": "/assets/props/thumbs/med5_craft_02.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med5_craft_03",
        "name": "Dao Cắt Da Thuộc Bản Rộng",
        "src": "/assets/props/items/med5_craft_03.png",
        "thumbSrc": "/assets/props/thumbs/med5_craft_03.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med5_craft_04",
        "name": "Dụng Cụ Đục Lỗ Giáp Da Sần",
        "src": "/assets/props/items/med5_craft_04.png",
        "thumbSrc": "/assets/props/thumbs/med5_craft_04.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med5_craft_05",
        "name": "Cưa Lọng Cắt Gỗ Tinh Xảo",
        "src": "/assets/props/items/med5_craft_05.png",
        "thumbSrc": "/assets/props/thumbs/med5_craft_05.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med5_craft_06",
        "name": "Búa Rìu Thợ Rèn Hai Đầu",
        "src": "/assets/props/items/med5_craft_06.png",
        "thumbSrc": "/assets/props/thumbs/med5_craft_06.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med5_craft_07",
        "name": "Cái Bay Trét Vữa Xây Thành",
        "src": "/assets/props/items/med5_craft_07.png",
        "thumbSrc": "/assets/props/thumbs/med5_craft_07.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med5_craft_08",
        "name": "Dụng Cụ Mài Đá Quý Giác Cắt",
        "src": "/assets/props/items/med5_craft_08.png",
        "thumbSrc": "/assets/props/thumbs/med5_craft_08.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med5_craft_09",
        "name": "Thước Góc Đo Kim Loại Thợ Rèn",
        "src": "/assets/props/items/med5_craft_09.png",
        "thumbSrc": "/assets/props/thumbs/med5_craft_09.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med5_craft_10",
        "name": "Chày Giã Quặng Hầm Mỏ",
        "src": "/assets/props/items/med5_craft_10.png",
        "thumbSrc": "/assets/props/thumbs/med5_craft_10.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med5_craft_11",
        "name": "Kìm Móc Khóa Kim Loại Nóng",
        "src": "/assets/props/items/med5_craft_11.png",
        "thumbSrc": "/assets/props/thumbs/med5_craft_11.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med5_craft_12",
        "name": "Cái Đục Gỗ Khắc Phù Điêu",
        "src": "/assets/props/items/med5_craft_12.png",
        "thumbSrc": "/assets/props/thumbs/med5_craft_12.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med5_craft_13",
        "name": "med5_craft #13",
        "src": "/assets/props/items/med5_craft_13.png",
        "thumbSrc": "/assets/props/thumbs/med5_craft_13.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med5_craft_14",
        "name": "med5_craft #14",
        "src": "/assets/props/items/med5_craft_14.png",
        "thumbSrc": "/assets/props/thumbs/med5_craft_14.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med5_craft_15",
        "name": "med5_craft #15",
        "src": "/assets/props/items/med5_craft_15.png",
        "thumbSrc": "/assets/props/thumbs/med5_craft_15.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med5_craft_16",
        "name": "med5_craft #16",
        "src": "/assets/props/items/med5_craft_16.png",
        "thumbSrc": "/assets/props/thumbs/med5_craft_16.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med5_craft_17",
        "name": "med5_craft #17",
        "src": "/assets/props/items/med5_craft_17.png",
        "thumbSrc": "/assets/props/thumbs/med5_craft_17.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med5_pot_rd_01",
        "name": "Bình Sinh Mệnh Giọt Máu Đỏ",
        "src": "/assets/props/items/med5_pot_rd_01.png",
        "thumbSrc": "/assets/props/thumbs/med5_pot_rd_01.png",
        "forType": "potions"
    },
    {
        "id": "med5_pot_rd_02",
        "name": "Bình Mana Năng Lượng Lam Tươi",
        "src": "/assets/props/items/med5_pot_rd_02.png",
        "thumbSrc": "/assets/props/thumbs/med5_pot_rd_02.png",
        "forType": "potions"
    },
    {
        "id": "med5_pot_rd_03",
        "name": "Lọ Thuốc Độc Nhện Lục Bảo",
        "src": "/assets/props/items/med5_pot_rd_03.png",
        "thumbSrc": "/assets/props/thumbs/med5_pot_rd_03.png",
        "forType": "potions"
    },
    {
        "id": "med5_pot_rd_04",
        "name": "Tiên Dược Hoàng Kim Phục Hồi",
        "src": "/assets/props/items/med5_pot_rd_04.png",
        "thumbSrc": "/assets/props/thumbs/med5_pot_rd_04.png",
        "forType": "potions"
    },
    {
        "id": "med5_pot_rd_05",
        "name": "Bình Dược Tím Tăng Tốc Độ",
        "src": "/assets/props/items/med5_pot_rd_05.png",
        "thumbSrc": "/assets/props/thumbs/med5_pot_rd_05.png",
        "forType": "potions"
    },
    {
        "id": "med5_pot_rd_06",
        "name": "Bình Thí Nghiệm Đáy Cầu Có Quai",
        "src": "/assets/props/items/med5_pot_rd_06.png",
        "thumbSrc": "/assets/props/thumbs/med5_pot_rd_06.png",
        "forType": "potions"
    },
    {
        "id": "med5_pot_rd_07",
        "name": "Ống Nghiệm Giả Kim Sủi Bọt Khí",
        "src": "/assets/props/items/med5_pot_rd_07.png",
        "thumbSrc": "/assets/props/thumbs/med5_pot_rd_07.png",
        "forType": "potions"
    },
    {
        "id": "med5_pot_rd_08",
        "name": "Lọ Độc Dược Đầu Lâu Chết Chóc",
        "src": "/assets/props/items/med5_pot_rd_08.png",
        "thumbSrc": "/assets/props/thumbs/med5_pot_rd_08.png",
        "forType": "potions"
    },
    {
        "id": "med5_pot_rd_09",
        "name": "Bình Tinh Chất Thảo Mộc Rừng",
        "src": "/assets/props/items/med5_pot_rd_09.png",
        "thumbSrc": "/assets/props/thumbs/med5_pot_rd_09.png",
        "forType": "potions"
    },
    {
        "id": "med5_pot_rd_10",
        "name": "Lọ Năng Lượng Tinh Thể Sáng",
        "src": "/assets/props/items/med5_pot_rd_10.png",
        "thumbSrc": "/assets/props/thumbs/med5_pot_rd_10.png",
        "forType": "potions"
    },
    {
        "id": "med5_pot_rd_11",
        "name": "Bình Kháng Lửa Hỏa Tinh Dược",
        "src": "/assets/props/items/med5_pot_rd_11.png",
        "thumbSrc": "/assets/props/thumbs/med5_pot_rd_11.png",
        "forType": "potions"
    },
    {
        "id": "med5_pot_rd_12",
        "name": "Bình Kháng Băng Hàn Băng Dược",
        "src": "/assets/props/items/med5_pot_rd_12.png",
        "thumbSrc": "/assets/props/thumbs/med5_pot_rd_12.png",
        "forType": "potions"
    },
    {
        "id": "med5_pot_rd_13",
        "name": "med5_pot_rd #13",
        "src": "/assets/props/items/med5_pot_rd_13.png",
        "thumbSrc": "/assets/props/thumbs/med5_pot_rd_13.png",
        "forType": "potions"
    },
    {
        "id": "med5_pot_rd_14",
        "name": "med5_pot_rd #14",
        "src": "/assets/props/items/med5_pot_rd_14.png",
        "thumbSrc": "/assets/props/thumbs/med5_pot_rd_14.png",
        "forType": "potions"
    },
    {
        "id": "med5_pot_rd_15",
        "name": "med5_pot_rd #15",
        "src": "/assets/props/items/med5_pot_rd_15.png",
        "thumbSrc": "/assets/props/thumbs/med5_pot_rd_15.png",
        "forType": "potions"
    },
    {
        "id": "med5_pot_rd_16",
        "name": "med5_pot_rd #16",
        "src": "/assets/props/items/med5_pot_rd_16.png",
        "thumbSrc": "/assets/props/thumbs/med5_pot_rd_16.png",
        "forType": "potions"
    },
    {
        "id": "med5_pot_rd_17",
        "name": "med5_pot_rd #17",
        "src": "/assets/props/items/med5_pot_rd_17.png",
        "thumbSrc": "/assets/props/thumbs/med5_pot_rd_17.png",
        "forType": "potions"
    },
    {
        "id": "med5_pot_rd_18",
        "name": "med5_pot_rd #18",
        "src": "/assets/props/items/med5_pot_rd_18.png",
        "thumbSrc": "/assets/props/thumbs/med5_pot_rd_18.png",
        "forType": "potions"
    },
    {
        "id": "med5_pot_el_01",
        "name": "Bình Dược Thủy Tinh Giác Cắt",
        "src": "/assets/props/items/med5_pot_el_01.png",
        "thumbSrc": "/assets/props/thumbs/med5_pot_el_01.png",
        "forType": "potions"
    },
    {
        "id": "med5_pot_el_02",
        "name": "Lọ Thuốc Tàng Hình Khói Lam",
        "src": "/assets/props/items/med5_pot_el_02.png",
        "thumbSrc": "/assets/props/thumbs/med5_pot_el_02.png",
        "forType": "potions"
    },
    {
        "id": "med5_pot_el_03",
        "name": "Bình Tăng Lực Cuồng Nộ Đỏ Ngầu",
        "src": "/assets/props/items/med5_pot_el_03.png",
        "thumbSrc": "/assets/props/thumbs/med5_pot_el_03.png",
        "forType": "potions"
    },
    {
        "id": "med5_pot_el_04",
        "name": "Lọ Thuốc Giải Độc Thảo Dược",
        "src": "/assets/props/items/med5_pot_el_04.png",
        "thumbSrc": "/assets/props/thumbs/med5_pot_el_04.png",
        "forType": "potions"
    },
    {
        "id": "med5_pot_el_05",
        "name": "Bình Thể Lực Bền Bỉ Màu Cam",
        "src": "/assets/props/items/med5_pot_el_05.png",
        "thumbSrc": "/assets/props/thumbs/med5_pot_el_05.png",
        "forType": "potions"
    },
    {
        "id": "med5_pot_el_06",
        "name": "Lọ Dầu Bôi Vũ Khí Tê Liệt",
        "src": "/assets/props/items/med5_pot_el_06.png",
        "thumbSrc": "/assets/props/thumbs/med5_pot_el_06.png",
        "forType": "potions"
    },
    {
        "id": "med5_pot_el_07",
        "name": "Bình Thuốc Phát Sáng Hang Tối",
        "src": "/assets/props/items/med5_pot_el_07.png",
        "thumbSrc": "/assets/props/thumbs/med5_pot_el_07.png",
        "forType": "potions"
    },
    {
        "id": "med5_pot_el_08",
        "name": "Lọ Thuốc Hồi Phục Linh Hồn",
        "src": "/assets/props/items/med5_pot_el_08.png",
        "thumbSrc": "/assets/props/thumbs/med5_pot_el_08.png",
        "forType": "potions"
    },
    {
        "id": "med5_pot_el_09",
        "name": "Bình Dược Giả Kim Thuần Khiết",
        "src": "/assets/props/items/med5_pot_el_09.png",
        "thumbSrc": "/assets/props/thumbs/med5_pot_el_09.png",
        "forType": "potions"
    },
    {
        "id": "med5_pot_el_10",
        "name": "Lọ Nước Thánh Ban Phước",
        "src": "/assets/props/items/med5_pot_el_10.png",
        "thumbSrc": "/assets/props/thumbs/med5_pot_el_10.png",
        "forType": "potions"
    },
    {
        "id": "med5_pot_el_11",
        "name": "Bình Tiên Tộc Tinh Tú Trường Sinh",
        "src": "/assets/props/items/med5_pot_el_11.png",
        "thumbSrc": "/assets/props/thumbs/med5_pot_el_11.png",
        "forType": "potions"
    },
    {
        "id": "med5_pot_el_12",
        "name": "Lọ Thuốc Đổi Màu Ảo Ảnh",
        "src": "/assets/props/items/med5_pot_el_12.png",
        "thumbSrc": "/assets/props/thumbs/med5_pot_el_12.png",
        "forType": "potions"
    },
    {
        "id": "med5_pot_el_13",
        "name": "med5_pot_el #13",
        "src": "/assets/props/items/med5_pot_el_13.png",
        "thumbSrc": "/assets/props/thumbs/med5_pot_el_13.png",
        "forType": "potions"
    },
    {
        "id": "med5_pot_el_14",
        "name": "med5_pot_el #14",
        "src": "/assets/props/items/med5_pot_el_14.png",
        "thumbSrc": "/assets/props/thumbs/med5_pot_el_14.png",
        "forType": "potions"
    },
    {
        "id": "med5_pot_el_15",
        "name": "med5_pot_el #15",
        "src": "/assets/props/items/med5_pot_el_15.png",
        "thumbSrc": "/assets/props/thumbs/med5_pot_el_15.png",
        "forType": "potions"
    },
    {
        "id": "med5_pot_el_16",
        "name": "med5_pot_el #16",
        "src": "/assets/props/items/med5_pot_el_16.png",
        "thumbSrc": "/assets/props/thumbs/med5_pot_el_16.png",
        "forType": "potions"
    },
    {
        "id": "med5_tome_01",
        "name": "Cổ Thư Grimoire Bìa Da Cổ Khóa Vàng",
        "src": "/assets/props/items/med5_tome_01.png",
        "thumbSrc": "/assets/props/thumbs/med5_tome_01.png",
        "forType": "tomes_relics"
    },
    {
        "id": "med5_tome_02",
        "name": "Cuộn Giấy Da Niêm Phong Sáp Đỏ",
        "src": "/assets/props/items/med5_tome_02.png",
        "thumbSrc": "/assets/props/thumbs/med5_tome_02.png",
        "forType": "tomes_relics"
    },
    {
        "id": "med5_tome_03",
        "name": "Bản Đồ Kho Báu Cổ Mạ Vàng",
        "src": "/assets/props/items/med5_tome_03.png",
        "thumbSrc": "/assets/props/thumbs/med5_tome_03.png",
        "forType": "tomes_relics"
    },
    {
        "id": "med5_tome_04",
        "name": "Sách Phép Thuật Băng Giá Nguyệt Tộc",
        "src": "/assets/props/items/med5_tome_04.png",
        "thumbSrc": "/assets/props/thumbs/med5_tome_04.png",
        "forType": "tomes_relics"
    },
    {
        "id": "med5_tome_05",
        "name": "Sách Hỏa Diệm Chú Bìa Da Rồng",
        "src": "/assets/props/items/med5_tome_05.png",
        "thumbSrc": "/assets/props/thumbs/med5_tome_05.png",
        "forType": "tomes_relics"
    },
    {
        "id": "med5_tome_06",
        "name": "Cuộn Giấy Da Thần Chú Cấm",
        "src": "/assets/props/items/med5_tome_06.png",
        "thumbSrc": "/assets/props/thumbs/med5_tome_06.png",
        "forType": "tomes_relics"
    },
    {
        "id": "med5_tome_07",
        "name": "Sách Thần Chú Triệu Hồi Hư Không",
        "src": "/assets/props/items/med5_tome_07.png",
        "thumbSrc": "/assets/props/thumbs/med5_tome_07.png",
        "forType": "tomes_relics"
    },
    {
        "id": "med5_tome_08",
        "name": "Bản Đồ Thiên Cầu Xem Sao",
        "src": "/assets/props/items/med5_tome_08.png",
        "thumbSrc": "/assets/props/thumbs/med5_tome_08.png",
        "forType": "tomes_relics"
    },
    {
        "id": "med5_tome_09",
        "name": "Cổ Thư Giả Kim Thuật Kỳ Bí",
        "src": "/assets/props/items/med5_tome_09.png",
        "thumbSrc": "/assets/props/thumbs/med5_tome_09.png",
        "forType": "tomes_relics"
    },
    {
        "id": "med5_tome_10",
        "name": "Cuộn Giấy Da Trắng Chờ Viết Chú",
        "src": "/assets/props/items/med5_tome_10.png",
        "thumbSrc": "/assets/props/thumbs/med5_tome_10.png",
        "forType": "tomes_relics"
    },
    {
        "id": "med5_tome_11",
        "name": "Sách Luật Cổ Vương Quốc Cung Đình",
        "src": "/assets/props/items/med5_tome_11.png",
        "thumbSrc": "/assets/props/thumbs/med5_tome_11.png",
        "forType": "tomes_relics"
    },
    {
        "id": "med5_tome_12",
        "name": "Bản Đồ Hầm Ngục Cổ Xưa",
        "src": "/assets/props/items/med5_tome_12.png",
        "thumbSrc": "/assets/props/thumbs/med5_tome_12.png",
        "forType": "tomes_relics"
    },
    {
        "id": "med5_tome_13",
        "name": "med5_tome #13",
        "src": "/assets/props/items/med5_tome_13.png",
        "thumbSrc": "/assets/props/thumbs/med5_tome_13.png",
        "forType": "tomes_relics"
    },
    {
        "id": "med5_tome_14",
        "name": "med5_tome #14",
        "src": "/assets/props/items/med5_tome_14.png",
        "thumbSrc": "/assets/props/thumbs/med5_tome_14.png",
        "forType": "tomes_relics"
    },
    {
        "id": "med5_tome_15",
        "name": "med5_tome #15",
        "src": "/assets/props/items/med5_tome_15.png",
        "thumbSrc": "/assets/props/thumbs/med5_tome_15.png",
        "forType": "tomes_relics"
    },
    {
        "id": "med5_tome_16",
        "name": "med5_tome #16",
        "src": "/assets/props/items/med5_tome_16.png",
        "thumbSrc": "/assets/props/thumbs/med5_tome_16.png",
        "forType": "tomes_relics"
    },
    {
        "id": "med5_scr_01",
        "name": "Cuộn Giấy Da Thần Sấm Sét",
        "src": "/assets/props/items/med5_scr_01.png",
        "thumbSrc": "/assets/props/thumbs/med5_scr_01.png",
        "forType": "tomes_relics"
    },
    {
        "id": "med5_scr_02",
        "name": "Sách Kinh Thánh Cổ Niêm Phong",
        "src": "/assets/props/items/med5_scr_02.png",
        "thumbSrc": "/assets/props/thumbs/med5_scr_02.png",
        "forType": "tomes_relics"
    },
    {
        "id": "med5_scr_03",
        "name": "Cuộn Thư Tịch Cổ Thời Đại Cũ",
        "src": "/assets/props/items/med5_scr_03.png",
        "thumbSrc": "/assets/props/thumbs/med5_scr_03.png",
        "forType": "tomes_relics"
    },
    {
        "id": "med5_scr_04",
        "name": "Bản Đồ Địa Đạo Thành Quách",
        "src": "/assets/props/items/med5_scr_04.png",
        "thumbSrc": "/assets/props/thumbs/med5_scr_04.png",
        "forType": "tomes_relics"
    },
    {
        "id": "med5_scr_05",
        "name": "Sách Phép Thuật Trị Thương Thánh",
        "src": "/assets/props/items/med5_scr_05.png",
        "thumbSrc": "/assets/props/thumbs/med5_scr_05.png",
        "forType": "tomes_relics"
    },
    {
        "id": "med5_scr_06",
        "name": "Cuộn Giấy Da Chú Nguyền Cổ",
        "src": "/assets/props/items/med5_scr_06.png",
        "thumbSrc": "/assets/props/thumbs/med5_scr_06.png",
        "forType": "tomes_relics"
    },
    {
        "id": "med5_scr_07",
        "name": "Cổ Thư Khắc Chữ Phù Hiệu Runes",
        "src": "/assets/props/items/med5_scr_07.png",
        "thumbSrc": "/assets/props/thumbs/med5_scr_07.png",
        "forType": "tomes_relics"
    },
    {
        "id": "med5_scr_08",
        "name": "Bản Đồ Hòn Đảo Huyền Bí",
        "src": "/assets/props/items/med5_scr_08.png",
        "thumbSrc": "/assets/props/thumbs/med5_scr_08.png",
        "forType": "tomes_relics"
    },
    {
        "id": "med5_scr_09",
        "name": "Cuộn Chiếu Chỉ Hoàng Đế Cổ",
        "src": "/assets/props/items/med5_scr_09.png",
        "thumbSrc": "/assets/props/thumbs/med5_scr_09.png",
        "forType": "tomes_relics"
    },
    {
        "id": "med5_scr_10",
        "name": "Sách Tiên Tri Tương Lai Quá Khứ",
        "src": "/assets/props/items/med5_scr_10.png",
        "thumbSrc": "/assets/props/thumbs/med5_scr_10.png",
        "forType": "tomes_relics"
    },
    {
        "id": "med5_scr_11",
        "name": "Cuộn Giấy Phong Thư Bí Mật",
        "src": "/assets/props/items/med5_scr_11.png",
        "thumbSrc": "/assets/props/thumbs/med5_scr_11.png",
        "forType": "tomes_relics"
    },
    {
        "id": "med5_scr_12",
        "name": "Sách Ghi Chép Quái Vật Cổ",
        "src": "/assets/props/items/med5_scr_12.png",
        "thumbSrc": "/assets/props/thumbs/med5_scr_12.png",
        "forType": "tomes_relics"
    },
    {
        "id": "med5_scr_13",
        "name": "med5_scr #13",
        "src": "/assets/props/items/med5_scr_13.png",
        "thumbSrc": "/assets/props/thumbs/med5_scr_13.png",
        "forType": "tomes_relics"
    },
    {
        "id": "med5_scr_14",
        "name": "med5_scr #14",
        "src": "/assets/props/items/med5_scr_14.png",
        "thumbSrc": "/assets/props/thumbs/med5_scr_14.png",
        "forType": "tomes_relics"
    },
    {
        "id": "med5_scr_15",
        "name": "med5_scr #15",
        "src": "/assets/props/items/med5_scr_15.png",
        "thumbSrc": "/assets/props/thumbs/med5_scr_15.png",
        "forType": "tomes_relics"
    },
    {
        "id": "med5_scr_16",
        "name": "med5_scr #16",
        "src": "/assets/props/items/med5_scr_16.png",
        "thumbSrc": "/assets/props/thumbs/med5_scr_16.png",
        "forType": "tomes_relics"
    },
    {
        "id": "med5_jewel_01",
        "name": "Nhẫn Ấn Quý Tộc Signet Ring Vàng",
        "src": "/assets/props/items/med5_jewel_01.png",
        "thumbSrc": "/assets/props/thumbs/med5_jewel_01.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_jewel_02",
        "name": "Mặt Dây Chuyền Bùa Chú Thái Dương",
        "src": "/assets/props/items/med5_jewel_02.png",
        "thumbSrc": "/assets/props/thumbs/med5_jewel_02.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_jewel_03",
        "name": "Nhẫn Ngọc Bích Cổ Thần Linh",
        "src": "/assets/props/items/med5_jewel_03.png",
        "thumbSrc": "/assets/props/thumbs/med5_jewel_03.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_jewel_04",
        "name": "Dây Chuyền Hồng Ngọc Cung Đình",
        "src": "/assets/props/items/med5_jewel_04.png",
        "thumbSrc": "/assets/props/thumbs/med5_jewel_04.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_jewel_05",
        "name": "Nhẫn Bạc Thạch Anh Tím Sâu",
        "src": "/assets/props/items/med5_jewel_05.png",
        "thumbSrc": "/assets/props/thumbs/med5_jewel_05.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_jewel_06",
        "name": "Bùa Hộ Mệnh Đĩa Kim Loại Cổ",
        "src": "/assets/props/items/med5_jewel_06.png",
        "thumbSrc": "/assets/props/thumbs/med5_jewel_06.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_jewel_07",
        "name": "Nhẫn Kim Cương Lấp Lánh Khảm",
        "src": "/assets/props/items/med5_jewel_07.png",
        "thumbSrc": "/assets/props/thumbs/med5_jewel_07.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_jewel_08",
        "name": "Dây Chuyền Lam Ngọc Biển Sâu",
        "src": "/assets/props/items/med5_jewel_08.png",
        "thumbSrc": "/assets/props/thumbs/med5_jewel_08.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_jewel_09",
        "name": "Vòng Cổ Vàng Ròng Nạm Ngọc",
        "src": "/assets/props/items/med5_jewel_09.png",
        "thumbSrc": "/assets/props/thumbs/med5_jewel_09.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_jewel_10",
        "name": "Nhẫn Độc Dược Khắc Hình Rắn",
        "src": "/assets/props/items/med5_jewel_10.png",
        "thumbSrc": "/assets/props/thumbs/med5_jewel_10.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_jewel_11",
        "name": "Bùa Hộ Mệnh Mắt Thần Horus",
        "src": "/assets/props/items/med5_jewel_11.png",
        "thumbSrc": "/assets/props/thumbs/med5_jewel_11.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_jewel_12",
        "name": "Mặt Dây Chuyền Pha Lê Sao Băng",
        "src": "/assets/props/items/med5_jewel_12.png",
        "thumbSrc": "/assets/props/thumbs/med5_jewel_12.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_jewel_13",
        "name": "med5_jewel #13",
        "src": "/assets/props/items/med5_jewel_13.png",
        "thumbSrc": "/assets/props/thumbs/med5_jewel_13.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_jewel_14",
        "name": "med5_jewel #14",
        "src": "/assets/props/items/med5_jewel_14.png",
        "thumbSrc": "/assets/props/thumbs/med5_jewel_14.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_jewel_15",
        "name": "med5_jewel #15",
        "src": "/assets/props/items/med5_jewel_15.png",
        "thumbSrc": "/assets/props/thumbs/med5_jewel_15.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_jewel_16",
        "name": "med5_jewel #16",
        "src": "/assets/props/items/med5_jewel_16.png",
        "thumbSrc": "/assets/props/thumbs/med5_jewel_16.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_ring_01",
        "name": "Nhẫn Bạc Hiệp Sĩ Khắc Chữ Chìm",
        "src": "/assets/props/items/med5_ring_01.png",
        "thumbSrc": "/assets/props/thumbs/med5_ring_01.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_ring_02",
        "name": "Dây Chuyền Khắc Huy Hiệu Hoàng Tộc",
        "src": "/assets/props/items/med5_ring_02.png",
        "thumbSrc": "/assets/props/thumbs/med5_ring_02.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_ring_03",
        "name": "Nhẫn Vàng Nạm Viên Ngọc Lục",
        "src": "/assets/props/items/med5_ring_03.png",
        "thumbSrc": "/assets/props/thumbs/med5_ring_03.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_ring_04",
        "name": "Mặt Dây Chuyền Băng Tinh Lam",
        "src": "/assets/props/items/med5_ring_04.png",
        "thumbSrc": "/assets/props/thumbs/med5_ring_04.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_ring_05",
        "name": "Nhẫn Hư Không Khảm Đá Tím",
        "src": "/assets/props/items/med5_ring_05.png",
        "thumbSrc": "/assets/props/thumbs/med5_ring_05.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_ring_06",
        "name": "Dây Chuyền Răng Nanh Thú Bọc Vàng",
        "src": "/assets/props/items/med5_ring_06.png",
        "thumbSrc": "/assets/props/thumbs/med5_ring_06.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_ring_07",
        "name": "Nhẫn Phù Thủy Tích Tụ Mana",
        "src": "/assets/props/items/med5_ring_07.png",
        "thumbSrc": "/assets/props/thumbs/med5_ring_07.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_ring_08",
        "name": "Bùa Hộ Mệnh Thập Tự Bạc Cổ",
        "src": "/assets/props/items/med5_ring_08.png",
        "thumbSrc": "/assets/props/thumbs/med5_ring_08.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_ring_09",
        "name": "Vòng Tay Chuỗi Hạt Mã Não",
        "src": "/assets/props/items/med5_ring_09.png",
        "thumbSrc": "/assets/props/thumbs/med5_ring_09.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_ring_10",
        "name": "Nhẫn Thần Lực Ban Phước Chiến",
        "src": "/assets/props/items/med5_ring_10.png",
        "thumbSrc": "/assets/props/thumbs/med5_ring_10.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_ring_11",
        "name": "Dây Chuyền Lông Chim Ưng Bạc",
        "src": "/assets/props/items/med5_ring_11.png",
        "thumbSrc": "/assets/props/thumbs/med5_ring_11.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_ring_12",
        "name": "Mặt Dây Chuyền Trăng Khuyết Vàng",
        "src": "/assets/props/items/med5_ring_12.png",
        "thumbSrc": "/assets/props/thumbs/med5_ring_12.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_ring_13",
        "name": "med5_ring #13",
        "src": "/assets/props/items/med5_ring_13.png",
        "thumbSrc": "/assets/props/thumbs/med5_ring_13.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_ring_14",
        "name": "med5_ring #14",
        "src": "/assets/props/items/med5_ring_14.png",
        "thumbSrc": "/assets/props/thumbs/med5_ring_14.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_ring_15",
        "name": "med5_ring #15",
        "src": "/assets/props/items/med5_ring_15.png",
        "thumbSrc": "/assets/props/thumbs/med5_ring_15.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_ring_16",
        "name": "med5_ring #16",
        "src": "/assets/props/items/med5_ring_16.png",
        "thumbSrc": "/assets/props/thumbs/med5_ring_16.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_ingot_01",
        "name": "Thỏi Vàng Ròng Đúc Khối Sáng Chói",
        "src": "/assets/props/items/med5_ingot_01.png",
        "thumbSrc": "/assets/props/thumbs/med5_ingot_01.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_ingot_02",
        "name": "Thỏi Bạc Trắng Tinh Khiết 999",
        "src": "/assets/props/items/med5_ingot_02.png",
        "thumbSrc": "/assets/props/thumbs/med5_ingot_02.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_ingot_03",
        "name": "Thỏi Đồng Đỏ Đúc Lò Rèn",
        "src": "/assets/props/items/med5_ingot_03.png",
        "thumbSrc": "/assets/props/thumbs/med5_ingot_03.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_ingot_04",
        "name": "Thỏi Sắt Rèn Nguyên Khối Nặng",
        "src": "/assets/props/items/med5_ingot_04.png",
        "thumbSrc": "/assets/props/thumbs/med5_ingot_04.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_ingot_05",
        "name": "Thỏi Thép Damascus Vân Gợn",
        "src": "/assets/props/items/med5_ingot_05.png",
        "thumbSrc": "/assets/props/thumbs/med5_ingot_05.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_ingot_06",
        "name": "Viên Hồng Ngọc Giác Cắt Bát Giác",
        "src": "/assets/props/items/med5_ingot_06.png",
        "thumbSrc": "/assets/props/thumbs/med5_ingot_06.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_ingot_07",
        "name": "Viên Lam Ngọc Hoàng Gia Sáng Ngời",
        "src": "/assets/props/items/med5_ingot_07.png",
        "thumbSrc": "/assets/props/thumbs/med5_ingot_07.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_ingot_08",
        "name": "Viên Ngọc Lục Bảo Vuông Vức",
        "src": "/assets/props/items/med5_ingot_08.png",
        "thumbSrc": "/assets/props/thumbs/med5_ingot_08.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_ingot_09",
        "name": "Viên Kim Cương Đỉnh Cao Tinh Khiết",
        "src": "/assets/props/items/med5_ingot_09.png",
        "thumbSrc": "/assets/props/thumbs/med5_ingot_09.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_ingot_10",
        "name": "Viên Thạch Anh Tím Hư Không",
        "src": "/assets/props/items/med5_ingot_10.png",
        "thumbSrc": "/assets/props/thumbs/med5_ingot_10.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_ingot_11",
        "name": "Cục Quặng Vàng Thô Hầm Mỏ",
        "src": "/assets/props/items/med5_ingot_11.png",
        "thumbSrc": "/assets/props/thumbs/med5_ingot_11.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_ingot_12",
        "name": "Cục Quặng Sắt Chưa Lọc Tạp Chất",
        "src": "/assets/props/items/med5_ingot_12.png",
        "thumbSrc": "/assets/props/thumbs/med5_ingot_12.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_ingot_13",
        "name": "med5_ingot #13",
        "src": "/assets/props/items/med5_ingot_13.png",
        "thumbSrc": "/assets/props/thumbs/med5_ingot_13.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_ingot_14",
        "name": "med5_ingot #14",
        "src": "/assets/props/items/med5_ingot_14.png",
        "thumbSrc": "/assets/props/thumbs/med5_ingot_14.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_ingot_15",
        "name": "med5_ingot #15",
        "src": "/assets/props/items/med5_ingot_15.png",
        "thumbSrc": "/assets/props/thumbs/med5_ingot_15.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_ingot_16",
        "name": "med5_ingot #16",
        "src": "/assets/props/items/med5_ingot_16.png",
        "thumbSrc": "/assets/props/thumbs/med5_ingot_16.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_ingot_17",
        "name": "med5_ingot #17",
        "src": "/assets/props/items/med5_ingot_17.png",
        "thumbSrc": "/assets/props/thumbs/med5_ingot_17.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_gem_01",
        "name": "Viên Hoàng Ngọc Topaz Rực Rỡ",
        "src": "/assets/props/items/med5_gem_01.png",
        "thumbSrc": "/assets/props/thumbs/med5_gem_01.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_gem_02",
        "name": "Viên Ngọc Mắt Hổ Vân Nâu Vàng",
        "src": "/assets/props/items/med5_gem_02.png",
        "thumbSrc": "/assets/props/thumbs/med5_gem_02.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_gem_03",
        "name": "Thỏi Vàng Nhỏ Khắc Con Dấu",
        "src": "/assets/props/items/med5_gem_03.png",
        "thumbSrc": "/assets/props/thumbs/med5_gem_03.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_gem_04",
        "name": "Thỏi Bạc Cỡ Vừa Đúc Khối",
        "src": "/assets/props/items/med5_gem_04.png",
        "thumbSrc": "/assets/props/thumbs/med5_gem_04.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_gem_05",
        "name": "Viên Ngọc Phỉ Thúy Tròn Trĩnh",
        "src": "/assets/props/items/med5_gem_05.png",
        "thumbSrc": "/assets/props/thumbs/med5_gem_05.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_gem_06",
        "name": "Cụm Pha Lê Băng Trong Suốt",
        "src": "/assets/props/items/med5_gem_06.png",
        "thumbSrc": "/assets/props/thumbs/med5_gem_06.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_gem_07",
        "name": "Viên Huyết Thạch Đỏ Thẫm Ma Mị",
        "src": "/assets/props/items/med5_gem_07.png",
        "thumbSrc": "/assets/props/thumbs/med5_gem_07.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_gem_08",
        "name": "Viên Ngọc Xanh Thủy Cung Tinh Tú",
        "src": "/assets/props/items/med5_gem_08.png",
        "thumbSrc": "/assets/props/thumbs/med5_gem_08.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_gem_09",
        "name": "Cục Quặng Bạc Lấp Lánh Ánh Sao",
        "src": "/assets/props/items/med5_gem_09.png",
        "thumbSrc": "/assets/props/thumbs/med5_gem_09.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_gem_10",
        "name": "Viên Kim Cương Đen Quý Hiếm",
        "src": "/assets/props/items/med5_gem_10.png",
        "thumbSrc": "/assets/props/thumbs/med5_gem_10.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_gem_11",
        "name": "Thỏi Đồng Đen Cổ Đại",
        "src": "/assets/props/items/med5_gem_11.png",
        "thumbSrc": "/assets/props/thumbs/med5_gem_11.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_gem_12",
        "name": "Đá Mặt Trăng Sáng Mờ Bí Ẩn",
        "src": "/assets/props/items/med5_gem_12.png",
        "thumbSrc": "/assets/props/thumbs/med5_gem_12.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_gem_13",
        "name": "med5_gem #13",
        "src": "/assets/props/items/med5_gem_13.png",
        "thumbSrc": "/assets/props/thumbs/med5_gem_13.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_gem_14",
        "name": "med5_gem #14",
        "src": "/assets/props/items/med5_gem_14.png",
        "thumbSrc": "/assets/props/thumbs/med5_gem_14.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_gem_15",
        "name": "med5_gem #15",
        "src": "/assets/props/items/med5_gem_15.png",
        "thumbSrc": "/assets/props/thumbs/med5_gem_15.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_gem_16",
        "name": "med5_gem #16",
        "src": "/assets/props/items/med5_gem_16.png",
        "thumbSrc": "/assets/props/thumbs/med5_gem_16.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_gem_17",
        "name": "med5_gem #17",
        "src": "/assets/props/items/med5_gem_17.png",
        "thumbSrc": "/assets/props/thumbs/med5_gem_17.png",
        "forType": "gems_loot"
    },
    {
        "id": "med5_key_01",
        "name": "Chìa Khóa Cổ Cổng Thành Đồ Sộ",
        "src": "/assets/props/items/med5_key_01.png",
        "thumbSrc": "/assets/props/thumbs/med5_key_01.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med5_key_02",
        "name": "Chìa Khóa Vàng Mở Rương Báu",
        "src": "/assets/props/items/med5_key_02.png",
        "thumbSrc": "/assets/props/thumbs/med5_key_02.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med5_key_03",
        "name": "Bộ Dụng Cụ Mở Khóa Lockpick",
        "src": "/assets/props/items/med5_key_03.png",
        "thumbSrc": "/assets/props/thumbs/med5_key_03.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med5_key_04",
        "name": "Cân Tiểu Ly Của Nhà Giả Kim",
        "src": "/assets/props/items/med5_key_04.png",
        "thumbSrc": "/assets/props/thumbs/med5_key_04.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med5_key_05",
        "name": "Đồng Hồ Cát Thủy Tinh Tính Giờ",
        "src": "/assets/props/items/med5_key_05.png",
        "thumbSrc": "/assets/props/thumbs/med5_key_05.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med5_key_06",
        "name": "Chìa Khóa Bạc Hầm Rượu Cổ",
        "src": "/assets/props/items/med5_key_06.png",
        "thumbSrc": "/assets/props/thumbs/med5_key_06.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med5_key_07",
        "name": "Chìa Khóa Sắt Rỉ Sét Ngục Tối",
        "src": "/assets/props/items/med5_key_07.png",
        "thumbSrc": "/assets/props/thumbs/med5_key_07.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med5_key_08",
        "name": "Chuông Đồng Cầm Tay Báo Động",
        "src": "/assets/props/items/med5_key_08.png",
        "thumbSrc": "/assets/props/thumbs/med5_key_08.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med5_key_09",
        "name": "Kính Lúp Soi Đá Quý Cổ Điển",
        "src": "/assets/props/items/med5_key_09.png",
        "thumbSrc": "/assets/props/thumbs/med5_key_09.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med5_key_10",
        "name": "Chìa Khóa Ma Thuật Khắc Runes",
        "src": "/assets/props/items/med5_key_10.png",
        "thumbSrc": "/assets/props/thumbs/med5_key_10.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med5_key_11",
        "name": "Bộ Quả Cân Đồng Thau Chuẩn",
        "src": "/assets/props/items/med5_key_11.png",
        "thumbSrc": "/assets/props/thumbs/med5_key_11.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med5_key_12",
        "name": "Dụng Cụ Đo Góc Bầu Trời Sao",
        "src": "/assets/props/items/med5_key_12.png",
        "thumbSrc": "/assets/props/thumbs/med5_key_12.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med5_key_13",
        "name": "med5_key #13",
        "src": "/assets/props/items/med5_key_13.png",
        "thumbSrc": "/assets/props/thumbs/med5_key_13.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med5_key_14",
        "name": "med5_key #14",
        "src": "/assets/props/items/med5_key_14.png",
        "thumbSrc": "/assets/props/thumbs/med5_key_14.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med5_key_15",
        "name": "med5_key #15",
        "src": "/assets/props/items/med5_key_15.png",
        "thumbSrc": "/assets/props/thumbs/med5_key_15.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med5_misc_01",
        "name": "Chìa Khóa Hòm Kho Báu Vàng",
        "src": "/assets/props/items/med5_misc_01.png",
        "thumbSrc": "/assets/props/thumbs/med5_misc_01.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med5_misc_02",
        "name": "Đồng Hồ Cát Gỗ Cổ Đo Thời Gian",
        "src": "/assets/props/items/med5_misc_02.png",
        "thumbSrc": "/assets/props/thumbs/med5_misc_02.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med5_misc_03",
        "name": "Cân Cán Nghiêng Đo Vàng Bạc",
        "src": "/assets/props/items/med5_misc_03.png",
        "thumbSrc": "/assets/props/thumbs/med5_misc_03.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med5_misc_04",
        "name": "Chìa Khóa Cổng Sắt Hầm Ngục",
        "src": "/assets/props/items/med5_misc_04.png",
        "thumbSrc": "/assets/props/thumbs/med5_misc_04.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med5_misc_05",
        "name": "Bộ Móc Khóa Đồng Thau Lính Gác",
        "src": "/assets/props/items/med5_misc_05.png",
        "thumbSrc": "/assets/props/thumbs/med5_misc_05.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med5_misc_06",
        "name": "Chuông Thánh Rung Trừ Tà",
        "src": "/assets/props/items/med5_misc_06.png",
        "thumbSrc": "/assets/props/thumbs/med5_misc_06.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med5_misc_07",
        "name": "Ống Nhòm Đồng Thao Kéo Dài",
        "src": "/assets/props/items/med5_misc_07.png",
        "thumbSrc": "/assets/props/thumbs/med5_misc_07.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med5_misc_08",
        "name": "Chìa Khóa Bí Mật Phòng Cơ Quan",
        "src": "/assets/props/items/med5_misc_08.png",
        "thumbSrc": "/assets/props/thumbs/med5_misc_08.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med5_misc_09",
        "name": "Đồng Hồ Mặt Trời Bỏ Túi Đồng",
        "src": "/assets/props/items/med5_misc_09.png",
        "thumbSrc": "/assets/props/thumbs/med5_misc_09.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med5_misc_10",
        "name": "Cân Treo Cầm Tay Đo Trọng Lượng",
        "src": "/assets/props/items/med5_misc_10.png",
        "thumbSrc": "/assets/props/thumbs/med5_misc_10.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med5_misc_11",
        "name": "Chìa Khóa Cửa Thư Viện Cổ",
        "src": "/assets/props/items/med5_misc_11.png",
        "thumbSrc": "/assets/props/thumbs/med5_misc_11.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med5_misc_12",
        "name": "Bộ Kìm Móc Cơ Khí Nhỏ",
        "src": "/assets/props/items/med5_misc_12.png",
        "thumbSrc": "/assets/props/thumbs/med5_misc_12.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med5_misc_13",
        "name": "med5_misc #13",
        "src": "/assets/props/items/med5_misc_13.png",
        "thumbSrc": "/assets/props/thumbs/med5_misc_13.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med5_misc_14",
        "name": "med5_misc #14",
        "src": "/assets/props/items/med5_misc_14.png",
        "thumbSrc": "/assets/props/thumbs/med5_misc_14.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med5_misc_15",
        "name": "med5_misc #15",
        "src": "/assets/props/items/med5_misc_15.png",
        "thumbSrc": "/assets/props/thumbs/med5_misc_15.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med5_misc_16",
        "name": "med5_misc #16",
        "src": "/assets/props/items/med5_misc_16.png",
        "thumbSrc": "/assets/props/thumbs/med5_misc_16.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med2_bread_01",
        "name": "Ổ Bánh Mì Lúa Mạch Nướng Nứt Men",
        "src": "/assets/props/items/med2_bread_01.png",
        "thumbSrc": "/assets/props/thumbs/med2_bread_01.png",
        "forType": "provisions"
    },
    {
        "id": "med2_bread_02",
        "name": "Bánh Mì Tròn Du Mục Nướng Than",
        "src": "/assets/props/items/med2_bread_02.png",
        "thumbSrc": "/assets/props/thumbs/med2_bread_02.png",
        "forType": "provisions"
    },
    {
        "id": "med2_bread_03",
        "name": "Bánh Mì Baguette Dài Giòn Rụm",
        "src": "/assets/props/items/med2_bread_03.png",
        "thumbSrc": "/assets/props/thumbs/med2_bread_03.png",
        "forType": "provisions"
    },
    {
        "id": "med2_bread_04",
        "name": "Bánh Sừng Bò Nướng Bơ Thơm",
        "src": "/assets/props/items/med2_bread_04.png",
        "thumbSrc": "/assets/props/thumbs/med2_bread_04.png",
        "forType": "provisions"
    },
    {
        "id": "med2_bread_05",
        "name": "Ổ Bánh Mì Đen Lên Men Cổ Điển",
        "src": "/assets/props/items/med2_bread_05.png",
        "thumbSrc": "/assets/props/thumbs/med2_bread_05.png",
        "forType": "provisions"
    },
    {
        "id": "med2_bread_06",
        "name": "Bánh Mì Ngọt Rắc Hạt Vừng",
        "src": "/assets/props/items/med2_bread_06.png",
        "thumbSrc": "/assets/props/thumbs/med2_bread_06.png",
        "forType": "provisions"
    },
    {
        "id": "med2_bread_07",
        "name": "Bánh Mì Lát Nướng Cháy Cạnh",
        "src": "/assets/props/items/med2_bread_07.png",
        "thumbSrc": "/assets/props/thumbs/med2_bread_07.png",
        "forType": "provisions"
    },
    {
        "id": "med2_bread_08",
        "name": "Bánh Mì Bện Dây Hoàng Gia",
        "src": "/assets/props/items/med2_bread_08.png",
        "thumbSrc": "/assets/props/thumbs/med2_bread_08.png",
        "forType": "provisions"
    },
    {
        "id": "med2_bread_09",
        "name": "Bánh Quy Giòn Dự Trữ Hành Quân",
        "src": "/assets/props/items/med2_bread_09.png",
        "thumbSrc": "/assets/props/thumbs/med2_bread_09.png",
        "forType": "provisions"
    },
    {
        "id": "med2_bread_10",
        "name": "Bánh Mì Kẹp Phô Mai Chảy",
        "src": "/assets/props/items/med2_bread_10.png",
        "thumbSrc": "/assets/props/thumbs/med2_bread_10.png",
        "forType": "provisions"
    },
    {
        "id": "med2_bread_11",
        "name": "Ổ Bánh Mì Trắng Xốp Mềm",
        "src": "/assets/props/items/med2_bread_11.png",
        "thumbSrc": "/assets/props/thumbs/med2_bread_11.png",
        "forType": "provisions"
    },
    {
        "id": "med2_bread_12",
        "name": "Bánh Mì Yến Mạch Mật Ong",
        "src": "/assets/props/items/med2_bread_12.png",
        "thumbSrc": "/assets/props/thumbs/med2_bread_12.png",
        "forType": "provisions"
    },
    {
        "id": "med2_bread_13",
        "name": "med2_bread #13",
        "src": "/assets/props/items/med2_bread_13.png",
        "thumbSrc": "/assets/props/thumbs/med2_bread_13.png",
        "forType": "provisions"
    },
    {
        "id": "med2_bread_14",
        "name": "med2_bread #14",
        "src": "/assets/props/items/med2_bread_14.png",
        "thumbSrc": "/assets/props/thumbs/med2_bread_14.png",
        "forType": "provisions"
    },
    {
        "id": "med2_bread_15",
        "name": "med2_bread #15",
        "src": "/assets/props/items/med2_bread_15.png",
        "thumbSrc": "/assets/props/thumbs/med2_bread_15.png",
        "forType": "provisions"
    },
    {
        "id": "med2_bread_16",
        "name": "med2_bread #16",
        "src": "/assets/props/items/med2_bread_16.png",
        "thumbSrc": "/assets/props/thumbs/med2_bread_16.png",
        "forType": "provisions"
    },
    {
        "id": "med2_meat_01",
        "name": "Đùi Heo Muối Xông Khói Nguyên Chiếc",
        "src": "/assets/props/items/med2_meat_01.png",
        "thumbSrc": "/assets/props/thumbs/med2_meat_01.png",
        "forType": "provisions"
    },
    {
        "id": "med2_meat_02",
        "name": "Dải Thịt Ba Chỉ Hun Khói Muối",
        "src": "/assets/props/items/med2_meat_02.png",
        "thumbSrc": "/assets/props/thumbs/med2_meat_02.png",
        "forType": "provisions"
    },
    {
        "id": "med2_meat_03",
        "name": "Xúc Xích Nướng Lửa Trại Thơm",
        "src": "/assets/props/items/med2_meat_03.png",
        "thumbSrc": "/assets/props/thumbs/med2_meat_03.png",
        "forType": "provisions"
    },
    {
        "id": "med2_meat_04",
        "name": "Tảng Thịt Bò Tươi Rực Đỏ",
        "src": "/assets/props/items/med2_meat_04.png",
        "thumbSrc": "/assets/props/thumbs/med2_meat_04.png",
        "forType": "provisions"
    },
    {
        "id": "med2_meat_05",
        "name": "Miếng Sườn Cừu Nướng Mật Ong",
        "src": "/assets/props/items/med2_meat_05.png",
        "thumbSrc": "/assets/props/thumbs/med2_meat_05.png",
        "forType": "provisions"
    },
    {
        "id": "med2_meat_06",
        "name": "Thịt Heo Rừng Sấy Khô Dã Ngoại",
        "src": "/assets/props/items/med2_meat_06.png",
        "thumbSrc": "/assets/props/thumbs/med2_meat_06.png",
        "forType": "provisions"
    },
    {
        "id": "med2_meat_07",
        "name": "Khoanh Giò Thủ Heo Lâu Đài",
        "src": "/assets/props/items/med2_meat_07.png",
        "thumbSrc": "/assets/props/thumbs/med2_meat_07.png",
        "forType": "provisions"
    },
    {
        "id": "med2_meat_08",
        "name": "Thịt Bò Bít Tết Than Hồng",
        "src": "/assets/props/items/med2_meat_08.png",
        "thumbSrc": "/assets/props/thumbs/med2_meat_08.png",
        "forType": "provisions"
    },
    {
        "id": "med2_meat_09",
        "name": "Xúc Xích Cay Kiểu Cổ",
        "src": "/assets/props/items/med2_meat_09.png",
        "thumbSrc": "/assets/props/thumbs/med2_meat_09.png",
        "forType": "provisions"
    },
    {
        "id": "med2_meat_10",
        "name": "Thịt Hun Khói Móc Treo Bếp",
        "src": "/assets/props/items/med2_meat_10.png",
        "thumbSrc": "/assets/props/thumbs/med2_meat_10.png",
        "forType": "provisions"
    },
    {
        "id": "med2_meat_11",
        "name": "Sườn Heo Nướng Vàng Giòn",
        "src": "/assets/props/items/med2_meat_11.png",
        "thumbSrc": "/assets/props/thumbs/med2_meat_11.png",
        "forType": "provisions"
    },
    {
        "id": "med2_meat_12",
        "name": "Thịt Cừu Hầm Nước Sốt",
        "src": "/assets/props/items/med2_meat_12.png",
        "thumbSrc": "/assets/props/thumbs/med2_meat_12.png",
        "forType": "provisions"
    },
    {
        "id": "med2_meat_13",
        "name": "med2_meat #13",
        "src": "/assets/props/items/med2_meat_13.png",
        "thumbSrc": "/assets/props/thumbs/med2_meat_13.png",
        "forType": "provisions"
    },
    {
        "id": "med2_meat_14",
        "name": "med2_meat #14",
        "src": "/assets/props/items/med2_meat_14.png",
        "thumbSrc": "/assets/props/thumbs/med2_meat_14.png",
        "forType": "provisions"
    },
    {
        "id": "med2_meat_15",
        "name": "med2_meat #15",
        "src": "/assets/props/items/med2_meat_15.png",
        "thumbSrc": "/assets/props/thumbs/med2_meat_15.png",
        "forType": "provisions"
    },
    {
        "id": "med2_meat_16",
        "name": "med2_meat #16",
        "src": "/assets/props/items/med2_meat_16.png",
        "thumbSrc": "/assets/props/thumbs/med2_meat_16.png",
        "forType": "provisions"
    },
    {
        "id": "med2_poultry_01",
        "name": "Gà Quay Mật Ong Nguyên Con Vàng Ruộm",
        "src": "/assets/props/items/med2_poultry_01.png",
        "thumbSrc": "/assets/props/thumbs/med2_poultry_01.png",
        "forType": "provisions"
    },
    {
        "id": "med2_poultry_02",
        "name": "Đùi Gà Nướng Mỡ Hành Cháy Cạnh",
        "src": "/assets/props/items/med2_poultry_02.png",
        "thumbSrc": "/assets/props/thumbs/med2_poultry_02.png",
        "forType": "provisions"
    },
    {
        "id": "med2_poultry_03",
        "name": "Vịt Quay Lò Đất Cung Đình",
        "src": "/assets/props/items/med2_poultry_03.png",
        "thumbSrc": "/assets/props/thumbs/med2_poultry_03.png",
        "forType": "provisions"
    },
    {
        "id": "med2_poultry_04",
        "name": "Chim Cút Nướng Lá Thơm",
        "src": "/assets/props/items/med2_poultry_04.png",
        "thumbSrc": "/assets/props/thumbs/med2_poultry_04.png",
        "forType": "provisions"
    },
    {
        "id": "med2_poultry_05",
        "name": "Gà Luộc Nước Dừa Lâu Đài",
        "src": "/assets/props/items/med2_poultry_05.png",
        "thumbSrc": "/assets/props/thumbs/med2_poultry_05.png",
        "forType": "provisions"
    },
    {
        "id": "med2_poultry_06",
        "name": "Ức Gà Nướng Muối Ớt",
        "src": "/assets/props/items/med2_poultry_06.png",
        "thumbSrc": "/assets/props/thumbs/med2_poultry_06.png",
        "forType": "provisions"
    },
    {
        "id": "med2_poultry_07",
        "name": "Cánh Gà Nướng Mật Rừng",
        "src": "/assets/props/items/med2_poultry_07.png",
        "thumbSrc": "/assets/props/thumbs/med2_poultry_07.png",
        "forType": "provisions"
    },
    {
        "id": "med2_poultry_08",
        "name": "Đùi Vịt Muối Xông Khói",
        "src": "/assets/props/items/med2_poultry_08.png",
        "thumbSrc": "/assets/props/thumbs/med2_poultry_08.png",
        "forType": "provisions"
    },
    {
        "id": "med2_poultry_09",
        "name": "Gà Tây Nướng Yến Tiệc",
        "src": "/assets/props/items/med2_poultry_09.png",
        "thumbSrc": "/assets/props/thumbs/med2_poultry_09.png",
        "forType": "provisions"
    },
    {
        "id": "med2_poultry_10",
        "name": "Chim Bồ Câu Nướng Rơm",
        "src": "/assets/props/items/med2_poultry_10.png",
        "thumbSrc": "/assets/props/thumbs/med2_poultry_10.png",
        "forType": "provisions"
    },
    {
        "id": "med2_poultry_11",
        "name": "Đùi Gà Chiên Giòn Rụm",
        "src": "/assets/props/items/med2_poultry_11.png",
        "thumbSrc": "/assets/props/thumbs/med2_poultry_11.png",
        "forType": "provisions"
    },
    {
        "id": "med2_poultry_12",
        "name": "Gà Hầm Hạt Dẻ Thơm Nức",
        "src": "/assets/props/items/med2_poultry_12.png",
        "thumbSrc": "/assets/props/thumbs/med2_poultry_12.png",
        "forType": "provisions"
    },
    {
        "id": "med2_poultry_13",
        "name": "med2_poultry #13",
        "src": "/assets/props/items/med2_poultry_13.png",
        "thumbSrc": "/assets/props/thumbs/med2_poultry_13.png",
        "forType": "provisions"
    },
    {
        "id": "med2_poultry_14",
        "name": "med2_poultry #14",
        "src": "/assets/props/items/med2_poultry_14.png",
        "thumbSrc": "/assets/props/thumbs/med2_poultry_14.png",
        "forType": "provisions"
    },
    {
        "id": "med2_poultry_15",
        "name": "med2_poultry #15",
        "src": "/assets/props/items/med2_poultry_15.png",
        "thumbSrc": "/assets/props/thumbs/med2_poultry_15.png",
        "forType": "provisions"
    },
    {
        "id": "med2_poultry_16",
        "name": "med2_poultry #16",
        "src": "/assets/props/items/med2_poultry_16.png",
        "thumbSrc": "/assets/props/thumbs/med2_poultry_16.png",
        "forType": "provisions"
    },
    {
        "id": "med2_fish_01",
        "name": "Cá Hồi Biển Nướng Chanh Vàng",
        "src": "/assets/props/items/med2_fish_01.png",
        "thumbSrc": "/assets/props/thumbs/med2_fish_01.png",
        "forType": "provisions"
    },
    {
        "id": "med2_fish_02",
        "name": "Cá Tuyết Phi Lê Áp Chảo",
        "src": "/assets/props/items/med2_fish_02.png",
        "thumbSrc": "/assets/props/thumbs/med2_fish_02.png",
        "forType": "provisions"
    },
    {
        "id": "med2_fish_03",
        "name": "Cá Biển Tươi Roi Rói Đánh Bắt",
        "src": "/assets/props/items/med2_fish_03.png",
        "thumbSrc": "/assets/props/thumbs/med2_fish_03.png",
        "forType": "provisions"
    },
    {
        "id": "med2_fish_04",
        "name": "Cá Khô Nướng Than Dự Trữ",
        "src": "/assets/props/items/med2_fish_04.png",
        "thumbSrc": "/assets/props/thumbs/med2_fish_04.png",
        "forType": "provisions"
    },
    {
        "id": "med2_fish_05",
        "name": "Mực Ống Nướng Muối Ớt",
        "src": "/assets/props/items/med2_fish_05.png",
        "thumbSrc": "/assets/props/thumbs/med2_fish_05.png",
        "forType": "provisions"
    },
    {
        "id": "med2_fish_06",
        "name": "Tôm Sông Nướng Que Tre",
        "src": "/assets/props/items/med2_fish_06.png",
        "thumbSrc": "/assets/props/thumbs/med2_fish_06.png",
        "forType": "provisions"
    },
    {
        "id": "med2_fish_07",
        "name": "Cá Trích Ngâm Dầu Oliu",
        "src": "/assets/props/items/med2_fish_07.png",
        "thumbSrc": "/assets/props/thumbs/med2_fish_07.png",
        "forType": "provisions"
    },
    {
        "id": "med2_fish_08",
        "name": "Cá Chép Om Dưa Nóng Hổi",
        "src": "/assets/props/items/med2_fish_08.png",
        "thumbSrc": "/assets/props/thumbs/med2_fish_08.png",
        "forType": "provisions"
    },
    {
        "id": "med2_fish_09",
        "name": "Cá Rán Giòn Vảy Vàng",
        "src": "/assets/props/items/med2_fish_09.png",
        "thumbSrc": "/assets/props/thumbs/med2_fish_09.png",
        "forType": "provisions"
    },
    {
        "id": "med2_fish_10",
        "name": "Cá Thu Hun Khói Thơm Ngon",
        "src": "/assets/props/items/med2_fish_10.png",
        "thumbSrc": "/assets/props/thumbs/med2_fish_10.png",
        "forType": "provisions"
    },
    {
        "id": "med2_fish_11",
        "name": "Cá Trắm Đen Kho Nồi Đất",
        "src": "/assets/props/items/med2_fish_11.png",
        "thumbSrc": "/assets/props/thumbs/med2_fish_11.png",
        "forType": "provisions"
    },
    {
        "id": "med2_fish_12",
        "name": "Cá Biển Nướng Giấy Bạc",
        "src": "/assets/props/items/med2_fish_12.png",
        "thumbSrc": "/assets/props/thumbs/med2_fish_12.png",
        "forType": "provisions"
    },
    {
        "id": "med2_fish_13",
        "name": "med2_fish #13",
        "src": "/assets/props/items/med2_fish_13.png",
        "thumbSrc": "/assets/props/thumbs/med2_fish_13.png",
        "forType": "provisions"
    },
    {
        "id": "med2_fish_14",
        "name": "med2_fish #14",
        "src": "/assets/props/items/med2_fish_14.png",
        "thumbSrc": "/assets/props/thumbs/med2_fish_14.png",
        "forType": "provisions"
    },
    {
        "id": "med2_fish_15",
        "name": "med2_fish #15",
        "src": "/assets/props/items/med2_fish_15.png",
        "thumbSrc": "/assets/props/thumbs/med2_fish_15.png",
        "forType": "provisions"
    },
    {
        "id": "med2_fish_16",
        "name": "med2_fish #16",
        "src": "/assets/props/items/med2_fish_16.png",
        "thumbSrc": "/assets/props/thumbs/med2_fish_16.png",
        "forType": "provisions"
    },
    {
        "id": "med2_cheese_01",
        "name": "Bánh Phô Mai Thụy Sĩ Thơm Béo Lỗ Khí",
        "src": "/assets/props/items/med2_cheese_01.png",
        "thumbSrc": "/assets/props/thumbs/med2_cheese_01.png",
        "forType": "provisions"
    },
    {
        "id": "med2_cheese_02",
        "name": "Miếng Phô Mai Vàng Cheddar Đậm Vị",
        "src": "/assets/props/items/med2_cheese_02.png",
        "thumbSrc": "/assets/props/thumbs/med2_cheese_02.png",
        "forType": "provisions"
    },
    {
        "id": "med2_cheese_03",
        "name": "Khối Bơ Sữa Tươi Vàng Óng",
        "src": "/assets/props/items/med2_cheese_03.png",
        "thumbSrc": "/assets/props/thumbs/med2_cheese_03.png",
        "forType": "provisions"
    },
    {
        "id": "med2_cheese_04",
        "name": "Bánh Phô Mai Dê Núi Lâu Năm",
        "src": "/assets/props/items/med2_cheese_04.png",
        "thumbSrc": "/assets/props/thumbs/med2_cheese_04.png",
        "forType": "provisions"
    },
    {
        "id": "med2_cheese_05",
        "name": "Phô Mai Mốc Xanh Thượng Hạng",
        "src": "/assets/props/items/med2_cheese_05.png",
        "thumbSrc": "/assets/props/thumbs/med2_cheese_05.png",
        "forType": "provisions"
    },
    {
        "id": "med2_cheese_06",
        "name": "Bánh Phô Mai Tròn Bọc Sáp Đỏ",
        "src": "/assets/props/items/med2_cheese_06.png",
        "thumbSrc": "/assets/props/thumbs/med2_cheese_06.png",
        "forType": "provisions"
    },
    {
        "id": "med2_cheese_07",
        "name": "Miếng Phô Mai Tươi Mềm Mại",
        "src": "/assets/props/items/med2_cheese_07.png",
        "thumbSrc": "/assets/props/thumbs/med2_cheese_07.png",
        "forType": "provisions"
    },
    {
        "id": "med2_cheese_08",
        "name": "Hũ Kem Sữa Béo Ngậy Đánh Bông",
        "src": "/assets/props/items/med2_cheese_08.png",
        "thumbSrc": "/assets/props/thumbs/med2_cheese_08.png",
        "forType": "provisions"
    },
    {
        "id": "med2_cheese_09",
        "name": "Bơ Tươi Phết Bánh Mì",
        "src": "/assets/props/items/med2_cheese_09.png",
        "thumbSrc": "/assets/props/thumbs/med2_cheese_09.png",
        "forType": "provisions"
    },
    {
        "id": "med2_cheese_10",
        "name": "Phô Mai Hun Khói Kiểu Bắc Âu",
        "src": "/assets/props/items/med2_cheese_10.png",
        "thumbSrc": "/assets/props/thumbs/med2_cheese_10.png",
        "forType": "provisions"
    },
    {
        "id": "med2_cheese_11",
        "name": "Bánh Phô Mai Cắt Miếng Tam Giác",
        "src": "/assets/props/items/med2_cheese_11.png",
        "thumbSrc": "/assets/props/thumbs/med2_cheese_11.png",
        "forType": "provisions"
    },
    {
        "id": "med2_cheese_12",
        "name": "Phô Mai Nướng Chảy Thơm Lừng",
        "src": "/assets/props/items/med2_cheese_12.png",
        "thumbSrc": "/assets/props/thumbs/med2_cheese_12.png",
        "forType": "provisions"
    },
    {
        "id": "med2_cheese_13",
        "name": "med2_cheese #13",
        "src": "/assets/props/items/med2_cheese_13.png",
        "thumbSrc": "/assets/props/thumbs/med2_cheese_13.png",
        "forType": "provisions"
    },
    {
        "id": "med2_cheese_14",
        "name": "med2_cheese #14",
        "src": "/assets/props/items/med2_cheese_14.png",
        "thumbSrc": "/assets/props/thumbs/med2_cheese_14.png",
        "forType": "provisions"
    },
    {
        "id": "med2_cheese_15",
        "name": "med2_cheese #15",
        "src": "/assets/props/items/med2_cheese_15.png",
        "thumbSrc": "/assets/props/thumbs/med2_cheese_15.png",
        "forType": "provisions"
    },
    {
        "id": "med2_cheese_16",
        "name": "med2_cheese #16",
        "src": "/assets/props/items/med2_cheese_16.png",
        "thumbSrc": "/assets/props/thumbs/med2_cheese_16.png",
        "forType": "provisions"
    },
    {
        "id": "med2_pie_01",
        "name": "Bánh Pie Nướng Nhân Thịt Bò Đậm Đà",
        "src": "/assets/props/items/med2_pie_01.png",
        "thumbSrc": "/assets/props/thumbs/med2_pie_01.png",
        "forType": "provisions"
    },
    {
        "id": "med2_pie_02",
        "name": "Bánh Tart Quả Mọng Dâu Rừng",
        "src": "/assets/props/items/med2_pie_02.png",
        "thumbSrc": "/assets/props/thumbs/med2_pie_02.png",
        "forType": "provisions"
    },
    {
        "id": "med2_pie_03",
        "name": "Bánh Kem Hoàng Gia Nướng Men",
        "src": "/assets/props/items/med2_pie_03.png",
        "thumbSrc": "/assets/props/thumbs/med2_pie_03.png",
        "forType": "provisions"
    },
    {
        "id": "med2_pie_04",
        "name": "Bánh Bông Lan Trứng Nướng Xốp",
        "src": "/assets/props/items/med2_pie_04.png",
        "thumbSrc": "/assets/props/thumbs/med2_pie_04.png",
        "forType": "provisions"
    },
    {
        "id": "med2_pie_05",
        "name": "Bánh Pie Táo Quế Thơm Lừng",
        "src": "/assets/props/items/med2_pie_05.png",
        "thumbSrc": "/assets/props/thumbs/med2_pie_05.png",
        "forType": "provisions"
    },
    {
        "id": "med2_pie_06",
        "name": "Bánh Ngọt Nhân Hạt Dẻ Cung Đình",
        "src": "/assets/props/items/med2_pie_06.png",
        "thumbSrc": "/assets/props/thumbs/med2_pie_06.png",
        "forType": "provisions"
    },
    {
        "id": "med2_pie_07",
        "name": "Bánh Mì Nướng Phủ Đường Mật",
        "src": "/assets/props/items/med2_pie_07.png",
        "thumbSrc": "/assets/props/thumbs/med2_pie_07.png",
        "forType": "provisions"
    },
    {
        "id": "med2_pie_08",
        "name": "Bánh Nướng Nhân Cá Hồi Phô Mai",
        "src": "/assets/props/items/med2_pie_08.png",
        "thumbSrc": "/assets/props/thumbs/med2_pie_08.png",
        "forType": "provisions"
    },
    {
        "id": "med2_pie_09",
        "name": "Bánh Pie Bí Ngô Mùa Thu",
        "src": "/assets/props/items/med2_pie_09.png",
        "thumbSrc": "/assets/props/thumbs/med2_pie_09.png",
        "forType": "provisions"
    },
    {
        "id": "med2_pie_10",
        "name": "Bánh Tart Chanh Vàng Thanh Mát",
        "src": "/assets/props/items/med2_pie_10.png",
        "thumbSrc": "/assets/props/thumbs/med2_pie_10.png",
        "forType": "provisions"
    },
    {
        "id": "med2_pie_11",
        "name": "Bánh Cuộn Kem Mứt Trái Cây",
        "src": "/assets/props/items/med2_pie_11.png",
        "thumbSrc": "/assets/props/thumbs/med2_pie_11.png",
        "forType": "provisions"
    },
    {
        "id": "med2_pie_12",
        "name": "Bánh Nướng Men Bơ Ngon Ngọt",
        "src": "/assets/props/items/med2_pie_12.png",
        "thumbSrc": "/assets/props/thumbs/med2_pie_12.png",
        "forType": "provisions"
    },
    {
        "id": "med2_pie_13",
        "name": "med2_pie #13",
        "src": "/assets/props/items/med2_pie_13.png",
        "thumbSrc": "/assets/props/thumbs/med2_pie_13.png",
        "forType": "provisions"
    },
    {
        "id": "med2_pie_14",
        "name": "med2_pie #14",
        "src": "/assets/props/items/med2_pie_14.png",
        "thumbSrc": "/assets/props/thumbs/med2_pie_14.png",
        "forType": "provisions"
    },
    {
        "id": "med2_pie_15",
        "name": "med2_pie #15",
        "src": "/assets/props/items/med2_pie_15.png",
        "thumbSrc": "/assets/props/thumbs/med2_pie_15.png",
        "forType": "provisions"
    },
    {
        "id": "med2_pie_16",
        "name": "med2_pie #16",
        "src": "/assets/props/items/med2_pie_16.png",
        "thumbSrc": "/assets/props/thumbs/med2_pie_16.png",
        "forType": "provisions"
    },
    {
        "id": "med2_fruit_01",
        "name": "Chùm Nho Đỏ Mọng Rượu Vang",
        "src": "/assets/props/items/med2_fruit_01.png",
        "thumbSrc": "/assets/props/thumbs/med2_fruit_01.png",
        "forType": "provisions"
    },
    {
        "id": "med2_fruit_02",
        "name": "Quả Táo Đỏ Rừng Tươi Ngọt",
        "src": "/assets/props/items/med2_fruit_02.png",
        "thumbSrc": "/assets/props/thumbs/med2_fruit_02.png",
        "forType": "provisions"
    },
    {
        "id": "med2_fruit_03",
        "name": "Quả Lê Vàng Mọng Nước Ngọt Mát",
        "src": "/assets/props/items/med2_fruit_03.png",
        "thumbSrc": "/assets/props/thumbs/med2_fruit_03.png",
        "forType": "provisions"
    },
    {
        "id": "med2_fruit_04",
        "name": "Chùm Nho Xanh Quán Trọ",
        "src": "/assets/props/items/med2_fruit_04.png",
        "thumbSrc": "/assets/props/thumbs/med2_fruit_04.png",
        "forType": "provisions"
    },
    {
        "id": "med2_fruit_05",
        "name": "Quả Bí Ngô Vàng Mùa Thu Hoạch",
        "src": "/assets/props/items/med2_fruit_05.png",
        "thumbSrc": "/assets/props/thumbs/med2_fruit_05.png",
        "forType": "provisions"
    },
    {
        "id": "med2_fruit_06",
        "name": "Chùm Dâu Rừng Tươi Hái Sớm",
        "src": "/assets/props/items/med2_fruit_06.png",
        "thumbSrc": "/assets/props/thumbs/med2_fruit_06.png",
        "forType": "provisions"
    },
    {
        "id": "med2_fruit_07",
        "name": "Quả Mận Đen Chín Ngọt Đậm",
        "src": "/assets/props/items/med2_fruit_07.png",
        "thumbSrc": "/assets/props/thumbs/med2_fruit_07.png",
        "forType": "provisions"
    },
    {
        "id": "med2_fruit_08",
        "name": "Quả Đào Hồng Mọng Lông Tơ",
        "src": "/assets/props/items/med2_fruit_08.png",
        "thumbSrc": "/assets/props/thumbs/med2_fruit_08.png",
        "forType": "provisions"
    },
    {
        "id": "med2_fruit_09",
        "name": "Quả Lựu Đỏ Hạt Ngọc Long Lanh",
        "src": "/assets/props/items/med2_fruit_09.png",
        "thumbSrc": "/assets/props/thumbs/med2_fruit_09.png",
        "forType": "provisions"
    },
    {
        "id": "med2_fruit_10",
        "name": "Quả Dưa Lưới Thơm Mát Ngọt Lịm",
        "src": "/assets/props/items/med2_fruit_10.png",
        "thumbSrc": "/assets/props/thumbs/med2_fruit_10.png",
        "forType": "provisions"
    },
    {
        "id": "med2_fruit_11",
        "name": "Chùm Quả Mọng Đen Núi Cao",
        "src": "/assets/props/items/med2_fruit_11.png",
        "thumbSrc": "/assets/props/thumbs/med2_fruit_11.png",
        "forType": "provisions"
    },
    {
        "id": "med2_fruit_12",
        "name": "Quả Sung Mật Vàng Ươm",
        "src": "/assets/props/items/med2_fruit_12.png",
        "thumbSrc": "/assets/props/thumbs/med2_fruit_12.png",
        "forType": "provisions"
    },
    {
        "id": "med2_fruit_13",
        "name": "med2_fruit #13",
        "src": "/assets/props/items/med2_fruit_13.png",
        "thumbSrc": "/assets/props/thumbs/med2_fruit_13.png",
        "forType": "provisions"
    },
    {
        "id": "med2_fruit_14",
        "name": "med2_fruit #14",
        "src": "/assets/props/items/med2_fruit_14.png",
        "thumbSrc": "/assets/props/thumbs/med2_fruit_14.png",
        "forType": "provisions"
    },
    {
        "id": "med2_fruit_15",
        "name": "med2_fruit #15",
        "src": "/assets/props/items/med2_fruit_15.png",
        "thumbSrc": "/assets/props/thumbs/med2_fruit_15.png",
        "forType": "provisions"
    },
    {
        "id": "med2_fruit_16",
        "name": "med2_fruit #16",
        "src": "/assets/props/items/med2_fruit_16.png",
        "thumbSrc": "/assets/props/thumbs/med2_fruit_16.png",
        "forType": "provisions"
    },
    {
        "id": "med2_veg_01",
        "name": "Củ Cà Rốt Tươi Giòn Ngọt",
        "src": "/assets/props/items/med2_veg_01.png",
        "thumbSrc": "/assets/props/thumbs/med2_veg_01.png",
        "forType": "provisions"
    },
    {
        "id": "med2_veg_02",
        "name": "Cây Tỏi Tây Gia Vị Dài Mượt",
        "src": "/assets/props/items/med2_veg_02.png",
        "thumbSrc": "/assets/props/thumbs/med2_veg_02.png",
        "forType": "provisions"
    },
    {
        "id": "med2_veg_03",
        "name": "Bắp Cải Tròn Cuộn Chặt Tươi Xanh",
        "src": "/assets/props/items/med2_veg_03.png",
        "thumbSrc": "/assets/props/thumbs/med2_veg_03.png",
        "forType": "provisions"
    },
    {
        "id": "med2_veg_04",
        "name": "Củ Hành Tây Vàng Bọc Vỏ Mỏng",
        "src": "/assets/props/items/med2_veg_04.png",
        "thumbSrc": "/assets/props/thumbs/med2_veg_04.png",
        "forType": "provisions"
    },
    {
        "id": "med2_veg_05",
        "name": "Củ Khoai Tây Đào Từ Lòng Đất",
        "src": "/assets/props/items/med2_veg_05.png",
        "thumbSrc": "/assets/props/thumbs/med2_veg_05.png",
        "forType": "provisions"
    },
    {
        "id": "med2_veg_06",
        "name": "Củ Cải Đỏ Tròn Xoe Tươi Sạch",
        "src": "/assets/props/items/med2_veg_06.png",
        "thumbSrc": "/assets/props/thumbs/med2_veg_06.png",
        "forType": "provisions"
    },
    {
        "id": "med2_veg_07",
        "name": "Bó Măng Tây Xanh Non Thượng Hạng",
        "src": "/assets/props/items/med2_veg_07.png",
        "thumbSrc": "/assets/props/thumbs/med2_veg_07.png",
        "forType": "provisions"
    },
    {
        "id": "med2_veg_08",
        "name": "Quả Cà Tím Dài Mượt Mà",
        "src": "/assets/props/items/med2_veg_08.png",
        "thumbSrc": "/assets/props/thumbs/med2_veg_08.png",
        "forType": "provisions"
    },
    {
        "id": "med2_veg_09",
        "name": "Củ Cải Trắng Giòn Ngọt Mát",
        "src": "/assets/props/items/med2_veg_09.png",
        "thumbSrc": "/assets/props/thumbs/med2_veg_09.png",
        "forType": "provisions"
    },
    {
        "id": "med2_veg_10",
        "name": "Bắp Ngô Nếp Vàng Hạt Đều",
        "src": "/assets/props/items/med2_veg_10.png",
        "thumbSrc": "/assets/props/thumbs/med2_veg_10.png",
        "forType": "provisions"
    },
    {
        "id": "med2_veg_11",
        "name": "Rổ Đậu Hà Lan Tươi Hái Sớm",
        "src": "/assets/props/items/med2_veg_11.png",
        "thumbSrc": "/assets/props/thumbs/med2_veg_11.png",
        "forType": "provisions"
    },
    {
        "id": "med2_veg_12",
        "name": "Bó Cải Xanh Vườn Lâu Đài",
        "src": "/assets/props/items/med2_veg_12.png",
        "thumbSrc": "/assets/props/thumbs/med2_veg_12.png",
        "forType": "provisions"
    },
    {
        "id": "med2_veg_13",
        "name": "med2_veg #13",
        "src": "/assets/props/items/med2_veg_13.png",
        "thumbSrc": "/assets/props/thumbs/med2_veg_13.png",
        "forType": "provisions"
    },
    {
        "id": "med2_veg_14",
        "name": "med2_veg #14",
        "src": "/assets/props/items/med2_veg_14.png",
        "thumbSrc": "/assets/props/thumbs/med2_veg_14.png",
        "forType": "provisions"
    },
    {
        "id": "med2_veg_15",
        "name": "med2_veg #15",
        "src": "/assets/props/items/med2_veg_15.png",
        "thumbSrc": "/assets/props/thumbs/med2_veg_15.png",
        "forType": "provisions"
    },
    {
        "id": "med2_veg_16",
        "name": "med2_veg #16",
        "src": "/assets/props/items/med2_veg_16.png",
        "thumbSrc": "/assets/props/thumbs/med2_veg_16.png",
        "forType": "provisions"
    },
    {
        "id": "med2_beer_01",
        "name": "Ly Bia Bơ Bọt Tuyết Quán Trọ",
        "src": "/assets/props/items/med2_beer_01.png",
        "thumbSrc": "/assets/props/thumbs/med2_beer_01.png",
        "forType": "provisions"
    },
    {
        "id": "med2_beer_02",
        "name": "Cốc Rượu Mật Ong Mead Gỗ Sồi",
        "src": "/assets/props/items/med2_beer_02.png",
        "thumbSrc": "/assets/props/thumbs/med2_beer_02.png",
        "forType": "provisions"
    },
    {
        "id": "med2_beer_03",
        "name": "Vại Bia Men Lúa Mạch Cầm Tay",
        "src": "/assets/props/items/med2_beer_03.png",
        "thumbSrc": "/assets/props/thumbs/med2_beer_03.png",
        "forType": "provisions"
    },
    {
        "id": "med2_beer_04",
        "name": "Ly Bia Đen Nặng Độ Đậm Vị",
        "src": "/assets/props/items/med2_beer_04.png",
        "thumbSrc": "/assets/props/thumbs/med2_beer_04.png",
        "forType": "provisions"
    },
    {
        "id": "med2_beer_05",
        "name": "Cốc Rượu Men Trắng Lên Men",
        "src": "/assets/props/items/med2_beer_05.png",
        "thumbSrc": "/assets/props/thumbs/med2_beer_05.png",
        "forType": "provisions"
    },
    {
        "id": "med2_beer_06",
        "name": "Vại Rượu Chiến Binh Bọc Sắt",
        "src": "/assets/props/items/med2_beer_06.png",
        "thumbSrc": "/assets/props/thumbs/med2_beer_06.png",
        "forType": "provisions"
    },
    {
        "id": "med2_beer_07",
        "name": "Bình Rượu Táo Đục Bọt Lăn Tăn",
        "src": "/assets/props/items/med2_beer_07.png",
        "thumbSrc": "/assets/props/thumbs/med2_beer_07.png",
        "forType": "provisions"
    },
    {
        "id": "med2_beer_08",
        "name": "Ly Bia Vàng Ánh Kim Sủi Bọt",
        "src": "/assets/props/items/med2_beer_08.png",
        "thumbSrc": "/assets/props/thumbs/med2_beer_08.png",
        "forType": "provisions"
    },
    {
        "id": "med2_beer_09",
        "name": "Cốc Sứ Uống Bia Quán Trọ Cổ",
        "src": "/assets/props/items/med2_beer_09.png",
        "thumbSrc": "/assets/props/thumbs/med2_beer_09.png",
        "forType": "provisions"
    },
    {
        "id": "med2_beer_10",
        "name": "Vại Bia Đôi Cho Khách Lữ Hành",
        "src": "/assets/props/items/med2_beer_10.png",
        "thumbSrc": "/assets/props/thumbs/med2_beer_10.png",
        "forType": "provisions"
    },
    {
        "id": "med2_beer_11",
        "name": "Ly Rượu Rừng Hạt Dẻ Đậm Đà",
        "src": "/assets/props/items/med2_beer_11.png",
        "thumbSrc": "/assets/props/thumbs/med2_beer_11.png",
        "forType": "provisions"
    },
    {
        "id": "med2_beer_12",
        "name": "Cốc Men Lúa Mì Thanh Mát",
        "src": "/assets/props/items/med2_beer_12.png",
        "thumbSrc": "/assets/props/thumbs/med2_beer_12.png",
        "forType": "provisions"
    },
    {
        "id": "med2_beer_13",
        "name": "med2_beer #13",
        "src": "/assets/props/items/med2_beer_13.png",
        "thumbSrc": "/assets/props/thumbs/med2_beer_13.png",
        "forType": "provisions"
    },
    {
        "id": "med2_beer_14",
        "name": "med2_beer #14",
        "src": "/assets/props/items/med2_beer_14.png",
        "thumbSrc": "/assets/props/thumbs/med2_beer_14.png",
        "forType": "provisions"
    },
    {
        "id": "med2_beer_15",
        "name": "med2_beer #15",
        "src": "/assets/props/items/med2_beer_15.png",
        "thumbSrc": "/assets/props/thumbs/med2_beer_15.png",
        "forType": "provisions"
    },
    {
        "id": "med2_beer_16",
        "name": "med2_beer #16",
        "src": "/assets/props/items/med2_beer_16.png",
        "thumbSrc": "/assets/props/thumbs/med2_beer_16.png",
        "forType": "provisions"
    },
    {
        "id": "med2_wine_01",
        "name": "Bình Rượu Vang Đỏ Thượng Hạng",
        "src": "/assets/props/items/med2_wine_01.png",
        "thumbSrc": "/assets/props/thumbs/med2_wine_01.png",
        "forType": "provisions"
    },
    {
        "id": "med2_wine_02",
        "name": "Chai Rượu Vang Cổ Niêm Sáp",
        "src": "/assets/props/items/med2_wine_02.png",
        "thumbSrc": "/assets/props/thumbs/med2_wine_02.png",
        "forType": "provisions"
    },
    {
        "id": "med2_wine_03",
        "name": "Ly Thủy Tinh Vang Đỏ Long Lanh",
        "src": "/assets/props/items/med2_wine_03.png",
        "thumbSrc": "/assets/props/thumbs/med2_wine_03.png",
        "forType": "provisions"
    },
    {
        "id": "med2_wine_04",
        "name": "Bình Rượu Vang Trắng Thanh Tao",
        "src": "/assets/props/items/med2_wine_04.png",
        "thumbSrc": "/assets/props/thumbs/med2_wine_04.png",
        "forType": "provisions"
    },
    {
        "id": "med2_wine_05",
        "name": "Vò Rượu Vang Đất Nung Ủ Hầm",
        "src": "/assets/props/items/med2_wine_05.png",
        "thumbSrc": "/assets/props/thumbs/med2_wine_05.png",
        "forType": "provisions"
    },
    {
        "id": "med2_wine_06",
        "name": "Chai Rượu Vang Nho Hoàng Gia",
        "src": "/assets/props/items/med2_wine_06.png",
        "thumbSrc": "/assets/props/thumbs/med2_wine_06.png",
        "forType": "provisions"
    },
    {
        "id": "med2_wine_07",
        "name": "Ly Pha Lê Rượu Vang Cung Đình",
        "src": "/assets/props/items/med2_wine_07.png",
        "thumbSrc": "/assets/props/thumbs/med2_wine_07.png",
        "forType": "provisions"
    },
    {
        "id": "med2_wine_08",
        "name": "Bình Rượu Vang Ngọt Sa Mạc",
        "src": "/assets/props/items/med2_wine_08.png",
        "thumbSrc": "/assets/props/thumbs/med2_wine_08.png",
        "forType": "provisions"
    },
    {
        "id": "med2_wine_09",
        "name": "Chai Rượu Vang Nổ Sủi Bọt",
        "src": "/assets/props/items/med2_wine_09.png",
        "thumbSrc": "/assets/props/thumbs/med2_wine_09.png",
        "forType": "provisions"
    },
    {
        "id": "med2_wine_10",
        "name": "Vò Rượu Rơm Ủ Dưới Lòng Đất",
        "src": "/assets/props/items/med2_wine_10.png",
        "thumbSrc": "/assets/props/thumbs/med2_wine_10.png",
        "forType": "provisions"
    },
    {
        "id": "med2_wine_11",
        "name": "Bình Thủy Tinh Rượu Thảo Dược",
        "src": "/assets/props/items/med2_wine_11.png",
        "thumbSrc": "/assets/props/thumbs/med2_wine_11.png",
        "forType": "provisions"
    },
    {
        "id": "med2_wine_12",
        "name": "Chai Rượu Vang Hảo Hạng Lâu Năm",
        "src": "/assets/props/items/med2_wine_12.png",
        "thumbSrc": "/assets/props/thumbs/med2_wine_12.png",
        "forType": "provisions"
    },
    {
        "id": "med2_wine_13",
        "name": "med2_wine #13",
        "src": "/assets/props/items/med2_wine_13.png",
        "thumbSrc": "/assets/props/thumbs/med2_wine_13.png",
        "forType": "provisions"
    },
    {
        "id": "med2_wine_14",
        "name": "med2_wine #14",
        "src": "/assets/props/items/med2_wine_14.png",
        "thumbSrc": "/assets/props/thumbs/med2_wine_14.png",
        "forType": "provisions"
    },
    {
        "id": "med2_wine_15",
        "name": "med2_wine #15",
        "src": "/assets/props/items/med2_wine_15.png",
        "thumbSrc": "/assets/props/thumbs/med2_wine_15.png",
        "forType": "provisions"
    },
    {
        "id": "med2_wine_16",
        "name": "med2_wine #16",
        "src": "/assets/props/items/med2_wine_16.png",
        "thumbSrc": "/assets/props/thumbs/med2_wine_16.png",
        "forType": "provisions"
    },
    {
        "id": "med2_pot_01",
        "name": "Nồi Vạc Đồng Đun Súp Nóng",
        "src": "/assets/props/items/med2_pot_01.png",
        "thumbSrc": "/assets/props/thumbs/med2_pot_01.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med2_pot_02",
        "name": "Ấm Đun Nước Bằng Đồng Thau",
        "src": "/assets/props/items/med2_pot_02.png",
        "thumbSrc": "/assets/props/thumbs/med2_pot_02.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med2_pot_03",
        "name": "Chảo Gang Nướng Thịt Tay Dài",
        "src": "/assets/props/items/med2_pot_03.png",
        "thumbSrc": "/assets/props/thumbs/med2_pot_03.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med2_pot_04",
        "name": "Nồi Đất Nung Kho Thịt Cổ",
        "src": "/assets/props/items/med2_pot_04.png",
        "thumbSrc": "/assets/props/thumbs/med2_pot_04.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med2_pot_05",
        "name": "Cái Chày Cối Đá Giã Tiêu",
        "src": "/assets/props/items/med2_pot_05.png",
        "thumbSrc": "/assets/props/thumbs/med2_pot_05.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med2_pot_06",
        "name": "Cái Muôi Đồng Múc Canh Dài",
        "src": "/assets/props/items/med2_pot_06.png",
        "thumbSrc": "/assets/props/thumbs/med2_pot_06.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med2_pot_07",
        "name": "Rổ Đựng Bánh Mì Bằng Nan Tre",
        "src": "/assets/props/items/med2_pot_07.png",
        "thumbSrc": "/assets/props/thumbs/med2_pot_07.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med2_pot_08",
        "name": "Ấm Trà Thủy Tinh Cung Đình",
        "src": "/assets/props/items/med2_pot_08.png",
        "thumbSrc": "/assets/props/thumbs/med2_pot_08.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med2_pot_09",
        "name": "Chảo Đáy Sâu Xào Nấu Bếp",
        "src": "/assets/props/items/med2_pot_09.png",
        "thumbSrc": "/assets/props/thumbs/med2_pot_09.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med2_pot_10",
        "name": "Thùng Gỗ Múc Nước Có Quai",
        "src": "/assets/props/items/med2_pot_10.png",
        "thumbSrc": "/assets/props/thumbs/med2_pot_10.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med2_pot_11",
        "name": "Bình Gốm Đựng Dầu Oliu",
        "src": "/assets/props/items/med2_pot_11.png",
        "thumbSrc": "/assets/props/thumbs/med2_pot_11.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med2_pot_12",
        "name": "Dao Bếp Bản Lớn Thép Tôi",
        "src": "/assets/props/items/med2_pot_12.png",
        "thumbSrc": "/assets/props/thumbs/med2_pot_12.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med2_pot_13",
        "name": "med2_pot #13",
        "src": "/assets/props/items/med2_pot_13.png",
        "thumbSrc": "/assets/props/thumbs/med2_pot_13.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med2_pot_14",
        "name": "med2_pot #14",
        "src": "/assets/props/items/med2_pot_14.png",
        "thumbSrc": "/assets/props/thumbs/med2_pot_14.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med2_pot_15",
        "name": "med2_pot #15",
        "src": "/assets/props/items/med2_pot_15.png",
        "thumbSrc": "/assets/props/thumbs/med2_pot_15.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med2_pot_16",
        "name": "med2_pot #16",
        "src": "/assets/props/items/med2_pot_16.png",
        "thumbSrc": "/assets/props/thumbs/med2_pot_16.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med2_pot_17",
        "name": "med2_pot #17",
        "src": "/assets/props/items/med2_pot_17.png",
        "thumbSrc": "/assets/props/thumbs/med2_pot_17.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med2_pot_18",
        "name": "med2_pot #18",
        "src": "/assets/props/items/med2_pot_18.png",
        "thumbSrc": "/assets/props/thumbs/med2_pot_18.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med2_pot_19",
        "name": "med2_pot #19",
        "src": "/assets/props/items/med2_pot_19.png",
        "thumbSrc": "/assets/props/thumbs/med2_pot_19.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med2_pot_20",
        "name": "med2_pot #20",
        "src": "/assets/props/items/med2_pot_20.png",
        "thumbSrc": "/assets/props/thumbs/med2_pot_20.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med2_pot_21",
        "name": "med2_pot #21",
        "src": "/assets/props/items/med2_pot_21.png",
        "thumbSrc": "/assets/props/thumbs/med2_pot_21.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med2_pot_22",
        "name": "med2_pot #22",
        "src": "/assets/props/items/med2_pot_22.png",
        "thumbSrc": "/assets/props/thumbs/med2_pot_22.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med6_crate_01",
        "name": "Thùng Gỗ Sồi Ủ Rượu Lâu Năm",
        "src": "/assets/props/items/med6_crate_01.png",
        "thumbSrc": "/assets/props/thumbs/med6_crate_01.png",
        "forType": "chests_storage"
    },
    {
        "id": "med6_crate_02",
        "name": "Hòm Gỗ Chứa Quân Nhu Buộc Dây",
        "src": "/assets/props/items/med6_crate_02.png",
        "thumbSrc": "/assets/props/thumbs/med6_crate_02.png",
        "forType": "chests_storage"
    },
    {
        "id": "med6_crate_03",
        "name": "Bao Tải Bột Mì Đầy Ắp",
        "src": "/assets/props/items/med6_crate_03.png",
        "thumbSrc": "/assets/props/thumbs/med6_crate_03.png",
        "forType": "chests_storage"
    },
    {
        "id": "med6_crate_04",
        "name": "Thùng Nước Ngọt Bằng Gỗ Bọc Sắt",
        "src": "/assets/props/items/med6_crate_04.png",
        "thumbSrc": "/assets/props/thumbs/med6_crate_04.png",
        "forType": "chests_storage"
    },
    {
        "id": "med6_crate_05",
        "name": "Hòm Gỗ Khắc Chữ Hàng Hóa",
        "src": "/assets/props/items/med6_crate_05.png",
        "thumbSrc": "/assets/props/thumbs/med6_crate_05.png",
        "forType": "chests_storage"
    },
    {
        "id": "med6_crate_06",
        "name": "Thùng Gỗ Đựng Cá Muối Đi Biển",
        "src": "/assets/props/items/med6_crate_06.png",
        "thumbSrc": "/assets/props/thumbs/med6_crate_06.png",
        "forType": "chests_storage"
    },
    {
        "id": "med6_crate_07",
        "name": "Bao Tải Ngũ Cốc Thu Hoạch",
        "src": "/assets/props/items/med6_crate_07.png",
        "thumbSrc": "/assets/props/thumbs/med6_crate_07.png",
        "forType": "chests_storage"
    },
    {
        "id": "med6_crate_08",
        "name": "Vò Gốm Cổ Niêm Phong Nắp Đậy",
        "src": "/assets/props/items/med6_crate_08.png",
        "thumbSrc": "/assets/props/thumbs/med6_crate_08.png",
        "forType": "chests_storage"
    },
    {
        "id": "med6_crate_09",
        "name": "Hòm Gỗ Xếp Chồng Hàng Hải",
        "src": "/assets/props/items/med6_crate_09.png",
        "thumbSrc": "/assets/props/thumbs/med6_crate_09.png",
        "forType": "chests_storage"
    },
    {
        "id": "med6_crate_10",
        "name": "Thùng Rượu Nhỏ Có Vòi Rót",
        "src": "/assets/props/items/med6_crate_10.png",
        "thumbSrc": "/assets/props/thumbs/med6_crate_10.png",
        "forType": "chests_storage"
    },
    {
        "id": "med6_crate_11",
        "name": "Bao Da Chứa Lương Thảo",
        "src": "/assets/props/items/med6_crate_11.png",
        "thumbSrc": "/assets/props/thumbs/med6_crate_11.png",
        "forType": "chests_storage"
    },
    {
        "id": "med6_crate_12",
        "name": "Thùng Gỗ Đựng Đinh Sắt Thợ Rèn",
        "src": "/assets/props/items/med6_crate_12.png",
        "thumbSrc": "/assets/props/thumbs/med6_crate_12.png",
        "forType": "chests_storage"
    },
    {
        "id": "med6_crate_13",
        "name": "med6_crate #13",
        "src": "/assets/props/items/med6_crate_13.png",
        "thumbSrc": "/assets/props/thumbs/med6_crate_13.png",
        "forType": "chests_storage"
    },
    {
        "id": "med6_chest_01",
        "name": "Rương Gỗ Sồi Viền Đai Sắt Chắc Chắn",
        "src": "/assets/props/items/med6_chest_01.png",
        "thumbSrc": "/assets/props/thumbs/med6_chest_01.png",
        "forType": "chests_storage"
    },
    {
        "id": "med6_chest_02",
        "name": "Rương Sắt Đúc Hầm Ngục Khóa Nặng",
        "src": "/assets/props/items/med6_chest_02.png",
        "thumbSrc": "/assets/props/thumbs/med6_chest_02.png",
        "forType": "chests_storage"
    },
    {
        "id": "med6_chest_03",
        "name": "Rương Gỗ Mở Hé Ánh Kim Quang",
        "src": "/assets/props/items/med6_chest_03.png",
        "thumbSrc": "/assets/props/thumbs/med6_chest_03.png",
        "forType": "chests_storage"
    },
    {
        "id": "med6_chest_04",
        "name": "Rương Hoàng Kim Nạm Ngọc Quý",
        "src": "/assets/props/items/med6_chest_04.png",
        "thumbSrc": "/assets/props/thumbs/med6_chest_04.png",
        "forType": "chests_storage"
    },
    {
        "id": "med6_chest_05",
        "name": "Rương Cổ Điển Bọc Da Bò Chống Nước",
        "src": "/assets/props/items/med6_chest_05.png",
        "thumbSrc": "/assets/props/thumbs/med6_chest_05.png",
        "forType": "chests_storage"
    },
    {
        "id": "med6_chest_06",
        "name": "Rương Vàng Tràn Tiền Xu Cổ",
        "src": "/assets/props/items/med6_chest_06.png",
        "thumbSrc": "/assets/props/thumbs/med6_chest_06.png",
        "forType": "chests_storage"
    },
    {
        "id": "med6_chest_07",
        "name": "Rương Sắt Kiên Cố Chống Cạy Khóa",
        "src": "/assets/props/items/med6_chest_07.png",
        "thumbSrc": "/assets/props/thumbs/med6_chest_07.png",
        "forType": "chests_storage"
    },
    {
        "id": "med6_chest_08",
        "name": "Rương Ma Thuật Khắc Ấn Phong Tỏa",
        "src": "/assets/props/items/med6_chest_08.png",
        "thumbSrc": "/assets/props/thumbs/med6_chest_08.png",
        "forType": "chests_storage"
    },
    {
        "id": "med6_chest_09",
        "name": "Hòm Gỗ Nhỏ Chứa Trang Sức",
        "src": "/assets/props/items/med6_chest_09.png",
        "thumbSrc": "/assets/props/thumbs/med6_chest_09.png",
        "forType": "chests_storage"
    },
    {
        "id": "med6_chest_10",
        "name": "Rương Lớn Đựng Binh Khí Hiệp Sĩ",
        "src": "/assets/props/items/med6_chest_10.png",
        "thumbSrc": "/assets/props/thumbs/med6_chest_10.png",
        "forType": "chests_storage"
    },
    {
        "id": "med6_chest_11",
        "name": "Rương Gỗ Thông Đơn Sơ",
        "src": "/assets/props/items/med6_chest_11.png",
        "thumbSrc": "/assets/props/thumbs/med6_chest_11.png",
        "forType": "chests_storage"
    },
    {
        "id": "med6_chest_12",
        "name": "Rương Đồng Đỏ Cổ Xưa Khóa Chặt",
        "src": "/assets/props/items/med6_chest_12.png",
        "thumbSrc": "/assets/props/thumbs/med6_chest_12.png",
        "forType": "chests_storage"
    },
    {
        "id": "med6_chest_13",
        "name": "med6_chest #13",
        "src": "/assets/props/items/med6_chest_13.png",
        "thumbSrc": "/assets/props/thumbs/med6_chest_13.png",
        "forType": "chests_storage"
    },
    {
        "id": "med6_chest_14",
        "name": "med6_chest #14",
        "src": "/assets/props/items/med6_chest_14.png",
        "thumbSrc": "/assets/props/thumbs/med6_chest_14.png",
        "forType": "chests_storage"
    },
    {
        "id": "med6_chest_15",
        "name": "med6_chest #15",
        "src": "/assets/props/items/med6_chest_15.png",
        "thumbSrc": "/assets/props/thumbs/med6_chest_15.png",
        "forType": "chests_storage"
    },
    {
        "id": "med6_chest_16",
        "name": "med6_chest #16",
        "src": "/assets/props/items/med6_chest_16.png",
        "thumbSrc": "/assets/props/thumbs/med6_chest_16.png",
        "forType": "chests_storage"
    },
    {
        "id": "med6_fire_01",
        "name": "Đống Lửa Trại Đang Cháy Bập Bùng",
        "src": "/assets/props/items/med6_fire_01.png",
        "thumbSrc": "/assets/props/thumbs/med6_fire_01.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med6_fire_02",
        "name": "Đèn Bão Dầu Cổ Điển Thắp Sáng",
        "src": "/assets/props/items/med6_fire_02.png",
        "thumbSrc": "/assets/props/thumbs/med6_fire_02.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med6_fire_03",
        "name": "Ngọn Đuốc Nhúng Dầu Cháy Sáng",
        "src": "/assets/props/items/med6_fire_03.png",
        "thumbSrc": "/assets/props/thumbs/med6_fire_03.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med6_fire_04",
        "name": "Lò Sưởi Đá Than Hồng Ấm Áp",
        "src": "/assets/props/items/med6_fire_04.png",
        "thumbSrc": "/assets/props/thumbs/med6_fire_04.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med6_fire_05",
        "name": "Đèn Lồng Treo Cột Gỗ Thành Trì",
        "src": "/assets/props/items/med6_fire_05.png",
        "thumbSrc": "/assets/props/thumbs/med6_fire_05.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med6_fire_06",
        "name": "Chậu Lửa Đốt Báo Động Tháp Canh",
        "src": "/assets/props/items/med6_fire_06.png",
        "thumbSrc": "/assets/props/thumbs/med6_fire_06.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med6_fire_07",
        "name": "Đèn Cầy Sáp Chân Đồng Cổ",
        "src": "/assets/props/items/med6_fire_07.png",
        "thumbSrc": "/assets/props/thumbs/med6_fire_07.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med6_fire_08",
        "name": "Đống Lửa Tro Tàn Còn Than Đỏ",
        "src": "/assets/props/items/med6_fire_08.png",
        "thumbSrc": "/assets/props/thumbs/med6_fire_08.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med6_fire_09",
        "name": "Đèn Thủy Tinh Chống Gió Đêm",
        "src": "/assets/props/items/med6_fire_09.png",
        "thumbSrc": "/assets/props/thumbs/med6_fire_09.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med6_fire_10",
        "name": "Cọc Đuốc Cắm Đất Dã Ngoại",
        "src": "/assets/props/items/med6_fire_10.png",
        "thumbSrc": "/assets/props/thumbs/med6_fire_10.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med6_fire_11",
        "name": "Đèn Bão Xách Tay Đi Đêm",
        "src": "/assets/props/items/med6_fire_11.png",
        "thumbSrc": "/assets/props/thumbs/med6_fire_11.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med6_fire_12",
        "name": "Bếp Lò Than Nướng Dã Chiến",
        "src": "/assets/props/items/med6_fire_12.png",
        "thumbSrc": "/assets/props/thumbs/med6_fire_12.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med6_fire_13",
        "name": "med6_fire #13",
        "src": "/assets/props/items/med6_fire_13.png",
        "thumbSrc": "/assets/props/thumbs/med6_fire_13.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med6_fire_14",
        "name": "med6_fire #14",
        "src": "/assets/props/items/med6_fire_14.png",
        "thumbSrc": "/assets/props/thumbs/med6_fire_14.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med6_fire_15",
        "name": "med6_fire #15",
        "src": "/assets/props/items/med6_fire_15.png",
        "thumbSrc": "/assets/props/thumbs/med6_fire_15.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "med6_fire_16",
        "name": "med6_fire #16",
        "src": "/assets/props/items/med6_fire_16.png",
        "thumbSrc": "/assets/props/thumbs/med6_fire_16.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s0_r0_0",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #1-1-1",
        "src": "/assets/props/items/surv_s0_r0_0.png",
        "thumbSrc": "/assets/props/thumbs/surv_s0_r0_0.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s0_r0_1",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #1-1-2",
        "src": "/assets/props/items/surv_s0_r0_1.png",
        "thumbSrc": "/assets/props/thumbs/surv_s0_r0_1.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s0_r0_2",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #1-1-3",
        "src": "/assets/props/items/surv_s0_r0_2.png",
        "thumbSrc": "/assets/props/thumbs/surv_s0_r0_2.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s0_r0_3",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #1-1-4",
        "src": "/assets/props/items/surv_s0_r0_3.png",
        "thumbSrc": "/assets/props/thumbs/surv_s0_r0_3.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s0_r0_4",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #1-1-5",
        "src": "/assets/props/items/surv_s0_r0_4.png",
        "thumbSrc": "/assets/props/thumbs/surv_s0_r0_4.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s0_r0_5",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #1-1-6",
        "src": "/assets/props/items/surv_s0_r0_5.png",
        "thumbSrc": "/assets/props/thumbs/surv_s0_r0_5.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s0_r1_0",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #1-2-1",
        "src": "/assets/props/items/surv_s0_r1_0.png",
        "thumbSrc": "/assets/props/thumbs/surv_s0_r1_0.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s0_r1_1",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #1-2-2",
        "src": "/assets/props/items/surv_s0_r1_1.png",
        "thumbSrc": "/assets/props/thumbs/surv_s0_r1_1.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s0_r1_2",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #1-2-3",
        "src": "/assets/props/items/surv_s0_r1_2.png",
        "thumbSrc": "/assets/props/thumbs/surv_s0_r1_2.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s0_r1_3",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #1-2-4",
        "src": "/assets/props/items/surv_s0_r1_3.png",
        "thumbSrc": "/assets/props/thumbs/surv_s0_r1_3.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s0_r1_4",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #1-2-5",
        "src": "/assets/props/items/surv_s0_r1_4.png",
        "thumbSrc": "/assets/props/thumbs/surv_s0_r1_4.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s0_r1_5",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #1-2-6",
        "src": "/assets/props/items/surv_s0_r1_5.png",
        "thumbSrc": "/assets/props/thumbs/surv_s0_r1_5.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s0_r2_0",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #1-3-1",
        "src": "/assets/props/items/surv_s0_r2_0.png",
        "thumbSrc": "/assets/props/thumbs/surv_s0_r2_0.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s0_r2_1",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #1-3-2",
        "src": "/assets/props/items/surv_s0_r2_1.png",
        "thumbSrc": "/assets/props/thumbs/surv_s0_r2_1.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s0_r2_2",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #1-3-3",
        "src": "/assets/props/items/surv_s0_r2_2.png",
        "thumbSrc": "/assets/props/thumbs/surv_s0_r2_2.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s0_r2_3",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #1-3-4",
        "src": "/assets/props/items/surv_s0_r2_3.png",
        "thumbSrc": "/assets/props/thumbs/surv_s0_r2_3.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s0_r2_4",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #1-3-5",
        "src": "/assets/props/items/surv_s0_r2_4.png",
        "thumbSrc": "/assets/props/thumbs/surv_s0_r2_4.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s0_r2_5",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #1-3-6",
        "src": "/assets/props/items/surv_s0_r2_5.png",
        "thumbSrc": "/assets/props/thumbs/surv_s0_r2_5.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s0_r3_0",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #1-4-1",
        "src": "/assets/props/items/surv_s0_r3_0.png",
        "thumbSrc": "/assets/props/thumbs/surv_s0_r3_0.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s0_r3_1",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #1-4-2",
        "src": "/assets/props/items/surv_s0_r3_1.png",
        "thumbSrc": "/assets/props/thumbs/surv_s0_r3_1.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s0_r3_2",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #1-4-3",
        "src": "/assets/props/items/surv_s0_r3_2.png",
        "thumbSrc": "/assets/props/thumbs/surv_s0_r3_2.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s0_r3_3",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #1-4-4",
        "src": "/assets/props/items/surv_s0_r3_3.png",
        "thumbSrc": "/assets/props/thumbs/surv_s0_r3_3.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s0_r3_4",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #1-4-5",
        "src": "/assets/props/items/surv_s0_r3_4.png",
        "thumbSrc": "/assets/props/thumbs/surv_s0_r3_4.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s0_r3_5",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #1-4-6",
        "src": "/assets/props/items/surv_s0_r3_5.png",
        "thumbSrc": "/assets/props/thumbs/surv_s0_r3_5.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s0_r4_0",
        "name": "Thiết Bị Dã Chiến & Lửa Trại #1-1",
        "src": "/assets/props/items/surv_s0_r4_0.png",
        "thumbSrc": "/assets/props/thumbs/surv_s0_r4_0.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s0_r4_1",
        "name": "Thiết Bị Dã Chiến & Lửa Trại #1-2",
        "src": "/assets/props/items/surv_s0_r4_1.png",
        "thumbSrc": "/assets/props/thumbs/surv_s0_r4_1.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s0_r4_2",
        "name": "Thiết Bị Dã Chiến & Lửa Trại #1-3",
        "src": "/assets/props/items/surv_s0_r4_2.png",
        "thumbSrc": "/assets/props/thumbs/surv_s0_r4_2.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s0_r4_3",
        "name": "Thiết Bị Dã Chiến & Lửa Trại #1-4",
        "src": "/assets/props/items/surv_s0_r4_3.png",
        "thumbSrc": "/assets/props/thumbs/surv_s0_r4_3.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s0_r4_4",
        "name": "Thiết Bị Dã Chiến & Lửa Trại #1-5",
        "src": "/assets/props/items/surv_s0_r4_4.png",
        "thumbSrc": "/assets/props/thumbs/surv_s0_r4_4.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s0_r4_5",
        "name": "Thiết Bị Dã Chiến & Lửa Trại #1-6",
        "src": "/assets/props/items/surv_s0_r4_5.png",
        "thumbSrc": "/assets/props/thumbs/surv_s0_r4_5.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s0_r6_0",
        "name": "Vật Liệu & Quặng Sinh Tồn #1-1",
        "src": "/assets/props/items/surv_s0_r6_0.png",
        "thumbSrc": "/assets/props/thumbs/surv_s0_r6_0.png",
        "forType": "gems_loot"
    },
    {
        "id": "surv_s0_r6_1",
        "name": "Vật Liệu & Quặng Sinh Tồn #1-2",
        "src": "/assets/props/items/surv_s0_r6_1.png",
        "thumbSrc": "/assets/props/thumbs/surv_s0_r6_1.png",
        "forType": "gems_loot"
    },
    {
        "id": "surv_s0_r6_2",
        "name": "Vật Liệu & Quặng Sinh Tồn #1-3",
        "src": "/assets/props/items/surv_s0_r6_2.png",
        "thumbSrc": "/assets/props/thumbs/surv_s0_r6_2.png",
        "forType": "gems_loot"
    },
    {
        "id": "surv_s0_r6_3",
        "name": "Vật Liệu & Quặng Sinh Tồn #1-4",
        "src": "/assets/props/items/surv_s0_r6_3.png",
        "thumbSrc": "/assets/props/thumbs/surv_s0_r6_3.png",
        "forType": "gems_loot"
    },
    {
        "id": "surv_s0_r6_4",
        "name": "Vật Liệu & Quặng Sinh Tồn #1-5",
        "src": "/assets/props/items/surv_s0_r6_4.png",
        "thumbSrc": "/assets/props/thumbs/surv_s0_r6_4.png",
        "forType": "gems_loot"
    },
    {
        "id": "surv_s0_r6_5",
        "name": "Vật Liệu & Quặng Sinh Tồn #1-6",
        "src": "/assets/props/items/surv_s0_r6_5.png",
        "thumbSrc": "/assets/props/thumbs/surv_s0_r6_5.png",
        "forType": "gems_loot"
    },
    {
        "id": "surv_s0_r7_0",
        "name": "Vật Liệu & Quặng Sinh Tồn #1-1",
        "src": "/assets/props/items/surv_s0_r7_0.png",
        "thumbSrc": "/assets/props/thumbs/surv_s0_r7_0.png",
        "forType": "gems_loot"
    },
    {
        "id": "surv_s0_r7_1",
        "name": "Vật Liệu & Quặng Sinh Tồn #1-2",
        "src": "/assets/props/items/surv_s0_r7_1.png",
        "thumbSrc": "/assets/props/thumbs/surv_s0_r7_1.png",
        "forType": "gems_loot"
    },
    {
        "id": "surv_s0_r7_2",
        "name": "Vật Liệu & Quặng Sinh Tồn #1-3",
        "src": "/assets/props/items/surv_s0_r7_2.png",
        "thumbSrc": "/assets/props/thumbs/surv_s0_r7_2.png",
        "forType": "gems_loot"
    },
    {
        "id": "surv_s0_r7_3",
        "name": "Vật Liệu & Quặng Sinh Tồn #1-4",
        "src": "/assets/props/items/surv_s0_r7_3.png",
        "thumbSrc": "/assets/props/thumbs/surv_s0_r7_3.png",
        "forType": "gems_loot"
    },
    {
        "id": "surv_s0_r7_4",
        "name": "Vật Liệu & Quặng Sinh Tồn #1-5",
        "src": "/assets/props/items/surv_s0_r7_4.png",
        "thumbSrc": "/assets/props/thumbs/surv_s0_r7_4.png",
        "forType": "gems_loot"
    },
    {
        "id": "surv_s0_r7_5",
        "name": "Vật Liệu & Quặng Sinh Tồn #1-6",
        "src": "/assets/props/items/surv_s0_r7_5.png",
        "thumbSrc": "/assets/props/thumbs/surv_s0_r7_5.png",
        "forType": "gems_loot"
    },
    {
        "id": "surv_s0_r8_0",
        "name": "Vật Liệu & Quặng Sinh Tồn #1-1",
        "src": "/assets/props/items/surv_s0_r8_0.png",
        "thumbSrc": "/assets/props/thumbs/surv_s0_r8_0.png",
        "forType": "gems_loot"
    },
    {
        "id": "surv_s0_r8_1",
        "name": "Vật Liệu & Quặng Sinh Tồn #1-2",
        "src": "/assets/props/items/surv_s0_r8_1.png",
        "thumbSrc": "/assets/props/thumbs/surv_s0_r8_1.png",
        "forType": "gems_loot"
    },
    {
        "id": "surv_s0_r8_2",
        "name": "Vật Liệu & Quặng Sinh Tồn #1-3",
        "src": "/assets/props/items/surv_s0_r8_2.png",
        "thumbSrc": "/assets/props/thumbs/surv_s0_r8_2.png",
        "forType": "gems_loot"
    },
    {
        "id": "surv_s0_r8_3",
        "name": "Vật Liệu & Quặng Sinh Tồn #1-4",
        "src": "/assets/props/items/surv_s0_r8_3.png",
        "thumbSrc": "/assets/props/thumbs/surv_s0_r8_3.png",
        "forType": "gems_loot"
    },
    {
        "id": "surv_s0_r8_4",
        "name": "Vật Liệu & Quặng Sinh Tồn #1-5",
        "src": "/assets/props/items/surv_s0_r8_4.png",
        "thumbSrc": "/assets/props/thumbs/surv_s0_r8_4.png",
        "forType": "gems_loot"
    },
    {
        "id": "surv_s0_r8_5",
        "name": "Vật Liệu & Quặng Sinh Tồn #1-6",
        "src": "/assets/props/items/surv_s0_r8_5.png",
        "thumbSrc": "/assets/props/thumbs/surv_s0_r8_5.png",
        "forType": "gems_loot"
    },
    {
        "id": "surv_s0_r9_0",
        "name": "Vật Liệu & Quặng Sinh Tồn #1-1",
        "src": "/assets/props/items/surv_s0_r9_0.png",
        "thumbSrc": "/assets/props/thumbs/surv_s0_r9_0.png",
        "forType": "gems_loot"
    },
    {
        "id": "surv_s0_r9_1",
        "name": "Vật Liệu & Quặng Sinh Tồn #1-2",
        "src": "/assets/props/items/surv_s0_r9_1.png",
        "thumbSrc": "/assets/props/thumbs/surv_s0_r9_1.png",
        "forType": "gems_loot"
    },
    {
        "id": "surv_s0_r9_2",
        "name": "Vật Liệu & Quặng Sinh Tồn #1-3",
        "src": "/assets/props/items/surv_s0_r9_2.png",
        "thumbSrc": "/assets/props/thumbs/surv_s0_r9_2.png",
        "forType": "gems_loot"
    },
    {
        "id": "surv_s0_r9_3",
        "name": "Vật Liệu & Quặng Sinh Tồn #1-4",
        "src": "/assets/props/items/surv_s0_r9_3.png",
        "thumbSrc": "/assets/props/thumbs/surv_s0_r9_3.png",
        "forType": "gems_loot"
    },
    {
        "id": "surv_s0_r9_4",
        "name": "Vật Liệu & Quặng Sinh Tồn #1-5",
        "src": "/assets/props/items/surv_s0_r9_4.png",
        "thumbSrc": "/assets/props/thumbs/surv_s0_r9_4.png",
        "forType": "gems_loot"
    },
    {
        "id": "surv_s0_r9_5",
        "name": "Vật Liệu & Quặng Sinh Tồn #1-6",
        "src": "/assets/props/items/surv_s0_r9_5.png",
        "thumbSrc": "/assets/props/thumbs/surv_s0_r9_5.png",
        "forType": "gems_loot"
    },
    {
        "id": "surv_s1_r0_0",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #2-1-1",
        "src": "/assets/props/items/surv_s1_r0_0.png",
        "thumbSrc": "/assets/props/thumbs/surv_s1_r0_0.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s1_r0_1",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #2-1-2",
        "src": "/assets/props/items/surv_s1_r0_1.png",
        "thumbSrc": "/assets/props/thumbs/surv_s1_r0_1.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s1_r0_2",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #2-1-3",
        "src": "/assets/props/items/surv_s1_r0_2.png",
        "thumbSrc": "/assets/props/thumbs/surv_s1_r0_2.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s1_r0_3",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #2-1-4",
        "src": "/assets/props/items/surv_s1_r0_3.png",
        "thumbSrc": "/assets/props/thumbs/surv_s1_r0_3.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s1_r0_4",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #2-1-5",
        "src": "/assets/props/items/surv_s1_r0_4.png",
        "thumbSrc": "/assets/props/thumbs/surv_s1_r0_4.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s1_r0_5",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #2-1-6",
        "src": "/assets/props/items/surv_s1_r0_5.png",
        "thumbSrc": "/assets/props/thumbs/surv_s1_r0_5.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s1_r1_0",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #2-2-1",
        "src": "/assets/props/items/surv_s1_r1_0.png",
        "thumbSrc": "/assets/props/thumbs/surv_s1_r1_0.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s1_r1_1",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #2-2-2",
        "src": "/assets/props/items/surv_s1_r1_1.png",
        "thumbSrc": "/assets/props/thumbs/surv_s1_r1_1.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s1_r1_2",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #2-2-3",
        "src": "/assets/props/items/surv_s1_r1_2.png",
        "thumbSrc": "/assets/props/thumbs/surv_s1_r1_2.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s1_r1_3",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #2-2-4",
        "src": "/assets/props/items/surv_s1_r1_3.png",
        "thumbSrc": "/assets/props/thumbs/surv_s1_r1_3.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s1_r1_4",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #2-2-5",
        "src": "/assets/props/items/surv_s1_r1_4.png",
        "thumbSrc": "/assets/props/thumbs/surv_s1_r1_4.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s1_r1_5",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #2-2-6",
        "src": "/assets/props/items/surv_s1_r1_5.png",
        "thumbSrc": "/assets/props/thumbs/surv_s1_r1_5.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s1_r2_0",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #2-3-1",
        "src": "/assets/props/items/surv_s1_r2_0.png",
        "thumbSrc": "/assets/props/thumbs/surv_s1_r2_0.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s1_r2_1",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #2-3-2",
        "src": "/assets/props/items/surv_s1_r2_1.png",
        "thumbSrc": "/assets/props/thumbs/surv_s1_r2_1.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s1_r2_2",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #2-3-3",
        "src": "/assets/props/items/surv_s1_r2_2.png",
        "thumbSrc": "/assets/props/thumbs/surv_s1_r2_2.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s1_r2_3",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #2-3-4",
        "src": "/assets/props/items/surv_s1_r2_3.png",
        "thumbSrc": "/assets/props/thumbs/surv_s1_r2_3.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s1_r2_4",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #2-3-5",
        "src": "/assets/props/items/surv_s1_r2_4.png",
        "thumbSrc": "/assets/props/thumbs/surv_s1_r2_4.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s1_r2_5",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #2-3-6",
        "src": "/assets/props/items/surv_s1_r2_5.png",
        "thumbSrc": "/assets/props/thumbs/surv_s1_r2_5.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s1_r3_0",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #2-4-1",
        "src": "/assets/props/items/surv_s1_r3_0.png",
        "thumbSrc": "/assets/props/thumbs/surv_s1_r3_0.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s1_r3_1",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #2-4-2",
        "src": "/assets/props/items/surv_s1_r3_1.png",
        "thumbSrc": "/assets/props/thumbs/surv_s1_r3_1.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s1_r3_2",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #2-4-3",
        "src": "/assets/props/items/surv_s1_r3_2.png",
        "thumbSrc": "/assets/props/thumbs/surv_s1_r3_2.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s1_r3_3",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #2-4-4",
        "src": "/assets/props/items/surv_s1_r3_3.png",
        "thumbSrc": "/assets/props/thumbs/surv_s1_r3_3.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s1_r3_4",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #2-4-5",
        "src": "/assets/props/items/surv_s1_r3_4.png",
        "thumbSrc": "/assets/props/thumbs/surv_s1_r3_4.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s1_r3_5",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #2-4-6",
        "src": "/assets/props/items/surv_s1_r3_5.png",
        "thumbSrc": "/assets/props/thumbs/surv_s1_r3_5.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s1_r4_0",
        "name": "Thiết Bị Dã Chiến & Lửa Trại #2-1",
        "src": "/assets/props/items/surv_s1_r4_0.png",
        "thumbSrc": "/assets/props/thumbs/surv_s1_r4_0.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s1_r4_1",
        "name": "Thiết Bị Dã Chiến & Lửa Trại #2-2",
        "src": "/assets/props/items/surv_s1_r4_1.png",
        "thumbSrc": "/assets/props/thumbs/surv_s1_r4_1.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s1_r4_2",
        "name": "Thiết Bị Dã Chiến & Lửa Trại #2-3",
        "src": "/assets/props/items/surv_s1_r4_2.png",
        "thumbSrc": "/assets/props/thumbs/surv_s1_r4_2.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s1_r4_3",
        "name": "Thiết Bị Dã Chiến & Lửa Trại #2-4",
        "src": "/assets/props/items/surv_s1_r4_3.png",
        "thumbSrc": "/assets/props/thumbs/surv_s1_r4_3.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s1_r4_4",
        "name": "Thiết Bị Dã Chiến & Lửa Trại #2-5",
        "src": "/assets/props/items/surv_s1_r4_4.png",
        "thumbSrc": "/assets/props/thumbs/surv_s1_r4_4.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s1_r4_5",
        "name": "Thiết Bị Dã Chiến & Lửa Trại #2-6",
        "src": "/assets/props/items/surv_s1_r4_5.png",
        "thumbSrc": "/assets/props/thumbs/surv_s1_r4_5.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s1_r5_0",
        "name": "Thiết Bị Dã Chiến & Lửa Trại #2-1",
        "src": "/assets/props/items/surv_s1_r5_0.png",
        "thumbSrc": "/assets/props/thumbs/surv_s1_r5_0.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s1_r5_1",
        "name": "Thiết Bị Dã Chiến & Lửa Trại #2-2",
        "src": "/assets/props/items/surv_s1_r5_1.png",
        "thumbSrc": "/assets/props/thumbs/surv_s1_r5_1.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s1_r5_2",
        "name": "Thiết Bị Dã Chiến & Lửa Trại #2-3",
        "src": "/assets/props/items/surv_s1_r5_2.png",
        "thumbSrc": "/assets/props/thumbs/surv_s1_r5_2.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s1_r5_3",
        "name": "Thiết Bị Dã Chiến & Lửa Trại #2-4",
        "src": "/assets/props/items/surv_s1_r5_3.png",
        "thumbSrc": "/assets/props/thumbs/surv_s1_r5_3.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s1_r5_4",
        "name": "Thiết Bị Dã Chiến & Lửa Trại #2-5",
        "src": "/assets/props/items/surv_s1_r5_4.png",
        "thumbSrc": "/assets/props/thumbs/surv_s1_r5_4.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s1_r5_5",
        "name": "Thiết Bị Dã Chiến & Lửa Trại #2-6",
        "src": "/assets/props/items/surv_s1_r5_5.png",
        "thumbSrc": "/assets/props/thumbs/surv_s1_r5_5.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s1_r6_0",
        "name": "Vật Liệu & Quặng Sinh Tồn #2-1",
        "src": "/assets/props/items/surv_s1_r6_0.png",
        "thumbSrc": "/assets/props/thumbs/surv_s1_r6_0.png",
        "forType": "gems_loot"
    },
    {
        "id": "surv_s1_r6_1",
        "name": "Vật Liệu & Quặng Sinh Tồn #2-2",
        "src": "/assets/props/items/surv_s1_r6_1.png",
        "thumbSrc": "/assets/props/thumbs/surv_s1_r6_1.png",
        "forType": "gems_loot"
    },
    {
        "id": "surv_s1_r6_2",
        "name": "Vật Liệu & Quặng Sinh Tồn #2-3",
        "src": "/assets/props/items/surv_s1_r6_2.png",
        "thumbSrc": "/assets/props/thumbs/surv_s1_r6_2.png",
        "forType": "gems_loot"
    },
    {
        "id": "surv_s1_r6_3",
        "name": "Vật Liệu & Quặng Sinh Tồn #2-4",
        "src": "/assets/props/items/surv_s1_r6_3.png",
        "thumbSrc": "/assets/props/thumbs/surv_s1_r6_3.png",
        "forType": "gems_loot"
    },
    {
        "id": "surv_s1_r6_4",
        "name": "Vật Liệu & Quặng Sinh Tồn #2-5",
        "src": "/assets/props/items/surv_s1_r6_4.png",
        "thumbSrc": "/assets/props/thumbs/surv_s1_r6_4.png",
        "forType": "gems_loot"
    },
    {
        "id": "surv_s1_r6_5",
        "name": "Vật Liệu & Quặng Sinh Tồn #2-6",
        "src": "/assets/props/items/surv_s1_r6_5.png",
        "thumbSrc": "/assets/props/thumbs/surv_s1_r6_5.png",
        "forType": "gems_loot"
    },
    {
        "id": "surv_s1_r7_0",
        "name": "Vật Liệu & Quặng Sinh Tồn #2-1",
        "src": "/assets/props/items/surv_s1_r7_0.png",
        "thumbSrc": "/assets/props/thumbs/surv_s1_r7_0.png",
        "forType": "gems_loot"
    },
    {
        "id": "surv_s1_r7_1",
        "name": "Vật Liệu & Quặng Sinh Tồn #2-2",
        "src": "/assets/props/items/surv_s1_r7_1.png",
        "thumbSrc": "/assets/props/thumbs/surv_s1_r7_1.png",
        "forType": "gems_loot"
    },
    {
        "id": "surv_s1_r7_2",
        "name": "Vật Liệu & Quặng Sinh Tồn #2-3",
        "src": "/assets/props/items/surv_s1_r7_2.png",
        "thumbSrc": "/assets/props/thumbs/surv_s1_r7_2.png",
        "forType": "gems_loot"
    },
    {
        "id": "surv_s1_r7_3",
        "name": "Vật Liệu & Quặng Sinh Tồn #2-4",
        "src": "/assets/props/items/surv_s1_r7_3.png",
        "thumbSrc": "/assets/props/thumbs/surv_s1_r7_3.png",
        "forType": "gems_loot"
    },
    {
        "id": "surv_s1_r7_4",
        "name": "Vật Liệu & Quặng Sinh Tồn #2-5",
        "src": "/assets/props/items/surv_s1_r7_4.png",
        "thumbSrc": "/assets/props/thumbs/surv_s1_r7_4.png",
        "forType": "gems_loot"
    },
    {
        "id": "surv_s1_r7_5",
        "name": "Vật Liệu & Quặng Sinh Tồn #2-6",
        "src": "/assets/props/items/surv_s1_r7_5.png",
        "thumbSrc": "/assets/props/thumbs/surv_s1_r7_5.png",
        "forType": "gems_loot"
    },
    {
        "id": "surv_s1_r8_0",
        "name": "Vật Liệu & Quặng Sinh Tồn #2-1",
        "src": "/assets/props/items/surv_s1_r8_0.png",
        "thumbSrc": "/assets/props/thumbs/surv_s1_r8_0.png",
        "forType": "gems_loot"
    },
    {
        "id": "surv_s1_r8_1",
        "name": "Vật Liệu & Quặng Sinh Tồn #2-2",
        "src": "/assets/props/items/surv_s1_r8_1.png",
        "thumbSrc": "/assets/props/thumbs/surv_s1_r8_1.png",
        "forType": "gems_loot"
    },
    {
        "id": "surv_s1_r8_2",
        "name": "Vật Liệu & Quặng Sinh Tồn #2-3",
        "src": "/assets/props/items/surv_s1_r8_2.png",
        "thumbSrc": "/assets/props/thumbs/surv_s1_r8_2.png",
        "forType": "gems_loot"
    },
    {
        "id": "surv_s1_r8_3",
        "name": "Vật Liệu & Quặng Sinh Tồn #2-4",
        "src": "/assets/props/items/surv_s1_r8_3.png",
        "thumbSrc": "/assets/props/thumbs/surv_s1_r8_3.png",
        "forType": "gems_loot"
    },
    {
        "id": "surv_s1_r8_4",
        "name": "Vật Liệu & Quặng Sinh Tồn #2-5",
        "src": "/assets/props/items/surv_s1_r8_4.png",
        "thumbSrc": "/assets/props/thumbs/surv_s1_r8_4.png",
        "forType": "gems_loot"
    },
    {
        "id": "surv_s1_r8_5",
        "name": "Vật Liệu & Quặng Sinh Tồn #2-6",
        "src": "/assets/props/items/surv_s1_r8_5.png",
        "thumbSrc": "/assets/props/thumbs/surv_s1_r8_5.png",
        "forType": "gems_loot"
    },
    {
        "id": "surv_s1_r9_0",
        "name": "Vật Liệu & Quặng Sinh Tồn #2-1",
        "src": "/assets/props/items/surv_s1_r9_0.png",
        "thumbSrc": "/assets/props/thumbs/surv_s1_r9_0.png",
        "forType": "gems_loot"
    },
    {
        "id": "surv_s1_r9_1",
        "name": "Vật Liệu & Quặng Sinh Tồn #2-2",
        "src": "/assets/props/items/surv_s1_r9_1.png",
        "thumbSrc": "/assets/props/thumbs/surv_s1_r9_1.png",
        "forType": "gems_loot"
    },
    {
        "id": "surv_s1_r9_2",
        "name": "Vật Liệu & Quặng Sinh Tồn #2-3",
        "src": "/assets/props/items/surv_s1_r9_2.png",
        "thumbSrc": "/assets/props/thumbs/surv_s1_r9_2.png",
        "forType": "gems_loot"
    },
    {
        "id": "surv_s1_r9_3",
        "name": "Vật Liệu & Quặng Sinh Tồn #2-4",
        "src": "/assets/props/items/surv_s1_r9_3.png",
        "thumbSrc": "/assets/props/thumbs/surv_s1_r9_3.png",
        "forType": "gems_loot"
    },
    {
        "id": "surv_s1_r9_4",
        "name": "Vật Liệu & Quặng Sinh Tồn #2-5",
        "src": "/assets/props/items/surv_s1_r9_4.png",
        "thumbSrc": "/assets/props/thumbs/surv_s1_r9_4.png",
        "forType": "gems_loot"
    },
    {
        "id": "surv_s1_r9_5",
        "name": "Vật Liệu & Quặng Sinh Tồn #2-6",
        "src": "/assets/props/items/surv_s1_r9_5.png",
        "thumbSrc": "/assets/props/thumbs/surv_s1_r9_5.png",
        "forType": "gems_loot"
    },
    {
        "id": "surv_s2_r0_0",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #3-1-1",
        "src": "/assets/props/items/surv_s2_r0_0.png",
        "thumbSrc": "/assets/props/thumbs/surv_s2_r0_0.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s2_r0_1",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #3-1-2",
        "src": "/assets/props/items/surv_s2_r0_1.png",
        "thumbSrc": "/assets/props/thumbs/surv_s2_r0_1.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s2_r0_2",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #3-1-3",
        "src": "/assets/props/items/surv_s2_r0_2.png",
        "thumbSrc": "/assets/props/thumbs/surv_s2_r0_2.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s2_r0_3",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #3-1-4",
        "src": "/assets/props/items/surv_s2_r0_3.png",
        "thumbSrc": "/assets/props/thumbs/surv_s2_r0_3.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s2_r0_4",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #3-1-5",
        "src": "/assets/props/items/surv_s2_r0_4.png",
        "thumbSrc": "/assets/props/thumbs/surv_s2_r0_4.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s2_r1_0",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #3-2-1",
        "src": "/assets/props/items/surv_s2_r1_0.png",
        "thumbSrc": "/assets/props/thumbs/surv_s2_r1_0.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s2_r1_1",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #3-2-2",
        "src": "/assets/props/items/surv_s2_r1_1.png",
        "thumbSrc": "/assets/props/thumbs/surv_s2_r1_1.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s2_r1_2",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #3-2-3",
        "src": "/assets/props/items/surv_s2_r1_2.png",
        "thumbSrc": "/assets/props/thumbs/surv_s2_r1_2.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s2_r1_3",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #3-2-4",
        "src": "/assets/props/items/surv_s2_r1_3.png",
        "thumbSrc": "/assets/props/thumbs/surv_s2_r1_3.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s2_r1_4",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #3-2-5",
        "src": "/assets/props/items/surv_s2_r1_4.png",
        "thumbSrc": "/assets/props/thumbs/surv_s2_r1_4.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s2_r2_0",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #3-3-1",
        "src": "/assets/props/items/surv_s2_r2_0.png",
        "thumbSrc": "/assets/props/thumbs/surv_s2_r2_0.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s2_r2_1",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #3-3-2",
        "src": "/assets/props/items/surv_s2_r2_1.png",
        "thumbSrc": "/assets/props/thumbs/surv_s2_r2_1.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s2_r2_2",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #3-3-3",
        "src": "/assets/props/items/surv_s2_r2_2.png",
        "thumbSrc": "/assets/props/thumbs/surv_s2_r2_2.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s2_r2_3",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #3-3-4",
        "src": "/assets/props/items/surv_s2_r2_3.png",
        "thumbSrc": "/assets/props/thumbs/surv_s2_r2_3.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s2_r2_4",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #3-3-5",
        "src": "/assets/props/items/surv_s2_r2_4.png",
        "thumbSrc": "/assets/props/thumbs/surv_s2_r2_4.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s2_r2_5",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #3-3-6",
        "src": "/assets/props/items/surv_s2_r2_5.png",
        "thumbSrc": "/assets/props/thumbs/surv_s2_r2_5.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s2_r3_0",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #3-4-1",
        "src": "/assets/props/items/surv_s2_r3_0.png",
        "thumbSrc": "/assets/props/thumbs/surv_s2_r3_0.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s2_r3_1",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #3-4-2",
        "src": "/assets/props/items/surv_s2_r3_1.png",
        "thumbSrc": "/assets/props/thumbs/surv_s2_r3_1.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s2_r3_2",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #3-4-3",
        "src": "/assets/props/items/surv_s2_r3_2.png",
        "thumbSrc": "/assets/props/thumbs/surv_s2_r3_2.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s2_r3_3",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #3-4-4",
        "src": "/assets/props/items/surv_s2_r3_3.png",
        "thumbSrc": "/assets/props/thumbs/surv_s2_r3_3.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s2_r3_4",
        "name": "Dụng Cụ Sinh Tồn Dã Ngoại #3-4-5",
        "src": "/assets/props/items/surv_s2_r3_4.png",
        "thumbSrc": "/assets/props/thumbs/surv_s2_r3_4.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s2_r4_0",
        "name": "Thiết Bị Dã Chiến & Lửa Trại #3-1",
        "src": "/assets/props/items/surv_s2_r4_0.png",
        "thumbSrc": "/assets/props/thumbs/surv_s2_r4_0.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s2_r4_1",
        "name": "Thiết Bị Dã Chiến & Lửa Trại #3-2",
        "src": "/assets/props/items/surv_s2_r4_1.png",
        "thumbSrc": "/assets/props/thumbs/surv_s2_r4_1.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s2_r4_2",
        "name": "Thiết Bị Dã Chiến & Lửa Trại #3-3",
        "src": "/assets/props/items/surv_s2_r4_2.png",
        "thumbSrc": "/assets/props/thumbs/surv_s2_r4_2.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s2_r4_3",
        "name": "Thiết Bị Dã Chiến & Lửa Trại #3-4",
        "src": "/assets/props/items/surv_s2_r4_3.png",
        "thumbSrc": "/assets/props/thumbs/surv_s2_r4_3.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s2_r4_4",
        "name": "Thiết Bị Dã Chiến & Lửa Trại #3-5",
        "src": "/assets/props/items/surv_s2_r4_4.png",
        "thumbSrc": "/assets/props/thumbs/surv_s2_r4_4.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s2_r5_0",
        "name": "Thiết Bị Dã Chiến & Lửa Trại #3-1",
        "src": "/assets/props/items/surv_s2_r5_0.png",
        "thumbSrc": "/assets/props/thumbs/surv_s2_r5_0.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s2_r5_1",
        "name": "Thiết Bị Dã Chiến & Lửa Trại #3-2",
        "src": "/assets/props/items/surv_s2_r5_1.png",
        "thumbSrc": "/assets/props/thumbs/surv_s2_r5_1.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s2_r5_2",
        "name": "Thiết Bị Dã Chiến & Lửa Trại #3-3",
        "src": "/assets/props/items/surv_s2_r5_2.png",
        "thumbSrc": "/assets/props/thumbs/surv_s2_r5_2.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s2_r5_3",
        "name": "Thiết Bị Dã Chiến & Lửa Trại #3-4",
        "src": "/assets/props/items/surv_s2_r5_3.png",
        "thumbSrc": "/assets/props/thumbs/surv_s2_r5_3.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s2_r5_4",
        "name": "Thiết Bị Dã Chiến & Lửa Trại #3-5",
        "src": "/assets/props/items/surv_s2_r5_4.png",
        "thumbSrc": "/assets/props/thumbs/surv_s2_r5_4.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s2_r5_5",
        "name": "Thiết Bị Dã Chiến & Lửa Trại #3-6",
        "src": "/assets/props/items/surv_s2_r5_5.png",
        "thumbSrc": "/assets/props/thumbs/surv_s2_r5_5.png",
        "forType": "tools_mechanisms"
    },
    {
        "id": "surv_s2_r6_0",
        "name": "Vật Liệu & Quặng Sinh Tồn #3-1",
        "src": "/assets/props/items/surv_s2_r6_0.png",
        "thumbSrc": "/assets/props/thumbs/surv_s2_r6_0.png",
        "forType": "gems_loot"
    },
    {
        "id": "surv_s2_r6_1",
        "name": "Vật Liệu & Quặng Sinh Tồn #3-2",
        "src": "/assets/props/items/surv_s2_r6_1.png",
        "thumbSrc": "/assets/props/thumbs/surv_s2_r6_1.png",
        "forType": "gems_loot"
    },
    {
        "id": "surv_s2_r6_2",
        "name": "Vật Liệu & Quặng Sinh Tồn #3-3",
        "src": "/assets/props/items/surv_s2_r6_2.png",
        "thumbSrc": "/assets/props/thumbs/surv_s2_r6_2.png",
        "forType": "gems_loot"
    },
    {
        "id": "surv_s2_r6_3",
        "name": "Vật Liệu & Quặng Sinh Tồn #3-4",
        "src": "/assets/props/items/surv_s2_r6_3.png",
        "thumbSrc": "/assets/props/thumbs/surv_s2_r6_3.png",
        "forType": "gems_loot"
    },
    {
        "id": "surv_s2_r6_4",
        "name": "Vật Liệu & Quặng Sinh Tồn #3-5",
        "src": "/assets/props/items/surv_s2_r6_4.png",
        "thumbSrc": "/assets/props/thumbs/surv_s2_r6_4.png",
        "forType": "gems_loot"
    },
    {
        "id": "surv_s2_r7_0",
        "name": "Vật Liệu & Quặng Sinh Tồn #3-1",
        "src": "/assets/props/items/surv_s2_r7_0.png",
        "thumbSrc": "/assets/props/thumbs/surv_s2_r7_0.png",
        "forType": "gems_loot"
    },
    {
        "id": "surv_s2_r7_1",
        "name": "Vật Liệu & Quặng Sinh Tồn #3-2",
        "src": "/assets/props/items/surv_s2_r7_1.png",
        "thumbSrc": "/assets/props/thumbs/surv_s2_r7_1.png",
        "forType": "gems_loot"
    },
    {
        "id": "surv_s2_r7_2",
        "name": "Vật Liệu & Quặng Sinh Tồn #3-3",
        "src": "/assets/props/items/surv_s2_r7_2.png",
        "thumbSrc": "/assets/props/thumbs/surv_s2_r7_2.png",
        "forType": "gems_loot"
    },
    {
        "id": "surv_s2_r7_3",
        "name": "Vật Liệu & Quặng Sinh Tồn #3-4",
        "src": "/assets/props/items/surv_s2_r7_3.png",
        "thumbSrc": "/assets/props/thumbs/surv_s2_r7_3.png",
        "forType": "gems_loot"
    },
    {
        "id": "surv_s2_r7_4",
        "name": "Vật Liệu & Quặng Sinh Tồn #3-5",
        "src": "/assets/props/items/surv_s2_r7_4.png",
        "thumbSrc": "/assets/props/thumbs/surv_s2_r7_4.png",
        "forType": "gems_loot"
    },
    {
        "id": "surv_s2_r8_0",
        "name": "Vật Liệu & Quặng Sinh Tồn #3-1",
        "src": "/assets/props/items/surv_s2_r8_0.png",
        "thumbSrc": "/assets/props/thumbs/surv_s2_r8_0.png",
        "forType": "gems_loot"
    },
    {
        "id": "surv_s2_r8_1",
        "name": "Vật Liệu & Quặng Sinh Tồn #3-2",
        "src": "/assets/props/items/surv_s2_r8_1.png",
        "thumbSrc": "/assets/props/thumbs/surv_s2_r8_1.png",
        "forType": "gems_loot"
    },
    {
        "id": "surv_s2_r8_2",
        "name": "Vật Liệu & Quặng Sinh Tồn #3-3",
        "src": "/assets/props/items/surv_s2_r8_2.png",
        "thumbSrc": "/assets/props/thumbs/surv_s2_r8_2.png",
        "forType": "gems_loot"
    },
    {
        "id": "surv_s2_r8_3",
        "name": "Vật Liệu & Quặng Sinh Tồn #3-4",
        "src": "/assets/props/items/surv_s2_r8_3.png",
        "thumbSrc": "/assets/props/thumbs/surv_s2_r8_3.png",
        "forType": "gems_loot"
    },
    {
        "id": "surv_s2_r8_4",
        "name": "Vật Liệu & Quặng Sinh Tồn #3-5",
        "src": "/assets/props/items/surv_s2_r8_4.png",
        "thumbSrc": "/assets/props/thumbs/surv_s2_r8_4.png",
        "forType": "gems_loot"
    },
    {
        "id": "surv_s2_r8_5",
        "name": "Vật Liệu & Quặng Sinh Tồn #3-6",
        "src": "/assets/props/items/surv_s2_r8_5.png",
        "thumbSrc": "/assets/props/thumbs/surv_s2_r8_5.png",
        "forType": "gems_loot"
    }
],

  // 3. Bệ Đỡ Trưng Bày (Pedestals)
  pedestal: [
    {
        "id": "none",
        "name": "Không dùng bệ đỡ (Trống)",
        "thumbSrc": null,
        "src": null
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
],

  // 4. Hào Quang Phép Thuật (Auras)
  aura: [
    {
        "id": "none",
        "name": "Không hào quang",
        "thumbSrc": null,
        "src": null
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
],

  // 5. Hiệu Ứng Bụi Sao (Effects)
  effects: [
    {
        "id": "none",
        "name": "Không hiệu ứng",
        "thumbSrc": null,
        "src": null
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
};

// Preset bảng màu cho hiệu ứng & hào quang
export const propColorPalettes = {
  aura: [
    '#ffffff', '#60a5fa', '#f87171', '#fbbf24', '#c084fc', '#34d399', '#f472b6', '#38bdf8'
  ],
  effects: [
    '#ffffff', '#fbbf24', '#60a5fa', '#e879f9', '#4ade80', '#f87171', '#38bdf8', '#facc15'
  ],
  pedestal: [
    '#ffffff', '#94a3b8', '#d97706', '#dc2626', '#475569', '#1e293b', '#78350f', '#0f766e'
  ]
};

/**
 * Layer composer function for character builder
 * Assembles Pedestal -> Aura -> Main Prop Item -> Particle Effects
 */
export const getPropLayers = (selections = {}, colors = {}) => {
  const layers = [];
  const selectedType = selections.prop_type || 'melee_weapons';
  const stateId = selections.state;
  const pedestalId = selections.pedestal !== undefined ? selections.pedestal : 'pedestal_stone_altar';
  const auraId = selections.aura !== undefined ? selections.aura : 'none';
  const effectId = selections.effects !== undefined ? selections.effects : 'none';

  // 1. Layer Bệ Đỡ (z_index: 1)
  if (pedestalId && pedestalId !== 'none') {
    const pedOpt = propConfig.pedestal.find(p => p.id === pedestalId);
    if (pedOpt && pedOpt.src) {
      layers.push({
        id: `pedestal_${pedOpt.id}`,
        category: 'pedestal',
        name: pedOpt.name,
        src: pedOpt.src,
        color: colors.pedestal || '#ffffff',
        z_index: 1
      });
    }
  }

  // 2. Layer Hào Quang Phép Thuật (z_index: 2)
  if (auraId && auraId !== 'none') {
    const auraOpt = propConfig.aura.find(a => a.id === auraId);
    if (auraOpt && auraOpt.src) {
      layers.push({
        id: `aura_${auraOpt.id}`,
        category: 'aura',
        name: auraOpt.name,
        src: auraOpt.src,
        color: colors.aura || '#ffffff',
        z_index: 2
      });
    }
  }

  // 3. Layer Vật Phẩm Chính (z_index: 3)
  let matchingItem = propConfig.state.find(s => s.id === stateId);
  if (!matchingItem || matchingItem.forType !== selectedType) {
    matchingItem = propConfig.state.find(s => s.forType === selectedType) || propConfig.state[0];
  }

  if (matchingItem && matchingItem.src) {
    layers.push({
      id: `prop_${matchingItem.id}`,
      category: 'state',
      name: matchingItem.name,
      src: matchingItem.src,
      color: colors.state || colors.prop || '#ffffff',
      z_index: 3
    });
  }

  // 4. Layer Hiệu Ứng Lấp Lánh (z_index: 4)
  if (effectId && effectId !== 'none') {
    const effOpt = propConfig.effects.find(e => e.id === effectId);
    if (effOpt && effOpt.src) {
      layers.push({
        id: `effect_${effOpt.id}`,
        category: 'effects',
        name: effOpt.name,
        src: effOpt.src,
        color: colors.effects || '#ffffff',
        z_index: 4
      });
    }
  }

  return layers;
};
