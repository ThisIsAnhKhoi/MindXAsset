/**
 * Retro Shmup Arcade Starfighter & Pico-8 Space Eaters Configuration (512x512 Crisp Pixel Art)
 * Sources: SpaceRage (64x64 Shmup Pack with 5-Angle Banking Roll + Dynamic Drop Shadows) & Pico-8 Space Eaters.
 */

const SPACESHIP_MODELS = [
  {
    id: 'player_b',
    name: 'Tiêm Kích Ánh Sao Xanh (Player Blue - 5 Góc Nghiêng)',
    hasBanking: true,
    shadowPrefix: 'player_shadow',
    src: '/assets/arcade_starfighter/ships/player_b_m.png',
    thumbSrc: '/assets/arcade_starfighter/thumbs/ships/player_b_m.png'
  },
  {
    id: 'player_r',
    name: 'Tiêm Kích Hoả Tinh Đỏ (Player Red - 5 Góc Nghiêng)',
    hasBanking: true,
    shadowPrefix: 'player_shadow',
    src: '/assets/arcade_starfighter/ships/player_r_m.png',
    thumbSrc: '/assets/arcade_starfighter/thumbs/ships/player_r_m.png'
  },
  {
    id: 'enemy_1_b',
    name: 'Phi Cơ Đánh Chặn Cánh Dài Xanh (Interceptor Blue)',
    hasBanking: true,
    shadowPrefix: 'enemy_1_shadow',
    src: '/assets/arcade_starfighter/ships/enemy_1_b_m.png',
    thumbSrc: '/assets/arcade_starfighter/thumbs/ships/enemy_1_b_m.png'
  },
  {
    id: 'enemy_1_g',
    name: 'Phi Cơ Đánh Chặn Cánh Dài Lục (Interceptor Green)',
    hasBanking: true,
    shadowPrefix: 'enemy_1_shadow',
    src: '/assets/arcade_starfighter/ships/enemy_1_g_m.png',
    thumbSrc: '/assets/arcade_starfighter/thumbs/ships/enemy_1_g_m.png'
  },
  {
    id: 'enemy_1_r',
    name: 'Phi Cơ Đánh Chặn Cánh Dài Đỏ (Interceptor Red)',
    hasBanking: true,
    shadowPrefix: 'enemy_1_shadow',
    src: '/assets/arcade_starfighter/ships/enemy_1_r_m.png',
    thumbSrc: '/assets/arcade_starfighter/thumbs/ships/enemy_1_r_m.png'
  },
  {
    id: 'enemy_2_b',
    name: 'Trọng Oanh Tạc Cơ Giáp Nặng Xanh (Bomber Blue)',
    hasBanking: true,
    shadowPrefix: 'enemy_2_shadow',
    src: '/assets/arcade_starfighter/ships/enemy_2_b_m.png',
    thumbSrc: '/assets/arcade_starfighter/thumbs/ships/enemy_2_b_m.png'
  },
  {
    id: 'enemy_2_g',
    name: 'Trọng Oanh Tạc Cơ Giáp Nặng Lục (Bomber Green)',
    hasBanking: true,
    shadowPrefix: 'enemy_2_shadow',
    src: '/assets/arcade_starfighter/ships/enemy_2_g_m.png',
    thumbSrc: '/assets/arcade_starfighter/thumbs/ships/enemy_2_g_m.png'
  },
  {
    id: 'enemy_2_r',
    name: 'Trọng Oanh Tạc Cơ Giáp Nặng Đỏ (Bomber Red)',
    hasBanking: true,
    shadowPrefix: 'enemy_2_shadow',
    src: '/assets/arcade_starfighter/ships/enemy_2_r_m.png',
    thumbSrc: '/assets/arcade_starfighter/thumbs/ships/enemy_2_r_m.png'
  },
  {
    id: 'pico_player',
    name: 'Phi Thuyền Retro 8-Bit Pico-8 (Space Eaters Hero)',
    hasBanking: true,
    shadowPrefix: null,
    src: '/assets/arcade_starfighter/ships/pico_player_m.png',
    thumbSrc: '/assets/arcade_starfighter/thumbs/ships/pico_player_m.png'
  },
  {
    id: 'pico_ufo_cruiser',
    name: 'Đĩa Bay UFO Cổ Điển 8-Bit (Pico-8 Cruiser)',
    hasBanking: false,
    shadowPrefix: null,
    src: '/assets/arcade_starfighter/ships/pico_ufo_cruiser.png',
    thumbSrc: '/assets/arcade_starfighter/thumbs/ships/pico_ufo_cruiser.png'
  },
  {
    id: 'pico_crab_guardian',
    name: 'Quái Thú Cua Xanh 8-Bit (Crab Invader)',
    hasBanking: false,
    shadowPrefix: null,
    src: '/assets/arcade_starfighter/ships/pico_crab_guardian.png',
    thumbSrc: '/assets/arcade_starfighter/thumbs/ships/pico_crab_guardian.png'
  },
  {
    id: 'pico_gold_dreadnought',
    name: 'Giáp Hạm Hoàng Kim 8-Bit (Gold Dreadnought)',
    hasBanking: false,
    shadowPrefix: null,
    src: '/assets/arcade_starfighter/ships/pico_gold_dreadnought.png',
    thumbSrc: '/assets/arcade_starfighter/thumbs/ships/pico_gold_dreadnought.png'
  },
  {
    id: 'pico_emerald_viper',
    name: 'Chiến Giáp Xà Tinh 8-Bit (Emerald Viper)',
    hasBanking: false,
    shadowPrefix: null,
    src: '/assets/arcade_starfighter/ships/pico_emerald_viper.png',
    thumbSrc: '/assets/arcade_starfighter/thumbs/ships/pico_emerald_viper.png'
  },
  {
    id: 'pico_silver_mantis',
    name: 'Chiến Giáp Bọ Ngựa Bạc 8-Bit (Silver Mantis)',
    hasBanking: false,
    shadowPrefix: null,
    src: '/assets/arcade_starfighter/ships/pico_silver_mantis.png',
    thumbSrc: '/assets/arcade_starfighter/thumbs/ships/pico_silver_mantis.png'
  },
  {
    id: 'pico_space_eater_boss',
    name: 'Đại Trùm Space Eater Tối Thượng (Pico-8 Boss)',
    hasBanking: false,
    shadowPrefix: null,
    src: '/assets/arcade_starfighter/ships/pico_space_eater_boss.png',
    thumbSrc: '/assets/arcade_starfighter/thumbs/ships/pico_space_eater_boss.png'
  }
];

