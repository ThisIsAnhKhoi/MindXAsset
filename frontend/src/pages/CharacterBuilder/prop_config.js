/**
 * Configuration & Layer Composer for Grand In-Game Props & Items Studio
 * Features 30+ pixel art RPG items across 6 categories:
 * Alchemy, Chests & Mechanisms, Tomes & Relics, Loot & Resources, Provisions, and Gear.
 * Includes interactive states, multi-tier pedestals, mystical auras, and particle FX.
 */

export const propConfig = {
  // 1. Nhóm Danh Mục Vật Phẩm Lớn
  prop_type: [
    {
      id: 'chests',
      name: 'Rương Kho Báu & Cơ Quan',
      thumbSrc: '/assets/props/thumbs/chest_wood_closed.png',
      defaultState: 'chest_wood_closed'
    },
    {
      id: 'alchemy',
      name: 'Độc Dược & Thuốc Tiên',
      thumbSrc: '/assets/props/thumbs/002_Heart_Flask.png',
      defaultState: '002_Heart_Flask'
    },
    {
      id: 'tomes',
      name: 'Pháp Khí & Tri Thức',
      thumbSrc: '/assets/props/thumbs/121_Blue_Grimoire.png',
      defaultState: '121_Blue_Grimoire'
    },
    {
      id: 'loot',
      name: 'Châu Báu & Tài Nguyên',
      thumbSrc: '/assets/props/thumbs/101_Coin_Pouch.png',
      defaultState: '101_Coin_Pouch'
    },
    {
      id: 'provisions',
      name: 'Lương Thực & Nông Sản',
      thumbSrc: '/assets/props/thumbs/021_Bread_Loaf.png',
      defaultState: '021_Bread_Loaf'
    },
    {
      id: 'gear',
      name: 'Trang Bị Dã Ngoại & Cổ Vật',
      thumbSrc: '/assets/props/thumbs/161_Backpack.png',
      defaultState: '161_Backpack'
    }
  ],

  // 2. Vật Phẩm & Trạng Thái Cụ Thể (State)
  state: [
    // === NHÓM 1: RƯƠNG KHO BÁU & CƠ QUAN ===
    {
      id: 'chest_wood_closed',
      name: 'Rương Gỗ Hầm Ngục (Khóa Chặt)',
      src: '/assets/props/items/chest_wood_closed.png',
      thumbSrc: '/assets/props/thumbs/chest_wood_closed.png',
      forType: 'chests'
    },
    {
      id: 'chest_wood_open',
      name: 'Rương Gỗ Mở Bung (Tràn Vàng Bạc)',
      src: '/assets/props/items/chest_wood_open.png',
      thumbSrc: '/assets/props/thumbs/chest_wood_open.png',
      forType: 'chests'
    },
    {
      id: 'chest_iron_closed',
      name: 'Rương Sắt Cổ Đại (Khóa Chặt)',
      src: '/assets/props/items/chest_iron_closed.png',
      thumbSrc: '/assets/props/thumbs/chest_iron_closed.png',
      forType: 'chests'
    },
    {
      id: 'chest_iron_open',
      name: 'Rương Sắt Mở Bung (Kho Báu Hiếm)',
      src: '/assets/props/items/chest_iron_open.png',
      thumbSrc: '/assets/props/thumbs/chest_iron_open.png',
      forType: 'chests'
    },
    {
      id: 'chest_gold_closed',
      name: 'Rương Vàng Hoàng Gia (Khóa Ngọc)',
      src: '/assets/props/items/chest_gold_closed.png',
      thumbSrc: '/assets/props/thumbs/chest_gold_closed.png',
      forType: 'chests'
    },
    {
      id: 'chest_gold_open',
      name: 'Rương Vàng Mở Bung (Châu Báu Vô Giá)',
      src: '/assets/props/items/chest_gold_open.png',
      thumbSrc: '/assets/props/thumbs/chest_gold_open.png',
      forType: 'chests'
    },
    {
      id: 'lever_off',
      name: 'Cần Gạt Cơ Quan (Tắt - Đèn Đỏ)',
      src: '/assets/props/items/lever_off.png',
      thumbSrc: '/assets/props/thumbs/lever_off.png',
      forType: 'chests'
    },
    {
      id: 'lever_on',
      name: 'Cần Gạt Cơ Quan (Bật - Đèn Xanh)',
      src: '/assets/props/items/lever_on.png',
      thumbSrc: '/assets/props/thumbs/lever_on.png',
      forType: 'chests'
    },
    {
      id: 'portal_idle',
      name: 'Cổng Dịch Chuyển (Ngủ Yên)',
      src: '/assets/props/items/portal_idle.png',
      thumbSrc: '/assets/props/thumbs/portal_idle.png',
      forType: 'chests'
    },
    {
      id: 'portal_active',
      name: 'Cổng Dịch Chuyển (Xoáy Sáng Tím)',
      src: '/assets/props/items/portal_active.png',
      thumbSrc: '/assets/props/thumbs/portal_active.png',
      forType: 'chests'
    },

    // === NHÓM 2: ĐỘC DƯỢC & THUỐC TIÊN ===
    {
      id: '002_Heart_Flask',
      name: 'Bình Máu Trái Tim (Heart Flask)',
      src: '/assets/props/items/002_Heart_Flask.png',
      thumbSrc: '/assets/props/thumbs/002_Heart_Flask.png',
      forType: 'alchemy'
    },
    {
      id: '005_Twin_Chamber_Elixir',
      name: 'Thuốc Tiên Buồng Kép (Twin Elixir)',
      src: '/assets/props/items/005_Twin_Chamber_Elixir.png',
      thumbSrc: '/assets/props/thumbs/005_Twin_Chamber_Elixir.png',
      forType: 'alchemy'
    },
    {
      id: 'potion_health',
      name: 'Bình Sinh Mệnh Đỏ Tươi (Health Potion)',
      src: '/assets/props/items/potion_health.png',
      thumbSrc: '/assets/props/thumbs/potion_health.png',
      forType: 'alchemy'
    },
    {
      id: 'potion_mana',
      name: 'Bình Ma Pháp Lam Biển (Mana Potion)',
      src: '/assets/props/items/potion_mana.png',
      thumbSrc: '/assets/props/thumbs/potion_mana.png',
      forType: 'alchemy'
    },
    {
      id: 'potion_poison',
      name: 'Bình Độc Dược Lục Sắc (Poison Vial)',
      src: '/assets/props/items/potion_poison.png',
      thumbSrc: '/assets/props/thumbs/potion_poison.png',
      forType: 'alchemy'
    },
    {
      id: 'potion_stamina',
      name: 'Bình Thể Lực Vàng Kim (Stamina Elixir)',
      src: '/assets/props/items/potion_stamina.png',
      thumbSrc: '/assets/props/thumbs/potion_stamina.png',
      forType: 'alchemy'
    },

    // === NHÓM 3: PHÁP KHÍ & TRI THỨC ===
    {
      id: '121_Blue_Grimoire',
      name: 'Sách Ma Thuật Cổ (Blue Grimoire)',
      src: '/assets/props/items/121_Blue_Grimoire.png',
      thumbSrc: '/assets/props/thumbs/121_Blue_Grimoire.png',
      forType: 'tomes'
    },
    {
      id: '128_Blank_Parchment',
      name: 'Cuộn Giấy Da Ma Pháp (Parchment)',
      src: '/assets/props/items/128_Blank_Parchment.png',
      thumbSrc: '/assets/props/thumbs/128_Blank_Parchment.png',
      forType: 'tomes'
    },
    {
      id: '141_Candle',
      name: 'Cây Nến Thần Thắp Sáng (Candle)',
      src: '/assets/props/items/141_Candle.png',
      thumbSrc: '/assets/props/thumbs/141_Candle.png',
      forType: 'tomes'
    },
    {
      id: '149_Hand_Mirror',
      name: 'Gương Soi Tiên Tri (Hand Mirror)',
      src: '/assets/props/items/149_Hand_Mirror.png',
      thumbSrc: '/assets/props/thumbs/149_Hand_Mirror.png',
      forType: 'tomes'
    },
    {
      id: '181_Town_Key',
      name: 'Chìa Khóa Thị Trấn Vàng (Master Key)',
      src: '/assets/props/items/181_Town_Key.png',
      thumbSrc: '/assets/props/thumbs/181_Town_Key.png',
      forType: 'tomes'
    },
    {
      id: '191_Feather_Charm',
      name: 'Bùa Lông Vũ Thần Bí (Feather Charm)',
      src: '/assets/props/items/191_Feather_Charm.png',
      thumbSrc: '/assets/props/thumbs/191_Feather_Charm.png',
      forType: 'tomes'
    },

    // === NHÓM 4: CHÂU BÁU & TÀI NGUYÊN ===
    {
      id: '101_Coin_Pouch',
      name: 'Túi Tiền Vàng Căng Đầy (Coin Pouch)',
      src: '/assets/props/items/101_Coin_Pouch.png',
      thumbSrc: '/assets/props/thumbs/101_Coin_Pouch.png',
      forType: 'loot'
    },
    {
      id: '106_Signet_Ring',
      name: 'Nhẫn Ấn Hoàng Gia (Signet Ring)',
      src: '/assets/props/items/106_Signet_Ring.png',
      thumbSrc: '/assets/props/thumbs/106_Signet_Ring.png',
      forType: 'loot'
    },
    {
      id: 'gold_bar',
      name: 'Thỏi Vàng Cung Đình (Pure Gold Bar)',
      src: '/assets/props/items/gold_bar.png',
      thumbSrc: '/assets/props/thumbs/gold_bar.png',
      forType: 'loot'
    },
    {
      id: '065_Silver_Ingot',
      name: 'Thỏi Bạc Tinh Luyện (Silver Ingot)',
      src: '/assets/props/items/065_Silver_Ingot.png',
      thumbSrc: '/assets/props/thumbs/065_Silver_Ingot.png',
      forType: 'loot'
    },
    {
      id: '061_Iron_Ore',
      name: 'Quặng Sắt Hầm Mỏ (Iron Ore)',
      src: '/assets/props/items/061_Iron_Ore.png',
      thumbSrc: '/assets/props/thumbs/061_Iron_Ore.png',
      forType: 'loot'
    },
    {
      id: 'gem_ruby',
      name: 'Hồng Ngọc Huyết Tinh (Ruby Gem)',
      src: '/assets/props/items/gem_ruby.png',
      thumbSrc: '/assets/props/thumbs/gem_ruby.png',
      forType: 'loot'
    },
    {
      id: 'gem_emerald',
      name: 'Ngọc Lục Bảo Rực Rỡ (Emerald Gem)',
      src: '/assets/props/items/gem_emerald.png',
      thumbSrc: '/assets/props/thumbs/gem_emerald.png',
      forType: 'loot'
    },
    {
      id: 'gem_sapphire',
      name: 'Lam Ngọc Hoàng Gia (Sapphire Gem)',
      src: '/assets/props/items/gem_sapphire.png',
      thumbSrc: '/assets/props/thumbs/gem_sapphire.png',
      forType: 'loot'
    },
    {
      id: 'gem_diamond',
      name: 'Kim Cương Bất Hoại (Diamond Gem)',
      src: '/assets/props/items/gem_diamond.png',
      thumbSrc: '/assets/props/thumbs/gem_diamond.png',
      forType: 'loot'
    },
    {
      id: '081_Wood_Log',
      name: 'Khúc Gỗ Rừng Cổ Thụ (Wood Log)',
      src: '/assets/props/items/081_Wood_Log.png',
      thumbSrc: '/assets/props/thumbs/081_Wood_Log.png',
      forType: 'loot'
    },
    {
      id: '089_Thread_Spools',
      name: 'Cuộn Chỉ Thần Thoại (Thread Spools)',
      src: '/assets/props/items/089_Thread_Spools.png',
      thumbSrc: '/assets/props/thumbs/089_Thread_Spools.png',
      forType: 'loot'
    },

    // === NHÓM 5: LƯƠNG THỰC & NÔNG SẢN ===
    {
      id: '021_Bread_Loaf',
      name: 'Ổ Bánh Mì Lúa Mạch (Bread Loaf)',
      src: '/assets/props/items/021_Bread_Loaf.png',
      thumbSrc: '/assets/props/thumbs/021_Bread_Loaf.png',
      forType: 'provisions'
    },
    {
      id: '026_Apple',
      name: 'Quả Táo Rừng Mọng (Fresh Apple)',
      src: '/assets/props/items/026_Apple.png',
      thumbSrc: '/assets/props/thumbs/026_Apple.png',
      forType: 'provisions'
    },
    {
      id: '041_Wheat_Sheaf',
      name: 'Bó Lúa Mì Thu Hoạch (Wheat Sheaf)',
      src: '/assets/props/items/041_Wheat_Sheaf.png',
      thumbSrc: '/assets/props/thumbs/041_Wheat_Sheaf.png',
      forType: 'provisions'
    },
    {
      id: '048_Sunflower_Head',
      name: 'Bông Hướng Dương Dược Liệu (Sunflower)',
      src: '/assets/props/items/048_Sunflower_Head.png',
      thumbSrc: '/assets/props/thumbs/048_Sunflower_Head.png',
      forType: 'provisions'
    },

    // === NHÓM 6: TRANG BỊ DÃ NGOẠI ===
    {
      id: '161_Backpack',
      name: 'Ba Lô Thám Hiểm Da Bò (Backpack)',
      src: '/assets/props/items/161_Backpack.png',
      thumbSrc: '/assets/props/thumbs/161_Backpack.png',
      forType: 'gear'
    },
    {
      id: '172_Straw_Hat',
      name: 'Mũ Rơm Phiêu Lưu (Straw Hat)',
      src: '/assets/props/items/172_Straw_Hat.png',
      thumbSrc: '/assets/props/thumbs/172_Straw_Hat.png',
      forType: 'gear'
    },
    {
      id: 'gear_iron_sword',
      name: 'Thanh Kiếm Thép Hiệp Sĩ (Knight Sword)',
      src: '/assets/props/items/gear_iron_sword.png',
      thumbSrc: '/assets/props/thumbs/gear_iron_sword.png',
      forType: 'gear'
    },
    {
      id: 'gear_wood_shield',
      name: 'Khiên Gỗ Chiến Binh Bọc Thép (Shield)',
      src: '/assets/props/items/gear_wood_shield.png',
      thumbSrc: '/assets/props/thumbs/gear_wood_shield.png',
      forType: 'gear'
    },
    {
      id: 'gear_wizard_wand',
      name: 'Đũa Thần Bí Thuật Tím (Wizard Wand)',
      src: '/assets/props/items/gear_wizard_wand.png',
      thumbSrc: '/assets/props/thumbs/gear_wizard_wand.png',
      forType: 'gear'
    },
    {
      id: 'gear_crystal_staff',
      name: 'Quyền Trượng Pha Lê Cung Đình (Staff)',
      src: '/assets/props/items/gear_crystal_staff.png',
      thumbSrc: '/assets/props/thumbs/gear_crystal_staff.png',
      forType: 'gear'
    }
  ],

  // 3. Bệ Đỡ / Bục Trưng Bày (Pedestals)
  pedestal: [
    {
      id: 'none',
      name: 'Không Bệ (Lơ Lửng Tự Do)',
      thumbSrc: '/assets/props/thumbs/none.png'
    },
    {
      id: 'stone_altar',
      name: 'Bệ Đá Rêu Phong Cổ Đại',
      src: '/assets/props/pedestals/pedestal_stone_altar.png',
      thumbSrc: '/assets/props/thumbs/pedestal_stone_altar.png'
    },
    {
      id: 'rune_circle',
      name: 'Vòng Tròn Rune Ma Thuật',
      src: '/assets/props/pedestals/pedestal_rune_circle.png',
      thumbSrc: '/assets/props/thumbs/pedestal_rune_circle.png'
    },
    {
      id: 'royal_cushion',
      name: 'Bục Nhung Đỏ Hoàng Gia',
      src: '/assets/props/pedestals/pedestal_royal_cushion.png',
      thumbSrc: '/assets/props/thumbs/pedestal_royal_cushion.png'
    },
    {
      id: 'wood_plinth',
      name: 'Bục Gỗ Hầm Ngục',
      src: '/assets/props/pedestals/pedestal_wood_plinth.png',
      thumbSrc: '/assets/props/thumbs/pedestal_wood_plinth.png'
    }
  ],

  // 4. Hào Quang Phép Thuật (Auras)
  aura: [
    {
      id: 'none',
      name: 'Không Hào Quang',
      thumbSrc: '/assets/props/thumbs/none.png'
    },
    {
      id: 'legendary_gold',
      name: 'Hào Quang Hoàng Kim (Legendary)',
      src: '/assets/props/auras/aura_legendary_gold.png',
      thumbSrc: '/assets/props/thumbs/aura_legendary_gold.png'
    },
    {
      id: 'arcane_blue',
      name: 'Hào Quang Lam Thần Bí (Rare Arcane)',
      src: '/assets/props/auras/aura_arcane_blue.png',
      thumbSrc: '/assets/props/thumbs/aura_arcane_blue.png'
    },
    {
      id: 'nether_purple',
      name: 'Hào Quang Hư Không Tím (Epic Nether)',
      src: '/assets/props/auras/aura_nether_purple.png',
      thumbSrc: '/assets/props/thumbs/aura_nether_purple.png'
    },
    {
      id: 'fire_red',
      name: 'Hào Quang Rực Lửa (Mythic Fire)',
      src: '/assets/props/auras/aura_fire_red.png',
      thumbSrc: '/assets/props/thumbs/aura_fire_red.png'
    },
    {
      id: 'celestial_jade',
      name: 'Hào Quang Ngọc Bích (Celestial Jade)',
      src: '/assets/props/auras/aura_celestial_jade.png',
      thumbSrc: '/assets/props/thumbs/aura_celestial_jade.png'
    }
  ],

  // 5. Hiệu Ứng Bụi Sao & Hạt Sáng (Particle FX)
  effects: [
    {
      id: 'none',
      name: 'Không Hiệu Ứng',
      thumbSrc: '/assets/props/thumbs/none.png'
    },
    {
      id: 'sparkle_gold',
      name: 'Bụi Sao Vàng Lấp Lánh (Stardust)',
      src: '/assets/props/effects/fx_sparkle_gold.png',
      thumbSrc: '/assets/props/thumbs/fx_sparkle_gold.png'
    },
    {
      id: 'sparkle_arcane',
      name: 'Tia Sáng Bí Thuật Xanh (Arcane Sparks)',
      src: '/assets/props/effects/fx_sparkle_arcane.png',
      thumbSrc: '/assets/props/thumbs/fx_sparkle_arcane.png'
    },
    {
      id: 'sparkle_cosmic',
      name: 'Vệt Sáng Vũ Trụ Tím (Cosmic Shimmer)',
      src: '/assets/props/effects/fx_sparkle_cosmic.png',
      thumbSrc: '/assets/props/thumbs/fx_sparkle_cosmic.png'
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
  const selectedType = selections.prop_type || 'chests';
  const stateId = selections.state;
  const pedestalId = selections.pedestal || 'stone_altar';
  const auraId = selections.aura || 'none';
  const effectId = selections.effects || 'none';

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
