/**
 * Configuration & Layer Composer for Grand In-Game Props & Items Studio
 * Features 220 high-quality pixel art and RPG items across 8 categories:
 * Weapons, Armor & Shields, Alchemy, Chests & Mechanisms, Relics & Tomes, Jewels & Minerals, Royal Feast, Survival.
 * Includes interactive states, multi-tier pedestals, mystical auras, and particle FX.
 */

export const propConfig = {
  // 1. Nhóm Danh Mục Vật Phẩm Lớn
  prop_type: [
    {
        "id": "weapons",
        "name": "Vũ Khí & Khí Giới",
        "thumbSrc": "/assets/props/thumbs/sword_iron.png",
        "defaultState": "sword_iron"
    },
    {
        "id": "armor",
        "name": "Áo Giáp & Phòng Ngự",
        "thumbSrc": "/assets/props/thumbs/helm_iron.png",
        "defaultState": "helm_iron"
    },
    {
        "id": "alchemy",
        "name": "Độc Dược & Bình Thuốc",
        "thumbSrc": "/assets/props/thumbs/potion_health.png",
        "defaultState": "potion_health"
    },
    {
        "id": "chests_mechanisms",
        "name": "Rương Kho Báu & Cơ Quan",
        "thumbSrc": "/assets/props/thumbs/chest_wood_closed.png",
        "defaultState": "chest_wood_closed"
    },
    {
        "id": "relics_tomes",
        "name": "Pháp Khí & Tri Thức",
        "thumbSrc": "/assets/props/thumbs/book_iron.png",
        "defaultState": "book_iron"
    },
    {
        "id": "gems_loot",
        "name": "Châu Báu, Đá Quý & Tài Nguyên",
        "thumbSrc": "/assets/props/thumbs/gold_bar.png",
        "defaultState": "gold_bar"
    },
    {
        "id": "provisions",
        "name": "Lương Thực & Yến Tiệc",
        "thumbSrc": "/assets/props/thumbs/food_bread_01.png",
        "defaultState": "food_bread_01"
    },
    {
        "id": "survival_tools",
        "name": "Dụng Cụ Dã Ngoại & Sinh Tồn",
        "thumbSrc": "/assets/props/thumbs/surv_backpack.png",
        "defaultState": "surv_backpack"
    }
],

  // 2. Vật Phẩm & Trạng Thái Cụ Thể (State)
  state: [
    {
        "id": "sword_iron",
        "name": "Thanh Gươm Thép Hiệp Sĩ",
        "src": "/assets/props/items/sword_iron.png",
        "thumbSrc": "/assets/props/thumbs/sword_iron.png",
        "forType": "weapons"
    },
    {
        "id": "sword_frost",
        "name": "Thanh Gươm Băng Thanh Thần Bí",
        "src": "/assets/props/items/sword_frost.png",
        "thumbSrc": "/assets/props/thumbs/sword_frost.png",
        "forType": "weapons"
    },
    {
        "id": "sword_void",
        "name": "Thanh Gươm Hư Không Bóng Đêm",
        "src": "/assets/props/items/sword_void.png",
        "thumbSrc": "/assets/props/thumbs/sword_void.png",
        "forType": "weapons"
    },
    {
        "id": "sword_gold",
        "name": "Thanh Gươm Hoàng Kim Excalibur",
        "src": "/assets/props/items/sword_gold.png",
        "thumbSrc": "/assets/props/thumbs/sword_gold.png",
        "forType": "weapons"
    },
    {
        "id": "gear_iron_sword",
        "name": "Thanh Kiếm Thép Cổ Điển",
        "src": "/assets/props/items/gear_iron_sword.png",
        "thumbSrc": "/assets/props/thumbs/gear_iron_sword.png",
        "forType": "weapons"
    },
    {
        "id": "axe_iron",
        "name": "Rìu Chiến Phá Giáp Thép",
        "src": "/assets/props/items/axe_iron.png",
        "thumbSrc": "/assets/props/thumbs/axe_iron.png",
        "forType": "weapons"
    },
    {
        "id": "axe_frost",
        "name": "Rìu Chiến Băng Sương",
        "src": "/assets/props/items/axe_frost.png",
        "thumbSrc": "/assets/props/thumbs/axe_frost.png",
        "forType": "weapons"
    },
    {
        "id": "axe_void",
        "name": "Rìu Chiến Hắc Ám Hư Không",
        "src": "/assets/props/items/axe_void.png",
        "thumbSrc": "/assets/props/thumbs/axe_void.png",
        "forType": "weapons"
    },
    {
        "id": "axe_gold",
        "name": "Rìu Chiến Hoàng Kim Cung Đình",
        "src": "/assets/props/items/axe_gold.png",
        "thumbSrc": "/assets/props/thumbs/axe_gold.png",
        "forType": "weapons"
    },
    {
        "id": "bow_iron",
        "name": "Cung Gỗ Săn Bắn Thiện Xạ",
        "src": "/assets/props/items/bow_iron.png",
        "thumbSrc": "/assets/props/thumbs/bow_iron.png",
        "forType": "weapons"
    },
    {
        "id": "bow_frost",
        "name": "Cung Tên Băng Tuyết Thần Bí",
        "src": "/assets/props/items/bow_frost.png",
        "thumbSrc": "/assets/props/thumbs/bow_frost.png",
        "forType": "weapons"
    },
    {
        "id": "bow_void",
        "name": "Cung Tên Bóng Đêm Hư Không",
        "src": "/assets/props/items/bow_void.png",
        "thumbSrc": "/assets/props/thumbs/bow_void.png",
        "forType": "weapons"
    },
    {
        "id": "bow_gold",
        "name": "Cung Tên Hoàng Kim Thần Khí",
        "src": "/assets/props/items/bow_gold.png",
        "thumbSrc": "/assets/props/thumbs/bow_gold.png",
        "forType": "weapons"
    },
    {
        "id": "wand_iron",
        "name": "Đũa Phép Bí Thuật Thép",
        "src": "/assets/props/items/wand_iron.png",
        "thumbSrc": "/assets/props/thumbs/wand_iron.png",
        "forType": "weapons"
    },
    {
        "id": "wand_frost",
        "name": "Đũa Phép Băng Giá Cực Bắc",
        "src": "/assets/props/items/wand_frost.png",
        "thumbSrc": "/assets/props/thumbs/wand_frost.png",
        "forType": "weapons"
    },
    {
        "id": "wand_void",
        "name": "Đũa Phép Hư Không Bí Thuật",
        "src": "/assets/props/items/wand_void.png",
        "thumbSrc": "/assets/props/thumbs/wand_void.png",
        "forType": "weapons"
    },
    {
        "id": "wand_gold",
        "name": "Đũa Phép Hoàng Kim Thần Khí",
        "src": "/assets/props/items/wand_gold.png",
        "thumbSrc": "/assets/props/thumbs/wand_gold.png",
        "forType": "weapons"
    },
    {
        "id": "gear_wizard_wand",
        "name": "Đũa Thần Bí Thuật Tím",
        "src": "/assets/props/items/gear_wizard_wand.png",
        "thumbSrc": "/assets/props/thumbs/gear_wizard_wand.png",
        "forType": "weapons"
    },
    {
        "id": "staff_iron",
        "name": "Quyền Trượng Ma Lực Sắt",
        "src": "/assets/props/items/staff_iron.png",
        "thumbSrc": "/assets/props/thumbs/staff_iron.png",
        "forType": "weapons"
    },
    {
        "id": "staff_frost",
        "name": "Quyền Trượng Băng Lam Thần Bí",
        "src": "/assets/props/items/staff_frost.png",
        "thumbSrc": "/assets/props/thumbs/staff_frost.png",
        "forType": "weapons"
    },
    {
        "id": "staff_void",
        "name": "Quyền Trượng Hư Không Hắc Ám",
        "src": "/assets/props/items/staff_void.png",
        "thumbSrc": "/assets/props/thumbs/staff_void.png",
        "forType": "weapons"
    },
    {
        "id": "staff_gold",
        "name": "Quyền Trượng Thần Thánh Vàng",
        "src": "/assets/props/items/staff_gold.png",
        "thumbSrc": "/assets/props/thumbs/staff_gold.png",
        "forType": "weapons"
    },
    {
        "id": "gear_crystal_staff",
        "name": "Quyền Trượng Pha Lê Cung Đình",
        "src": "/assets/props/items/gear_crystal_staff.png",
        "thumbSrc": "/assets/props/thumbs/gear_crystal_staff.png",
        "forType": "weapons"
    },
    {
        "id": "helm_iron",
        "name": "Mũ Giáp Trụ Thép Hiệp Sĩ",
        "src": "/assets/props/items/helm_iron.png",
        "thumbSrc": "/assets/props/thumbs/helm_iron.png",
        "forType": "armor"
    },
    {
        "id": "helm_frost",
        "name": "Nón Trụ Băng Bạc Thần Bí",
        "src": "/assets/props/items/helm_frost.png",
        "thumbSrc": "/assets/props/thumbs/helm_frost.png",
        "forType": "armor"
    },
    {
        "id": "helm_void",
        "name": "Mũ Giáp Hư Không Bóng Đêm",
        "src": "/assets/props/items/helm_void.png",
        "thumbSrc": "/assets/props/thumbs/helm_void.png",
        "forType": "armor"
    },
    {
        "id": "helm_gold",
        "name": "Mũ Giáp Hoàng Kim Thần Thánh",
        "src": "/assets/props/items/helm_gold.png",
        "thumbSrc": "/assets/props/thumbs/helm_gold.png",
        "forType": "armor"
    },
    {
        "id": "armor_iron",
        "name": "Áo Giáp Trụ Thép Chiến Trận",
        "src": "/assets/props/items/armor_iron.png",
        "thumbSrc": "/assets/props/thumbs/armor_iron.png",
        "forType": "armor"
    },
    {
        "id": "armor_frost",
        "name": "Áo Giáp Băng Thanh Kháng Phép",
        "src": "/assets/props/items/armor_frost.png",
        "thumbSrc": "/assets/props/thumbs/armor_frost.png",
        "forType": "armor"
    },
    {
        "id": "armor_void",
        "name": "Áo Giáp Hư Không Hắc Ám",
        "src": "/assets/props/items/armor_void.png",
        "thumbSrc": "/assets/props/thumbs/armor_void.png",
        "forType": "armor"
    },
    {
        "id": "armor_gold",
        "name": "Áo Giáp Hoàng Kim Cung Đình",
        "src": "/assets/props/items/armor_gold.png",
        "thumbSrc": "/assets/props/thumbs/armor_gold.png",
        "forType": "armor"
    },
    {
        "id": "hat_iron",
        "name": "Nón Phù Thủy Đỏ Rực",
        "src": "/assets/props/items/hat_iron.png",
        "thumbSrc": "/assets/props/thumbs/hat_iron.png",
        "forType": "armor"
    },
    {
        "id": "hat_frost",
        "name": "Nón Pháp Sư Lam Thần Bí",
        "src": "/assets/props/items/hat_frost.png",
        "thumbSrc": "/assets/props/thumbs/hat_frost.png",
        "forType": "armor"
    },
    {
        "id": "hat_void",
        "name": "Nón Phù Thủy Tím Hư Không",
        "src": "/assets/props/items/hat_void.png",
        "thumbSrc": "/assets/props/thumbs/hat_void.png",
        "forType": "armor"
    },
    {
        "id": "hat_gold",
        "name": "Nón Phù Thủy Vàng Hoàng Gia",
        "src": "/assets/props/items/hat_gold.png",
        "thumbSrc": "/assets/props/thumbs/hat_gold.png",
        "forType": "armor"
    },
    {
        "id": "172_Straw_Hat",
        "name": "Mũ Rơm Phiêu Lưu Dã Ngoại",
        "src": "/assets/props/items/172_Straw_Hat.png",
        "thumbSrc": "/assets/props/thumbs/172_Straw_Hat.png",
        "forType": "armor"
    },
    {
        "id": "cape_iron",
        "name": "Áo Choàng Đỏ Lửa Chiến Binh",
        "src": "/assets/props/items/cape_iron.png",
        "thumbSrc": "/assets/props/thumbs/cape_iron.png",
        "forType": "armor"
    },
    {
        "id": "cape_frost",
        "name": "Áo Choàng Xanh Lam Băng Tuyết",
        "src": "/assets/props/items/cape_frost.png",
        "thumbSrc": "/assets/props/thumbs/cape_frost.png",
        "forType": "armor"
    },
    {
        "id": "cape_void",
        "name": "Áo Choàng Tím Hư Không",
        "src": "/assets/props/items/cape_void.png",
        "thumbSrc": "/assets/props/thumbs/cape_void.png",
        "forType": "armor"
    },
    {
        "id": "cape_gold",
        "name": "Áo Choàng Hoàng Kim Quý Tộc",
        "src": "/assets/props/items/cape_gold.png",
        "thumbSrc": "/assets/props/thumbs/cape_gold.png",
        "forType": "armor"
    },
    {
        "id": "shield_spikes",
        "name": "Khiên Thép Gai Phản Đòn",
        "src": "/assets/props/items/shield_spikes.png",
        "thumbSrc": "/assets/props/thumbs/shield_spikes.png",
        "forType": "armor"
    },
    {
        "id": "gear_wood_shield",
        "name": "Khiên Gỗ Chiến Binh Bọc Thép",
        "src": "/assets/props/items/gear_wood_shield.png",
        "thumbSrc": "/assets/props/thumbs/gear_wood_shield.png",
        "forType": "armor"
    },
    {
        "id": "gloves_leather",
        "name": "Găng Tay Da Thợ Săn",
        "src": "/assets/props/items/gloves_leather.png",
        "thumbSrc": "/assets/props/thumbs/gloves_leather.png",
        "forType": "armor"
    },
    {
        "id": "gloves_crystal",
        "name": "Găng Tay Tinh Thể Băng",
        "src": "/assets/props/items/gloves_crystal.png",
        "thumbSrc": "/assets/props/thumbs/gloves_crystal.png",
        "forType": "armor"
    },
    {
        "id": "gloves_gold",
        "name": "Găng Vuốt Hoàng Kim",
        "src": "/assets/props/items/gloves_gold.png",
        "thumbSrc": "/assets/props/thumbs/gloves_gold.png",
        "forType": "armor"
    },
    {
        "id": "crown_gold_belt",
        "name": "Thắt Lưng Hoàng Kim Giáp",
        "src": "/assets/props/items/crown_gold_belt.png",
        "thumbSrc": "/assets/props/thumbs/crown_gold_belt.png",
        "forType": "armor"
    },
    {
        "id": "002_Heart_Flask",
        "name": "Bình Máu Trái Tim (Heart Flask)",
        "src": "/assets/props/items/002_Heart_Flask.png",
        "thumbSrc": "/assets/props/thumbs/002_Heart_Flask.png",
        "forType": "alchemy"
    },
    {
        "id": "005_Twin_Chamber_Elixir",
        "name": "Thuốc Tiên Buồng Kép (Twin Elixir)",
        "src": "/assets/props/items/005_Twin_Chamber_Elixir.png",
        "thumbSrc": "/assets/props/thumbs/005_Twin_Chamber_Elixir.png",
        "forType": "alchemy"
    },
    {
        "id": "potion_health",
        "name": "Bình Sinh Mệnh Đỏ Tươi",
        "src": "/assets/props/items/potion_health.png",
        "thumbSrc": "/assets/props/thumbs/potion_health.png",
        "forType": "alchemy"
    },
    {
        "id": "potion_health_small",
        "name": "Bình Sinh Mệnh Nhỏ",
        "src": "/assets/props/items/potion_health_small.png",
        "thumbSrc": "/assets/props/thumbs/potion_health_small.png",
        "forType": "alchemy"
    },
    {
        "id": "potion_health_big",
        "name": "Bình Sinh Mệnh Đại (Cung Đình)",
        "src": "/assets/props/items/potion_health_big.png",
        "thumbSrc": "/assets/props/thumbs/potion_health_big.png",
        "forType": "alchemy"
    },
    {
        "id": "potion_mana",
        "name": "Bình Ma Pháp Lam Biển",
        "src": "/assets/props/items/potion_mana.png",
        "thumbSrc": "/assets/props/thumbs/potion_mana.png",
        "forType": "alchemy"
    },
    {
        "id": "potion_mana_small",
        "name": "Bình Mana Nhỏ",
        "src": "/assets/props/items/potion_mana_small.png",
        "thumbSrc": "/assets/props/thumbs/potion_mana_small.png",
        "forType": "alchemy"
    },
    {
        "id": "potion_mana_big",
        "name": "Bình Mana Đại (Hoàng Gia)",
        "src": "/assets/props/items/potion_mana_big.png",
        "thumbSrc": "/assets/props/thumbs/potion_mana_big.png",
        "forType": "alchemy"
    },
    {
        "id": "potion_poison",
        "name": "Bình Độc Dược Lục Sắc",
        "src": "/assets/props/items/potion_poison.png",
        "thumbSrc": "/assets/props/thumbs/potion_poison.png",
        "forType": "alchemy"
    },
    {
        "id": "potion_poison_small",
        "name": "Lọ Độc Dược Tinh Luyện",
        "src": "/assets/props/items/potion_poison_small.png",
        "thumbSrc": "/assets/props/thumbs/potion_poison_small.png",
        "forType": "alchemy"
    },
    {
        "id": "potion_poison_big",
        "name": "Bình Độc Tố Kịch Độc",
        "src": "/assets/props/items/potion_poison_big.png",
        "thumbSrc": "/assets/props/thumbs/potion_poison_big.png",
        "forType": "alchemy"
    },
    {
        "id": "potion_stamina",
        "name": "Bình Thể Lực Vàng Kim",
        "src": "/assets/props/items/potion_stamina.png",
        "thumbSrc": "/assets/props/thumbs/potion_stamina.png",
        "forType": "alchemy"
    },
    {
        "id": "potion_elixir_small",
        "name": "Thuốc Bổ Thể Lực Tinh Khiết",
        "src": "/assets/props/items/potion_elixir_small.png",
        "thumbSrc": "/assets/props/thumbs/potion_elixir_small.png",
        "forType": "alchemy"
    },
    {
        "id": "potion_elixir_big",
        "name": "Tiên Dược Hồi Phục Toàn Năng",
        "src": "/assets/props/items/potion_elixir_big.png",
        "thumbSrc": "/assets/props/thumbs/potion_elixir_big.png",
        "forType": "alchemy"
    },
    {
        "id": "potion_frost_small",
        "name": "Lọ Kháng Băng Giá",
        "src": "/assets/props/items/potion_frost_small.png",
        "thumbSrc": "/assets/props/thumbs/potion_frost_small.png",
        "forType": "alchemy"
    },
    {
        "id": "potion_frost_big",
        "name": "Bình Băng Sương Đại",
        "src": "/assets/props/items/potion_frost_big.png",
        "thumbSrc": "/assets/props/thumbs/potion_frost_big.png",
        "forType": "alchemy"
    },
    {
        "id": "potion_gold_small",
        "name": "Lọ Tinh Dầu Hoàng Kim",
        "src": "/assets/props/items/potion_gold_small.png",
        "thumbSrc": "/assets/props/thumbs/potion_gold_small.png",
        "forType": "alchemy"
    },
    {
        "id": "potion_gold_big",
        "name": "Bình Tiên Dược Bất Tử",
        "src": "/assets/props/items/potion_gold_big.png",
        "thumbSrc": "/assets/props/thumbs/potion_gold_big.png",
        "forType": "alchemy"
    },
    {
        "id": "powder_red",
        "name": "Bột Hồng Ngọc Luyện Kim",
        "src": "/assets/props/items/powder_red.png",
        "thumbSrc": "/assets/props/thumbs/powder_red.png",
        "forType": "alchemy"
    },
    {
        "id": "powder_cyan",
        "name": "Bột Băng Tinh Lam",
        "src": "/assets/props/items/powder_cyan.png",
        "thumbSrc": "/assets/props/thumbs/powder_cyan.png",
        "forType": "alchemy"
    },
    {
        "id": "powder_purple",
        "name": "Bột Ma Pháp Hư Không",
        "src": "/assets/props/items/powder_purple.png",
        "thumbSrc": "/assets/props/thumbs/powder_purple.png",
        "forType": "alchemy"
    },
    {
        "id": "powder_gold",
        "name": "Bụi Vàng Giả Kim Thuật",
        "src": "/assets/props/items/powder_gold.png",
        "thumbSrc": "/assets/props/thumbs/powder_gold.png",
        "forType": "alchemy"
    },
    {
        "id": "magic_shroom_blue",
        "name": "Nấm Ma Thuật Dạ Quang",
        "src": "/assets/props/items/magic_shroom_blue.png",
        "thumbSrc": "/assets/props/thumbs/magic_shroom_blue.png",
        "forType": "alchemy"
    },
    {
        "id": "mush_green",
        "name": "Nấm Độc Lục Sắc",
        "src": "/assets/props/items/mush_green.png",
        "thumbSrc": "/assets/props/thumbs/mush_green.png",
        "forType": "alchemy"
    },
    {
        "id": "mush_red",
        "name": "Nấm Đốm Đỏ Rực",
        "src": "/assets/props/items/mush_red.png",
        "thumbSrc": "/assets/props/thumbs/mush_red.png",
        "forType": "alchemy"
    },
    {
        "id": "seeds_green",
        "name": "Hạt Giống Cây Thần",
        "src": "/assets/props/items/seeds_green.png",
        "thumbSrc": "/assets/props/thumbs/seeds_green.png",
        "forType": "alchemy"
    },
    {
        "id": "seeds_red",
        "name": "Hạt Giống Đỏ Thần Bí",
        "src": "/assets/props/items/seeds_red.png",
        "thumbSrc": "/assets/props/thumbs/seeds_red.png",
        "forType": "alchemy"
    },
    {
        "id": "ore_herb",
        "name": "Khóm Cỏ Dược Liệu Tươi",
        "src": "/assets/props/items/ore_herb.png",
        "thumbSrc": "/assets/props/thumbs/ore_herb.png",
        "forType": "alchemy"
    },
    {
        "id": "chest_wood_closed",
        "name": "Rương Gỗ Hầm Ngục (Khóa Chặt)",
        "src": "/assets/props/items/chest_wood_closed.png",
        "thumbSrc": "/assets/props/thumbs/chest_wood_closed.png",
        "forType": "chests_mechanisms"
    },
    {
        "id": "chest_wood_open",
        "name": "Rương Gỗ Mở Bung (Tràn Vàng Bạc)",
        "src": "/assets/props/items/chest_wood_open.png",
        "thumbSrc": "/assets/props/thumbs/chest_wood_open.png",
        "forType": "chests_mechanisms"
    },
    {
        "id": "chest_iron_closed",
        "name": "Rương Sắt Cổ Đại (Khóa Chặt)",
        "src": "/assets/props/items/chest_iron_closed.png",
        "thumbSrc": "/assets/props/thumbs/chest_iron_closed.png",
        "forType": "chests_mechanisms"
    },
    {
        "id": "chest_iron_open",
        "name": "Rương Sắt Mở Bung (Kho Báu Hiếm)",
        "src": "/assets/props/items/chest_iron_open.png",
        "thumbSrc": "/assets/props/thumbs/chest_iron_open.png",
        "forType": "chests_mechanisms"
    },
    {
        "id": "chest_gold_closed",
        "name": "Rương Vàng Hoàng Gia (Khóa Ngọc)",
        "src": "/assets/props/items/chest_gold_closed.png",
        "thumbSrc": "/assets/props/thumbs/chest_gold_closed.png",
        "forType": "chests_mechanisms"
    },
    {
        "id": "chest_gold_open",
        "name": "Rương Vàng Mở Bung (Châu Báu Vô Giá)",
        "src": "/assets/props/items/chest_gold_open.png",
        "thumbSrc": "/assets/props/thumbs/chest_gold_open.png",
        "forType": "chests_mechanisms"
    },
    {
        "id": "chest_sheet_iron",
        "name": "Rương Sắt Nguyên Khối Hầm Ngục",
        "src": "/assets/props/items/chest_sheet_iron.png",
        "thumbSrc": "/assets/props/thumbs/chest_sheet_iron.png",
        "forType": "chests_mechanisms"
    },
    {
        "id": "chest_sheet_red",
        "name": "Rương Gỗ Sơn Đỏ Hoàng Gia",
        "src": "/assets/props/items/chest_sheet_red.png",
        "thumbSrc": "/assets/props/thumbs/chest_sheet_red.png",
        "forType": "chests_mechanisms"
    },
    {
        "id": "chest_sheet_blue",
        "name": "Rương Lam Băng Sương",
        "src": "/assets/props/items/chest_sheet_blue.png",
        "thumbSrc": "/assets/props/thumbs/chest_sheet_blue.png",
        "forType": "chests_mechanisms"
    },
    {
        "id": "chest_sheet_purple",
        "name": "Rương Hư Không Tím Cổ Đại",
        "src": "/assets/props/items/chest_sheet_purple.png",
        "thumbSrc": "/assets/props/thumbs/chest_sheet_purple.png",
        "forType": "chests_mechanisms"
    },
    {
        "id": "chest_sheet_gold",
        "name": "Rương Hoàng Kim Thần Thoại",
        "src": "/assets/props/items/chest_sheet_gold.png",
        "thumbSrc": "/assets/props/thumbs/chest_sheet_gold.png",
        "forType": "chests_mechanisms"
    },
    {
        "id": "lever_off",
        "name": "Cần Gạt Cơ Quan (Tắt - Đèn Đỏ)",
        "src": "/assets/props/items/lever_off.png",
        "thumbSrc": "/assets/props/thumbs/lever_off.png",
        "forType": "chests_mechanisms"
    },
    {
        "id": "lever_on",
        "name": "Cần Gạt Cơ Quan (Bật - Đèn Xanh)",
        "src": "/assets/props/items/lever_on.png",
        "thumbSrc": "/assets/props/thumbs/lever_on.png",
        "forType": "chests_mechanisms"
    },
    {
        "id": "portal_idle",
        "name": "Cổng Dịch Chuyển (Ngủ Yên)",
        "src": "/assets/props/items/portal_idle.png",
        "thumbSrc": "/assets/props/thumbs/portal_idle.png",
        "forType": "chests_mechanisms"
    },
    {
        "id": "portal_active",
        "name": "Cổng Dịch Chuyển (Xoáy Sáng Tím)",
        "src": "/assets/props/items/portal_active.png",
        "thumbSrc": "/assets/props/thumbs/portal_active.png",
        "forType": "chests_mechanisms"
    },
    {
        "id": "surv_campfire",
        "name": "Đống Lửa Trại Bập Bùng",
        "src": "/assets/props/items/surv_campfire.png",
        "thumbSrc": "/assets/props/thumbs/surv_campfire.png",
        "forType": "chests_mechanisms"
    },
    {
        "id": "surv_tent",
        "name": "Lều Trại Dã Ngoại Sinh Tồn",
        "src": "/assets/props/items/surv_tent.png",
        "thumbSrc": "/assets/props/thumbs/surv_tent.png",
        "forType": "chests_mechanisms"
    },
    {
        "id": "surv_wood_cabin",
        "name": "Nhà Gỗ Hầm Ngục Tạm",
        "src": "/assets/props/items/surv_wood_cabin.png",
        "thumbSrc": "/assets/props/thumbs/surv_wood_cabin.png",
        "forType": "chests_mechanisms"
    },
    {
        "id": "surv_anvil",
        "name": "Đe Rèn Sắt Thợ Rèn",
        "src": "/assets/props/items/surv_anvil.png",
        "thumbSrc": "/assets/props/thumbs/surv_anvil.png",
        "forType": "chests_mechanisms"
    },
    {
        "id": "surv_cauldron",
        "name": "Nồi Vạc Đun Ma Thuật",
        "src": "/assets/props/items/surv_cauldron.png",
        "thumbSrc": "/assets/props/thumbs/surv_cauldron.png",
        "forType": "chests_mechanisms"
    },
    {
        "id": "book_iron",
        "name": "Sách Ma Thuật Cổ (Thép)",
        "src": "/assets/props/items/book_iron.png",
        "thumbSrc": "/assets/props/thumbs/book_iron.png",
        "forType": "relics_tomes"
    },
    {
        "id": "book_frost",
        "name": "Sách Ma Thuật Cổ (Băng)",
        "src": "/assets/props/items/book_frost.png",
        "thumbSrc": "/assets/props/thumbs/book_frost.png",
        "forType": "relics_tomes"
    },
    {
        "id": "book_void",
        "name": "Sách Ma Thuật Cổ (Hư Không)",
        "src": "/assets/props/items/book_void.png",
        "thumbSrc": "/assets/props/thumbs/book_void.png",
        "forType": "relics_tomes"
    },
    {
        "id": "book_gold",
        "name": "Sách Kinh Thánh Hoàng Kim Thần Khí",
        "src": "/assets/props/items/book_gold.png",
        "thumbSrc": "/assets/props/thumbs/book_gold.png",
        "forType": "relics_tomes"
    },
    {
        "id": "121_Blue_Grimoire",
        "name": "Sách Ma Thuật Cổ Lam (Blue Grimoire)",
        "src": "/assets/props/items/121_Blue_Grimoire.png",
        "thumbSrc": "/assets/props/thumbs/121_Blue_Grimoire.png",
        "forType": "relics_tomes"
    },
    {
        "id": "tome_red_flame",
        "name": "Cổ Thư Ngọn Lửa Hỏa Ngục",
        "src": "/assets/props/items/tome_red_flame.png",
        "thumbSrc": "/assets/props/thumbs/tome_red_flame.png",
        "forType": "relics_tomes"
    },
    {
        "id": "tome_ice_frost",
        "name": "Cổ Thư Băng Giá Cực Bắc",
        "src": "/assets/props/items/tome_ice_frost.png",
        "thumbSrc": "/assets/props/thumbs/tome_ice_frost.png",
        "forType": "relics_tomes"
    },
    {
        "id": "tome_void_purple",
        "name": "Cổ Thư Hư Không Vực Thẳm",
        "src": "/assets/props/items/tome_void_purple.png",
        "thumbSrc": "/assets/props/thumbs/tome_void_purple.png",
        "forType": "relics_tomes"
    },
    {
        "id": "tome_holy_gold",
        "name": "Kinh Thánh Ánh Sáng Hoàng Gia",
        "src": "/assets/props/items/tome_holy_gold.png",
        "thumbSrc": "/assets/props/thumbs/tome_holy_gold.png",
        "forType": "relics_tomes"
    },
    {
        "id": "book_open_sheet",
        "name": "Sách Ma Pháp Mở Trang Giảng Dạy",
        "src": "/assets/props/items/book_open_sheet.png",
        "thumbSrc": "/assets/props/thumbs/book_open_sheet.png",
        "forType": "relics_tomes"
    },
    {
        "id": "scroll_map",
        "name": "Bản Đồ Cổ Kho Báu Bí Mật",
        "src": "/assets/props/items/scroll_map.png",
        "thumbSrc": "/assets/props/thumbs/scroll_map.png",
        "forType": "relics_tomes"
    },
    {
        "id": "scroll_tome",
        "name": "Cuộn Giấy Khế Ước Cổ Đại",
        "src": "/assets/props/items/scroll_tome.png",
        "thumbSrc": "/assets/props/thumbs/scroll_tome.png",
        "forType": "relics_tomes"
    },
    {
        "id": "scroll_arcane",
        "name": "Bản Vẽ Cơ Quan Bí Thuật",
        "src": "/assets/props/items/scroll_arcane.png",
        "thumbSrc": "/assets/props/thumbs/scroll_arcane.png",
        "forType": "relics_tomes"
    },
    {
        "id": "128_Blank_Parchment",
        "name": "Cuộn Giấy Da Ma Pháp Trắng",
        "src": "/assets/props/items/128_Blank_Parchment.png",
        "thumbSrc": "/assets/props/thumbs/128_Blank_Parchment.png",
        "forType": "relics_tomes"
    },
    {
        "id": "rune_plate",
        "name": "Đĩa Bùa Chú Vòng Tròn Phép",
        "src": "/assets/props/items/rune_plate.png",
        "thumbSrc": "/assets/props/thumbs/rune_plate.png",
        "forType": "relics_tomes"
    },
    {
        "id": "tablet_emerald",
        "name": "Bảng Ngọc Lục Bảo Khắc Chữ Thần",
        "src": "/assets/props/items/tablet_emerald.png",
        "thumbSrc": "/assets/props/thumbs/tablet_emerald.png",
        "forType": "relics_tomes"
    },
    {
        "id": "dragon_horns",
        "name": "Cặp Sừng Rồng Cổ Đại",
        "src": "/assets/props/items/dragon_horns.png",
        "thumbSrc": "/assets/props/thumbs/dragon_horns.png",
        "forType": "relics_tomes"
    },
    {
        "id": "141_Candle",
        "name": "Cây Nến Thần Thắp Sáng (Candle)",
        "src": "/assets/props/items/141_Candle.png",
        "thumbSrc": "/assets/props/thumbs/141_Candle.png",
        "forType": "relics_tomes"
    },
    {
        "id": "149_Hand_Mirror",
        "name": "Gương Soi Tiên Tri (Hand Mirror)",
        "src": "/assets/props/items/149_Hand_Mirror.png",
        "thumbSrc": "/assets/props/thumbs/149_Hand_Mirror.png",
        "forType": "relics_tomes"
    },
    {
        "id": "181_Town_Key",
        "name": "Chìa Khóa Thị Trấn Vàng (Master Key)",
        "src": "/assets/props/items/181_Town_Key.png",
        "thumbSrc": "/assets/props/thumbs/181_Town_Key.png",
        "forType": "relics_tomes"
    },
    {
        "id": "191_Feather_Charm",
        "name": "Bùa Lông Vũ Thần Bí (Feather Charm)",
        "src": "/assets/props/items/191_Feather_Charm.png",
        "thumbSrc": "/assets/props/thumbs/191_Feather_Charm.png",
        "forType": "relics_tomes"
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
        "id": "gem_diamond",
        "name": "Kim Cương Bất Hoại (Diamond Gem)",
        "src": "/assets/props/items/gem_diamond.png",
        "thumbSrc": "/assets/props/thumbs/gem_diamond.png",
        "forType": "gems_loot"
    },
    {
        "id": "gem_sapphire_cut",
        "name": "Lam Ngọc Giác Cắt Hoàn Hảo",
        "src": "/assets/props/items/gem_sapphire_cut.png",
        "thumbSrc": "/assets/props/thumbs/gem_sapphire_cut.png",
        "forType": "gems_loot"
    },
    {
        "id": "gem_drop_green",
        "name": "Hạt Ngọc Phỉ Thúy",
        "src": "/assets/props/items/gem_drop_green.png",
        "thumbSrc": "/assets/props/thumbs/gem_drop_green.png",
        "forType": "gems_loot"
    },
    {
        "id": "gem_drop_cyan",
        "name": "Hạt Ngọc Băng Lam",
        "src": "/assets/props/items/gem_drop_cyan.png",
        "thumbSrc": "/assets/props/thumbs/gem_drop_cyan.png",
        "forType": "gems_loot"
    },
    {
        "id": "gem_drop_purple",
        "name": "Hạt Ngọc Tử Tinh",
        "src": "/assets/props/items/gem_drop_purple.png",
        "thumbSrc": "/assets/props/thumbs/gem_drop_purple.png",
        "forType": "gems_loot"
    },
    {
        "id": "gem_drop_gold",
        "name": "Hạt Ngọc Hoàng Kim",
        "src": "/assets/props/items/gem_drop_gold.png",
        "thumbSrc": "/assets/props/thumbs/gem_drop_gold.png",
        "forType": "gems_loot"
    },
    {
        "id": "shard_ruby_red",
        "name": "Mảnh Pha Lê Đỏ Rực",
        "src": "/assets/props/items/shard_ruby_red.png",
        "thumbSrc": "/assets/props/thumbs/shard_ruby_red.png",
        "forType": "gems_loot"
    },
    {
        "id": "shard_cyan_frost",
        "name": "Mảnh Pha Lê Băng Lam",
        "src": "/assets/props/items/shard_cyan_frost.png",
        "thumbSrc": "/assets/props/thumbs/shard_cyan_frost.png",
        "forType": "gems_loot"
    },
    {
        "id": "shard_purple_void",
        "name": "Mảnh Tinh Thể Tử Quang",
        "src": "/assets/props/items/shard_purple_void.png",
        "thumbSrc": "/assets/props/thumbs/shard_purple_void.png",
        "forType": "gems_loot"
    },
    {
        "id": "shard_gold_holy",
        "name": "Mảnh Pha Lê Ánh Sáng Thần",
        "src": "/assets/props/items/shard_gold_holy.png",
        "thumbSrc": "/assets/props/thumbs/shard_gold_holy.png",
        "forType": "gems_loot"
    },
    {
        "id": "crystal_shard_purple",
        "name": "Mảnh Vỡ Tinh Thể Ma Lực",
        "src": "/assets/props/items/crystal_shard_purple.png",
        "thumbSrc": "/assets/props/thumbs/crystal_shard_purple.png",
        "forType": "gems_loot"
    },
    {
        "id": "tear_crystal",
        "name": "Giọt Nước Mắt Tinh Thể",
        "src": "/assets/props/items/tear_crystal.png",
        "thumbSrc": "/assets/props/thumbs/tear_crystal.png",
        "forType": "gems_loot"
    },
    {
        "id": "crystals_ice_cluster",
        "name": "Cụm Băng Tinh Vĩnh Cửu",
        "src": "/assets/props/items/crystals_ice_cluster.png",
        "thumbSrc": "/assets/props/thumbs/crystals_ice_cluster.png",
        "forType": "gems_loot"
    },
    {
        "id": "ore_crystal_pink",
        "name": "Tinh Thể Thạch Anh Tím",
        "src": "/assets/props/items/ore_crystal_pink.png",
        "thumbSrc": "/assets/props/thumbs/ore_crystal_pink.png",
        "forType": "gems_loot"
    },
    {
        "id": "ring_ruby",
        "name": "Nhẫn Hồng Ngọc Rực Rỡ",
        "src": "/assets/props/items/ring_ruby.png",
        "thumbSrc": "/assets/props/thumbs/ring_ruby.png",
        "forType": "gems_loot"
    },
    {
        "id": "ring_bronze",
        "name": "Nhẫn Đồng Cổ Đại",
        "src": "/assets/props/items/ring_bronze.png",
        "thumbSrc": "/assets/props/thumbs/ring_bronze.png",
        "forType": "gems_loot"
    },
    {
        "id": "ring_amethyst",
        "name": "Nhẫn Tử Ngọc Huyền Bí",
        "src": "/assets/props/items/ring_amethyst.png",
        "thumbSrc": "/assets/props/thumbs/ring_amethyst.png",
        "forType": "gems_loot"
    },
    {
        "id": "ring_gold_band",
        "name": "Nhẫn Vàng Ròng Nguyên Khối",
        "src": "/assets/props/items/ring_gold_band.png",
        "thumbSrc": "/assets/props/thumbs/ring_gold_band.png",
        "forType": "gems_loot"
    },
    {
        "id": "ring_choker_pink",
        "name": "Nhẫn Khảm Ngọc Hồng",
        "src": "/assets/props/items/ring_choker_pink.png",
        "thumbSrc": "/assets/props/thumbs/ring_choker_pink.png",
        "forType": "gems_loot"
    },
    {
        "id": "ring_diamond_crest",
        "name": "Nhẫn Kim Cương Đỉnh Cao",
        "src": "/assets/props/items/ring_diamond_crest.png",
        "thumbSrc": "/assets/props/thumbs/ring_diamond_crest.png",
        "forType": "gems_loot"
    },
    {
        "id": "ring_ice_crest",
        "name": "Nhẫn Băng Giá Vĩnh Cửu",
        "src": "/assets/props/items/ring_ice_crest.png",
        "thumbSrc": "/assets/props/thumbs/ring_ice_crest.png",
        "forType": "gems_loot"
    },
    {
        "id": "ring_void_eye",
        "name": "Nhẫn Mắt Hư Không",
        "src": "/assets/props/items/ring_void_eye.png",
        "thumbSrc": "/assets/props/thumbs/ring_void_eye.png",
        "forType": "gems_loot"
    },
    {
        "id": "106_Signet_Ring",
        "name": "Nhẫn Ấn Hoàng Gia (Signet Ring)",
        "src": "/assets/props/items/106_Signet_Ring.png",
        "thumbSrc": "/assets/props/thumbs/106_Signet_Ring.png",
        "forType": "gems_loot"
    },
    {
        "id": "necklace_red",
        "name": "Dây Chuyền Ngọc Đỏ Quý Tộc",
        "src": "/assets/props/items/necklace_red.png",
        "thumbSrc": "/assets/props/thumbs/necklace_red.png",
        "forType": "gems_loot"
    },
    {
        "id": "choker_purple",
        "name": "Vòng Cổ Tử Ngọc Huyền Ảo",
        "src": "/assets/props/items/choker_purple.png",
        "thumbSrc": "/assets/props/thumbs/choker_purple.png",
        "forType": "gems_loot"
    },
    {
        "id": "choker_green",
        "name": "Vòng Ngọc Lục Phỉ Thúy",
        "src": "/assets/props/items/choker_green.png",
        "thumbSrc": "/assets/props/thumbs/choker_green.png",
        "forType": "gems_loot"
    },
    {
        "id": "bracelet_wood",
        "name": "Chuỗi Hạt Gỗ Cổ Thụ",
        "src": "/assets/props/items/bracelet_wood.png",
        "thumbSrc": "/assets/props/thumbs/bracelet_wood.png",
        "forType": "gems_loot"
    },
    {
        "id": "bracelet_jade",
        "name": "Chuỗi Hạt Ngọc Bích Cung Đình",
        "src": "/assets/props/items/bracelet_jade.png",
        "thumbSrc": "/assets/props/thumbs/bracelet_jade.png",
        "forType": "gems_loot"
    },
    {
        "id": "bracelet_purple",
        "name": "Chuỗi Vòng Tay Thần Bí",
        "src": "/assets/props/items/bracelet_purple.png",
        "thumbSrc": "/assets/props/thumbs/bracelet_purple.png",
        "forType": "gems_loot"
    },
    {
        "id": "bracelet_blue",
        "name": "Chuỗi Lam Ngọc Biển Sâu",
        "src": "/assets/props/items/bracelet_blue.png",
        "thumbSrc": "/assets/props/thumbs/bracelet_blue.png",
        "forType": "gems_loot"
    },
    {
        "id": "gold_bar",
        "name": "Thỏi Vàng Cung Đình (Pure Gold Bar)",
        "src": "/assets/props/items/gold_bar.png",
        "thumbSrc": "/assets/props/thumbs/gold_bar.png",
        "forType": "gems_loot"
    },
    {
        "id": "065_Silver_Ingot",
        "name": "Thỏi Bạc Tinh Luyện (Silver Ingot)",
        "src": "/assets/props/items/065_Silver_Ingot.png",
        "thumbSrc": "/assets/props/thumbs/065_Silver_Ingot.png",
        "forType": "gems_loot"
    },
    {
        "id": "nugget_gold",
        "name": "Cục Vàng Ròng Tự Nhiên",
        "src": "/assets/props/items/nugget_gold.png",
        "thumbSrc": "/assets/props/thumbs/nugget_gold.png",
        "forType": "gems_loot"
    },
    {
        "id": "nuggets_gold_cluster",
        "name": "Quặng Vàng Vụn Tự Nhiên",
        "src": "/assets/props/items/nuggets_gold_cluster.png",
        "thumbSrc": "/assets/props/thumbs/nuggets_gold_cluster.png",
        "forType": "gems_loot"
    },
    {
        "id": "coins_gold_stack",
        "name": "Đồng Vàng Cổ Đại",
        "src": "/assets/props/items/coins_gold_stack.png",
        "thumbSrc": "/assets/props/thumbs/coins_gold_stack.png",
        "forType": "gems_loot"
    },
    {
        "id": "101_Coin_Pouch",
        "name": "Túi Tiền Vàng Căng Đầy",
        "src": "/assets/props/items/101_Coin_Pouch.png",
        "thumbSrc": "/assets/props/thumbs/101_Coin_Pouch.png",
        "forType": "gems_loot"
    },
    {
        "id": "pouch_brown",
        "name": "Túi Vải Da Thám Hiểm",
        "src": "/assets/props/items/pouch_brown.png",
        "thumbSrc": "/assets/props/thumbs/pouch_brown.png",
        "forType": "gems_loot"
    },
    {
        "id": "pouch_red",
        "name": "Túi Gấm Đỏ Cung Đình",
        "src": "/assets/props/items/pouch_red.png",
        "thumbSrc": "/assets/props/thumbs/pouch_red.png",
        "forType": "gems_loot"
    },
    {
        "id": "pouch_blue",
        "name": "Túi Lụa Lam Chứa Tiền",
        "src": "/assets/props/items/pouch_blue.png",
        "thumbSrc": "/assets/props/thumbs/pouch_blue.png",
        "forType": "gems_loot"
    },
    {
        "id": "pouch_purple",
        "name": "Túi Vải Nhung Tím Quý Tộc",
        "src": "/assets/props/items/pouch_purple.png",
        "thumbSrc": "/assets/props/thumbs/pouch_purple.png",
        "forType": "gems_loot"
    },
    {
        "id": "pouch_gold_fat",
        "name": "Bao Tải Vàng Bạc Căng Đầy",
        "src": "/assets/props/items/pouch_gold_fat.png",
        "thumbSrc": "/assets/props/thumbs/pouch_gold_fat.png",
        "forType": "gems_loot"
    },
    {
        "id": "ore_iron",
        "name": "Quặng Sắt Hầm Mỏ",
        "src": "/assets/props/items/ore_iron.png",
        "thumbSrc": "/assets/props/thumbs/ore_iron.png",
        "forType": "gems_loot"
    },
    {
        "id": "ore_cyan",
        "name": "Quặng Băng Bạc",
        "src": "/assets/props/items/ore_cyan.png",
        "thumbSrc": "/assets/props/thumbs/ore_cyan.png",
        "forType": "gems_loot"
    },
    {
        "id": "ore_bronze",
        "name": "Quặng Đồng Đỏ",
        "src": "/assets/props/items/ore_bronze.png",
        "thumbSrc": "/assets/props/thumbs/ore_bronze.png",
        "forType": "gems_loot"
    },
    {
        "id": "061_Iron_Ore",
        "name": "Quặng Sắt Hầm Mỏ Thô",
        "src": "/assets/props/items/061_Iron_Ore.png",
        "thumbSrc": "/assets/props/thumbs/061_Iron_Ore.png",
        "forType": "gems_loot"
    },
    {
        "id": "food_bread_01",
        "name": "Ổ Bánh Mì Nướng Nứt Men",
        "src": "/assets/props/items/food_bread_01.png",
        "thumbSrc": "/assets/props/thumbs/food_bread_01.png",
        "forType": "provisions"
    },
    {
        "id": "food_cake_01",
        "name": "Bánh Kem Hoàng Gia Cung Đình",
        "src": "/assets/props/items/food_cake_01.png",
        "thumbSrc": "/assets/props/thumbs/food_cake_01.png",
        "forType": "provisions"
    },
    {
        "id": "food_cheese_01",
        "name": "Bánh Phô Mai Thụy Sĩ Thơm Béo",
        "src": "/assets/props/items/food_cheese_01.png",
        "thumbSrc": "/assets/props/thumbs/food_cheese_01.png",
        "forType": "provisions"
    },
    {
        "id": "food_butter_01",
        "name": "Miếng Bơ Sữa Thượng Hạng",
        "src": "/assets/props/items/food_butter_01.png",
        "thumbSrc": "/assets/props/thumbs/food_butter_01.png",
        "forType": "provisions"
    },
    {
        "id": "food_ham_01",
        "name": "Đùi Heo Muối Xông Khói",
        "src": "/assets/props/items/food_ham_01.png",
        "thumbSrc": "/assets/props/thumbs/food_ham_01.png",
        "forType": "provisions"
    },
    {
        "id": "food_meat_01",
        "name": "Miếng Thịt Bò Bít Tết Tươi",
        "src": "/assets/props/items/food_meat_01.png",
        "thumbSrc": "/assets/props/thumbs/food_meat_01.png",
        "forType": "provisions"
    },
    {
        "id": "food_roast_01",
        "name": "Tảng Thịt Nướng Lửa Hồng",
        "src": "/assets/props/items/food_roast_01.png",
        "thumbSrc": "/assets/props/thumbs/food_roast_01.png",
        "forType": "provisions"
    },
    {
        "id": "food_poultry_01",
        "name": "Gà Nướng Nguyên Con Vàng Ruộm",
        "src": "/assets/props/items/food_poultry_01.png",
        "thumbSrc": "/assets/props/thumbs/food_poultry_01.png",
        "forType": "provisions"
    },
    {
        "id": "food_sausages_01",
        "name": "Xúc Xích Nướng Lò Than",
        "src": "/assets/props/items/food_sausages_01.png",
        "thumbSrc": "/assets/props/thumbs/food_sausages_01.png",
        "forType": "provisions"
    },
    {
        "id": "food_stew_01",
        "name": "Nồi Thịt Hầm Khoai Tây Rượu Vang",
        "src": "/assets/props/items/food_stew_01.png",
        "thumbSrc": "/assets/props/thumbs/food_stew_01.png",
        "forType": "provisions"
    },
    {
        "id": "food_fish_01",
        "name": "Khúc Cá Tuyết Nướng Khói",
        "src": "/assets/props/items/food_fish_01.png",
        "thumbSrc": "/assets/props/thumbs/food_fish_01.png",
        "forType": "provisions"
    },
    {
        "id": "food_dried_01",
        "name": "Dải Thịt Bò Sấy Khô",
        "src": "/assets/props/items/food_dried_01.png",
        "thumbSrc": "/assets/props/thumbs/food_dried_01.png",
        "forType": "provisions"
    },
    {
        "id": "food_eggs_01",
        "name": "Khay Trứng Gà Nông Trại",
        "src": "/assets/props/items/food_eggs_01.png",
        "thumbSrc": "/assets/props/thumbs/food_eggs_01.png",
        "forType": "provisions"
    },
    {
        "id": "food_pie_01",
        "name": "Bánh Nướng Nhân Thịt Cung Đình",
        "src": "/assets/props/items/food_pie_01.png",
        "thumbSrc": "/assets/props/thumbs/food_pie_01.png",
        "forType": "provisions"
    },
    {
        "id": "food_porridge_01",
        "name": "Tô Cháo Yến Mạch Nóng Hổi",
        "src": "/assets/props/items/food_porridge_01.png",
        "thumbSrc": "/assets/props/thumbs/food_porridge_01.png",
        "forType": "provisions"
    },
    {
        "id": "food_preserves_01",
        "name": "Hũ Mứt Trái Cây Cung Đình",
        "src": "/assets/props/items/food_preserves_01.png",
        "thumbSrc": "/assets/props/thumbs/food_preserves_01.png",
        "forType": "provisions"
    },
    {
        "id": "food_honey_01",
        "name": "Hũ Mật Ong Hoa Rừng Tự Nhiên",
        "src": "/assets/props/items/food_honey_01.png",
        "thumbSrc": "/assets/props/thumbs/food_honey_01.png",
        "forType": "provisions"
    },
    {
        "id": "food_wine_01",
        "name": "Chai Rượu Vang Đỏ Cổ Điển",
        "src": "/assets/props/items/food_wine_01.png",
        "thumbSrc": "/assets/props/thumbs/food_wine_01.png",
        "forType": "provisions"
    },
    {
        "id": "food_wine_02",
        "name": "Bình Rượu Vang Trắng Thượng Hạng",
        "src": "/assets/props/items/food_wine_02.png",
        "thumbSrc": "/assets/props/thumbs/food_wine_02.png",
        "forType": "provisions"
    },
    {
        "id": "food_ale_01",
        "name": "Cốc Bia Bơ Lúa Mạch",
        "src": "/assets/props/items/food_ale_01.png",
        "thumbSrc": "/assets/props/thumbs/food_ale_01.png",
        "forType": "provisions"
    },
    {
        "id": "food_cider_01",
        "name": "Bình Rượu Táo Lên Men",
        "src": "/assets/props/items/food_cider_01.png",
        "thumbSrc": "/assets/props/thumbs/food_cider_01.png",
        "forType": "provisions"
    },
    {
        "id": "food_mead_01",
        "name": "Bình Rượu Mật Ong Cổ Truyền",
        "src": "/assets/props/items/food_mead_01.png",
        "thumbSrc": "/assets/props/thumbs/food_mead_01.png",
        "forType": "provisions"
    },
    {
        "id": "food_brew_01",
        "name": "Nước Thảo Dược Hầm Bổ Dưỡng",
        "src": "/assets/props/items/food_brew_01.png",
        "thumbSrc": "/assets/props/thumbs/food_brew_01.png",
        "forType": "provisions"
    },
    {
        "id": "food_milk_01",
        "name": "Bình Gốm Đựng Sữa Tươi",
        "src": "/assets/props/items/food_milk_01.png",
        "thumbSrc": "/assets/props/thumbs/food_milk_01.png",
        "forType": "provisions"
    },
    {
        "id": "food_water_01",
        "name": "Bình Thủy Tinh Nước Suối Khoáng",
        "src": "/assets/props/items/food_water_01.png",
        "thumbSrc": "/assets/props/thumbs/food_water_01.png",
        "forType": "provisions"
    },
    {
        "id": "food_berries_01",
        "name": "Bát Quả Mọng Rừng Tươi",
        "src": "/assets/props/items/food_berries_01.png",
        "thumbSrc": "/assets/props/thumbs/food_berries_01.png",
        "forType": "provisions"
    },
    {
        "id": "food_fruits_01",
        "name": "Đĩa Trái Cây Thập Cẩm",
        "src": "/assets/props/items/food_fruits_01.png",
        "thumbSrc": "/assets/props/thumbs/food_fruits_01.png",
        "forType": "provisions"
    },
    {
        "id": "food_mushrooms_01",
        "name": "Đĩa Nấm Rơm Nướng Cháy Cạnh",
        "src": "/assets/props/items/food_mushrooms_01.png",
        "thumbSrc": "/assets/props/thumbs/food_mushrooms_01.png",
        "forType": "provisions"
    },
    {
        "id": "food_nuts_01",
        "name": "Bát Hạt Dẻ Nướng Thơm",
        "src": "/assets/props/items/food_nuts_01.png",
        "thumbSrc": "/assets/props/thumbs/food_nuts_01.png",
        "forType": "provisions"
    },
    {
        "id": "food_grain_01",
        "name": "Túi Hạt Lúa Mì Xay",
        "src": "/assets/props/items/food_grain_01.png",
        "thumbSrc": "/assets/props/thumbs/food_grain_01.png",
        "forType": "provisions"
    },
    {
        "id": "food_vegetables_01",
        "name": "Rổ Rau Củ Xanh Mướt",
        "src": "/assets/props/items/food_vegetables_01.png",
        "thumbSrc": "/assets/props/thumbs/food_vegetables_01.png",
        "forType": "provisions"
    },
    {
        "id": "021_Bread_Loaf",
        "name": "Ổ Bánh Mì Lúa Mạch",
        "src": "/assets/props/items/021_Bread_Loaf.png",
        "thumbSrc": "/assets/props/thumbs/021_Bread_Loaf.png",
        "forType": "provisions"
    },
    {
        "id": "bread_loaf_sheet",
        "name": "Ổ Bánh Mì Nướng Nóng",
        "src": "/assets/props/items/bread_loaf_sheet.png",
        "thumbSrc": "/assets/props/thumbs/bread_loaf_sheet.png",
        "forType": "provisions"
    },
    {
        "id": "cheese_wedge",
        "name": "Miếng Phô Mai Béo Ngậy",
        "src": "/assets/props/items/cheese_wedge.png",
        "thumbSrc": "/assets/props/thumbs/cheese_wedge.png",
        "forType": "provisions"
    },
    {
        "id": "026_Apple",
        "name": "Quả Táo Rừng Mọng Nước",
        "src": "/assets/props/items/026_Apple.png",
        "thumbSrc": "/assets/props/thumbs/026_Apple.png",
        "forType": "provisions"
    },
    {
        "id": "apple_sheet",
        "name": "Quả Táo Đỏ Giòn",
        "src": "/assets/props/items/apple_sheet.png",
        "thumbSrc": "/assets/props/thumbs/apple_sheet.png",
        "forType": "provisions"
    },
    {
        "id": "apple_green",
        "name": "Quả Táo Xanh Giòn",
        "src": "/assets/props/items/apple_green.png",
        "thumbSrc": "/assets/props/thumbs/apple_green.png",
        "forType": "provisions"
    },
    {
        "id": "orange_fruit",
        "name": "Quả Cam Mọng Nước",
        "src": "/assets/props/items/orange_fruit.png",
        "thumbSrc": "/assets/props/thumbs/orange_fruit.png",
        "forType": "provisions"
    },
    {
        "id": "banana_ripe",
        "name": "Nải Chuối Vàng Chín",
        "src": "/assets/props/items/banana_ripe.png",
        "thumbSrc": "/assets/props/thumbs/banana_ripe.png",
        "forType": "provisions"
    },
    {
        "id": "blueberries_wild",
        "name": "Quả Việt Quất Rừng",
        "src": "/assets/props/items/blueberries_wild.png",
        "thumbSrc": "/assets/props/thumbs/blueberries_wild.png",
        "forType": "provisions"
    },
    {
        "id": "blackberries_dark",
        "name": "Quả Mâm Xôi Đen",
        "src": "/assets/props/items/blackberries_dark.png",
        "thumbSrc": "/assets/props/thumbs/blackberries_dark.png",
        "forType": "provisions"
    },
    {
        "id": "berries_red",
        "name": "Chùm Dâu Đỏ Mọng",
        "src": "/assets/props/items/berries_red.png",
        "thumbSrc": "/assets/props/thumbs/berries_red.png",
        "forType": "provisions"
    },
    {
        "id": "carrot_fresh",
        "name": "Cà Rốt Nông Trại Tươi",
        "src": "/assets/props/items/carrot_fresh.png",
        "thumbSrc": "/assets/props/thumbs/carrot_fresh.png",
        "forType": "provisions"
    },
    {
        "id": "turnip_purple",
        "name": "Củ Cải Tím Ngọt",
        "src": "/assets/props/items/turnip_purple.png",
        "thumbSrc": "/assets/props/thumbs/turnip_purple.png",
        "forType": "provisions"
    },
    {
        "id": "leek_fresh",
        "name": "Bó Tỏi Tây Thu Hoạch",
        "src": "/assets/props/items/leek_fresh.png",
        "thumbSrc": "/assets/props/thumbs/leek_fresh.png",
        "forType": "provisions"
    },
    {
        "id": "041_Wheat_Sheaf",
        "name": "Bó Lúa Mì Thu Hoạch",
        "src": "/assets/props/items/041_Wheat_Sheaf.png",
        "thumbSrc": "/assets/props/thumbs/041_Wheat_Sheaf.png",
        "forType": "provisions"
    },
    {
        "id": "048_Sunflower_Head",
        "name": "Bông Hướng Dương Dược Liệu",
        "src": "/assets/props/items/048_Sunflower_Head.png",
        "thumbSrc": "/assets/props/thumbs/048_Sunflower_Head.png",
        "forType": "provisions"
    },
    {
        "id": "mush_brown",
        "name": "Nấm Hương Nâu Tươi",
        "src": "/assets/props/items/mush_brown.png",
        "thumbSrc": "/assets/props/thumbs/mush_brown.png",
        "forType": "provisions"
    },
    {
        "id": "fish_fresh_sheet",
        "name": "Con Cá Biển Tươi",
        "src": "/assets/props/items/fish_fresh_sheet.png",
        "thumbSrc": "/assets/props/thumbs/fish_fresh_sheet.png",
        "forType": "provisions"
    },
    {
        "id": "surv_backpack",
        "name": "Ba Lô Sinh Tồn Đa Năng",
        "src": "/assets/props/items/surv_backpack.png",
        "thumbSrc": "/assets/props/thumbs/surv_backpack.png",
        "forType": "survival_tools"
    },
    {
        "id": "161_Backpack",
        "name": "Ba Lô Thám Hiểm Da Bò",
        "src": "/assets/props/items/161_Backpack.png",
        "thumbSrc": "/assets/props/thumbs/161_Backpack.png",
        "forType": "survival_tools"
    },
    {
        "id": "surv_medkit",
        "name": "Hộp Cứu Thương Dã Chiến",
        "src": "/assets/props/items/surv_medkit.png",
        "thumbSrc": "/assets/props/thumbs/surv_medkit.png",
        "forType": "survival_tools"
    },
    {
        "id": "surv_lantern",
        "name": "Đèn Bão Dầu Cổ Điển",
        "src": "/assets/props/items/surv_lantern.png",
        "thumbSrc": "/assets/props/thumbs/surv_lantern.png",
        "forType": "survival_tools"
    },
    {
        "id": "surv_fishing_rod",
        "name": "Cần Câu Cá Sông Hồ",
        "src": "/assets/props/items/surv_fishing_rod.png",
        "thumbSrc": "/assets/props/thumbs/surv_fishing_rod.png",
        "forType": "survival_tools"
    },
    {
        "id": "081_Wood_Log",
        "name": "Khúc Gỗ Rừng Cổ Thụ",
        "src": "/assets/props/items/081_Wood_Log.png",
        "thumbSrc": "/assets/props/thumbs/081_Wood_Log.png",
        "forType": "survival_tools"
    },
    {
        "id": "089_Thread_Spools",
        "name": "Cuộn Chỉ Thần Thoại",
        "src": "/assets/props/items/089_Thread_Spools.png",
        "thumbSrc": "/assets/props/thumbs/089_Thread_Spools.png",
        "forType": "survival_tools"
    },
    {
        "id": "food_herbs_01",
        "name": "Bó Thảo Mộc Gia Vị Rừng",
        "src": "/assets/props/items/food_herbs_01.png",
        "thumbSrc": "/assets/props/thumbs/food_herbs_01.png",
        "forType": "survival_tools"
    }
],

  // 3. Bệ Đỡ / Bục Trưng Bày (Pedestals)
  pedestal: [
    {
        "id": "none",
        "name": "Không Bệ (Lơ Lửng Tự Do)",
        "thumbSrc": "/assets/props/thumbs/none.png"
    },
    {
        "id": "stone_altar",
        "name": "Bệ Đá Rêu Phong Cổ Đại",
        "src": "/assets/props/pedestals/pedestal_stone_altar.png",
        "thumbSrc": "/assets/props/thumbs/pedestal_stone_altar.png"
    },
    {
        "id": "rune_circle",
        "name": "Vòng Tròn Rune Ma Thuật",
        "src": "/assets/props/pedestals/pedestal_rune_circle.png",
        "thumbSrc": "/assets/props/thumbs/pedestal_rune_circle.png"
    },
    {
        "id": "royal_cushion",
        "name": "Bục Nhung Đỏ Hoàng Gia",
        "src": "/assets/props/pedestals/pedestal_royal_cushion.png",
        "thumbSrc": "/assets/props/thumbs/pedestal_royal_cushion.png"
    },
    {
        "id": "wood_plinth",
        "name": "Bục Gỗ Hầm Ngục",
        "src": "/assets/props/pedestals/pedestal_wood_plinth.png",
        "thumbSrc": "/assets/props/thumbs/pedestal_wood_plinth.png"
    }
],

  // 4. Hào Quang Phép Thuật (Auras)
  aura: [
    {
        "id": "none",
        "name": "Không Hào Quang",
        "thumbSrc": "/assets/props/thumbs/none.png"
    },
    {
        "id": "legendary_gold",
        "name": "Hào Quang Hoàng Kim (Legendary)",
        "src": "/assets/props/auras/aura_legendary_gold.png",
        "thumbSrc": "/assets/props/thumbs/aura_legendary_gold.png"
    },
    {
        "id": "arcane_blue",
        "name": "Hào Quang Lam Thần Bí (Rare Arcane)",
        "src": "/assets/props/auras/aura_arcane_blue.png",
        "thumbSrc": "/assets/props/thumbs/aura_arcane_blue.png"
    },
    {
        "id": "nether_purple",
        "name": "Hào Quang Hư Không Tím (Epic Nether)",
        "src": "/assets/props/auras/aura_nether_purple.png",
        "thumbSrc": "/assets/props/thumbs/aura_nether_purple.png"
    },
    {
        "id": "fire_red",
        "name": "Hào Quang Rực Lửa (Mythic Fire)",
        "src": "/assets/props/auras/aura_fire_red.png",
        "thumbSrc": "/assets/props/thumbs/aura_fire_red.png"
    },
    {
        "id": "celestial_jade",
        "name": "Hào Quang Ngọc Bích (Celestial Jade)",
        "src": "/assets/props/auras/aura_celestial_jade.png",
        "thumbSrc": "/assets/props/thumbs/aura_celestial_jade.png"
    }
],

  // 5. Hiệu Ứng Bụi Sao & Hạt Sáng (Particle FX)
  effects: [
    {
        "id": "none",
        "name": "Không Hiệu Ứng",
        "thumbSrc": "/assets/props/thumbs/none.png"
    },
    {
        "id": "sparkle_gold",
        "name": "Bụi Sao Vàng Lấp Lánh (Stardust)",
        "src": "/assets/props/effects/fx_sparkle_gold.png",
        "thumbSrc": "/assets/props/thumbs/fx_sparkle_gold.png"
    },
    {
        "id": "sparkle_arcane",
        "name": "Tia Sáng Bí Thuật Xanh (Arcane Sparks)",
        "src": "/assets/props/effects/fx_sparkle_arcane.png",
        "thumbSrc": "/assets/props/thumbs/fx_sparkle_arcane.png"
    },
    {
        "id": "sparkle_cosmic",
        "name": "Vệt Sáng Vũ Trụ Tím (Cosmic Shimmer)",
        "src": "/assets/props/effects/fx_sparkle_cosmic.png",
        "thumbSrc": "/assets/props/thumbs/fx_sparkle_cosmic.png"
    }
]
};