export const arcadeStarfighterConfig = {
  ship_hull: SPACESHIP_MODELS,

  bank_angle: [
    {
      id: 'm',
      name: 'Bay Thẳng Cân Bằng (Center Roll 0°)',
      src: '/assets/arcade_starfighter/ships/player_b_m.png',
      thumbSrc: '/assets/arcade_starfighter/thumbs/ships/player_b_m.png'
    },
    {
      id: 'l1',
      name: 'Lượn Nghiêng Cánh Trái Nhẹ (Bank Left -15°)',
      src: '/assets/arcade_starfighter/ships/player_b_l1.png',
      thumbSrc: '/assets/arcade_starfighter/thumbs/ships/player_b_l1.png'
    },
    {
      id: 'l2',
      name: 'Lượn Nghiêng Cánh Trái Gắt (Hard Bank Left -35°)',
      src: '/assets/arcade_starfighter/ships/player_b_l2.png',
      thumbSrc: '/assets/arcade_starfighter/thumbs/ships/player_b_l2.png'
    },
    {
      id: 'r1',
      name: 'Lượn Nghiêng Cánh Phải Nhẹ (Bank Right +15°)',
      src: '/assets/arcade_starfighter/ships/player_b_r1.png',
      thumbSrc: '/assets/arcade_starfighter/thumbs/ships/player_b_r1.png'
    },
    {
      id: 'r2',
      name: 'Lượn Nghiêng Cánh Phải Gắt (Hard Bank Right +35°)',
      src: '/assets/arcade_starfighter/ships/player_b_r2.png',
      thumbSrc: '/assets/arcade_starfighter/thumbs/ships/player_b_r2.png'
    }
  ],

  shadow_mode: [
    {
      id: 'shadow_dynamic',
      name: 'Bóng Đổ Nghiêng Đồng Bộ Theo Góc Lượn (Dynamic Shadow)',
      src: '/assets/arcade_starfighter/shadows/player_shadow_m.png',
      thumbSrc: '/assets/arcade_starfighter/thumbs/shadows/player_shadow_m.png'
    },
    {
      id: 'shadow_none',
      name: 'Tắt Bóng Đổ Dưới Thân'
    }
  ],

  exhaust: [
    { id: 'exhaust_none', name: 'Không Bật Lửa Đuôi' },
    {
      id: 'exhaust_01',
      name: 'Phản Lực Ion Xanh Cấp 1',
      src: '/assets/arcade_starfighter/exhaust/exhaust_01.png',
      thumbSrc: '/assets/arcade_starfighter/thumbs/exhaust/exhaust_01.png'
    },
    {
      id: 'exhaust_02',
      name: 'Phản Lực Ion Xanh Cấp 2',
      src: '/assets/arcade_starfighter/exhaust/exhaust_02.png',
      thumbSrc: '/assets/arcade_starfighter/thumbs/exhaust/exhaust_02.png'
    },
    {
      id: 'exhaust_03',
      name: 'Phản Lực Ion Xanh Cấp 3 (Tối Đa)',
      src: '/assets/arcade_starfighter/exhaust/exhaust_03.png',
      thumbSrc: '/assets/arcade_starfighter/thumbs/exhaust/exhaust_03.png'
    },
    {
      id: 'exhaust_04',
      name: 'Phản Lực Xung Nhịp Cao Cấp 4',
      src: '/assets/arcade_starfighter/exhaust/exhaust_04.png',
      thumbSrc: '/assets/arcade_starfighter/thumbs/exhaust/exhaust_04.png'
    },
    {
      id: 'exhaust_05',
      name: 'Phản Lực Xung Nhịp Cao Cấp 5',
      src: '/assets/arcade_starfighter/exhaust/exhaust_05.png',
      thumbSrc: '/assets/arcade_starfighter/thumbs/exhaust/exhaust_05.png'
    },
    {
      id: 'pico_exhaust_flame',
      name: 'Lửa Đuôi Retro 8-Bit (Pico-8 Flame)',
      src: '/assets/arcade_starfighter/exhaust/pico_exhaust_flame.png',
      thumbSrc: '/assets/arcade_starfighter/thumbs/exhaust/pico_exhaust_flame.png'
    }
  ],

  weapon_fx: [
    { id: 'weapon_none', name: 'Ngừng Bắn' },
    {
      id: 'plasma_1',
      name: 'Đạn Chùm Plasma Xanh Lục (Triple Plasma)',
      src: '/assets/arcade_starfighter/weapons/plasma_1.png',
      thumbSrc: '/assets/arcade_starfighter/thumbs/weapons/plasma_1.png'
    },
    {
      id: 'plasma_2',
      name: 'Đạn Tia Plasma Hội Tụ',
      src: '/assets/arcade_starfighter/weapons/plasma_2.png',
      thumbSrc: '/assets/arcade_starfighter/thumbs/weapons/plasma_2.png'
    },
    {
      id: 'vulcan_1',
      name: 'Đạn Đại Liên Lửa Đỏ (Vulcan Cannon)',
      src: '/assets/arcade_starfighter/weapons/vulcan_1.png',
      thumbSrc: '/assets/arcade_starfighter/thumbs/weapons/vulcan_1.png'
    },
    {
      id: 'vulcan_2',
      name: 'Đạn Đại Liên Nặng (Heavy Vulcan)',
      src: '/assets/arcade_starfighter/weapons/vulcan_2.png',
      thumbSrc: '/assets/arcade_starfighter/thumbs/weapons/vulcan_2.png'
    },
    {
      id: 'proton_01',
      name: 'Quả Cầu Năng Lượng Proton',
      src: '/assets/arcade_starfighter/weapons/proton_01.png',
      thumbSrc: '/assets/arcade_starfighter/thumbs/weapons/proton_01.png'
    },
    {
      id: 'pico_mega_beam',
      name: 'Đại Pháo Laser 8-Bit (Pico-8 Mega Beam)',
      src: '/assets/arcade_starfighter/weapons/pico_mega_beam.png',
      thumbSrc: '/assets/arcade_starfighter/thumbs/weapons/pico_mega_beam.png'
    }
  ],

  hazards: [
    { id: 'hazard_none', name: 'Không Có Thủy Lôi / Thiên Thạch' },
    {
      id: 'mine_teal_spike',
      name: 'Thủy Lôi Gai Xanh Ngọc (Spike Mine Teal)',
      src: '/assets/arcade_starfighter/hazards/mine_teal_spike.png',
      thumbSrc: '/assets/arcade_starfighter/thumbs/hazards/mine_teal_spike.png'
    },
    {
      id: 'mine_red_spike',
      name: 'Thủy Lôi Gai Đỏ (Spike Mine Red)',
      src: '/assets/arcade_starfighter/hazards/mine_red_spike.png',
      thumbSrc: '/assets/arcade_starfighter/thumbs/hazards/mine_red_spike.png'
    },
    {
      id: 'mine_green_spike',
      name: 'Thủy Lôi Gai Lục (Spike Mine Green)',
      src: '/assets/arcade_starfighter/hazards/mine_green_spike.png',
      thumbSrc: '/assets/arcade_starfighter/thumbs/hazards/mine_green_spike.png'
    },
    {
      id: 'mine_teal_saw',
      name: 'Thủy Lôi Răng Cưa Xanh (Saw Mine Teal)',
      src: '/assets/arcade_starfighter/hazards/mine_teal_saw.png',
      thumbSrc: '/assets/arcade_starfighter/thumbs/hazards/mine_teal_saw.png'
    },
    {
      id: 'mine_red_saw',
      name: 'Thủy Lôi Răng Cưa Đỏ (Saw Mine Red)',
      src: '/assets/arcade_starfighter/hazards/mine_red_saw.png',
      thumbSrc: '/assets/arcade_starfighter/thumbs/hazards/mine_red_saw.png'
    },
    {
      id: 'explosion_burst_1',
      name: 'Vụ Nổ Nhiệt Hạch Đỏ (Solar Burst)',
      src: '/assets/arcade_starfighter/hazards/explosion_burst_1.png',
      thumbSrc: '/assets/arcade_starfighter/thumbs/hazards/explosion_burst_1.png'
    },
    {
      id: 'explosion_ring_2',
      name: 'Sóng Xung Kích Vàng (Shockwave Ring)',
      src: '/assets/arcade_starfighter/hazards/explosion_ring_2.png',
      thumbSrc: '/assets/arcade_starfighter/thumbs/hazards/explosion_ring_2.png'
    },
    {
      id: 'explosion_nova_3',
      name: 'Sóng Siêu Tân Tinh Xanh (Emerald Nova)',
      src: '/assets/arcade_starfighter/hazards/explosion_nova_3.png',
      thumbSrc: '/assets/arcade_starfighter/thumbs/hazards/explosion_nova_3.png'
    },
    {
      id: 'pico_asteroids',
      name: 'Vành Đai Thiên Thạch 8-Bit (Pico-8 Asteroids)',
      src: '/assets/arcade_starfighter/hazards/pico_asteroids.png',
      thumbSrc: '/assets/arcade_starfighter/thumbs/hazards/pico_asteroids.png'
    }
  ],

  space_bg: [
    { id: 'space_bg_none', name: 'Trong Suốt (Không Nền)' },
    {
      id: 'bg_spacerage_nebula',
      name: 'Chiến Trường Không Gian SpaceRage',
      src: '/assets/arcade_starfighter/backgrounds/bg_spacerage_nebula.png',
      thumbSrc: '/assets/arcade_starfighter/thumbs/backgrounds/bg_spacerage_nebula.png'
    },
    {
      id: 'bg_deep_space',
      name: 'Không Gian Sâu Thẳm',
      src: '/assets/spaceships/backgrounds/bg_deep_space.png',
      thumbSrc: '/assets/spaceships/thumbs/bg_deep_space.png'
    },
    {
      id: 'bg_nebula_violet',
      name: 'Tinh Vân Năng Lượng Tím',
      src: '/assets/spaceships/backgrounds/bg_nebula_violet.png',
      thumbSrc: '/assets/spaceships/thumbs/bg_nebula_violet.png'
    }
  ]
};

