/**
 * Configuration & Layer Composer for Grand In-Game Props & Items Studio
 * Features 2082 high-quality pixel art and RPG items across 8 categories:
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
    },
    {
        "id": "med7_r00_c00_000",
        "name": "Khí Giới Trung Cổ #01-01",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r00_c00_000.png",
        "thumbSrc": "/assets/props/thumbs/med7_r00_c00_000.png"
    },
    {
        "id": "med7_r00_c01_001",
        "name": "Khí Giới Trung Cổ #01-02",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r00_c01_001.png",
        "thumbSrc": "/assets/props/thumbs/med7_r00_c01_001.png"
    },
    {
        "id": "med7_r00_c02_002",
        "name": "Khí Giới Trung Cổ #01-03",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r00_c02_002.png",
        "thumbSrc": "/assets/props/thumbs/med7_r00_c02_002.png"
    },
    {
        "id": "med7_r00_c03_003",
        "name": "Khí Giới Trung Cổ #01-04",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r00_c03_003.png",
        "thumbSrc": "/assets/props/thumbs/med7_r00_c03_003.png"
    },
    {
        "id": "med7_r00_c04_004",
        "name": "Khí Giới Trung Cổ #01-05",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r00_c04_004.png",
        "thumbSrc": "/assets/props/thumbs/med7_r00_c04_004.png"
    },
    {
        "id": "med7_r00_c05_005",
        "name": "Khí Giới Trung Cổ #01-06",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r00_c05_005.png",
        "thumbSrc": "/assets/props/thumbs/med7_r00_c05_005.png"
    },
    {
        "id": "med7_r00_c06_006",
        "name": "Khí Giới Trung Cổ #01-07",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r00_c06_006.png",
        "thumbSrc": "/assets/props/thumbs/med7_r00_c06_006.png"
    },
    {
        "id": "med7_r00_c07_007",
        "name": "Khí Giới Trung Cổ #01-08",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r00_c07_007.png",
        "thumbSrc": "/assets/props/thumbs/med7_r00_c07_007.png"
    },
    {
        "id": "med7_r00_c08_008",
        "name": "Khí Giới Trung Cổ #01-09",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r00_c08_008.png",
        "thumbSrc": "/assets/props/thumbs/med7_r00_c08_008.png"
    },
    {
        "id": "med7_r00_c09_009",
        "name": "Khí Giới Trung Cổ #01-10",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r00_c09_009.png",
        "thumbSrc": "/assets/props/thumbs/med7_r00_c09_009.png"
    },
    {
        "id": "med7_r00_c10_010",
        "name": "Khí Giới Trung Cổ #01-11",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r00_c10_010.png",
        "thumbSrc": "/assets/props/thumbs/med7_r00_c10_010.png"
    },
    {
        "id": "med7_r00_c11_011",
        "name": "Khí Giới Trung Cổ #01-12",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r00_c11_011.png",
        "thumbSrc": "/assets/props/thumbs/med7_r00_c11_011.png"
    },
    {
        "id": "med7_r00_c12_012",
        "name": "Khí Giới Trung Cổ #01-13",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r00_c12_012.png",
        "thumbSrc": "/assets/props/thumbs/med7_r00_c12_012.png"
    },
    {
        "id": "med7_r00_c13_013",
        "name": "Khí Giới Trung Cổ #01-14",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r00_c13_013.png",
        "thumbSrc": "/assets/props/thumbs/med7_r00_c13_013.png"
    },
    {
        "id": "med7_r00_c14_014",
        "name": "Khí Giới Trung Cổ #01-15",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r00_c14_014.png",
        "thumbSrc": "/assets/props/thumbs/med7_r00_c14_014.png"
    },
    {
        "id": "med7_r00_c15_015",
        "name": "Khí Giới Trung Cổ #01-16",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r00_c15_015.png",
        "thumbSrc": "/assets/props/thumbs/med7_r00_c15_015.png"
    },
    {
        "id": "med7_r01_c00_016",
        "name": "Khí Giới Trung Cổ #02-01",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r01_c00_016.png",
        "thumbSrc": "/assets/props/thumbs/med7_r01_c00_016.png"
    },
    {
        "id": "med7_r01_c01_017",
        "name": "Khí Giới Trung Cổ #02-02",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r01_c01_017.png",
        "thumbSrc": "/assets/props/thumbs/med7_r01_c01_017.png"
    },
    {
        "id": "med7_r01_c02_018",
        "name": "Khí Giới Trung Cổ #02-03",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r01_c02_018.png",
        "thumbSrc": "/assets/props/thumbs/med7_r01_c02_018.png"
    },
    {
        "id": "med7_r01_c03_019",
        "name": "Khí Giới Trung Cổ #02-04",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r01_c03_019.png",
        "thumbSrc": "/assets/props/thumbs/med7_r01_c03_019.png"
    },
    {
        "id": "med7_r01_c04_020",
        "name": "Khí Giới Trung Cổ #02-05",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r01_c04_020.png",
        "thumbSrc": "/assets/props/thumbs/med7_r01_c04_020.png"
    },
    {
        "id": "med7_r01_c05_021",
        "name": "Khí Giới Trung Cổ #02-06",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r01_c05_021.png",
        "thumbSrc": "/assets/props/thumbs/med7_r01_c05_021.png"
    },
    {
        "id": "med7_r01_c06_022",
        "name": "Khí Giới Trung Cổ #02-07",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r01_c06_022.png",
        "thumbSrc": "/assets/props/thumbs/med7_r01_c06_022.png"
    },
    {
        "id": "med7_r01_c07_023",
        "name": "Khí Giới Trung Cổ #02-08",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r01_c07_023.png",
        "thumbSrc": "/assets/props/thumbs/med7_r01_c07_023.png"
    },
    {
        "id": "med7_r01_c08_024",
        "name": "Khí Giới Trung Cổ #02-09",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r01_c08_024.png",
        "thumbSrc": "/assets/props/thumbs/med7_r01_c08_024.png"
    },
    {
        "id": "med7_r01_c09_025",
        "name": "Khí Giới Trung Cổ #02-10",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r01_c09_025.png",
        "thumbSrc": "/assets/props/thumbs/med7_r01_c09_025.png"
    },
    {
        "id": "med7_r01_c10_026",
        "name": "Khí Giới Trung Cổ #02-11",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r01_c10_026.png",
        "thumbSrc": "/assets/props/thumbs/med7_r01_c10_026.png"
    },
    {
        "id": "med7_r01_c11_027",
        "name": "Khí Giới Trung Cổ #02-12",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r01_c11_027.png",
        "thumbSrc": "/assets/props/thumbs/med7_r01_c11_027.png"
    },
    {
        "id": "med7_r01_c12_028",
        "name": "Khí Giới Trung Cổ #02-13",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r01_c12_028.png",
        "thumbSrc": "/assets/props/thumbs/med7_r01_c12_028.png"
    },
    {
        "id": "med7_r01_c13_029",
        "name": "Khí Giới Trung Cổ #02-14",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r01_c13_029.png",
        "thumbSrc": "/assets/props/thumbs/med7_r01_c13_029.png"
    },
    {
        "id": "med7_r01_c14_030",
        "name": "Khí Giới Trung Cổ #02-15",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r01_c14_030.png",
        "thumbSrc": "/assets/props/thumbs/med7_r01_c14_030.png"
    },
    {
        "id": "med7_r01_c15_031",
        "name": "Khí Giới Trung Cổ #02-16",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r01_c15_031.png",
        "thumbSrc": "/assets/props/thumbs/med7_r01_c15_031.png"
    },
    {
        "id": "med7_r02_c00_032",
        "name": "Khí Giới Trung Cổ #03-01",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r02_c00_032.png",
        "thumbSrc": "/assets/props/thumbs/med7_r02_c00_032.png"
    },
    {
        "id": "med7_r02_c01_033",
        "name": "Khí Giới Trung Cổ #03-02",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r02_c01_033.png",
        "thumbSrc": "/assets/props/thumbs/med7_r02_c01_033.png"
    },
    {
        "id": "med7_r02_c02_034",
        "name": "Khí Giới Trung Cổ #03-03",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r02_c02_034.png",
        "thumbSrc": "/assets/props/thumbs/med7_r02_c02_034.png"
    },
    {
        "id": "med7_r02_c03_035",
        "name": "Khí Giới Trung Cổ #03-04",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r02_c03_035.png",
        "thumbSrc": "/assets/props/thumbs/med7_r02_c03_035.png"
    },
    {
        "id": "med7_r02_c04_036",
        "name": "Khí Giới Trung Cổ #03-05",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r02_c04_036.png",
        "thumbSrc": "/assets/props/thumbs/med7_r02_c04_036.png"
    },
    {
        "id": "med7_r02_c05_037",
        "name": "Khí Giới Trung Cổ #03-06",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r02_c05_037.png",
        "thumbSrc": "/assets/props/thumbs/med7_r02_c05_037.png"
    },
    {
        "id": "med7_r02_c06_038",
        "name": "Khí Giới Trung Cổ #03-07",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r02_c06_038.png",
        "thumbSrc": "/assets/props/thumbs/med7_r02_c06_038.png"
    },
    {
        "id": "med7_r02_c07_039",
        "name": "Khí Giới Trung Cổ #03-08",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r02_c07_039.png",
        "thumbSrc": "/assets/props/thumbs/med7_r02_c07_039.png"
    },
    {
        "id": "med7_r02_c08_040",
        "name": "Khí Giới Trung Cổ #03-09",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r02_c08_040.png",
        "thumbSrc": "/assets/props/thumbs/med7_r02_c08_040.png"
    },
    {
        "id": "med7_r02_c09_041",
        "name": "Khí Giới Trung Cổ #03-10",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r02_c09_041.png",
        "thumbSrc": "/assets/props/thumbs/med7_r02_c09_041.png"
    },
    {
        "id": "med7_r02_c10_042",
        "name": "Khí Giới Trung Cổ #03-11",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r02_c10_042.png",
        "thumbSrc": "/assets/props/thumbs/med7_r02_c10_042.png"
    },
    {
        "id": "med7_r02_c11_043",
        "name": "Khí Giới Trung Cổ #03-12",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r02_c11_043.png",
        "thumbSrc": "/assets/props/thumbs/med7_r02_c11_043.png"
    },
    {
        "id": "med7_r02_c12_044",
        "name": "Khí Giới Trung Cổ #03-13",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r02_c12_044.png",
        "thumbSrc": "/assets/props/thumbs/med7_r02_c12_044.png"
    },
    {
        "id": "med7_r02_c13_045",
        "name": "Khí Giới Trung Cổ #03-14",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r02_c13_045.png",
        "thumbSrc": "/assets/props/thumbs/med7_r02_c13_045.png"
    },
    {
        "id": "med7_r02_c14_046",
        "name": "Khí Giới Trung Cổ #03-15",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r02_c14_046.png",
        "thumbSrc": "/assets/props/thumbs/med7_r02_c14_046.png"
    },
    {
        "id": "med7_r02_c15_047",
        "name": "Khí Giới Trung Cổ #03-16",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r02_c15_047.png",
        "thumbSrc": "/assets/props/thumbs/med7_r02_c15_047.png"
    },
    {
        "id": "med7_r03_c00_048",
        "name": "Khí Giới Trung Cổ #04-01",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r03_c00_048.png",
        "thumbSrc": "/assets/props/thumbs/med7_r03_c00_048.png"
    },
    {
        "id": "med7_r03_c01_049",
        "name": "Khí Giới Trung Cổ #04-02",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r03_c01_049.png",
        "thumbSrc": "/assets/props/thumbs/med7_r03_c01_049.png"
    },
    {
        "id": "med7_r03_c02_050",
        "name": "Khí Giới Trung Cổ #04-03",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r03_c02_050.png",
        "thumbSrc": "/assets/props/thumbs/med7_r03_c02_050.png"
    },
    {
        "id": "med7_r03_c03_051",
        "name": "Khí Giới Trung Cổ #04-04",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r03_c03_051.png",
        "thumbSrc": "/assets/props/thumbs/med7_r03_c03_051.png"
    },
    {
        "id": "med7_r03_c04_052",
        "name": "Khí Giới Trung Cổ #04-05",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r03_c04_052.png",
        "thumbSrc": "/assets/props/thumbs/med7_r03_c04_052.png"
    },
    {
        "id": "med7_r03_c05_053",
        "name": "Khí Giới Trung Cổ #04-06",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r03_c05_053.png",
        "thumbSrc": "/assets/props/thumbs/med7_r03_c05_053.png"
    },
    {
        "id": "med7_r03_c06_054",
        "name": "Khí Giới Trung Cổ #04-07",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r03_c06_054.png",
        "thumbSrc": "/assets/props/thumbs/med7_r03_c06_054.png"
    },
    {
        "id": "med7_r03_c07_055",
        "name": "Khí Giới Trung Cổ #04-08",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r03_c07_055.png",
        "thumbSrc": "/assets/props/thumbs/med7_r03_c07_055.png"
    },
    {
        "id": "med7_r03_c08_056",
        "name": "Khí Giới Trung Cổ #04-09",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r03_c08_056.png",
        "thumbSrc": "/assets/props/thumbs/med7_r03_c08_056.png"
    },
    {
        "id": "med7_r03_c09_057",
        "name": "Khí Giới Trung Cổ #04-10",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r03_c09_057.png",
        "thumbSrc": "/assets/props/thumbs/med7_r03_c09_057.png"
    },
    {
        "id": "med7_r03_c10_058",
        "name": "Khí Giới Trung Cổ #04-11",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r03_c10_058.png",
        "thumbSrc": "/assets/props/thumbs/med7_r03_c10_058.png"
    },
    {
        "id": "med7_r03_c11_059",
        "name": "Khí Giới Trung Cổ #04-12",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r03_c11_059.png",
        "thumbSrc": "/assets/props/thumbs/med7_r03_c11_059.png"
    },
    {
        "id": "med7_r03_c12_060",
        "name": "Khí Giới Trung Cổ #04-13",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r03_c12_060.png",
        "thumbSrc": "/assets/props/thumbs/med7_r03_c12_060.png"
    },
    {
        "id": "med7_r03_c13_061",
        "name": "Khí Giới Trung Cổ #04-14",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r03_c13_061.png",
        "thumbSrc": "/assets/props/thumbs/med7_r03_c13_061.png"
    },
    {
        "id": "med7_r03_c14_062",
        "name": "Khí Giới Trung Cổ #04-15",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r03_c14_062.png",
        "thumbSrc": "/assets/props/thumbs/med7_r03_c14_062.png"
    },
    {
        "id": "med7_r03_c15_063",
        "name": "Khí Giới Trung Cổ #04-16",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r03_c15_063.png",
        "thumbSrc": "/assets/props/thumbs/med7_r03_c15_063.png"
    },
    {
        "id": "med7_r04_c00_064",
        "name": "Khí Giới Trung Cổ #05-01",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r04_c00_064.png",
        "thumbSrc": "/assets/props/thumbs/med7_r04_c00_064.png"
    },
    {
        "id": "med7_r04_c01_065",
        "name": "Khí Giới Trung Cổ #05-02",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r04_c01_065.png",
        "thumbSrc": "/assets/props/thumbs/med7_r04_c01_065.png"
    },
    {
        "id": "med7_r04_c02_066",
        "name": "Khí Giới Trung Cổ #05-03",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r04_c02_066.png",
        "thumbSrc": "/assets/props/thumbs/med7_r04_c02_066.png"
    },
    {
        "id": "med7_r04_c03_067",
        "name": "Khí Giới Trung Cổ #05-04",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r04_c03_067.png",
        "thumbSrc": "/assets/props/thumbs/med7_r04_c03_067.png"
    },
    {
        "id": "med7_r04_c04_068",
        "name": "Khí Giới Trung Cổ #05-05",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r04_c04_068.png",
        "thumbSrc": "/assets/props/thumbs/med7_r04_c04_068.png"
    },
    {
        "id": "med7_r04_c05_069",
        "name": "Khí Giới Trung Cổ #05-06",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r04_c05_069.png",
        "thumbSrc": "/assets/props/thumbs/med7_r04_c05_069.png"
    },
    {
        "id": "med7_r04_c06_070",
        "name": "Khí Giới Trung Cổ #05-07",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r04_c06_070.png",
        "thumbSrc": "/assets/props/thumbs/med7_r04_c06_070.png"
    },
    {
        "id": "med7_r04_c07_071",
        "name": "Khí Giới Trung Cổ #05-08",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r04_c07_071.png",
        "thumbSrc": "/assets/props/thumbs/med7_r04_c07_071.png"
    },
    {
        "id": "med7_r04_c08_072",
        "name": "Khí Giới Trung Cổ #05-09",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r04_c08_072.png",
        "thumbSrc": "/assets/props/thumbs/med7_r04_c08_072.png"
    },
    {
        "id": "med7_r04_c09_073",
        "name": "Khí Giới Trung Cổ #05-10",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r04_c09_073.png",
        "thumbSrc": "/assets/props/thumbs/med7_r04_c09_073.png"
    },
    {
        "id": "med7_r04_c10_074",
        "name": "Khí Giới Trung Cổ #05-11",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r04_c10_074.png",
        "thumbSrc": "/assets/props/thumbs/med7_r04_c10_074.png"
    },
    {
        "id": "med7_r04_c11_075",
        "name": "Khí Giới Trung Cổ #05-12",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r04_c11_075.png",
        "thumbSrc": "/assets/props/thumbs/med7_r04_c11_075.png"
    },
    {
        "id": "med7_r04_c12_076",
        "name": "Khí Giới Trung Cổ #05-13",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r04_c12_076.png",
        "thumbSrc": "/assets/props/thumbs/med7_r04_c12_076.png"
    },
    {
        "id": "med7_r04_c13_077",
        "name": "Khí Giới Trung Cổ #05-14",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r04_c13_077.png",
        "thumbSrc": "/assets/props/thumbs/med7_r04_c13_077.png"
    },
    {
        "id": "med7_r04_c14_078",
        "name": "Khí Giới Trung Cổ #05-15",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r04_c14_078.png",
        "thumbSrc": "/assets/props/thumbs/med7_r04_c14_078.png"
    },
    {
        "id": "med7_r04_c15_079",
        "name": "Khí Giới Trung Cổ #05-16",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r04_c15_079.png",
        "thumbSrc": "/assets/props/thumbs/med7_r04_c15_079.png"
    },
    {
        "id": "med7_r05_c00_080",
        "name": "Khí Giới Trung Cổ #06-01",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r05_c00_080.png",
        "thumbSrc": "/assets/props/thumbs/med7_r05_c00_080.png"
    },
    {
        "id": "med7_r05_c01_081",
        "name": "Khí Giới Trung Cổ #06-02",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r05_c01_081.png",
        "thumbSrc": "/assets/props/thumbs/med7_r05_c01_081.png"
    },
    {
        "id": "med7_r05_c02_082",
        "name": "Khí Giới Trung Cổ #06-03",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r05_c02_082.png",
        "thumbSrc": "/assets/props/thumbs/med7_r05_c02_082.png"
    },
    {
        "id": "med7_r05_c03_083",
        "name": "Khí Giới Trung Cổ #06-04",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r05_c03_083.png",
        "thumbSrc": "/assets/props/thumbs/med7_r05_c03_083.png"
    },
    {
        "id": "med7_r05_c04_084",
        "name": "Khí Giới Trung Cổ #06-05",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r05_c04_084.png",
        "thumbSrc": "/assets/props/thumbs/med7_r05_c04_084.png"
    },
    {
        "id": "med7_r05_c05_085",
        "name": "Khí Giới Trung Cổ #06-06",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r05_c05_085.png",
        "thumbSrc": "/assets/props/thumbs/med7_r05_c05_085.png"
    },
    {
        "id": "med7_r05_c06_086",
        "name": "Khí Giới Trung Cổ #06-07",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r05_c06_086.png",
        "thumbSrc": "/assets/props/thumbs/med7_r05_c06_086.png"
    },
    {
        "id": "med7_r05_c07_087",
        "name": "Khí Giới Trung Cổ #06-08",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r05_c07_087.png",
        "thumbSrc": "/assets/props/thumbs/med7_r05_c07_087.png"
    },
    {
        "id": "med7_r05_c08_088",
        "name": "Khí Giới Trung Cổ #06-09",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r05_c08_088.png",
        "thumbSrc": "/assets/props/thumbs/med7_r05_c08_088.png"
    },
    {
        "id": "med7_r05_c09_089",
        "name": "Khí Giới Trung Cổ #06-10",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r05_c09_089.png",
        "thumbSrc": "/assets/props/thumbs/med7_r05_c09_089.png"
    },
    {
        "id": "med7_r05_c10_090",
        "name": "Khí Giới Trung Cổ #06-11",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r05_c10_090.png",
        "thumbSrc": "/assets/props/thumbs/med7_r05_c10_090.png"
    },
    {
        "id": "med7_r05_c11_091",
        "name": "Khí Giới Trung Cổ #06-12",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r05_c11_091.png",
        "thumbSrc": "/assets/props/thumbs/med7_r05_c11_091.png"
    },
    {
        "id": "med7_r05_c12_092",
        "name": "Khí Giới Trung Cổ #06-13",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r05_c12_092.png",
        "thumbSrc": "/assets/props/thumbs/med7_r05_c12_092.png"
    },
    {
        "id": "med7_r05_c13_093",
        "name": "Khí Giới Trung Cổ #06-14",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r05_c13_093.png",
        "thumbSrc": "/assets/props/thumbs/med7_r05_c13_093.png"
    },
    {
        "id": "med7_r05_c14_094",
        "name": "Khí Giới Trung Cổ #06-15",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r05_c14_094.png",
        "thumbSrc": "/assets/props/thumbs/med7_r05_c14_094.png"
    },
    {
        "id": "med7_r05_c15_095",
        "name": "Khí Giới Trung Cổ #06-16",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r05_c15_095.png",
        "thumbSrc": "/assets/props/thumbs/med7_r05_c15_095.png"
    },
    {
        "id": "med7_r06_c00_096",
        "name": "Khí Giới Trung Cổ #07-01",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r06_c00_096.png",
        "thumbSrc": "/assets/props/thumbs/med7_r06_c00_096.png"
    },
    {
        "id": "med7_r06_c01_097",
        "name": "Khí Giới Trung Cổ #07-02",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r06_c01_097.png",
        "thumbSrc": "/assets/props/thumbs/med7_r06_c01_097.png"
    },
    {
        "id": "med7_r06_c02_098",
        "name": "Khí Giới Trung Cổ #07-03",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r06_c02_098.png",
        "thumbSrc": "/assets/props/thumbs/med7_r06_c02_098.png"
    },
    {
        "id": "med7_r06_c03_099",
        "name": "Khí Giới Trung Cổ #07-04",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r06_c03_099.png",
        "thumbSrc": "/assets/props/thumbs/med7_r06_c03_099.png"
    },
    {
        "id": "med7_r06_c04_100",
        "name": "Khí Giới Trung Cổ #07-05",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r06_c04_100.png",
        "thumbSrc": "/assets/props/thumbs/med7_r06_c04_100.png"
    },
    {
        "id": "med7_r06_c05_101",
        "name": "Khí Giới Trung Cổ #07-06",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r06_c05_101.png",
        "thumbSrc": "/assets/props/thumbs/med7_r06_c05_101.png"
    },
    {
        "id": "med7_r06_c06_102",
        "name": "Khí Giới Trung Cổ #07-07",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r06_c06_102.png",
        "thumbSrc": "/assets/props/thumbs/med7_r06_c06_102.png"
    },
    {
        "id": "med7_r06_c07_103",
        "name": "Khí Giới Trung Cổ #07-08",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r06_c07_103.png",
        "thumbSrc": "/assets/props/thumbs/med7_r06_c07_103.png"
    },
    {
        "id": "med7_r06_c08_104",
        "name": "Khí Giới Trung Cổ #07-09",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r06_c08_104.png",
        "thumbSrc": "/assets/props/thumbs/med7_r06_c08_104.png"
    },
    {
        "id": "med7_r06_c09_105",
        "name": "Khí Giới Trung Cổ #07-10",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r06_c09_105.png",
        "thumbSrc": "/assets/props/thumbs/med7_r06_c09_105.png"
    },
    {
        "id": "med7_r06_c10_106",
        "name": "Khí Giới Trung Cổ #07-11",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r06_c10_106.png",
        "thumbSrc": "/assets/props/thumbs/med7_r06_c10_106.png"
    },
    {
        "id": "med7_r06_c11_107",
        "name": "Khí Giới Trung Cổ #07-12",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r06_c11_107.png",
        "thumbSrc": "/assets/props/thumbs/med7_r06_c11_107.png"
    },
    {
        "id": "med7_r06_c12_108",
        "name": "Khí Giới Trung Cổ #07-13",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r06_c12_108.png",
        "thumbSrc": "/assets/props/thumbs/med7_r06_c12_108.png"
    },
    {
        "id": "med7_r06_c13_109",
        "name": "Khí Giới Trung Cổ #07-14",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r06_c13_109.png",
        "thumbSrc": "/assets/props/thumbs/med7_r06_c13_109.png"
    },
    {
        "id": "med7_r06_c14_110",
        "name": "Khí Giới Trung Cổ #07-15",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r06_c14_110.png",
        "thumbSrc": "/assets/props/thumbs/med7_r06_c14_110.png"
    },
    {
        "id": "med7_r06_c15_111",
        "name": "Khí Giới Trung Cổ #07-16",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r06_c15_111.png",
        "thumbSrc": "/assets/props/thumbs/med7_r06_c15_111.png"
    },
    {
        "id": "med7_r07_c00_112",
        "name": "Khí Giới Trung Cổ #08-01",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r07_c00_112.png",
        "thumbSrc": "/assets/props/thumbs/med7_r07_c00_112.png"
    },
    {
        "id": "med7_r07_c01_113",
        "name": "Khí Giới Trung Cổ #08-02",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r07_c01_113.png",
        "thumbSrc": "/assets/props/thumbs/med7_r07_c01_113.png"
    },
    {
        "id": "med7_r07_c02_114",
        "name": "Khí Giới Trung Cổ #08-03",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r07_c02_114.png",
        "thumbSrc": "/assets/props/thumbs/med7_r07_c02_114.png"
    },
    {
        "id": "med7_r07_c03_115",
        "name": "Khí Giới Trung Cổ #08-04",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r07_c03_115.png",
        "thumbSrc": "/assets/props/thumbs/med7_r07_c03_115.png"
    },
    {
        "id": "med7_r07_c04_116",
        "name": "Khí Giới Trung Cổ #08-05",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r07_c04_116.png",
        "thumbSrc": "/assets/props/thumbs/med7_r07_c04_116.png"
    },
    {
        "id": "med7_r07_c05_117",
        "name": "Khí Giới Trung Cổ #08-06",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r07_c05_117.png",
        "thumbSrc": "/assets/props/thumbs/med7_r07_c05_117.png"
    },
    {
        "id": "med7_r07_c06_118",
        "name": "Khí Giới Trung Cổ #08-07",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r07_c06_118.png",
        "thumbSrc": "/assets/props/thumbs/med7_r07_c06_118.png"
    },
    {
        "id": "med7_r07_c07_119",
        "name": "Khí Giới Trung Cổ #08-08",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r07_c07_119.png",
        "thumbSrc": "/assets/props/thumbs/med7_r07_c07_119.png"
    },
    {
        "id": "med7_r07_c08_120",
        "name": "Khí Giới Trung Cổ #08-09",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r07_c08_120.png",
        "thumbSrc": "/assets/props/thumbs/med7_r07_c08_120.png"
    },
    {
        "id": "med7_r07_c09_121",
        "name": "Khí Giới Trung Cổ #08-10",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r07_c09_121.png",
        "thumbSrc": "/assets/props/thumbs/med7_r07_c09_121.png"
    },
    {
        "id": "med7_r07_c10_122",
        "name": "Khí Giới Trung Cổ #08-11",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r07_c10_122.png",
        "thumbSrc": "/assets/props/thumbs/med7_r07_c10_122.png"
    },
    {
        "id": "med7_r07_c11_123",
        "name": "Khí Giới Trung Cổ #08-12",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r07_c11_123.png",
        "thumbSrc": "/assets/props/thumbs/med7_r07_c11_123.png"
    },
    {
        "id": "med7_r07_c12_124",
        "name": "Khí Giới Trung Cổ #08-13",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r07_c12_124.png",
        "thumbSrc": "/assets/props/thumbs/med7_r07_c12_124.png"
    },
    {
        "id": "med7_r07_c13_125",
        "name": "Khí Giới Trung Cổ #08-14",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r07_c13_125.png",
        "thumbSrc": "/assets/props/thumbs/med7_r07_c13_125.png"
    },
    {
        "id": "med7_r07_c14_126",
        "name": "Khí Giới Trung Cổ #08-15",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r07_c14_126.png",
        "thumbSrc": "/assets/props/thumbs/med7_r07_c14_126.png"
    },
    {
        "id": "med7_r07_c15_127",
        "name": "Khí Giới Trung Cổ #08-16",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r07_c15_127.png",
        "thumbSrc": "/assets/props/thumbs/med7_r07_c15_127.png"
    },
    {
        "id": "med7_r08_c00_128",
        "name": "Khí Giới Trung Cổ #09-01",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r08_c00_128.png",
        "thumbSrc": "/assets/props/thumbs/med7_r08_c00_128.png"
    },
    {
        "id": "med7_r08_c01_129",
        "name": "Khí Giới Trung Cổ #09-02",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r08_c01_129.png",
        "thumbSrc": "/assets/props/thumbs/med7_r08_c01_129.png"
    },
    {
        "id": "med7_r08_c02_130",
        "name": "Khí Giới Trung Cổ #09-03",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r08_c02_130.png",
        "thumbSrc": "/assets/props/thumbs/med7_r08_c02_130.png"
    },
    {
        "id": "med7_r08_c03_131",
        "name": "Khí Giới Trung Cổ #09-04",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r08_c03_131.png",
        "thumbSrc": "/assets/props/thumbs/med7_r08_c03_131.png"
    },
    {
        "id": "med7_r08_c04_132",
        "name": "Khí Giới Trung Cổ #09-05",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r08_c04_132.png",
        "thumbSrc": "/assets/props/thumbs/med7_r08_c04_132.png"
    },
    {
        "id": "med7_r08_c05_133",
        "name": "Khí Giới Trung Cổ #09-06",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r08_c05_133.png",
        "thumbSrc": "/assets/props/thumbs/med7_r08_c05_133.png"
    },
    {
        "id": "med7_r08_c06_134",
        "name": "Khí Giới Trung Cổ #09-07",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r08_c06_134.png",
        "thumbSrc": "/assets/props/thumbs/med7_r08_c06_134.png"
    },
    {
        "id": "med7_r08_c07_135",
        "name": "Khí Giới Trung Cổ #09-08",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r08_c07_135.png",
        "thumbSrc": "/assets/props/thumbs/med7_r08_c07_135.png"
    },
    {
        "id": "med7_r08_c08_136",
        "name": "Khí Giới Trung Cổ #09-09",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r08_c08_136.png",
        "thumbSrc": "/assets/props/thumbs/med7_r08_c08_136.png"
    },
    {
        "id": "med7_r08_c09_137",
        "name": "Khí Giới Trung Cổ #09-10",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r08_c09_137.png",
        "thumbSrc": "/assets/props/thumbs/med7_r08_c09_137.png"
    },
    {
        "id": "med7_r08_c10_138",
        "name": "Khí Giới Trung Cổ #09-11",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r08_c10_138.png",
        "thumbSrc": "/assets/props/thumbs/med7_r08_c10_138.png"
    },
    {
        "id": "med7_r08_c11_139",
        "name": "Khí Giới Trung Cổ #09-12",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r08_c11_139.png",
        "thumbSrc": "/assets/props/thumbs/med7_r08_c11_139.png"
    },
    {
        "id": "med7_r08_c12_140",
        "name": "Khí Giới Trung Cổ #09-13",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r08_c12_140.png",
        "thumbSrc": "/assets/props/thumbs/med7_r08_c12_140.png"
    },
    {
        "id": "med7_r08_c13_141",
        "name": "Khí Giới Trung Cổ #09-14",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r08_c13_141.png",
        "thumbSrc": "/assets/props/thumbs/med7_r08_c13_141.png"
    },
    {
        "id": "med7_r08_c14_142",
        "name": "Khí Giới Trung Cổ #09-15",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r08_c14_142.png",
        "thumbSrc": "/assets/props/thumbs/med7_r08_c14_142.png"
    },
    {
        "id": "med7_r08_c15_143",
        "name": "Khí Giới Trung Cổ #09-16",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r08_c15_143.png",
        "thumbSrc": "/assets/props/thumbs/med7_r08_c15_143.png"
    },
    {
        "id": "med7_r09_c00_144",
        "name": "Khí Giới Trung Cổ #10-01",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r09_c00_144.png",
        "thumbSrc": "/assets/props/thumbs/med7_r09_c00_144.png"
    },
    {
        "id": "med7_r09_c01_145",
        "name": "Khí Giới Trung Cổ #10-02",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r09_c01_145.png",
        "thumbSrc": "/assets/props/thumbs/med7_r09_c01_145.png"
    },
    {
        "id": "med7_r09_c02_146",
        "name": "Khí Giới Trung Cổ #10-03",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r09_c02_146.png",
        "thumbSrc": "/assets/props/thumbs/med7_r09_c02_146.png"
    },
    {
        "id": "med7_r09_c03_147",
        "name": "Khí Giới Trung Cổ #10-04",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r09_c03_147.png",
        "thumbSrc": "/assets/props/thumbs/med7_r09_c03_147.png"
    },
    {
        "id": "med7_r09_c04_148",
        "name": "Khí Giới Trung Cổ #10-05",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r09_c04_148.png",
        "thumbSrc": "/assets/props/thumbs/med7_r09_c04_148.png"
    },
    {
        "id": "med7_r09_c05_149",
        "name": "Khí Giới Trung Cổ #10-06",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r09_c05_149.png",
        "thumbSrc": "/assets/props/thumbs/med7_r09_c05_149.png"
    },
    {
        "id": "med7_r09_c06_150",
        "name": "Khí Giới Trung Cổ #10-07",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r09_c06_150.png",
        "thumbSrc": "/assets/props/thumbs/med7_r09_c06_150.png"
    },
    {
        "id": "med7_r09_c07_151",
        "name": "Khí Giới Trung Cổ #10-08",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r09_c07_151.png",
        "thumbSrc": "/assets/props/thumbs/med7_r09_c07_151.png"
    },
    {
        "id": "med7_r09_c08_152",
        "name": "Khí Giới Trung Cổ #10-09",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r09_c08_152.png",
        "thumbSrc": "/assets/props/thumbs/med7_r09_c08_152.png"
    },
    {
        "id": "med7_r09_c09_153",
        "name": "Khí Giới Trung Cổ #10-10",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r09_c09_153.png",
        "thumbSrc": "/assets/props/thumbs/med7_r09_c09_153.png"
    },
    {
        "id": "med7_r09_c10_154",
        "name": "Khí Giới Trung Cổ #10-11",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r09_c10_154.png",
        "thumbSrc": "/assets/props/thumbs/med7_r09_c10_154.png"
    },
    {
        "id": "med7_r09_c11_155",
        "name": "Khí Giới Trung Cổ #10-12",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r09_c11_155.png",
        "thumbSrc": "/assets/props/thumbs/med7_r09_c11_155.png"
    },
    {
        "id": "med7_r09_c12_156",
        "name": "Khí Giới Trung Cổ #10-13",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r09_c12_156.png",
        "thumbSrc": "/assets/props/thumbs/med7_r09_c12_156.png"
    },
    {
        "id": "med7_r09_c13_157",
        "name": "Khí Giới Trung Cổ #10-14",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r09_c13_157.png",
        "thumbSrc": "/assets/props/thumbs/med7_r09_c13_157.png"
    },
    {
        "id": "med7_r09_c14_158",
        "name": "Khí Giới Trung Cổ #10-15",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r09_c14_158.png",
        "thumbSrc": "/assets/props/thumbs/med7_r09_c14_158.png"
    },
    {
        "id": "med7_r09_c15_159",
        "name": "Khí Giới Trung Cổ #10-16",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r09_c15_159.png",
        "thumbSrc": "/assets/props/thumbs/med7_r09_c15_159.png"
    },
    {
        "id": "med7_r10_c00_160",
        "name": "Cung Nỏ & Mũi Tên #11-01",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r10_c00_160.png",
        "thumbSrc": "/assets/props/thumbs/med7_r10_c00_160.png"
    },
    {
        "id": "med7_r10_c01_161",
        "name": "Cung Nỏ & Mũi Tên #11-02",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r10_c01_161.png",
        "thumbSrc": "/assets/props/thumbs/med7_r10_c01_161.png"
    },
    {
        "id": "med7_r10_c02_162",
        "name": "Cung Nỏ & Mũi Tên #11-03",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r10_c02_162.png",
        "thumbSrc": "/assets/props/thumbs/med7_r10_c02_162.png"
    },
    {
        "id": "med7_r10_c03_163",
        "name": "Cung Nỏ & Mũi Tên #11-04",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r10_c03_163.png",
        "thumbSrc": "/assets/props/thumbs/med7_r10_c03_163.png"
    },
    {
        "id": "med7_r10_c04_164",
        "name": "Cung Nỏ & Mũi Tên #11-05",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r10_c04_164.png",
        "thumbSrc": "/assets/props/thumbs/med7_r10_c04_164.png"
    },
    {
        "id": "med7_r10_c05_165",
        "name": "Cung Nỏ & Mũi Tên #11-06",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r10_c05_165.png",
        "thumbSrc": "/assets/props/thumbs/med7_r10_c05_165.png"
    },
    {
        "id": "med7_r10_c06_166",
        "name": "Cung Nỏ & Mũi Tên #11-07",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r10_c06_166.png",
        "thumbSrc": "/assets/props/thumbs/med7_r10_c06_166.png"
    },
    {
        "id": "med7_r10_c07_167",
        "name": "Cung Nỏ & Mũi Tên #11-08",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r10_c07_167.png",
        "thumbSrc": "/assets/props/thumbs/med7_r10_c07_167.png"
    },
    {
        "id": "med7_r10_c08_168",
        "name": "Cung Nỏ & Mũi Tên #11-09",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r10_c08_168.png",
        "thumbSrc": "/assets/props/thumbs/med7_r10_c08_168.png"
    },
    {
        "id": "med7_r10_c09_169",
        "name": "Cung Nỏ & Mũi Tên #11-10",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r10_c09_169.png",
        "thumbSrc": "/assets/props/thumbs/med7_r10_c09_169.png"
    },
    {
        "id": "med7_r10_c10_170",
        "name": "Cung Nỏ & Mũi Tên #11-11",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r10_c10_170.png",
        "thumbSrc": "/assets/props/thumbs/med7_r10_c10_170.png"
    },
    {
        "id": "med7_r10_c11_171",
        "name": "Cung Nỏ & Mũi Tên #11-12",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r10_c11_171.png",
        "thumbSrc": "/assets/props/thumbs/med7_r10_c11_171.png"
    },
    {
        "id": "med7_r10_c12_172",
        "name": "Cung Nỏ & Mũi Tên #11-13",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r10_c12_172.png",
        "thumbSrc": "/assets/props/thumbs/med7_r10_c12_172.png"
    },
    {
        "id": "med7_r10_c13_173",
        "name": "Cung Nỏ & Mũi Tên #11-14",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r10_c13_173.png",
        "thumbSrc": "/assets/props/thumbs/med7_r10_c13_173.png"
    },
    {
        "id": "med7_r10_c14_174",
        "name": "Cung Nỏ & Mũi Tên #11-15",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r10_c14_174.png",
        "thumbSrc": "/assets/props/thumbs/med7_r10_c14_174.png"
    },
    {
        "id": "med7_r10_c15_175",
        "name": "Cung Nỏ & Mũi Tên #11-16",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r10_c15_175.png",
        "thumbSrc": "/assets/props/thumbs/med7_r10_c15_175.png"
    },
    {
        "id": "med7_r11_c00_176",
        "name": "Cung Nỏ & Mũi Tên #12-01",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r11_c00_176.png",
        "thumbSrc": "/assets/props/thumbs/med7_r11_c00_176.png"
    },
    {
        "id": "med7_r11_c01_177",
        "name": "Cung Nỏ & Mũi Tên #12-02",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r11_c01_177.png",
        "thumbSrc": "/assets/props/thumbs/med7_r11_c01_177.png"
    },
    {
        "id": "med7_r11_c02_178",
        "name": "Cung Nỏ & Mũi Tên #12-03",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r11_c02_178.png",
        "thumbSrc": "/assets/props/thumbs/med7_r11_c02_178.png"
    },
    {
        "id": "med7_r11_c03_179",
        "name": "Cung Nỏ & Mũi Tên #12-04",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r11_c03_179.png",
        "thumbSrc": "/assets/props/thumbs/med7_r11_c03_179.png"
    },
    {
        "id": "med7_r11_c04_180",
        "name": "Cung Nỏ & Mũi Tên #12-05",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r11_c04_180.png",
        "thumbSrc": "/assets/props/thumbs/med7_r11_c04_180.png"
    },
    {
        "id": "med7_r11_c05_181",
        "name": "Cung Nỏ & Mũi Tên #12-06",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r11_c05_181.png",
        "thumbSrc": "/assets/props/thumbs/med7_r11_c05_181.png"
    },
    {
        "id": "med7_r11_c06_182",
        "name": "Cung Nỏ & Mũi Tên #12-07",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r11_c06_182.png",
        "thumbSrc": "/assets/props/thumbs/med7_r11_c06_182.png"
    },
    {
        "id": "med7_r11_c07_183",
        "name": "Cung Nỏ & Mũi Tên #12-08",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r11_c07_183.png",
        "thumbSrc": "/assets/props/thumbs/med7_r11_c07_183.png"
    },
    {
        "id": "med7_r11_c08_184",
        "name": "Cung Nỏ & Mũi Tên #12-09",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r11_c08_184.png",
        "thumbSrc": "/assets/props/thumbs/med7_r11_c08_184.png"
    },
    {
        "id": "med7_r11_c09_185",
        "name": "Cung Nỏ & Mũi Tên #12-10",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r11_c09_185.png",
        "thumbSrc": "/assets/props/thumbs/med7_r11_c09_185.png"
    },
    {
        "id": "med7_r11_c10_186",
        "name": "Cung Nỏ & Mũi Tên #12-11",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r11_c10_186.png",
        "thumbSrc": "/assets/props/thumbs/med7_r11_c10_186.png"
    },
    {
        "id": "med7_r11_c11_187",
        "name": "Cung Nỏ & Mũi Tên #12-12",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r11_c11_187.png",
        "thumbSrc": "/assets/props/thumbs/med7_r11_c11_187.png"
    },
    {
        "id": "med7_r11_c12_188",
        "name": "Cung Nỏ & Mũi Tên #12-13",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r11_c12_188.png",
        "thumbSrc": "/assets/props/thumbs/med7_r11_c12_188.png"
    },
    {
        "id": "med7_r11_c13_189",
        "name": "Cung Nỏ & Mũi Tên #12-14",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r11_c13_189.png",
        "thumbSrc": "/assets/props/thumbs/med7_r11_c13_189.png"
    },
    {
        "id": "med7_r11_c14_190",
        "name": "Cung Nỏ & Mũi Tên #12-15",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r11_c14_190.png",
        "thumbSrc": "/assets/props/thumbs/med7_r11_c14_190.png"
    },
    {
        "id": "med7_r11_c15_191",
        "name": "Cung Nỏ & Mũi Tên #12-16",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r11_c15_191.png",
        "thumbSrc": "/assets/props/thumbs/med7_r11_c15_191.png"
    },
    {
        "id": "med7_r12_c00_192",
        "name": "Cung Nỏ & Mũi Tên #13-01",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r12_c00_192.png",
        "thumbSrc": "/assets/props/thumbs/med7_r12_c00_192.png"
    },
    {
        "id": "med7_r12_c01_193",
        "name": "Cung Nỏ & Mũi Tên #13-02",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r12_c01_193.png",
        "thumbSrc": "/assets/props/thumbs/med7_r12_c01_193.png"
    },
    {
        "id": "med7_r12_c02_194",
        "name": "Cung Nỏ & Mũi Tên #13-03",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r12_c02_194.png",
        "thumbSrc": "/assets/props/thumbs/med7_r12_c02_194.png"
    },
    {
        "id": "med7_r12_c03_195",
        "name": "Cung Nỏ & Mũi Tên #13-04",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r12_c03_195.png",
        "thumbSrc": "/assets/props/thumbs/med7_r12_c03_195.png"
    },
    {
        "id": "med7_r12_c04_196",
        "name": "Cung Nỏ & Mũi Tên #13-05",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r12_c04_196.png",
        "thumbSrc": "/assets/props/thumbs/med7_r12_c04_196.png"
    },
    {
        "id": "med7_r12_c05_197",
        "name": "Cung Nỏ & Mũi Tên #13-06",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r12_c05_197.png",
        "thumbSrc": "/assets/props/thumbs/med7_r12_c05_197.png"
    },
    {
        "id": "med7_r12_c06_198",
        "name": "Cung Nỏ & Mũi Tên #13-07",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r12_c06_198.png",
        "thumbSrc": "/assets/props/thumbs/med7_r12_c06_198.png"
    },
    {
        "id": "med7_r12_c07_199",
        "name": "Cung Nỏ & Mũi Tên #13-08",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r12_c07_199.png",
        "thumbSrc": "/assets/props/thumbs/med7_r12_c07_199.png"
    },
    {
        "id": "med7_r12_c08_200",
        "name": "Cung Nỏ & Mũi Tên #13-09",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r12_c08_200.png",
        "thumbSrc": "/assets/props/thumbs/med7_r12_c08_200.png"
    },
    {
        "id": "med7_r12_c09_201",
        "name": "Cung Nỏ & Mũi Tên #13-10",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r12_c09_201.png",
        "thumbSrc": "/assets/props/thumbs/med7_r12_c09_201.png"
    },
    {
        "id": "med7_r12_c10_202",
        "name": "Cung Nỏ & Mũi Tên #13-11",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r12_c10_202.png",
        "thumbSrc": "/assets/props/thumbs/med7_r12_c10_202.png"
    },
    {
        "id": "med7_r12_c11_203",
        "name": "Cung Nỏ & Mũi Tên #13-12",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r12_c11_203.png",
        "thumbSrc": "/assets/props/thumbs/med7_r12_c11_203.png"
    },
    {
        "id": "med7_r12_c12_204",
        "name": "Cung Nỏ & Mũi Tên #13-13",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r12_c12_204.png",
        "thumbSrc": "/assets/props/thumbs/med7_r12_c12_204.png"
    },
    {
        "id": "med7_r12_c13_205",
        "name": "Cung Nỏ & Mũi Tên #13-14",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r12_c13_205.png",
        "thumbSrc": "/assets/props/thumbs/med7_r12_c13_205.png"
    },
    {
        "id": "med7_r12_c14_206",
        "name": "Cung Nỏ & Mũi Tên #13-15",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r12_c14_206.png",
        "thumbSrc": "/assets/props/thumbs/med7_r12_c14_206.png"
    },
    {
        "id": "med7_r12_c15_207",
        "name": "Cung Nỏ & Mũi Tên #13-16",
        "forType": "weapons",
        "src": "/assets/props/items/med7_r12_c15_207.png",
        "thumbSrc": "/assets/props/thumbs/med7_r12_c15_207.png"
    },
    {
        "id": "med7_r13_c00_208",
        "name": "Khiên Chiến Binh #14-01",
        "forType": "armor",
        "src": "/assets/props/items/med7_r13_c00_208.png",
        "thumbSrc": "/assets/props/thumbs/med7_r13_c00_208.png"
    },
    {
        "id": "med7_r13_c01_209",
        "name": "Khiên Chiến Binh #14-02",
        "forType": "armor",
        "src": "/assets/props/items/med7_r13_c01_209.png",
        "thumbSrc": "/assets/props/thumbs/med7_r13_c01_209.png"
    },
    {
        "id": "med7_r13_c02_210",
        "name": "Khiên Chiến Binh #14-03",
        "forType": "armor",
        "src": "/assets/props/items/med7_r13_c02_210.png",
        "thumbSrc": "/assets/props/thumbs/med7_r13_c02_210.png"
    },
    {
        "id": "med7_r13_c03_211",
        "name": "Khiên Chiến Binh #14-04",
        "forType": "armor",
        "src": "/assets/props/items/med7_r13_c03_211.png",
        "thumbSrc": "/assets/props/thumbs/med7_r13_c03_211.png"
    },
    {
        "id": "med7_r13_c04_212",
        "name": "Khiên Chiến Binh #14-05",
        "forType": "armor",
        "src": "/assets/props/items/med7_r13_c04_212.png",
        "thumbSrc": "/assets/props/thumbs/med7_r13_c04_212.png"
    },
    {
        "id": "med7_r13_c05_213",
        "name": "Khiên Chiến Binh #14-06",
        "forType": "armor",
        "src": "/assets/props/items/med7_r13_c05_213.png",
        "thumbSrc": "/assets/props/thumbs/med7_r13_c05_213.png"
    },
    {
        "id": "med7_r13_c06_214",
        "name": "Khiên Chiến Binh #14-07",
        "forType": "armor",
        "src": "/assets/props/items/med7_r13_c06_214.png",
        "thumbSrc": "/assets/props/thumbs/med7_r13_c06_214.png"
    },
    {
        "id": "med7_r13_c07_215",
        "name": "Khiên Chiến Binh #14-08",
        "forType": "armor",
        "src": "/assets/props/items/med7_r13_c07_215.png",
        "thumbSrc": "/assets/props/thumbs/med7_r13_c07_215.png"
    },
    {
        "id": "med7_r13_c08_216",
        "name": "Khiên Chiến Binh #14-09",
        "forType": "armor",
        "src": "/assets/props/items/med7_r13_c08_216.png",
        "thumbSrc": "/assets/props/thumbs/med7_r13_c08_216.png"
    },
    {
        "id": "med7_r13_c09_217",
        "name": "Khiên Chiến Binh #14-10",
        "forType": "armor",
        "src": "/assets/props/items/med7_r13_c09_217.png",
        "thumbSrc": "/assets/props/thumbs/med7_r13_c09_217.png"
    },
    {
        "id": "med7_r13_c10_218",
        "name": "Khiên Chiến Binh #14-11",
        "forType": "armor",
        "src": "/assets/props/items/med7_r13_c10_218.png",
        "thumbSrc": "/assets/props/thumbs/med7_r13_c10_218.png"
    },
    {
        "id": "med7_r13_c11_219",
        "name": "Khiên Chiến Binh #14-12",
        "forType": "armor",
        "src": "/assets/props/items/med7_r13_c11_219.png",
        "thumbSrc": "/assets/props/thumbs/med7_r13_c11_219.png"
    },
    {
        "id": "med7_r13_c12_220",
        "name": "Khiên Chiến Binh #14-13",
        "forType": "armor",
        "src": "/assets/props/items/med7_r13_c12_220.png",
        "thumbSrc": "/assets/props/thumbs/med7_r13_c12_220.png"
    },
    {
        "id": "med7_r13_c13_221",
        "name": "Khiên Chiến Binh #14-14",
        "forType": "armor",
        "src": "/assets/props/items/med7_r13_c13_221.png",
        "thumbSrc": "/assets/props/thumbs/med7_r13_c13_221.png"
    },
    {
        "id": "med7_r13_c14_222",
        "name": "Khiên Chiến Binh #14-15",
        "forType": "armor",
        "src": "/assets/props/items/med7_r13_c14_222.png",
        "thumbSrc": "/assets/props/thumbs/med7_r13_c14_222.png"
    },
    {
        "id": "med7_r13_c15_223",
        "name": "Khiên Chiến Binh #14-16",
        "forType": "armor",
        "src": "/assets/props/items/med7_r13_c15_223.png",
        "thumbSrc": "/assets/props/thumbs/med7_r13_c15_223.png"
    },
    {
        "id": "med7_r13_c16_224",
        "name": "Khiên Chiến Binh #14-17",
        "forType": "armor",
        "src": "/assets/props/items/med7_r13_c16_224.png",
        "thumbSrc": "/assets/props/thumbs/med7_r13_c16_224.png"
    },
    {
        "id": "med7_r13_c17_225",
        "name": "Khiên Chiến Binh #14-18",
        "forType": "armor",
        "src": "/assets/props/items/med7_r13_c17_225.png",
        "thumbSrc": "/assets/props/thumbs/med7_r13_c17_225.png"
    },
    {
        "id": "med7_r14_c00_226",
        "name": "Khiên Chiến Binh #15-01",
        "forType": "armor",
        "src": "/assets/props/items/med7_r14_c00_226.png",
        "thumbSrc": "/assets/props/thumbs/med7_r14_c00_226.png"
    },
    {
        "id": "med7_r14_c01_227",
        "name": "Khiên Chiến Binh #15-02",
        "forType": "armor",
        "src": "/assets/props/items/med7_r14_c01_227.png",
        "thumbSrc": "/assets/props/thumbs/med7_r14_c01_227.png"
    },
    {
        "id": "med7_r14_c02_228",
        "name": "Khiên Chiến Binh #15-03",
        "forType": "armor",
        "src": "/assets/props/items/med7_r14_c02_228.png",
        "thumbSrc": "/assets/props/thumbs/med7_r14_c02_228.png"
    },
    {
        "id": "med7_r14_c03_229",
        "name": "Khiên Chiến Binh #15-04",
        "forType": "armor",
        "src": "/assets/props/items/med7_r14_c03_229.png",
        "thumbSrc": "/assets/props/thumbs/med7_r14_c03_229.png"
    },
    {
        "id": "med7_r14_c04_230",
        "name": "Khiên Chiến Binh #15-05",
        "forType": "armor",
        "src": "/assets/props/items/med7_r14_c04_230.png",
        "thumbSrc": "/assets/props/thumbs/med7_r14_c04_230.png"
    },
    {
        "id": "med7_r14_c05_231",
        "name": "Khiên Chiến Binh #15-06",
        "forType": "armor",
        "src": "/assets/props/items/med7_r14_c05_231.png",
        "thumbSrc": "/assets/props/thumbs/med7_r14_c05_231.png"
    },
    {
        "id": "med7_r14_c06_232",
        "name": "Khiên Chiến Binh #15-07",
        "forType": "armor",
        "src": "/assets/props/items/med7_r14_c06_232.png",
        "thumbSrc": "/assets/props/thumbs/med7_r14_c06_232.png"
    },
    {
        "id": "med7_r14_c07_233",
        "name": "Khiên Chiến Binh #15-08",
        "forType": "armor",
        "src": "/assets/props/items/med7_r14_c07_233.png",
        "thumbSrc": "/assets/props/thumbs/med7_r14_c07_233.png"
    },
    {
        "id": "med7_r14_c08_234",
        "name": "Khiên Chiến Binh #15-09",
        "forType": "armor",
        "src": "/assets/props/items/med7_r14_c08_234.png",
        "thumbSrc": "/assets/props/thumbs/med7_r14_c08_234.png"
    },
    {
        "id": "med7_r14_c09_235",
        "name": "Khiên Chiến Binh #15-10",
        "forType": "armor",
        "src": "/assets/props/items/med7_r14_c09_235.png",
        "thumbSrc": "/assets/props/thumbs/med7_r14_c09_235.png"
    },
    {
        "id": "med7_r14_c10_236",
        "name": "Khiên Chiến Binh #15-11",
        "forType": "armor",
        "src": "/assets/props/items/med7_r14_c10_236.png",
        "thumbSrc": "/assets/props/thumbs/med7_r14_c10_236.png"
    },
    {
        "id": "med7_r14_c11_237",
        "name": "Khiên Chiến Binh #15-12",
        "forType": "armor",
        "src": "/assets/props/items/med7_r14_c11_237.png",
        "thumbSrc": "/assets/props/thumbs/med7_r14_c11_237.png"
    },
    {
        "id": "med7_r14_c12_238",
        "name": "Khiên Chiến Binh #15-13",
        "forType": "armor",
        "src": "/assets/props/items/med7_r14_c12_238.png",
        "thumbSrc": "/assets/props/thumbs/med7_r14_c12_238.png"
    },
    {
        "id": "med7_r14_c13_239",
        "name": "Khiên Chiến Binh #15-14",
        "forType": "armor",
        "src": "/assets/props/items/med7_r14_c13_239.png",
        "thumbSrc": "/assets/props/thumbs/med7_r14_c13_239.png"
    },
    {
        "id": "med7_r14_c14_240",
        "name": "Khiên Chiến Binh #15-15",
        "forType": "armor",
        "src": "/assets/props/items/med7_r14_c14_240.png",
        "thumbSrc": "/assets/props/thumbs/med7_r14_c14_240.png"
    },
    {
        "id": "med7_r14_c15_241",
        "name": "Khiên Chiến Binh #15-16",
        "forType": "armor",
        "src": "/assets/props/items/med7_r14_c15_241.png",
        "thumbSrc": "/assets/props/thumbs/med7_r14_c15_241.png"
    },
    {
        "id": "med7_r14_c16_242",
        "name": "Khiên Chiến Binh #15-17",
        "forType": "armor",
        "src": "/assets/props/items/med7_r14_c16_242.png",
        "thumbSrc": "/assets/props/thumbs/med7_r14_c16_242.png"
    },
    {
        "id": "med7_r15_c00_243",
        "name": "Giáp Trụ & Mũ Sắt #16-01",
        "forType": "armor",
        "src": "/assets/props/items/med7_r15_c00_243.png",
        "thumbSrc": "/assets/props/thumbs/med7_r15_c00_243.png"
    },
    {
        "id": "med7_r15_c01_244",
        "name": "Giáp Trụ & Mũ Sắt #16-02",
        "forType": "armor",
        "src": "/assets/props/items/med7_r15_c01_244.png",
        "thumbSrc": "/assets/props/thumbs/med7_r15_c01_244.png"
    },
    {
        "id": "med7_r15_c02_245",
        "name": "Giáp Trụ & Mũ Sắt #16-03",
        "forType": "armor",
        "src": "/assets/props/items/med7_r15_c02_245.png",
        "thumbSrc": "/assets/props/thumbs/med7_r15_c02_245.png"
    },
    {
        "id": "med7_r15_c03_246",
        "name": "Giáp Trụ & Mũ Sắt #16-04",
        "forType": "armor",
        "src": "/assets/props/items/med7_r15_c03_246.png",
        "thumbSrc": "/assets/props/thumbs/med7_r15_c03_246.png"
    },
    {
        "id": "med7_r15_c04_247",
        "name": "Giáp Trụ & Mũ Sắt #16-05",
        "forType": "armor",
        "src": "/assets/props/items/med7_r15_c04_247.png",
        "thumbSrc": "/assets/props/thumbs/med7_r15_c04_247.png"
    },
    {
        "id": "med7_r15_c05_248",
        "name": "Giáp Trụ & Mũ Sắt #16-06",
        "forType": "armor",
        "src": "/assets/props/items/med7_r15_c05_248.png",
        "thumbSrc": "/assets/props/thumbs/med7_r15_c05_248.png"
    },
    {
        "id": "med7_r15_c06_249",
        "name": "Giáp Trụ & Mũ Sắt #16-07",
        "forType": "armor",
        "src": "/assets/props/items/med7_r15_c06_249.png",
        "thumbSrc": "/assets/props/thumbs/med7_r15_c06_249.png"
    },
    {
        "id": "med7_r15_c07_250",
        "name": "Giáp Trụ & Mũ Sắt #16-08",
        "forType": "armor",
        "src": "/assets/props/items/med7_r15_c07_250.png",
        "thumbSrc": "/assets/props/thumbs/med7_r15_c07_250.png"
    },
    {
        "id": "med7_r15_c08_251",
        "name": "Giáp Trụ & Mũ Sắt #16-09",
        "forType": "armor",
        "src": "/assets/props/items/med7_r15_c08_251.png",
        "thumbSrc": "/assets/props/thumbs/med7_r15_c08_251.png"
    },
    {
        "id": "med7_r15_c09_252",
        "name": "Giáp Trụ & Mũ Sắt #16-10",
        "forType": "armor",
        "src": "/assets/props/items/med7_r15_c09_252.png",
        "thumbSrc": "/assets/props/thumbs/med7_r15_c09_252.png"
    },
    {
        "id": "med7_r15_c10_253",
        "name": "Giáp Trụ & Mũ Sắt #16-11",
        "forType": "armor",
        "src": "/assets/props/items/med7_r15_c10_253.png",
        "thumbSrc": "/assets/props/thumbs/med7_r15_c10_253.png"
    },
    {
        "id": "med7_r15_c11_254",
        "name": "Giáp Trụ & Mũ Sắt #16-12",
        "forType": "armor",
        "src": "/assets/props/items/med7_r15_c11_254.png",
        "thumbSrc": "/assets/props/thumbs/med7_r15_c11_254.png"
    },
    {
        "id": "med7_r15_c12_255",
        "name": "Giáp Trụ & Mũ Sắt #16-13",
        "forType": "armor",
        "src": "/assets/props/items/med7_r15_c12_255.png",
        "thumbSrc": "/assets/props/thumbs/med7_r15_c12_255.png"
    },
    {
        "id": "med7_r15_c13_256",
        "name": "Giáp Trụ & Mũ Sắt #16-14",
        "forType": "armor",
        "src": "/assets/props/items/med7_r15_c13_256.png",
        "thumbSrc": "/assets/props/thumbs/med7_r15_c13_256.png"
    },
    {
        "id": "med7_r15_c14_257",
        "name": "Giáp Trụ & Mũ Sắt #16-15",
        "forType": "armor",
        "src": "/assets/props/items/med7_r15_c14_257.png",
        "thumbSrc": "/assets/props/thumbs/med7_r15_c14_257.png"
    },
    {
        "id": "med7_r15_c15_258",
        "name": "Giáp Trụ & Mũ Sắt #16-16",
        "forType": "armor",
        "src": "/assets/props/items/med7_r15_c15_258.png",
        "thumbSrc": "/assets/props/thumbs/med7_r15_c15_258.png"
    },
    {
        "id": "med5_r00_c00_000",
        "name": "Vũ Khí Cổ Điển #01-01",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r00_c00_000.png",
        "thumbSrc": "/assets/props/thumbs/med5_r00_c00_000.png"
    },
    {
        "id": "med5_r00_c01_001",
        "name": "Vũ Khí Cổ Điển #01-02",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r00_c01_001.png",
        "thumbSrc": "/assets/props/thumbs/med5_r00_c01_001.png"
    },
    {
        "id": "med5_r00_c02_002",
        "name": "Vũ Khí Cổ Điển #01-03",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r00_c02_002.png",
        "thumbSrc": "/assets/props/thumbs/med5_r00_c02_002.png"
    },
    {
        "id": "med5_r00_c03_003",
        "name": "Vũ Khí Cổ Điển #01-04",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r00_c03_003.png",
        "thumbSrc": "/assets/props/thumbs/med5_r00_c03_003.png"
    },
    {
        "id": "med5_r00_c04_004",
        "name": "Vũ Khí Cổ Điển #01-05",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r00_c04_004.png",
        "thumbSrc": "/assets/props/thumbs/med5_r00_c04_004.png"
    },
    {
        "id": "med5_r00_c05_005",
        "name": "Vũ Khí Cổ Điển #01-06",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r00_c05_005.png",
        "thumbSrc": "/assets/props/thumbs/med5_r00_c05_005.png"
    },
    {
        "id": "med5_r00_c06_006",
        "name": "Vũ Khí Cổ Điển #01-07",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r00_c06_006.png",
        "thumbSrc": "/assets/props/thumbs/med5_r00_c06_006.png"
    },
    {
        "id": "med5_r00_c07_007",
        "name": "Vũ Khí Cổ Điển #01-08",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r00_c07_007.png",
        "thumbSrc": "/assets/props/thumbs/med5_r00_c07_007.png"
    },
    {
        "id": "med5_r00_c08_008",
        "name": "Vũ Khí Cổ Điển #01-09",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r00_c08_008.png",
        "thumbSrc": "/assets/props/thumbs/med5_r00_c08_008.png"
    },
    {
        "id": "med5_r00_c09_009",
        "name": "Vũ Khí Cổ Điển #01-10",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r00_c09_009.png",
        "thumbSrc": "/assets/props/thumbs/med5_r00_c09_009.png"
    },
    {
        "id": "med5_r00_c10_010",
        "name": "Vũ Khí Cổ Điển #01-11",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r00_c10_010.png",
        "thumbSrc": "/assets/props/thumbs/med5_r00_c10_010.png"
    },
    {
        "id": "med5_r00_c11_011",
        "name": "Vũ Khí Cổ Điển #01-12",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r00_c11_011.png",
        "thumbSrc": "/assets/props/thumbs/med5_r00_c11_011.png"
    },
    {
        "id": "med5_r00_c12_012",
        "name": "Vũ Khí Cổ Điển #01-13",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r00_c12_012.png",
        "thumbSrc": "/assets/props/thumbs/med5_r00_c12_012.png"
    },
    {
        "id": "med5_r00_c13_013",
        "name": "Vũ Khí Cổ Điển #01-14",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r00_c13_013.png",
        "thumbSrc": "/assets/props/thumbs/med5_r00_c13_013.png"
    },
    {
        "id": "med5_r00_c14_014",
        "name": "Vũ Khí Cổ Điển #01-15",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r00_c14_014.png",
        "thumbSrc": "/assets/props/thumbs/med5_r00_c14_014.png"
    },
    {
        "id": "med5_r00_c15_015",
        "name": "Vũ Khí Cổ Điển #01-16",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r00_c15_015.png",
        "thumbSrc": "/assets/props/thumbs/med5_r00_c15_015.png"
    },
    {
        "id": "med5_r01_c00_016",
        "name": "Vũ Khí Cổ Điển #02-01",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r01_c00_016.png",
        "thumbSrc": "/assets/props/thumbs/med5_r01_c00_016.png"
    },
    {
        "id": "med5_r01_c01_017",
        "name": "Vũ Khí Cổ Điển #02-02",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r01_c01_017.png",
        "thumbSrc": "/assets/props/thumbs/med5_r01_c01_017.png"
    },
    {
        "id": "med5_r01_c02_018",
        "name": "Vũ Khí Cổ Điển #02-03",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r01_c02_018.png",
        "thumbSrc": "/assets/props/thumbs/med5_r01_c02_018.png"
    },
    {
        "id": "med5_r01_c03_019",
        "name": "Vũ Khí Cổ Điển #02-04",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r01_c03_019.png",
        "thumbSrc": "/assets/props/thumbs/med5_r01_c03_019.png"
    },
    {
        "id": "med5_r01_c04_020",
        "name": "Vũ Khí Cổ Điển #02-05",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r01_c04_020.png",
        "thumbSrc": "/assets/props/thumbs/med5_r01_c04_020.png"
    },
    {
        "id": "med5_r01_c05_021",
        "name": "Vũ Khí Cổ Điển #02-06",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r01_c05_021.png",
        "thumbSrc": "/assets/props/thumbs/med5_r01_c05_021.png"
    },
    {
        "id": "med5_r01_c06_022",
        "name": "Vũ Khí Cổ Điển #02-07",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r01_c06_022.png",
        "thumbSrc": "/assets/props/thumbs/med5_r01_c06_022.png"
    },
    {
        "id": "med5_r01_c07_023",
        "name": "Vũ Khí Cổ Điển #02-08",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r01_c07_023.png",
        "thumbSrc": "/assets/props/thumbs/med5_r01_c07_023.png"
    },
    {
        "id": "med5_r01_c08_024",
        "name": "Vũ Khí Cổ Điển #02-09",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r01_c08_024.png",
        "thumbSrc": "/assets/props/thumbs/med5_r01_c08_024.png"
    },
    {
        "id": "med5_r01_c09_025",
        "name": "Vũ Khí Cổ Điển #02-10",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r01_c09_025.png",
        "thumbSrc": "/assets/props/thumbs/med5_r01_c09_025.png"
    },
    {
        "id": "med5_r01_c10_026",
        "name": "Vũ Khí Cổ Điển #02-11",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r01_c10_026.png",
        "thumbSrc": "/assets/props/thumbs/med5_r01_c10_026.png"
    },
    {
        "id": "med5_r01_c11_027",
        "name": "Vũ Khí Cổ Điển #02-12",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r01_c11_027.png",
        "thumbSrc": "/assets/props/thumbs/med5_r01_c11_027.png"
    },
    {
        "id": "med5_r01_c12_028",
        "name": "Vũ Khí Cổ Điển #02-13",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r01_c12_028.png",
        "thumbSrc": "/assets/props/thumbs/med5_r01_c12_028.png"
    },
    {
        "id": "med5_r01_c13_029",
        "name": "Vũ Khí Cổ Điển #02-14",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r01_c13_029.png",
        "thumbSrc": "/assets/props/thumbs/med5_r01_c13_029.png"
    },
    {
        "id": "med5_r01_c14_030",
        "name": "Vũ Khí Cổ Điển #02-15",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r01_c14_030.png",
        "thumbSrc": "/assets/props/thumbs/med5_r01_c14_030.png"
    },
    {
        "id": "med5_r01_c15_031",
        "name": "Vũ Khí Cổ Điển #02-16",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r01_c15_031.png",
        "thumbSrc": "/assets/props/thumbs/med5_r01_c15_031.png"
    },
    {
        "id": "med5_r02_c00_032",
        "name": "Vũ Khí Cổ Điển #03-01",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r02_c00_032.png",
        "thumbSrc": "/assets/props/thumbs/med5_r02_c00_032.png"
    },
    {
        "id": "med5_r02_c01_033",
        "name": "Vũ Khí Cổ Điển #03-02",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r02_c01_033.png",
        "thumbSrc": "/assets/props/thumbs/med5_r02_c01_033.png"
    },
    {
        "id": "med5_r02_c02_034",
        "name": "Vũ Khí Cổ Điển #03-03",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r02_c02_034.png",
        "thumbSrc": "/assets/props/thumbs/med5_r02_c02_034.png"
    },
    {
        "id": "med5_r02_c03_035",
        "name": "Vũ Khí Cổ Điển #03-04",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r02_c03_035.png",
        "thumbSrc": "/assets/props/thumbs/med5_r02_c03_035.png"
    },
    {
        "id": "med5_r02_c04_036",
        "name": "Vũ Khí Cổ Điển #03-05",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r02_c04_036.png",
        "thumbSrc": "/assets/props/thumbs/med5_r02_c04_036.png"
    },
    {
        "id": "med5_r02_c05_037",
        "name": "Vũ Khí Cổ Điển #03-06",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r02_c05_037.png",
        "thumbSrc": "/assets/props/thumbs/med5_r02_c05_037.png"
    },
    {
        "id": "med5_r02_c06_038",
        "name": "Vũ Khí Cổ Điển #03-07",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r02_c06_038.png",
        "thumbSrc": "/assets/props/thumbs/med5_r02_c06_038.png"
    },
    {
        "id": "med5_r02_c07_039",
        "name": "Vũ Khí Cổ Điển #03-08",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r02_c07_039.png",
        "thumbSrc": "/assets/props/thumbs/med5_r02_c07_039.png"
    },
    {
        "id": "med5_r02_c08_040",
        "name": "Vũ Khí Cổ Điển #03-09",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r02_c08_040.png",
        "thumbSrc": "/assets/props/thumbs/med5_r02_c08_040.png"
    },
    {
        "id": "med5_r02_c09_041",
        "name": "Vũ Khí Cổ Điển #03-10",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r02_c09_041.png",
        "thumbSrc": "/assets/props/thumbs/med5_r02_c09_041.png"
    },
    {
        "id": "med5_r02_c10_042",
        "name": "Vũ Khí Cổ Điển #03-11",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r02_c10_042.png",
        "thumbSrc": "/assets/props/thumbs/med5_r02_c10_042.png"
    },
    {
        "id": "med5_r02_c11_043",
        "name": "Vũ Khí Cổ Điển #03-12",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r02_c11_043.png",
        "thumbSrc": "/assets/props/thumbs/med5_r02_c11_043.png"
    },
    {
        "id": "med5_r02_c12_044",
        "name": "Vũ Khí Cổ Điển #03-13",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r02_c12_044.png",
        "thumbSrc": "/assets/props/thumbs/med5_r02_c12_044.png"
    },
    {
        "id": "med5_r02_c13_045",
        "name": "Vũ Khí Cổ Điển #03-14",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r02_c13_045.png",
        "thumbSrc": "/assets/props/thumbs/med5_r02_c13_045.png"
    },
    {
        "id": "med5_r02_c14_046",
        "name": "Vũ Khí Cổ Điển #03-15",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r02_c14_046.png",
        "thumbSrc": "/assets/props/thumbs/med5_r02_c14_046.png"
    },
    {
        "id": "med5_r02_c15_047",
        "name": "Vũ Khí Cổ Điển #03-16",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r02_c15_047.png",
        "thumbSrc": "/assets/props/thumbs/med5_r02_c15_047.png"
    },
    {
        "id": "med5_r03_c00_048",
        "name": "Vũ Khí Cổ Điển #04-01",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r03_c00_048.png",
        "thumbSrc": "/assets/props/thumbs/med5_r03_c00_048.png"
    },
    {
        "id": "med5_r03_c01_049",
        "name": "Vũ Khí Cổ Điển #04-02",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r03_c01_049.png",
        "thumbSrc": "/assets/props/thumbs/med5_r03_c01_049.png"
    },
    {
        "id": "med5_r03_c02_050",
        "name": "Vũ Khí Cổ Điển #04-03",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r03_c02_050.png",
        "thumbSrc": "/assets/props/thumbs/med5_r03_c02_050.png"
    },
    {
        "id": "med5_r03_c03_051",
        "name": "Vũ Khí Cổ Điển #04-04",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r03_c03_051.png",
        "thumbSrc": "/assets/props/thumbs/med5_r03_c03_051.png"
    },
    {
        "id": "med5_r03_c04_052",
        "name": "Vũ Khí Cổ Điển #04-05",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r03_c04_052.png",
        "thumbSrc": "/assets/props/thumbs/med5_r03_c04_052.png"
    },
    {
        "id": "med5_r03_c05_053",
        "name": "Vũ Khí Cổ Điển #04-06",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r03_c05_053.png",
        "thumbSrc": "/assets/props/thumbs/med5_r03_c05_053.png"
    },
    {
        "id": "med5_r03_c06_054",
        "name": "Vũ Khí Cổ Điển #04-07",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r03_c06_054.png",
        "thumbSrc": "/assets/props/thumbs/med5_r03_c06_054.png"
    },
    {
        "id": "med5_r03_c07_055",
        "name": "Vũ Khí Cổ Điển #04-08",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r03_c07_055.png",
        "thumbSrc": "/assets/props/thumbs/med5_r03_c07_055.png"
    },
    {
        "id": "med5_r03_c08_056",
        "name": "Vũ Khí Cổ Điển #04-09",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r03_c08_056.png",
        "thumbSrc": "/assets/props/thumbs/med5_r03_c08_056.png"
    },
    {
        "id": "med5_r03_c09_057",
        "name": "Vũ Khí Cổ Điển #04-10",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r03_c09_057.png",
        "thumbSrc": "/assets/props/thumbs/med5_r03_c09_057.png"
    },
    {
        "id": "med5_r03_c10_058",
        "name": "Vũ Khí Cổ Điển #04-11",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r03_c10_058.png",
        "thumbSrc": "/assets/props/thumbs/med5_r03_c10_058.png"
    },
    {
        "id": "med5_r03_c11_059",
        "name": "Vũ Khí Cổ Điển #04-12",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r03_c11_059.png",
        "thumbSrc": "/assets/props/thumbs/med5_r03_c11_059.png"
    },
    {
        "id": "med5_r03_c12_060",
        "name": "Vũ Khí Cổ Điển #04-13",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r03_c12_060.png",
        "thumbSrc": "/assets/props/thumbs/med5_r03_c12_060.png"
    },
    {
        "id": "med5_r03_c13_061",
        "name": "Vũ Khí Cổ Điển #04-14",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r03_c13_061.png",
        "thumbSrc": "/assets/props/thumbs/med5_r03_c13_061.png"
    },
    {
        "id": "med5_r03_c14_062",
        "name": "Vũ Khí Cổ Điển #04-15",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r03_c14_062.png",
        "thumbSrc": "/assets/props/thumbs/med5_r03_c14_062.png"
    },
    {
        "id": "med5_r03_c15_063",
        "name": "Vũ Khí Cổ Điển #04-16",
        "forType": "weapons",
        "src": "/assets/props/items/med5_r03_c15_063.png",
        "thumbSrc": "/assets/props/thumbs/med5_r03_c15_063.png"
    },
    {
        "id": "med5_r04_c00_064",
        "name": "Dụng Cụ Thợ Rèn #05-01",
        "forType": "survival_tools",
        "src": "/assets/props/items/med5_r04_c00_064.png",
        "thumbSrc": "/assets/props/thumbs/med5_r04_c00_064.png"
    },
    {
        "id": "med5_r04_c01_065",
        "name": "Dụng Cụ Thợ Rèn #05-02",
        "forType": "survival_tools",
        "src": "/assets/props/items/med5_r04_c01_065.png",
        "thumbSrc": "/assets/props/thumbs/med5_r04_c01_065.png"
    },
    {
        "id": "med5_r04_c02_066",
        "name": "Dụng Cụ Thợ Rèn #05-03",
        "forType": "survival_tools",
        "src": "/assets/props/items/med5_r04_c02_066.png",
        "thumbSrc": "/assets/props/thumbs/med5_r04_c02_066.png"
    },
    {
        "id": "med5_r04_c03_067",
        "name": "Dụng Cụ Thợ Rèn #05-04",
        "forType": "survival_tools",
        "src": "/assets/props/items/med5_r04_c03_067.png",
        "thumbSrc": "/assets/props/thumbs/med5_r04_c03_067.png"
    },
    {
        "id": "med5_r04_c04_068",
        "name": "Dụng Cụ Thợ Rèn #05-05",
        "forType": "survival_tools",
        "src": "/assets/props/items/med5_r04_c04_068.png",
        "thumbSrc": "/assets/props/thumbs/med5_r04_c04_068.png"
    },
    {
        "id": "med5_r04_c05_069",
        "name": "Dụng Cụ Thợ Rèn #05-06",
        "forType": "survival_tools",
        "src": "/assets/props/items/med5_r04_c05_069.png",
        "thumbSrc": "/assets/props/thumbs/med5_r04_c05_069.png"
    },
    {
        "id": "med5_r04_c06_070",
        "name": "Dụng Cụ Thợ Rèn #05-07",
        "forType": "survival_tools",
        "src": "/assets/props/items/med5_r04_c06_070.png",
        "thumbSrc": "/assets/props/thumbs/med5_r04_c06_070.png"
    },
    {
        "id": "med5_r04_c07_071",
        "name": "Dụng Cụ Thợ Rèn #05-08",
        "forType": "survival_tools",
        "src": "/assets/props/items/med5_r04_c07_071.png",
        "thumbSrc": "/assets/props/thumbs/med5_r04_c07_071.png"
    },
    {
        "id": "med5_r04_c08_072",
        "name": "Dụng Cụ Thợ Rèn #05-09",
        "forType": "survival_tools",
        "src": "/assets/props/items/med5_r04_c08_072.png",
        "thumbSrc": "/assets/props/thumbs/med5_r04_c08_072.png"
    },
    {
        "id": "med5_r04_c09_073",
        "name": "Dụng Cụ Thợ Rèn #05-10",
        "forType": "survival_tools",
        "src": "/assets/props/items/med5_r04_c09_073.png",
        "thumbSrc": "/assets/props/thumbs/med5_r04_c09_073.png"
    },
    {
        "id": "med5_r04_c10_074",
        "name": "Dụng Cụ Thợ Rèn #05-11",
        "forType": "survival_tools",
        "src": "/assets/props/items/med5_r04_c10_074.png",
        "thumbSrc": "/assets/props/thumbs/med5_r04_c10_074.png"
    },
    {
        "id": "med5_r04_c11_075",
        "name": "Dụng Cụ Thợ Rèn #05-12",
        "forType": "survival_tools",
        "src": "/assets/props/items/med5_r04_c11_075.png",
        "thumbSrc": "/assets/props/thumbs/med5_r04_c11_075.png"
    },
    {
        "id": "med5_r04_c12_076",
        "name": "Dụng Cụ Thợ Rèn #05-13",
        "forType": "survival_tools",
        "src": "/assets/props/items/med5_r04_c12_076.png",
        "thumbSrc": "/assets/props/thumbs/med5_r04_c12_076.png"
    },
    {
        "id": "med5_r04_c13_077",
        "name": "Dụng Cụ Thợ Rèn #05-14",
        "forType": "survival_tools",
        "src": "/assets/props/items/med5_r04_c13_077.png",
        "thumbSrc": "/assets/props/thumbs/med5_r04_c13_077.png"
    },
    {
        "id": "med5_r04_c14_078",
        "name": "Dụng Cụ Thợ Rèn #05-15",
        "forType": "survival_tools",
        "src": "/assets/props/items/med5_r04_c14_078.png",
        "thumbSrc": "/assets/props/thumbs/med5_r04_c14_078.png"
    },
    {
        "id": "med5_r04_c15_079",
        "name": "Dụng Cụ Thợ Rèn #05-16",
        "forType": "survival_tools",
        "src": "/assets/props/items/med5_r04_c15_079.png",
        "thumbSrc": "/assets/props/thumbs/med5_r04_c15_079.png"
    },
    {
        "id": "med5_r04_c16_080",
        "name": "Dụng Cụ Thợ Rèn #05-17",
        "forType": "survival_tools",
        "src": "/assets/props/items/med5_r04_c16_080.png",
        "thumbSrc": "/assets/props/thumbs/med5_r04_c16_080.png"
    },
    {
        "id": "med5_r04_c17_081",
        "name": "Dụng Cụ Thợ Rèn #05-18",
        "forType": "survival_tools",
        "src": "/assets/props/items/med5_r04_c17_081.png",
        "thumbSrc": "/assets/props/thumbs/med5_r04_c17_081.png"
    },
    {
        "id": "med5_r05_c00_082",
        "name": "Dụng Cụ Thợ Rèn #06-01",
        "forType": "survival_tools",
        "src": "/assets/props/items/med5_r05_c00_082.png",
        "thumbSrc": "/assets/props/thumbs/med5_r05_c00_082.png"
    },
    {
        "id": "med5_r05_c01_083",
        "name": "Dụng Cụ Thợ Rèn #06-02",
        "forType": "survival_tools",
        "src": "/assets/props/items/med5_r05_c01_083.png",
        "thumbSrc": "/assets/props/thumbs/med5_r05_c01_083.png"
    },
    {
        "id": "med5_r05_c02_084",
        "name": "Dụng Cụ Thợ Rèn #06-03",
        "forType": "survival_tools",
        "src": "/assets/props/items/med5_r05_c02_084.png",
        "thumbSrc": "/assets/props/thumbs/med5_r05_c02_084.png"
    },
    {
        "id": "med5_r05_c03_085",
        "name": "Dụng Cụ Thợ Rèn #06-04",
        "forType": "survival_tools",
        "src": "/assets/props/items/med5_r05_c03_085.png",
        "thumbSrc": "/assets/props/thumbs/med5_r05_c03_085.png"
    },
    {
        "id": "med5_r05_c04_086",
        "name": "Dụng Cụ Thợ Rèn #06-05",
        "forType": "survival_tools",
        "src": "/assets/props/items/med5_r05_c04_086.png",
        "thumbSrc": "/assets/props/thumbs/med5_r05_c04_086.png"
    },
    {
        "id": "med5_r05_c05_087",
        "name": "Dụng Cụ Thợ Rèn #06-06",
        "forType": "survival_tools",
        "src": "/assets/props/items/med5_r05_c05_087.png",
        "thumbSrc": "/assets/props/thumbs/med5_r05_c05_087.png"
    },
    {
        "id": "med5_r05_c06_088",
        "name": "Dụng Cụ Thợ Rèn #06-07",
        "forType": "survival_tools",
        "src": "/assets/props/items/med5_r05_c06_088.png",
        "thumbSrc": "/assets/props/thumbs/med5_r05_c06_088.png"
    },
    {
        "id": "med5_r05_c07_089",
        "name": "Dụng Cụ Thợ Rèn #06-08",
        "forType": "survival_tools",
        "src": "/assets/props/items/med5_r05_c07_089.png",
        "thumbSrc": "/assets/props/thumbs/med5_r05_c07_089.png"
    },
    {
        "id": "med5_r05_c08_090",
        "name": "Dụng Cụ Thợ Rèn #06-09",
        "forType": "survival_tools",
        "src": "/assets/props/items/med5_r05_c08_090.png",
        "thumbSrc": "/assets/props/thumbs/med5_r05_c08_090.png"
    },
    {
        "id": "med5_r05_c09_091",
        "name": "Dụng Cụ Thợ Rèn #06-10",
        "forType": "survival_tools",
        "src": "/assets/props/items/med5_r05_c09_091.png",
        "thumbSrc": "/assets/props/thumbs/med5_r05_c09_091.png"
    },
    {
        "id": "med5_r05_c10_092",
        "name": "Dụng Cụ Thợ Rèn #06-11",
        "forType": "survival_tools",
        "src": "/assets/props/items/med5_r05_c10_092.png",
        "thumbSrc": "/assets/props/thumbs/med5_r05_c10_092.png"
    },
    {
        "id": "med5_r05_c11_093",
        "name": "Dụng Cụ Thợ Rèn #06-12",
        "forType": "survival_tools",
        "src": "/assets/props/items/med5_r05_c11_093.png",
        "thumbSrc": "/assets/props/thumbs/med5_r05_c11_093.png"
    },
    {
        "id": "med5_r05_c12_094",
        "name": "Dụng Cụ Thợ Rèn #06-13",
        "forType": "survival_tools",
        "src": "/assets/props/items/med5_r05_c12_094.png",
        "thumbSrc": "/assets/props/thumbs/med5_r05_c12_094.png"
    },
    {
        "id": "med5_r05_c13_095",
        "name": "Dụng Cụ Thợ Rèn #06-14",
        "forType": "survival_tools",
        "src": "/assets/props/items/med5_r05_c13_095.png",
        "thumbSrc": "/assets/props/thumbs/med5_r05_c13_095.png"
    },
    {
        "id": "med5_r05_c14_096",
        "name": "Dụng Cụ Thợ Rèn #06-15",
        "forType": "survival_tools",
        "src": "/assets/props/items/med5_r05_c14_096.png",
        "thumbSrc": "/assets/props/thumbs/med5_r05_c14_096.png"
    },
    {
        "id": "med5_r05_c15_097",
        "name": "Dụng Cụ Thợ Rèn #06-16",
        "forType": "survival_tools",
        "src": "/assets/props/items/med5_r05_c15_097.png",
        "thumbSrc": "/assets/props/thumbs/med5_r05_c15_097.png"
    },
    {
        "id": "med5_r06_c00_098",
        "name": "Dụng Cụ Giả Kim & Thước Đo #07-01",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med5_r06_c00_098.png",
        "thumbSrc": "/assets/props/thumbs/med5_r06_c00_098.png"
    },
    {
        "id": "med5_r06_c01_099",
        "name": "Dụng Cụ Giả Kim & Thước Đo #07-02",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med5_r06_c01_099.png",
        "thumbSrc": "/assets/props/thumbs/med5_r06_c01_099.png"
    },
    {
        "id": "med5_r06_c02_100",
        "name": "Dụng Cụ Giả Kim & Thước Đo #07-03",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med5_r06_c02_100.png",
        "thumbSrc": "/assets/props/thumbs/med5_r06_c02_100.png"
    },
    {
        "id": "med5_r06_c03_101",
        "name": "Dụng Cụ Giả Kim & Thước Đo #07-04",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med5_r06_c03_101.png",
        "thumbSrc": "/assets/props/thumbs/med5_r06_c03_101.png"
    },
    {
        "id": "med5_r06_c04_102",
        "name": "Dụng Cụ Giả Kim & Thước Đo #07-05",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med5_r06_c04_102.png",
        "thumbSrc": "/assets/props/thumbs/med5_r06_c04_102.png"
    },
    {
        "id": "med5_r06_c05_103",
        "name": "Dụng Cụ Giả Kim & Thước Đo #07-06",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med5_r06_c05_103.png",
        "thumbSrc": "/assets/props/thumbs/med5_r06_c05_103.png"
    },
    {
        "id": "med5_r06_c06_104",
        "name": "Dụng Cụ Giả Kim & Thước Đo #07-07",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med5_r06_c06_104.png",
        "thumbSrc": "/assets/props/thumbs/med5_r06_c06_104.png"
    },
    {
        "id": "med5_r06_c07_105",
        "name": "Dụng Cụ Giả Kim & Thước Đo #07-08",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med5_r06_c07_105.png",
        "thumbSrc": "/assets/props/thumbs/med5_r06_c07_105.png"
    },
    {
        "id": "med5_r06_c08_106",
        "name": "Dụng Cụ Giả Kim & Thước Đo #07-09",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med5_r06_c08_106.png",
        "thumbSrc": "/assets/props/thumbs/med5_r06_c08_106.png"
    },
    {
        "id": "med5_r06_c09_107",
        "name": "Dụng Cụ Giả Kim & Thước Đo #07-10",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med5_r06_c09_107.png",
        "thumbSrc": "/assets/props/thumbs/med5_r06_c09_107.png"
    },
    {
        "id": "med5_r06_c10_108",
        "name": "Dụng Cụ Giả Kim & Thước Đo #07-11",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med5_r06_c10_108.png",
        "thumbSrc": "/assets/props/thumbs/med5_r06_c10_108.png"
    },
    {
        "id": "med5_r06_c11_109",
        "name": "Dụng Cụ Giả Kim & Thước Đo #07-12",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med5_r06_c11_109.png",
        "thumbSrc": "/assets/props/thumbs/med5_r06_c11_109.png"
    },
    {
        "id": "med5_r06_c12_110",
        "name": "Dụng Cụ Giả Kim & Thước Đo #07-13",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med5_r06_c12_110.png",
        "thumbSrc": "/assets/props/thumbs/med5_r06_c12_110.png"
    },
    {
        "id": "med5_r06_c13_111",
        "name": "Dụng Cụ Giả Kim & Thước Đo #07-14",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med5_r06_c13_111.png",
        "thumbSrc": "/assets/props/thumbs/med5_r06_c13_111.png"
    },
    {
        "id": "med5_r06_c14_112",
        "name": "Dụng Cụ Giả Kim & Thước Đo #07-15",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med5_r06_c14_112.png",
        "thumbSrc": "/assets/props/thumbs/med5_r06_c14_112.png"
    },
    {
        "id": "med5_r06_c15_113",
        "name": "Dụng Cụ Giả Kim & Thước Đo #07-16",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med5_r06_c15_113.png",
        "thumbSrc": "/assets/props/thumbs/med5_r06_c15_113.png"
    },
    {
        "id": "med5_r07_c00_114",
        "name": "Dụng Cụ Giả Kim & Thước Đo #08-01",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med5_r07_c00_114.png",
        "thumbSrc": "/assets/props/thumbs/med5_r07_c00_114.png"
    },
    {
        "id": "med5_r07_c01_115",
        "name": "Dụng Cụ Giả Kim & Thước Đo #08-02",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med5_r07_c01_115.png",
        "thumbSrc": "/assets/props/thumbs/med5_r07_c01_115.png"
    },
    {
        "id": "med5_r07_c02_116",
        "name": "Dụng Cụ Giả Kim & Thước Đo #08-03",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med5_r07_c02_116.png",
        "thumbSrc": "/assets/props/thumbs/med5_r07_c02_116.png"
    },
    {
        "id": "med5_r07_c03_117",
        "name": "Dụng Cụ Giả Kim & Thước Đo #08-04",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med5_r07_c03_117.png",
        "thumbSrc": "/assets/props/thumbs/med5_r07_c03_117.png"
    },
    {
        "id": "med5_r07_c04_118",
        "name": "Dụng Cụ Giả Kim & Thước Đo #08-05",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med5_r07_c04_118.png",
        "thumbSrc": "/assets/props/thumbs/med5_r07_c04_118.png"
    },
    {
        "id": "med5_r07_c05_119",
        "name": "Dụng Cụ Giả Kim & Thước Đo #08-06",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med5_r07_c05_119.png",
        "thumbSrc": "/assets/props/thumbs/med5_r07_c05_119.png"
    },
    {
        "id": "med5_r07_c06_120",
        "name": "Dụng Cụ Giả Kim & Thước Đo #08-07",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med5_r07_c06_120.png",
        "thumbSrc": "/assets/props/thumbs/med5_r07_c06_120.png"
    },
    {
        "id": "med5_r07_c07_121",
        "name": "Dụng Cụ Giả Kim & Thước Đo #08-08",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med5_r07_c07_121.png",
        "thumbSrc": "/assets/props/thumbs/med5_r07_c07_121.png"
    },
    {
        "id": "med5_r07_c08_122",
        "name": "Dụng Cụ Giả Kim & Thước Đo #08-09",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med5_r07_c08_122.png",
        "thumbSrc": "/assets/props/thumbs/med5_r07_c08_122.png"
    },
    {
        "id": "med5_r07_c09_123",
        "name": "Dụng Cụ Giả Kim & Thước Đo #08-10",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med5_r07_c09_123.png",
        "thumbSrc": "/assets/props/thumbs/med5_r07_c09_123.png"
    },
    {
        "id": "med5_r07_c10_124",
        "name": "Dụng Cụ Giả Kim & Thước Đo #08-11",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med5_r07_c10_124.png",
        "thumbSrc": "/assets/props/thumbs/med5_r07_c10_124.png"
    },
    {
        "id": "med5_r07_c11_125",
        "name": "Dụng Cụ Giả Kim & Thước Đo #08-12",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med5_r07_c11_125.png",
        "thumbSrc": "/assets/props/thumbs/med5_r07_c11_125.png"
    },
    {
        "id": "med5_r07_c12_126",
        "name": "Dụng Cụ Giả Kim & Thước Đo #08-13",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med5_r07_c12_126.png",
        "thumbSrc": "/assets/props/thumbs/med5_r07_c12_126.png"
    },
    {
        "id": "med5_r07_c13_127",
        "name": "Dụng Cụ Giả Kim & Thước Đo #08-14",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med5_r07_c13_127.png",
        "thumbSrc": "/assets/props/thumbs/med5_r07_c13_127.png"
    },
    {
        "id": "med5_r07_c14_128",
        "name": "Dụng Cụ Giả Kim & Thước Đo #08-15",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med5_r07_c14_128.png",
        "thumbSrc": "/assets/props/thumbs/med5_r07_c14_128.png"
    },
    {
        "id": "med5_r07_c15_129",
        "name": "Dụng Cụ Giả Kim & Thước Đo #08-16",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med5_r07_c15_129.png",
        "thumbSrc": "/assets/props/thumbs/med5_r07_c15_129.png"
    },
    {
        "id": "med5_r07_c16_130",
        "name": "Dụng Cụ Giả Kim & Thước Đo #08-17",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med5_r07_c16_130.png",
        "thumbSrc": "/assets/props/thumbs/med5_r07_c16_130.png"
    },
    {
        "id": "med5_r08_c00_131",
        "name": "Dụng Cụ Giả Kim & Thước Đo #09-01",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med5_r08_c00_131.png",
        "thumbSrc": "/assets/props/thumbs/med5_r08_c00_131.png"
    },
    {
        "id": "med5_r08_c01_132",
        "name": "Dụng Cụ Giả Kim & Thước Đo #09-02",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med5_r08_c01_132.png",
        "thumbSrc": "/assets/props/thumbs/med5_r08_c01_132.png"
    },
    {
        "id": "med5_r08_c02_133",
        "name": "Dụng Cụ Giả Kim & Thước Đo #09-03",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med5_r08_c02_133.png",
        "thumbSrc": "/assets/props/thumbs/med5_r08_c02_133.png"
    },
    {
        "id": "med5_r08_c03_134",
        "name": "Dụng Cụ Giả Kim & Thước Đo #09-04",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med5_r08_c03_134.png",
        "thumbSrc": "/assets/props/thumbs/med5_r08_c03_134.png"
    },
    {
        "id": "med5_r08_c04_135",
        "name": "Dụng Cụ Giả Kim & Thước Đo #09-05",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med5_r08_c04_135.png",
        "thumbSrc": "/assets/props/thumbs/med5_r08_c04_135.png"
    },
    {
        "id": "med5_r08_c05_136",
        "name": "Dụng Cụ Giả Kim & Thước Đo #09-06",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med5_r08_c05_136.png",
        "thumbSrc": "/assets/props/thumbs/med5_r08_c05_136.png"
    },
    {
        "id": "med5_r08_c06_137",
        "name": "Dụng Cụ Giả Kim & Thước Đo #09-07",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med5_r08_c06_137.png",
        "thumbSrc": "/assets/props/thumbs/med5_r08_c06_137.png"
    },
    {
        "id": "med5_r08_c07_138",
        "name": "Dụng Cụ Giả Kim & Thước Đo #09-08",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med5_r08_c07_138.png",
        "thumbSrc": "/assets/props/thumbs/med5_r08_c07_138.png"
    },
    {
        "id": "med5_r08_c08_139",
        "name": "Dụng Cụ Giả Kim & Thước Đo #09-09",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med5_r08_c08_139.png",
        "thumbSrc": "/assets/props/thumbs/med5_r08_c08_139.png"
    },
    {
        "id": "med5_r08_c09_140",
        "name": "Dụng Cụ Giả Kim & Thước Đo #09-10",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med5_r08_c09_140.png",
        "thumbSrc": "/assets/props/thumbs/med5_r08_c09_140.png"
    },
    {
        "id": "med5_r08_c10_141",
        "name": "Dụng Cụ Giả Kim & Thước Đo #09-11",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med5_r08_c10_141.png",
        "thumbSrc": "/assets/props/thumbs/med5_r08_c10_141.png"
    },
    {
        "id": "med5_r08_c11_142",
        "name": "Dụng Cụ Giả Kim & Thước Đo #09-12",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med5_r08_c11_142.png",
        "thumbSrc": "/assets/props/thumbs/med5_r08_c11_142.png"
    },
    {
        "id": "med5_r08_c12_143",
        "name": "Dụng Cụ Giả Kim & Thước Đo #09-13",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med5_r08_c12_143.png",
        "thumbSrc": "/assets/props/thumbs/med5_r08_c12_143.png"
    },
    {
        "id": "med5_r08_c13_144",
        "name": "Dụng Cụ Giả Kim & Thước Đo #09-14",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med5_r08_c13_144.png",
        "thumbSrc": "/assets/props/thumbs/med5_r08_c13_144.png"
    },
    {
        "id": "med5_r08_c14_145",
        "name": "Dụng Cụ Giả Kim & Thước Đo #09-15",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med5_r08_c14_145.png",
        "thumbSrc": "/assets/props/thumbs/med5_r08_c14_145.png"
    },
    {
        "id": "med5_r08_c15_146",
        "name": "Dụng Cụ Giả Kim & Thước Đo #09-16",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med5_r08_c15_146.png",
        "thumbSrc": "/assets/props/thumbs/med5_r08_c15_146.png"
    },
    {
        "id": "med5_r09_c00_147",
        "name": "Bình Thủy Tinh Giả Kim #10-01",
        "forType": "alchemy",
        "src": "/assets/props/items/med5_r09_c00_147.png",
        "thumbSrc": "/assets/props/thumbs/med5_r09_c00_147.png"
    },
    {
        "id": "med5_r09_c01_148",
        "name": "Bình Thủy Tinh Giả Kim #10-02",
        "forType": "alchemy",
        "src": "/assets/props/items/med5_r09_c01_148.png",
        "thumbSrc": "/assets/props/thumbs/med5_r09_c01_148.png"
    },
    {
        "id": "med5_r09_c02_149",
        "name": "Bình Thủy Tinh Giả Kim #10-03",
        "forType": "alchemy",
        "src": "/assets/props/items/med5_r09_c02_149.png",
        "thumbSrc": "/assets/props/thumbs/med5_r09_c02_149.png"
    },
    {
        "id": "med5_r09_c03_150",
        "name": "Bình Thủy Tinh Giả Kim #10-04",
        "forType": "alchemy",
        "src": "/assets/props/items/med5_r09_c03_150.png",
        "thumbSrc": "/assets/props/thumbs/med5_r09_c03_150.png"
    },
    {
        "id": "med5_r09_c04_151",
        "name": "Bình Thủy Tinh Giả Kim #10-05",
        "forType": "alchemy",
        "src": "/assets/props/items/med5_r09_c04_151.png",
        "thumbSrc": "/assets/props/thumbs/med5_r09_c04_151.png"
    },
    {
        "id": "med5_r09_c05_152",
        "name": "Bình Thủy Tinh Giả Kim #10-06",
        "forType": "alchemy",
        "src": "/assets/props/items/med5_r09_c05_152.png",
        "thumbSrc": "/assets/props/thumbs/med5_r09_c05_152.png"
    },
    {
        "id": "med5_r09_c06_153",
        "name": "Bình Thủy Tinh Giả Kim #10-07",
        "forType": "alchemy",
        "src": "/assets/props/items/med5_r09_c06_153.png",
        "thumbSrc": "/assets/props/thumbs/med5_r09_c06_153.png"
    },
    {
        "id": "med5_r09_c07_154",
        "name": "Bình Thủy Tinh Giả Kim #10-08",
        "forType": "alchemy",
        "src": "/assets/props/items/med5_r09_c07_154.png",
        "thumbSrc": "/assets/props/thumbs/med5_r09_c07_154.png"
    },
    {
        "id": "med5_r09_c08_155",
        "name": "Bình Thủy Tinh Giả Kim #10-09",
        "forType": "alchemy",
        "src": "/assets/props/items/med5_r09_c08_155.png",
        "thumbSrc": "/assets/props/thumbs/med5_r09_c08_155.png"
    },
    {
        "id": "med5_r09_c09_156",
        "name": "Bình Thủy Tinh Giả Kim #10-10",
        "forType": "alchemy",
        "src": "/assets/props/items/med5_r09_c09_156.png",
        "thumbSrc": "/assets/props/thumbs/med5_r09_c09_156.png"
    },
    {
        "id": "med5_r09_c10_157",
        "name": "Bình Thủy Tinh Giả Kim #10-11",
        "forType": "alchemy",
        "src": "/assets/props/items/med5_r09_c10_157.png",
        "thumbSrc": "/assets/props/thumbs/med5_r09_c10_157.png"
    },
    {
        "id": "med5_r09_c11_158",
        "name": "Bình Thủy Tinh Giả Kim #10-12",
        "forType": "alchemy",
        "src": "/assets/props/items/med5_r09_c11_158.png",
        "thumbSrc": "/assets/props/thumbs/med5_r09_c11_158.png"
    },
    {
        "id": "med5_r09_c12_159",
        "name": "Bình Thủy Tinh Giả Kim #10-13",
        "forType": "alchemy",
        "src": "/assets/props/items/med5_r09_c12_159.png",
        "thumbSrc": "/assets/props/thumbs/med5_r09_c12_159.png"
    },
    {
        "id": "med5_r09_c13_160",
        "name": "Bình Thủy Tinh Giả Kim #10-14",
        "forType": "alchemy",
        "src": "/assets/props/items/med5_r09_c13_160.png",
        "thumbSrc": "/assets/props/thumbs/med5_r09_c13_160.png"
    },
    {
        "id": "med5_r09_c14_161",
        "name": "Bình Thủy Tinh Giả Kim #10-15",
        "forType": "alchemy",
        "src": "/assets/props/items/med5_r09_c14_161.png",
        "thumbSrc": "/assets/props/thumbs/med5_r09_c14_161.png"
    },
    {
        "id": "med5_r09_c15_162",
        "name": "Bình Thủy Tinh Giả Kim #10-16",
        "forType": "alchemy",
        "src": "/assets/props/items/med5_r09_c15_162.png",
        "thumbSrc": "/assets/props/thumbs/med5_r09_c15_162.png"
    },
    {
        "id": "med5_r10_c00_163",
        "name": "Bình Thủy Tinh Giả Kim #11-01",
        "forType": "alchemy",
        "src": "/assets/props/items/med5_r10_c00_163.png",
        "thumbSrc": "/assets/props/thumbs/med5_r10_c00_163.png"
    },
    {
        "id": "med5_r10_c01_164",
        "name": "Bình Thủy Tinh Giả Kim #11-02",
        "forType": "alchemy",
        "src": "/assets/props/items/med5_r10_c01_164.png",
        "thumbSrc": "/assets/props/thumbs/med5_r10_c01_164.png"
    },
    {
        "id": "med5_r10_c02_165",
        "name": "Bình Thủy Tinh Giả Kim #11-03",
        "forType": "alchemy",
        "src": "/assets/props/items/med5_r10_c02_165.png",
        "thumbSrc": "/assets/props/thumbs/med5_r10_c02_165.png"
    },
    {
        "id": "med5_r10_c03_166",
        "name": "Bình Thủy Tinh Giả Kim #11-04",
        "forType": "alchemy",
        "src": "/assets/props/items/med5_r10_c03_166.png",
        "thumbSrc": "/assets/props/thumbs/med5_r10_c03_166.png"
    },
    {
        "id": "med5_r10_c04_167",
        "name": "Bình Thủy Tinh Giả Kim #11-05",
        "forType": "alchemy",
        "src": "/assets/props/items/med5_r10_c04_167.png",
        "thumbSrc": "/assets/props/thumbs/med5_r10_c04_167.png"
    },
    {
        "id": "med5_r10_c05_168",
        "name": "Bình Thủy Tinh Giả Kim #11-06",
        "forType": "alchemy",
        "src": "/assets/props/items/med5_r10_c05_168.png",
        "thumbSrc": "/assets/props/thumbs/med5_r10_c05_168.png"
    },
    {
        "id": "med5_r10_c06_169",
        "name": "Bình Thủy Tinh Giả Kim #11-07",
        "forType": "alchemy",
        "src": "/assets/props/items/med5_r10_c06_169.png",
        "thumbSrc": "/assets/props/thumbs/med5_r10_c06_169.png"
    },
    {
        "id": "med5_r10_c07_170",
        "name": "Bình Thủy Tinh Giả Kim #11-08",
        "forType": "alchemy",
        "src": "/assets/props/items/med5_r10_c07_170.png",
        "thumbSrc": "/assets/props/thumbs/med5_r10_c07_170.png"
    },
    {
        "id": "med5_r10_c08_171",
        "name": "Bình Thủy Tinh Giả Kim #11-09",
        "forType": "alchemy",
        "src": "/assets/props/items/med5_r10_c08_171.png",
        "thumbSrc": "/assets/props/thumbs/med5_r10_c08_171.png"
    },
    {
        "id": "med5_r10_c09_172",
        "name": "Bình Thủy Tinh Giả Kim #11-10",
        "forType": "alchemy",
        "src": "/assets/props/items/med5_r10_c09_172.png",
        "thumbSrc": "/assets/props/thumbs/med5_r10_c09_172.png"
    },
    {
        "id": "med5_r10_c10_173",
        "name": "Bình Thủy Tinh Giả Kim #11-11",
        "forType": "alchemy",
        "src": "/assets/props/items/med5_r10_c10_173.png",
        "thumbSrc": "/assets/props/thumbs/med5_r10_c10_173.png"
    },
    {
        "id": "med5_r10_c11_174",
        "name": "Bình Thủy Tinh Giả Kim #11-12",
        "forType": "alchemy",
        "src": "/assets/props/items/med5_r10_c11_174.png",
        "thumbSrc": "/assets/props/thumbs/med5_r10_c11_174.png"
    },
    {
        "id": "med5_r10_c12_175",
        "name": "Bình Thủy Tinh Giả Kim #11-13",
        "forType": "alchemy",
        "src": "/assets/props/items/med5_r10_c12_175.png",
        "thumbSrc": "/assets/props/thumbs/med5_r10_c12_175.png"
    },
    {
        "id": "med5_r10_c13_176",
        "name": "Bình Thủy Tinh Giả Kim #11-14",
        "forType": "alchemy",
        "src": "/assets/props/items/med5_r10_c13_176.png",
        "thumbSrc": "/assets/props/thumbs/med5_r10_c13_176.png"
    },
    {
        "id": "med5_r10_c14_177",
        "name": "Bình Thủy Tinh Giả Kim #11-15",
        "forType": "alchemy",
        "src": "/assets/props/items/med5_r10_c14_177.png",
        "thumbSrc": "/assets/props/thumbs/med5_r10_c14_177.png"
    },
    {
        "id": "med5_r10_c15_178",
        "name": "Bình Thủy Tinh Giả Kim #11-16",
        "forType": "alchemy",
        "src": "/assets/props/items/med5_r10_c15_178.png",
        "thumbSrc": "/assets/props/thumbs/med5_r10_c15_178.png"
    },
    {
        "id": "med5_r11_c00_179",
        "name": "Trang Sức Hoàng Gia #12-01",
        "forType": "gems_loot",
        "src": "/assets/props/items/med5_r11_c00_179.png",
        "thumbSrc": "/assets/props/thumbs/med5_r11_c00_179.png"
    },
    {
        "id": "med5_r11_c01_180",
        "name": "Trang Sức Hoàng Gia #12-02",
        "forType": "gems_loot",
        "src": "/assets/props/items/med5_r11_c01_180.png",
        "thumbSrc": "/assets/props/thumbs/med5_r11_c01_180.png"
    },
    {
        "id": "med5_r11_c02_181",
        "name": "Trang Sức Hoàng Gia #12-03",
        "forType": "gems_loot",
        "src": "/assets/props/items/med5_r11_c02_181.png",
        "thumbSrc": "/assets/props/thumbs/med5_r11_c02_181.png"
    },
    {
        "id": "med5_r11_c03_182",
        "name": "Trang Sức Hoàng Gia #12-04",
        "forType": "gems_loot",
        "src": "/assets/props/items/med5_r11_c03_182.png",
        "thumbSrc": "/assets/props/thumbs/med5_r11_c03_182.png"
    },
    {
        "id": "med5_r11_c04_183",
        "name": "Trang Sức Hoàng Gia #12-05",
        "forType": "gems_loot",
        "src": "/assets/props/items/med5_r11_c04_183.png",
        "thumbSrc": "/assets/props/thumbs/med5_r11_c04_183.png"
    },
    {
        "id": "med5_r11_c05_184",
        "name": "Trang Sức Hoàng Gia #12-06",
        "forType": "gems_loot",
        "src": "/assets/props/items/med5_r11_c05_184.png",
        "thumbSrc": "/assets/props/thumbs/med5_r11_c05_184.png"
    },
    {
        "id": "med5_r11_c06_185",
        "name": "Trang Sức Hoàng Gia #12-07",
        "forType": "gems_loot",
        "src": "/assets/props/items/med5_r11_c06_185.png",
        "thumbSrc": "/assets/props/thumbs/med5_r11_c06_185.png"
    },
    {
        "id": "med5_r11_c07_186",
        "name": "Trang Sức Hoàng Gia #12-08",
        "forType": "gems_loot",
        "src": "/assets/props/items/med5_r11_c07_186.png",
        "thumbSrc": "/assets/props/thumbs/med5_r11_c07_186.png"
    },
    {
        "id": "med5_r11_c08_187",
        "name": "Trang Sức Hoàng Gia #12-09",
        "forType": "gems_loot",
        "src": "/assets/props/items/med5_r11_c08_187.png",
        "thumbSrc": "/assets/props/thumbs/med5_r11_c08_187.png"
    },
    {
        "id": "med5_r11_c09_188",
        "name": "Trang Sức Hoàng Gia #12-10",
        "forType": "gems_loot",
        "src": "/assets/props/items/med5_r11_c09_188.png",
        "thumbSrc": "/assets/props/thumbs/med5_r11_c09_188.png"
    },
    {
        "id": "med5_r11_c10_189",
        "name": "Trang Sức Hoàng Gia #12-11",
        "forType": "gems_loot",
        "src": "/assets/props/items/med5_r11_c10_189.png",
        "thumbSrc": "/assets/props/thumbs/med5_r11_c10_189.png"
    },
    {
        "id": "med5_r11_c11_190",
        "name": "Trang Sức Hoàng Gia #12-12",
        "forType": "gems_loot",
        "src": "/assets/props/items/med5_r11_c11_190.png",
        "thumbSrc": "/assets/props/thumbs/med5_r11_c11_190.png"
    },
    {
        "id": "med5_r11_c12_191",
        "name": "Trang Sức Hoàng Gia #12-13",
        "forType": "gems_loot",
        "src": "/assets/props/items/med5_r11_c12_191.png",
        "thumbSrc": "/assets/props/thumbs/med5_r11_c12_191.png"
    },
    {
        "id": "med5_r11_c13_192",
        "name": "Trang Sức Hoàng Gia #12-14",
        "forType": "gems_loot",
        "src": "/assets/props/items/med5_r11_c13_192.png",
        "thumbSrc": "/assets/props/thumbs/med5_r11_c13_192.png"
    },
    {
        "id": "med5_r11_c14_193",
        "name": "Trang Sức Hoàng Gia #12-15",
        "forType": "gems_loot",
        "src": "/assets/props/items/med5_r11_c14_193.png",
        "thumbSrc": "/assets/props/thumbs/med5_r11_c14_193.png"
    },
    {
        "id": "med5_r11_c15_194",
        "name": "Trang Sức Hoàng Gia #12-16",
        "forType": "gems_loot",
        "src": "/assets/props/items/med5_r11_c15_194.png",
        "thumbSrc": "/assets/props/thumbs/med5_r11_c15_194.png"
    },
    {
        "id": "med5_r12_c00_195",
        "name": "Trang Sức Hoàng Gia #13-01",
        "forType": "gems_loot",
        "src": "/assets/props/items/med5_r12_c00_195.png",
        "thumbSrc": "/assets/props/thumbs/med5_r12_c00_195.png"
    },
    {
        "id": "med5_r12_c01_196",
        "name": "Trang Sức Hoàng Gia #13-02",
        "forType": "gems_loot",
        "src": "/assets/props/items/med5_r12_c01_196.png",
        "thumbSrc": "/assets/props/thumbs/med5_r12_c01_196.png"
    },
    {
        "id": "med5_r12_c02_197",
        "name": "Trang Sức Hoàng Gia #13-03",
        "forType": "gems_loot",
        "src": "/assets/props/items/med5_r12_c02_197.png",
        "thumbSrc": "/assets/props/thumbs/med5_r12_c02_197.png"
    },
    {
        "id": "med5_r12_c03_198",
        "name": "Trang Sức Hoàng Gia #13-04",
        "forType": "gems_loot",
        "src": "/assets/props/items/med5_r12_c03_198.png",
        "thumbSrc": "/assets/props/thumbs/med5_r12_c03_198.png"
    },
    {
        "id": "med5_r12_c04_199",
        "name": "Trang Sức Hoàng Gia #13-05",
        "forType": "gems_loot",
        "src": "/assets/props/items/med5_r12_c04_199.png",
        "thumbSrc": "/assets/props/thumbs/med5_r12_c04_199.png"
    },
    {
        "id": "med5_r12_c08_200",
        "name": "Trang Sức Hoàng Gia #13-09",
        "forType": "gems_loot",
        "src": "/assets/props/items/med5_r12_c08_200.png",
        "thumbSrc": "/assets/props/thumbs/med5_r12_c08_200.png"
    },
    {
        "id": "med5_r12_c09_201",
        "name": "Trang Sức Hoàng Gia #13-10",
        "forType": "gems_loot",
        "src": "/assets/props/items/med5_r12_c09_201.png",
        "thumbSrc": "/assets/props/thumbs/med5_r12_c09_201.png"
    },
    {
        "id": "med5_r12_c10_202",
        "name": "Trang Sức Hoàng Gia #13-11",
        "forType": "gems_loot",
        "src": "/assets/props/items/med5_r12_c10_202.png",
        "thumbSrc": "/assets/props/thumbs/med5_r12_c10_202.png"
    },
    {
        "id": "med5_r12_c11_203",
        "name": "Trang Sức Hoàng Gia #13-12",
        "forType": "gems_loot",
        "src": "/assets/props/items/med5_r12_c11_203.png",
        "thumbSrc": "/assets/props/thumbs/med5_r12_c11_203.png"
    },
    {
        "id": "med5_r12_c12_204",
        "name": "Trang Sức Hoàng Gia #13-13",
        "forType": "gems_loot",
        "src": "/assets/props/items/med5_r12_c12_204.png",
        "thumbSrc": "/assets/props/thumbs/med5_r12_c12_204.png"
    },
    {
        "id": "med5_r12_c13_205",
        "name": "Trang Sức Hoàng Gia #13-14",
        "forType": "gems_loot",
        "src": "/assets/props/items/med5_r12_c13_205.png",
        "thumbSrc": "/assets/props/thumbs/med5_r12_c13_205.png"
    },
    {
        "id": "med5_r12_c14_206",
        "name": "Trang Sức Hoàng Gia #13-15",
        "forType": "gems_loot",
        "src": "/assets/props/items/med5_r12_c14_206.png",
        "thumbSrc": "/assets/props/thumbs/med5_r12_c14_206.png"
    },
    {
        "id": "med5_r12_c15_207",
        "name": "Trang Sức Hoàng Gia #13-16",
        "forType": "gems_loot",
        "src": "/assets/props/items/med5_r12_c15_207.png",
        "thumbSrc": "/assets/props/thumbs/med5_r12_c15_207.png"
    },
    {
        "id": "med5_r12_c16_208",
        "name": "Trang Sức Hoàng Gia #13-17",
        "forType": "gems_loot",
        "src": "/assets/props/items/med5_r12_c16_208.png",
        "thumbSrc": "/assets/props/thumbs/med5_r12_c16_208.png"
    },
    {
        "id": "med5_r12_c17_209",
        "name": "Trang Sức Hoàng Gia #13-18",
        "forType": "gems_loot",
        "src": "/assets/props/items/med5_r12_c17_209.png",
        "thumbSrc": "/assets/props/thumbs/med5_r12_c17_209.png"
    },
    {
        "id": "med5_r13_c00_210",
        "name": "Vật Phẩm Cung Đình #14-01",
        "forType": "provisions",
        "src": "/assets/props/items/med5_r13_c00_210.png",
        "thumbSrc": "/assets/props/thumbs/med5_r13_c00_210.png"
    },
    {
        "id": "med5_r13_c01_211",
        "name": "Vật Phẩm Cung Đình #14-02",
        "forType": "provisions",
        "src": "/assets/props/items/med5_r13_c01_211.png",
        "thumbSrc": "/assets/props/thumbs/med5_r13_c01_211.png"
    },
    {
        "id": "med5_r13_c02_212",
        "name": "Vật Phẩm Cung Đình #14-03",
        "forType": "provisions",
        "src": "/assets/props/items/med5_r13_c02_212.png",
        "thumbSrc": "/assets/props/thumbs/med5_r13_c02_212.png"
    },
    {
        "id": "med5_r13_c03_213",
        "name": "Vật Phẩm Cung Đình #14-04",
        "forType": "provisions",
        "src": "/assets/props/items/med5_r13_c03_213.png",
        "thumbSrc": "/assets/props/thumbs/med5_r13_c03_213.png"
    },
    {
        "id": "med5_r13_c04_214",
        "name": "Vật Phẩm Cung Đình #14-05",
        "forType": "provisions",
        "src": "/assets/props/items/med5_r13_c04_214.png",
        "thumbSrc": "/assets/props/thumbs/med5_r13_c04_214.png"
    },
    {
        "id": "med5_r13_c05_215",
        "name": "Vật Phẩm Cung Đình #14-06",
        "forType": "provisions",
        "src": "/assets/props/items/med5_r13_c05_215.png",
        "thumbSrc": "/assets/props/thumbs/med5_r13_c05_215.png"
    },
    {
        "id": "med5_r13_c06_216",
        "name": "Vật Phẩm Cung Đình #14-07",
        "forType": "provisions",
        "src": "/assets/props/items/med5_r13_c06_216.png",
        "thumbSrc": "/assets/props/thumbs/med5_r13_c06_216.png"
    },
    {
        "id": "med5_r13_c07_217",
        "name": "Vật Phẩm Cung Đình #14-08",
        "forType": "provisions",
        "src": "/assets/props/items/med5_r13_c07_217.png",
        "thumbSrc": "/assets/props/thumbs/med5_r13_c07_217.png"
    },
    {
        "id": "med5_r13_c08_218",
        "name": "Vật Phẩm Cung Đình #14-09",
        "forType": "provisions",
        "src": "/assets/props/items/med5_r13_c08_218.png",
        "thumbSrc": "/assets/props/thumbs/med5_r13_c08_218.png"
    },
    {
        "id": "med5_r13_c09_219",
        "name": "Vật Phẩm Cung Đình #14-10",
        "forType": "provisions",
        "src": "/assets/props/items/med5_r13_c09_219.png",
        "thumbSrc": "/assets/props/thumbs/med5_r13_c09_219.png"
    },
    {
        "id": "med5_r13_c10_220",
        "name": "Vật Phẩm Cung Đình #14-11",
        "forType": "provisions",
        "src": "/assets/props/items/med5_r13_c10_220.png",
        "thumbSrc": "/assets/props/thumbs/med5_r13_c10_220.png"
    },
    {
        "id": "med5_r13_c11_221",
        "name": "Vật Phẩm Cung Đình #14-12",
        "forType": "provisions",
        "src": "/assets/props/items/med5_r13_c11_221.png",
        "thumbSrc": "/assets/props/thumbs/med5_r13_c11_221.png"
    },
    {
        "id": "med5_r13_c12_222",
        "name": "Vật Phẩm Cung Đình #14-13",
        "forType": "provisions",
        "src": "/assets/props/items/med5_r13_c12_222.png",
        "thumbSrc": "/assets/props/thumbs/med5_r13_c12_222.png"
    },
    {
        "id": "med5_r13_c13_223",
        "name": "Vật Phẩm Cung Đình #14-14",
        "forType": "provisions",
        "src": "/assets/props/items/med5_r13_c13_223.png",
        "thumbSrc": "/assets/props/thumbs/med5_r13_c13_223.png"
    },
    {
        "id": "med5_r13_c14_224",
        "name": "Vật Phẩm Cung Đình #14-15",
        "forType": "provisions",
        "src": "/assets/props/items/med5_r13_c14_224.png",
        "thumbSrc": "/assets/props/thumbs/med5_r13_c14_224.png"
    },
    {
        "id": "med5_r13_c15_225",
        "name": "Vật Phẩm Cung Đình #14-16",
        "forType": "provisions",
        "src": "/assets/props/items/med5_r13_c15_225.png",
        "thumbSrc": "/assets/props/thumbs/med5_r13_c15_225.png"
    },
    {
        "id": "med2_r00_c00_000",
        "name": "Bánh Mì & Bánh Nướng #01-01",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r00_c00_000.png",
        "thumbSrc": "/assets/props/thumbs/med2_r00_c00_000.png"
    },
    {
        "id": "med2_r00_c01_001",
        "name": "Bánh Mì & Bánh Nướng #01-02",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r00_c01_001.png",
        "thumbSrc": "/assets/props/thumbs/med2_r00_c01_001.png"
    },
    {
        "id": "med2_r00_c02_002",
        "name": "Bánh Mì & Bánh Nướng #01-03",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r00_c02_002.png",
        "thumbSrc": "/assets/props/thumbs/med2_r00_c02_002.png"
    },
    {
        "id": "med2_r00_c03_003",
        "name": "Bánh Mì & Bánh Nướng #01-04",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r00_c03_003.png",
        "thumbSrc": "/assets/props/thumbs/med2_r00_c03_003.png"
    },
    {
        "id": "med2_r00_c04_004",
        "name": "Bánh Mì & Bánh Nướng #01-05",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r00_c04_004.png",
        "thumbSrc": "/assets/props/thumbs/med2_r00_c04_004.png"
    },
    {
        "id": "med2_r00_c05_005",
        "name": "Bánh Mì & Bánh Nướng #01-06",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r00_c05_005.png",
        "thumbSrc": "/assets/props/thumbs/med2_r00_c05_005.png"
    },
    {
        "id": "med2_r00_c06_006",
        "name": "Bánh Mì & Bánh Nướng #01-07",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r00_c06_006.png",
        "thumbSrc": "/assets/props/thumbs/med2_r00_c06_006.png"
    },
    {
        "id": "med2_r00_c07_007",
        "name": "Bánh Mì & Bánh Nướng #01-08",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r00_c07_007.png",
        "thumbSrc": "/assets/props/thumbs/med2_r00_c07_007.png"
    },
    {
        "id": "med2_r00_c08_008",
        "name": "Bánh Mì & Bánh Nướng #01-09",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r00_c08_008.png",
        "thumbSrc": "/assets/props/thumbs/med2_r00_c08_008.png"
    },
    {
        "id": "med2_r00_c09_009",
        "name": "Bánh Mì & Bánh Nướng #01-10",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r00_c09_009.png",
        "thumbSrc": "/assets/props/thumbs/med2_r00_c09_009.png"
    },
    {
        "id": "med2_r00_c10_010",
        "name": "Bánh Mì & Bánh Nướng #01-11",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r00_c10_010.png",
        "thumbSrc": "/assets/props/thumbs/med2_r00_c10_010.png"
    },
    {
        "id": "med2_r00_c11_011",
        "name": "Bánh Mì & Bánh Nướng #01-12",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r00_c11_011.png",
        "thumbSrc": "/assets/props/thumbs/med2_r00_c11_011.png"
    },
    {
        "id": "med2_r00_c12_012",
        "name": "Bánh Mì & Bánh Nướng #01-13",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r00_c12_012.png",
        "thumbSrc": "/assets/props/thumbs/med2_r00_c12_012.png"
    },
    {
        "id": "med2_r00_c13_013",
        "name": "Bánh Mì & Bánh Nướng #01-14",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r00_c13_013.png",
        "thumbSrc": "/assets/props/thumbs/med2_r00_c13_013.png"
    },
    {
        "id": "med2_r00_c14_014",
        "name": "Bánh Mì & Bánh Nướng #01-15",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r00_c14_014.png",
        "thumbSrc": "/assets/props/thumbs/med2_r00_c14_014.png"
    },
    {
        "id": "med2_r00_c15_015",
        "name": "Bánh Mì & Bánh Nướng #01-16",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r00_c15_015.png",
        "thumbSrc": "/assets/props/thumbs/med2_r00_c15_015.png"
    },
    {
        "id": "med2_r01_c00_016",
        "name": "Bánh Mì & Bánh Nướng #02-01",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r01_c00_016.png",
        "thumbSrc": "/assets/props/thumbs/med2_r01_c00_016.png"
    },
    {
        "id": "med2_r01_c01_017",
        "name": "Bánh Mì & Bánh Nướng #02-02",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r01_c01_017.png",
        "thumbSrc": "/assets/props/thumbs/med2_r01_c01_017.png"
    },
    {
        "id": "med2_r01_c02_018",
        "name": "Bánh Mì & Bánh Nướng #02-03",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r01_c02_018.png",
        "thumbSrc": "/assets/props/thumbs/med2_r01_c02_018.png"
    },
    {
        "id": "med2_r01_c03_019",
        "name": "Bánh Mì & Bánh Nướng #02-04",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r01_c03_019.png",
        "thumbSrc": "/assets/props/thumbs/med2_r01_c03_019.png"
    },
    {
        "id": "med2_r01_c04_020",
        "name": "Bánh Mì & Bánh Nướng #02-05",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r01_c04_020.png",
        "thumbSrc": "/assets/props/thumbs/med2_r01_c04_020.png"
    },
    {
        "id": "med2_r01_c05_021",
        "name": "Bánh Mì & Bánh Nướng #02-06",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r01_c05_021.png",
        "thumbSrc": "/assets/props/thumbs/med2_r01_c05_021.png"
    },
    {
        "id": "med2_r01_c06_022",
        "name": "Bánh Mì & Bánh Nướng #02-07",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r01_c06_022.png",
        "thumbSrc": "/assets/props/thumbs/med2_r01_c06_022.png"
    },
    {
        "id": "med2_r01_c07_023",
        "name": "Bánh Mì & Bánh Nướng #02-08",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r01_c07_023.png",
        "thumbSrc": "/assets/props/thumbs/med2_r01_c07_023.png"
    },
    {
        "id": "med2_r01_c08_024",
        "name": "Bánh Mì & Bánh Nướng #02-09",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r01_c08_024.png",
        "thumbSrc": "/assets/props/thumbs/med2_r01_c08_024.png"
    },
    {
        "id": "med2_r01_c09_025",
        "name": "Bánh Mì & Bánh Nướng #02-10",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r01_c09_025.png",
        "thumbSrc": "/assets/props/thumbs/med2_r01_c09_025.png"
    },
    {
        "id": "med2_r01_c10_026",
        "name": "Bánh Mì & Bánh Nướng #02-11",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r01_c10_026.png",
        "thumbSrc": "/assets/props/thumbs/med2_r01_c10_026.png"
    },
    {
        "id": "med2_r01_c11_027",
        "name": "Bánh Mì & Bánh Nướng #02-12",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r01_c11_027.png",
        "thumbSrc": "/assets/props/thumbs/med2_r01_c11_027.png"
    },
    {
        "id": "med2_r01_c12_028",
        "name": "Bánh Mì & Bánh Nướng #02-13",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r01_c12_028.png",
        "thumbSrc": "/assets/props/thumbs/med2_r01_c12_028.png"
    },
    {
        "id": "med2_r01_c13_029",
        "name": "Bánh Mì & Bánh Nướng #02-14",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r01_c13_029.png",
        "thumbSrc": "/assets/props/thumbs/med2_r01_c13_029.png"
    },
    {
        "id": "med2_r01_c14_030",
        "name": "Bánh Mì & Bánh Nướng #02-15",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r01_c14_030.png",
        "thumbSrc": "/assets/props/thumbs/med2_r01_c14_030.png"
    },
    {
        "id": "med2_r01_c15_031",
        "name": "Bánh Mì & Bánh Nướng #02-16",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r01_c15_031.png",
        "thumbSrc": "/assets/props/thumbs/med2_r01_c15_031.png"
    },
    {
        "id": "med2_r02_c00_032",
        "name": "Bánh Mì & Bánh Nướng #03-01",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r02_c00_032.png",
        "thumbSrc": "/assets/props/thumbs/med2_r02_c00_032.png"
    },
    {
        "id": "med2_r02_c01_033",
        "name": "Bánh Mì & Bánh Nướng #03-02",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r02_c01_033.png",
        "thumbSrc": "/assets/props/thumbs/med2_r02_c01_033.png"
    },
    {
        "id": "med2_r02_c02_034",
        "name": "Bánh Mì & Bánh Nướng #03-03",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r02_c02_034.png",
        "thumbSrc": "/assets/props/thumbs/med2_r02_c02_034.png"
    },
    {
        "id": "med2_r02_c03_035",
        "name": "Bánh Mì & Bánh Nướng #03-04",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r02_c03_035.png",
        "thumbSrc": "/assets/props/thumbs/med2_r02_c03_035.png"
    },
    {
        "id": "med2_r02_c04_036",
        "name": "Bánh Mì & Bánh Nướng #03-05",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r02_c04_036.png",
        "thumbSrc": "/assets/props/thumbs/med2_r02_c04_036.png"
    },
    {
        "id": "med2_r02_c05_037",
        "name": "Bánh Mì & Bánh Nướng #03-06",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r02_c05_037.png",
        "thumbSrc": "/assets/props/thumbs/med2_r02_c05_037.png"
    },
    {
        "id": "med2_r02_c06_038",
        "name": "Bánh Mì & Bánh Nướng #03-07",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r02_c06_038.png",
        "thumbSrc": "/assets/props/thumbs/med2_r02_c06_038.png"
    },
    {
        "id": "med2_r02_c07_039",
        "name": "Bánh Mì & Bánh Nướng #03-08",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r02_c07_039.png",
        "thumbSrc": "/assets/props/thumbs/med2_r02_c07_039.png"
    },
    {
        "id": "med2_r02_c08_040",
        "name": "Bánh Mì & Bánh Nướng #03-09",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r02_c08_040.png",
        "thumbSrc": "/assets/props/thumbs/med2_r02_c08_040.png"
    },
    {
        "id": "med2_r02_c09_041",
        "name": "Bánh Mì & Bánh Nướng #03-10",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r02_c09_041.png",
        "thumbSrc": "/assets/props/thumbs/med2_r02_c09_041.png"
    },
    {
        "id": "med2_r02_c10_042",
        "name": "Bánh Mì & Bánh Nướng #03-11",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r02_c10_042.png",
        "thumbSrc": "/assets/props/thumbs/med2_r02_c10_042.png"
    },
    {
        "id": "med2_r02_c11_043",
        "name": "Bánh Mì & Bánh Nướng #03-12",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r02_c11_043.png",
        "thumbSrc": "/assets/props/thumbs/med2_r02_c11_043.png"
    },
    {
        "id": "med2_r02_c12_044",
        "name": "Bánh Mì & Bánh Nướng #03-13",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r02_c12_044.png",
        "thumbSrc": "/assets/props/thumbs/med2_r02_c12_044.png"
    },
    {
        "id": "med2_r02_c13_045",
        "name": "Bánh Mì & Bánh Nướng #03-14",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r02_c13_045.png",
        "thumbSrc": "/assets/props/thumbs/med2_r02_c13_045.png"
    },
    {
        "id": "med2_r02_c14_046",
        "name": "Bánh Mì & Bánh Nướng #03-15",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r02_c14_046.png",
        "thumbSrc": "/assets/props/thumbs/med2_r02_c14_046.png"
    },
    {
        "id": "med2_r02_c15_047",
        "name": "Bánh Mì & Bánh Nướng #03-16",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r02_c15_047.png",
        "thumbSrc": "/assets/props/thumbs/med2_r02_c15_047.png"
    },
    {
        "id": "med2_r03_c00_048",
        "name": "Bánh Mì & Bánh Nướng #04-01",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r03_c00_048.png",
        "thumbSrc": "/assets/props/thumbs/med2_r03_c00_048.png"
    },
    {
        "id": "med2_r03_c01_049",
        "name": "Bánh Mì & Bánh Nướng #04-02",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r03_c01_049.png",
        "thumbSrc": "/assets/props/thumbs/med2_r03_c01_049.png"
    },
    {
        "id": "med2_r03_c02_050",
        "name": "Bánh Mì & Bánh Nướng #04-03",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r03_c02_050.png",
        "thumbSrc": "/assets/props/thumbs/med2_r03_c02_050.png"
    },
    {
        "id": "med2_r03_c03_051",
        "name": "Bánh Mì & Bánh Nướng #04-04",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r03_c03_051.png",
        "thumbSrc": "/assets/props/thumbs/med2_r03_c03_051.png"
    },
    {
        "id": "med2_r03_c04_052",
        "name": "Bánh Mì & Bánh Nướng #04-05",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r03_c04_052.png",
        "thumbSrc": "/assets/props/thumbs/med2_r03_c04_052.png"
    },
    {
        "id": "med2_r03_c05_053",
        "name": "Bánh Mì & Bánh Nướng #04-06",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r03_c05_053.png",
        "thumbSrc": "/assets/props/thumbs/med2_r03_c05_053.png"
    },
    {
        "id": "med2_r03_c06_054",
        "name": "Bánh Mì & Bánh Nướng #04-07",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r03_c06_054.png",
        "thumbSrc": "/assets/props/thumbs/med2_r03_c06_054.png"
    },
    {
        "id": "med2_r03_c07_055",
        "name": "Bánh Mì & Bánh Nướng #04-08",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r03_c07_055.png",
        "thumbSrc": "/assets/props/thumbs/med2_r03_c07_055.png"
    },
    {
        "id": "med2_r03_c08_056",
        "name": "Bánh Mì & Bánh Nướng #04-09",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r03_c08_056.png",
        "thumbSrc": "/assets/props/thumbs/med2_r03_c08_056.png"
    },
    {
        "id": "med2_r03_c09_057",
        "name": "Bánh Mì & Bánh Nướng #04-10",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r03_c09_057.png",
        "thumbSrc": "/assets/props/thumbs/med2_r03_c09_057.png"
    },
    {
        "id": "med2_r03_c10_058",
        "name": "Bánh Mì & Bánh Nướng #04-11",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r03_c10_058.png",
        "thumbSrc": "/assets/props/thumbs/med2_r03_c10_058.png"
    },
    {
        "id": "med2_r03_c11_059",
        "name": "Bánh Mì & Bánh Nướng #04-12",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r03_c11_059.png",
        "thumbSrc": "/assets/props/thumbs/med2_r03_c11_059.png"
    },
    {
        "id": "med2_r03_c12_060",
        "name": "Bánh Mì & Bánh Nướng #04-13",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r03_c12_060.png",
        "thumbSrc": "/assets/props/thumbs/med2_r03_c12_060.png"
    },
    {
        "id": "med2_r03_c13_061",
        "name": "Bánh Mì & Bánh Nướng #04-14",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r03_c13_061.png",
        "thumbSrc": "/assets/props/thumbs/med2_r03_c13_061.png"
    },
    {
        "id": "med2_r03_c14_062",
        "name": "Bánh Mì & Bánh Nướng #04-15",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r03_c14_062.png",
        "thumbSrc": "/assets/props/thumbs/med2_r03_c14_062.png"
    },
    {
        "id": "med2_r03_c15_063",
        "name": "Bánh Mì & Bánh Nướng #04-16",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r03_c15_063.png",
        "thumbSrc": "/assets/props/thumbs/med2_r03_c15_063.png"
    },
    {
        "id": "med2_r04_c00_064",
        "name": "Món Thịt & Cá Yến Tiệc #05-01",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r04_c00_064.png",
        "thumbSrc": "/assets/props/thumbs/med2_r04_c00_064.png"
    },
    {
        "id": "med2_r04_c01_065",
        "name": "Món Thịt & Cá Yến Tiệc #05-02",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r04_c01_065.png",
        "thumbSrc": "/assets/props/thumbs/med2_r04_c01_065.png"
    },
    {
        "id": "med2_r04_c02_066",
        "name": "Món Thịt & Cá Yến Tiệc #05-03",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r04_c02_066.png",
        "thumbSrc": "/assets/props/thumbs/med2_r04_c02_066.png"
    },
    {
        "id": "med2_r04_c03_067",
        "name": "Món Thịt & Cá Yến Tiệc #05-04",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r04_c03_067.png",
        "thumbSrc": "/assets/props/thumbs/med2_r04_c03_067.png"
    },
    {
        "id": "med2_r04_c04_068",
        "name": "Món Thịt & Cá Yến Tiệc #05-05",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r04_c04_068.png",
        "thumbSrc": "/assets/props/thumbs/med2_r04_c04_068.png"
    },
    {
        "id": "med2_r04_c05_069",
        "name": "Món Thịt & Cá Yến Tiệc #05-06",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r04_c05_069.png",
        "thumbSrc": "/assets/props/thumbs/med2_r04_c05_069.png"
    },
    {
        "id": "med2_r04_c06_070",
        "name": "Món Thịt & Cá Yến Tiệc #05-07",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r04_c06_070.png",
        "thumbSrc": "/assets/props/thumbs/med2_r04_c06_070.png"
    },
    {
        "id": "med2_r04_c07_071",
        "name": "Món Thịt & Cá Yến Tiệc #05-08",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r04_c07_071.png",
        "thumbSrc": "/assets/props/thumbs/med2_r04_c07_071.png"
    },
    {
        "id": "med2_r04_c08_072",
        "name": "Món Thịt & Cá Yến Tiệc #05-09",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r04_c08_072.png",
        "thumbSrc": "/assets/props/thumbs/med2_r04_c08_072.png"
    },
    {
        "id": "med2_r04_c09_073",
        "name": "Món Thịt & Cá Yến Tiệc #05-10",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r04_c09_073.png",
        "thumbSrc": "/assets/props/thumbs/med2_r04_c09_073.png"
    },
    {
        "id": "med2_r04_c10_074",
        "name": "Món Thịt & Cá Yến Tiệc #05-11",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r04_c10_074.png",
        "thumbSrc": "/assets/props/thumbs/med2_r04_c10_074.png"
    },
    {
        "id": "med2_r04_c11_075",
        "name": "Món Thịt & Cá Yến Tiệc #05-12",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r04_c11_075.png",
        "thumbSrc": "/assets/props/thumbs/med2_r04_c11_075.png"
    },
    {
        "id": "med2_r04_c12_076",
        "name": "Món Thịt & Cá Yến Tiệc #05-13",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r04_c12_076.png",
        "thumbSrc": "/assets/props/thumbs/med2_r04_c12_076.png"
    },
    {
        "id": "med2_r04_c13_077",
        "name": "Món Thịt & Cá Yến Tiệc #05-14",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r04_c13_077.png",
        "thumbSrc": "/assets/props/thumbs/med2_r04_c13_077.png"
    },
    {
        "id": "med2_r04_c14_078",
        "name": "Món Thịt & Cá Yến Tiệc #05-15",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r04_c14_078.png",
        "thumbSrc": "/assets/props/thumbs/med2_r04_c14_078.png"
    },
    {
        "id": "med2_r04_c15_079",
        "name": "Món Thịt & Cá Yến Tiệc #05-16",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r04_c15_079.png",
        "thumbSrc": "/assets/props/thumbs/med2_r04_c15_079.png"
    },
    {
        "id": "med2_r05_c00_080",
        "name": "Món Thịt & Cá Yến Tiệc #06-01",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r05_c00_080.png",
        "thumbSrc": "/assets/props/thumbs/med2_r05_c00_080.png"
    },
    {
        "id": "med2_r05_c01_081",
        "name": "Món Thịt & Cá Yến Tiệc #06-02",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r05_c01_081.png",
        "thumbSrc": "/assets/props/thumbs/med2_r05_c01_081.png"
    },
    {
        "id": "med2_r05_c02_082",
        "name": "Món Thịt & Cá Yến Tiệc #06-03",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r05_c02_082.png",
        "thumbSrc": "/assets/props/thumbs/med2_r05_c02_082.png"
    },
    {
        "id": "med2_r05_c03_083",
        "name": "Món Thịt & Cá Yến Tiệc #06-04",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r05_c03_083.png",
        "thumbSrc": "/assets/props/thumbs/med2_r05_c03_083.png"
    },
    {
        "id": "med2_r05_c04_084",
        "name": "Món Thịt & Cá Yến Tiệc #06-05",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r05_c04_084.png",
        "thumbSrc": "/assets/props/thumbs/med2_r05_c04_084.png"
    },
    {
        "id": "med2_r05_c05_085",
        "name": "Món Thịt & Cá Yến Tiệc #06-06",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r05_c05_085.png",
        "thumbSrc": "/assets/props/thumbs/med2_r05_c05_085.png"
    },
    {
        "id": "med2_r05_c06_086",
        "name": "Món Thịt & Cá Yến Tiệc #06-07",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r05_c06_086.png",
        "thumbSrc": "/assets/props/thumbs/med2_r05_c06_086.png"
    },
    {
        "id": "med2_r05_c07_087",
        "name": "Món Thịt & Cá Yến Tiệc #06-08",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r05_c07_087.png",
        "thumbSrc": "/assets/props/thumbs/med2_r05_c07_087.png"
    },
    {
        "id": "med2_r05_c08_088",
        "name": "Món Thịt & Cá Yến Tiệc #06-09",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r05_c08_088.png",
        "thumbSrc": "/assets/props/thumbs/med2_r05_c08_088.png"
    },
    {
        "id": "med2_r05_c09_089",
        "name": "Món Thịt & Cá Yến Tiệc #06-10",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r05_c09_089.png",
        "thumbSrc": "/assets/props/thumbs/med2_r05_c09_089.png"
    },
    {
        "id": "med2_r05_c10_090",
        "name": "Món Thịt & Cá Yến Tiệc #06-11",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r05_c10_090.png",
        "thumbSrc": "/assets/props/thumbs/med2_r05_c10_090.png"
    },
    {
        "id": "med2_r05_c11_091",
        "name": "Món Thịt & Cá Yến Tiệc #06-12",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r05_c11_091.png",
        "thumbSrc": "/assets/props/thumbs/med2_r05_c11_091.png"
    },
    {
        "id": "med2_r05_c12_092",
        "name": "Món Thịt & Cá Yến Tiệc #06-13",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r05_c12_092.png",
        "thumbSrc": "/assets/props/thumbs/med2_r05_c12_092.png"
    },
    {
        "id": "med2_r05_c13_093",
        "name": "Món Thịt & Cá Yến Tiệc #06-14",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r05_c13_093.png",
        "thumbSrc": "/assets/props/thumbs/med2_r05_c13_093.png"
    },
    {
        "id": "med2_r05_c14_094",
        "name": "Món Thịt & Cá Yến Tiệc #06-15",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r05_c14_094.png",
        "thumbSrc": "/assets/props/thumbs/med2_r05_c14_094.png"
    },
    {
        "id": "med2_r05_c15_095",
        "name": "Món Thịt & Cá Yến Tiệc #06-16",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r05_c15_095.png",
        "thumbSrc": "/assets/props/thumbs/med2_r05_c15_095.png"
    },
    {
        "id": "med2_r06_c00_096",
        "name": "Món Thịt & Cá Yến Tiệc #07-01",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r06_c00_096.png",
        "thumbSrc": "/assets/props/thumbs/med2_r06_c00_096.png"
    },
    {
        "id": "med2_r06_c01_097",
        "name": "Món Thịt & Cá Yến Tiệc #07-02",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r06_c01_097.png",
        "thumbSrc": "/assets/props/thumbs/med2_r06_c01_097.png"
    },
    {
        "id": "med2_r06_c02_098",
        "name": "Món Thịt & Cá Yến Tiệc #07-03",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r06_c02_098.png",
        "thumbSrc": "/assets/props/thumbs/med2_r06_c02_098.png"
    },
    {
        "id": "med2_r06_c03_099",
        "name": "Món Thịt & Cá Yến Tiệc #07-04",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r06_c03_099.png",
        "thumbSrc": "/assets/props/thumbs/med2_r06_c03_099.png"
    },
    {
        "id": "med2_r06_c04_100",
        "name": "Món Thịt & Cá Yến Tiệc #07-05",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r06_c04_100.png",
        "thumbSrc": "/assets/props/thumbs/med2_r06_c04_100.png"
    },
    {
        "id": "med2_r06_c05_101",
        "name": "Món Thịt & Cá Yến Tiệc #07-06",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r06_c05_101.png",
        "thumbSrc": "/assets/props/thumbs/med2_r06_c05_101.png"
    },
    {
        "id": "med2_r06_c06_102",
        "name": "Món Thịt & Cá Yến Tiệc #07-07",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r06_c06_102.png",
        "thumbSrc": "/assets/props/thumbs/med2_r06_c06_102.png"
    },
    {
        "id": "med2_r06_c07_103",
        "name": "Món Thịt & Cá Yến Tiệc #07-08",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r06_c07_103.png",
        "thumbSrc": "/assets/props/thumbs/med2_r06_c07_103.png"
    },
    {
        "id": "med2_r06_c08_104",
        "name": "Món Thịt & Cá Yến Tiệc #07-09",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r06_c08_104.png",
        "thumbSrc": "/assets/props/thumbs/med2_r06_c08_104.png"
    },
    {
        "id": "med2_r06_c09_105",
        "name": "Món Thịt & Cá Yến Tiệc #07-10",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r06_c09_105.png",
        "thumbSrc": "/assets/props/thumbs/med2_r06_c09_105.png"
    },
    {
        "id": "med2_r06_c10_106",
        "name": "Món Thịt & Cá Yến Tiệc #07-11",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r06_c10_106.png",
        "thumbSrc": "/assets/props/thumbs/med2_r06_c10_106.png"
    },
    {
        "id": "med2_r06_c11_107",
        "name": "Món Thịt & Cá Yến Tiệc #07-12",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r06_c11_107.png",
        "thumbSrc": "/assets/props/thumbs/med2_r06_c11_107.png"
    },
    {
        "id": "med2_r06_c12_108",
        "name": "Món Thịt & Cá Yến Tiệc #07-13",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r06_c12_108.png",
        "thumbSrc": "/assets/props/thumbs/med2_r06_c12_108.png"
    },
    {
        "id": "med2_r06_c13_109",
        "name": "Món Thịt & Cá Yến Tiệc #07-14",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r06_c13_109.png",
        "thumbSrc": "/assets/props/thumbs/med2_r06_c13_109.png"
    },
    {
        "id": "med2_r06_c14_110",
        "name": "Món Thịt & Cá Yến Tiệc #07-15",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r06_c14_110.png",
        "thumbSrc": "/assets/props/thumbs/med2_r06_c14_110.png"
    },
    {
        "id": "med2_r06_c15_111",
        "name": "Món Thịt & Cá Yến Tiệc #07-16",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r06_c15_111.png",
        "thumbSrc": "/assets/props/thumbs/med2_r06_c15_111.png"
    },
    {
        "id": "med2_r07_c00_112",
        "name": "Rau Củ & Trái Cây #08-01",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r07_c00_112.png",
        "thumbSrc": "/assets/props/thumbs/med2_r07_c00_112.png"
    },
    {
        "id": "med2_r07_c01_113",
        "name": "Rau Củ & Trái Cây #08-02",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r07_c01_113.png",
        "thumbSrc": "/assets/props/thumbs/med2_r07_c01_113.png"
    },
    {
        "id": "med2_r07_c02_114",
        "name": "Rau Củ & Trái Cây #08-03",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r07_c02_114.png",
        "thumbSrc": "/assets/props/thumbs/med2_r07_c02_114.png"
    },
    {
        "id": "med2_r07_c03_115",
        "name": "Rau Củ & Trái Cây #08-04",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r07_c03_115.png",
        "thumbSrc": "/assets/props/thumbs/med2_r07_c03_115.png"
    },
    {
        "id": "med2_r07_c04_116",
        "name": "Rau Củ & Trái Cây #08-05",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r07_c04_116.png",
        "thumbSrc": "/assets/props/thumbs/med2_r07_c04_116.png"
    },
    {
        "id": "med2_r07_c05_117",
        "name": "Rau Củ & Trái Cây #08-06",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r07_c05_117.png",
        "thumbSrc": "/assets/props/thumbs/med2_r07_c05_117.png"
    },
    {
        "id": "med2_r07_c06_118",
        "name": "Rau Củ & Trái Cây #08-07",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r07_c06_118.png",
        "thumbSrc": "/assets/props/thumbs/med2_r07_c06_118.png"
    },
    {
        "id": "med2_r07_c07_119",
        "name": "Rau Củ & Trái Cây #08-08",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r07_c07_119.png",
        "thumbSrc": "/assets/props/thumbs/med2_r07_c07_119.png"
    },
    {
        "id": "med2_r07_c08_120",
        "name": "Rau Củ & Trái Cây #08-09",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r07_c08_120.png",
        "thumbSrc": "/assets/props/thumbs/med2_r07_c08_120.png"
    },
    {
        "id": "med2_r07_c09_121",
        "name": "Rau Củ & Trái Cây #08-10",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r07_c09_121.png",
        "thumbSrc": "/assets/props/thumbs/med2_r07_c09_121.png"
    },
    {
        "id": "med2_r07_c10_122",
        "name": "Rau Củ & Trái Cây #08-11",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r07_c10_122.png",
        "thumbSrc": "/assets/props/thumbs/med2_r07_c10_122.png"
    },
    {
        "id": "med2_r07_c11_123",
        "name": "Rau Củ & Trái Cây #08-12",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r07_c11_123.png",
        "thumbSrc": "/assets/props/thumbs/med2_r07_c11_123.png"
    },
    {
        "id": "med2_r07_c12_124",
        "name": "Rau Củ & Trái Cây #08-13",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r07_c12_124.png",
        "thumbSrc": "/assets/props/thumbs/med2_r07_c12_124.png"
    },
    {
        "id": "med2_r07_c13_125",
        "name": "Rau Củ & Trái Cây #08-14",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r07_c13_125.png",
        "thumbSrc": "/assets/props/thumbs/med2_r07_c13_125.png"
    },
    {
        "id": "med2_r07_c14_126",
        "name": "Rau Củ & Trái Cây #08-15",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r07_c14_126.png",
        "thumbSrc": "/assets/props/thumbs/med2_r07_c14_126.png"
    },
    {
        "id": "med2_r07_c15_127",
        "name": "Rau Củ & Trái Cây #08-16",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r07_c15_127.png",
        "thumbSrc": "/assets/props/thumbs/med2_r07_c15_127.png"
    },
    {
        "id": "med2_r08_c00_128",
        "name": "Rau Củ & Trái Cây #09-01",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r08_c00_128.png",
        "thumbSrc": "/assets/props/thumbs/med2_r08_c00_128.png"
    },
    {
        "id": "med2_r08_c01_129",
        "name": "Rau Củ & Trái Cây #09-02",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r08_c01_129.png",
        "thumbSrc": "/assets/props/thumbs/med2_r08_c01_129.png"
    },
    {
        "id": "med2_r08_c02_130",
        "name": "Rau Củ & Trái Cây #09-03",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r08_c02_130.png",
        "thumbSrc": "/assets/props/thumbs/med2_r08_c02_130.png"
    },
    {
        "id": "med2_r08_c03_131",
        "name": "Rau Củ & Trái Cây #09-04",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r08_c03_131.png",
        "thumbSrc": "/assets/props/thumbs/med2_r08_c03_131.png"
    },
    {
        "id": "med2_r08_c04_132",
        "name": "Rau Củ & Trái Cây #09-05",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r08_c04_132.png",
        "thumbSrc": "/assets/props/thumbs/med2_r08_c04_132.png"
    },
    {
        "id": "med2_r08_c05_133",
        "name": "Rau Củ & Trái Cây #09-06",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r08_c05_133.png",
        "thumbSrc": "/assets/props/thumbs/med2_r08_c05_133.png"
    },
    {
        "id": "med2_r08_c06_134",
        "name": "Rau Củ & Trái Cây #09-07",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r08_c06_134.png",
        "thumbSrc": "/assets/props/thumbs/med2_r08_c06_134.png"
    },
    {
        "id": "med2_r08_c07_135",
        "name": "Rau Củ & Trái Cây #09-08",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r08_c07_135.png",
        "thumbSrc": "/assets/props/thumbs/med2_r08_c07_135.png"
    },
    {
        "id": "med2_r08_c08_136",
        "name": "Rau Củ & Trái Cây #09-09",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r08_c08_136.png",
        "thumbSrc": "/assets/props/thumbs/med2_r08_c08_136.png"
    },
    {
        "id": "med2_r08_c09_137",
        "name": "Rau Củ & Trái Cây #09-10",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r08_c09_137.png",
        "thumbSrc": "/assets/props/thumbs/med2_r08_c09_137.png"
    },
    {
        "id": "med2_r08_c10_138",
        "name": "Rau Củ & Trái Cây #09-11",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r08_c10_138.png",
        "thumbSrc": "/assets/props/thumbs/med2_r08_c10_138.png"
    },
    {
        "id": "med2_r08_c11_139",
        "name": "Rau Củ & Trái Cây #09-12",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r08_c11_139.png",
        "thumbSrc": "/assets/props/thumbs/med2_r08_c11_139.png"
    },
    {
        "id": "med2_r08_c12_140",
        "name": "Rau Củ & Trái Cây #09-13",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r08_c12_140.png",
        "thumbSrc": "/assets/props/thumbs/med2_r08_c12_140.png"
    },
    {
        "id": "med2_r08_c13_141",
        "name": "Rau Củ & Trái Cây #09-14",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r08_c13_141.png",
        "thumbSrc": "/assets/props/thumbs/med2_r08_c13_141.png"
    },
    {
        "id": "med2_r08_c14_142",
        "name": "Rau Củ & Trái Cây #09-15",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r08_c14_142.png",
        "thumbSrc": "/assets/props/thumbs/med2_r08_c14_142.png"
    },
    {
        "id": "med2_r08_c15_143",
        "name": "Rau Củ & Trái Cây #09-16",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r08_c15_143.png",
        "thumbSrc": "/assets/props/thumbs/med2_r08_c15_143.png"
    },
    {
        "id": "med2_r09_c00_144",
        "name": "Rau Củ & Trái Cây #10-01",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r09_c00_144.png",
        "thumbSrc": "/assets/props/thumbs/med2_r09_c00_144.png"
    },
    {
        "id": "med2_r09_c01_145",
        "name": "Rau Củ & Trái Cây #10-02",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r09_c01_145.png",
        "thumbSrc": "/assets/props/thumbs/med2_r09_c01_145.png"
    },
    {
        "id": "med2_r09_c02_146",
        "name": "Rau Củ & Trái Cây #10-03",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r09_c02_146.png",
        "thumbSrc": "/assets/props/thumbs/med2_r09_c02_146.png"
    },
    {
        "id": "med2_r09_c03_147",
        "name": "Rau Củ & Trái Cây #10-04",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r09_c03_147.png",
        "thumbSrc": "/assets/props/thumbs/med2_r09_c03_147.png"
    },
    {
        "id": "med2_r09_c04_148",
        "name": "Rau Củ & Trái Cây #10-05",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r09_c04_148.png",
        "thumbSrc": "/assets/props/thumbs/med2_r09_c04_148.png"
    },
    {
        "id": "med2_r09_c05_149",
        "name": "Rau Củ & Trái Cây #10-06",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r09_c05_149.png",
        "thumbSrc": "/assets/props/thumbs/med2_r09_c05_149.png"
    },
    {
        "id": "med2_r09_c06_150",
        "name": "Rau Củ & Trái Cây #10-07",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r09_c06_150.png",
        "thumbSrc": "/assets/props/thumbs/med2_r09_c06_150.png"
    },
    {
        "id": "med2_r09_c07_151",
        "name": "Rau Củ & Trái Cây #10-08",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r09_c07_151.png",
        "thumbSrc": "/assets/props/thumbs/med2_r09_c07_151.png"
    },
    {
        "id": "med2_r09_c08_152",
        "name": "Rau Củ & Trái Cây #10-09",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r09_c08_152.png",
        "thumbSrc": "/assets/props/thumbs/med2_r09_c08_152.png"
    },
    {
        "id": "med2_r09_c09_153",
        "name": "Rau Củ & Trái Cây #10-10",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r09_c09_153.png",
        "thumbSrc": "/assets/props/thumbs/med2_r09_c09_153.png"
    },
    {
        "id": "med2_r09_c10_154",
        "name": "Rau Củ & Trái Cây #10-11",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r09_c10_154.png",
        "thumbSrc": "/assets/props/thumbs/med2_r09_c10_154.png"
    },
    {
        "id": "med2_r09_c11_155",
        "name": "Rau Củ & Trái Cây #10-12",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r09_c11_155.png",
        "thumbSrc": "/assets/props/thumbs/med2_r09_c11_155.png"
    },
    {
        "id": "med2_r09_c12_156",
        "name": "Rau Củ & Trái Cây #10-13",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r09_c12_156.png",
        "thumbSrc": "/assets/props/thumbs/med2_r09_c12_156.png"
    },
    {
        "id": "med2_r09_c13_157",
        "name": "Rau Củ & Trái Cây #10-14",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r09_c13_157.png",
        "thumbSrc": "/assets/props/thumbs/med2_r09_c13_157.png"
    },
    {
        "id": "med2_r09_c14_158",
        "name": "Rau Củ & Trái Cây #10-15",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r09_c14_158.png",
        "thumbSrc": "/assets/props/thumbs/med2_r09_c14_158.png"
    },
    {
        "id": "med2_r09_c15_159",
        "name": "Rau Củ & Trái Cây #10-16",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r09_c15_159.png",
        "thumbSrc": "/assets/props/thumbs/med2_r09_c15_159.png"
    },
    {
        "id": "med2_r10_c00_160",
        "name": "Đồ Uống Quán Trọ #11-01",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r10_c00_160.png",
        "thumbSrc": "/assets/props/thumbs/med2_r10_c00_160.png"
    },
    {
        "id": "med2_r10_c01_161",
        "name": "Đồ Uống Quán Trọ #11-02",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r10_c01_161.png",
        "thumbSrc": "/assets/props/thumbs/med2_r10_c01_161.png"
    },
    {
        "id": "med2_r10_c02_162",
        "name": "Đồ Uống Quán Trọ #11-03",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r10_c02_162.png",
        "thumbSrc": "/assets/props/thumbs/med2_r10_c02_162.png"
    },
    {
        "id": "med2_r10_c03_163",
        "name": "Đồ Uống Quán Trọ #11-04",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r10_c03_163.png",
        "thumbSrc": "/assets/props/thumbs/med2_r10_c03_163.png"
    },
    {
        "id": "med2_r10_c04_164",
        "name": "Đồ Uống Quán Trọ #11-05",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r10_c04_164.png",
        "thumbSrc": "/assets/props/thumbs/med2_r10_c04_164.png"
    },
    {
        "id": "med2_r10_c05_165",
        "name": "Đồ Uống Quán Trọ #11-06",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r10_c05_165.png",
        "thumbSrc": "/assets/props/thumbs/med2_r10_c05_165.png"
    },
    {
        "id": "med2_r10_c06_166",
        "name": "Đồ Uống Quán Trọ #11-07",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r10_c06_166.png",
        "thumbSrc": "/assets/props/thumbs/med2_r10_c06_166.png"
    },
    {
        "id": "med2_r10_c07_167",
        "name": "Đồ Uống Quán Trọ #11-08",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r10_c07_167.png",
        "thumbSrc": "/assets/props/thumbs/med2_r10_c07_167.png"
    },
    {
        "id": "med2_r10_c08_168",
        "name": "Đồ Uống Quán Trọ #11-09",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r10_c08_168.png",
        "thumbSrc": "/assets/props/thumbs/med2_r10_c08_168.png"
    },
    {
        "id": "med2_r10_c09_169",
        "name": "Đồ Uống Quán Trọ #11-10",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r10_c09_169.png",
        "thumbSrc": "/assets/props/thumbs/med2_r10_c09_169.png"
    },
    {
        "id": "med2_r10_c10_170",
        "name": "Đồ Uống Quán Trọ #11-11",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r10_c10_170.png",
        "thumbSrc": "/assets/props/thumbs/med2_r10_c10_170.png"
    },
    {
        "id": "med2_r10_c11_171",
        "name": "Đồ Uống Quán Trọ #11-12",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r10_c11_171.png",
        "thumbSrc": "/assets/props/thumbs/med2_r10_c11_171.png"
    },
    {
        "id": "med2_r10_c12_172",
        "name": "Đồ Uống Quán Trọ #11-13",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r10_c12_172.png",
        "thumbSrc": "/assets/props/thumbs/med2_r10_c12_172.png"
    },
    {
        "id": "med2_r10_c13_173",
        "name": "Đồ Uống Quán Trọ #11-14",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r10_c13_173.png",
        "thumbSrc": "/assets/props/thumbs/med2_r10_c13_173.png"
    },
    {
        "id": "med2_r10_c14_174",
        "name": "Đồ Uống Quán Trọ #11-15",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r10_c14_174.png",
        "thumbSrc": "/assets/props/thumbs/med2_r10_c14_174.png"
    },
    {
        "id": "med2_r10_c15_175",
        "name": "Đồ Uống Quán Trọ #11-16",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r10_c15_175.png",
        "thumbSrc": "/assets/props/thumbs/med2_r10_c15_175.png"
    },
    {
        "id": "med2_r11_c00_176",
        "name": "Đồ Uống Quán Trọ #12-01",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r11_c00_176.png",
        "thumbSrc": "/assets/props/thumbs/med2_r11_c00_176.png"
    },
    {
        "id": "med2_r11_c01_177",
        "name": "Đồ Uống Quán Trọ #12-02",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r11_c01_177.png",
        "thumbSrc": "/assets/props/thumbs/med2_r11_c01_177.png"
    },
    {
        "id": "med2_r11_c02_178",
        "name": "Đồ Uống Quán Trọ #12-03",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r11_c02_178.png",
        "thumbSrc": "/assets/props/thumbs/med2_r11_c02_178.png"
    },
    {
        "id": "med2_r11_c03_179",
        "name": "Đồ Uống Quán Trọ #12-04",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r11_c03_179.png",
        "thumbSrc": "/assets/props/thumbs/med2_r11_c03_179.png"
    },
    {
        "id": "med2_r11_c04_180",
        "name": "Đồ Uống Quán Trọ #12-05",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r11_c04_180.png",
        "thumbSrc": "/assets/props/thumbs/med2_r11_c04_180.png"
    },
    {
        "id": "med2_r11_c05_181",
        "name": "Đồ Uống Quán Trọ #12-06",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r11_c05_181.png",
        "thumbSrc": "/assets/props/thumbs/med2_r11_c05_181.png"
    },
    {
        "id": "med2_r11_c06_182",
        "name": "Đồ Uống Quán Trọ #12-07",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r11_c06_182.png",
        "thumbSrc": "/assets/props/thumbs/med2_r11_c06_182.png"
    },
    {
        "id": "med2_r11_c07_183",
        "name": "Đồ Uống Quán Trọ #12-08",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r11_c07_183.png",
        "thumbSrc": "/assets/props/thumbs/med2_r11_c07_183.png"
    },
    {
        "id": "med2_r11_c08_184",
        "name": "Đồ Uống Quán Trọ #12-09",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r11_c08_184.png",
        "thumbSrc": "/assets/props/thumbs/med2_r11_c08_184.png"
    },
    {
        "id": "med2_r11_c09_185",
        "name": "Đồ Uống Quán Trọ #12-10",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r11_c09_185.png",
        "thumbSrc": "/assets/props/thumbs/med2_r11_c09_185.png"
    },
    {
        "id": "med2_r11_c10_186",
        "name": "Đồ Uống Quán Trọ #12-11",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r11_c10_186.png",
        "thumbSrc": "/assets/props/thumbs/med2_r11_c10_186.png"
    },
    {
        "id": "med2_r11_c11_187",
        "name": "Đồ Uống Quán Trọ #12-12",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r11_c11_187.png",
        "thumbSrc": "/assets/props/thumbs/med2_r11_c11_187.png"
    },
    {
        "id": "med2_r11_c12_188",
        "name": "Đồ Uống Quán Trọ #12-13",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r11_c12_188.png",
        "thumbSrc": "/assets/props/thumbs/med2_r11_c12_188.png"
    },
    {
        "id": "med2_r11_c13_189",
        "name": "Đồ Uống Quán Trọ #12-14",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r11_c13_189.png",
        "thumbSrc": "/assets/props/thumbs/med2_r11_c13_189.png"
    },
    {
        "id": "med2_r11_c14_190",
        "name": "Đồ Uống Quán Trọ #12-15",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r11_c14_190.png",
        "thumbSrc": "/assets/props/thumbs/med2_r11_c14_190.png"
    },
    {
        "id": "med2_r11_c15_191",
        "name": "Đồ Uống Quán Trọ #12-16",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r11_c15_191.png",
        "thumbSrc": "/assets/props/thumbs/med2_r11_c15_191.png"
    },
    {
        "id": "med2_r11_c16_192",
        "name": "Đồ Uống Quán Trọ #12-17",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r11_c16_192.png",
        "thumbSrc": "/assets/props/thumbs/med2_r11_c16_192.png"
    },
    {
        "id": "med2_r11_c17_193",
        "name": "Đồ Uống Quán Trọ #12-18",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r11_c17_193.png",
        "thumbSrc": "/assets/props/thumbs/med2_r11_c17_193.png"
    },
    {
        "id": "med2_r11_c18_194",
        "name": "Đồ Uống Quán Trọ #12-19",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r11_c18_194.png",
        "thumbSrc": "/assets/props/thumbs/med2_r11_c18_194.png"
    },
    {
        "id": "med2_r11_c19_195",
        "name": "Đồ Uống Quán Trọ #12-20",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r11_c19_195.png",
        "thumbSrc": "/assets/props/thumbs/med2_r11_c19_195.png"
    },
    {
        "id": "med2_r11_c20_196",
        "name": "Đồ Uống Quán Trọ #12-21",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r11_c20_196.png",
        "thumbSrc": "/assets/props/thumbs/med2_r11_c20_196.png"
    },
    {
        "id": "med2_r11_c21_197",
        "name": "Đồ Uống Quán Trọ #12-22",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r11_c21_197.png",
        "thumbSrc": "/assets/props/thumbs/med2_r11_c21_197.png"
    },
    {
        "id": "med2_r12_c00_198",
        "name": "Dụng Cụ Bếp Cung Đình #13-01",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r12_c00_198.png",
        "thumbSrc": "/assets/props/thumbs/med2_r12_c00_198.png"
    },
    {
        "id": "med2_r12_c01_199",
        "name": "Dụng Cụ Bếp Cung Đình #13-02",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r12_c01_199.png",
        "thumbSrc": "/assets/props/thumbs/med2_r12_c01_199.png"
    },
    {
        "id": "med2_r12_c02_200",
        "name": "Dụng Cụ Bếp Cung Đình #13-03",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r12_c02_200.png",
        "thumbSrc": "/assets/props/thumbs/med2_r12_c02_200.png"
    },
    {
        "id": "med2_r12_c03_201",
        "name": "Dụng Cụ Bếp Cung Đình #13-04",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r12_c03_201.png",
        "thumbSrc": "/assets/props/thumbs/med2_r12_c03_201.png"
    },
    {
        "id": "med2_r12_c04_202",
        "name": "Dụng Cụ Bếp Cung Đình #13-05",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r12_c04_202.png",
        "thumbSrc": "/assets/props/thumbs/med2_r12_c04_202.png"
    },
    {
        "id": "med2_r12_c05_203",
        "name": "Dụng Cụ Bếp Cung Đình #13-06",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r12_c05_203.png",
        "thumbSrc": "/assets/props/thumbs/med2_r12_c05_203.png"
    },
    {
        "id": "med2_r12_c06_204",
        "name": "Dụng Cụ Bếp Cung Đình #13-07",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r12_c06_204.png",
        "thumbSrc": "/assets/props/thumbs/med2_r12_c06_204.png"
    },
    {
        "id": "med2_r12_c07_205",
        "name": "Dụng Cụ Bếp Cung Đình #13-08",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r12_c07_205.png",
        "thumbSrc": "/assets/props/thumbs/med2_r12_c07_205.png"
    },
    {
        "id": "med2_r12_c08_206",
        "name": "Dụng Cụ Bếp Cung Đình #13-09",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r12_c08_206.png",
        "thumbSrc": "/assets/props/thumbs/med2_r12_c08_206.png"
    },
    {
        "id": "med2_r12_c09_207",
        "name": "Dụng Cụ Bếp Cung Đình #13-10",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r12_c09_207.png",
        "thumbSrc": "/assets/props/thumbs/med2_r12_c09_207.png"
    },
    {
        "id": "med2_r12_c10_208",
        "name": "Dụng Cụ Bếp Cung Đình #13-11",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r12_c10_208.png",
        "thumbSrc": "/assets/props/thumbs/med2_r12_c10_208.png"
    },
    {
        "id": "med2_r12_c11_209",
        "name": "Dụng Cụ Bếp Cung Đình #13-12",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r12_c11_209.png",
        "thumbSrc": "/assets/props/thumbs/med2_r12_c11_209.png"
    },
    {
        "id": "med2_r12_c12_210",
        "name": "Dụng Cụ Bếp Cung Đình #13-13",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r12_c12_210.png",
        "thumbSrc": "/assets/props/thumbs/med2_r12_c12_210.png"
    },
    {
        "id": "med2_r12_c13_211",
        "name": "Dụng Cụ Bếp Cung Đình #13-14",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r12_c13_211.png",
        "thumbSrc": "/assets/props/thumbs/med2_r12_c13_211.png"
    },
    {
        "id": "med2_r13_c00_212",
        "name": "Dụng Cụ Bếp Cung Đình #14-01",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r13_c00_212.png",
        "thumbSrc": "/assets/props/thumbs/med2_r13_c00_212.png"
    },
    {
        "id": "med2_r13_c01_213",
        "name": "Dụng Cụ Bếp Cung Đình #14-02",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r13_c01_213.png",
        "thumbSrc": "/assets/props/thumbs/med2_r13_c01_213.png"
    },
    {
        "id": "med2_r13_c02_214",
        "name": "Dụng Cụ Bếp Cung Đình #14-03",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r13_c02_214.png",
        "thumbSrc": "/assets/props/thumbs/med2_r13_c02_214.png"
    },
    {
        "id": "med2_r13_c03_215",
        "name": "Dụng Cụ Bếp Cung Đình #14-04",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r13_c03_215.png",
        "thumbSrc": "/assets/props/thumbs/med2_r13_c03_215.png"
    },
    {
        "id": "med2_r13_c04_216",
        "name": "Dụng Cụ Bếp Cung Đình #14-05",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r13_c04_216.png",
        "thumbSrc": "/assets/props/thumbs/med2_r13_c04_216.png"
    },
    {
        "id": "med2_r13_c05_217",
        "name": "Dụng Cụ Bếp Cung Đình #14-06",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r13_c05_217.png",
        "thumbSrc": "/assets/props/thumbs/med2_r13_c05_217.png"
    },
    {
        "id": "med2_r13_c06_218",
        "name": "Dụng Cụ Bếp Cung Đình #14-07",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r13_c06_218.png",
        "thumbSrc": "/assets/props/thumbs/med2_r13_c06_218.png"
    },
    {
        "id": "med2_r13_c07_219",
        "name": "Dụng Cụ Bếp Cung Đình #14-08",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r13_c07_219.png",
        "thumbSrc": "/assets/props/thumbs/med2_r13_c07_219.png"
    },
    {
        "id": "med2_r13_c08_220",
        "name": "Dụng Cụ Bếp Cung Đình #14-09",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r13_c08_220.png",
        "thumbSrc": "/assets/props/thumbs/med2_r13_c08_220.png"
    },
    {
        "id": "med2_r13_c09_221",
        "name": "Dụng Cụ Bếp Cung Đình #14-10",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r13_c09_221.png",
        "thumbSrc": "/assets/props/thumbs/med2_r13_c09_221.png"
    },
    {
        "id": "med2_r13_c10_222",
        "name": "Dụng Cụ Bếp Cung Đình #14-11",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r13_c10_222.png",
        "thumbSrc": "/assets/props/thumbs/med2_r13_c10_222.png"
    },
    {
        "id": "med2_r13_c11_223",
        "name": "Dụng Cụ Bếp Cung Đình #14-12",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r13_c11_223.png",
        "thumbSrc": "/assets/props/thumbs/med2_r13_c11_223.png"
    },
    {
        "id": "med2_r13_c12_224",
        "name": "Dụng Cụ Bếp Cung Đình #14-13",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r13_c12_224.png",
        "thumbSrc": "/assets/props/thumbs/med2_r13_c12_224.png"
    },
    {
        "id": "med2_r13_c13_225",
        "name": "Dụng Cụ Bếp Cung Đình #14-14",
        "forType": "provisions",
        "src": "/assets/props/items/med2_r13_c13_225.png",
        "thumbSrc": "/assets/props/thumbs/med2_r13_c13_225.png"
    },
    {
        "id": "med4_r00_c01_000",
        "name": "Lò Sưởi & Bếp Lửa #01-02",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r00_c01_000.png",
        "thumbSrc": "/assets/props/thumbs/med4_r00_c01_000.png"
    },
    {
        "id": "med4_r00_c02_001",
        "name": "Lò Sưởi & Bếp Lửa #01-03",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r00_c02_001.png",
        "thumbSrc": "/assets/props/thumbs/med4_r00_c02_001.png"
    },
    {
        "id": "med4_r00_c03_002",
        "name": "Lò Sưởi & Bếp Lửa #01-04",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r00_c03_002.png",
        "thumbSrc": "/assets/props/thumbs/med4_r00_c03_002.png"
    },
    {
        "id": "med4_r00_c04_003",
        "name": "Lò Sưởi & Bếp Lửa #01-05",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r00_c04_003.png",
        "thumbSrc": "/assets/props/thumbs/med4_r00_c04_003.png"
    },
    {
        "id": "med4_r00_c05_004",
        "name": "Lò Sưởi & Bếp Lửa #01-06",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r00_c05_004.png",
        "thumbSrc": "/assets/props/thumbs/med4_r00_c05_004.png"
    },
    {
        "id": "med4_r00_c06_005",
        "name": "Lò Sưởi & Bếp Lửa #01-07",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r00_c06_005.png",
        "thumbSrc": "/assets/props/thumbs/med4_r00_c06_005.png"
    },
    {
        "id": "med4_r00_c07_006",
        "name": "Lò Sưởi & Bếp Lửa #01-08",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r00_c07_006.png",
        "thumbSrc": "/assets/props/thumbs/med4_r00_c07_006.png"
    },
    {
        "id": "med4_r00_c08_007",
        "name": "Lò Sưởi & Bếp Lửa #01-09",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r00_c08_007.png",
        "thumbSrc": "/assets/props/thumbs/med4_r00_c08_007.png"
    },
    {
        "id": "med4_r00_c09_008",
        "name": "Lò Sưởi & Bếp Lửa #01-10",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r00_c09_008.png",
        "thumbSrc": "/assets/props/thumbs/med4_r00_c09_008.png"
    },
    {
        "id": "med4_r00_c10_009",
        "name": "Lò Sưởi & Bếp Lửa #01-11",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r00_c10_009.png",
        "thumbSrc": "/assets/props/thumbs/med4_r00_c10_009.png"
    },
    {
        "id": "med4_r00_c11_010",
        "name": "Lò Sưởi & Bếp Lửa #01-12",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r00_c11_010.png",
        "thumbSrc": "/assets/props/thumbs/med4_r00_c11_010.png"
    },
    {
        "id": "med4_r00_c12_011",
        "name": "Lò Sưởi & Bếp Lửa #01-13",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r00_c12_011.png",
        "thumbSrc": "/assets/props/thumbs/med4_r00_c12_011.png"
    },
    {
        "id": "med4_r00_c13_012",
        "name": "Lò Sưởi & Bếp Lửa #01-14",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r00_c13_012.png",
        "thumbSrc": "/assets/props/thumbs/med4_r00_c13_012.png"
    },
    {
        "id": "med4_r00_c14_013",
        "name": "Lò Sưởi & Bếp Lửa #01-15",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r00_c14_013.png",
        "thumbSrc": "/assets/props/thumbs/med4_r00_c14_013.png"
    },
    {
        "id": "med4_r00_c15_014",
        "name": "Lò Sưởi & Bếp Lửa #01-16",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r00_c15_014.png",
        "thumbSrc": "/assets/props/thumbs/med4_r00_c15_014.png"
    },
    {
        "id": "med4_r01_c01_015",
        "name": "Lò Sưởi & Bếp Lửa #02-02",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r01_c01_015.png",
        "thumbSrc": "/assets/props/thumbs/med4_r01_c01_015.png"
    },
    {
        "id": "med4_r01_c02_016",
        "name": "Lò Sưởi & Bếp Lửa #02-03",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r01_c02_016.png",
        "thumbSrc": "/assets/props/thumbs/med4_r01_c02_016.png"
    },
    {
        "id": "med4_r01_c03_017",
        "name": "Lò Sưởi & Bếp Lửa #02-04",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r01_c03_017.png",
        "thumbSrc": "/assets/props/thumbs/med4_r01_c03_017.png"
    },
    {
        "id": "med4_r01_c04_018",
        "name": "Lò Sưởi & Bếp Lửa #02-05",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r01_c04_018.png",
        "thumbSrc": "/assets/props/thumbs/med4_r01_c04_018.png"
    },
    {
        "id": "med4_r01_c05_019",
        "name": "Lò Sưởi & Bếp Lửa #02-06",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r01_c05_019.png",
        "thumbSrc": "/assets/props/thumbs/med4_r01_c05_019.png"
    },
    {
        "id": "med4_r01_c06_020",
        "name": "Lò Sưởi & Bếp Lửa #02-07",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r01_c06_020.png",
        "thumbSrc": "/assets/props/thumbs/med4_r01_c06_020.png"
    },
    {
        "id": "med4_r01_c07_021",
        "name": "Lò Sưởi & Bếp Lửa #02-08",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r01_c07_021.png",
        "thumbSrc": "/assets/props/thumbs/med4_r01_c07_021.png"
    },
    {
        "id": "med4_r01_c08_022",
        "name": "Lò Sưởi & Bếp Lửa #02-09",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r01_c08_022.png",
        "thumbSrc": "/assets/props/thumbs/med4_r01_c08_022.png"
    },
    {
        "id": "med4_r01_c09_023",
        "name": "Lò Sưởi & Bếp Lửa #02-10",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r01_c09_023.png",
        "thumbSrc": "/assets/props/thumbs/med4_r01_c09_023.png"
    },
    {
        "id": "med4_r01_c10_024",
        "name": "Lò Sưởi & Bếp Lửa #02-11",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r01_c10_024.png",
        "thumbSrc": "/assets/props/thumbs/med4_r01_c10_024.png"
    },
    {
        "id": "med4_r01_c11_025",
        "name": "Lò Sưởi & Bếp Lửa #02-12",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r01_c11_025.png",
        "thumbSrc": "/assets/props/thumbs/med4_r01_c11_025.png"
    },
    {
        "id": "med4_r01_c12_026",
        "name": "Lò Sưởi & Bếp Lửa #02-13",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r01_c12_026.png",
        "thumbSrc": "/assets/props/thumbs/med4_r01_c12_026.png"
    },
    {
        "id": "med4_r01_c13_027",
        "name": "Lò Sưởi & Bếp Lửa #02-14",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r01_c13_027.png",
        "thumbSrc": "/assets/props/thumbs/med4_r01_c13_027.png"
    },
    {
        "id": "med4_r01_c14_028",
        "name": "Lò Sưởi & Bếp Lửa #02-15",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r01_c14_028.png",
        "thumbSrc": "/assets/props/thumbs/med4_r01_c14_028.png"
    },
    {
        "id": "med4_r01_c15_029",
        "name": "Lò Sưởi & Bếp Lửa #02-16",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r01_c15_029.png",
        "thumbSrc": "/assets/props/thumbs/med4_r01_c15_029.png"
    },
    {
        "id": "med4_r02_c01_030",
        "name": "Lò Sưởi & Bếp Lửa #03-02",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r02_c01_030.png",
        "thumbSrc": "/assets/props/thumbs/med4_r02_c01_030.png"
    },
    {
        "id": "med4_r02_c02_031",
        "name": "Lò Sưởi & Bếp Lửa #03-03",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r02_c02_031.png",
        "thumbSrc": "/assets/props/thumbs/med4_r02_c02_031.png"
    },
    {
        "id": "med4_r02_c03_032",
        "name": "Lò Sưởi & Bếp Lửa #03-04",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r02_c03_032.png",
        "thumbSrc": "/assets/props/thumbs/med4_r02_c03_032.png"
    },
    {
        "id": "med4_r02_c04_033",
        "name": "Lò Sưởi & Bếp Lửa #03-05",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r02_c04_033.png",
        "thumbSrc": "/assets/props/thumbs/med4_r02_c04_033.png"
    },
    {
        "id": "med4_r02_c05_034",
        "name": "Lò Sưởi & Bếp Lửa #03-06",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r02_c05_034.png",
        "thumbSrc": "/assets/props/thumbs/med4_r02_c05_034.png"
    },
    {
        "id": "med4_r02_c06_035",
        "name": "Lò Sưởi & Bếp Lửa #03-07",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r02_c06_035.png",
        "thumbSrc": "/assets/props/thumbs/med4_r02_c06_035.png"
    },
    {
        "id": "med4_r02_c07_036",
        "name": "Lò Sưởi & Bếp Lửa #03-08",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r02_c07_036.png",
        "thumbSrc": "/assets/props/thumbs/med4_r02_c07_036.png"
    },
    {
        "id": "med4_r02_c08_037",
        "name": "Lò Sưởi & Bếp Lửa #03-09",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r02_c08_037.png",
        "thumbSrc": "/assets/props/thumbs/med4_r02_c08_037.png"
    },
    {
        "id": "med4_r02_c09_038",
        "name": "Lò Sưởi & Bếp Lửa #03-10",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r02_c09_038.png",
        "thumbSrc": "/assets/props/thumbs/med4_r02_c09_038.png"
    },
    {
        "id": "med4_r02_c10_039",
        "name": "Lò Sưởi & Bếp Lửa #03-11",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r02_c10_039.png",
        "thumbSrc": "/assets/props/thumbs/med4_r02_c10_039.png"
    },
    {
        "id": "med4_r02_c11_040",
        "name": "Lò Sưởi & Bếp Lửa #03-12",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r02_c11_040.png",
        "thumbSrc": "/assets/props/thumbs/med4_r02_c11_040.png"
    },
    {
        "id": "med4_r02_c12_041",
        "name": "Lò Sưởi & Bếp Lửa #03-13",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r02_c12_041.png",
        "thumbSrc": "/assets/props/thumbs/med4_r02_c12_041.png"
    },
    {
        "id": "med4_r02_c13_042",
        "name": "Lò Sưởi & Bếp Lửa #03-14",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r02_c13_042.png",
        "thumbSrc": "/assets/props/thumbs/med4_r02_c13_042.png"
    },
    {
        "id": "med4_r02_c14_043",
        "name": "Lò Sưởi & Bếp Lửa #03-15",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r02_c14_043.png",
        "thumbSrc": "/assets/props/thumbs/med4_r02_c14_043.png"
    },
    {
        "id": "med4_r02_c15_044",
        "name": "Lò Sưởi & Bếp Lửa #03-16",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r02_c15_044.png",
        "thumbSrc": "/assets/props/thumbs/med4_r02_c15_044.png"
    },
    {
        "id": "med4_r02_c16_045",
        "name": "Lò Sưởi & Bếp Lửa #03-17",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r02_c16_045.png",
        "thumbSrc": "/assets/props/thumbs/med4_r02_c16_045.png"
    },
    {
        "id": "med4_r03_c01_046",
        "name": "Lò Sưởi & Bếp Lửa #04-02",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r03_c01_046.png",
        "thumbSrc": "/assets/props/thumbs/med4_r03_c01_046.png"
    },
    {
        "id": "med4_r03_c02_047",
        "name": "Lò Sưởi & Bếp Lửa #04-03",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r03_c02_047.png",
        "thumbSrc": "/assets/props/thumbs/med4_r03_c02_047.png"
    },
    {
        "id": "med4_r03_c03_048",
        "name": "Lò Sưởi & Bếp Lửa #04-04",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r03_c03_048.png",
        "thumbSrc": "/assets/props/thumbs/med4_r03_c03_048.png"
    },
    {
        "id": "med4_r03_c04_049",
        "name": "Lò Sưởi & Bếp Lửa #04-05",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r03_c04_049.png",
        "thumbSrc": "/assets/props/thumbs/med4_r03_c04_049.png"
    },
    {
        "id": "med4_r03_c05_050",
        "name": "Lò Sưởi & Bếp Lửa #04-06",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r03_c05_050.png",
        "thumbSrc": "/assets/props/thumbs/med4_r03_c05_050.png"
    },
    {
        "id": "med4_r03_c06_051",
        "name": "Lò Sưởi & Bếp Lửa #04-07",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r03_c06_051.png",
        "thumbSrc": "/assets/props/thumbs/med4_r03_c06_051.png"
    },
    {
        "id": "med4_r03_c07_052",
        "name": "Lò Sưởi & Bếp Lửa #04-08",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r03_c07_052.png",
        "thumbSrc": "/assets/props/thumbs/med4_r03_c07_052.png"
    },
    {
        "id": "med4_r03_c08_053",
        "name": "Lò Sưởi & Bếp Lửa #04-09",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r03_c08_053.png",
        "thumbSrc": "/assets/props/thumbs/med4_r03_c08_053.png"
    },
    {
        "id": "med4_r03_c09_054",
        "name": "Lò Sưởi & Bếp Lửa #04-10",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r03_c09_054.png",
        "thumbSrc": "/assets/props/thumbs/med4_r03_c09_054.png"
    },
    {
        "id": "med4_r03_c10_055",
        "name": "Lò Sưởi & Bếp Lửa #04-11",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r03_c10_055.png",
        "thumbSrc": "/assets/props/thumbs/med4_r03_c10_055.png"
    },
    {
        "id": "med4_r03_c11_056",
        "name": "Lò Sưởi & Bếp Lửa #04-12",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r03_c11_056.png",
        "thumbSrc": "/assets/props/thumbs/med4_r03_c11_056.png"
    },
    {
        "id": "med4_r03_c12_057",
        "name": "Lò Sưởi & Bếp Lửa #04-13",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r03_c12_057.png",
        "thumbSrc": "/assets/props/thumbs/med4_r03_c12_057.png"
    },
    {
        "id": "med4_r03_c13_058",
        "name": "Lò Sưởi & Bếp Lửa #04-14",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r03_c13_058.png",
        "thumbSrc": "/assets/props/thumbs/med4_r03_c13_058.png"
    },
    {
        "id": "med4_r03_c14_059",
        "name": "Lò Sưởi & Bếp Lửa #04-15",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r03_c14_059.png",
        "thumbSrc": "/assets/props/thumbs/med4_r03_c14_059.png"
    },
    {
        "id": "med4_r03_c15_060",
        "name": "Lò Sưởi & Bếp Lửa #04-16",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r03_c15_060.png",
        "thumbSrc": "/assets/props/thumbs/med4_r03_c15_060.png"
    },
    {
        "id": "med4_r03_c16_061",
        "name": "Lò Sưởi & Bếp Lửa #04-17",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r03_c16_061.png",
        "thumbSrc": "/assets/props/thumbs/med4_r03_c16_061.png"
    },
    {
        "id": "med4_r04_c01_062",
        "name": "Nông Sản & Gia Cầm #05-02",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r04_c01_062.png",
        "thumbSrc": "/assets/props/thumbs/med4_r04_c01_062.png"
    },
    {
        "id": "med4_r04_c02_063",
        "name": "Nông Sản & Gia Cầm #05-03",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r04_c02_063.png",
        "thumbSrc": "/assets/props/thumbs/med4_r04_c02_063.png"
    },
    {
        "id": "med4_r04_c03_064",
        "name": "Nông Sản & Gia Cầm #05-04",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r04_c03_064.png",
        "thumbSrc": "/assets/props/thumbs/med4_r04_c03_064.png"
    },
    {
        "id": "med4_r04_c04_065",
        "name": "Nông Sản & Gia Cầm #05-05",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r04_c04_065.png",
        "thumbSrc": "/assets/props/thumbs/med4_r04_c04_065.png"
    },
    {
        "id": "med4_r04_c05_066",
        "name": "Nông Sản & Gia Cầm #05-06",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r04_c05_066.png",
        "thumbSrc": "/assets/props/thumbs/med4_r04_c05_066.png"
    },
    {
        "id": "med4_r04_c06_067",
        "name": "Nông Sản & Gia Cầm #05-07",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r04_c06_067.png",
        "thumbSrc": "/assets/props/thumbs/med4_r04_c06_067.png"
    },
    {
        "id": "med4_r04_c07_068",
        "name": "Nông Sản & Gia Cầm #05-08",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r04_c07_068.png",
        "thumbSrc": "/assets/props/thumbs/med4_r04_c07_068.png"
    },
    {
        "id": "med4_r04_c08_069",
        "name": "Nông Sản & Gia Cầm #05-09",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r04_c08_069.png",
        "thumbSrc": "/assets/props/thumbs/med4_r04_c08_069.png"
    },
    {
        "id": "med4_r04_c09_070",
        "name": "Nông Sản & Gia Cầm #05-10",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r04_c09_070.png",
        "thumbSrc": "/assets/props/thumbs/med4_r04_c09_070.png"
    },
    {
        "id": "med4_r04_c10_071",
        "name": "Nông Sản & Gia Cầm #05-11",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r04_c10_071.png",
        "thumbSrc": "/assets/props/thumbs/med4_r04_c10_071.png"
    },
    {
        "id": "med4_r04_c11_072",
        "name": "Nông Sản & Gia Cầm #05-12",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r04_c11_072.png",
        "thumbSrc": "/assets/props/thumbs/med4_r04_c11_072.png"
    },
    {
        "id": "med4_r04_c12_073",
        "name": "Nông Sản & Gia Cầm #05-13",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r04_c12_073.png",
        "thumbSrc": "/assets/props/thumbs/med4_r04_c12_073.png"
    },
    {
        "id": "med4_r04_c13_074",
        "name": "Nông Sản & Gia Cầm #05-14",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r04_c13_074.png",
        "thumbSrc": "/assets/props/thumbs/med4_r04_c13_074.png"
    },
    {
        "id": "med4_r04_c14_075",
        "name": "Nông Sản & Gia Cầm #05-15",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r04_c14_075.png",
        "thumbSrc": "/assets/props/thumbs/med4_r04_c14_075.png"
    },
    {
        "id": "med4_r04_c15_076",
        "name": "Nông Sản & Gia Cầm #05-16",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r04_c15_076.png",
        "thumbSrc": "/assets/props/thumbs/med4_r04_c15_076.png"
    },
    {
        "id": "med4_r04_c16_077",
        "name": "Nông Sản & Gia Cầm #05-17",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r04_c16_077.png",
        "thumbSrc": "/assets/props/thumbs/med4_r04_c16_077.png"
    },
    {
        "id": "med4_r05_c01_078",
        "name": "Nông Sản & Gia Cầm #06-02",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r05_c01_078.png",
        "thumbSrc": "/assets/props/thumbs/med4_r05_c01_078.png"
    },
    {
        "id": "med4_r05_c02_079",
        "name": "Nông Sản & Gia Cầm #06-03",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r05_c02_079.png",
        "thumbSrc": "/assets/props/thumbs/med4_r05_c02_079.png"
    },
    {
        "id": "med4_r05_c03_080",
        "name": "Nông Sản & Gia Cầm #06-04",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r05_c03_080.png",
        "thumbSrc": "/assets/props/thumbs/med4_r05_c03_080.png"
    },
    {
        "id": "med4_r05_c04_081",
        "name": "Nông Sản & Gia Cầm #06-05",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r05_c04_081.png",
        "thumbSrc": "/assets/props/thumbs/med4_r05_c04_081.png"
    },
    {
        "id": "med4_r05_c05_082",
        "name": "Nông Sản & Gia Cầm #06-06",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r05_c05_082.png",
        "thumbSrc": "/assets/props/thumbs/med4_r05_c05_082.png"
    },
    {
        "id": "med4_r05_c06_083",
        "name": "Nông Sản & Gia Cầm #06-07",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r05_c06_083.png",
        "thumbSrc": "/assets/props/thumbs/med4_r05_c06_083.png"
    },
    {
        "id": "med4_r05_c07_084",
        "name": "Nông Sản & Gia Cầm #06-08",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r05_c07_084.png",
        "thumbSrc": "/assets/props/thumbs/med4_r05_c07_084.png"
    },
    {
        "id": "med4_r05_c08_085",
        "name": "Nông Sản & Gia Cầm #06-09",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r05_c08_085.png",
        "thumbSrc": "/assets/props/thumbs/med4_r05_c08_085.png"
    },
    {
        "id": "med4_r05_c09_086",
        "name": "Nông Sản & Gia Cầm #06-10",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r05_c09_086.png",
        "thumbSrc": "/assets/props/thumbs/med4_r05_c09_086.png"
    },
    {
        "id": "med4_r05_c10_087",
        "name": "Nông Sản & Gia Cầm #06-11",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r05_c10_087.png",
        "thumbSrc": "/assets/props/thumbs/med4_r05_c10_087.png"
    },
    {
        "id": "med4_r05_c11_088",
        "name": "Nông Sản & Gia Cầm #06-12",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r05_c11_088.png",
        "thumbSrc": "/assets/props/thumbs/med4_r05_c11_088.png"
    },
    {
        "id": "med4_r05_c12_089",
        "name": "Nông Sản & Gia Cầm #06-13",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r05_c12_089.png",
        "thumbSrc": "/assets/props/thumbs/med4_r05_c12_089.png"
    },
    {
        "id": "med4_r05_c13_090",
        "name": "Nông Sản & Gia Cầm #06-14",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r05_c13_090.png",
        "thumbSrc": "/assets/props/thumbs/med4_r05_c13_090.png"
    },
    {
        "id": "med4_r05_c14_091",
        "name": "Nông Sản & Gia Cầm #06-15",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r05_c14_091.png",
        "thumbSrc": "/assets/props/thumbs/med4_r05_c14_091.png"
    },
    {
        "id": "med4_r05_c15_092",
        "name": "Nông Sản & Gia Cầm #06-16",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r05_c15_092.png",
        "thumbSrc": "/assets/props/thumbs/med4_r05_c15_092.png"
    },
    {
        "id": "med4_r05_c16_093",
        "name": "Nông Sản & Gia Cầm #06-17",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r05_c16_093.png",
        "thumbSrc": "/assets/props/thumbs/med4_r05_c16_093.png"
    },
    {
        "id": "med4_r06_c01_094",
        "name": "Nông Sản & Gia Cầm #07-02",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r06_c01_094.png",
        "thumbSrc": "/assets/props/thumbs/med4_r06_c01_094.png"
    },
    {
        "id": "med4_r06_c02_095",
        "name": "Nông Sản & Gia Cầm #07-03",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r06_c02_095.png",
        "thumbSrc": "/assets/props/thumbs/med4_r06_c02_095.png"
    },
    {
        "id": "med4_r06_c03_096",
        "name": "Nông Sản & Gia Cầm #07-04",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r06_c03_096.png",
        "thumbSrc": "/assets/props/thumbs/med4_r06_c03_096.png"
    },
    {
        "id": "med4_r06_c04_097",
        "name": "Nông Sản & Gia Cầm #07-05",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r06_c04_097.png",
        "thumbSrc": "/assets/props/thumbs/med4_r06_c04_097.png"
    },
    {
        "id": "med4_r06_c05_098",
        "name": "Nông Sản & Gia Cầm #07-06",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r06_c05_098.png",
        "thumbSrc": "/assets/props/thumbs/med4_r06_c05_098.png"
    },
    {
        "id": "med4_r06_c06_099",
        "name": "Nông Sản & Gia Cầm #07-07",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r06_c06_099.png",
        "thumbSrc": "/assets/props/thumbs/med4_r06_c06_099.png"
    },
    {
        "id": "med4_r06_c07_100",
        "name": "Nông Sản & Gia Cầm #07-08",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r06_c07_100.png",
        "thumbSrc": "/assets/props/thumbs/med4_r06_c07_100.png"
    },
    {
        "id": "med4_r06_c08_101",
        "name": "Nông Sản & Gia Cầm #07-09",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r06_c08_101.png",
        "thumbSrc": "/assets/props/thumbs/med4_r06_c08_101.png"
    },
    {
        "id": "med4_r06_c09_102",
        "name": "Nông Sản & Gia Cầm #07-10",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r06_c09_102.png",
        "thumbSrc": "/assets/props/thumbs/med4_r06_c09_102.png"
    },
    {
        "id": "med4_r06_c10_103",
        "name": "Nông Sản & Gia Cầm #07-11",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r06_c10_103.png",
        "thumbSrc": "/assets/props/thumbs/med4_r06_c10_103.png"
    },
    {
        "id": "med4_r06_c11_104",
        "name": "Nông Sản & Gia Cầm #07-12",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r06_c11_104.png",
        "thumbSrc": "/assets/props/thumbs/med4_r06_c11_104.png"
    },
    {
        "id": "med4_r06_c12_105",
        "name": "Nông Sản & Gia Cầm #07-13",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r06_c12_105.png",
        "thumbSrc": "/assets/props/thumbs/med4_r06_c12_105.png"
    },
    {
        "id": "med4_r06_c13_106",
        "name": "Nông Sản & Gia Cầm #07-14",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r06_c13_106.png",
        "thumbSrc": "/assets/props/thumbs/med4_r06_c13_106.png"
    },
    {
        "id": "med4_r06_c14_107",
        "name": "Nông Sản & Gia Cầm #07-15",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r06_c14_107.png",
        "thumbSrc": "/assets/props/thumbs/med4_r06_c14_107.png"
    },
    {
        "id": "med4_r06_c15_108",
        "name": "Nông Sản & Gia Cầm #07-16",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r06_c15_108.png",
        "thumbSrc": "/assets/props/thumbs/med4_r06_c15_108.png"
    },
    {
        "id": "med4_r06_c16_109",
        "name": "Nông Sản & Gia Cầm #07-17",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r06_c16_109.png",
        "thumbSrc": "/assets/props/thumbs/med4_r06_c16_109.png"
    },
    {
        "id": "med4_r07_c01_110",
        "name": "Bao Bột & Gia Vị #08-02",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r07_c01_110.png",
        "thumbSrc": "/assets/props/thumbs/med4_r07_c01_110.png"
    },
    {
        "id": "med4_r07_c02_111",
        "name": "Bao Bột & Gia Vị #08-03",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r07_c02_111.png",
        "thumbSrc": "/assets/props/thumbs/med4_r07_c02_111.png"
    },
    {
        "id": "med4_r07_c03_112",
        "name": "Bao Bột & Gia Vị #08-04",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r07_c03_112.png",
        "thumbSrc": "/assets/props/thumbs/med4_r07_c03_112.png"
    },
    {
        "id": "med4_r07_c04_113",
        "name": "Bao Bột & Gia Vị #08-05",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r07_c04_113.png",
        "thumbSrc": "/assets/props/thumbs/med4_r07_c04_113.png"
    },
    {
        "id": "med4_r07_c05_114",
        "name": "Bao Bột & Gia Vị #08-06",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r07_c05_114.png",
        "thumbSrc": "/assets/props/thumbs/med4_r07_c05_114.png"
    },
    {
        "id": "med4_r07_c06_115",
        "name": "Bao Bột & Gia Vị #08-07",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r07_c06_115.png",
        "thumbSrc": "/assets/props/thumbs/med4_r07_c06_115.png"
    },
    {
        "id": "med4_r07_c07_116",
        "name": "Bao Bột & Gia Vị #08-08",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r07_c07_116.png",
        "thumbSrc": "/assets/props/thumbs/med4_r07_c07_116.png"
    },
    {
        "id": "med4_r07_c08_117",
        "name": "Bao Bột & Gia Vị #08-09",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r07_c08_117.png",
        "thumbSrc": "/assets/props/thumbs/med4_r07_c08_117.png"
    },
    {
        "id": "med4_r07_c09_118",
        "name": "Bao Bột & Gia Vị #08-10",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r07_c09_118.png",
        "thumbSrc": "/assets/props/thumbs/med4_r07_c09_118.png"
    },
    {
        "id": "med4_r07_c10_119",
        "name": "Bao Bột & Gia Vị #08-11",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r07_c10_119.png",
        "thumbSrc": "/assets/props/thumbs/med4_r07_c10_119.png"
    },
    {
        "id": "med4_r07_c11_120",
        "name": "Bao Bột & Gia Vị #08-12",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r07_c11_120.png",
        "thumbSrc": "/assets/props/thumbs/med4_r07_c11_120.png"
    },
    {
        "id": "med4_r07_c12_121",
        "name": "Bao Bột & Gia Vị #08-13",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r07_c12_121.png",
        "thumbSrc": "/assets/props/thumbs/med4_r07_c12_121.png"
    },
    {
        "id": "med4_r07_c13_122",
        "name": "Bao Bột & Gia Vị #08-14",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r07_c13_122.png",
        "thumbSrc": "/assets/props/thumbs/med4_r07_c13_122.png"
    },
    {
        "id": "med4_r07_c14_123",
        "name": "Bao Bột & Gia Vị #08-15",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r07_c14_123.png",
        "thumbSrc": "/assets/props/thumbs/med4_r07_c14_123.png"
    },
    {
        "id": "med4_r07_c15_124",
        "name": "Bao Bột & Gia Vị #08-16",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r07_c15_124.png",
        "thumbSrc": "/assets/props/thumbs/med4_r07_c15_124.png"
    },
    {
        "id": "med4_r07_c16_125",
        "name": "Bao Bột & Gia Vị #08-17",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r07_c16_125.png",
        "thumbSrc": "/assets/props/thumbs/med4_r07_c16_125.png"
    },
    {
        "id": "med4_r08_c01_126",
        "name": "Bao Bột & Gia Vị #09-02",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r08_c01_126.png",
        "thumbSrc": "/assets/props/thumbs/med4_r08_c01_126.png"
    },
    {
        "id": "med4_r08_c02_127",
        "name": "Bao Bột & Gia Vị #09-03",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r08_c02_127.png",
        "thumbSrc": "/assets/props/thumbs/med4_r08_c02_127.png"
    },
    {
        "id": "med4_r08_c03_128",
        "name": "Bao Bột & Gia Vị #09-04",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r08_c03_128.png",
        "thumbSrc": "/assets/props/thumbs/med4_r08_c03_128.png"
    },
    {
        "id": "med4_r08_c04_129",
        "name": "Bao Bột & Gia Vị #09-05",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r08_c04_129.png",
        "thumbSrc": "/assets/props/thumbs/med4_r08_c04_129.png"
    },
    {
        "id": "med4_r08_c05_130",
        "name": "Bao Bột & Gia Vị #09-06",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r08_c05_130.png",
        "thumbSrc": "/assets/props/thumbs/med4_r08_c05_130.png"
    },
    {
        "id": "med4_r08_c06_131",
        "name": "Bao Bột & Gia Vị #09-07",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r08_c06_131.png",
        "thumbSrc": "/assets/props/thumbs/med4_r08_c06_131.png"
    },
    {
        "id": "med4_r08_c07_132",
        "name": "Bao Bột & Gia Vị #09-08",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r08_c07_132.png",
        "thumbSrc": "/assets/props/thumbs/med4_r08_c07_132.png"
    },
    {
        "id": "med4_r08_c08_133",
        "name": "Bao Bột & Gia Vị #09-09",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r08_c08_133.png",
        "thumbSrc": "/assets/props/thumbs/med4_r08_c08_133.png"
    },
    {
        "id": "med4_r08_c09_134",
        "name": "Bao Bột & Gia Vị #09-10",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r08_c09_134.png",
        "thumbSrc": "/assets/props/thumbs/med4_r08_c09_134.png"
    },
    {
        "id": "med4_r08_c10_135",
        "name": "Bao Bột & Gia Vị #09-11",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r08_c10_135.png",
        "thumbSrc": "/assets/props/thumbs/med4_r08_c10_135.png"
    },
    {
        "id": "med4_r08_c11_136",
        "name": "Bao Bột & Gia Vị #09-12",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r08_c11_136.png",
        "thumbSrc": "/assets/props/thumbs/med4_r08_c11_136.png"
    },
    {
        "id": "med4_r08_c12_137",
        "name": "Bao Bột & Gia Vị #09-13",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r08_c12_137.png",
        "thumbSrc": "/assets/props/thumbs/med4_r08_c12_137.png"
    },
    {
        "id": "med4_r09_c01_138",
        "name": "Thịt Tươi Sơ Chế #10-02",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r09_c01_138.png",
        "thumbSrc": "/assets/props/thumbs/med4_r09_c01_138.png"
    },
    {
        "id": "med4_r09_c02_139",
        "name": "Thịt Tươi Sơ Chế #10-03",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r09_c02_139.png",
        "thumbSrc": "/assets/props/thumbs/med4_r09_c02_139.png"
    },
    {
        "id": "med4_r09_c03_140",
        "name": "Thịt Tươi Sơ Chế #10-04",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r09_c03_140.png",
        "thumbSrc": "/assets/props/thumbs/med4_r09_c03_140.png"
    },
    {
        "id": "med4_r09_c04_141",
        "name": "Thịt Tươi Sơ Chế #10-05",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r09_c04_141.png",
        "thumbSrc": "/assets/props/thumbs/med4_r09_c04_141.png"
    },
    {
        "id": "med4_r09_c05_142",
        "name": "Thịt Tươi Sơ Chế #10-06",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r09_c05_142.png",
        "thumbSrc": "/assets/props/thumbs/med4_r09_c05_142.png"
    },
    {
        "id": "med4_r09_c06_143",
        "name": "Thịt Tươi Sơ Chế #10-07",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r09_c06_143.png",
        "thumbSrc": "/assets/props/thumbs/med4_r09_c06_143.png"
    },
    {
        "id": "med4_r09_c07_144",
        "name": "Thịt Tươi Sơ Chế #10-08",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r09_c07_144.png",
        "thumbSrc": "/assets/props/thumbs/med4_r09_c07_144.png"
    },
    {
        "id": "med4_r09_c08_145",
        "name": "Thịt Tươi Sơ Chế #10-09",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r09_c08_145.png",
        "thumbSrc": "/assets/props/thumbs/med4_r09_c08_145.png"
    },
    {
        "id": "med4_r09_c09_146",
        "name": "Thịt Tươi Sơ Chế #10-10",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r09_c09_146.png",
        "thumbSrc": "/assets/props/thumbs/med4_r09_c09_146.png"
    },
    {
        "id": "med4_r09_c10_147",
        "name": "Thịt Tươi Sơ Chế #10-11",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r09_c10_147.png",
        "thumbSrc": "/assets/props/thumbs/med4_r09_c10_147.png"
    },
    {
        "id": "med4_r09_c11_148",
        "name": "Thịt Tươi Sơ Chế #10-12",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r09_c11_148.png",
        "thumbSrc": "/assets/props/thumbs/med4_r09_c11_148.png"
    },
    {
        "id": "med4_r09_c12_149",
        "name": "Thịt Tươi Sơ Chế #10-13",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r09_c12_149.png",
        "thumbSrc": "/assets/props/thumbs/med4_r09_c12_149.png"
    },
    {
        "id": "med4_r09_c13_150",
        "name": "Thịt Tươi Sơ Chế #10-14",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r09_c13_150.png",
        "thumbSrc": "/assets/props/thumbs/med4_r09_c13_150.png"
    },
    {
        "id": "med4_r09_c14_151",
        "name": "Thịt Tươi Sơ Chế #10-15",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r09_c14_151.png",
        "thumbSrc": "/assets/props/thumbs/med4_r09_c14_151.png"
    },
    {
        "id": "med4_r09_c15_152",
        "name": "Thịt Tươi Sơ Chế #10-16",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r09_c15_152.png",
        "thumbSrc": "/assets/props/thumbs/med4_r09_c15_152.png"
    },
    {
        "id": "med4_r09_c16_153",
        "name": "Thịt Tươi Sơ Chế #10-17",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r09_c16_153.png",
        "thumbSrc": "/assets/props/thumbs/med4_r09_c16_153.png"
    },
    {
        "id": "med4_r10_c01_154",
        "name": "Thịt Tươi Sơ Chế #11-02",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r10_c01_154.png",
        "thumbSrc": "/assets/props/thumbs/med4_r10_c01_154.png"
    },
    {
        "id": "med4_r10_c02_155",
        "name": "Thịt Tươi Sơ Chế #11-03",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r10_c02_155.png",
        "thumbSrc": "/assets/props/thumbs/med4_r10_c02_155.png"
    },
    {
        "id": "med4_r10_c03_156",
        "name": "Thịt Tươi Sơ Chế #11-04",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r10_c03_156.png",
        "thumbSrc": "/assets/props/thumbs/med4_r10_c03_156.png"
    },
    {
        "id": "med4_r10_c04_157",
        "name": "Thịt Tươi Sơ Chế #11-05",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r10_c04_157.png",
        "thumbSrc": "/assets/props/thumbs/med4_r10_c04_157.png"
    },
    {
        "id": "med4_r10_c05_158",
        "name": "Thịt Tươi Sơ Chế #11-06",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r10_c05_158.png",
        "thumbSrc": "/assets/props/thumbs/med4_r10_c05_158.png"
    },
    {
        "id": "med4_r10_c06_159",
        "name": "Thịt Tươi Sơ Chế #11-07",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r10_c06_159.png",
        "thumbSrc": "/assets/props/thumbs/med4_r10_c06_159.png"
    },
    {
        "id": "med4_r10_c07_160",
        "name": "Thịt Tươi Sơ Chế #11-08",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r10_c07_160.png",
        "thumbSrc": "/assets/props/thumbs/med4_r10_c07_160.png"
    },
    {
        "id": "med4_r10_c08_161",
        "name": "Thịt Tươi Sơ Chế #11-09",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r10_c08_161.png",
        "thumbSrc": "/assets/props/thumbs/med4_r10_c08_161.png"
    },
    {
        "id": "med4_r10_c09_162",
        "name": "Thịt Tươi Sơ Chế #11-10",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r10_c09_162.png",
        "thumbSrc": "/assets/props/thumbs/med4_r10_c09_162.png"
    },
    {
        "id": "med4_r10_c10_163",
        "name": "Thịt Tươi Sơ Chế #11-11",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r10_c10_163.png",
        "thumbSrc": "/assets/props/thumbs/med4_r10_c10_163.png"
    },
    {
        "id": "med4_r10_c11_164",
        "name": "Thịt Tươi Sơ Chế #11-12",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r10_c11_164.png",
        "thumbSrc": "/assets/props/thumbs/med4_r10_c11_164.png"
    },
    {
        "id": "med4_r10_c12_165",
        "name": "Thịt Tươi Sơ Chế #11-13",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r10_c12_165.png",
        "thumbSrc": "/assets/props/thumbs/med4_r10_c12_165.png"
    },
    {
        "id": "med4_r10_c13_166",
        "name": "Thịt Tươi Sơ Chế #11-14",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r10_c13_166.png",
        "thumbSrc": "/assets/props/thumbs/med4_r10_c13_166.png"
    },
    {
        "id": "med4_r10_c14_167",
        "name": "Thịt Tươi Sơ Chế #11-15",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r10_c14_167.png",
        "thumbSrc": "/assets/props/thumbs/med4_r10_c14_167.png"
    },
    {
        "id": "med4_r10_c15_168",
        "name": "Thịt Tươi Sơ Chế #11-16",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r10_c15_168.png",
        "thumbSrc": "/assets/props/thumbs/med4_r10_c15_168.png"
    },
    {
        "id": "med4_r10_c16_169",
        "name": "Thịt Tươi Sơ Chế #11-17",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r10_c16_169.png",
        "thumbSrc": "/assets/props/thumbs/med4_r10_c16_169.png"
    },
    {
        "id": "med4_r11_c01_170",
        "name": "Thịt Tươi Sơ Chế #12-02",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r11_c01_170.png",
        "thumbSrc": "/assets/props/thumbs/med4_r11_c01_170.png"
    },
    {
        "id": "med4_r11_c02_171",
        "name": "Thịt Tươi Sơ Chế #12-03",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r11_c02_171.png",
        "thumbSrc": "/assets/props/thumbs/med4_r11_c02_171.png"
    },
    {
        "id": "med4_r11_c03_172",
        "name": "Thịt Tươi Sơ Chế #12-04",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r11_c03_172.png",
        "thumbSrc": "/assets/props/thumbs/med4_r11_c03_172.png"
    },
    {
        "id": "med4_r11_c04_173",
        "name": "Thịt Tươi Sơ Chế #12-05",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r11_c04_173.png",
        "thumbSrc": "/assets/props/thumbs/med4_r11_c04_173.png"
    },
    {
        "id": "med4_r11_c05_174",
        "name": "Thịt Tươi Sơ Chế #12-06",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r11_c05_174.png",
        "thumbSrc": "/assets/props/thumbs/med4_r11_c05_174.png"
    },
    {
        "id": "med4_r11_c06_175",
        "name": "Thịt Tươi Sơ Chế #12-07",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r11_c06_175.png",
        "thumbSrc": "/assets/props/thumbs/med4_r11_c06_175.png"
    },
    {
        "id": "med4_r11_c07_176",
        "name": "Thịt Tươi Sơ Chế #12-08",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r11_c07_176.png",
        "thumbSrc": "/assets/props/thumbs/med4_r11_c07_176.png"
    },
    {
        "id": "med4_r11_c08_177",
        "name": "Thịt Tươi Sơ Chế #12-09",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r11_c08_177.png",
        "thumbSrc": "/assets/props/thumbs/med4_r11_c08_177.png"
    },
    {
        "id": "med4_r11_c09_178",
        "name": "Thịt Tươi Sơ Chế #12-10",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r11_c09_178.png",
        "thumbSrc": "/assets/props/thumbs/med4_r11_c09_178.png"
    },
    {
        "id": "med4_r11_c10_179",
        "name": "Thịt Tươi Sơ Chế #12-11",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r11_c10_179.png",
        "thumbSrc": "/assets/props/thumbs/med4_r11_c10_179.png"
    },
    {
        "id": "med4_r11_c11_180",
        "name": "Thịt Tươi Sơ Chế #12-12",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r11_c11_180.png",
        "thumbSrc": "/assets/props/thumbs/med4_r11_c11_180.png"
    },
    {
        "id": "med4_r11_c12_181",
        "name": "Thịt Tươi Sơ Chế #12-13",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r11_c12_181.png",
        "thumbSrc": "/assets/props/thumbs/med4_r11_c12_181.png"
    },
    {
        "id": "med4_r11_c13_182",
        "name": "Thịt Tươi Sơ Chế #12-14",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r11_c13_182.png",
        "thumbSrc": "/assets/props/thumbs/med4_r11_c13_182.png"
    },
    {
        "id": "med4_r11_c14_183",
        "name": "Thịt Tươi Sơ Chế #12-15",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r11_c14_183.png",
        "thumbSrc": "/assets/props/thumbs/med4_r11_c14_183.png"
    },
    {
        "id": "med4_r11_c15_184",
        "name": "Thịt Tươi Sơ Chế #12-16",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r11_c15_184.png",
        "thumbSrc": "/assets/props/thumbs/med4_r11_c15_184.png"
    },
    {
        "id": "med4_r11_c16_185",
        "name": "Thịt Tươi Sơ Chế #12-17",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r11_c16_185.png",
        "thumbSrc": "/assets/props/thumbs/med4_r11_c16_185.png"
    },
    {
        "id": "med4_r12_c01_186",
        "name": "Thịt Tươi Sơ Chế #13-02",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r12_c01_186.png",
        "thumbSrc": "/assets/props/thumbs/med4_r12_c01_186.png"
    },
    {
        "id": "med4_r12_c02_187",
        "name": "Thịt Tươi Sơ Chế #13-03",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r12_c02_187.png",
        "thumbSrc": "/assets/props/thumbs/med4_r12_c02_187.png"
    },
    {
        "id": "med4_r12_c03_188",
        "name": "Thịt Tươi Sơ Chế #13-04",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r12_c03_188.png",
        "thumbSrc": "/assets/props/thumbs/med4_r12_c03_188.png"
    },
    {
        "id": "med4_r12_c04_189",
        "name": "Thịt Tươi Sơ Chế #13-05",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r12_c04_189.png",
        "thumbSrc": "/assets/props/thumbs/med4_r12_c04_189.png"
    },
    {
        "id": "med4_r12_c05_190",
        "name": "Thịt Tươi Sơ Chế #13-06",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r12_c05_190.png",
        "thumbSrc": "/assets/props/thumbs/med4_r12_c05_190.png"
    },
    {
        "id": "med4_r12_c06_191",
        "name": "Thịt Tươi Sơ Chế #13-07",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r12_c06_191.png",
        "thumbSrc": "/assets/props/thumbs/med4_r12_c06_191.png"
    },
    {
        "id": "med4_r12_c07_192",
        "name": "Thịt Tươi Sơ Chế #13-08",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r12_c07_192.png",
        "thumbSrc": "/assets/props/thumbs/med4_r12_c07_192.png"
    },
    {
        "id": "med4_r12_c08_193",
        "name": "Thịt Tươi Sơ Chế #13-09",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r12_c08_193.png",
        "thumbSrc": "/assets/props/thumbs/med4_r12_c08_193.png"
    },
    {
        "id": "med4_r12_c09_194",
        "name": "Thịt Tươi Sơ Chế #13-10",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r12_c09_194.png",
        "thumbSrc": "/assets/props/thumbs/med4_r12_c09_194.png"
    },
    {
        "id": "med4_r12_c10_195",
        "name": "Thịt Tươi Sơ Chế #13-11",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r12_c10_195.png",
        "thumbSrc": "/assets/props/thumbs/med4_r12_c10_195.png"
    },
    {
        "id": "med4_r12_c11_196",
        "name": "Thịt Tươi Sơ Chế #13-12",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r12_c11_196.png",
        "thumbSrc": "/assets/props/thumbs/med4_r12_c11_196.png"
    },
    {
        "id": "med4_r12_c12_197",
        "name": "Thịt Tươi Sơ Chế #13-13",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r12_c12_197.png",
        "thumbSrc": "/assets/props/thumbs/med4_r12_c12_197.png"
    },
    {
        "id": "med4_r12_c13_198",
        "name": "Thịt Tươi Sơ Chế #13-14",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r12_c13_198.png",
        "thumbSrc": "/assets/props/thumbs/med4_r12_c13_198.png"
    },
    {
        "id": "med4_r12_c14_199",
        "name": "Thịt Tươi Sơ Chế #13-15",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r12_c14_199.png",
        "thumbSrc": "/assets/props/thumbs/med4_r12_c14_199.png"
    },
    {
        "id": "med4_r12_c15_200",
        "name": "Thịt Tươi Sơ Chế #13-16",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r12_c15_200.png",
        "thumbSrc": "/assets/props/thumbs/med4_r12_c15_200.png"
    },
    {
        "id": "med4_r12_c16_201",
        "name": "Thịt Tươi Sơ Chế #13-17",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r12_c16_201.png",
        "thumbSrc": "/assets/props/thumbs/med4_r12_c16_201.png"
    },
    {
        "id": "med4_r13_c01_202",
        "name": "Thịt Tươi Sơ Chế #14-02",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r13_c01_202.png",
        "thumbSrc": "/assets/props/thumbs/med4_r13_c01_202.png"
    },
    {
        "id": "med4_r13_c02_203",
        "name": "Thịt Tươi Sơ Chế #14-03",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r13_c02_203.png",
        "thumbSrc": "/assets/props/thumbs/med4_r13_c02_203.png"
    },
    {
        "id": "med4_r13_c03_204",
        "name": "Thịt Tươi Sơ Chế #14-04",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r13_c03_204.png",
        "thumbSrc": "/assets/props/thumbs/med4_r13_c03_204.png"
    },
    {
        "id": "med4_r13_c04_205",
        "name": "Thịt Tươi Sơ Chế #14-05",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r13_c04_205.png",
        "thumbSrc": "/assets/props/thumbs/med4_r13_c04_205.png"
    },
    {
        "id": "med4_r13_c05_206",
        "name": "Thịt Tươi Sơ Chế #14-06",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r13_c05_206.png",
        "thumbSrc": "/assets/props/thumbs/med4_r13_c05_206.png"
    },
    {
        "id": "med4_r13_c06_207",
        "name": "Thịt Tươi Sơ Chế #14-07",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r13_c06_207.png",
        "thumbSrc": "/assets/props/thumbs/med4_r13_c06_207.png"
    },
    {
        "id": "med4_r13_c07_208",
        "name": "Thịt Tươi Sơ Chế #14-08",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r13_c07_208.png",
        "thumbSrc": "/assets/props/thumbs/med4_r13_c07_208.png"
    },
    {
        "id": "med4_r13_c08_209",
        "name": "Thịt Tươi Sơ Chế #14-09",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r13_c08_209.png",
        "thumbSrc": "/assets/props/thumbs/med4_r13_c08_209.png"
    },
    {
        "id": "med4_r13_c09_210",
        "name": "Thịt Tươi Sơ Chế #14-10",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r13_c09_210.png",
        "thumbSrc": "/assets/props/thumbs/med4_r13_c09_210.png"
    },
    {
        "id": "med4_r13_c10_211",
        "name": "Thịt Tươi Sơ Chế #14-11",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r13_c10_211.png",
        "thumbSrc": "/assets/props/thumbs/med4_r13_c10_211.png"
    },
    {
        "id": "med4_r13_c11_212",
        "name": "Thịt Tươi Sơ Chế #14-12",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r13_c11_212.png",
        "thumbSrc": "/assets/props/thumbs/med4_r13_c11_212.png"
    },
    {
        "id": "med4_r13_c12_213",
        "name": "Thịt Tươi Sơ Chế #14-13",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r13_c12_213.png",
        "thumbSrc": "/assets/props/thumbs/med4_r13_c12_213.png"
    },
    {
        "id": "med4_r13_c13_214",
        "name": "Thịt Tươi Sơ Chế #14-14",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r13_c13_214.png",
        "thumbSrc": "/assets/props/thumbs/med4_r13_c13_214.png"
    },
    {
        "id": "med4_r13_c14_215",
        "name": "Thịt Tươi Sơ Chế #14-15",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r13_c14_215.png",
        "thumbSrc": "/assets/props/thumbs/med4_r13_c14_215.png"
    },
    {
        "id": "med4_r13_c15_216",
        "name": "Thịt Tươi Sơ Chế #14-16",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r13_c15_216.png",
        "thumbSrc": "/assets/props/thumbs/med4_r13_c15_216.png"
    },
    {
        "id": "med4_r13_c16_217",
        "name": "Thịt Tươi Sơ Chế #14-17",
        "forType": "provisions",
        "src": "/assets/props/items/med4_r13_c16_217.png",
        "thumbSrc": "/assets/props/thumbs/med4_r13_c16_217.png"
    },
    {
        "id": "med4_r14_c01_218",
        "name": "Thùng Gỗ & Rổ Rau #15-02",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r14_c01_218.png",
        "thumbSrc": "/assets/props/thumbs/med4_r14_c01_218.png"
    },
    {
        "id": "med4_r14_c02_219",
        "name": "Thùng Gỗ & Rổ Rau #15-03",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r14_c02_219.png",
        "thumbSrc": "/assets/props/thumbs/med4_r14_c02_219.png"
    },
    {
        "id": "med4_r14_c03_220",
        "name": "Thùng Gỗ & Rổ Rau #15-04",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r14_c03_220.png",
        "thumbSrc": "/assets/props/thumbs/med4_r14_c03_220.png"
    },
    {
        "id": "med4_r14_c04_221",
        "name": "Thùng Gỗ & Rổ Rau #15-05",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r14_c04_221.png",
        "thumbSrc": "/assets/props/thumbs/med4_r14_c04_221.png"
    },
    {
        "id": "med4_r14_c05_222",
        "name": "Thùng Gỗ & Rổ Rau #15-06",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r14_c05_222.png",
        "thumbSrc": "/assets/props/thumbs/med4_r14_c05_222.png"
    },
    {
        "id": "med4_r14_c06_223",
        "name": "Thùng Gỗ & Rổ Rau #15-07",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r14_c06_223.png",
        "thumbSrc": "/assets/props/thumbs/med4_r14_c06_223.png"
    },
    {
        "id": "med4_r14_c07_224",
        "name": "Thùng Gỗ & Rổ Rau #15-08",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r14_c07_224.png",
        "thumbSrc": "/assets/props/thumbs/med4_r14_c07_224.png"
    },
    {
        "id": "med4_r14_c08_225",
        "name": "Thùng Gỗ & Rổ Rau #15-09",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r14_c08_225.png",
        "thumbSrc": "/assets/props/thumbs/med4_r14_c08_225.png"
    },
    {
        "id": "med4_r14_c09_226",
        "name": "Thùng Gỗ & Rổ Rau #15-10",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r14_c09_226.png",
        "thumbSrc": "/assets/props/thumbs/med4_r14_c09_226.png"
    },
    {
        "id": "med4_r14_c10_227",
        "name": "Thùng Gỗ & Rổ Rau #15-11",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r14_c10_227.png",
        "thumbSrc": "/assets/props/thumbs/med4_r14_c10_227.png"
    },
    {
        "id": "med4_r14_c11_228",
        "name": "Thùng Gỗ & Rổ Rau #15-12",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r14_c11_228.png",
        "thumbSrc": "/assets/props/thumbs/med4_r14_c11_228.png"
    },
    {
        "id": "med4_r14_c12_229",
        "name": "Thùng Gỗ & Rổ Rau #15-13",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r14_c12_229.png",
        "thumbSrc": "/assets/props/thumbs/med4_r14_c12_229.png"
    },
    {
        "id": "med4_r14_c13_230",
        "name": "Thùng Gỗ & Rổ Rau #15-14",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r14_c13_230.png",
        "thumbSrc": "/assets/props/thumbs/med4_r14_c13_230.png"
    },
    {
        "id": "med4_r14_c14_231",
        "name": "Thùng Gỗ & Rổ Rau #15-15",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r14_c14_231.png",
        "thumbSrc": "/assets/props/thumbs/med4_r14_c14_231.png"
    },
    {
        "id": "med4_r14_c15_232",
        "name": "Thùng Gỗ & Rổ Rau #15-16",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r14_c15_232.png",
        "thumbSrc": "/assets/props/thumbs/med4_r14_c15_232.png"
    },
    {
        "id": "med4_r14_c16_233",
        "name": "Thùng Gỗ & Rổ Rau #15-17",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r14_c16_233.png",
        "thumbSrc": "/assets/props/thumbs/med4_r14_c16_233.png"
    },
    {
        "id": "med4_r15_c01_234",
        "name": "Thùng Gỗ & Rổ Rau #16-02",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r15_c01_234.png",
        "thumbSrc": "/assets/props/thumbs/med4_r15_c01_234.png"
    },
    {
        "id": "med4_r15_c02_235",
        "name": "Thùng Gỗ & Rổ Rau #16-03",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r15_c02_235.png",
        "thumbSrc": "/assets/props/thumbs/med4_r15_c02_235.png"
    },
    {
        "id": "med4_r15_c03_236",
        "name": "Thùng Gỗ & Rổ Rau #16-04",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r15_c03_236.png",
        "thumbSrc": "/assets/props/thumbs/med4_r15_c03_236.png"
    },
    {
        "id": "med4_r15_c04_237",
        "name": "Thùng Gỗ & Rổ Rau #16-05",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r15_c04_237.png",
        "thumbSrc": "/assets/props/thumbs/med4_r15_c04_237.png"
    },
    {
        "id": "med4_r15_c05_238",
        "name": "Thùng Gỗ & Rổ Rau #16-06",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r15_c05_238.png",
        "thumbSrc": "/assets/props/thumbs/med4_r15_c05_238.png"
    },
    {
        "id": "med4_r15_c06_239",
        "name": "Thùng Gỗ & Rổ Rau #16-07",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r15_c06_239.png",
        "thumbSrc": "/assets/props/thumbs/med4_r15_c06_239.png"
    },
    {
        "id": "med4_r15_c07_240",
        "name": "Thùng Gỗ & Rổ Rau #16-08",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r15_c07_240.png",
        "thumbSrc": "/assets/props/thumbs/med4_r15_c07_240.png"
    },
    {
        "id": "med4_r15_c08_241",
        "name": "Thùng Gỗ & Rổ Rau #16-09",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r15_c08_241.png",
        "thumbSrc": "/assets/props/thumbs/med4_r15_c08_241.png"
    },
    {
        "id": "med4_r15_c09_242",
        "name": "Thùng Gỗ & Rổ Rau #16-10",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r15_c09_242.png",
        "thumbSrc": "/assets/props/thumbs/med4_r15_c09_242.png"
    },
    {
        "id": "med4_r15_c10_243",
        "name": "Thùng Gỗ & Rổ Rau #16-11",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r15_c10_243.png",
        "thumbSrc": "/assets/props/thumbs/med4_r15_c10_243.png"
    },
    {
        "id": "med4_r15_c11_244",
        "name": "Thùng Gỗ & Rổ Rau #16-12",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r15_c11_244.png",
        "thumbSrc": "/assets/props/thumbs/med4_r15_c11_244.png"
    },
    {
        "id": "med4_r15_c12_245",
        "name": "Thùng Gỗ & Rổ Rau #16-13",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r15_c12_245.png",
        "thumbSrc": "/assets/props/thumbs/med4_r15_c12_245.png"
    },
    {
        "id": "med4_r15_c13_246",
        "name": "Thùng Gỗ & Rổ Rau #16-14",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r15_c13_246.png",
        "thumbSrc": "/assets/props/thumbs/med4_r15_c13_246.png"
    },
    {
        "id": "med4_r15_c14_247",
        "name": "Thùng Gỗ & Rổ Rau #16-15",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r15_c14_247.png",
        "thumbSrc": "/assets/props/thumbs/med4_r15_c14_247.png"
    },
    {
        "id": "med4_r15_c15_248",
        "name": "Thùng Gỗ & Rổ Rau #16-16",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med4_r15_c15_248.png",
        "thumbSrc": "/assets/props/thumbs/med4_r15_c15_248.png"
    },
    {
        "id": "med6_r00_c01_000",
        "name": "Công Trình & Rương Báu #01-02",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r00_c01_000.png",
        "thumbSrc": "/assets/props/thumbs/med6_r00_c01_000.png"
    },
    {
        "id": "med6_r00_c02_001",
        "name": "Công Trình & Rương Báu #01-03",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r00_c02_001.png",
        "thumbSrc": "/assets/props/thumbs/med6_r00_c02_001.png"
    },
    {
        "id": "med6_r00_c03_002",
        "name": "Công Trình & Rương Báu #01-04",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r00_c03_002.png",
        "thumbSrc": "/assets/props/thumbs/med6_r00_c03_002.png"
    },
    {
        "id": "med6_r00_c04_003",
        "name": "Công Trình & Rương Báu #01-05",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r00_c04_003.png",
        "thumbSrc": "/assets/props/thumbs/med6_r00_c04_003.png"
    },
    {
        "id": "med6_r00_c05_004",
        "name": "Công Trình & Rương Báu #01-06",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r00_c05_004.png",
        "thumbSrc": "/assets/props/thumbs/med6_r00_c05_004.png"
    },
    {
        "id": "med6_r00_c06_005",
        "name": "Công Trình & Rương Báu #01-07",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r00_c06_005.png",
        "thumbSrc": "/assets/props/thumbs/med6_r00_c06_005.png"
    },
    {
        "id": "med6_r00_c07_006",
        "name": "Công Trình & Rương Báu #01-08",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r00_c07_006.png",
        "thumbSrc": "/assets/props/thumbs/med6_r00_c07_006.png"
    },
    {
        "id": "med6_r00_c08_007",
        "name": "Công Trình & Rương Báu #01-09",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r00_c08_007.png",
        "thumbSrc": "/assets/props/thumbs/med6_r00_c08_007.png"
    },
    {
        "id": "med6_r00_c09_008",
        "name": "Công Trình & Rương Báu #01-10",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r00_c09_008.png",
        "thumbSrc": "/assets/props/thumbs/med6_r00_c09_008.png"
    },
    {
        "id": "med6_r00_c10_009",
        "name": "Công Trình & Rương Báu #01-11",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r00_c10_009.png",
        "thumbSrc": "/assets/props/thumbs/med6_r00_c10_009.png"
    },
    {
        "id": "med6_r00_c11_010",
        "name": "Công Trình & Rương Báu #01-12",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r00_c11_010.png",
        "thumbSrc": "/assets/props/thumbs/med6_r00_c11_010.png"
    },
    {
        "id": "med6_r00_c12_011",
        "name": "Công Trình & Rương Báu #01-13",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r00_c12_011.png",
        "thumbSrc": "/assets/props/thumbs/med6_r00_c12_011.png"
    },
    {
        "id": "med6_r00_c13_012",
        "name": "Công Trình & Rương Báu #01-14",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r00_c13_012.png",
        "thumbSrc": "/assets/props/thumbs/med6_r00_c13_012.png"
    },
    {
        "id": "med6_r00_c14_013",
        "name": "Công Trình & Rương Báu #01-15",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r00_c14_013.png",
        "thumbSrc": "/assets/props/thumbs/med6_r00_c14_013.png"
    },
    {
        "id": "med6_r01_c00_014",
        "name": "Công Trình & Rương Báu #02-01",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r01_c00_014.png",
        "thumbSrc": "/assets/props/thumbs/med6_r01_c00_014.png"
    },
    {
        "id": "med6_r01_c01_015",
        "name": "Công Trình & Rương Báu #02-02",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r01_c01_015.png",
        "thumbSrc": "/assets/props/thumbs/med6_r01_c01_015.png"
    },
    {
        "id": "med6_r01_c02_016",
        "name": "Công Trình & Rương Báu #02-03",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r01_c02_016.png",
        "thumbSrc": "/assets/props/thumbs/med6_r01_c02_016.png"
    },
    {
        "id": "med6_r01_c03_017",
        "name": "Công Trình & Rương Báu #02-04",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r01_c03_017.png",
        "thumbSrc": "/assets/props/thumbs/med6_r01_c03_017.png"
    },
    {
        "id": "med6_r01_c04_018",
        "name": "Công Trình & Rương Báu #02-05",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r01_c04_018.png",
        "thumbSrc": "/assets/props/thumbs/med6_r01_c04_018.png"
    },
    {
        "id": "med6_r01_c05_019",
        "name": "Công Trình & Rương Báu #02-06",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r01_c05_019.png",
        "thumbSrc": "/assets/props/thumbs/med6_r01_c05_019.png"
    },
    {
        "id": "med6_r01_c06_020",
        "name": "Công Trình & Rương Báu #02-07",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r01_c06_020.png",
        "thumbSrc": "/assets/props/thumbs/med6_r01_c06_020.png"
    },
    {
        "id": "med6_r01_c07_021",
        "name": "Công Trình & Rương Báu #02-08",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r01_c07_021.png",
        "thumbSrc": "/assets/props/thumbs/med6_r01_c07_021.png"
    },
    {
        "id": "med6_r02_c01_022",
        "name": "Công Trình & Rương Báu #03-02",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r02_c01_022.png",
        "thumbSrc": "/assets/props/thumbs/med6_r02_c01_022.png"
    },
    {
        "id": "med6_r02_c02_023",
        "name": "Công Trình & Rương Báu #03-03",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r02_c02_023.png",
        "thumbSrc": "/assets/props/thumbs/med6_r02_c02_023.png"
    },
    {
        "id": "med6_r02_c03_024",
        "name": "Công Trình & Rương Báu #03-04",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r02_c03_024.png",
        "thumbSrc": "/assets/props/thumbs/med6_r02_c03_024.png"
    },
    {
        "id": "med6_r02_c04_025",
        "name": "Công Trình & Rương Báu #03-05",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r02_c04_025.png",
        "thumbSrc": "/assets/props/thumbs/med6_r02_c04_025.png"
    },
    {
        "id": "med6_r02_c05_026",
        "name": "Công Trình & Rương Báu #03-06",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r02_c05_026.png",
        "thumbSrc": "/assets/props/thumbs/med6_r02_c05_026.png"
    },
    {
        "id": "med6_r02_c06_027",
        "name": "Công Trình & Rương Báu #03-07",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r02_c06_027.png",
        "thumbSrc": "/assets/props/thumbs/med6_r02_c06_027.png"
    },
    {
        "id": "med6_r02_c07_028",
        "name": "Công Trình & Rương Báu #03-08",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r02_c07_028.png",
        "thumbSrc": "/assets/props/thumbs/med6_r02_c07_028.png"
    },
    {
        "id": "med6_r02_c08_029",
        "name": "Công Trình & Rương Báu #03-09",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r02_c08_029.png",
        "thumbSrc": "/assets/props/thumbs/med6_r02_c08_029.png"
    },
    {
        "id": "med6_r02_c09_030",
        "name": "Công Trình & Rương Báu #03-10",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r02_c09_030.png",
        "thumbSrc": "/assets/props/thumbs/med6_r02_c09_030.png"
    },
    {
        "id": "med6_r02_c10_031",
        "name": "Công Trình & Rương Báu #03-11",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r02_c10_031.png",
        "thumbSrc": "/assets/props/thumbs/med6_r02_c10_031.png"
    },
    {
        "id": "med6_r02_c11_032",
        "name": "Công Trình & Rương Báu #03-12",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r02_c11_032.png",
        "thumbSrc": "/assets/props/thumbs/med6_r02_c11_032.png"
    },
    {
        "id": "med6_r02_c12_033",
        "name": "Công Trình & Rương Báu #03-13",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r02_c12_033.png",
        "thumbSrc": "/assets/props/thumbs/med6_r02_c12_033.png"
    },
    {
        "id": "med6_r02_c13_034",
        "name": "Công Trình & Rương Báu #03-14",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r02_c13_034.png",
        "thumbSrc": "/assets/props/thumbs/med6_r02_c13_034.png"
    },
    {
        "id": "med6_r03_c01_035",
        "name": "Công Trình & Rương Báu #04-02",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r03_c01_035.png",
        "thumbSrc": "/assets/props/thumbs/med6_r03_c01_035.png"
    },
    {
        "id": "med6_r03_c02_036",
        "name": "Công Trình & Rương Báu #04-03",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r03_c02_036.png",
        "thumbSrc": "/assets/props/thumbs/med6_r03_c02_036.png"
    },
    {
        "id": "med6_r03_c03_037",
        "name": "Công Trình & Rương Báu #04-04",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r03_c03_037.png",
        "thumbSrc": "/assets/props/thumbs/med6_r03_c03_037.png"
    },
    {
        "id": "med6_r03_c04_038",
        "name": "Công Trình & Rương Báu #04-05",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r03_c04_038.png",
        "thumbSrc": "/assets/props/thumbs/med6_r03_c04_038.png"
    },
    {
        "id": "med6_r03_c05_039",
        "name": "Công Trình & Rương Báu #04-06",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r03_c05_039.png",
        "thumbSrc": "/assets/props/thumbs/med6_r03_c05_039.png"
    },
    {
        "id": "med6_r03_c06_040",
        "name": "Công Trình & Rương Báu #04-07",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r03_c06_040.png",
        "thumbSrc": "/assets/props/thumbs/med6_r03_c06_040.png"
    },
    {
        "id": "med6_r03_c07_041",
        "name": "Công Trình & Rương Báu #04-08",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r03_c07_041.png",
        "thumbSrc": "/assets/props/thumbs/med6_r03_c07_041.png"
    },
    {
        "id": "med6_r03_c08_042",
        "name": "Công Trình & Rương Báu #04-09",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r03_c08_042.png",
        "thumbSrc": "/assets/props/thumbs/med6_r03_c08_042.png"
    },
    {
        "id": "med6_r03_c09_043",
        "name": "Công Trình & Rương Báu #04-10",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r03_c09_043.png",
        "thumbSrc": "/assets/props/thumbs/med6_r03_c09_043.png"
    },
    {
        "id": "med6_r03_c10_044",
        "name": "Công Trình & Rương Báu #04-11",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r03_c10_044.png",
        "thumbSrc": "/assets/props/thumbs/med6_r03_c10_044.png"
    },
    {
        "id": "med6_r03_c11_045",
        "name": "Công Trình & Rương Báu #04-12",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r03_c11_045.png",
        "thumbSrc": "/assets/props/thumbs/med6_r03_c11_045.png"
    },
    {
        "id": "med6_r03_c12_046",
        "name": "Công Trình & Rương Báu #04-13",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r03_c12_046.png",
        "thumbSrc": "/assets/props/thumbs/med6_r03_c12_046.png"
    },
    {
        "id": "med6_r04_c01_047",
        "name": "Công Trình & Rương Báu #05-02",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r04_c01_047.png",
        "thumbSrc": "/assets/props/thumbs/med6_r04_c01_047.png"
    },
    {
        "id": "med6_r04_c02_048",
        "name": "Công Trình & Rương Báu #05-03",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r04_c02_048.png",
        "thumbSrc": "/assets/props/thumbs/med6_r04_c02_048.png"
    },
    {
        "id": "med6_r04_c03_049",
        "name": "Công Trình & Rương Báu #05-04",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r04_c03_049.png",
        "thumbSrc": "/assets/props/thumbs/med6_r04_c03_049.png"
    },
    {
        "id": "med6_r04_c04_050",
        "name": "Công Trình & Rương Báu #05-05",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r04_c04_050.png",
        "thumbSrc": "/assets/props/thumbs/med6_r04_c04_050.png"
    },
    {
        "id": "med6_r04_c05_051",
        "name": "Công Trình & Rương Báu #05-06",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r04_c05_051.png",
        "thumbSrc": "/assets/props/thumbs/med6_r04_c05_051.png"
    },
    {
        "id": "med6_r04_c06_052",
        "name": "Công Trình & Rương Báu #05-07",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r04_c06_052.png",
        "thumbSrc": "/assets/props/thumbs/med6_r04_c06_052.png"
    },
    {
        "id": "med6_r04_c07_053",
        "name": "Công Trình & Rương Báu #05-08",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r04_c07_053.png",
        "thumbSrc": "/assets/props/thumbs/med6_r04_c07_053.png"
    },
    {
        "id": "med6_r04_c08_054",
        "name": "Công Trình & Rương Báu #05-09",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r04_c08_054.png",
        "thumbSrc": "/assets/props/thumbs/med6_r04_c08_054.png"
    },
    {
        "id": "med6_r04_c09_055",
        "name": "Công Trình & Rương Báu #05-10",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r04_c09_055.png",
        "thumbSrc": "/assets/props/thumbs/med6_r04_c09_055.png"
    },
    {
        "id": "med6_r04_c10_056",
        "name": "Công Trình & Rương Báu #05-11",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r04_c10_056.png",
        "thumbSrc": "/assets/props/thumbs/med6_r04_c10_056.png"
    },
    {
        "id": "med6_r04_c11_057",
        "name": "Công Trình & Rương Báu #05-12",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r04_c11_057.png",
        "thumbSrc": "/assets/props/thumbs/med6_r04_c11_057.png"
    },
    {
        "id": "med6_r04_c12_058",
        "name": "Công Trình & Rương Báu #05-13",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r04_c12_058.png",
        "thumbSrc": "/assets/props/thumbs/med6_r04_c12_058.png"
    },
    {
        "id": "med6_r04_c13_059",
        "name": "Công Trình & Rương Báu #05-14",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r04_c13_059.png",
        "thumbSrc": "/assets/props/thumbs/med6_r04_c13_059.png"
    },
    {
        "id": "med6_r04_c14_060",
        "name": "Công Trình & Rương Báu #05-15",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r04_c14_060.png",
        "thumbSrc": "/assets/props/thumbs/med6_r04_c14_060.png"
    },
    {
        "id": "med6_r04_c15_061",
        "name": "Công Trình & Rương Báu #05-16",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r04_c15_061.png",
        "thumbSrc": "/assets/props/thumbs/med6_r04_c15_061.png"
    },
    {
        "id": "med6_r04_c16_062",
        "name": "Công Trình & Rương Báu #05-17",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r04_c16_062.png",
        "thumbSrc": "/assets/props/thumbs/med6_r04_c16_062.png"
    },
    {
        "id": "med6_r05_c01_063",
        "name": "Công Trình & Rương Báu #06-02",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r05_c01_063.png",
        "thumbSrc": "/assets/props/thumbs/med6_r05_c01_063.png"
    },
    {
        "id": "med6_r05_c02_064",
        "name": "Công Trình & Rương Báu #06-03",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r05_c02_064.png",
        "thumbSrc": "/assets/props/thumbs/med6_r05_c02_064.png"
    },
    {
        "id": "med6_r05_c03_065",
        "name": "Công Trình & Rương Báu #06-04",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r05_c03_065.png",
        "thumbSrc": "/assets/props/thumbs/med6_r05_c03_065.png"
    },
    {
        "id": "med6_r05_c04_066",
        "name": "Công Trình & Rương Báu #06-05",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r05_c04_066.png",
        "thumbSrc": "/assets/props/thumbs/med6_r05_c04_066.png"
    },
    {
        "id": "med6_r05_c05_067",
        "name": "Công Trình & Rương Báu #06-06",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r05_c05_067.png",
        "thumbSrc": "/assets/props/thumbs/med6_r05_c05_067.png"
    },
    {
        "id": "med6_r05_c06_068",
        "name": "Công Trình & Rương Báu #06-07",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r05_c06_068.png",
        "thumbSrc": "/assets/props/thumbs/med6_r05_c06_068.png"
    },
    {
        "id": "med6_r05_c07_069",
        "name": "Công Trình & Rương Báu #06-08",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r05_c07_069.png",
        "thumbSrc": "/assets/props/thumbs/med6_r05_c07_069.png"
    },
    {
        "id": "med6_r05_c08_070",
        "name": "Công Trình & Rương Báu #06-09",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r05_c08_070.png",
        "thumbSrc": "/assets/props/thumbs/med6_r05_c08_070.png"
    },
    {
        "id": "med6_r05_c09_071",
        "name": "Công Trình & Rương Báu #06-10",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r05_c09_071.png",
        "thumbSrc": "/assets/props/thumbs/med6_r05_c09_071.png"
    },
    {
        "id": "med6_r05_c10_072",
        "name": "Công Trình & Rương Báu #06-11",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r05_c10_072.png",
        "thumbSrc": "/assets/props/thumbs/med6_r05_c10_072.png"
    },
    {
        "id": "med6_r05_c11_073",
        "name": "Công Trình & Rương Báu #06-12",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r05_c11_073.png",
        "thumbSrc": "/assets/props/thumbs/med6_r05_c11_073.png"
    },
    {
        "id": "med6_r05_c12_074",
        "name": "Công Trình & Rương Báu #06-13",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r05_c12_074.png",
        "thumbSrc": "/assets/props/thumbs/med6_r05_c12_074.png"
    },
    {
        "id": "med6_r05_c13_075",
        "name": "Công Trình & Rương Báu #06-14",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r05_c13_075.png",
        "thumbSrc": "/assets/props/thumbs/med6_r05_c13_075.png"
    },
    {
        "id": "med6_r05_c14_076",
        "name": "Công Trình & Rương Báu #06-15",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r05_c14_076.png",
        "thumbSrc": "/assets/props/thumbs/med6_r05_c14_076.png"
    },
    {
        "id": "med6_r05_c15_077",
        "name": "Công Trình & Rương Báu #06-16",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r05_c15_077.png",
        "thumbSrc": "/assets/props/thumbs/med6_r05_c15_077.png"
    },
    {
        "id": "med6_r05_c16_078",
        "name": "Công Trình & Rương Báu #06-17",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r05_c16_078.png",
        "thumbSrc": "/assets/props/thumbs/med6_r05_c16_078.png"
    },
    {
        "id": "med6_r06_c01_079",
        "name": "Công Trình & Rương Báu #07-02",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r06_c01_079.png",
        "thumbSrc": "/assets/props/thumbs/med6_r06_c01_079.png"
    },
    {
        "id": "med6_r06_c02_080",
        "name": "Công Trình & Rương Báu #07-03",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r06_c02_080.png",
        "thumbSrc": "/assets/props/thumbs/med6_r06_c02_080.png"
    },
    {
        "id": "med6_r06_c03_081",
        "name": "Công Trình & Rương Báu #07-04",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r06_c03_081.png",
        "thumbSrc": "/assets/props/thumbs/med6_r06_c03_081.png"
    },
    {
        "id": "med6_r06_c04_082",
        "name": "Công Trình & Rương Báu #07-05",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r06_c04_082.png",
        "thumbSrc": "/assets/props/thumbs/med6_r06_c04_082.png"
    },
    {
        "id": "med6_r06_c05_083",
        "name": "Công Trình & Rương Báu #07-06",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r06_c05_083.png",
        "thumbSrc": "/assets/props/thumbs/med6_r06_c05_083.png"
    },
    {
        "id": "med6_r06_c06_084",
        "name": "Công Trình & Rương Báu #07-07",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r06_c06_084.png",
        "thumbSrc": "/assets/props/thumbs/med6_r06_c06_084.png"
    },
    {
        "id": "med6_r06_c07_085",
        "name": "Công Trình & Rương Báu #07-08",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r06_c07_085.png",
        "thumbSrc": "/assets/props/thumbs/med6_r06_c07_085.png"
    },
    {
        "id": "med6_r06_c08_086",
        "name": "Công Trình & Rương Báu #07-09",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r06_c08_086.png",
        "thumbSrc": "/assets/props/thumbs/med6_r06_c08_086.png"
    },
    {
        "id": "med6_r06_c09_087",
        "name": "Công Trình & Rương Báu #07-10",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r06_c09_087.png",
        "thumbSrc": "/assets/props/thumbs/med6_r06_c09_087.png"
    },
    {
        "id": "med6_r06_c10_088",
        "name": "Công Trình & Rương Báu #07-11",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r06_c10_088.png",
        "thumbSrc": "/assets/props/thumbs/med6_r06_c10_088.png"
    },
    {
        "id": "med6_r06_c11_089",
        "name": "Công Trình & Rương Báu #07-12",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r06_c11_089.png",
        "thumbSrc": "/assets/props/thumbs/med6_r06_c11_089.png"
    },
    {
        "id": "med6_r06_c12_090",
        "name": "Công Trình & Rương Báu #07-13",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med6_r06_c12_090.png",
        "thumbSrc": "/assets/props/thumbs/med6_r06_c12_090.png"
    },
    {
        "id": "med8_r00_c00_000",
        "name": "Thành Quách & Cổng Thành #01-01",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r00_c00_000.png",
        "thumbSrc": "/assets/props/thumbs/med8_r00_c00_000.png"
    },
    {
        "id": "med8_r00_c01_001",
        "name": "Thành Quách & Cổng Thành #01-02",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r00_c01_001.png",
        "thumbSrc": "/assets/props/thumbs/med8_r00_c01_001.png"
    },
    {
        "id": "med8_r00_c02_002",
        "name": "Thành Quách & Cổng Thành #01-03",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r00_c02_002.png",
        "thumbSrc": "/assets/props/thumbs/med8_r00_c02_002.png"
    },
    {
        "id": "med8_r00_c03_003",
        "name": "Thành Quách & Cổng Thành #01-04",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r00_c03_003.png",
        "thumbSrc": "/assets/props/thumbs/med8_r00_c03_003.png"
    },
    {
        "id": "med8_r00_c04_004",
        "name": "Thành Quách & Cổng Thành #01-05",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r00_c04_004.png",
        "thumbSrc": "/assets/props/thumbs/med8_r00_c04_004.png"
    },
    {
        "id": "med8_r00_c05_005",
        "name": "Thành Quách & Cổng Thành #01-06",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r00_c05_005.png",
        "thumbSrc": "/assets/props/thumbs/med8_r00_c05_005.png"
    },
    {
        "id": "med8_r00_c06_006",
        "name": "Thành Quách & Cổng Thành #01-07",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r00_c06_006.png",
        "thumbSrc": "/assets/props/thumbs/med8_r00_c06_006.png"
    },
    {
        "id": "med8_r00_c07_007",
        "name": "Thành Quách & Cổng Thành #01-08",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r00_c07_007.png",
        "thumbSrc": "/assets/props/thumbs/med8_r00_c07_007.png"
    },
    {
        "id": "med8_r00_c08_008",
        "name": "Thành Quách & Cổng Thành #01-09",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r00_c08_008.png",
        "thumbSrc": "/assets/props/thumbs/med8_r00_c08_008.png"
    },
    {
        "id": "med8_r00_c09_009",
        "name": "Thành Quách & Cổng Thành #01-10",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r00_c09_009.png",
        "thumbSrc": "/assets/props/thumbs/med8_r00_c09_009.png"
    },
    {
        "id": "med8_r01_c00_010",
        "name": "Thành Quách & Cổng Thành #02-01",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r01_c00_010.png",
        "thumbSrc": "/assets/props/thumbs/med8_r01_c00_010.png"
    },
    {
        "id": "med8_r01_c01_011",
        "name": "Thành Quách & Cổng Thành #02-02",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r01_c01_011.png",
        "thumbSrc": "/assets/props/thumbs/med8_r01_c01_011.png"
    },
    {
        "id": "med8_r01_c02_012",
        "name": "Thành Quách & Cổng Thành #02-03",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r01_c02_012.png",
        "thumbSrc": "/assets/props/thumbs/med8_r01_c02_012.png"
    },
    {
        "id": "med8_r01_c03_013",
        "name": "Thành Quách & Cổng Thành #02-04",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r01_c03_013.png",
        "thumbSrc": "/assets/props/thumbs/med8_r01_c03_013.png"
    },
    {
        "id": "med8_r01_c04_014",
        "name": "Thành Quách & Cổng Thành #02-05",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r01_c04_014.png",
        "thumbSrc": "/assets/props/thumbs/med8_r01_c04_014.png"
    },
    {
        "id": "med8_r01_c05_015",
        "name": "Thành Quách & Cổng Thành #02-06",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r01_c05_015.png",
        "thumbSrc": "/assets/props/thumbs/med8_r01_c05_015.png"
    },
    {
        "id": "med8_r01_c06_016",
        "name": "Thành Quách & Cổng Thành #02-07",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r01_c06_016.png",
        "thumbSrc": "/assets/props/thumbs/med8_r01_c06_016.png"
    },
    {
        "id": "med8_r01_c07_017",
        "name": "Thành Quách & Cổng Thành #02-08",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r01_c07_017.png",
        "thumbSrc": "/assets/props/thumbs/med8_r01_c07_017.png"
    },
    {
        "id": "med8_r01_c08_018",
        "name": "Thành Quách & Cổng Thành #02-09",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r01_c08_018.png",
        "thumbSrc": "/assets/props/thumbs/med8_r01_c08_018.png"
    },
    {
        "id": "med8_r01_c09_019",
        "name": "Thành Quách & Cổng Thành #02-10",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r01_c09_019.png",
        "thumbSrc": "/assets/props/thumbs/med8_r01_c09_019.png"
    },
    {
        "id": "med8_r01_c10_020",
        "name": "Thành Quách & Cổng Thành #02-11",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r01_c10_020.png",
        "thumbSrc": "/assets/props/thumbs/med8_r01_c10_020.png"
    },
    {
        "id": "med8_r01_c11_021",
        "name": "Thành Quách & Cổng Thành #02-12",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r01_c11_021.png",
        "thumbSrc": "/assets/props/thumbs/med8_r01_c11_021.png"
    },
    {
        "id": "med8_r01_c12_022",
        "name": "Thành Quách & Cổng Thành #02-13",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r01_c12_022.png",
        "thumbSrc": "/assets/props/thumbs/med8_r01_c12_022.png"
    },
    {
        "id": "med8_r02_c00_023",
        "name": "Thành Quách & Cổng Thành #03-01",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r02_c00_023.png",
        "thumbSrc": "/assets/props/thumbs/med8_r02_c00_023.png"
    },
    {
        "id": "med8_r02_c01_024",
        "name": "Thành Quách & Cổng Thành #03-02",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r02_c01_024.png",
        "thumbSrc": "/assets/props/thumbs/med8_r02_c01_024.png"
    },
    {
        "id": "med8_r02_c02_025",
        "name": "Thành Quách & Cổng Thành #03-03",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r02_c02_025.png",
        "thumbSrc": "/assets/props/thumbs/med8_r02_c02_025.png"
    },
    {
        "id": "med8_r02_c03_026",
        "name": "Thành Quách & Cổng Thành #03-04",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r02_c03_026.png",
        "thumbSrc": "/assets/props/thumbs/med8_r02_c03_026.png"
    },
    {
        "id": "med8_r02_c04_027",
        "name": "Thành Quách & Cổng Thành #03-05",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r02_c04_027.png",
        "thumbSrc": "/assets/props/thumbs/med8_r02_c04_027.png"
    },
    {
        "id": "med8_r02_c05_028",
        "name": "Thành Quách & Cổng Thành #03-06",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r02_c05_028.png",
        "thumbSrc": "/assets/props/thumbs/med8_r02_c05_028.png"
    },
    {
        "id": "med8_r02_c06_029",
        "name": "Thành Quách & Cổng Thành #03-07",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r02_c06_029.png",
        "thumbSrc": "/assets/props/thumbs/med8_r02_c06_029.png"
    },
    {
        "id": "med8_r02_c07_030",
        "name": "Thành Quách & Cổng Thành #03-08",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r02_c07_030.png",
        "thumbSrc": "/assets/props/thumbs/med8_r02_c07_030.png"
    },
    {
        "id": "med8_r02_c08_031",
        "name": "Thành Quách & Cổng Thành #03-09",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r02_c08_031.png",
        "thumbSrc": "/assets/props/thumbs/med8_r02_c08_031.png"
    },
    {
        "id": "med8_r02_c09_032",
        "name": "Thành Quách & Cổng Thành #03-10",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r02_c09_032.png",
        "thumbSrc": "/assets/props/thumbs/med8_r02_c09_032.png"
    },
    {
        "id": "med8_r02_c10_033",
        "name": "Thành Quách & Cổng Thành #03-11",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r02_c10_033.png",
        "thumbSrc": "/assets/props/thumbs/med8_r02_c10_033.png"
    },
    {
        "id": "med8_r02_c11_034",
        "name": "Thành Quách & Cổng Thành #03-12",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r02_c11_034.png",
        "thumbSrc": "/assets/props/thumbs/med8_r02_c11_034.png"
    },
    {
        "id": "med8_r02_c12_035",
        "name": "Thành Quách & Cổng Thành #03-13",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r02_c12_035.png",
        "thumbSrc": "/assets/props/thumbs/med8_r02_c12_035.png"
    },
    {
        "id": "med8_r02_c13_036",
        "name": "Thành Quách & Cổng Thành #03-14",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r02_c13_036.png",
        "thumbSrc": "/assets/props/thumbs/med8_r02_c13_036.png"
    },
    {
        "id": "med8_r02_c14_037",
        "name": "Thành Quách & Cổng Thành #03-15",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r02_c14_037.png",
        "thumbSrc": "/assets/props/thumbs/med8_r02_c14_037.png"
    },
    {
        "id": "med8_r02_c15_038",
        "name": "Thành Quách & Cổng Thành #03-16",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r02_c15_038.png",
        "thumbSrc": "/assets/props/thumbs/med8_r02_c15_038.png"
    },
    {
        "id": "med8_r02_c16_039",
        "name": "Thành Quách & Cổng Thành #03-17",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r02_c16_039.png",
        "thumbSrc": "/assets/props/thumbs/med8_r02_c16_039.png"
    },
    {
        "id": "med8_r03_c00_040",
        "name": "Nội Thất Cung Điện #04-01",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r03_c00_040.png",
        "thumbSrc": "/assets/props/thumbs/med8_r03_c00_040.png"
    },
    {
        "id": "med8_r03_c01_041",
        "name": "Nội Thất Cung Điện #04-02",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r03_c01_041.png",
        "thumbSrc": "/assets/props/thumbs/med8_r03_c01_041.png"
    },
    {
        "id": "med8_r03_c02_042",
        "name": "Nội Thất Cung Điện #04-03",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r03_c02_042.png",
        "thumbSrc": "/assets/props/thumbs/med8_r03_c02_042.png"
    },
    {
        "id": "med8_r03_c03_043",
        "name": "Nội Thất Cung Điện #04-04",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r03_c03_043.png",
        "thumbSrc": "/assets/props/thumbs/med8_r03_c03_043.png"
    },
    {
        "id": "med8_r03_c04_044",
        "name": "Nội Thất Cung Điện #04-05",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r03_c04_044.png",
        "thumbSrc": "/assets/props/thumbs/med8_r03_c04_044.png"
    },
    {
        "id": "med8_r03_c05_045",
        "name": "Nội Thất Cung Điện #04-06",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r03_c05_045.png",
        "thumbSrc": "/assets/props/thumbs/med8_r03_c05_045.png"
    },
    {
        "id": "med8_r03_c06_046",
        "name": "Nội Thất Cung Điện #04-07",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r03_c06_046.png",
        "thumbSrc": "/assets/props/thumbs/med8_r03_c06_046.png"
    },
    {
        "id": "med8_r03_c07_047",
        "name": "Nội Thất Cung Điện #04-08",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r03_c07_047.png",
        "thumbSrc": "/assets/props/thumbs/med8_r03_c07_047.png"
    },
    {
        "id": "med8_r03_c08_048",
        "name": "Nội Thất Cung Điện #04-09",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r03_c08_048.png",
        "thumbSrc": "/assets/props/thumbs/med8_r03_c08_048.png"
    },
    {
        "id": "med8_r03_c09_049",
        "name": "Nội Thất Cung Điện #04-10",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r03_c09_049.png",
        "thumbSrc": "/assets/props/thumbs/med8_r03_c09_049.png"
    },
    {
        "id": "med8_r03_c10_050",
        "name": "Nội Thất Cung Điện #04-11",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r03_c10_050.png",
        "thumbSrc": "/assets/props/thumbs/med8_r03_c10_050.png"
    },
    {
        "id": "med8_r03_c11_051",
        "name": "Nội Thất Cung Điện #04-12",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r03_c11_051.png",
        "thumbSrc": "/assets/props/thumbs/med8_r03_c11_051.png"
    },
    {
        "id": "med8_r03_c12_052",
        "name": "Nội Thất Cung Điện #04-13",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r03_c12_052.png",
        "thumbSrc": "/assets/props/thumbs/med8_r03_c12_052.png"
    },
    {
        "id": "med8_r03_c13_053",
        "name": "Nội Thất Cung Điện #04-14",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r03_c13_053.png",
        "thumbSrc": "/assets/props/thumbs/med8_r03_c13_053.png"
    },
    {
        "id": "med8_r03_c14_054",
        "name": "Nội Thất Cung Điện #04-15",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r03_c14_054.png",
        "thumbSrc": "/assets/props/thumbs/med8_r03_c14_054.png"
    },
    {
        "id": "med8_r03_c15_055",
        "name": "Nội Thất Cung Điện #04-16",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r03_c15_055.png",
        "thumbSrc": "/assets/props/thumbs/med8_r03_c15_055.png"
    },
    {
        "id": "med8_r04_c00_056",
        "name": "Nội Thất Cung Điện #05-01",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r04_c00_056.png",
        "thumbSrc": "/assets/props/thumbs/med8_r04_c00_056.png"
    },
    {
        "id": "med8_r04_c01_057",
        "name": "Nội Thất Cung Điện #05-02",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r04_c01_057.png",
        "thumbSrc": "/assets/props/thumbs/med8_r04_c01_057.png"
    },
    {
        "id": "med8_r04_c02_058",
        "name": "Nội Thất Cung Điện #05-03",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r04_c02_058.png",
        "thumbSrc": "/assets/props/thumbs/med8_r04_c02_058.png"
    },
    {
        "id": "med8_r04_c03_059",
        "name": "Nội Thất Cung Điện #05-04",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r04_c03_059.png",
        "thumbSrc": "/assets/props/thumbs/med8_r04_c03_059.png"
    },
    {
        "id": "med8_r04_c04_060",
        "name": "Nội Thất Cung Điện #05-05",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r04_c04_060.png",
        "thumbSrc": "/assets/props/thumbs/med8_r04_c04_060.png"
    },
    {
        "id": "med8_r04_c05_061",
        "name": "Nội Thất Cung Điện #05-06",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r04_c05_061.png",
        "thumbSrc": "/assets/props/thumbs/med8_r04_c05_061.png"
    },
    {
        "id": "med8_r04_c06_062",
        "name": "Nội Thất Cung Điện #05-07",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r04_c06_062.png",
        "thumbSrc": "/assets/props/thumbs/med8_r04_c06_062.png"
    },
    {
        "id": "med8_r04_c07_063",
        "name": "Nội Thất Cung Điện #05-08",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r04_c07_063.png",
        "thumbSrc": "/assets/props/thumbs/med8_r04_c07_063.png"
    },
    {
        "id": "med8_r04_c08_064",
        "name": "Nội Thất Cung Điện #05-09",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r04_c08_064.png",
        "thumbSrc": "/assets/props/thumbs/med8_r04_c08_064.png"
    },
    {
        "id": "med8_r04_c09_065",
        "name": "Nội Thất Cung Điện #05-10",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r04_c09_065.png",
        "thumbSrc": "/assets/props/thumbs/med8_r04_c09_065.png"
    },
    {
        "id": "med8_r04_c10_066",
        "name": "Nội Thất Cung Điện #05-11",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r04_c10_066.png",
        "thumbSrc": "/assets/props/thumbs/med8_r04_c10_066.png"
    },
    {
        "id": "med8_r04_c11_067",
        "name": "Nội Thất Cung Điện #05-12",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r04_c11_067.png",
        "thumbSrc": "/assets/props/thumbs/med8_r04_c11_067.png"
    },
    {
        "id": "med8_r04_c12_068",
        "name": "Nội Thất Cung Điện #05-13",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r04_c12_068.png",
        "thumbSrc": "/assets/props/thumbs/med8_r04_c12_068.png"
    },
    {
        "id": "med8_r04_c13_069",
        "name": "Nội Thất Cung Điện #05-14",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r04_c13_069.png",
        "thumbSrc": "/assets/props/thumbs/med8_r04_c13_069.png"
    },
    {
        "id": "med8_r04_c14_070",
        "name": "Nội Thất Cung Điện #05-15",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r04_c14_070.png",
        "thumbSrc": "/assets/props/thumbs/med8_r04_c14_070.png"
    },
    {
        "id": "med8_r04_c15_071",
        "name": "Nội Thất Cung Điện #05-16",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r04_c15_071.png",
        "thumbSrc": "/assets/props/thumbs/med8_r04_c15_071.png"
    },
    {
        "id": "med8_r05_c00_072",
        "name": "Nội Thất Cung Điện #06-01",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r05_c00_072.png",
        "thumbSrc": "/assets/props/thumbs/med8_r05_c00_072.png"
    },
    {
        "id": "med8_r05_c01_073",
        "name": "Nội Thất Cung Điện #06-02",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r05_c01_073.png",
        "thumbSrc": "/assets/props/thumbs/med8_r05_c01_073.png"
    },
    {
        "id": "med8_r05_c02_074",
        "name": "Nội Thất Cung Điện #06-03",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r05_c02_074.png",
        "thumbSrc": "/assets/props/thumbs/med8_r05_c02_074.png"
    },
    {
        "id": "med8_r05_c03_075",
        "name": "Nội Thất Cung Điện #06-04",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r05_c03_075.png",
        "thumbSrc": "/assets/props/thumbs/med8_r05_c03_075.png"
    },
    {
        "id": "med8_r05_c04_076",
        "name": "Nội Thất Cung Điện #06-05",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r05_c04_076.png",
        "thumbSrc": "/assets/props/thumbs/med8_r05_c04_076.png"
    },
    {
        "id": "med8_r05_c05_077",
        "name": "Nội Thất Cung Điện #06-06",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r05_c05_077.png",
        "thumbSrc": "/assets/props/thumbs/med8_r05_c05_077.png"
    },
    {
        "id": "med8_r05_c06_078",
        "name": "Nội Thất Cung Điện #06-07",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r05_c06_078.png",
        "thumbSrc": "/assets/props/thumbs/med8_r05_c06_078.png"
    },
    {
        "id": "med8_r05_c07_079",
        "name": "Nội Thất Cung Điện #06-08",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r05_c07_079.png",
        "thumbSrc": "/assets/props/thumbs/med8_r05_c07_079.png"
    },
    {
        "id": "med8_r05_c08_080",
        "name": "Nội Thất Cung Điện #06-09",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r05_c08_080.png",
        "thumbSrc": "/assets/props/thumbs/med8_r05_c08_080.png"
    },
    {
        "id": "med8_r05_c09_081",
        "name": "Nội Thất Cung Điện #06-10",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r05_c09_081.png",
        "thumbSrc": "/assets/props/thumbs/med8_r05_c09_081.png"
    },
    {
        "id": "med8_r05_c10_082",
        "name": "Nội Thất Cung Điện #06-11",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r05_c10_082.png",
        "thumbSrc": "/assets/props/thumbs/med8_r05_c10_082.png"
    },
    {
        "id": "med8_r05_c11_083",
        "name": "Nội Thất Cung Điện #06-12",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r05_c11_083.png",
        "thumbSrc": "/assets/props/thumbs/med8_r05_c11_083.png"
    },
    {
        "id": "med8_r05_c12_084",
        "name": "Nội Thất Cung Điện #06-13",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r05_c12_084.png",
        "thumbSrc": "/assets/props/thumbs/med8_r05_c12_084.png"
    },
    {
        "id": "med8_r05_c13_085",
        "name": "Nội Thất Cung Điện #06-14",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r05_c13_085.png",
        "thumbSrc": "/assets/props/thumbs/med8_r05_c13_085.png"
    },
    {
        "id": "med8_r05_c14_086",
        "name": "Nội Thất Cung Điện #06-15",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r05_c14_086.png",
        "thumbSrc": "/assets/props/thumbs/med8_r05_c14_086.png"
    },
    {
        "id": "med8_r05_c15_087",
        "name": "Nội Thất Cung Điện #06-16",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r05_c15_087.png",
        "thumbSrc": "/assets/props/thumbs/med8_r05_c15_087.png"
    },
    {
        "id": "med8_r06_c00_088",
        "name": "Dụng Cụ Nông Trại #07-01",
        "forType": "survival_tools",
        "src": "/assets/props/items/med8_r06_c00_088.png",
        "thumbSrc": "/assets/props/thumbs/med8_r06_c00_088.png"
    },
    {
        "id": "med8_r06_c01_089",
        "name": "Dụng Cụ Nông Trại #07-02",
        "forType": "survival_tools",
        "src": "/assets/props/items/med8_r06_c01_089.png",
        "thumbSrc": "/assets/props/thumbs/med8_r06_c01_089.png"
    },
    {
        "id": "med8_r06_c02_090",
        "name": "Dụng Cụ Nông Trại #07-03",
        "forType": "survival_tools",
        "src": "/assets/props/items/med8_r06_c02_090.png",
        "thumbSrc": "/assets/props/thumbs/med8_r06_c02_090.png"
    },
    {
        "id": "med8_r06_c03_091",
        "name": "Dụng Cụ Nông Trại #07-04",
        "forType": "survival_tools",
        "src": "/assets/props/items/med8_r06_c03_091.png",
        "thumbSrc": "/assets/props/thumbs/med8_r06_c03_091.png"
    },
    {
        "id": "med8_r06_c04_092",
        "name": "Dụng Cụ Nông Trại #07-05",
        "forType": "survival_tools",
        "src": "/assets/props/items/med8_r06_c04_092.png",
        "thumbSrc": "/assets/props/thumbs/med8_r06_c04_092.png"
    },
    {
        "id": "med8_r06_c05_093",
        "name": "Dụng Cụ Nông Trại #07-06",
        "forType": "survival_tools",
        "src": "/assets/props/items/med8_r06_c05_093.png",
        "thumbSrc": "/assets/props/thumbs/med8_r06_c05_093.png"
    },
    {
        "id": "med8_r06_c06_094",
        "name": "Dụng Cụ Nông Trại #07-07",
        "forType": "survival_tools",
        "src": "/assets/props/items/med8_r06_c06_094.png",
        "thumbSrc": "/assets/props/thumbs/med8_r06_c06_094.png"
    },
    {
        "id": "med8_r06_c07_095",
        "name": "Dụng Cụ Nông Trại #07-08",
        "forType": "survival_tools",
        "src": "/assets/props/items/med8_r06_c07_095.png",
        "thumbSrc": "/assets/props/thumbs/med8_r06_c07_095.png"
    },
    {
        "id": "med8_r06_c08_096",
        "name": "Dụng Cụ Nông Trại #07-09",
        "forType": "survival_tools",
        "src": "/assets/props/items/med8_r06_c08_096.png",
        "thumbSrc": "/assets/props/thumbs/med8_r06_c08_096.png"
    },
    {
        "id": "med8_r06_c09_097",
        "name": "Dụng Cụ Nông Trại #07-10",
        "forType": "survival_tools",
        "src": "/assets/props/items/med8_r06_c09_097.png",
        "thumbSrc": "/assets/props/thumbs/med8_r06_c09_097.png"
    },
    {
        "id": "med8_r06_c10_098",
        "name": "Dụng Cụ Nông Trại #07-11",
        "forType": "survival_tools",
        "src": "/assets/props/items/med8_r06_c10_098.png",
        "thumbSrc": "/assets/props/thumbs/med8_r06_c10_098.png"
    },
    {
        "id": "med8_r06_c11_099",
        "name": "Dụng Cụ Nông Trại #07-12",
        "forType": "survival_tools",
        "src": "/assets/props/items/med8_r06_c11_099.png",
        "thumbSrc": "/assets/props/thumbs/med8_r06_c11_099.png"
    },
    {
        "id": "med8_r06_c12_100",
        "name": "Dụng Cụ Nông Trại #07-13",
        "forType": "survival_tools",
        "src": "/assets/props/items/med8_r06_c12_100.png",
        "thumbSrc": "/assets/props/thumbs/med8_r06_c12_100.png"
    },
    {
        "id": "med8_r06_c13_101",
        "name": "Dụng Cụ Nông Trại #07-14",
        "forType": "survival_tools",
        "src": "/assets/props/items/med8_r06_c13_101.png",
        "thumbSrc": "/assets/props/thumbs/med8_r06_c13_101.png"
    },
    {
        "id": "med8_r06_c14_102",
        "name": "Dụng Cụ Nông Trại #07-15",
        "forType": "survival_tools",
        "src": "/assets/props/items/med8_r06_c14_102.png",
        "thumbSrc": "/assets/props/thumbs/med8_r06_c14_102.png"
    },
    {
        "id": "med8_r06_c15_103",
        "name": "Dụng Cụ Nông Trại #07-16",
        "forType": "survival_tools",
        "src": "/assets/props/items/med8_r06_c15_103.png",
        "thumbSrc": "/assets/props/thumbs/med8_r06_c15_103.png"
    },
    {
        "id": "med8_r07_c00_104",
        "name": "Dụng Cụ Nông Trại #08-01",
        "forType": "survival_tools",
        "src": "/assets/props/items/med8_r07_c00_104.png",
        "thumbSrc": "/assets/props/thumbs/med8_r07_c00_104.png"
    },
    {
        "id": "med8_r07_c01_105",
        "name": "Dụng Cụ Nông Trại #08-02",
        "forType": "survival_tools",
        "src": "/assets/props/items/med8_r07_c01_105.png",
        "thumbSrc": "/assets/props/thumbs/med8_r07_c01_105.png"
    },
    {
        "id": "med8_r07_c02_106",
        "name": "Dụng Cụ Nông Trại #08-03",
        "forType": "survival_tools",
        "src": "/assets/props/items/med8_r07_c02_106.png",
        "thumbSrc": "/assets/props/thumbs/med8_r07_c02_106.png"
    },
    {
        "id": "med8_r07_c03_107",
        "name": "Dụng Cụ Nông Trại #08-04",
        "forType": "survival_tools",
        "src": "/assets/props/items/med8_r07_c03_107.png",
        "thumbSrc": "/assets/props/thumbs/med8_r07_c03_107.png"
    },
    {
        "id": "med8_r07_c04_108",
        "name": "Dụng Cụ Nông Trại #08-05",
        "forType": "survival_tools",
        "src": "/assets/props/items/med8_r07_c04_108.png",
        "thumbSrc": "/assets/props/thumbs/med8_r07_c04_108.png"
    },
    {
        "id": "med8_r07_c05_109",
        "name": "Dụng Cụ Nông Trại #08-06",
        "forType": "survival_tools",
        "src": "/assets/props/items/med8_r07_c05_109.png",
        "thumbSrc": "/assets/props/thumbs/med8_r07_c05_109.png"
    },
    {
        "id": "med8_r07_c06_110",
        "name": "Dụng Cụ Nông Trại #08-07",
        "forType": "survival_tools",
        "src": "/assets/props/items/med8_r07_c06_110.png",
        "thumbSrc": "/assets/props/thumbs/med8_r07_c06_110.png"
    },
    {
        "id": "med8_r07_c07_111",
        "name": "Dụng Cụ Nông Trại #08-08",
        "forType": "survival_tools",
        "src": "/assets/props/items/med8_r07_c07_111.png",
        "thumbSrc": "/assets/props/thumbs/med8_r07_c07_111.png"
    },
    {
        "id": "med8_r07_c08_112",
        "name": "Dụng Cụ Nông Trại #08-09",
        "forType": "survival_tools",
        "src": "/assets/props/items/med8_r07_c08_112.png",
        "thumbSrc": "/assets/props/thumbs/med8_r07_c08_112.png"
    },
    {
        "id": "med8_r07_c09_113",
        "name": "Dụng Cụ Nông Trại #08-10",
        "forType": "survival_tools",
        "src": "/assets/props/items/med8_r07_c09_113.png",
        "thumbSrc": "/assets/props/thumbs/med8_r07_c09_113.png"
    },
    {
        "id": "med8_r07_c10_114",
        "name": "Dụng Cụ Nông Trại #08-11",
        "forType": "survival_tools",
        "src": "/assets/props/items/med8_r07_c10_114.png",
        "thumbSrc": "/assets/props/thumbs/med8_r07_c10_114.png"
    },
    {
        "id": "med8_r07_c11_115",
        "name": "Dụng Cụ Nông Trại #08-12",
        "forType": "survival_tools",
        "src": "/assets/props/items/med8_r07_c11_115.png",
        "thumbSrc": "/assets/props/thumbs/med8_r07_c11_115.png"
    },
    {
        "id": "med8_r07_c12_116",
        "name": "Dụng Cụ Nông Trại #08-13",
        "forType": "survival_tools",
        "src": "/assets/props/items/med8_r07_c12_116.png",
        "thumbSrc": "/assets/props/thumbs/med8_r07_c12_116.png"
    },
    {
        "id": "med8_r07_c13_117",
        "name": "Dụng Cụ Nông Trại #08-14",
        "forType": "survival_tools",
        "src": "/assets/props/items/med8_r07_c13_117.png",
        "thumbSrc": "/assets/props/thumbs/med8_r07_c13_117.png"
    },
    {
        "id": "med8_r07_c14_118",
        "name": "Dụng Cụ Nông Trại #08-15",
        "forType": "survival_tools",
        "src": "/assets/props/items/med8_r07_c14_118.png",
        "thumbSrc": "/assets/props/thumbs/med8_r07_c14_118.png"
    },
    {
        "id": "med8_r07_c15_119",
        "name": "Dụng Cụ Nông Trại #08-16",
        "forType": "survival_tools",
        "src": "/assets/props/items/med8_r07_c15_119.png",
        "thumbSrc": "/assets/props/thumbs/med8_r07_c15_119.png"
    },
    {
        "id": "med8_r08_c00_120",
        "name": "Cây Cối & Hàng Rào #09-01",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r08_c00_120.png",
        "thumbSrc": "/assets/props/thumbs/med8_r08_c00_120.png"
    },
    {
        "id": "med8_r08_c01_121",
        "name": "Cây Cối & Hàng Rào #09-02",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r08_c01_121.png",
        "thumbSrc": "/assets/props/thumbs/med8_r08_c01_121.png"
    },
    {
        "id": "med8_r08_c02_122",
        "name": "Cây Cối & Hàng Rào #09-03",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r08_c02_122.png",
        "thumbSrc": "/assets/props/thumbs/med8_r08_c02_122.png"
    },
    {
        "id": "med8_r08_c03_123",
        "name": "Cây Cối & Hàng Rào #09-04",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r08_c03_123.png",
        "thumbSrc": "/assets/props/thumbs/med8_r08_c03_123.png"
    },
    {
        "id": "med8_r08_c04_124",
        "name": "Cây Cối & Hàng Rào #09-05",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r08_c04_124.png",
        "thumbSrc": "/assets/props/thumbs/med8_r08_c04_124.png"
    },
    {
        "id": "med8_r08_c05_125",
        "name": "Cây Cối & Hàng Rào #09-06",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r08_c05_125.png",
        "thumbSrc": "/assets/props/thumbs/med8_r08_c05_125.png"
    },
    {
        "id": "med8_r08_c06_126",
        "name": "Cây Cối & Hàng Rào #09-07",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r08_c06_126.png",
        "thumbSrc": "/assets/props/thumbs/med8_r08_c06_126.png"
    },
    {
        "id": "med8_r08_c07_127",
        "name": "Cây Cối & Hàng Rào #09-08",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r08_c07_127.png",
        "thumbSrc": "/assets/props/thumbs/med8_r08_c07_127.png"
    },
    {
        "id": "med8_r08_c08_128",
        "name": "Cây Cối & Hàng Rào #09-09",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r08_c08_128.png",
        "thumbSrc": "/assets/props/thumbs/med8_r08_c08_128.png"
    },
    {
        "id": "med8_r08_c09_129",
        "name": "Cây Cối & Hàng Rào #09-10",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r08_c09_129.png",
        "thumbSrc": "/assets/props/thumbs/med8_r08_c09_129.png"
    },
    {
        "id": "med8_r08_c10_130",
        "name": "Cây Cối & Hàng Rào #09-11",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r08_c10_130.png",
        "thumbSrc": "/assets/props/thumbs/med8_r08_c10_130.png"
    },
    {
        "id": "med8_r08_c11_131",
        "name": "Cây Cối & Hàng Rào #09-12",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r08_c11_131.png",
        "thumbSrc": "/assets/props/thumbs/med8_r08_c11_131.png"
    },
    {
        "id": "med8_r08_c12_132",
        "name": "Cây Cối & Hàng Rào #09-13",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r08_c12_132.png",
        "thumbSrc": "/assets/props/thumbs/med8_r08_c12_132.png"
    },
    {
        "id": "med8_r08_c13_133",
        "name": "Cây Cối & Hàng Rào #09-14",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r08_c13_133.png",
        "thumbSrc": "/assets/props/thumbs/med8_r08_c13_133.png"
    },
    {
        "id": "med8_r08_c14_134",
        "name": "Cây Cối & Hàng Rào #09-15",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r08_c14_134.png",
        "thumbSrc": "/assets/props/thumbs/med8_r08_c14_134.png"
    },
    {
        "id": "med8_r08_c15_135",
        "name": "Cây Cối & Hàng Rào #09-16",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r08_c15_135.png",
        "thumbSrc": "/assets/props/thumbs/med8_r08_c15_135.png"
    },
    {
        "id": "med8_r09_c00_136",
        "name": "Cây Cối & Hàng Rào #10-01",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r09_c00_136.png",
        "thumbSrc": "/assets/props/thumbs/med8_r09_c00_136.png"
    },
    {
        "id": "med8_r09_c01_137",
        "name": "Cây Cối & Hàng Rào #10-02",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r09_c01_137.png",
        "thumbSrc": "/assets/props/thumbs/med8_r09_c01_137.png"
    },
    {
        "id": "med8_r09_c02_138",
        "name": "Cây Cối & Hàng Rào #10-03",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r09_c02_138.png",
        "thumbSrc": "/assets/props/thumbs/med8_r09_c02_138.png"
    },
    {
        "id": "med8_r09_c03_139",
        "name": "Cây Cối & Hàng Rào #10-04",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r09_c03_139.png",
        "thumbSrc": "/assets/props/thumbs/med8_r09_c03_139.png"
    },
    {
        "id": "med8_r09_c04_140",
        "name": "Cây Cối & Hàng Rào #10-05",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r09_c04_140.png",
        "thumbSrc": "/assets/props/thumbs/med8_r09_c04_140.png"
    },
    {
        "id": "med8_r09_c05_141",
        "name": "Cây Cối & Hàng Rào #10-06",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r09_c05_141.png",
        "thumbSrc": "/assets/props/thumbs/med8_r09_c05_141.png"
    },
    {
        "id": "med8_r09_c06_142",
        "name": "Cây Cối & Hàng Rào #10-07",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r09_c06_142.png",
        "thumbSrc": "/assets/props/thumbs/med8_r09_c06_142.png"
    },
    {
        "id": "med8_r09_c07_143",
        "name": "Cây Cối & Hàng Rào #10-08",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r09_c07_143.png",
        "thumbSrc": "/assets/props/thumbs/med8_r09_c07_143.png"
    },
    {
        "id": "med8_r09_c08_144",
        "name": "Cây Cối & Hàng Rào #10-09",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r09_c08_144.png",
        "thumbSrc": "/assets/props/thumbs/med8_r09_c08_144.png"
    },
    {
        "id": "med8_r09_c09_145",
        "name": "Cây Cối & Hàng Rào #10-10",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r09_c09_145.png",
        "thumbSrc": "/assets/props/thumbs/med8_r09_c09_145.png"
    },
    {
        "id": "med8_r09_c10_146",
        "name": "Cây Cối & Hàng Rào #10-11",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r09_c10_146.png",
        "thumbSrc": "/assets/props/thumbs/med8_r09_c10_146.png"
    },
    {
        "id": "med8_r09_c11_147",
        "name": "Cây Cối & Hàng Rào #10-12",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r09_c11_147.png",
        "thumbSrc": "/assets/props/thumbs/med8_r09_c11_147.png"
    },
    {
        "id": "med8_r09_c12_148",
        "name": "Cây Cối & Hàng Rào #10-13",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r09_c12_148.png",
        "thumbSrc": "/assets/props/thumbs/med8_r09_c12_148.png"
    },
    {
        "id": "med8_r09_c13_149",
        "name": "Cây Cối & Hàng Rào #10-14",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r09_c13_149.png",
        "thumbSrc": "/assets/props/thumbs/med8_r09_c13_149.png"
    },
    {
        "id": "med8_r09_c14_150",
        "name": "Cây Cối & Hàng Rào #10-15",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r09_c14_150.png",
        "thumbSrc": "/assets/props/thumbs/med8_r09_c14_150.png"
    },
    {
        "id": "med8_r09_c15_151",
        "name": "Cây Cối & Hàng Rào #10-16",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r09_c15_151.png",
        "thumbSrc": "/assets/props/thumbs/med8_r09_c15_151.png"
    },
    {
        "id": "med8_r10_c00_152",
        "name": "Cây Cối & Hàng Rào #11-01",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r10_c00_152.png",
        "thumbSrc": "/assets/props/thumbs/med8_r10_c00_152.png"
    },
    {
        "id": "med8_r10_c01_153",
        "name": "Cây Cối & Hàng Rào #11-02",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r10_c01_153.png",
        "thumbSrc": "/assets/props/thumbs/med8_r10_c01_153.png"
    },
    {
        "id": "med8_r10_c02_154",
        "name": "Cây Cối & Hàng Rào #11-03",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r10_c02_154.png",
        "thumbSrc": "/assets/props/thumbs/med8_r10_c02_154.png"
    },
    {
        "id": "med8_r10_c03_155",
        "name": "Cây Cối & Hàng Rào #11-04",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r10_c03_155.png",
        "thumbSrc": "/assets/props/thumbs/med8_r10_c03_155.png"
    },
    {
        "id": "med8_r10_c04_156",
        "name": "Cây Cối & Hàng Rào #11-05",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r10_c04_156.png",
        "thumbSrc": "/assets/props/thumbs/med8_r10_c04_156.png"
    },
    {
        "id": "med8_r10_c05_157",
        "name": "Cây Cối & Hàng Rào #11-06",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r10_c05_157.png",
        "thumbSrc": "/assets/props/thumbs/med8_r10_c05_157.png"
    },
    {
        "id": "med8_r10_c06_158",
        "name": "Cây Cối & Hàng Rào #11-07",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r10_c06_158.png",
        "thumbSrc": "/assets/props/thumbs/med8_r10_c06_158.png"
    },
    {
        "id": "med8_r10_c07_159",
        "name": "Cây Cối & Hàng Rào #11-08",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r10_c07_159.png",
        "thumbSrc": "/assets/props/thumbs/med8_r10_c07_159.png"
    },
    {
        "id": "med8_r10_c08_160",
        "name": "Cây Cối & Hàng Rào #11-09",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r10_c08_160.png",
        "thumbSrc": "/assets/props/thumbs/med8_r10_c08_160.png"
    },
    {
        "id": "med8_r10_c09_161",
        "name": "Cây Cối & Hàng Rào #11-10",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r10_c09_161.png",
        "thumbSrc": "/assets/props/thumbs/med8_r10_c09_161.png"
    },
    {
        "id": "med8_r10_c10_162",
        "name": "Cây Cối & Hàng Rào #11-11",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r10_c10_162.png",
        "thumbSrc": "/assets/props/thumbs/med8_r10_c10_162.png"
    },
    {
        "id": "med8_r10_c11_163",
        "name": "Cây Cối & Hàng Rào #11-12",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r10_c11_163.png",
        "thumbSrc": "/assets/props/thumbs/med8_r10_c11_163.png"
    },
    {
        "id": "med8_r10_c12_164",
        "name": "Cây Cối & Hàng Rào #11-13",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r10_c12_164.png",
        "thumbSrc": "/assets/props/thumbs/med8_r10_c12_164.png"
    },
    {
        "id": "med8_r10_c13_165",
        "name": "Cây Cối & Hàng Rào #11-14",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r10_c13_165.png",
        "thumbSrc": "/assets/props/thumbs/med8_r10_c13_165.png"
    },
    {
        "id": "med8_r10_c14_166",
        "name": "Cây Cối & Hàng Rào #11-15",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r10_c14_166.png",
        "thumbSrc": "/assets/props/thumbs/med8_r10_c14_166.png"
    },
    {
        "id": "med8_r10_c15_167",
        "name": "Cây Cối & Hàng Rào #11-16",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/med8_r10_c15_167.png",
        "thumbSrc": "/assets/props/thumbs/med8_r10_c15_167.png"
    },
    {
        "id": "med8_r11_c00_168",
        "name": "Biển Hiệu & Cờ Hiệu #12-01",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med8_r11_c00_168.png",
        "thumbSrc": "/assets/props/thumbs/med8_r11_c00_168.png"
    },
    {
        "id": "med8_r11_c01_169",
        "name": "Biển Hiệu & Cờ Hiệu #12-02",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med8_r11_c01_169.png",
        "thumbSrc": "/assets/props/thumbs/med8_r11_c01_169.png"
    },
    {
        "id": "med8_r11_c02_170",
        "name": "Biển Hiệu & Cờ Hiệu #12-03",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med8_r11_c02_170.png",
        "thumbSrc": "/assets/props/thumbs/med8_r11_c02_170.png"
    },
    {
        "id": "med8_r11_c03_171",
        "name": "Biển Hiệu & Cờ Hiệu #12-04",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med8_r11_c03_171.png",
        "thumbSrc": "/assets/props/thumbs/med8_r11_c03_171.png"
    },
    {
        "id": "med8_r11_c04_172",
        "name": "Biển Hiệu & Cờ Hiệu #12-05",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med8_r11_c04_172.png",
        "thumbSrc": "/assets/props/thumbs/med8_r11_c04_172.png"
    },
    {
        "id": "med8_r11_c05_173",
        "name": "Biển Hiệu & Cờ Hiệu #12-06",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med8_r11_c05_173.png",
        "thumbSrc": "/assets/props/thumbs/med8_r11_c05_173.png"
    },
    {
        "id": "med8_r11_c06_174",
        "name": "Biển Hiệu & Cờ Hiệu #12-07",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med8_r11_c06_174.png",
        "thumbSrc": "/assets/props/thumbs/med8_r11_c06_174.png"
    },
    {
        "id": "med8_r11_c07_175",
        "name": "Biển Hiệu & Cờ Hiệu #12-08",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med8_r11_c07_175.png",
        "thumbSrc": "/assets/props/thumbs/med8_r11_c07_175.png"
    },
    {
        "id": "med8_r11_c08_176",
        "name": "Biển Hiệu & Cờ Hiệu #12-09",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med8_r11_c08_176.png",
        "thumbSrc": "/assets/props/thumbs/med8_r11_c08_176.png"
    },
    {
        "id": "med8_r11_c09_177",
        "name": "Biển Hiệu & Cờ Hiệu #12-10",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med8_r11_c09_177.png",
        "thumbSrc": "/assets/props/thumbs/med8_r11_c09_177.png"
    },
    {
        "id": "med8_r11_c10_178",
        "name": "Biển Hiệu & Cờ Hiệu #12-11",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med8_r11_c10_178.png",
        "thumbSrc": "/assets/props/thumbs/med8_r11_c10_178.png"
    },
    {
        "id": "med8_r11_c11_179",
        "name": "Biển Hiệu & Cờ Hiệu #12-12",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med8_r11_c11_179.png",
        "thumbSrc": "/assets/props/thumbs/med8_r11_c11_179.png"
    },
    {
        "id": "med8_r11_c12_180",
        "name": "Biển Hiệu & Cờ Hiệu #12-13",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med8_r11_c12_180.png",
        "thumbSrc": "/assets/props/thumbs/med8_r11_c12_180.png"
    },
    {
        "id": "med8_r11_c13_181",
        "name": "Biển Hiệu & Cờ Hiệu #12-14",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med8_r11_c13_181.png",
        "thumbSrc": "/assets/props/thumbs/med8_r11_c13_181.png"
    },
    {
        "id": "med8_r11_c14_182",
        "name": "Biển Hiệu & Cờ Hiệu #12-15",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med8_r11_c14_182.png",
        "thumbSrc": "/assets/props/thumbs/med8_r11_c14_182.png"
    },
    {
        "id": "med8_r11_c15_183",
        "name": "Biển Hiệu & Cờ Hiệu #12-16",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med8_r11_c15_183.png",
        "thumbSrc": "/assets/props/thumbs/med8_r11_c15_183.png"
    },
    {
        "id": "med8_r12_c00_184",
        "name": "Biển Hiệu & Cờ Hiệu #13-01",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med8_r12_c00_184.png",
        "thumbSrc": "/assets/props/thumbs/med8_r12_c00_184.png"
    },
    {
        "id": "med8_r12_c01_185",
        "name": "Biển Hiệu & Cờ Hiệu #13-02",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med8_r12_c01_185.png",
        "thumbSrc": "/assets/props/thumbs/med8_r12_c01_185.png"
    },
    {
        "id": "med8_r12_c02_186",
        "name": "Biển Hiệu & Cờ Hiệu #13-03",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med8_r12_c02_186.png",
        "thumbSrc": "/assets/props/thumbs/med8_r12_c02_186.png"
    },
    {
        "id": "med8_r12_c03_187",
        "name": "Biển Hiệu & Cờ Hiệu #13-04",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med8_r12_c03_187.png",
        "thumbSrc": "/assets/props/thumbs/med8_r12_c03_187.png"
    },
    {
        "id": "med8_r12_c04_188",
        "name": "Biển Hiệu & Cờ Hiệu #13-05",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med8_r12_c04_188.png",
        "thumbSrc": "/assets/props/thumbs/med8_r12_c04_188.png"
    },
    {
        "id": "med8_r12_c05_189",
        "name": "Biển Hiệu & Cờ Hiệu #13-06",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med8_r12_c05_189.png",
        "thumbSrc": "/assets/props/thumbs/med8_r12_c05_189.png"
    },
    {
        "id": "med8_r12_c06_190",
        "name": "Biển Hiệu & Cờ Hiệu #13-07",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med8_r12_c06_190.png",
        "thumbSrc": "/assets/props/thumbs/med8_r12_c06_190.png"
    },
    {
        "id": "med8_r12_c07_191",
        "name": "Biển Hiệu & Cờ Hiệu #13-08",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med8_r12_c07_191.png",
        "thumbSrc": "/assets/props/thumbs/med8_r12_c07_191.png"
    },
    {
        "id": "med8_r12_c08_192",
        "name": "Biển Hiệu & Cờ Hiệu #13-09",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med8_r12_c08_192.png",
        "thumbSrc": "/assets/props/thumbs/med8_r12_c08_192.png"
    },
    {
        "id": "med8_r12_c09_193",
        "name": "Biển Hiệu & Cờ Hiệu #13-10",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med8_r12_c09_193.png",
        "thumbSrc": "/assets/props/thumbs/med8_r12_c09_193.png"
    },
    {
        "id": "med8_r12_c10_194",
        "name": "Biển Hiệu & Cờ Hiệu #13-11",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med8_r12_c10_194.png",
        "thumbSrc": "/assets/props/thumbs/med8_r12_c10_194.png"
    },
    {
        "id": "med8_r12_c11_195",
        "name": "Biển Hiệu & Cờ Hiệu #13-12",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med8_r12_c11_195.png",
        "thumbSrc": "/assets/props/thumbs/med8_r12_c11_195.png"
    },
    {
        "id": "med8_r12_c12_196",
        "name": "Biển Hiệu & Cờ Hiệu #13-13",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med8_r12_c12_196.png",
        "thumbSrc": "/assets/props/thumbs/med8_r12_c12_196.png"
    },
    {
        "id": "med8_r12_c13_197",
        "name": "Biển Hiệu & Cờ Hiệu #13-14",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med8_r12_c13_197.png",
        "thumbSrc": "/assets/props/thumbs/med8_r12_c13_197.png"
    },
    {
        "id": "med8_r12_c14_198",
        "name": "Biển Hiệu & Cờ Hiệu #13-15",
        "forType": "relics_tomes",
        "src": "/assets/props/items/med8_r12_c14_198.png",
        "thumbSrc": "/assets/props/thumbs/med8_r12_c14_198.png"
    },
    {
        "id": "med3_r00_c01_000",
        "name": "Mũ Trùm & Nón Vải #01-02",
        "forType": "armor",
        "src": "/assets/props/items/med3_r00_c01_000.png",
        "thumbSrc": "/assets/props/thumbs/med3_r00_c01_000.png"
    },
    {
        "id": "med3_r00_c02_001",
        "name": "Mũ Trùm & Nón Vải #01-03",
        "forType": "armor",
        "src": "/assets/props/items/med3_r00_c02_001.png",
        "thumbSrc": "/assets/props/thumbs/med3_r00_c02_001.png"
    },
    {
        "id": "med3_r00_c03_002",
        "name": "Mũ Trùm & Nón Vải #01-04",
        "forType": "armor",
        "src": "/assets/props/items/med3_r00_c03_002.png",
        "thumbSrc": "/assets/props/thumbs/med3_r00_c03_002.png"
    },
    {
        "id": "med3_r00_c04_003",
        "name": "Mũ Trùm & Nón Vải #01-05",
        "forType": "armor",
        "src": "/assets/props/items/med3_r00_c04_003.png",
        "thumbSrc": "/assets/props/thumbs/med3_r00_c04_003.png"
    },
    {
        "id": "med3_r00_c05_004",
        "name": "Mũ Trùm & Nón Vải #01-06",
        "forType": "armor",
        "src": "/assets/props/items/med3_r00_c05_004.png",
        "thumbSrc": "/assets/props/thumbs/med3_r00_c05_004.png"
    },
    {
        "id": "med3_r00_c06_005",
        "name": "Mũ Trùm & Nón Vải #01-07",
        "forType": "armor",
        "src": "/assets/props/items/med3_r00_c06_005.png",
        "thumbSrc": "/assets/props/thumbs/med3_r00_c06_005.png"
    },
    {
        "id": "med3_r00_c07_006",
        "name": "Mũ Trùm & Nón Vải #01-08",
        "forType": "armor",
        "src": "/assets/props/items/med3_r00_c07_006.png",
        "thumbSrc": "/assets/props/thumbs/med3_r00_c07_006.png"
    },
    {
        "id": "med3_r00_c08_007",
        "name": "Mũ Trùm & Nón Vải #01-09",
        "forType": "armor",
        "src": "/assets/props/items/med3_r00_c08_007.png",
        "thumbSrc": "/assets/props/thumbs/med3_r00_c08_007.png"
    },
    {
        "id": "med3_r00_c09_008",
        "name": "Mũ Trùm & Nón Vải #01-10",
        "forType": "armor",
        "src": "/assets/props/items/med3_r00_c09_008.png",
        "thumbSrc": "/assets/props/thumbs/med3_r00_c09_008.png"
    },
    {
        "id": "med3_r00_c10_009",
        "name": "Mũ Trùm & Nón Vải #01-11",
        "forType": "armor",
        "src": "/assets/props/items/med3_r00_c10_009.png",
        "thumbSrc": "/assets/props/thumbs/med3_r00_c10_009.png"
    },
    {
        "id": "med3_r00_c11_010",
        "name": "Mũ Trùm & Nón Vải #01-12",
        "forType": "armor",
        "src": "/assets/props/items/med3_r00_c11_010.png",
        "thumbSrc": "/assets/props/thumbs/med3_r00_c11_010.png"
    },
    {
        "id": "med3_r00_c12_011",
        "name": "Mũ Trùm & Nón Vải #01-13",
        "forType": "armor",
        "src": "/assets/props/items/med3_r00_c12_011.png",
        "thumbSrc": "/assets/props/thumbs/med3_r00_c12_011.png"
    },
    {
        "id": "med3_r00_c13_012",
        "name": "Mũ Trùm & Nón Vải #01-14",
        "forType": "armor",
        "src": "/assets/props/items/med3_r00_c13_012.png",
        "thumbSrc": "/assets/props/thumbs/med3_r00_c13_012.png"
    },
    {
        "id": "med3_r00_c14_013",
        "name": "Mũ Trùm & Nón Vải #01-15",
        "forType": "armor",
        "src": "/assets/props/items/med3_r00_c14_013.png",
        "thumbSrc": "/assets/props/thumbs/med3_r00_c14_013.png"
    },
    {
        "id": "med3_r00_c15_014",
        "name": "Mũ Trùm & Nón Vải #01-16",
        "forType": "armor",
        "src": "/assets/props/items/med3_r00_c15_014.png",
        "thumbSrc": "/assets/props/thumbs/med3_r00_c15_014.png"
    },
    {
        "id": "med3_r00_c16_015",
        "name": "Mũ Trùm & Nón Vải #01-17",
        "forType": "armor",
        "src": "/assets/props/items/med3_r00_c16_015.png",
        "thumbSrc": "/assets/props/thumbs/med3_r00_c16_015.png"
    },
    {
        "id": "med3_r01_c01_016",
        "name": "Mũ Trùm & Nón Vải #02-02",
        "forType": "armor",
        "src": "/assets/props/items/med3_r01_c01_016.png",
        "thumbSrc": "/assets/props/thumbs/med3_r01_c01_016.png"
    },
    {
        "id": "med3_r01_c02_017",
        "name": "Mũ Trùm & Nón Vải #02-03",
        "forType": "armor",
        "src": "/assets/props/items/med3_r01_c02_017.png",
        "thumbSrc": "/assets/props/thumbs/med3_r01_c02_017.png"
    },
    {
        "id": "med3_r01_c03_018",
        "name": "Mũ Trùm & Nón Vải #02-04",
        "forType": "armor",
        "src": "/assets/props/items/med3_r01_c03_018.png",
        "thumbSrc": "/assets/props/thumbs/med3_r01_c03_018.png"
    },
    {
        "id": "med3_r01_c04_019",
        "name": "Mũ Trùm & Nón Vải #02-05",
        "forType": "armor",
        "src": "/assets/props/items/med3_r01_c04_019.png",
        "thumbSrc": "/assets/props/thumbs/med3_r01_c04_019.png"
    },
    {
        "id": "med3_r01_c05_020",
        "name": "Mũ Trùm & Nón Vải #02-06",
        "forType": "armor",
        "src": "/assets/props/items/med3_r01_c05_020.png",
        "thumbSrc": "/assets/props/thumbs/med3_r01_c05_020.png"
    },
    {
        "id": "med3_r01_c06_021",
        "name": "Mũ Trùm & Nón Vải #02-07",
        "forType": "armor",
        "src": "/assets/props/items/med3_r01_c06_021.png",
        "thumbSrc": "/assets/props/thumbs/med3_r01_c06_021.png"
    },
    {
        "id": "med3_r01_c07_022",
        "name": "Mũ Trùm & Nón Vải #02-08",
        "forType": "armor",
        "src": "/assets/props/items/med3_r01_c07_022.png",
        "thumbSrc": "/assets/props/thumbs/med3_r01_c07_022.png"
    },
    {
        "id": "med3_r01_c08_023",
        "name": "Mũ Trùm & Nón Vải #02-09",
        "forType": "armor",
        "src": "/assets/props/items/med3_r01_c08_023.png",
        "thumbSrc": "/assets/props/thumbs/med3_r01_c08_023.png"
    },
    {
        "id": "med3_r01_c09_024",
        "name": "Mũ Trùm & Nón Vải #02-10",
        "forType": "armor",
        "src": "/assets/props/items/med3_r01_c09_024.png",
        "thumbSrc": "/assets/props/thumbs/med3_r01_c09_024.png"
    },
    {
        "id": "med3_r01_c10_025",
        "name": "Mũ Trùm & Nón Vải #02-11",
        "forType": "armor",
        "src": "/assets/props/items/med3_r01_c10_025.png",
        "thumbSrc": "/assets/props/thumbs/med3_r01_c10_025.png"
    },
    {
        "id": "med3_r01_c11_026",
        "name": "Mũ Trùm & Nón Vải #02-12",
        "forType": "armor",
        "src": "/assets/props/items/med3_r01_c11_026.png",
        "thumbSrc": "/assets/props/thumbs/med3_r01_c11_026.png"
    },
    {
        "id": "med3_r01_c12_027",
        "name": "Mũ Trùm & Nón Vải #02-13",
        "forType": "armor",
        "src": "/assets/props/items/med3_r01_c12_027.png",
        "thumbSrc": "/assets/props/thumbs/med3_r01_c12_027.png"
    },
    {
        "id": "med3_r01_c13_028",
        "name": "Mũ Trùm & Nón Vải #02-14",
        "forType": "armor",
        "src": "/assets/props/items/med3_r01_c13_028.png",
        "thumbSrc": "/assets/props/thumbs/med3_r01_c13_028.png"
    },
    {
        "id": "med3_r01_c14_029",
        "name": "Mũ Trùm & Nón Vải #02-15",
        "forType": "armor",
        "src": "/assets/props/items/med3_r01_c14_029.png",
        "thumbSrc": "/assets/props/thumbs/med3_r01_c14_029.png"
    },
    {
        "id": "med3_r01_c15_030",
        "name": "Mũ Trùm & Nón Vải #02-16",
        "forType": "armor",
        "src": "/assets/props/items/med3_r01_c15_030.png",
        "thumbSrc": "/assets/props/thumbs/med3_r01_c15_030.png"
    },
    {
        "id": "med3_r01_c16_031",
        "name": "Mũ Trùm & Nón Vải #02-17",
        "forType": "armor",
        "src": "/assets/props/items/med3_r01_c16_031.png",
        "thumbSrc": "/assets/props/thumbs/med3_r01_c16_031.png"
    },
    {
        "id": "med3_r02_c01_032",
        "name": "Mũ Trùm & Nón Vải #03-02",
        "forType": "armor",
        "src": "/assets/props/items/med3_r02_c01_032.png",
        "thumbSrc": "/assets/props/thumbs/med3_r02_c01_032.png"
    },
    {
        "id": "med3_r02_c02_033",
        "name": "Mũ Trùm & Nón Vải #03-03",
        "forType": "armor",
        "src": "/assets/props/items/med3_r02_c02_033.png",
        "thumbSrc": "/assets/props/thumbs/med3_r02_c02_033.png"
    },
    {
        "id": "med3_r02_c03_034",
        "name": "Mũ Trùm & Nón Vải #03-04",
        "forType": "armor",
        "src": "/assets/props/items/med3_r02_c03_034.png",
        "thumbSrc": "/assets/props/thumbs/med3_r02_c03_034.png"
    },
    {
        "id": "med3_r02_c04_035",
        "name": "Mũ Trùm & Nón Vải #03-05",
        "forType": "armor",
        "src": "/assets/props/items/med3_r02_c04_035.png",
        "thumbSrc": "/assets/props/thumbs/med3_r02_c04_035.png"
    },
    {
        "id": "med3_r02_c05_036",
        "name": "Mũ Trùm & Nón Vải #03-06",
        "forType": "armor",
        "src": "/assets/props/items/med3_r02_c05_036.png",
        "thumbSrc": "/assets/props/thumbs/med3_r02_c05_036.png"
    },
    {
        "id": "med3_r02_c06_037",
        "name": "Mũ Trùm & Nón Vải #03-07",
        "forType": "armor",
        "src": "/assets/props/items/med3_r02_c06_037.png",
        "thumbSrc": "/assets/props/thumbs/med3_r02_c06_037.png"
    },
    {
        "id": "med3_r02_c07_038",
        "name": "Mũ Trùm & Nón Vải #03-08",
        "forType": "armor",
        "src": "/assets/props/items/med3_r02_c07_038.png",
        "thumbSrc": "/assets/props/thumbs/med3_r02_c07_038.png"
    },
    {
        "id": "med3_r02_c08_039",
        "name": "Mũ Trùm & Nón Vải #03-09",
        "forType": "armor",
        "src": "/assets/props/items/med3_r02_c08_039.png",
        "thumbSrc": "/assets/props/thumbs/med3_r02_c08_039.png"
    },
    {
        "id": "med3_r02_c09_040",
        "name": "Mũ Trùm & Nón Vải #03-10",
        "forType": "armor",
        "src": "/assets/props/items/med3_r02_c09_040.png",
        "thumbSrc": "/assets/props/thumbs/med3_r02_c09_040.png"
    },
    {
        "id": "med3_r02_c10_041",
        "name": "Mũ Trùm & Nón Vải #03-11",
        "forType": "armor",
        "src": "/assets/props/items/med3_r02_c10_041.png",
        "thumbSrc": "/assets/props/thumbs/med3_r02_c10_041.png"
    },
    {
        "id": "med3_r02_c11_042",
        "name": "Mũ Trùm & Nón Vải #03-12",
        "forType": "armor",
        "src": "/assets/props/items/med3_r02_c11_042.png",
        "thumbSrc": "/assets/props/thumbs/med3_r02_c11_042.png"
    },
    {
        "id": "med3_r02_c12_043",
        "name": "Mũ Trùm & Nón Vải #03-13",
        "forType": "armor",
        "src": "/assets/props/items/med3_r02_c12_043.png",
        "thumbSrc": "/assets/props/thumbs/med3_r02_c12_043.png"
    },
    {
        "id": "med3_r02_c13_044",
        "name": "Mũ Trùm & Nón Vải #03-14",
        "forType": "armor",
        "src": "/assets/props/items/med3_r02_c13_044.png",
        "thumbSrc": "/assets/props/thumbs/med3_r02_c13_044.png"
    },
    {
        "id": "med3_r02_c14_045",
        "name": "Mũ Trùm & Nón Vải #03-15",
        "forType": "armor",
        "src": "/assets/props/items/med3_r02_c14_045.png",
        "thumbSrc": "/assets/props/thumbs/med3_r02_c14_045.png"
    },
    {
        "id": "med3_r02_c15_046",
        "name": "Mũ Trùm & Nón Vải #03-16",
        "forType": "armor",
        "src": "/assets/props/items/med3_r02_c15_046.png",
        "thumbSrc": "/assets/props/thumbs/med3_r02_c15_046.png"
    },
    {
        "id": "med3_r02_c16_047",
        "name": "Mũ Trùm & Nón Vải #03-17",
        "forType": "armor",
        "src": "/assets/props/items/med3_r02_c16_047.png",
        "thumbSrc": "/assets/props/thumbs/med3_r02_c16_047.png"
    },
    {
        "id": "med3_r03_c01_048",
        "name": "Trang Phục Trung Cổ #04-02",
        "forType": "armor",
        "src": "/assets/props/items/med3_r03_c01_048.png",
        "thumbSrc": "/assets/props/thumbs/med3_r03_c01_048.png"
    },
    {
        "id": "med3_r03_c02_049",
        "name": "Trang Phục Trung Cổ #04-03",
        "forType": "armor",
        "src": "/assets/props/items/med3_r03_c02_049.png",
        "thumbSrc": "/assets/props/thumbs/med3_r03_c02_049.png"
    },
    {
        "id": "med3_r03_c03_050",
        "name": "Trang Phục Trung Cổ #04-04",
        "forType": "armor",
        "src": "/assets/props/items/med3_r03_c03_050.png",
        "thumbSrc": "/assets/props/thumbs/med3_r03_c03_050.png"
    },
    {
        "id": "med3_r03_c04_051",
        "name": "Trang Phục Trung Cổ #04-05",
        "forType": "armor",
        "src": "/assets/props/items/med3_r03_c04_051.png",
        "thumbSrc": "/assets/props/thumbs/med3_r03_c04_051.png"
    },
    {
        "id": "med3_r03_c05_052",
        "name": "Trang Phục Trung Cổ #04-06",
        "forType": "armor",
        "src": "/assets/props/items/med3_r03_c05_052.png",
        "thumbSrc": "/assets/props/thumbs/med3_r03_c05_052.png"
    },
    {
        "id": "med3_r03_c06_053",
        "name": "Trang Phục Trung Cổ #04-07",
        "forType": "armor",
        "src": "/assets/props/items/med3_r03_c06_053.png",
        "thumbSrc": "/assets/props/thumbs/med3_r03_c06_053.png"
    },
    {
        "id": "med3_r03_c07_054",
        "name": "Trang Phục Trung Cổ #04-08",
        "forType": "armor",
        "src": "/assets/props/items/med3_r03_c07_054.png",
        "thumbSrc": "/assets/props/thumbs/med3_r03_c07_054.png"
    },
    {
        "id": "med3_r03_c08_055",
        "name": "Trang Phục Trung Cổ #04-09",
        "forType": "armor",
        "src": "/assets/props/items/med3_r03_c08_055.png",
        "thumbSrc": "/assets/props/thumbs/med3_r03_c08_055.png"
    },
    {
        "id": "med3_r03_c09_056",
        "name": "Trang Phục Trung Cổ #04-10",
        "forType": "armor",
        "src": "/assets/props/items/med3_r03_c09_056.png",
        "thumbSrc": "/assets/props/thumbs/med3_r03_c09_056.png"
    },
    {
        "id": "med3_r03_c10_057",
        "name": "Trang Phục Trung Cổ #04-11",
        "forType": "armor",
        "src": "/assets/props/items/med3_r03_c10_057.png",
        "thumbSrc": "/assets/props/thumbs/med3_r03_c10_057.png"
    },
    {
        "id": "med3_r03_c11_058",
        "name": "Trang Phục Trung Cổ #04-12",
        "forType": "armor",
        "src": "/assets/props/items/med3_r03_c11_058.png",
        "thumbSrc": "/assets/props/thumbs/med3_r03_c11_058.png"
    },
    {
        "id": "med3_r03_c12_059",
        "name": "Trang Phục Trung Cổ #04-13",
        "forType": "armor",
        "src": "/assets/props/items/med3_r03_c12_059.png",
        "thumbSrc": "/assets/props/thumbs/med3_r03_c12_059.png"
    },
    {
        "id": "med3_r03_c13_060",
        "name": "Trang Phục Trung Cổ #04-14",
        "forType": "armor",
        "src": "/assets/props/items/med3_r03_c13_060.png",
        "thumbSrc": "/assets/props/thumbs/med3_r03_c13_060.png"
    },
    {
        "id": "med3_r03_c14_061",
        "name": "Trang Phục Trung Cổ #04-15",
        "forType": "armor",
        "src": "/assets/props/items/med3_r03_c14_061.png",
        "thumbSrc": "/assets/props/thumbs/med3_r03_c14_061.png"
    },
    {
        "id": "med3_r03_c15_062",
        "name": "Trang Phục Trung Cổ #04-16",
        "forType": "armor",
        "src": "/assets/props/items/med3_r03_c15_062.png",
        "thumbSrc": "/assets/props/thumbs/med3_r03_c15_062.png"
    },
    {
        "id": "med3_r03_c16_063",
        "name": "Trang Phục Trung Cổ #04-17",
        "forType": "armor",
        "src": "/assets/props/items/med3_r03_c16_063.png",
        "thumbSrc": "/assets/props/thumbs/med3_r03_c16_063.png"
    },
    {
        "id": "med3_r04_c01_064",
        "name": "Trang Phục Trung Cổ #05-02",
        "forType": "armor",
        "src": "/assets/props/items/med3_r04_c01_064.png",
        "thumbSrc": "/assets/props/thumbs/med3_r04_c01_064.png"
    },
    {
        "id": "med3_r04_c02_065",
        "name": "Trang Phục Trung Cổ #05-03",
        "forType": "armor",
        "src": "/assets/props/items/med3_r04_c02_065.png",
        "thumbSrc": "/assets/props/thumbs/med3_r04_c02_065.png"
    },
    {
        "id": "med3_r04_c03_066",
        "name": "Trang Phục Trung Cổ #05-04",
        "forType": "armor",
        "src": "/assets/props/items/med3_r04_c03_066.png",
        "thumbSrc": "/assets/props/thumbs/med3_r04_c03_066.png"
    },
    {
        "id": "med3_r04_c04_067",
        "name": "Trang Phục Trung Cổ #05-05",
        "forType": "armor",
        "src": "/assets/props/items/med3_r04_c04_067.png",
        "thumbSrc": "/assets/props/thumbs/med3_r04_c04_067.png"
    },
    {
        "id": "med3_r04_c05_068",
        "name": "Trang Phục Trung Cổ #05-06",
        "forType": "armor",
        "src": "/assets/props/items/med3_r04_c05_068.png",
        "thumbSrc": "/assets/props/thumbs/med3_r04_c05_068.png"
    },
    {
        "id": "med3_r04_c06_069",
        "name": "Trang Phục Trung Cổ #05-07",
        "forType": "armor",
        "src": "/assets/props/items/med3_r04_c06_069.png",
        "thumbSrc": "/assets/props/thumbs/med3_r04_c06_069.png"
    },
    {
        "id": "med3_r04_c07_070",
        "name": "Trang Phục Trung Cổ #05-08",
        "forType": "armor",
        "src": "/assets/props/items/med3_r04_c07_070.png",
        "thumbSrc": "/assets/props/thumbs/med3_r04_c07_070.png"
    },
    {
        "id": "med3_r04_c08_071",
        "name": "Trang Phục Trung Cổ #05-09",
        "forType": "armor",
        "src": "/assets/props/items/med3_r04_c08_071.png",
        "thumbSrc": "/assets/props/thumbs/med3_r04_c08_071.png"
    },
    {
        "id": "med3_r04_c09_072",
        "name": "Trang Phục Trung Cổ #05-10",
        "forType": "armor",
        "src": "/assets/props/items/med3_r04_c09_072.png",
        "thumbSrc": "/assets/props/thumbs/med3_r04_c09_072.png"
    },
    {
        "id": "med3_r04_c10_073",
        "name": "Trang Phục Trung Cổ #05-11",
        "forType": "armor",
        "src": "/assets/props/items/med3_r04_c10_073.png",
        "thumbSrc": "/assets/props/thumbs/med3_r04_c10_073.png"
    },
    {
        "id": "med3_r04_c11_074",
        "name": "Trang Phục Trung Cổ #05-12",
        "forType": "armor",
        "src": "/assets/props/items/med3_r04_c11_074.png",
        "thumbSrc": "/assets/props/thumbs/med3_r04_c11_074.png"
    },
    {
        "id": "med3_r04_c12_075",
        "name": "Trang Phục Trung Cổ #05-13",
        "forType": "armor",
        "src": "/assets/props/items/med3_r04_c12_075.png",
        "thumbSrc": "/assets/props/thumbs/med3_r04_c12_075.png"
    },
    {
        "id": "med3_r04_c13_076",
        "name": "Trang Phục Trung Cổ #05-14",
        "forType": "armor",
        "src": "/assets/props/items/med3_r04_c13_076.png",
        "thumbSrc": "/assets/props/thumbs/med3_r04_c13_076.png"
    },
    {
        "id": "med3_r04_c14_077",
        "name": "Trang Phục Trung Cổ #05-15",
        "forType": "armor",
        "src": "/assets/props/items/med3_r04_c14_077.png",
        "thumbSrc": "/assets/props/thumbs/med3_r04_c14_077.png"
    },
    {
        "id": "med3_r04_c15_078",
        "name": "Trang Phục Trung Cổ #05-16",
        "forType": "armor",
        "src": "/assets/props/items/med3_r04_c15_078.png",
        "thumbSrc": "/assets/props/thumbs/med3_r04_c15_078.png"
    },
    {
        "id": "med3_r04_c16_079",
        "name": "Trang Phục Trung Cổ #05-17",
        "forType": "armor",
        "src": "/assets/props/items/med3_r04_c16_079.png",
        "thumbSrc": "/assets/props/thumbs/med3_r04_c16_079.png"
    },
    {
        "id": "med3_r05_c01_080",
        "name": "Trang Phục Trung Cổ #06-02",
        "forType": "armor",
        "src": "/assets/props/items/med3_r05_c01_080.png",
        "thumbSrc": "/assets/props/thumbs/med3_r05_c01_080.png"
    },
    {
        "id": "med3_r05_c02_081",
        "name": "Trang Phục Trung Cổ #06-03",
        "forType": "armor",
        "src": "/assets/props/items/med3_r05_c02_081.png",
        "thumbSrc": "/assets/props/thumbs/med3_r05_c02_081.png"
    },
    {
        "id": "med3_r05_c03_082",
        "name": "Trang Phục Trung Cổ #06-04",
        "forType": "armor",
        "src": "/assets/props/items/med3_r05_c03_082.png",
        "thumbSrc": "/assets/props/thumbs/med3_r05_c03_082.png"
    },
    {
        "id": "med3_r05_c04_083",
        "name": "Trang Phục Trung Cổ #06-05",
        "forType": "armor",
        "src": "/assets/props/items/med3_r05_c04_083.png",
        "thumbSrc": "/assets/props/thumbs/med3_r05_c04_083.png"
    },
    {
        "id": "med3_r05_c05_084",
        "name": "Trang Phục Trung Cổ #06-06",
        "forType": "armor",
        "src": "/assets/props/items/med3_r05_c05_084.png",
        "thumbSrc": "/assets/props/thumbs/med3_r05_c05_084.png"
    },
    {
        "id": "med3_r05_c06_085",
        "name": "Trang Phục Trung Cổ #06-07",
        "forType": "armor",
        "src": "/assets/props/items/med3_r05_c06_085.png",
        "thumbSrc": "/assets/props/thumbs/med3_r05_c06_085.png"
    },
    {
        "id": "med3_r05_c07_086",
        "name": "Trang Phục Trung Cổ #06-08",
        "forType": "armor",
        "src": "/assets/props/items/med3_r05_c07_086.png",
        "thumbSrc": "/assets/props/thumbs/med3_r05_c07_086.png"
    },
    {
        "id": "med3_r05_c08_087",
        "name": "Trang Phục Trung Cổ #06-09",
        "forType": "armor",
        "src": "/assets/props/items/med3_r05_c08_087.png",
        "thumbSrc": "/assets/props/thumbs/med3_r05_c08_087.png"
    },
    {
        "id": "med3_r05_c09_088",
        "name": "Trang Phục Trung Cổ #06-10",
        "forType": "armor",
        "src": "/assets/props/items/med3_r05_c09_088.png",
        "thumbSrc": "/assets/props/thumbs/med3_r05_c09_088.png"
    },
    {
        "id": "med3_r05_c10_089",
        "name": "Trang Phục Trung Cổ #06-11",
        "forType": "armor",
        "src": "/assets/props/items/med3_r05_c10_089.png",
        "thumbSrc": "/assets/props/thumbs/med3_r05_c10_089.png"
    },
    {
        "id": "med3_r05_c11_090",
        "name": "Trang Phục Trung Cổ #06-12",
        "forType": "armor",
        "src": "/assets/props/items/med3_r05_c11_090.png",
        "thumbSrc": "/assets/props/thumbs/med3_r05_c11_090.png"
    },
    {
        "id": "med3_r05_c12_091",
        "name": "Trang Phục Trung Cổ #06-13",
        "forType": "armor",
        "src": "/assets/props/items/med3_r05_c12_091.png",
        "thumbSrc": "/assets/props/thumbs/med3_r05_c12_091.png"
    },
    {
        "id": "med3_r05_c13_092",
        "name": "Trang Phục Trung Cổ #06-14",
        "forType": "armor",
        "src": "/assets/props/items/med3_r05_c13_092.png",
        "thumbSrc": "/assets/props/thumbs/med3_r05_c13_092.png"
    },
    {
        "id": "med3_r05_c14_093",
        "name": "Trang Phục Trung Cổ #06-15",
        "forType": "armor",
        "src": "/assets/props/items/med3_r05_c14_093.png",
        "thumbSrc": "/assets/props/thumbs/med3_r05_c14_093.png"
    },
    {
        "id": "med3_r05_c15_094",
        "name": "Trang Phục Trung Cổ #06-16",
        "forType": "armor",
        "src": "/assets/props/items/med3_r05_c15_094.png",
        "thumbSrc": "/assets/props/thumbs/med3_r05_c15_094.png"
    },
    {
        "id": "med3_r05_c16_095",
        "name": "Trang Phục Trung Cổ #06-17",
        "forType": "armor",
        "src": "/assets/props/items/med3_r05_c16_095.png",
        "thumbSrc": "/assets/props/thumbs/med3_r05_c16_095.png"
    },
    {
        "id": "med3_r06_c01_096",
        "name": "Trang Phục Trung Cổ #07-02",
        "forType": "armor",
        "src": "/assets/props/items/med3_r06_c01_096.png",
        "thumbSrc": "/assets/props/thumbs/med3_r06_c01_096.png"
    },
    {
        "id": "med3_r06_c02_097",
        "name": "Trang Phục Trung Cổ #07-03",
        "forType": "armor",
        "src": "/assets/props/items/med3_r06_c02_097.png",
        "thumbSrc": "/assets/props/thumbs/med3_r06_c02_097.png"
    },
    {
        "id": "med3_r06_c03_098",
        "name": "Trang Phục Trung Cổ #07-04",
        "forType": "armor",
        "src": "/assets/props/items/med3_r06_c03_098.png",
        "thumbSrc": "/assets/props/thumbs/med3_r06_c03_098.png"
    },
    {
        "id": "med3_r06_c04_099",
        "name": "Trang Phục Trung Cổ #07-05",
        "forType": "armor",
        "src": "/assets/props/items/med3_r06_c04_099.png",
        "thumbSrc": "/assets/props/thumbs/med3_r06_c04_099.png"
    },
    {
        "id": "med3_r06_c05_100",
        "name": "Trang Phục Trung Cổ #07-06",
        "forType": "armor",
        "src": "/assets/props/items/med3_r06_c05_100.png",
        "thumbSrc": "/assets/props/thumbs/med3_r06_c05_100.png"
    },
    {
        "id": "med3_r06_c06_101",
        "name": "Trang Phục Trung Cổ #07-07",
        "forType": "armor",
        "src": "/assets/props/items/med3_r06_c06_101.png",
        "thumbSrc": "/assets/props/thumbs/med3_r06_c06_101.png"
    },
    {
        "id": "med3_r06_c07_102",
        "name": "Trang Phục Trung Cổ #07-08",
        "forType": "armor",
        "src": "/assets/props/items/med3_r06_c07_102.png",
        "thumbSrc": "/assets/props/thumbs/med3_r06_c07_102.png"
    },
    {
        "id": "med3_r06_c08_103",
        "name": "Trang Phục Trung Cổ #07-09",
        "forType": "armor",
        "src": "/assets/props/items/med3_r06_c08_103.png",
        "thumbSrc": "/assets/props/thumbs/med3_r06_c08_103.png"
    },
    {
        "id": "med3_r06_c09_104",
        "name": "Trang Phục Trung Cổ #07-10",
        "forType": "armor",
        "src": "/assets/props/items/med3_r06_c09_104.png",
        "thumbSrc": "/assets/props/thumbs/med3_r06_c09_104.png"
    },
    {
        "id": "med3_r06_c10_105",
        "name": "Trang Phục Trung Cổ #07-11",
        "forType": "armor",
        "src": "/assets/props/items/med3_r06_c10_105.png",
        "thumbSrc": "/assets/props/thumbs/med3_r06_c10_105.png"
    },
    {
        "id": "med3_r06_c11_106",
        "name": "Trang Phục Trung Cổ #07-12",
        "forType": "armor",
        "src": "/assets/props/items/med3_r06_c11_106.png",
        "thumbSrc": "/assets/props/thumbs/med3_r06_c11_106.png"
    },
    {
        "id": "med3_r06_c12_107",
        "name": "Trang Phục Trung Cổ #07-13",
        "forType": "armor",
        "src": "/assets/props/items/med3_r06_c12_107.png",
        "thumbSrc": "/assets/props/thumbs/med3_r06_c12_107.png"
    },
    {
        "id": "med3_r06_c13_108",
        "name": "Trang Phục Trung Cổ #07-14",
        "forType": "armor",
        "src": "/assets/props/items/med3_r06_c13_108.png",
        "thumbSrc": "/assets/props/thumbs/med3_r06_c13_108.png"
    },
    {
        "id": "med3_r06_c14_109",
        "name": "Trang Phục Trung Cổ #07-15",
        "forType": "armor",
        "src": "/assets/props/items/med3_r06_c14_109.png",
        "thumbSrc": "/assets/props/thumbs/med3_r06_c14_109.png"
    },
    {
        "id": "med3_r06_c15_110",
        "name": "Trang Phục Trung Cổ #07-16",
        "forType": "armor",
        "src": "/assets/props/items/med3_r06_c15_110.png",
        "thumbSrc": "/assets/props/thumbs/med3_r06_c15_110.png"
    },
    {
        "id": "med3_r06_c16_111",
        "name": "Trang Phục Trung Cổ #07-17",
        "forType": "armor",
        "src": "/assets/props/items/med3_r06_c16_111.png",
        "thumbSrc": "/assets/props/thumbs/med3_r06_c16_111.png"
    },
    {
        "id": "med3_r07_c01_112",
        "name": "Trang Phục Trung Cổ #08-02",
        "forType": "armor",
        "src": "/assets/props/items/med3_r07_c01_112.png",
        "thumbSrc": "/assets/props/thumbs/med3_r07_c01_112.png"
    },
    {
        "id": "med3_r07_c02_113",
        "name": "Trang Phục Trung Cổ #08-03",
        "forType": "armor",
        "src": "/assets/props/items/med3_r07_c02_113.png",
        "thumbSrc": "/assets/props/thumbs/med3_r07_c02_113.png"
    },
    {
        "id": "med3_r07_c03_114",
        "name": "Trang Phục Trung Cổ #08-04",
        "forType": "armor",
        "src": "/assets/props/items/med3_r07_c03_114.png",
        "thumbSrc": "/assets/props/thumbs/med3_r07_c03_114.png"
    },
    {
        "id": "med3_r07_c04_115",
        "name": "Trang Phục Trung Cổ #08-05",
        "forType": "armor",
        "src": "/assets/props/items/med3_r07_c04_115.png",
        "thumbSrc": "/assets/props/thumbs/med3_r07_c04_115.png"
    },
    {
        "id": "med3_r07_c05_116",
        "name": "Trang Phục Trung Cổ #08-06",
        "forType": "armor",
        "src": "/assets/props/items/med3_r07_c05_116.png",
        "thumbSrc": "/assets/props/thumbs/med3_r07_c05_116.png"
    },
    {
        "id": "med3_r07_c06_117",
        "name": "Trang Phục Trung Cổ #08-07",
        "forType": "armor",
        "src": "/assets/props/items/med3_r07_c06_117.png",
        "thumbSrc": "/assets/props/thumbs/med3_r07_c06_117.png"
    },
    {
        "id": "med3_r07_c07_118",
        "name": "Trang Phục Trung Cổ #08-08",
        "forType": "armor",
        "src": "/assets/props/items/med3_r07_c07_118.png",
        "thumbSrc": "/assets/props/thumbs/med3_r07_c07_118.png"
    },
    {
        "id": "med3_r07_c08_119",
        "name": "Trang Phục Trung Cổ #08-09",
        "forType": "armor",
        "src": "/assets/props/items/med3_r07_c08_119.png",
        "thumbSrc": "/assets/props/thumbs/med3_r07_c08_119.png"
    },
    {
        "id": "med3_r07_c09_120",
        "name": "Trang Phục Trung Cổ #08-10",
        "forType": "armor",
        "src": "/assets/props/items/med3_r07_c09_120.png",
        "thumbSrc": "/assets/props/thumbs/med3_r07_c09_120.png"
    },
    {
        "id": "med3_r07_c10_121",
        "name": "Trang Phục Trung Cổ #08-11",
        "forType": "armor",
        "src": "/assets/props/items/med3_r07_c10_121.png",
        "thumbSrc": "/assets/props/thumbs/med3_r07_c10_121.png"
    },
    {
        "id": "med3_r07_c11_122",
        "name": "Trang Phục Trung Cổ #08-12",
        "forType": "armor",
        "src": "/assets/props/items/med3_r07_c11_122.png",
        "thumbSrc": "/assets/props/thumbs/med3_r07_c11_122.png"
    },
    {
        "id": "med3_r07_c12_123",
        "name": "Trang Phục Trung Cổ #08-13",
        "forType": "armor",
        "src": "/assets/props/items/med3_r07_c12_123.png",
        "thumbSrc": "/assets/props/thumbs/med3_r07_c12_123.png"
    },
    {
        "id": "med3_r07_c13_124",
        "name": "Trang Phục Trung Cổ #08-14",
        "forType": "armor",
        "src": "/assets/props/items/med3_r07_c13_124.png",
        "thumbSrc": "/assets/props/thumbs/med3_r07_c13_124.png"
    },
    {
        "id": "med3_r07_c14_125",
        "name": "Trang Phục Trung Cổ #08-15",
        "forType": "armor",
        "src": "/assets/props/items/med3_r07_c14_125.png",
        "thumbSrc": "/assets/props/thumbs/med3_r07_c14_125.png"
    },
    {
        "id": "med3_r07_c15_126",
        "name": "Trang Phục Trung Cổ #08-16",
        "forType": "armor",
        "src": "/assets/props/items/med3_r07_c15_126.png",
        "thumbSrc": "/assets/props/thumbs/med3_r07_c15_126.png"
    },
    {
        "id": "med3_r07_c16_127",
        "name": "Trang Phục Trung Cổ #08-17",
        "forType": "armor",
        "src": "/assets/props/items/med3_r07_c16_127.png",
        "thumbSrc": "/assets/props/thumbs/med3_r07_c16_127.png"
    },
    {
        "id": "med3_r08_c01_128",
        "name": "Váy & Quần Dã Chiến #09-02",
        "forType": "armor",
        "src": "/assets/props/items/med3_r08_c01_128.png",
        "thumbSrc": "/assets/props/thumbs/med3_r08_c01_128.png"
    },
    {
        "id": "med3_r08_c02_129",
        "name": "Váy & Quần Dã Chiến #09-03",
        "forType": "armor",
        "src": "/assets/props/items/med3_r08_c02_129.png",
        "thumbSrc": "/assets/props/thumbs/med3_r08_c02_129.png"
    },
    {
        "id": "med3_r08_c03_130",
        "name": "Váy & Quần Dã Chiến #09-04",
        "forType": "armor",
        "src": "/assets/props/items/med3_r08_c03_130.png",
        "thumbSrc": "/assets/props/thumbs/med3_r08_c03_130.png"
    },
    {
        "id": "med3_r08_c04_131",
        "name": "Váy & Quần Dã Chiến #09-05",
        "forType": "armor",
        "src": "/assets/props/items/med3_r08_c04_131.png",
        "thumbSrc": "/assets/props/thumbs/med3_r08_c04_131.png"
    },
    {
        "id": "med3_r08_c05_132",
        "name": "Váy & Quần Dã Chiến #09-06",
        "forType": "armor",
        "src": "/assets/props/items/med3_r08_c05_132.png",
        "thumbSrc": "/assets/props/thumbs/med3_r08_c05_132.png"
    },
    {
        "id": "med3_r08_c06_133",
        "name": "Váy & Quần Dã Chiến #09-07",
        "forType": "armor",
        "src": "/assets/props/items/med3_r08_c06_133.png",
        "thumbSrc": "/assets/props/thumbs/med3_r08_c06_133.png"
    },
    {
        "id": "med3_r08_c07_134",
        "name": "Váy & Quần Dã Chiến #09-08",
        "forType": "armor",
        "src": "/assets/props/items/med3_r08_c07_134.png",
        "thumbSrc": "/assets/props/thumbs/med3_r08_c07_134.png"
    },
    {
        "id": "med3_r08_c08_135",
        "name": "Váy & Quần Dã Chiến #09-09",
        "forType": "armor",
        "src": "/assets/props/items/med3_r08_c08_135.png",
        "thumbSrc": "/assets/props/thumbs/med3_r08_c08_135.png"
    },
    {
        "id": "med3_r08_c09_136",
        "name": "Váy & Quần Dã Chiến #09-10",
        "forType": "armor",
        "src": "/assets/props/items/med3_r08_c09_136.png",
        "thumbSrc": "/assets/props/thumbs/med3_r08_c09_136.png"
    },
    {
        "id": "med3_r08_c10_137",
        "name": "Váy & Quần Dã Chiến #09-11",
        "forType": "armor",
        "src": "/assets/props/items/med3_r08_c10_137.png",
        "thumbSrc": "/assets/props/thumbs/med3_r08_c10_137.png"
    },
    {
        "id": "med3_r08_c11_138",
        "name": "Váy & Quần Dã Chiến #09-12",
        "forType": "armor",
        "src": "/assets/props/items/med3_r08_c11_138.png",
        "thumbSrc": "/assets/props/thumbs/med3_r08_c11_138.png"
    },
    {
        "id": "med3_r08_c12_139",
        "name": "Váy & Quần Dã Chiến #09-13",
        "forType": "armor",
        "src": "/assets/props/items/med3_r08_c12_139.png",
        "thumbSrc": "/assets/props/thumbs/med3_r08_c12_139.png"
    },
    {
        "id": "med3_r08_c13_140",
        "name": "Váy & Quần Dã Chiến #09-14",
        "forType": "armor",
        "src": "/assets/props/items/med3_r08_c13_140.png",
        "thumbSrc": "/assets/props/thumbs/med3_r08_c13_140.png"
    },
    {
        "id": "med3_r08_c14_141",
        "name": "Váy & Quần Dã Chiến #09-15",
        "forType": "armor",
        "src": "/assets/props/items/med3_r08_c14_141.png",
        "thumbSrc": "/assets/props/thumbs/med3_r08_c14_141.png"
    },
    {
        "id": "med3_r08_c15_142",
        "name": "Váy & Quần Dã Chiến #09-16",
        "forType": "armor",
        "src": "/assets/props/items/med3_r08_c15_142.png",
        "thumbSrc": "/assets/props/thumbs/med3_r08_c15_142.png"
    },
    {
        "id": "med3_r08_c16_143",
        "name": "Váy & Quần Dã Chiến #09-17",
        "forType": "armor",
        "src": "/assets/props/items/med3_r08_c16_143.png",
        "thumbSrc": "/assets/props/thumbs/med3_r08_c16_143.png"
    },
    {
        "id": "med3_r09_c01_144",
        "name": "Váy & Quần Dã Chiến #10-02",
        "forType": "armor",
        "src": "/assets/props/items/med3_r09_c01_144.png",
        "thumbSrc": "/assets/props/thumbs/med3_r09_c01_144.png"
    },
    {
        "id": "med3_r09_c02_145",
        "name": "Váy & Quần Dã Chiến #10-03",
        "forType": "armor",
        "src": "/assets/props/items/med3_r09_c02_145.png",
        "thumbSrc": "/assets/props/thumbs/med3_r09_c02_145.png"
    },
    {
        "id": "med3_r09_c03_146",
        "name": "Váy & Quần Dã Chiến #10-04",
        "forType": "armor",
        "src": "/assets/props/items/med3_r09_c03_146.png",
        "thumbSrc": "/assets/props/thumbs/med3_r09_c03_146.png"
    },
    {
        "id": "med3_r09_c04_147",
        "name": "Váy & Quần Dã Chiến #10-05",
        "forType": "armor",
        "src": "/assets/props/items/med3_r09_c04_147.png",
        "thumbSrc": "/assets/props/thumbs/med3_r09_c04_147.png"
    },
    {
        "id": "med3_r09_c05_148",
        "name": "Váy & Quần Dã Chiến #10-06",
        "forType": "armor",
        "src": "/assets/props/items/med3_r09_c05_148.png",
        "thumbSrc": "/assets/props/thumbs/med3_r09_c05_148.png"
    },
    {
        "id": "med3_r09_c06_149",
        "name": "Váy & Quần Dã Chiến #10-07",
        "forType": "armor",
        "src": "/assets/props/items/med3_r09_c06_149.png",
        "thumbSrc": "/assets/props/thumbs/med3_r09_c06_149.png"
    },
    {
        "id": "med3_r09_c07_150",
        "name": "Váy & Quần Dã Chiến #10-08",
        "forType": "armor",
        "src": "/assets/props/items/med3_r09_c07_150.png",
        "thumbSrc": "/assets/props/thumbs/med3_r09_c07_150.png"
    },
    {
        "id": "med3_r09_c08_151",
        "name": "Váy & Quần Dã Chiến #10-09",
        "forType": "armor",
        "src": "/assets/props/items/med3_r09_c08_151.png",
        "thumbSrc": "/assets/props/thumbs/med3_r09_c08_151.png"
    },
    {
        "id": "med3_r09_c09_152",
        "name": "Váy & Quần Dã Chiến #10-10",
        "forType": "armor",
        "src": "/assets/props/items/med3_r09_c09_152.png",
        "thumbSrc": "/assets/props/thumbs/med3_r09_c09_152.png"
    },
    {
        "id": "med3_r09_c10_153",
        "name": "Váy & Quần Dã Chiến #10-11",
        "forType": "armor",
        "src": "/assets/props/items/med3_r09_c10_153.png",
        "thumbSrc": "/assets/props/thumbs/med3_r09_c10_153.png"
    },
    {
        "id": "med3_r09_c11_154",
        "name": "Váy & Quần Dã Chiến #10-12",
        "forType": "armor",
        "src": "/assets/props/items/med3_r09_c11_154.png",
        "thumbSrc": "/assets/props/thumbs/med3_r09_c11_154.png"
    },
    {
        "id": "med3_r09_c12_155",
        "name": "Váy & Quần Dã Chiến #10-13",
        "forType": "armor",
        "src": "/assets/props/items/med3_r09_c12_155.png",
        "thumbSrc": "/assets/props/thumbs/med3_r09_c12_155.png"
    },
    {
        "id": "med3_r09_c13_156",
        "name": "Váy & Quần Dã Chiến #10-14",
        "forType": "armor",
        "src": "/assets/props/items/med3_r09_c13_156.png",
        "thumbSrc": "/assets/props/thumbs/med3_r09_c13_156.png"
    },
    {
        "id": "med3_r09_c14_157",
        "name": "Váy & Quần Dã Chiến #10-15",
        "forType": "armor",
        "src": "/assets/props/items/med3_r09_c14_157.png",
        "thumbSrc": "/assets/props/thumbs/med3_r09_c14_157.png"
    },
    {
        "id": "med3_r09_c15_158",
        "name": "Váy & Quần Dã Chiến #10-16",
        "forType": "armor",
        "src": "/assets/props/items/med3_r09_c15_158.png",
        "thumbSrc": "/assets/props/thumbs/med3_r09_c15_158.png"
    },
    {
        "id": "med3_r09_c16_159",
        "name": "Váy & Quần Dã Chiến #10-17",
        "forType": "armor",
        "src": "/assets/props/items/med3_r09_c16_159.png",
        "thumbSrc": "/assets/props/thumbs/med3_r09_c16_159.png"
    },
    {
        "id": "med3_r10_c01_160",
        "name": "Váy & Quần Dã Chiến #11-02",
        "forType": "armor",
        "src": "/assets/props/items/med3_r10_c01_160.png",
        "thumbSrc": "/assets/props/thumbs/med3_r10_c01_160.png"
    },
    {
        "id": "med3_r10_c02_161",
        "name": "Váy & Quần Dã Chiến #11-03",
        "forType": "armor",
        "src": "/assets/props/items/med3_r10_c02_161.png",
        "thumbSrc": "/assets/props/thumbs/med3_r10_c02_161.png"
    },
    {
        "id": "med3_r10_c03_162",
        "name": "Váy & Quần Dã Chiến #11-04",
        "forType": "armor",
        "src": "/assets/props/items/med3_r10_c03_162.png",
        "thumbSrc": "/assets/props/thumbs/med3_r10_c03_162.png"
    },
    {
        "id": "med3_r10_c04_163",
        "name": "Váy & Quần Dã Chiến #11-05",
        "forType": "armor",
        "src": "/assets/props/items/med3_r10_c04_163.png",
        "thumbSrc": "/assets/props/thumbs/med3_r10_c04_163.png"
    },
    {
        "id": "med3_r10_c05_164",
        "name": "Váy & Quần Dã Chiến #11-06",
        "forType": "armor",
        "src": "/assets/props/items/med3_r10_c05_164.png",
        "thumbSrc": "/assets/props/thumbs/med3_r10_c05_164.png"
    },
    {
        "id": "med3_r10_c06_165",
        "name": "Váy & Quần Dã Chiến #11-07",
        "forType": "armor",
        "src": "/assets/props/items/med3_r10_c06_165.png",
        "thumbSrc": "/assets/props/thumbs/med3_r10_c06_165.png"
    },
    {
        "id": "med3_r10_c07_166",
        "name": "Váy & Quần Dã Chiến #11-08",
        "forType": "armor",
        "src": "/assets/props/items/med3_r10_c07_166.png",
        "thumbSrc": "/assets/props/thumbs/med3_r10_c07_166.png"
    },
    {
        "id": "med3_r10_c08_167",
        "name": "Váy & Quần Dã Chiến #11-09",
        "forType": "armor",
        "src": "/assets/props/items/med3_r10_c08_167.png",
        "thumbSrc": "/assets/props/thumbs/med3_r10_c08_167.png"
    },
    {
        "id": "med3_r10_c09_168",
        "name": "Váy & Quần Dã Chiến #11-10",
        "forType": "armor",
        "src": "/assets/props/items/med3_r10_c09_168.png",
        "thumbSrc": "/assets/props/thumbs/med3_r10_c09_168.png"
    },
    {
        "id": "med3_r10_c10_169",
        "name": "Váy & Quần Dã Chiến #11-11",
        "forType": "armor",
        "src": "/assets/props/items/med3_r10_c10_169.png",
        "thumbSrc": "/assets/props/thumbs/med3_r10_c10_169.png"
    },
    {
        "id": "med3_r10_c11_170",
        "name": "Váy & Quần Dã Chiến #11-12",
        "forType": "armor",
        "src": "/assets/props/items/med3_r10_c11_170.png",
        "thumbSrc": "/assets/props/thumbs/med3_r10_c11_170.png"
    },
    {
        "id": "med3_r10_c12_171",
        "name": "Váy & Quần Dã Chiến #11-13",
        "forType": "armor",
        "src": "/assets/props/items/med3_r10_c12_171.png",
        "thumbSrc": "/assets/props/thumbs/med3_r10_c12_171.png"
    },
    {
        "id": "med3_r10_c13_172",
        "name": "Váy & Quần Dã Chiến #11-14",
        "forType": "armor",
        "src": "/assets/props/items/med3_r10_c13_172.png",
        "thumbSrc": "/assets/props/thumbs/med3_r10_c13_172.png"
    },
    {
        "id": "med3_r10_c14_173",
        "name": "Váy & Quần Dã Chiến #11-15",
        "forType": "armor",
        "src": "/assets/props/items/med3_r10_c14_173.png",
        "thumbSrc": "/assets/props/thumbs/med3_r10_c14_173.png"
    },
    {
        "id": "med3_r10_c15_174",
        "name": "Váy & Quần Dã Chiến #11-16",
        "forType": "armor",
        "src": "/assets/props/items/med3_r10_c15_174.png",
        "thumbSrc": "/assets/props/thumbs/med3_r10_c15_174.png"
    },
    {
        "id": "med3_r10_c16_175",
        "name": "Váy & Quần Dã Chiến #11-17",
        "forType": "armor",
        "src": "/assets/props/items/med3_r10_c16_175.png",
        "thumbSrc": "/assets/props/thumbs/med3_r10_c16_175.png"
    },
    {
        "id": "med3_r11_c01_176",
        "name": "Giày & Găng Tay Da #12-02",
        "forType": "armor",
        "src": "/assets/props/items/med3_r11_c01_176.png",
        "thumbSrc": "/assets/props/thumbs/med3_r11_c01_176.png"
    },
    {
        "id": "med3_r11_c02_177",
        "name": "Giày & Găng Tay Da #12-03",
        "forType": "armor",
        "src": "/assets/props/items/med3_r11_c02_177.png",
        "thumbSrc": "/assets/props/thumbs/med3_r11_c02_177.png"
    },
    {
        "id": "med3_r11_c03_178",
        "name": "Giày & Găng Tay Da #12-04",
        "forType": "armor",
        "src": "/assets/props/items/med3_r11_c03_178.png",
        "thumbSrc": "/assets/props/thumbs/med3_r11_c03_178.png"
    },
    {
        "id": "med3_r11_c04_179",
        "name": "Giày & Găng Tay Da #12-05",
        "forType": "armor",
        "src": "/assets/props/items/med3_r11_c04_179.png",
        "thumbSrc": "/assets/props/thumbs/med3_r11_c04_179.png"
    },
    {
        "id": "med3_r11_c05_180",
        "name": "Giày & Găng Tay Da #12-06",
        "forType": "armor",
        "src": "/assets/props/items/med3_r11_c05_180.png",
        "thumbSrc": "/assets/props/thumbs/med3_r11_c05_180.png"
    },
    {
        "id": "med3_r11_c06_181",
        "name": "Giày & Găng Tay Da #12-07",
        "forType": "armor",
        "src": "/assets/props/items/med3_r11_c06_181.png",
        "thumbSrc": "/assets/props/thumbs/med3_r11_c06_181.png"
    },
    {
        "id": "med3_r11_c07_182",
        "name": "Giày & Găng Tay Da #12-08",
        "forType": "armor",
        "src": "/assets/props/items/med3_r11_c07_182.png",
        "thumbSrc": "/assets/props/thumbs/med3_r11_c07_182.png"
    },
    {
        "id": "med3_r11_c08_183",
        "name": "Giày & Găng Tay Da #12-09",
        "forType": "armor",
        "src": "/assets/props/items/med3_r11_c08_183.png",
        "thumbSrc": "/assets/props/thumbs/med3_r11_c08_183.png"
    },
    {
        "id": "med3_r11_c09_184",
        "name": "Giày & Găng Tay Da #12-10",
        "forType": "armor",
        "src": "/assets/props/items/med3_r11_c09_184.png",
        "thumbSrc": "/assets/props/thumbs/med3_r11_c09_184.png"
    },
    {
        "id": "med3_r11_c10_185",
        "name": "Giày & Găng Tay Da #12-11",
        "forType": "armor",
        "src": "/assets/props/items/med3_r11_c10_185.png",
        "thumbSrc": "/assets/props/thumbs/med3_r11_c10_185.png"
    },
    {
        "id": "med3_r11_c11_186",
        "name": "Giày & Găng Tay Da #12-12",
        "forType": "armor",
        "src": "/assets/props/items/med3_r11_c11_186.png",
        "thumbSrc": "/assets/props/thumbs/med3_r11_c11_186.png"
    },
    {
        "id": "med3_r11_c12_187",
        "name": "Giày & Găng Tay Da #12-13",
        "forType": "armor",
        "src": "/assets/props/items/med3_r11_c12_187.png",
        "thumbSrc": "/assets/props/thumbs/med3_r11_c12_187.png"
    },
    {
        "id": "med3_r11_c13_188",
        "name": "Giày & Găng Tay Da #12-14",
        "forType": "armor",
        "src": "/assets/props/items/med3_r11_c13_188.png",
        "thumbSrc": "/assets/props/thumbs/med3_r11_c13_188.png"
    },
    {
        "id": "med3_r11_c14_189",
        "name": "Giày & Găng Tay Da #12-15",
        "forType": "armor",
        "src": "/assets/props/items/med3_r11_c14_189.png",
        "thumbSrc": "/assets/props/thumbs/med3_r11_c14_189.png"
    },
    {
        "id": "med3_r11_c15_190",
        "name": "Giày & Găng Tay Da #12-16",
        "forType": "armor",
        "src": "/assets/props/items/med3_r11_c15_190.png",
        "thumbSrc": "/assets/props/thumbs/med3_r11_c15_190.png"
    },
    {
        "id": "med3_r11_c16_191",
        "name": "Giày & Găng Tay Da #12-17",
        "forType": "armor",
        "src": "/assets/props/items/med3_r11_c16_191.png",
        "thumbSrc": "/assets/props/thumbs/med3_r11_c16_191.png"
    },
    {
        "id": "med3_r12_c01_192",
        "name": "Giày & Găng Tay Da #13-02",
        "forType": "armor",
        "src": "/assets/props/items/med3_r12_c01_192.png",
        "thumbSrc": "/assets/props/thumbs/med3_r12_c01_192.png"
    },
    {
        "id": "med3_r12_c02_193",
        "name": "Giày & Găng Tay Da #13-03",
        "forType": "armor",
        "src": "/assets/props/items/med3_r12_c02_193.png",
        "thumbSrc": "/assets/props/thumbs/med3_r12_c02_193.png"
    },
    {
        "id": "med3_r12_c03_194",
        "name": "Giày & Găng Tay Da #13-04",
        "forType": "armor",
        "src": "/assets/props/items/med3_r12_c03_194.png",
        "thumbSrc": "/assets/props/thumbs/med3_r12_c03_194.png"
    },
    {
        "id": "med3_r12_c04_195",
        "name": "Giày & Găng Tay Da #13-05",
        "forType": "armor",
        "src": "/assets/props/items/med3_r12_c04_195.png",
        "thumbSrc": "/assets/props/thumbs/med3_r12_c04_195.png"
    },
    {
        "id": "med3_r12_c05_196",
        "name": "Giày & Găng Tay Da #13-06",
        "forType": "armor",
        "src": "/assets/props/items/med3_r12_c05_196.png",
        "thumbSrc": "/assets/props/thumbs/med3_r12_c05_196.png"
    },
    {
        "id": "med3_r12_c06_197",
        "name": "Giày & Găng Tay Da #13-07",
        "forType": "armor",
        "src": "/assets/props/items/med3_r12_c06_197.png",
        "thumbSrc": "/assets/props/thumbs/med3_r12_c06_197.png"
    },
    {
        "id": "med3_r12_c07_198",
        "name": "Giày & Găng Tay Da #13-08",
        "forType": "armor",
        "src": "/assets/props/items/med3_r12_c07_198.png",
        "thumbSrc": "/assets/props/thumbs/med3_r12_c07_198.png"
    },
    {
        "id": "med3_r12_c08_199",
        "name": "Giày & Găng Tay Da #13-09",
        "forType": "armor",
        "src": "/assets/props/items/med3_r12_c08_199.png",
        "thumbSrc": "/assets/props/thumbs/med3_r12_c08_199.png"
    },
    {
        "id": "med3_r12_c09_200",
        "name": "Giày & Găng Tay Da #13-10",
        "forType": "armor",
        "src": "/assets/props/items/med3_r12_c09_200.png",
        "thumbSrc": "/assets/props/thumbs/med3_r12_c09_200.png"
    },
    {
        "id": "med3_r12_c10_201",
        "name": "Giày & Găng Tay Da #13-11",
        "forType": "armor",
        "src": "/assets/props/items/med3_r12_c10_201.png",
        "thumbSrc": "/assets/props/thumbs/med3_r12_c10_201.png"
    },
    {
        "id": "med3_r12_c11_202",
        "name": "Giày & Găng Tay Da #13-12",
        "forType": "armor",
        "src": "/assets/props/items/med3_r12_c11_202.png",
        "thumbSrc": "/assets/props/thumbs/med3_r12_c11_202.png"
    },
    {
        "id": "med3_r12_c12_203",
        "name": "Giày & Găng Tay Da #13-13",
        "forType": "armor",
        "src": "/assets/props/items/med3_r12_c12_203.png",
        "thumbSrc": "/assets/props/thumbs/med3_r12_c12_203.png"
    },
    {
        "id": "med3_r12_c13_204",
        "name": "Giày & Găng Tay Da #13-14",
        "forType": "armor",
        "src": "/assets/props/items/med3_r12_c13_204.png",
        "thumbSrc": "/assets/props/thumbs/med3_r12_c13_204.png"
    },
    {
        "id": "med3_r12_c14_205",
        "name": "Giày & Găng Tay Da #13-15",
        "forType": "armor",
        "src": "/assets/props/items/med3_r12_c14_205.png",
        "thumbSrc": "/assets/props/thumbs/med3_r12_c14_205.png"
    },
    {
        "id": "med3_r12_c15_206",
        "name": "Giày & Găng Tay Da #13-16",
        "forType": "armor",
        "src": "/assets/props/items/med3_r12_c15_206.png",
        "thumbSrc": "/assets/props/thumbs/med3_r12_c15_206.png"
    },
    {
        "id": "med3_r12_c16_207",
        "name": "Giày & Găng Tay Da #13-17",
        "forType": "armor",
        "src": "/assets/props/items/med3_r12_c16_207.png",
        "thumbSrc": "/assets/props/thumbs/med3_r12_c16_207.png"
    },
    {
        "id": "med3_r13_c01_208",
        "name": "Giày & Găng Tay Da #14-02",
        "forType": "armor",
        "src": "/assets/props/items/med3_r13_c01_208.png",
        "thumbSrc": "/assets/props/thumbs/med3_r13_c01_208.png"
    },
    {
        "id": "med3_r13_c02_209",
        "name": "Giày & Găng Tay Da #14-03",
        "forType": "armor",
        "src": "/assets/props/items/med3_r13_c02_209.png",
        "thumbSrc": "/assets/props/thumbs/med3_r13_c02_209.png"
    },
    {
        "id": "med3_r13_c03_210",
        "name": "Giày & Găng Tay Da #14-04",
        "forType": "armor",
        "src": "/assets/props/items/med3_r13_c03_210.png",
        "thumbSrc": "/assets/props/thumbs/med3_r13_c03_210.png"
    },
    {
        "id": "med3_r13_c04_211",
        "name": "Giày & Găng Tay Da #14-05",
        "forType": "armor",
        "src": "/assets/props/items/med3_r13_c04_211.png",
        "thumbSrc": "/assets/props/thumbs/med3_r13_c04_211.png"
    },
    {
        "id": "med3_r13_c05_212",
        "name": "Giày & Găng Tay Da #14-06",
        "forType": "armor",
        "src": "/assets/props/items/med3_r13_c05_212.png",
        "thumbSrc": "/assets/props/thumbs/med3_r13_c05_212.png"
    },
    {
        "id": "med3_r13_c06_213",
        "name": "Giày & Găng Tay Da #14-07",
        "forType": "armor",
        "src": "/assets/props/items/med3_r13_c06_213.png",
        "thumbSrc": "/assets/props/thumbs/med3_r13_c06_213.png"
    },
    {
        "id": "med3_r13_c07_214",
        "name": "Giày & Găng Tay Da #14-08",
        "forType": "armor",
        "src": "/assets/props/items/med3_r13_c07_214.png",
        "thumbSrc": "/assets/props/thumbs/med3_r13_c07_214.png"
    },
    {
        "id": "med3_r13_c08_215",
        "name": "Giày & Găng Tay Da #14-09",
        "forType": "armor",
        "src": "/assets/props/items/med3_r13_c08_215.png",
        "thumbSrc": "/assets/props/thumbs/med3_r13_c08_215.png"
    },
    {
        "id": "med3_r13_c09_216",
        "name": "Giày & Găng Tay Da #14-10",
        "forType": "armor",
        "src": "/assets/props/items/med3_r13_c09_216.png",
        "thumbSrc": "/assets/props/thumbs/med3_r13_c09_216.png"
    },
    {
        "id": "med3_r13_c10_217",
        "name": "Giày & Găng Tay Da #14-11",
        "forType": "armor",
        "src": "/assets/props/items/med3_r13_c10_217.png",
        "thumbSrc": "/assets/props/thumbs/med3_r13_c10_217.png"
    },
    {
        "id": "med3_r13_c11_218",
        "name": "Giày & Găng Tay Da #14-12",
        "forType": "armor",
        "src": "/assets/props/items/med3_r13_c11_218.png",
        "thumbSrc": "/assets/props/thumbs/med3_r13_c11_218.png"
    },
    {
        "id": "med3_r13_c12_219",
        "name": "Giày & Găng Tay Da #14-13",
        "forType": "armor",
        "src": "/assets/props/items/med3_r13_c12_219.png",
        "thumbSrc": "/assets/props/thumbs/med3_r13_c12_219.png"
    },
    {
        "id": "med3_r13_c13_220",
        "name": "Giày & Găng Tay Da #14-14",
        "forType": "armor",
        "src": "/assets/props/items/med3_r13_c13_220.png",
        "thumbSrc": "/assets/props/thumbs/med3_r13_c13_220.png"
    },
    {
        "id": "med3_r13_c14_221",
        "name": "Giày & Găng Tay Da #14-15",
        "forType": "armor",
        "src": "/assets/props/items/med3_r13_c14_221.png",
        "thumbSrc": "/assets/props/thumbs/med3_r13_c14_221.png"
    },
    {
        "id": "med3_r13_c15_222",
        "name": "Giày & Găng Tay Da #14-16",
        "forType": "armor",
        "src": "/assets/props/items/med3_r13_c15_222.png",
        "thumbSrc": "/assets/props/thumbs/med3_r13_c15_222.png"
    },
    {
        "id": "med3_r13_c16_223",
        "name": "Giày & Găng Tay Da #14-17",
        "forType": "armor",
        "src": "/assets/props/items/med3_r13_c16_223.png",
        "thumbSrc": "/assets/props/thumbs/med3_r13_c16_223.png"
    },
    {
        "id": "med3_r14_c01_224",
        "name": "Giày & Găng Tay Da #15-02",
        "forType": "armor",
        "src": "/assets/props/items/med3_r14_c01_224.png",
        "thumbSrc": "/assets/props/thumbs/med3_r14_c01_224.png"
    },
    {
        "id": "med3_r14_c02_225",
        "name": "Giày & Găng Tay Da #15-03",
        "forType": "armor",
        "src": "/assets/props/items/med3_r14_c02_225.png",
        "thumbSrc": "/assets/props/thumbs/med3_r14_c02_225.png"
    },
    {
        "id": "med3_r14_c03_226",
        "name": "Giày & Găng Tay Da #15-04",
        "forType": "armor",
        "src": "/assets/props/items/med3_r14_c03_226.png",
        "thumbSrc": "/assets/props/thumbs/med3_r14_c03_226.png"
    },
    {
        "id": "med3_r14_c04_227",
        "name": "Giày & Găng Tay Da #15-05",
        "forType": "armor",
        "src": "/assets/props/items/med3_r14_c04_227.png",
        "thumbSrc": "/assets/props/thumbs/med3_r14_c04_227.png"
    },
    {
        "id": "med3_r14_c05_228",
        "name": "Giày & Găng Tay Da #15-06",
        "forType": "armor",
        "src": "/assets/props/items/med3_r14_c05_228.png",
        "thumbSrc": "/assets/props/thumbs/med3_r14_c05_228.png"
    },
    {
        "id": "med3_r14_c06_229",
        "name": "Giày & Găng Tay Da #15-07",
        "forType": "armor",
        "src": "/assets/props/items/med3_r14_c06_229.png",
        "thumbSrc": "/assets/props/thumbs/med3_r14_c06_229.png"
    },
    {
        "id": "med3_r14_c07_230",
        "name": "Giày & Găng Tay Da #15-08",
        "forType": "armor",
        "src": "/assets/props/items/med3_r14_c07_230.png",
        "thumbSrc": "/assets/props/thumbs/med3_r14_c07_230.png"
    },
    {
        "id": "med3_r14_c08_231",
        "name": "Giày & Găng Tay Da #15-09",
        "forType": "armor",
        "src": "/assets/props/items/med3_r14_c08_231.png",
        "thumbSrc": "/assets/props/thumbs/med3_r14_c08_231.png"
    },
    {
        "id": "med3_r14_c09_232",
        "name": "Giày & Găng Tay Da #15-10",
        "forType": "armor",
        "src": "/assets/props/items/med3_r14_c09_232.png",
        "thumbSrc": "/assets/props/thumbs/med3_r14_c09_232.png"
    },
    {
        "id": "med3_r14_c10_233",
        "name": "Giày & Găng Tay Da #15-11",
        "forType": "armor",
        "src": "/assets/props/items/med3_r14_c10_233.png",
        "thumbSrc": "/assets/props/thumbs/med3_r14_c10_233.png"
    },
    {
        "id": "med3_r14_c11_234",
        "name": "Giày & Găng Tay Da #15-12",
        "forType": "armor",
        "src": "/assets/props/items/med3_r14_c11_234.png",
        "thumbSrc": "/assets/props/thumbs/med3_r14_c11_234.png"
    },
    {
        "id": "med3_r14_c12_235",
        "name": "Giày & Găng Tay Da #15-13",
        "forType": "armor",
        "src": "/assets/props/items/med3_r14_c12_235.png",
        "thumbSrc": "/assets/props/thumbs/med3_r14_c12_235.png"
    },
    {
        "id": "med3_r14_c13_236",
        "name": "Giày & Găng Tay Da #15-14",
        "forType": "armor",
        "src": "/assets/props/items/med3_r14_c13_236.png",
        "thumbSrc": "/assets/props/thumbs/med3_r14_c13_236.png"
    },
    {
        "id": "med3_r14_c14_237",
        "name": "Giày & Găng Tay Da #15-15",
        "forType": "armor",
        "src": "/assets/props/items/med3_r14_c14_237.png",
        "thumbSrc": "/assets/props/thumbs/med3_r14_c14_237.png"
    },
    {
        "id": "med3_r14_c15_238",
        "name": "Giày & Găng Tay Da #15-16",
        "forType": "armor",
        "src": "/assets/props/items/med3_r14_c15_238.png",
        "thumbSrc": "/assets/props/thumbs/med3_r14_c15_238.png"
    },
    {
        "id": "med3_r14_c16_239",
        "name": "Giày & Găng Tay Da #15-17",
        "forType": "armor",
        "src": "/assets/props/items/med3_r14_c16_239.png",
        "thumbSrc": "/assets/props/thumbs/med3_r14_c16_239.png"
    },
    {
        "id": "med0_r00_c00_000",
        "name": "Mũ Trùm & Nón Vải #01-01",
        "forType": "armor",
        "src": "/assets/props/items/med0_r00_c00_000.png",
        "thumbSrc": "/assets/props/thumbs/med0_r00_c00_000.png"
    },
    {
        "id": "med0_r00_c01_001",
        "name": "Mũ Trùm & Nón Vải #01-02",
        "forType": "armor",
        "src": "/assets/props/items/med0_r00_c01_001.png",
        "thumbSrc": "/assets/props/thumbs/med0_r00_c01_001.png"
    },
    {
        "id": "med0_r00_c02_002",
        "name": "Mũ Trùm & Nón Vải #01-03",
        "forType": "armor",
        "src": "/assets/props/items/med0_r00_c02_002.png",
        "thumbSrc": "/assets/props/thumbs/med0_r00_c02_002.png"
    },
    {
        "id": "med0_r00_c03_003",
        "name": "Mũ Trùm & Nón Vải #01-04",
        "forType": "armor",
        "src": "/assets/props/items/med0_r00_c03_003.png",
        "thumbSrc": "/assets/props/thumbs/med0_r00_c03_003.png"
    },
    {
        "id": "med0_r00_c04_004",
        "name": "Mũ Trùm & Nón Vải #01-05",
        "forType": "armor",
        "src": "/assets/props/items/med0_r00_c04_004.png",
        "thumbSrc": "/assets/props/thumbs/med0_r00_c04_004.png"
    },
    {
        "id": "med0_r00_c05_005",
        "name": "Mũ Trùm & Nón Vải #01-06",
        "forType": "armor",
        "src": "/assets/props/items/med0_r00_c05_005.png",
        "thumbSrc": "/assets/props/thumbs/med0_r00_c05_005.png"
    },
    {
        "id": "med0_r00_c06_006",
        "name": "Mũ Trùm & Nón Vải #01-07",
        "forType": "armor",
        "src": "/assets/props/items/med0_r00_c06_006.png",
        "thumbSrc": "/assets/props/thumbs/med0_r00_c06_006.png"
    },
    {
        "id": "med0_r00_c07_007",
        "name": "Mũ Trùm & Nón Vải #01-08",
        "forType": "armor",
        "src": "/assets/props/items/med0_r00_c07_007.png",
        "thumbSrc": "/assets/props/thumbs/med0_r00_c07_007.png"
    },
    {
        "id": "med0_r00_c08_008",
        "name": "Mũ Trùm & Nón Vải #01-09",
        "forType": "armor",
        "src": "/assets/props/items/med0_r00_c08_008.png",
        "thumbSrc": "/assets/props/thumbs/med0_r00_c08_008.png"
    },
    {
        "id": "med0_r00_c09_009",
        "name": "Mũ Trùm & Nón Vải #01-10",
        "forType": "armor",
        "src": "/assets/props/items/med0_r00_c09_009.png",
        "thumbSrc": "/assets/props/thumbs/med0_r00_c09_009.png"
    },
    {
        "id": "med0_r00_c10_010",
        "name": "Mũ Trùm & Nón Vải #01-11",
        "forType": "armor",
        "src": "/assets/props/items/med0_r00_c10_010.png",
        "thumbSrc": "/assets/props/thumbs/med0_r00_c10_010.png"
    },
    {
        "id": "med0_r00_c11_011",
        "name": "Mũ Trùm & Nón Vải #01-12",
        "forType": "armor",
        "src": "/assets/props/items/med0_r00_c11_011.png",
        "thumbSrc": "/assets/props/thumbs/med0_r00_c11_011.png"
    },
    {
        "id": "med0_r00_c12_012",
        "name": "Mũ Trùm & Nón Vải #01-13",
        "forType": "armor",
        "src": "/assets/props/items/med0_r00_c12_012.png",
        "thumbSrc": "/assets/props/thumbs/med0_r00_c12_012.png"
    },
    {
        "id": "med0_r00_c13_013",
        "name": "Mũ Trùm & Nón Vải #01-14",
        "forType": "armor",
        "src": "/assets/props/items/med0_r00_c13_013.png",
        "thumbSrc": "/assets/props/thumbs/med0_r00_c13_013.png"
    },
    {
        "id": "med0_r00_c14_014",
        "name": "Mũ Trùm & Nón Vải #01-15",
        "forType": "armor",
        "src": "/assets/props/items/med0_r00_c14_014.png",
        "thumbSrc": "/assets/props/thumbs/med0_r00_c14_014.png"
    },
    {
        "id": "med0_r00_c15_015",
        "name": "Mũ Trùm & Nón Vải #01-16",
        "forType": "armor",
        "src": "/assets/props/items/med0_r00_c15_015.png",
        "thumbSrc": "/assets/props/thumbs/med0_r00_c15_015.png"
    },
    {
        "id": "med0_r01_c00_016",
        "name": "Mũ Trùm & Nón Vải #02-01",
        "forType": "armor",
        "src": "/assets/props/items/med0_r01_c00_016.png",
        "thumbSrc": "/assets/props/thumbs/med0_r01_c00_016.png"
    },
    {
        "id": "med0_r01_c01_017",
        "name": "Mũ Trùm & Nón Vải #02-02",
        "forType": "armor",
        "src": "/assets/props/items/med0_r01_c01_017.png",
        "thumbSrc": "/assets/props/thumbs/med0_r01_c01_017.png"
    },
    {
        "id": "med0_r01_c02_018",
        "name": "Mũ Trùm & Nón Vải #02-03",
        "forType": "armor",
        "src": "/assets/props/items/med0_r01_c02_018.png",
        "thumbSrc": "/assets/props/thumbs/med0_r01_c02_018.png"
    },
    {
        "id": "med0_r01_c03_019",
        "name": "Mũ Trùm & Nón Vải #02-04",
        "forType": "armor",
        "src": "/assets/props/items/med0_r01_c03_019.png",
        "thumbSrc": "/assets/props/thumbs/med0_r01_c03_019.png"
    },
    {
        "id": "med0_r01_c04_020",
        "name": "Mũ Trùm & Nón Vải #02-05",
        "forType": "armor",
        "src": "/assets/props/items/med0_r01_c04_020.png",
        "thumbSrc": "/assets/props/thumbs/med0_r01_c04_020.png"
    },
    {
        "id": "med0_r01_c05_021",
        "name": "Mũ Trùm & Nón Vải #02-06",
        "forType": "armor",
        "src": "/assets/props/items/med0_r01_c05_021.png",
        "thumbSrc": "/assets/props/thumbs/med0_r01_c05_021.png"
    },
    {
        "id": "med0_r01_c06_022",
        "name": "Mũ Trùm & Nón Vải #02-07",
        "forType": "armor",
        "src": "/assets/props/items/med0_r01_c06_022.png",
        "thumbSrc": "/assets/props/thumbs/med0_r01_c06_022.png"
    },
    {
        "id": "med0_r01_c07_023",
        "name": "Mũ Trùm & Nón Vải #02-08",
        "forType": "armor",
        "src": "/assets/props/items/med0_r01_c07_023.png",
        "thumbSrc": "/assets/props/thumbs/med0_r01_c07_023.png"
    },
    {
        "id": "med0_r01_c08_024",
        "name": "Mũ Trùm & Nón Vải #02-09",
        "forType": "armor",
        "src": "/assets/props/items/med0_r01_c08_024.png",
        "thumbSrc": "/assets/props/thumbs/med0_r01_c08_024.png"
    },
    {
        "id": "med0_r01_c09_025",
        "name": "Mũ Trùm & Nón Vải #02-10",
        "forType": "armor",
        "src": "/assets/props/items/med0_r01_c09_025.png",
        "thumbSrc": "/assets/props/thumbs/med0_r01_c09_025.png"
    },
    {
        "id": "med0_r01_c10_026",
        "name": "Mũ Trùm & Nón Vải #02-11",
        "forType": "armor",
        "src": "/assets/props/items/med0_r01_c10_026.png",
        "thumbSrc": "/assets/props/thumbs/med0_r01_c10_026.png"
    },
    {
        "id": "med0_r01_c11_027",
        "name": "Mũ Trùm & Nón Vải #02-12",
        "forType": "armor",
        "src": "/assets/props/items/med0_r01_c11_027.png",
        "thumbSrc": "/assets/props/thumbs/med0_r01_c11_027.png"
    },
    {
        "id": "med0_r01_c12_028",
        "name": "Mũ Trùm & Nón Vải #02-13",
        "forType": "armor",
        "src": "/assets/props/items/med0_r01_c12_028.png",
        "thumbSrc": "/assets/props/thumbs/med0_r01_c12_028.png"
    },
    {
        "id": "med0_r01_c13_029",
        "name": "Mũ Trùm & Nón Vải #02-14",
        "forType": "armor",
        "src": "/assets/props/items/med0_r01_c13_029.png",
        "thumbSrc": "/assets/props/thumbs/med0_r01_c13_029.png"
    },
    {
        "id": "med0_r01_c14_030",
        "name": "Mũ Trùm & Nón Vải #02-15",
        "forType": "armor",
        "src": "/assets/props/items/med0_r01_c14_030.png",
        "thumbSrc": "/assets/props/thumbs/med0_r01_c14_030.png"
    },
    {
        "id": "med0_r01_c15_031",
        "name": "Mũ Trùm & Nón Vải #02-16",
        "forType": "armor",
        "src": "/assets/props/items/med0_r01_c15_031.png",
        "thumbSrc": "/assets/props/thumbs/med0_r01_c15_031.png"
    },
    {
        "id": "med0_r02_c00_032",
        "name": "Mũ Trùm & Nón Vải #03-01",
        "forType": "armor",
        "src": "/assets/props/items/med0_r02_c00_032.png",
        "thumbSrc": "/assets/props/thumbs/med0_r02_c00_032.png"
    },
    {
        "id": "med0_r02_c01_033",
        "name": "Mũ Trùm & Nón Vải #03-02",
        "forType": "armor",
        "src": "/assets/props/items/med0_r02_c01_033.png",
        "thumbSrc": "/assets/props/thumbs/med0_r02_c01_033.png"
    },
    {
        "id": "med0_r02_c02_034",
        "name": "Mũ Trùm & Nón Vải #03-03",
        "forType": "armor",
        "src": "/assets/props/items/med0_r02_c02_034.png",
        "thumbSrc": "/assets/props/thumbs/med0_r02_c02_034.png"
    },
    {
        "id": "med0_r02_c03_035",
        "name": "Mũ Trùm & Nón Vải #03-04",
        "forType": "armor",
        "src": "/assets/props/items/med0_r02_c03_035.png",
        "thumbSrc": "/assets/props/thumbs/med0_r02_c03_035.png"
    },
    {
        "id": "med0_r02_c04_036",
        "name": "Mũ Trùm & Nón Vải #03-05",
        "forType": "armor",
        "src": "/assets/props/items/med0_r02_c04_036.png",
        "thumbSrc": "/assets/props/thumbs/med0_r02_c04_036.png"
    },
    {
        "id": "med0_r02_c05_037",
        "name": "Mũ Trùm & Nón Vải #03-06",
        "forType": "armor",
        "src": "/assets/props/items/med0_r02_c05_037.png",
        "thumbSrc": "/assets/props/thumbs/med0_r02_c05_037.png"
    },
    {
        "id": "med0_r02_c06_038",
        "name": "Mũ Trùm & Nón Vải #03-07",
        "forType": "armor",
        "src": "/assets/props/items/med0_r02_c06_038.png",
        "thumbSrc": "/assets/props/thumbs/med0_r02_c06_038.png"
    },
    {
        "id": "med0_r02_c07_039",
        "name": "Mũ Trùm & Nón Vải #03-08",
        "forType": "armor",
        "src": "/assets/props/items/med0_r02_c07_039.png",
        "thumbSrc": "/assets/props/thumbs/med0_r02_c07_039.png"
    },
    {
        "id": "med0_r02_c08_040",
        "name": "Mũ Trùm & Nón Vải #03-09",
        "forType": "armor",
        "src": "/assets/props/items/med0_r02_c08_040.png",
        "thumbSrc": "/assets/props/thumbs/med0_r02_c08_040.png"
    },
    {
        "id": "med0_r02_c09_041",
        "name": "Mũ Trùm & Nón Vải #03-10",
        "forType": "armor",
        "src": "/assets/props/items/med0_r02_c09_041.png",
        "thumbSrc": "/assets/props/thumbs/med0_r02_c09_041.png"
    },
    {
        "id": "med0_r02_c10_042",
        "name": "Mũ Trùm & Nón Vải #03-11",
        "forType": "armor",
        "src": "/assets/props/items/med0_r02_c10_042.png",
        "thumbSrc": "/assets/props/thumbs/med0_r02_c10_042.png"
    },
    {
        "id": "med0_r02_c11_043",
        "name": "Mũ Trùm & Nón Vải #03-12",
        "forType": "armor",
        "src": "/assets/props/items/med0_r02_c11_043.png",
        "thumbSrc": "/assets/props/thumbs/med0_r02_c11_043.png"
    },
    {
        "id": "med0_r02_c12_044",
        "name": "Mũ Trùm & Nón Vải #03-13",
        "forType": "armor",
        "src": "/assets/props/items/med0_r02_c12_044.png",
        "thumbSrc": "/assets/props/thumbs/med0_r02_c12_044.png"
    },
    {
        "id": "med0_r02_c13_045",
        "name": "Mũ Trùm & Nón Vải #03-14",
        "forType": "armor",
        "src": "/assets/props/items/med0_r02_c13_045.png",
        "thumbSrc": "/assets/props/thumbs/med0_r02_c13_045.png"
    },
    {
        "id": "med0_r02_c14_046",
        "name": "Mũ Trùm & Nón Vải #03-15",
        "forType": "armor",
        "src": "/assets/props/items/med0_r02_c14_046.png",
        "thumbSrc": "/assets/props/thumbs/med0_r02_c14_046.png"
    },
    {
        "id": "med0_r02_c15_047",
        "name": "Mũ Trùm & Nón Vải #03-16",
        "forType": "armor",
        "src": "/assets/props/items/med0_r02_c15_047.png",
        "thumbSrc": "/assets/props/thumbs/med0_r02_c15_047.png"
    },
    {
        "id": "med0_r03_c00_048",
        "name": "Trang Phục Trung Cổ #04-01",
        "forType": "armor",
        "src": "/assets/props/items/med0_r03_c00_048.png",
        "thumbSrc": "/assets/props/thumbs/med0_r03_c00_048.png"
    },
    {
        "id": "med0_r03_c01_049",
        "name": "Trang Phục Trung Cổ #04-02",
        "forType": "armor",
        "src": "/assets/props/items/med0_r03_c01_049.png",
        "thumbSrc": "/assets/props/thumbs/med0_r03_c01_049.png"
    },
    {
        "id": "med0_r03_c02_050",
        "name": "Trang Phục Trung Cổ #04-03",
        "forType": "armor",
        "src": "/assets/props/items/med0_r03_c02_050.png",
        "thumbSrc": "/assets/props/thumbs/med0_r03_c02_050.png"
    },
    {
        "id": "med0_r03_c03_051",
        "name": "Trang Phục Trung Cổ #04-04",
        "forType": "armor",
        "src": "/assets/props/items/med0_r03_c03_051.png",
        "thumbSrc": "/assets/props/thumbs/med0_r03_c03_051.png"
    },
    {
        "id": "med0_r03_c04_052",
        "name": "Trang Phục Trung Cổ #04-05",
        "forType": "armor",
        "src": "/assets/props/items/med0_r03_c04_052.png",
        "thumbSrc": "/assets/props/thumbs/med0_r03_c04_052.png"
    },
    {
        "id": "med0_r03_c05_053",
        "name": "Trang Phục Trung Cổ #04-06",
        "forType": "armor",
        "src": "/assets/props/items/med0_r03_c05_053.png",
        "thumbSrc": "/assets/props/thumbs/med0_r03_c05_053.png"
    },
    {
        "id": "med0_r03_c06_054",
        "name": "Trang Phục Trung Cổ #04-07",
        "forType": "armor",
        "src": "/assets/props/items/med0_r03_c06_054.png",
        "thumbSrc": "/assets/props/thumbs/med0_r03_c06_054.png"
    },
    {
        "id": "med0_r03_c07_055",
        "name": "Trang Phục Trung Cổ #04-08",
        "forType": "armor",
        "src": "/assets/props/items/med0_r03_c07_055.png",
        "thumbSrc": "/assets/props/thumbs/med0_r03_c07_055.png"
    },
    {
        "id": "med0_r03_c08_056",
        "name": "Trang Phục Trung Cổ #04-09",
        "forType": "armor",
        "src": "/assets/props/items/med0_r03_c08_056.png",
        "thumbSrc": "/assets/props/thumbs/med0_r03_c08_056.png"
    },
    {
        "id": "med0_r03_c09_057",
        "name": "Trang Phục Trung Cổ #04-10",
        "forType": "armor",
        "src": "/assets/props/items/med0_r03_c09_057.png",
        "thumbSrc": "/assets/props/thumbs/med0_r03_c09_057.png"
    },
    {
        "id": "med0_r03_c10_058",
        "name": "Trang Phục Trung Cổ #04-11",
        "forType": "armor",
        "src": "/assets/props/items/med0_r03_c10_058.png",
        "thumbSrc": "/assets/props/thumbs/med0_r03_c10_058.png"
    },
    {
        "id": "med0_r03_c11_059",
        "name": "Trang Phục Trung Cổ #04-12",
        "forType": "armor",
        "src": "/assets/props/items/med0_r03_c11_059.png",
        "thumbSrc": "/assets/props/thumbs/med0_r03_c11_059.png"
    },
    {
        "id": "med0_r03_c12_060",
        "name": "Trang Phục Trung Cổ #04-13",
        "forType": "armor",
        "src": "/assets/props/items/med0_r03_c12_060.png",
        "thumbSrc": "/assets/props/thumbs/med0_r03_c12_060.png"
    },
    {
        "id": "med0_r03_c13_061",
        "name": "Trang Phục Trung Cổ #04-14",
        "forType": "armor",
        "src": "/assets/props/items/med0_r03_c13_061.png",
        "thumbSrc": "/assets/props/thumbs/med0_r03_c13_061.png"
    },
    {
        "id": "med0_r03_c14_062",
        "name": "Trang Phục Trung Cổ #04-15",
        "forType": "armor",
        "src": "/assets/props/items/med0_r03_c14_062.png",
        "thumbSrc": "/assets/props/thumbs/med0_r03_c14_062.png"
    },
    {
        "id": "med0_r03_c15_063",
        "name": "Trang Phục Trung Cổ #04-16",
        "forType": "armor",
        "src": "/assets/props/items/med0_r03_c15_063.png",
        "thumbSrc": "/assets/props/thumbs/med0_r03_c15_063.png"
    },
    {
        "id": "med0_r04_c00_064",
        "name": "Trang Phục Trung Cổ #05-01",
        "forType": "armor",
        "src": "/assets/props/items/med0_r04_c00_064.png",
        "thumbSrc": "/assets/props/thumbs/med0_r04_c00_064.png"
    },
    {
        "id": "med0_r04_c01_065",
        "name": "Trang Phục Trung Cổ #05-02",
        "forType": "armor",
        "src": "/assets/props/items/med0_r04_c01_065.png",
        "thumbSrc": "/assets/props/thumbs/med0_r04_c01_065.png"
    },
    {
        "id": "med0_r04_c02_066",
        "name": "Trang Phục Trung Cổ #05-03",
        "forType": "armor",
        "src": "/assets/props/items/med0_r04_c02_066.png",
        "thumbSrc": "/assets/props/thumbs/med0_r04_c02_066.png"
    },
    {
        "id": "med0_r04_c03_067",
        "name": "Trang Phục Trung Cổ #05-04",
        "forType": "armor",
        "src": "/assets/props/items/med0_r04_c03_067.png",
        "thumbSrc": "/assets/props/thumbs/med0_r04_c03_067.png"
    },
    {
        "id": "med0_r04_c04_068",
        "name": "Trang Phục Trung Cổ #05-05",
        "forType": "armor",
        "src": "/assets/props/items/med0_r04_c04_068.png",
        "thumbSrc": "/assets/props/thumbs/med0_r04_c04_068.png"
    },
    {
        "id": "med0_r04_c05_069",
        "name": "Trang Phục Trung Cổ #05-06",
        "forType": "armor",
        "src": "/assets/props/items/med0_r04_c05_069.png",
        "thumbSrc": "/assets/props/thumbs/med0_r04_c05_069.png"
    },
    {
        "id": "med0_r04_c06_070",
        "name": "Trang Phục Trung Cổ #05-07",
        "forType": "armor",
        "src": "/assets/props/items/med0_r04_c06_070.png",
        "thumbSrc": "/assets/props/thumbs/med0_r04_c06_070.png"
    },
    {
        "id": "med0_r04_c07_071",
        "name": "Trang Phục Trung Cổ #05-08",
        "forType": "armor",
        "src": "/assets/props/items/med0_r04_c07_071.png",
        "thumbSrc": "/assets/props/thumbs/med0_r04_c07_071.png"
    },
    {
        "id": "med0_r04_c08_072",
        "name": "Trang Phục Trung Cổ #05-09",
        "forType": "armor",
        "src": "/assets/props/items/med0_r04_c08_072.png",
        "thumbSrc": "/assets/props/thumbs/med0_r04_c08_072.png"
    },
    {
        "id": "med0_r04_c09_073",
        "name": "Trang Phục Trung Cổ #05-10",
        "forType": "armor",
        "src": "/assets/props/items/med0_r04_c09_073.png",
        "thumbSrc": "/assets/props/thumbs/med0_r04_c09_073.png"
    },
    {
        "id": "med0_r04_c10_074",
        "name": "Trang Phục Trung Cổ #05-11",
        "forType": "armor",
        "src": "/assets/props/items/med0_r04_c10_074.png",
        "thumbSrc": "/assets/props/thumbs/med0_r04_c10_074.png"
    },
    {
        "id": "med0_r04_c11_075",
        "name": "Trang Phục Trung Cổ #05-12",
        "forType": "armor",
        "src": "/assets/props/items/med0_r04_c11_075.png",
        "thumbSrc": "/assets/props/thumbs/med0_r04_c11_075.png"
    },
    {
        "id": "med0_r04_c12_076",
        "name": "Trang Phục Trung Cổ #05-13",
        "forType": "armor",
        "src": "/assets/props/items/med0_r04_c12_076.png",
        "thumbSrc": "/assets/props/thumbs/med0_r04_c12_076.png"
    },
    {
        "id": "med0_r04_c13_077",
        "name": "Trang Phục Trung Cổ #05-14",
        "forType": "armor",
        "src": "/assets/props/items/med0_r04_c13_077.png",
        "thumbSrc": "/assets/props/thumbs/med0_r04_c13_077.png"
    },
    {
        "id": "med0_r04_c14_078",
        "name": "Trang Phục Trung Cổ #05-15",
        "forType": "armor",
        "src": "/assets/props/items/med0_r04_c14_078.png",
        "thumbSrc": "/assets/props/thumbs/med0_r04_c14_078.png"
    },
    {
        "id": "med0_r04_c15_079",
        "name": "Trang Phục Trung Cổ #05-16",
        "forType": "armor",
        "src": "/assets/props/items/med0_r04_c15_079.png",
        "thumbSrc": "/assets/props/thumbs/med0_r04_c15_079.png"
    },
    {
        "id": "med0_r05_c00_080",
        "name": "Trang Phục Trung Cổ #06-01",
        "forType": "armor",
        "src": "/assets/props/items/med0_r05_c00_080.png",
        "thumbSrc": "/assets/props/thumbs/med0_r05_c00_080.png"
    },
    {
        "id": "med0_r05_c01_081",
        "name": "Trang Phục Trung Cổ #06-02",
        "forType": "armor",
        "src": "/assets/props/items/med0_r05_c01_081.png",
        "thumbSrc": "/assets/props/thumbs/med0_r05_c01_081.png"
    },
    {
        "id": "med0_r05_c02_082",
        "name": "Trang Phục Trung Cổ #06-03",
        "forType": "armor",
        "src": "/assets/props/items/med0_r05_c02_082.png",
        "thumbSrc": "/assets/props/thumbs/med0_r05_c02_082.png"
    },
    {
        "id": "med0_r05_c03_083",
        "name": "Trang Phục Trung Cổ #06-04",
        "forType": "armor",
        "src": "/assets/props/items/med0_r05_c03_083.png",
        "thumbSrc": "/assets/props/thumbs/med0_r05_c03_083.png"
    },
    {
        "id": "med0_r05_c04_084",
        "name": "Trang Phục Trung Cổ #06-05",
        "forType": "armor",
        "src": "/assets/props/items/med0_r05_c04_084.png",
        "thumbSrc": "/assets/props/thumbs/med0_r05_c04_084.png"
    },
    {
        "id": "med0_r05_c05_085",
        "name": "Trang Phục Trung Cổ #06-06",
        "forType": "armor",
        "src": "/assets/props/items/med0_r05_c05_085.png",
        "thumbSrc": "/assets/props/thumbs/med0_r05_c05_085.png"
    },
    {
        "id": "med0_r05_c06_086",
        "name": "Trang Phục Trung Cổ #06-07",
        "forType": "armor",
        "src": "/assets/props/items/med0_r05_c06_086.png",
        "thumbSrc": "/assets/props/thumbs/med0_r05_c06_086.png"
    },
    {
        "id": "med0_r05_c07_087",
        "name": "Trang Phục Trung Cổ #06-08",
        "forType": "armor",
        "src": "/assets/props/items/med0_r05_c07_087.png",
        "thumbSrc": "/assets/props/thumbs/med0_r05_c07_087.png"
    },
    {
        "id": "med0_r05_c08_088",
        "name": "Trang Phục Trung Cổ #06-09",
        "forType": "armor",
        "src": "/assets/props/items/med0_r05_c08_088.png",
        "thumbSrc": "/assets/props/thumbs/med0_r05_c08_088.png"
    },
    {
        "id": "med0_r05_c09_089",
        "name": "Trang Phục Trung Cổ #06-10",
        "forType": "armor",
        "src": "/assets/props/items/med0_r05_c09_089.png",
        "thumbSrc": "/assets/props/thumbs/med0_r05_c09_089.png"
    },
    {
        "id": "med0_r05_c10_090",
        "name": "Trang Phục Trung Cổ #06-11",
        "forType": "armor",
        "src": "/assets/props/items/med0_r05_c10_090.png",
        "thumbSrc": "/assets/props/thumbs/med0_r05_c10_090.png"
    },
    {
        "id": "med0_r05_c11_091",
        "name": "Trang Phục Trung Cổ #06-12",
        "forType": "armor",
        "src": "/assets/props/items/med0_r05_c11_091.png",
        "thumbSrc": "/assets/props/thumbs/med0_r05_c11_091.png"
    },
    {
        "id": "med0_r05_c12_092",
        "name": "Trang Phục Trung Cổ #06-13",
        "forType": "armor",
        "src": "/assets/props/items/med0_r05_c12_092.png",
        "thumbSrc": "/assets/props/thumbs/med0_r05_c12_092.png"
    },
    {
        "id": "med0_r05_c13_093",
        "name": "Trang Phục Trung Cổ #06-14",
        "forType": "armor",
        "src": "/assets/props/items/med0_r05_c13_093.png",
        "thumbSrc": "/assets/props/thumbs/med0_r05_c13_093.png"
    },
    {
        "id": "med0_r05_c14_094",
        "name": "Trang Phục Trung Cổ #06-15",
        "forType": "armor",
        "src": "/assets/props/items/med0_r05_c14_094.png",
        "thumbSrc": "/assets/props/thumbs/med0_r05_c14_094.png"
    },
    {
        "id": "med0_r05_c15_095",
        "name": "Trang Phục Trung Cổ #06-16",
        "forType": "armor",
        "src": "/assets/props/items/med0_r05_c15_095.png",
        "thumbSrc": "/assets/props/thumbs/med0_r05_c15_095.png"
    },
    {
        "id": "med0_r06_c00_096",
        "name": "Trang Phục Trung Cổ #07-01",
        "forType": "armor",
        "src": "/assets/props/items/med0_r06_c00_096.png",
        "thumbSrc": "/assets/props/thumbs/med0_r06_c00_096.png"
    },
    {
        "id": "med0_r06_c01_097",
        "name": "Trang Phục Trung Cổ #07-02",
        "forType": "armor",
        "src": "/assets/props/items/med0_r06_c01_097.png",
        "thumbSrc": "/assets/props/thumbs/med0_r06_c01_097.png"
    },
    {
        "id": "med0_r06_c02_098",
        "name": "Trang Phục Trung Cổ #07-03",
        "forType": "armor",
        "src": "/assets/props/items/med0_r06_c02_098.png",
        "thumbSrc": "/assets/props/thumbs/med0_r06_c02_098.png"
    },
    {
        "id": "med0_r06_c03_099",
        "name": "Trang Phục Trung Cổ #07-04",
        "forType": "armor",
        "src": "/assets/props/items/med0_r06_c03_099.png",
        "thumbSrc": "/assets/props/thumbs/med0_r06_c03_099.png"
    },
    {
        "id": "med0_r06_c04_100",
        "name": "Trang Phục Trung Cổ #07-05",
        "forType": "armor",
        "src": "/assets/props/items/med0_r06_c04_100.png",
        "thumbSrc": "/assets/props/thumbs/med0_r06_c04_100.png"
    },
    {
        "id": "med0_r06_c05_101",
        "name": "Trang Phục Trung Cổ #07-06",
        "forType": "armor",
        "src": "/assets/props/items/med0_r06_c05_101.png",
        "thumbSrc": "/assets/props/thumbs/med0_r06_c05_101.png"
    },
    {
        "id": "med0_r06_c06_102",
        "name": "Trang Phục Trung Cổ #07-07",
        "forType": "armor",
        "src": "/assets/props/items/med0_r06_c06_102.png",
        "thumbSrc": "/assets/props/thumbs/med0_r06_c06_102.png"
    },
    {
        "id": "med0_r06_c07_103",
        "name": "Trang Phục Trung Cổ #07-08",
        "forType": "armor",
        "src": "/assets/props/items/med0_r06_c07_103.png",
        "thumbSrc": "/assets/props/thumbs/med0_r06_c07_103.png"
    },
    {
        "id": "med0_r06_c08_104",
        "name": "Trang Phục Trung Cổ #07-09",
        "forType": "armor",
        "src": "/assets/props/items/med0_r06_c08_104.png",
        "thumbSrc": "/assets/props/thumbs/med0_r06_c08_104.png"
    },
    {
        "id": "med0_r06_c09_105",
        "name": "Trang Phục Trung Cổ #07-10",
        "forType": "armor",
        "src": "/assets/props/items/med0_r06_c09_105.png",
        "thumbSrc": "/assets/props/thumbs/med0_r06_c09_105.png"
    },
    {
        "id": "med0_r06_c10_106",
        "name": "Trang Phục Trung Cổ #07-11",
        "forType": "armor",
        "src": "/assets/props/items/med0_r06_c10_106.png",
        "thumbSrc": "/assets/props/thumbs/med0_r06_c10_106.png"
    },
    {
        "id": "med0_r06_c11_107",
        "name": "Trang Phục Trung Cổ #07-12",
        "forType": "armor",
        "src": "/assets/props/items/med0_r06_c11_107.png",
        "thumbSrc": "/assets/props/thumbs/med0_r06_c11_107.png"
    },
    {
        "id": "med0_r06_c12_108",
        "name": "Trang Phục Trung Cổ #07-13",
        "forType": "armor",
        "src": "/assets/props/items/med0_r06_c12_108.png",
        "thumbSrc": "/assets/props/thumbs/med0_r06_c12_108.png"
    },
    {
        "id": "med0_r06_c13_109",
        "name": "Trang Phục Trung Cổ #07-14",
        "forType": "armor",
        "src": "/assets/props/items/med0_r06_c13_109.png",
        "thumbSrc": "/assets/props/thumbs/med0_r06_c13_109.png"
    },
    {
        "id": "med0_r06_c14_110",
        "name": "Trang Phục Trung Cổ #07-15",
        "forType": "armor",
        "src": "/assets/props/items/med0_r06_c14_110.png",
        "thumbSrc": "/assets/props/thumbs/med0_r06_c14_110.png"
    },
    {
        "id": "med0_r06_c15_111",
        "name": "Trang Phục Trung Cổ #07-16",
        "forType": "armor",
        "src": "/assets/props/items/med0_r06_c15_111.png",
        "thumbSrc": "/assets/props/thumbs/med0_r06_c15_111.png"
    },
    {
        "id": "med0_r07_c00_112",
        "name": "Trang Phục Trung Cổ #08-01",
        "forType": "armor",
        "src": "/assets/props/items/med0_r07_c00_112.png",
        "thumbSrc": "/assets/props/thumbs/med0_r07_c00_112.png"
    },
    {
        "id": "med0_r07_c01_113",
        "name": "Trang Phục Trung Cổ #08-02",
        "forType": "armor",
        "src": "/assets/props/items/med0_r07_c01_113.png",
        "thumbSrc": "/assets/props/thumbs/med0_r07_c01_113.png"
    },
    {
        "id": "med0_r07_c02_114",
        "name": "Trang Phục Trung Cổ #08-03",
        "forType": "armor",
        "src": "/assets/props/items/med0_r07_c02_114.png",
        "thumbSrc": "/assets/props/thumbs/med0_r07_c02_114.png"
    },
    {
        "id": "med0_r07_c03_115",
        "name": "Trang Phục Trung Cổ #08-04",
        "forType": "armor",
        "src": "/assets/props/items/med0_r07_c03_115.png",
        "thumbSrc": "/assets/props/thumbs/med0_r07_c03_115.png"
    },
    {
        "id": "med0_r07_c04_116",
        "name": "Trang Phục Trung Cổ #08-05",
        "forType": "armor",
        "src": "/assets/props/items/med0_r07_c04_116.png",
        "thumbSrc": "/assets/props/thumbs/med0_r07_c04_116.png"
    },
    {
        "id": "med0_r07_c05_117",
        "name": "Trang Phục Trung Cổ #08-06",
        "forType": "armor",
        "src": "/assets/props/items/med0_r07_c05_117.png",
        "thumbSrc": "/assets/props/thumbs/med0_r07_c05_117.png"
    },
    {
        "id": "med0_r07_c06_118",
        "name": "Trang Phục Trung Cổ #08-07",
        "forType": "armor",
        "src": "/assets/props/items/med0_r07_c06_118.png",
        "thumbSrc": "/assets/props/thumbs/med0_r07_c06_118.png"
    },
    {
        "id": "med0_r07_c07_119",
        "name": "Trang Phục Trung Cổ #08-08",
        "forType": "armor",
        "src": "/assets/props/items/med0_r07_c07_119.png",
        "thumbSrc": "/assets/props/thumbs/med0_r07_c07_119.png"
    },
    {
        "id": "med0_r07_c08_120",
        "name": "Trang Phục Trung Cổ #08-09",
        "forType": "armor",
        "src": "/assets/props/items/med0_r07_c08_120.png",
        "thumbSrc": "/assets/props/thumbs/med0_r07_c08_120.png"
    },
    {
        "id": "med0_r07_c09_121",
        "name": "Trang Phục Trung Cổ #08-10",
        "forType": "armor",
        "src": "/assets/props/items/med0_r07_c09_121.png",
        "thumbSrc": "/assets/props/thumbs/med0_r07_c09_121.png"
    },
    {
        "id": "med0_r07_c10_122",
        "name": "Trang Phục Trung Cổ #08-11",
        "forType": "armor",
        "src": "/assets/props/items/med0_r07_c10_122.png",
        "thumbSrc": "/assets/props/thumbs/med0_r07_c10_122.png"
    },
    {
        "id": "med0_r07_c11_123",
        "name": "Trang Phục Trung Cổ #08-12",
        "forType": "armor",
        "src": "/assets/props/items/med0_r07_c11_123.png",
        "thumbSrc": "/assets/props/thumbs/med0_r07_c11_123.png"
    },
    {
        "id": "med0_r07_c12_124",
        "name": "Trang Phục Trung Cổ #08-13",
        "forType": "armor",
        "src": "/assets/props/items/med0_r07_c12_124.png",
        "thumbSrc": "/assets/props/thumbs/med0_r07_c12_124.png"
    },
    {
        "id": "med0_r07_c13_125",
        "name": "Trang Phục Trung Cổ #08-14",
        "forType": "armor",
        "src": "/assets/props/items/med0_r07_c13_125.png",
        "thumbSrc": "/assets/props/thumbs/med0_r07_c13_125.png"
    },
    {
        "id": "med0_r07_c14_126",
        "name": "Trang Phục Trung Cổ #08-15",
        "forType": "armor",
        "src": "/assets/props/items/med0_r07_c14_126.png",
        "thumbSrc": "/assets/props/thumbs/med0_r07_c14_126.png"
    },
    {
        "id": "med0_r07_c15_127",
        "name": "Trang Phục Trung Cổ #08-16",
        "forType": "armor",
        "src": "/assets/props/items/med0_r07_c15_127.png",
        "thumbSrc": "/assets/props/thumbs/med0_r07_c15_127.png"
    },
    {
        "id": "med0_r08_c00_128",
        "name": "Váy & Quần Dã Chiến #09-01",
        "forType": "armor",
        "src": "/assets/props/items/med0_r08_c00_128.png",
        "thumbSrc": "/assets/props/thumbs/med0_r08_c00_128.png"
    },
    {
        "id": "med0_r08_c01_129",
        "name": "Váy & Quần Dã Chiến #09-02",
        "forType": "armor",
        "src": "/assets/props/items/med0_r08_c01_129.png",
        "thumbSrc": "/assets/props/thumbs/med0_r08_c01_129.png"
    },
    {
        "id": "med0_r08_c02_130",
        "name": "Váy & Quần Dã Chiến #09-03",
        "forType": "armor",
        "src": "/assets/props/items/med0_r08_c02_130.png",
        "thumbSrc": "/assets/props/thumbs/med0_r08_c02_130.png"
    },
    {
        "id": "med0_r08_c03_131",
        "name": "Váy & Quần Dã Chiến #09-04",
        "forType": "armor",
        "src": "/assets/props/items/med0_r08_c03_131.png",
        "thumbSrc": "/assets/props/thumbs/med0_r08_c03_131.png"
    },
    {
        "id": "med0_r08_c04_132",
        "name": "Váy & Quần Dã Chiến #09-05",
        "forType": "armor",
        "src": "/assets/props/items/med0_r08_c04_132.png",
        "thumbSrc": "/assets/props/thumbs/med0_r08_c04_132.png"
    },
    {
        "id": "med0_r08_c05_133",
        "name": "Váy & Quần Dã Chiến #09-06",
        "forType": "armor",
        "src": "/assets/props/items/med0_r08_c05_133.png",
        "thumbSrc": "/assets/props/thumbs/med0_r08_c05_133.png"
    },
    {
        "id": "med0_r08_c06_134",
        "name": "Váy & Quần Dã Chiến #09-07",
        "forType": "armor",
        "src": "/assets/props/items/med0_r08_c06_134.png",
        "thumbSrc": "/assets/props/thumbs/med0_r08_c06_134.png"
    },
    {
        "id": "med0_r08_c07_135",
        "name": "Váy & Quần Dã Chiến #09-08",
        "forType": "armor",
        "src": "/assets/props/items/med0_r08_c07_135.png",
        "thumbSrc": "/assets/props/thumbs/med0_r08_c07_135.png"
    },
    {
        "id": "med0_r08_c08_136",
        "name": "Váy & Quần Dã Chiến #09-09",
        "forType": "armor",
        "src": "/assets/props/items/med0_r08_c08_136.png",
        "thumbSrc": "/assets/props/thumbs/med0_r08_c08_136.png"
    },
    {
        "id": "med0_r08_c09_137",
        "name": "Váy & Quần Dã Chiến #09-10",
        "forType": "armor",
        "src": "/assets/props/items/med0_r08_c09_137.png",
        "thumbSrc": "/assets/props/thumbs/med0_r08_c09_137.png"
    },
    {
        "id": "med0_r08_c10_138",
        "name": "Váy & Quần Dã Chiến #09-11",
        "forType": "armor",
        "src": "/assets/props/items/med0_r08_c10_138.png",
        "thumbSrc": "/assets/props/thumbs/med0_r08_c10_138.png"
    },
    {
        "id": "med0_r08_c11_139",
        "name": "Váy & Quần Dã Chiến #09-12",
        "forType": "armor",
        "src": "/assets/props/items/med0_r08_c11_139.png",
        "thumbSrc": "/assets/props/thumbs/med0_r08_c11_139.png"
    },
    {
        "id": "med0_r08_c12_140",
        "name": "Váy & Quần Dã Chiến #09-13",
        "forType": "armor",
        "src": "/assets/props/items/med0_r08_c12_140.png",
        "thumbSrc": "/assets/props/thumbs/med0_r08_c12_140.png"
    },
    {
        "id": "med0_r08_c13_141",
        "name": "Váy & Quần Dã Chiến #09-14",
        "forType": "armor",
        "src": "/assets/props/items/med0_r08_c13_141.png",
        "thumbSrc": "/assets/props/thumbs/med0_r08_c13_141.png"
    },
    {
        "id": "med0_r08_c14_142",
        "name": "Váy & Quần Dã Chiến #09-15",
        "forType": "armor",
        "src": "/assets/props/items/med0_r08_c14_142.png",
        "thumbSrc": "/assets/props/thumbs/med0_r08_c14_142.png"
    },
    {
        "id": "med0_r08_c15_143",
        "name": "Váy & Quần Dã Chiến #09-16",
        "forType": "armor",
        "src": "/assets/props/items/med0_r08_c15_143.png",
        "thumbSrc": "/assets/props/thumbs/med0_r08_c15_143.png"
    },
    {
        "id": "med0_r08_c16_144",
        "name": "Váy & Quần Dã Chiến #09-17",
        "forType": "armor",
        "src": "/assets/props/items/med0_r08_c16_144.png",
        "thumbSrc": "/assets/props/thumbs/med0_r08_c16_144.png"
    },
    {
        "id": "med0_r09_c00_145",
        "name": "Váy & Quần Dã Chiến #10-01",
        "forType": "armor",
        "src": "/assets/props/items/med0_r09_c00_145.png",
        "thumbSrc": "/assets/props/thumbs/med0_r09_c00_145.png"
    },
    {
        "id": "med0_r09_c01_146",
        "name": "Váy & Quần Dã Chiến #10-02",
        "forType": "armor",
        "src": "/assets/props/items/med0_r09_c01_146.png",
        "thumbSrc": "/assets/props/thumbs/med0_r09_c01_146.png"
    },
    {
        "id": "med0_r09_c02_147",
        "name": "Váy & Quần Dã Chiến #10-03",
        "forType": "armor",
        "src": "/assets/props/items/med0_r09_c02_147.png",
        "thumbSrc": "/assets/props/thumbs/med0_r09_c02_147.png"
    },
    {
        "id": "med0_r09_c03_148",
        "name": "Váy & Quần Dã Chiến #10-04",
        "forType": "armor",
        "src": "/assets/props/items/med0_r09_c03_148.png",
        "thumbSrc": "/assets/props/thumbs/med0_r09_c03_148.png"
    },
    {
        "id": "med0_r09_c04_149",
        "name": "Váy & Quần Dã Chiến #10-05",
        "forType": "armor",
        "src": "/assets/props/items/med0_r09_c04_149.png",
        "thumbSrc": "/assets/props/thumbs/med0_r09_c04_149.png"
    },
    {
        "id": "med0_r09_c05_150",
        "name": "Váy & Quần Dã Chiến #10-06",
        "forType": "armor",
        "src": "/assets/props/items/med0_r09_c05_150.png",
        "thumbSrc": "/assets/props/thumbs/med0_r09_c05_150.png"
    },
    {
        "id": "med0_r09_c06_151",
        "name": "Váy & Quần Dã Chiến #10-07",
        "forType": "armor",
        "src": "/assets/props/items/med0_r09_c06_151.png",
        "thumbSrc": "/assets/props/thumbs/med0_r09_c06_151.png"
    },
    {
        "id": "med0_r09_c07_152",
        "name": "Váy & Quần Dã Chiến #10-08",
        "forType": "armor",
        "src": "/assets/props/items/med0_r09_c07_152.png",
        "thumbSrc": "/assets/props/thumbs/med0_r09_c07_152.png"
    },
    {
        "id": "med0_r09_c08_153",
        "name": "Váy & Quần Dã Chiến #10-09",
        "forType": "armor",
        "src": "/assets/props/items/med0_r09_c08_153.png",
        "thumbSrc": "/assets/props/thumbs/med0_r09_c08_153.png"
    },
    {
        "id": "med0_r09_c09_154",
        "name": "Váy & Quần Dã Chiến #10-10",
        "forType": "armor",
        "src": "/assets/props/items/med0_r09_c09_154.png",
        "thumbSrc": "/assets/props/thumbs/med0_r09_c09_154.png"
    },
    {
        "id": "med0_r09_c10_155",
        "name": "Váy & Quần Dã Chiến #10-11",
        "forType": "armor",
        "src": "/assets/props/items/med0_r09_c10_155.png",
        "thumbSrc": "/assets/props/thumbs/med0_r09_c10_155.png"
    },
    {
        "id": "med0_r09_c11_156",
        "name": "Váy & Quần Dã Chiến #10-12",
        "forType": "armor",
        "src": "/assets/props/items/med0_r09_c11_156.png",
        "thumbSrc": "/assets/props/thumbs/med0_r09_c11_156.png"
    },
    {
        "id": "med0_r09_c12_157",
        "name": "Váy & Quần Dã Chiến #10-13",
        "forType": "armor",
        "src": "/assets/props/items/med0_r09_c12_157.png",
        "thumbSrc": "/assets/props/thumbs/med0_r09_c12_157.png"
    },
    {
        "id": "med0_r09_c13_158",
        "name": "Váy & Quần Dã Chiến #10-14",
        "forType": "armor",
        "src": "/assets/props/items/med0_r09_c13_158.png",
        "thumbSrc": "/assets/props/thumbs/med0_r09_c13_158.png"
    },
    {
        "id": "med0_r09_c14_159",
        "name": "Váy & Quần Dã Chiến #10-15",
        "forType": "armor",
        "src": "/assets/props/items/med0_r09_c14_159.png",
        "thumbSrc": "/assets/props/thumbs/med0_r09_c14_159.png"
    },
    {
        "id": "med0_r09_c15_160",
        "name": "Váy & Quần Dã Chiến #10-16",
        "forType": "armor",
        "src": "/assets/props/items/med0_r09_c15_160.png",
        "thumbSrc": "/assets/props/thumbs/med0_r09_c15_160.png"
    },
    {
        "id": "med0_r09_c16_161",
        "name": "Váy & Quần Dã Chiến #10-17",
        "forType": "armor",
        "src": "/assets/props/items/med0_r09_c16_161.png",
        "thumbSrc": "/assets/props/thumbs/med0_r09_c16_161.png"
    },
    {
        "id": "surv0_r00_c00_000",
        "name": "Gỗ & Dây Thừng Sinh Tồn #01-01",
        "forType": "survival_tools",
        "src": "/assets/props/items/surv0_r00_c00_000.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r00_c00_000.png"
    },
    {
        "id": "surv0_r00_c01_001",
        "name": "Gỗ & Dây Thừng Sinh Tồn #01-02",
        "forType": "survival_tools",
        "src": "/assets/props/items/surv0_r00_c01_001.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r00_c01_001.png"
    },
    {
        "id": "surv0_r00_c02_002",
        "name": "Gỗ & Dây Thừng Sinh Tồn #01-03",
        "forType": "survival_tools",
        "src": "/assets/props/items/surv0_r00_c02_002.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r00_c02_002.png"
    },
    {
        "id": "surv0_r00_c03_003",
        "name": "Gỗ & Dây Thừng Sinh Tồn #01-04",
        "forType": "survival_tools",
        "src": "/assets/props/items/surv0_r00_c03_003.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r00_c03_003.png"
    },
    {
        "id": "surv0_r00_c04_004",
        "name": "Gỗ & Dây Thừng Sinh Tồn #01-05",
        "forType": "survival_tools",
        "src": "/assets/props/items/surv0_r00_c04_004.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r00_c04_004.png"
    },
    {
        "id": "surv0_r00_c05_005",
        "name": "Gỗ & Dây Thừng Sinh Tồn #01-06",
        "forType": "survival_tools",
        "src": "/assets/props/items/surv0_r00_c05_005.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r00_c05_005.png"
    },
    {
        "id": "surv0_r00_c06_006",
        "name": "Gỗ & Dây Thừng Sinh Tồn #01-07",
        "forType": "survival_tools",
        "src": "/assets/props/items/surv0_r00_c06_006.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r00_c06_006.png"
    },
    {
        "id": "surv0_r01_c00_007",
        "name": "Gỗ & Dây Thừng Sinh Tồn #02-01",
        "forType": "survival_tools",
        "src": "/assets/props/items/surv0_r01_c00_007.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r01_c00_007.png"
    },
    {
        "id": "surv0_r01_c01_008",
        "name": "Gỗ & Dây Thừng Sinh Tồn #02-02",
        "forType": "survival_tools",
        "src": "/assets/props/items/surv0_r01_c01_008.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r01_c01_008.png"
    },
    {
        "id": "surv0_r01_c02_009",
        "name": "Gỗ & Dây Thừng Sinh Tồn #02-03",
        "forType": "survival_tools",
        "src": "/assets/props/items/surv0_r01_c02_009.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r01_c02_009.png"
    },
    {
        "id": "surv0_r01_c03_010",
        "name": "Gỗ & Dây Thừng Sinh Tồn #02-04",
        "forType": "survival_tools",
        "src": "/assets/props/items/surv0_r01_c03_010.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r01_c03_010.png"
    },
    {
        "id": "surv0_r01_c04_011",
        "name": "Gỗ & Dây Thừng Sinh Tồn #02-05",
        "forType": "survival_tools",
        "src": "/assets/props/items/surv0_r01_c04_011.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r01_c04_011.png"
    },
    {
        "id": "surv0_r01_c05_012",
        "name": "Gỗ & Dây Thừng Sinh Tồn #02-06",
        "forType": "survival_tools",
        "src": "/assets/props/items/surv0_r01_c05_012.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r01_c05_012.png"
    },
    {
        "id": "surv0_r01_c06_013",
        "name": "Gỗ & Dây Thừng Sinh Tồn #02-07",
        "forType": "survival_tools",
        "src": "/assets/props/items/surv0_r01_c06_013.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r01_c06_013.png"
    },
    {
        "id": "surv0_r01_c07_014",
        "name": "Gỗ & Dây Thừng Sinh Tồn #02-08",
        "forType": "survival_tools",
        "src": "/assets/props/items/surv0_r01_c07_014.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r01_c07_014.png"
    },
    {
        "id": "surv0_r02_c00_015",
        "name": "Gỗ & Dây Thừng Sinh Tồn #03-01",
        "forType": "survival_tools",
        "src": "/assets/props/items/surv0_r02_c00_015.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r02_c00_015.png"
    },
    {
        "id": "surv0_r02_c01_016",
        "name": "Gỗ & Dây Thừng Sinh Tồn #03-02",
        "forType": "survival_tools",
        "src": "/assets/props/items/surv0_r02_c01_016.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r02_c01_016.png"
    },
    {
        "id": "surv0_r02_c02_017",
        "name": "Gỗ & Dây Thừng Sinh Tồn #03-03",
        "forType": "survival_tools",
        "src": "/assets/props/items/surv0_r02_c02_017.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r02_c02_017.png"
    },
    {
        "id": "surv0_r02_c03_018",
        "name": "Gỗ & Dây Thừng Sinh Tồn #03-04",
        "forType": "survival_tools",
        "src": "/assets/props/items/surv0_r02_c03_018.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r02_c03_018.png"
    },
    {
        "id": "surv0_r02_c04_019",
        "name": "Gỗ & Dây Thừng Sinh Tồn #03-05",
        "forType": "survival_tools",
        "src": "/assets/props/items/surv0_r02_c04_019.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r02_c04_019.png"
    },
    {
        "id": "surv0_r02_c05_020",
        "name": "Gỗ & Dây Thừng Sinh Tồn #03-06",
        "forType": "survival_tools",
        "src": "/assets/props/items/surv0_r02_c05_020.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r02_c05_020.png"
    },
    {
        "id": "surv0_r02_c06_021",
        "name": "Gỗ & Dây Thừng Sinh Tồn #03-07",
        "forType": "survival_tools",
        "src": "/assets/props/items/surv0_r02_c06_021.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r02_c06_021.png"
    },
    {
        "id": "surv0_r03_c00_022",
        "name": "Lương Thực Dã Ngoại #04-01",
        "forType": "provisions",
        "src": "/assets/props/items/surv0_r03_c00_022.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r03_c00_022.png"
    },
    {
        "id": "surv0_r03_c01_023",
        "name": "Lương Thực Dã Ngoại #04-02",
        "forType": "provisions",
        "src": "/assets/props/items/surv0_r03_c01_023.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r03_c01_023.png"
    },
    {
        "id": "surv0_r03_c02_024",
        "name": "Lương Thực Dã Ngoại #04-03",
        "forType": "provisions",
        "src": "/assets/props/items/surv0_r03_c02_024.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r03_c02_024.png"
    },
    {
        "id": "surv0_r03_c03_025",
        "name": "Lương Thực Dã Ngoại #04-04",
        "forType": "provisions",
        "src": "/assets/props/items/surv0_r03_c03_025.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r03_c03_025.png"
    },
    {
        "id": "surv0_r03_c04_026",
        "name": "Lương Thực Dã Ngoại #04-05",
        "forType": "provisions",
        "src": "/assets/props/items/surv0_r03_c04_026.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r03_c04_026.png"
    },
    {
        "id": "surv0_r03_c05_027",
        "name": "Lương Thực Dã Ngoại #04-06",
        "forType": "provisions",
        "src": "/assets/props/items/surv0_r03_c05_027.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r03_c05_027.png"
    },
    {
        "id": "surv0_r03_c06_028",
        "name": "Lương Thực Dã Ngoại #04-07",
        "forType": "provisions",
        "src": "/assets/props/items/surv0_r03_c06_028.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r03_c06_028.png"
    },
    {
        "id": "surv0_r04_c00_029",
        "name": "Lương Thực Dã Ngoại #05-01",
        "forType": "provisions",
        "src": "/assets/props/items/surv0_r04_c00_029.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r04_c00_029.png"
    },
    {
        "id": "surv0_r04_c01_030",
        "name": "Lương Thực Dã Ngoại #05-02",
        "forType": "provisions",
        "src": "/assets/props/items/surv0_r04_c01_030.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r04_c01_030.png"
    },
    {
        "id": "surv0_r04_c02_031",
        "name": "Lương Thực Dã Ngoại #05-03",
        "forType": "provisions",
        "src": "/assets/props/items/surv0_r04_c02_031.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r04_c02_031.png"
    },
    {
        "id": "surv0_r04_c03_032",
        "name": "Lương Thực Dã Ngoại #05-04",
        "forType": "provisions",
        "src": "/assets/props/items/surv0_r04_c03_032.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r04_c03_032.png"
    },
    {
        "id": "surv0_r04_c04_033",
        "name": "Lương Thực Dã Ngoại #05-05",
        "forType": "provisions",
        "src": "/assets/props/items/surv0_r04_c04_033.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r04_c04_033.png"
    },
    {
        "id": "surv0_r04_c05_034",
        "name": "Lương Thực Dã Ngoại #05-06",
        "forType": "provisions",
        "src": "/assets/props/items/surv0_r04_c05_034.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r04_c05_034.png"
    },
    {
        "id": "surv0_r04_c06_035",
        "name": "Lương Thực Dã Ngoại #05-07",
        "forType": "provisions",
        "src": "/assets/props/items/surv0_r04_c06_035.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r04_c06_035.png"
    },
    {
        "id": "surv0_r05_c00_036",
        "name": "Trại & Lửa Sinh Tồn #06-01",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/surv0_r05_c00_036.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r05_c00_036.png"
    },
    {
        "id": "surv0_r05_c01_037",
        "name": "Trại & Lửa Sinh Tồn #06-02",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/surv0_r05_c01_037.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r05_c01_037.png"
    },
    {
        "id": "surv0_r05_c02_038",
        "name": "Trại & Lửa Sinh Tồn #06-03",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/surv0_r05_c02_038.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r05_c02_038.png"
    },
    {
        "id": "surv0_r05_c03_039",
        "name": "Trại & Lửa Sinh Tồn #06-04",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/surv0_r05_c03_039.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r05_c03_039.png"
    },
    {
        "id": "surv0_r06_c00_040",
        "name": "Trại & Lửa Sinh Tồn #07-01",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/surv0_r06_c00_040.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r06_c00_040.png"
    },
    {
        "id": "surv0_r06_c01_041",
        "name": "Trại & Lửa Sinh Tồn #07-02",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/surv0_r06_c01_041.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r06_c01_041.png"
    },
    {
        "id": "surv0_r06_c02_042",
        "name": "Trại & Lửa Sinh Tồn #07-03",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/surv0_r06_c02_042.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r06_c02_042.png"
    },
    {
        "id": "surv0_r06_c03_043",
        "name": "Trại & Lửa Sinh Tồn #07-04",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/surv0_r06_c03_043.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r06_c03_043.png"
    },
    {
        "id": "surv0_r06_c04_044",
        "name": "Trại & Lửa Sinh Tồn #07-05",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/surv0_r06_c04_044.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r06_c04_044.png"
    },
    {
        "id": "surv0_r06_c05_045",
        "name": "Trại & Lửa Sinh Tồn #07-06",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/surv0_r06_c05_045.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r06_c05_045.png"
    },
    {
        "id": "surv0_r06_c06_046",
        "name": "Trại & Lửa Sinh Tồn #07-07",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/surv0_r06_c06_046.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r06_c06_046.png"
    },
    {
        "id": "surv0_r06_c07_047",
        "name": "Trại & Lửa Sinh Tồn #07-08",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/surv0_r06_c07_047.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r06_c07_047.png"
    },
    {
        "id": "surv0_r07_c00_048",
        "name": "Công Cụ Đốn Chặt #08-01",
        "forType": "survival_tools",
        "src": "/assets/props/items/surv0_r07_c00_048.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r07_c00_048.png"
    },
    {
        "id": "surv0_r07_c01_049",
        "name": "Công Cụ Đốn Chặt #08-02",
        "forType": "survival_tools",
        "src": "/assets/props/items/surv0_r07_c01_049.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r07_c01_049.png"
    },
    {
        "id": "surv0_r07_c02_050",
        "name": "Công Cụ Đốn Chặt #08-03",
        "forType": "survival_tools",
        "src": "/assets/props/items/surv0_r07_c02_050.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r07_c02_050.png"
    },
    {
        "id": "surv0_r07_c03_051",
        "name": "Công Cụ Đốn Chặt #08-04",
        "forType": "survival_tools",
        "src": "/assets/props/items/surv0_r07_c03_051.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r07_c03_051.png"
    },
    {
        "id": "surv0_r07_c04_052",
        "name": "Công Cụ Đốn Chặt #08-05",
        "forType": "survival_tools",
        "src": "/assets/props/items/surv0_r07_c04_052.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r07_c04_052.png"
    },
    {
        "id": "surv0_r07_c05_053",
        "name": "Công Cụ Đốn Chặt #08-06",
        "forType": "survival_tools",
        "src": "/assets/props/items/surv0_r07_c05_053.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r07_c05_053.png"
    },
    {
        "id": "surv0_r07_c06_054",
        "name": "Công Cụ Đốn Chặt #08-07",
        "forType": "survival_tools",
        "src": "/assets/props/items/surv0_r07_c06_054.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r07_c06_054.png"
    },
    {
        "id": "surv0_r07_c07_055",
        "name": "Công Cụ Đốn Chặt #08-08",
        "forType": "survival_tools",
        "src": "/assets/props/items/surv0_r07_c07_055.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r07_c07_055.png"
    },
    {
        "id": "surv0_r07_c08_056",
        "name": "Công Cụ Đốn Chặt #08-09",
        "forType": "survival_tools",
        "src": "/assets/props/items/surv0_r07_c08_056.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r07_c08_056.png"
    },
    {
        "id": "surv0_r07_c09_057",
        "name": "Công Cụ Đốn Chặt #08-10",
        "forType": "survival_tools",
        "src": "/assets/props/items/surv0_r07_c09_057.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r07_c09_057.png"
    },
    {
        "id": "surv0_r08_c00_058",
        "name": "Công Cụ Đốn Chặt #09-01",
        "forType": "survival_tools",
        "src": "/assets/props/items/surv0_r08_c00_058.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r08_c00_058.png"
    },
    {
        "id": "surv0_r08_c01_059",
        "name": "Công Cụ Đốn Chặt #09-02",
        "forType": "survival_tools",
        "src": "/assets/props/items/surv0_r08_c01_059.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r08_c01_059.png"
    },
    {
        "id": "surv0_r08_c02_060",
        "name": "Công Cụ Đốn Chặt #09-03",
        "forType": "survival_tools",
        "src": "/assets/props/items/surv0_r08_c02_060.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r08_c02_060.png"
    },
    {
        "id": "surv0_r08_c03_061",
        "name": "Công Cụ Đốn Chặt #09-04",
        "forType": "survival_tools",
        "src": "/assets/props/items/surv0_r08_c03_061.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r08_c03_061.png"
    },
    {
        "id": "surv0_r08_c04_062",
        "name": "Công Cụ Đốn Chặt #09-05",
        "forType": "survival_tools",
        "src": "/assets/props/items/surv0_r08_c04_062.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r08_c04_062.png"
    },
    {
        "id": "surv0_r08_c05_063",
        "name": "Công Cụ Đốn Chặt #09-06",
        "forType": "survival_tools",
        "src": "/assets/props/items/surv0_r08_c05_063.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r08_c05_063.png"
    },
    {
        "id": "surv0_r08_c06_064",
        "name": "Công Cụ Đốn Chặt #09-07",
        "forType": "survival_tools",
        "src": "/assets/props/items/surv0_r08_c06_064.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r08_c06_064.png"
    },
    {
        "id": "surv0_r08_c07_065",
        "name": "Công Cụ Đốn Chặt #09-08",
        "forType": "survival_tools",
        "src": "/assets/props/items/surv0_r08_c07_065.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r08_c07_065.png"
    },
    {
        "id": "surv0_r08_c08_066",
        "name": "Công Cụ Đốn Chặt #09-09",
        "forType": "survival_tools",
        "src": "/assets/props/items/surv0_r08_c08_066.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r08_c08_066.png"
    },
    {
        "id": "surv0_r09_c00_067",
        "name": "Dược Phẩm Dã Chiến #10-01",
        "forType": "alchemy",
        "src": "/assets/props/items/surv0_r09_c00_067.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r09_c00_067.png"
    },
    {
        "id": "surv0_r09_c01_068",
        "name": "Dược Phẩm Dã Chiến #10-02",
        "forType": "alchemy",
        "src": "/assets/props/items/surv0_r09_c01_068.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r09_c01_068.png"
    },
    {
        "id": "surv0_r09_c02_069",
        "name": "Dược Phẩm Dã Chiến #10-03",
        "forType": "alchemy",
        "src": "/assets/props/items/surv0_r09_c02_069.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r09_c02_069.png"
    },
    {
        "id": "surv0_r09_c03_070",
        "name": "Dược Phẩm Dã Chiến #10-04",
        "forType": "alchemy",
        "src": "/assets/props/items/surv0_r09_c03_070.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r09_c03_070.png"
    },
    {
        "id": "surv0_r09_c04_071",
        "name": "Dược Phẩm Dã Chiến #10-05",
        "forType": "alchemy",
        "src": "/assets/props/items/surv0_r09_c04_071.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r09_c04_071.png"
    },
    {
        "id": "surv0_r09_c05_072",
        "name": "Dược Phẩm Dã Chiến #10-06",
        "forType": "alchemy",
        "src": "/assets/props/items/surv0_r09_c05_072.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r09_c05_072.png"
    },
    {
        "id": "surv0_r09_c06_073",
        "name": "Dược Phẩm Dã Chiến #10-07",
        "forType": "alchemy",
        "src": "/assets/props/items/surv0_r09_c06_073.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r09_c06_073.png"
    },
    {
        "id": "surv0_r09_c07_074",
        "name": "Dược Phẩm Dã Chiến #10-08",
        "forType": "alchemy",
        "src": "/assets/props/items/surv0_r09_c07_074.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r09_c07_074.png"
    },
    {
        "id": "surv0_r09_c08_075",
        "name": "Dược Phẩm Dã Chiến #10-09",
        "forType": "alchemy",
        "src": "/assets/props/items/surv0_r09_c08_075.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r09_c08_075.png"
    },
    {
        "id": "surv0_r09_c09_076",
        "name": "Dược Phẩm Dã Chiến #10-10",
        "forType": "alchemy",
        "src": "/assets/props/items/surv0_r09_c09_076.png",
        "thumbSrc": "/assets/props/thumbs/surv0_r09_c09_076.png"
    },
    {
        "id": "surv1_r00_c00_000",
        "name": "Khoáng Sản & Quặng Đá #01-01",
        "forType": "gems_loot",
        "src": "/assets/props/items/surv1_r00_c00_000.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r00_c00_000.png"
    },
    {
        "id": "surv1_r00_c01_001",
        "name": "Khoáng Sản & Quặng Đá #01-02",
        "forType": "gems_loot",
        "src": "/assets/props/items/surv1_r00_c01_001.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r00_c01_001.png"
    },
    {
        "id": "surv1_r00_c02_002",
        "name": "Khoáng Sản & Quặng Đá #01-03",
        "forType": "gems_loot",
        "src": "/assets/props/items/surv1_r00_c02_002.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r00_c02_002.png"
    },
    {
        "id": "surv1_r00_c03_003",
        "name": "Khoáng Sản & Quặng Đá #01-04",
        "forType": "gems_loot",
        "src": "/assets/props/items/surv1_r00_c03_003.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r00_c03_003.png"
    },
    {
        "id": "surv1_r00_c04_004",
        "name": "Khoáng Sản & Quặng Đá #01-05",
        "forType": "gems_loot",
        "src": "/assets/props/items/surv1_r00_c04_004.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r00_c04_004.png"
    },
    {
        "id": "surv1_r00_c05_005",
        "name": "Khoáng Sản & Quặng Đá #01-06",
        "forType": "gems_loot",
        "src": "/assets/props/items/surv1_r00_c05_005.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r00_c05_005.png"
    },
    {
        "id": "surv1_r01_c00_006",
        "name": "Khoáng Sản & Quặng Đá #02-01",
        "forType": "gems_loot",
        "src": "/assets/props/items/surv1_r01_c00_006.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r01_c00_006.png"
    },
    {
        "id": "surv1_r01_c01_007",
        "name": "Khoáng Sản & Quặng Đá #02-02",
        "forType": "gems_loot",
        "src": "/assets/props/items/surv1_r01_c01_007.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r01_c01_007.png"
    },
    {
        "id": "surv1_r01_c02_008",
        "name": "Khoáng Sản & Quặng Đá #02-03",
        "forType": "gems_loot",
        "src": "/assets/props/items/surv1_r01_c02_008.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r01_c02_008.png"
    },
    {
        "id": "surv1_r01_c03_009",
        "name": "Khoáng Sản & Quặng Đá #02-04",
        "forType": "gems_loot",
        "src": "/assets/props/items/surv1_r01_c03_009.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r01_c03_009.png"
    },
    {
        "id": "surv1_r01_c04_010",
        "name": "Khoáng Sản & Quặng Đá #02-05",
        "forType": "gems_loot",
        "src": "/assets/props/items/surv1_r01_c04_010.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r01_c04_010.png"
    },
    {
        "id": "surv1_r01_c05_011",
        "name": "Khoáng Sản & Quặng Đá #02-06",
        "forType": "gems_loot",
        "src": "/assets/props/items/surv1_r01_c05_011.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r01_c05_011.png"
    },
    {
        "id": "surv1_r01_c06_012",
        "name": "Khoáng Sản & Quặng Đá #02-07",
        "forType": "gems_loot",
        "src": "/assets/props/items/surv1_r01_c06_012.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r01_c06_012.png"
    },
    {
        "id": "surv1_r01_c07_013",
        "name": "Khoáng Sản & Quặng Đá #02-08",
        "forType": "gems_loot",
        "src": "/assets/props/items/surv1_r01_c07_013.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r01_c07_013.png"
    },
    {
        "id": "surv1_r02_c00_014",
        "name": "Khoáng Sản & Quặng Đá #03-01",
        "forType": "gems_loot",
        "src": "/assets/props/items/surv1_r02_c00_014.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r02_c00_014.png"
    },
    {
        "id": "surv1_r02_c01_015",
        "name": "Khoáng Sản & Quặng Đá #03-02",
        "forType": "gems_loot",
        "src": "/assets/props/items/surv1_r02_c01_015.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r02_c01_015.png"
    },
    {
        "id": "surv1_r02_c02_016",
        "name": "Khoáng Sản & Quặng Đá #03-03",
        "forType": "gems_loot",
        "src": "/assets/props/items/surv1_r02_c02_016.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r02_c02_016.png"
    },
    {
        "id": "surv1_r02_c03_017",
        "name": "Khoáng Sản & Quặng Đá #03-04",
        "forType": "gems_loot",
        "src": "/assets/props/items/surv1_r02_c03_017.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r02_c03_017.png"
    },
    {
        "id": "surv1_r02_c04_018",
        "name": "Khoáng Sản & Quặng Đá #03-05",
        "forType": "gems_loot",
        "src": "/assets/props/items/surv1_r02_c04_018.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r02_c04_018.png"
    },
    {
        "id": "surv1_r02_c05_019",
        "name": "Khoáng Sản & Quặng Đá #03-06",
        "forType": "gems_loot",
        "src": "/assets/props/items/surv1_r02_c05_019.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r02_c05_019.png"
    },
    {
        "id": "surv1_r02_c06_020",
        "name": "Khoáng Sản & Quặng Đá #03-07",
        "forType": "gems_loot",
        "src": "/assets/props/items/surv1_r02_c06_020.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r02_c06_020.png"
    },
    {
        "id": "surv1_r02_c07_021",
        "name": "Khoáng Sản & Quặng Đá #03-08",
        "forType": "gems_loot",
        "src": "/assets/props/items/surv1_r02_c07_021.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r02_c07_021.png"
    },
    {
        "id": "surv1_r02_c08_022",
        "name": "Khoáng Sản & Quặng Đá #03-09",
        "forType": "gems_loot",
        "src": "/assets/props/items/surv1_r02_c08_022.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r02_c08_022.png"
    },
    {
        "id": "surv1_r03_c00_023",
        "name": "Khoáng Sản & Quặng Đá #04-01",
        "forType": "gems_loot",
        "src": "/assets/props/items/surv1_r03_c00_023.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r03_c00_023.png"
    },
    {
        "id": "surv1_r03_c01_024",
        "name": "Khoáng Sản & Quặng Đá #04-02",
        "forType": "gems_loot",
        "src": "/assets/props/items/surv1_r03_c01_024.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r03_c01_024.png"
    },
    {
        "id": "surv1_r03_c02_025",
        "name": "Khoáng Sản & Quặng Đá #04-03",
        "forType": "gems_loot",
        "src": "/assets/props/items/surv1_r03_c02_025.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r03_c02_025.png"
    },
    {
        "id": "surv1_r03_c03_026",
        "name": "Khoáng Sản & Quặng Đá #04-04",
        "forType": "gems_loot",
        "src": "/assets/props/items/surv1_r03_c03_026.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r03_c03_026.png"
    },
    {
        "id": "surv1_r03_c04_027",
        "name": "Khoáng Sản & Quặng Đá #04-05",
        "forType": "gems_loot",
        "src": "/assets/props/items/surv1_r03_c04_027.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r03_c04_027.png"
    },
    {
        "id": "surv1_r03_c05_028",
        "name": "Khoáng Sản & Quặng Đá #04-06",
        "forType": "gems_loot",
        "src": "/assets/props/items/surv1_r03_c05_028.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r03_c05_028.png"
    },
    {
        "id": "surv1_r03_c06_029",
        "name": "Khoáng Sản & Quặng Đá #04-07",
        "forType": "gems_loot",
        "src": "/assets/props/items/surv1_r03_c06_029.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r03_c06_029.png"
    },
    {
        "id": "surv1_r03_c07_030",
        "name": "Khoáng Sản & Quặng Đá #04-08",
        "forType": "gems_loot",
        "src": "/assets/props/items/surv1_r03_c07_030.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r03_c07_030.png"
    },
    {
        "id": "surv1_r03_c08_031",
        "name": "Khoáng Sản & Quặng Đá #04-09",
        "forType": "gems_loot",
        "src": "/assets/props/items/surv1_r03_c08_031.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r03_c08_031.png"
    },
    {
        "id": "surv1_r04_c00_032",
        "name": "Thịt Rừng & Món Nấu #05-01",
        "forType": "provisions",
        "src": "/assets/props/items/surv1_r04_c00_032.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r04_c00_032.png"
    },
    {
        "id": "surv1_r04_c01_033",
        "name": "Thịt Rừng & Món Nấu #05-02",
        "forType": "provisions",
        "src": "/assets/props/items/surv1_r04_c01_033.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r04_c01_033.png"
    },
    {
        "id": "surv1_r04_c02_034",
        "name": "Thịt Rừng & Món Nấu #05-03",
        "forType": "provisions",
        "src": "/assets/props/items/surv1_r04_c02_034.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r04_c02_034.png"
    },
    {
        "id": "surv1_r04_c03_035",
        "name": "Thịt Rừng & Món Nấu #05-04",
        "forType": "provisions",
        "src": "/assets/props/items/surv1_r04_c03_035.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r04_c03_035.png"
    },
    {
        "id": "surv1_r04_c04_036",
        "name": "Thịt Rừng & Món Nấu #05-05",
        "forType": "provisions",
        "src": "/assets/props/items/surv1_r04_c04_036.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r04_c04_036.png"
    },
    {
        "id": "surv1_r04_c05_037",
        "name": "Thịt Rừng & Món Nấu #05-06",
        "forType": "provisions",
        "src": "/assets/props/items/surv1_r04_c05_037.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r04_c05_037.png"
    },
    {
        "id": "surv1_r05_c00_038",
        "name": "Thịt Rừng & Món Nấu #06-01",
        "forType": "provisions",
        "src": "/assets/props/items/surv1_r05_c00_038.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r05_c00_038.png"
    },
    {
        "id": "surv1_r05_c01_039",
        "name": "Thịt Rừng & Món Nấu #06-02",
        "forType": "provisions",
        "src": "/assets/props/items/surv1_r05_c01_039.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r05_c01_039.png"
    },
    {
        "id": "surv1_r05_c02_040",
        "name": "Thịt Rừng & Món Nấu #06-03",
        "forType": "provisions",
        "src": "/assets/props/items/surv1_r05_c02_040.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r05_c02_040.png"
    },
    {
        "id": "surv1_r05_c03_041",
        "name": "Thịt Rừng & Món Nấu #06-04",
        "forType": "provisions",
        "src": "/assets/props/items/surv1_r05_c03_041.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r05_c03_041.png"
    },
    {
        "id": "surv1_r05_c04_042",
        "name": "Thịt Rừng & Món Nấu #06-05",
        "forType": "provisions",
        "src": "/assets/props/items/surv1_r05_c04_042.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r05_c04_042.png"
    },
    {
        "id": "surv1_r05_c05_043",
        "name": "Thịt Rừng & Món Nấu #06-06",
        "forType": "provisions",
        "src": "/assets/props/items/surv1_r05_c05_043.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r05_c05_043.png"
    },
    {
        "id": "surv1_r05_c06_044",
        "name": "Thịt Rừng & Món Nấu #06-07",
        "forType": "provisions",
        "src": "/assets/props/items/surv1_r05_c06_044.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r05_c06_044.png"
    },
    {
        "id": "surv1_r05_c07_045",
        "name": "Thịt Rừng & Món Nấu #06-08",
        "forType": "provisions",
        "src": "/assets/props/items/surv1_r05_c07_045.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r05_c07_045.png"
    },
    {
        "id": "surv1_r05_c08_046",
        "name": "Thịt Rừng & Món Nấu #06-09",
        "forType": "provisions",
        "src": "/assets/props/items/surv1_r05_c08_046.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r05_c08_046.png"
    },
    {
        "id": "surv1_r06_c00_047",
        "name": "Thịt Rừng & Món Nấu #07-01",
        "forType": "provisions",
        "src": "/assets/props/items/surv1_r06_c00_047.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r06_c00_047.png"
    },
    {
        "id": "surv1_r06_c01_048",
        "name": "Thịt Rừng & Món Nấu #07-02",
        "forType": "provisions",
        "src": "/assets/props/items/surv1_r06_c01_048.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r06_c01_048.png"
    },
    {
        "id": "surv1_r06_c02_049",
        "name": "Thịt Rừng & Món Nấu #07-03",
        "forType": "provisions",
        "src": "/assets/props/items/surv1_r06_c02_049.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r06_c02_049.png"
    },
    {
        "id": "surv1_r06_c03_050",
        "name": "Thịt Rừng & Món Nấu #07-04",
        "forType": "provisions",
        "src": "/assets/props/items/surv1_r06_c03_050.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r06_c03_050.png"
    },
    {
        "id": "surv1_r06_c04_051",
        "name": "Thịt Rừng & Món Nấu #07-05",
        "forType": "provisions",
        "src": "/assets/props/items/surv1_r06_c04_051.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r06_c04_051.png"
    },
    {
        "id": "surv1_r06_c05_052",
        "name": "Thịt Rừng & Món Nấu #07-06",
        "forType": "provisions",
        "src": "/assets/props/items/surv1_r06_c05_052.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r06_c05_052.png"
    },
    {
        "id": "surv1_r06_c06_053",
        "name": "Thịt Rừng & Món Nấu #07-07",
        "forType": "provisions",
        "src": "/assets/props/items/surv1_r06_c06_053.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r06_c06_053.png"
    },
    {
        "id": "surv1_r06_c07_054",
        "name": "Thịt Rừng & Món Nấu #07-08",
        "forType": "provisions",
        "src": "/assets/props/items/surv1_r06_c07_054.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r06_c07_054.png"
    },
    {
        "id": "surv1_r07_c00_055",
        "name": "Nồi Nấu & Lửa Trại #08-01",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/surv1_r07_c00_055.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r07_c00_055.png"
    },
    {
        "id": "surv1_r07_c01_056",
        "name": "Nồi Nấu & Lửa Trại #08-02",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/surv1_r07_c01_056.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r07_c01_056.png"
    },
    {
        "id": "surv1_r07_c02_057",
        "name": "Nồi Nấu & Lửa Trại #08-03",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/surv1_r07_c02_057.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r07_c02_057.png"
    },
    {
        "id": "surv1_r07_c03_058",
        "name": "Nồi Nấu & Lửa Trại #08-04",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/surv1_r07_c03_058.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r07_c03_058.png"
    },
    {
        "id": "surv1_r07_c04_059",
        "name": "Nồi Nấu & Lửa Trại #08-05",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/surv1_r07_c04_059.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r07_c04_059.png"
    },
    {
        "id": "surv1_r07_c05_060",
        "name": "Nồi Nấu & Lửa Trại #08-06",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/surv1_r07_c05_060.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r07_c05_060.png"
    },
    {
        "id": "surv1_r07_c06_061",
        "name": "Nồi Nấu & Lửa Trại #08-07",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/surv1_r07_c06_061.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r07_c06_061.png"
    },
    {
        "id": "surv1_r07_c07_062",
        "name": "Nồi Nấu & Lửa Trại #08-08",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/surv1_r07_c07_062.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r07_c07_062.png"
    },
    {
        "id": "surv1_r08_c00_063",
        "name": "Nồi Nấu & Lửa Trại #09-01",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/surv1_r08_c00_063.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r08_c00_063.png"
    },
    {
        "id": "surv1_r08_c01_064",
        "name": "Nồi Nấu & Lửa Trại #09-02",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/surv1_r08_c01_064.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r08_c01_064.png"
    },
    {
        "id": "surv1_r08_c02_065",
        "name": "Nồi Nấu & Lửa Trại #09-03",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/surv1_r08_c02_065.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r08_c02_065.png"
    },
    {
        "id": "surv1_r08_c03_066",
        "name": "Nồi Nấu & Lửa Trại #09-04",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/surv1_r08_c03_066.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r08_c03_066.png"
    },
    {
        "id": "surv1_r08_c04_067",
        "name": "Nồi Nấu & Lửa Trại #09-05",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/surv1_r08_c04_067.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r08_c04_067.png"
    },
    {
        "id": "surv1_r08_c05_068",
        "name": "Nồi Nấu & Lửa Trại #09-06",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/surv1_r08_c05_068.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r08_c05_068.png"
    },
    {
        "id": "surv1_r08_c06_069",
        "name": "Nồi Nấu & Lửa Trại #09-07",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/surv1_r08_c06_069.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r08_c06_069.png"
    },
    {
        "id": "surv1_r08_c07_070",
        "name": "Nồi Nấu & Lửa Trại #09-08",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/surv1_r08_c07_070.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r08_c07_070.png"
    },
    {
        "id": "surv1_r09_c00_071",
        "name": "Nồi Nấu & Lửa Trại #10-01",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/surv1_r09_c00_071.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r09_c00_071.png"
    },
    {
        "id": "surv1_r09_c01_072",
        "name": "Nồi Nấu & Lửa Trại #10-02",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/surv1_r09_c01_072.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r09_c01_072.png"
    },
    {
        "id": "surv1_r09_c02_073",
        "name": "Nồi Nấu & Lửa Trại #10-03",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/surv1_r09_c02_073.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r09_c02_073.png"
    },
    {
        "id": "surv1_r09_c03_074",
        "name": "Nồi Nấu & Lửa Trại #10-04",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/surv1_r09_c03_074.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r09_c03_074.png"
    },
    {
        "id": "surv1_r09_c04_075",
        "name": "Nồi Nấu & Lửa Trại #10-05",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/surv1_r09_c04_075.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r09_c04_075.png"
    },
    {
        "id": "surv1_r09_c05_076",
        "name": "Nồi Nấu & Lửa Trại #10-06",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/surv1_r09_c05_076.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r09_c05_076.png"
    },
    {
        "id": "surv1_r09_c06_077",
        "name": "Nồi Nấu & Lửa Trại #10-07",
        "forType": "chests_mechanisms",
        "src": "/assets/props/items/surv1_r09_c06_077.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r09_c06_077.png"
    },
    {
        "id": "surv1_r10_c00_078",
        "name": "Đồ Nghề Sinh Tồn #11-01",
        "forType": "survival_tools",
        "src": "/assets/props/items/surv1_r10_c00_078.png",
        "thumbSrc": "/assets/props/thumbs/surv1_r10_c00_078.png"
    },
    {
        "id": "surv2_r00_c00_000",
        "name": "Thỏi Kim Loại & Vải Cuộn #01-01",
        "forType": "gems_loot",
        "src": "/assets/props/items/surv2_r00_c00_000.png",
        "thumbSrc": "/assets/props/thumbs/surv2_r00_c00_000.png"
    },
    {
        "id": "surv2_r01_c00_001",
        "name": "Thỏi Kim Loại & Vải Cuộn #02-01",
        "forType": "gems_loot",
        "src": "/assets/props/items/surv2_r01_c00_001.png",
        "thumbSrc": "/assets/props/thumbs/surv2_r01_c00_001.png"
    },
    {
        "id": "surv2_r01_c01_002",
        "name": "Thỏi Kim Loại & Vải Cuộn #02-02",
        "forType": "gems_loot",
        "src": "/assets/props/items/surv2_r01_c01_002.png",
        "thumbSrc": "/assets/props/thumbs/surv2_r01_c01_002.png"
    },
    {
        "id": "surv2_r01_c02_003",
        "name": "Thỏi Kim Loại & Vải Cuộn #02-03",
        "forType": "gems_loot",
        "src": "/assets/props/items/surv2_r01_c02_003.png",
        "thumbSrc": "/assets/props/thumbs/surv2_r01_c02_003.png"
    },
    {
        "id": "surv2_r01_c03_004",
        "name": "Thỏi Kim Loại & Vải Cuộn #02-04",
        "forType": "gems_loot",
        "src": "/assets/props/items/surv2_r01_c03_004.png",
        "thumbSrc": "/assets/props/thumbs/surv2_r01_c03_004.png"
    },
    {
        "id": "surv2_r01_c04_005",
        "name": "Thỏi Kim Loại & Vải Cuộn #02-05",
        "forType": "gems_loot",
        "src": "/assets/props/items/surv2_r01_c04_005.png",
        "thumbSrc": "/assets/props/thumbs/surv2_r01_c04_005.png"
    },
    {
        "id": "surv2_r02_c00_006",
        "name": "Thỏi Kim Loại & Vải Cuộn #03-01",
        "forType": "gems_loot",
        "src": "/assets/props/items/surv2_r02_c00_006.png",
        "thumbSrc": "/assets/props/thumbs/surv2_r02_c00_006.png"
    },
    {
        "id": "surv2_r02_c01_007",
        "name": "Thỏi Kim Loại & Vải Cuộn #03-02",
        "forType": "gems_loot",
        "src": "/assets/props/items/surv2_r02_c01_007.png",
        "thumbSrc": "/assets/props/thumbs/surv2_r02_c01_007.png"
    },
    {
        "id": "surv2_r02_c02_008",
        "name": "Thỏi Kim Loại & Vải Cuộn #03-03",
        "forType": "gems_loot",
        "src": "/assets/props/items/surv2_r02_c02_008.png",
        "thumbSrc": "/assets/props/thumbs/surv2_r02_c02_008.png"
    },
    {
        "id": "surv2_r02_c03_009",
        "name": "Thỏi Kim Loại & Vải Cuộn #03-04",
        "forType": "gems_loot",
        "src": "/assets/props/items/surv2_r02_c03_009.png",
        "thumbSrc": "/assets/props/thumbs/surv2_r02_c03_009.png"
    },
    {
        "id": "surv2_r03_c00_010",
        "name": "Ốc Vít & Bánh Răng #04-01",
        "forType": "survival_tools",
        "src": "/assets/props/items/surv2_r03_c00_010.png",
        "thumbSrc": "/assets/props/thumbs/surv2_r03_c00_010.png"
    },
    {
        "id": "surv2_r03_c01_011",
        "name": "Ốc Vít & Bánh Răng #04-02",
        "forType": "survival_tools",
        "src": "/assets/props/items/surv2_r03_c01_011.png",
        "thumbSrc": "/assets/props/thumbs/surv2_r03_c01_011.png"
    },
    {
        "id": "surv2_r03_c02_012",
        "name": "Ốc Vít & Bánh Răng #04-03",
        "forType": "survival_tools",
        "src": "/assets/props/items/surv2_r03_c02_012.png",
        "thumbSrc": "/assets/props/thumbs/surv2_r03_c02_012.png"
    },
    {
        "id": "surv2_r03_c03_013",
        "name": "Ốc Vít & Bánh Răng #04-04",
        "forType": "survival_tools",
        "src": "/assets/props/items/surv2_r03_c03_013.png",
        "thumbSrc": "/assets/props/thumbs/surv2_r03_c03_013.png"
    },
    {
        "id": "surv2_r03_c04_014",
        "name": "Ốc Vít & Bánh Răng #04-05",
        "forType": "survival_tools",
        "src": "/assets/props/items/surv2_r03_c04_014.png",
        "thumbSrc": "/assets/props/thumbs/surv2_r03_c04_014.png"
    },
    {
        "id": "surv2_r03_c05_015",
        "name": "Ốc Vít & Bánh Răng #04-06",
        "forType": "survival_tools",
        "src": "/assets/props/items/surv2_r03_c05_015.png",
        "thumbSrc": "/assets/props/thumbs/surv2_r03_c05_015.png"
    },
    {
        "id": "surv2_r03_c06_016",
        "name": "Ốc Vít & Bánh Răng #04-07",
        "forType": "survival_tools",
        "src": "/assets/props/items/surv2_r03_c06_016.png",
        "thumbSrc": "/assets/props/thumbs/surv2_r03_c06_016.png"
    },
    {
        "id": "surv2_r03_c07_017",
        "name": "Ốc Vít & Bánh Răng #04-08",
        "forType": "survival_tools",
        "src": "/assets/props/items/surv2_r03_c07_017.png",
        "thumbSrc": "/assets/props/thumbs/surv2_r03_c07_017.png"
    },
    {
        "id": "surv2_r03_c08_018",
        "name": "Ốc Vít & Bánh Răng #04-09",
        "forType": "survival_tools",
        "src": "/assets/props/items/surv2_r03_c08_018.png",
        "thumbSrc": "/assets/props/thumbs/surv2_r03_c08_018.png"
    },
    {
        "id": "surv2_r03_c09_019",
        "name": "Ốc Vít & Bánh Răng #04-10",
        "forType": "survival_tools",
        "src": "/assets/props/items/surv2_r03_c09_019.png",
        "thumbSrc": "/assets/props/thumbs/surv2_r03_c09_019.png"
    },
    {
        "id": "surv2_r04_c00_020",
        "name": "Ốc Vít & Bánh Răng #05-01",
        "forType": "survival_tools",
        "src": "/assets/props/items/surv2_r04_c00_020.png",
        "thumbSrc": "/assets/props/thumbs/surv2_r04_c00_020.png"
    },
    {
        "id": "surv2_r04_c01_021",
        "name": "Ốc Vít & Bánh Răng #05-02",
        "forType": "survival_tools",
        "src": "/assets/props/items/surv2_r04_c01_021.png",
        "thumbSrc": "/assets/props/thumbs/surv2_r04_c01_021.png"
    },
    {
        "id": "surv2_r04_c02_022",
        "name": "Ốc Vít & Bánh Răng #05-03",
        "forType": "survival_tools",
        "src": "/assets/props/items/surv2_r04_c02_022.png",
        "thumbSrc": "/assets/props/thumbs/surv2_r04_c02_022.png"
    },
    {
        "id": "surv2_r04_c03_023",
        "name": "Ốc Vít & Bánh Răng #05-04",
        "forType": "survival_tools",
        "src": "/assets/props/items/surv2_r04_c03_023.png",
        "thumbSrc": "/assets/props/thumbs/surv2_r04_c03_023.png"
    },
    {
        "id": "surv2_r04_c04_024",
        "name": "Ốc Vít & Bánh Răng #05-05",
        "forType": "survival_tools",
        "src": "/assets/props/items/surv2_r04_c04_024.png",
        "thumbSrc": "/assets/props/thumbs/surv2_r04_c04_024.png"
    },
    {
        "id": "surv2_r04_c05_025",
        "name": "Ốc Vít & Bánh Răng #05-06",
        "forType": "survival_tools",
        "src": "/assets/props/items/surv2_r04_c05_025.png",
        "thumbSrc": "/assets/props/thumbs/surv2_r04_c05_025.png"
    },
    {
        "id": "surv2_r05_c00_026",
        "name": "Ốc Vít & Bánh Răng #06-01",
        "forType": "survival_tools",
        "src": "/assets/props/items/surv2_r05_c00_026.png",
        "thumbSrc": "/assets/props/thumbs/surv2_r05_c00_026.png"
    },
    {
        "id": "surv2_r05_c01_027",
        "name": "Ốc Vít & Bánh Răng #06-02",
        "forType": "survival_tools",
        "src": "/assets/props/items/surv2_r05_c01_027.png",
        "thumbSrc": "/assets/props/thumbs/surv2_r05_c01_027.png"
    },
    {
        "id": "surv2_r05_c02_028",
        "name": "Ốc Vít & Bánh Răng #06-03",
        "forType": "survival_tools",
        "src": "/assets/props/items/surv2_r05_c02_028.png",
        "thumbSrc": "/assets/props/thumbs/surv2_r05_c02_028.png"
    },
    {
        "id": "surv2_r05_c03_029",
        "name": "Ốc Vít & Bánh Răng #06-04",
        "forType": "survival_tools",
        "src": "/assets/props/items/surv2_r05_c03_029.png",
        "thumbSrc": "/assets/props/thumbs/surv2_r05_c03_029.png"
    },
    {
        "id": "surv2_r05_c04_030",
        "name": "Ốc Vít & Bánh Răng #06-05",
        "forType": "survival_tools",
        "src": "/assets/props/items/surv2_r05_c04_030.png",
        "thumbSrc": "/assets/props/thumbs/surv2_r05_c04_030.png"
    },
    {
        "id": "surv2_r06_c00_031",
        "name": "Hóa Chất & Keo Dán #07-01",
        "forType": "alchemy",
        "src": "/assets/props/items/surv2_r06_c00_031.png",
        "thumbSrc": "/assets/props/thumbs/surv2_r06_c00_031.png"
    },
    {
        "id": "surv2_r06_c01_032",
        "name": "Hóa Chất & Keo Dán #07-02",
        "forType": "alchemy",
        "src": "/assets/props/items/surv2_r06_c01_032.png",
        "thumbSrc": "/assets/props/thumbs/surv2_r06_c01_032.png"
    },
    {
        "id": "surv2_r06_c02_033",
        "name": "Hóa Chất & Keo Dán #07-03",
        "forType": "alchemy",
        "src": "/assets/props/items/surv2_r06_c02_033.png",
        "thumbSrc": "/assets/props/thumbs/surv2_r06_c02_033.png"
    },
    {
        "id": "surv2_r06_c03_034",
        "name": "Hóa Chất & Keo Dán #07-04",
        "forType": "alchemy",
        "src": "/assets/props/items/surv2_r06_c03_034.png",
        "thumbSrc": "/assets/props/thumbs/surv2_r06_c03_034.png"
    },
    {
        "id": "surv2_r06_c04_035",
        "name": "Hóa Chất & Keo Dán #07-05",
        "forType": "alchemy",
        "src": "/assets/props/items/surv2_r06_c04_035.png",
        "thumbSrc": "/assets/props/thumbs/surv2_r06_c04_035.png"
    },
    {
        "id": "surv2_r06_c05_036",
        "name": "Hóa Chất & Keo Dán #07-06",
        "forType": "alchemy",
        "src": "/assets/props/items/surv2_r06_c05_036.png",
        "thumbSrc": "/assets/props/thumbs/surv2_r06_c05_036.png"
    },
    {
        "id": "surv2_r06_c06_037",
        "name": "Hóa Chất & Keo Dán #07-07",
        "forType": "alchemy",
        "src": "/assets/props/items/surv2_r06_c06_037.png",
        "thumbSrc": "/assets/props/thumbs/surv2_r06_c06_037.png"
    },
    {
        "id": "surv2_r07_c00_038",
        "name": "Hóa Chất & Keo Dán #08-01",
        "forType": "alchemy",
        "src": "/assets/props/items/surv2_r07_c00_038.png",
        "thumbSrc": "/assets/props/thumbs/surv2_r07_c00_038.png"
    },
    {
        "id": "surv2_r07_c01_039",
        "name": "Hóa Chất & Keo Dán #08-02",
        "forType": "alchemy",
        "src": "/assets/props/items/surv2_r07_c01_039.png",
        "thumbSrc": "/assets/props/thumbs/surv2_r07_c01_039.png"
    },
    {
        "id": "surv2_r07_c02_040",
        "name": "Hóa Chất & Keo Dán #08-03",
        "forType": "alchemy",
        "src": "/assets/props/items/surv2_r07_c02_040.png",
        "thumbSrc": "/assets/props/thumbs/surv2_r07_c02_040.png"
    },
    {
        "id": "surv2_r07_c03_041",
        "name": "Hóa Chất & Keo Dán #08-04",
        "forType": "alchemy",
        "src": "/assets/props/items/surv2_r07_c03_041.png",
        "thumbSrc": "/assets/props/thumbs/surv2_r07_c03_041.png"
    },
    {
        "id": "surv2_r07_c04_042",
        "name": "Hóa Chất & Keo Dán #08-05",
        "forType": "alchemy",
        "src": "/assets/props/items/surv2_r07_c04_042.png",
        "thumbSrc": "/assets/props/thumbs/surv2_r07_c04_042.png"
    },
    {
        "id": "surv2_r08_c00_043",
        "name": "Hóa Chất & Keo Dán #09-01",
        "forType": "alchemy",
        "src": "/assets/props/items/surv2_r08_c00_043.png",
        "thumbSrc": "/assets/props/thumbs/surv2_r08_c00_043.png"
    },
    {
        "id": "surv2_r08_c01_044",
        "name": "Hóa Chất & Keo Dán #09-02",
        "forType": "alchemy",
        "src": "/assets/props/items/surv2_r08_c01_044.png",
        "thumbSrc": "/assets/props/thumbs/surv2_r08_c01_044.png"
    },
    {
        "id": "surv2_r08_c02_045",
        "name": "Hóa Chất & Keo Dán #09-03",
        "forType": "alchemy",
        "src": "/assets/props/items/surv2_r08_c02_045.png",
        "thumbSrc": "/assets/props/thumbs/surv2_r08_c02_045.png"
    },
    {
        "id": "surv2_r08_c03_046",
        "name": "Hóa Chất & Keo Dán #09-04",
        "forType": "alchemy",
        "src": "/assets/props/items/surv2_r08_c03_046.png",
        "thumbSrc": "/assets/props/thumbs/surv2_r08_c03_046.png"
    },
    {
        "id": "surv2_r08_c04_047",
        "name": "Hóa Chất & Keo Dán #09-05",
        "forType": "alchemy",
        "src": "/assets/props/items/surv2_r08_c04_047.png",
        "thumbSrc": "/assets/props/thumbs/surv2_r08_c04_047.png"
    },
    {
        "id": "surv2_r09_c00_048",
        "name": "Đá Quý & Bột Màu #10-01",
        "forType": "gems_loot",
        "src": "/assets/props/items/surv2_r09_c00_048.png",
        "thumbSrc": "/assets/props/thumbs/surv2_r09_c00_048.png"
    },
    {
        "id": "surv2_r09_c01_049",
        "name": "Đá Quý & Bột Màu #10-02",
        "forType": "gems_loot",
        "src": "/assets/props/items/surv2_r09_c01_049.png",
        "thumbSrc": "/assets/props/thumbs/surv2_r09_c01_049.png"
    },
    {
        "id": "surv2_r09_c02_050",
        "name": "Đá Quý & Bột Màu #10-03",
        "forType": "gems_loot",
        "src": "/assets/props/items/surv2_r09_c02_050.png",
        "thumbSrc": "/assets/props/thumbs/surv2_r09_c02_050.png"
    },
    {
        "id": "surv2_r09_c03_051",
        "name": "Đá Quý & Bột Màu #10-04",
        "forType": "gems_loot",
        "src": "/assets/props/items/surv2_r09_c03_051.png",
        "thumbSrc": "/assets/props/thumbs/surv2_r09_c03_051.png"
    },
    {
        "id": "surv2_r09_c04_052",
        "name": "Đá Quý & Bột Màu #10-05",
        "forType": "gems_loot",
        "src": "/assets/props/items/surv2_r09_c04_052.png",
        "thumbSrc": "/assets/props/thumbs/surv2_r09_c04_052.png"
    },
    {
        "id": "surv2_r09_c05_053",
        "name": "Đá Quý & Bột Màu #10-06",
        "forType": "gems_loot",
        "src": "/assets/props/items/surv2_r09_c05_053.png",
        "thumbSrc": "/assets/props/thumbs/surv2_r09_c05_053.png"
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