// Bảng màu & Phẩm chất theo độ hiếm
export const propColorPalettes = {
  state: [
    { name: 'Nguyên Bản (Stock)', hex: '#FFFFFF' },
    { name: '🟢 Đặc Sắc (Uncommon)', hex: '#10B981' },
    { name: '🔵 Hiếm Có (Rare)', hex: '#3B82F6' },
    { name: '🟣 Sử Thi (Epic)', hex: '#A855F7' },
    { name: '🟡 Huyền Thoại (Legendary)', hex: '#F59E0B' },
    { name: '🔴 Thần Thoại / Hắc Ám', hex: '#EF4444' },
    { name: '⚪ Tinh Thể Bạc', hex: '#E2E8F0' }
  ],
  pedestal: [
    { name: 'Mặc Định', hex: '#FFFFFF' },
    { name: 'Đá Xám U Tối', hex: '#64748B' },
    { name: 'Rêu Phong Rừng Sâu', hex: '#15803D' },
    { name: 'Vàng Đồng Quý Tộc', hex: '#D97706' },
    { name: 'Gỗ Mun Hắc Ám', hex: '#1E293B' }
  ],
  aura: [
    { name: 'Mặc Định', hex: '#FFFFFF' },
    { name: 'Vàng Kim Rực Rỡ', hex: '#FACC15' },
    { name: 'Xanh Băng Laser', hex: '#38BDF8' },
    { name: 'Tím Ma Thuật', hex: '#C084FC' },
    { name: 'Đỏ Nộ Khí', hex: '#F87171' }
  ],
  effects: [
    { name: 'Mặc Định', hex: '#FFFFFF' },
    { name: 'Vàng Kim', hex: '#FACC15' },
    { name: 'Xanh Lam', hex: '#60A5FA' },
    { name: 'Tím Hồng', hex: '#F472B6' }
  ]
};

/**
 * Composes In-Game Prop layers in correct z-index order
 */
export const getPropLayers = (selections = {}, colors = {}) => {
  const layers = [];
  const selectedType = selections.prop_type || 'weapons';
  const stateId = selections.state;
  const pedestalId = selections.pedestal !== undefined ? selections.pedestal : 'none';
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