const arcadePalette = [
  { name: 'Nguyên Bản Arcade', hex: '#FFFFFF' },
  { name: 'Đỏ Rực Shmup', hex: '#EF4444' },
  { name: 'Xanh Điện Tử', hex: '#3B82F6' },
  { name: 'Vàng Kim Loại', hex: '#EAB308' },
  { name: 'Lục Neon', hex: '#10B981' },
  { name: 'Tím Synthwave', hex: '#A855F7' },
  { name: 'Xanh Băng Giá', hex: '#06B6D4' },
  { name: 'Cam Lửa Đạn', hex: '#F97316' }
];

export const arcadeStarfighterColorPalettes = {
  ship_hull: arcadePalette,
  bank_angle: [{ name: 'Nguyên Bản', hex: '#FFFFFF' }],
  shadow_mode: [{ name: 'Nguyên Bản', hex: '#FFFFFF' }],
  exhaust: arcadePalette,
  weapon_fx: arcadePalette,
  hazards: arcadePalette,
  space_bg: [{ name: 'Nguyên Bản', hex: '#FFFFFF' }]
};

export const getArcadeStarfighterLayers = (selections = {}, colors = {}) => {
  const layers = [];

  const bgItem = arcadeStarfighterConfig.space_bg.find(b => b.id === selections.space_bg);
  if (bgItem && bgItem.src) {
    layers.push({
      id: bgItem.id,
      category: 'space_bg',
      name: bgItem.name,
      src: bgItem.src,
      color: colors.space_bg || '#ffffff',
      z_index: 0
    });
  }

  const shipItem =
    arcadeStarfighterConfig.ship_hull.find(s => s.id === selections.ship_hull) ||
    arcadeStarfighterConfig.ship_hull[0];
  const angle = selections.bank_angle || 'm';

  // 1. Dynamic Shadow synchronized with ship type and banking angle!
  if (selections.shadow_mode !== 'shadow_none' && shipItem.shadowPrefix) {
    layers.push({
      id: `${shipItem.shadowPrefix}_${angle}`,
      category: 'shadow_mode',
      name: 'Bóng Đổ Đồng Bộ Góc Lượn',
      src: `/assets/arcade_starfighter/shadows/${shipItem.shadowPrefix}_${angle}.png`,
      color: '#ffffff',
      z_index: 1
    });
  }

  // 2. Field Hazards / Wingmen
  const hazardItem = arcadeStarfighterConfig.hazards.find(h => h.id === selections.hazards);
  if (hazardItem && hazardItem.src) {
    layers.push({
      id: hazardItem.id,
      category: 'hazards',
      name: hazardItem.name,
      src: hazardItem.src,
      color: colors.hazards || '#ffffff',
      z_index: 2
    });
  }

  // 3. Thruster Exhaust
  const exhaustItem = arcadeStarfighterConfig.exhaust.find(e => e.id === selections.exhaust);
  if (exhaustItem && exhaustItem.src) {
    layers.push({
      id: exhaustItem.id,
      category: 'exhaust',
      name: exhaustItem.name,
      src: exhaustItem.src,
      color: colors.exhaust || '#ffffff',
      z_index: 3
    });
  }

  // 4. Weapon Projectiles
  const weaponItem = arcadeStarfighterConfig.weapon_fx.find(w => w.id === selections.weapon_fx);
  if (weaponItem && weaponItem.src) {
    layers.push({
      id: weaponItem.id,
      category: 'weapon_fx',
      name: weaponItem.name,
      src: weaponItem.src,
      color: colors.weapon_fx || '#ffffff',
      z_index: 4
    });
  }

  // 5. Main Ship Hull (resolved with banking angle if supported!)
  const hullSrc = shipItem.hasBanking
    ? `/assets/arcade_starfighter/ships/${shipItem.id}_${angle}.png`
    : shipItem.src;

  layers.push({
    id: `${shipItem.id}_${angle}`,
    category: 'ship_hull',
    name: `${shipItem.name} (${angle.toUpperCase()})`,
    src: hullSrc,
    color: colors.ship_hull || '#ffffff',
    z_index: 5
  });

  return layers;
};

