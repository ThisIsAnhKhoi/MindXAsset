/**
 * Spaceship & Starfighter Studio Configuration (512x512 Native HD RGBA)
 * 50 Clean Naves Starfighters with Per-Hull Dynamic Wing & Tail Anchors
 * Real Painted Thruster Plumes, Symmetrical Wing Weapons, Crystal-Clear Rim Energy Shields & Space Backgrounds
 */

export const HULL_ANCHORS = {
  ship_scout_01: { wingDx: 109, wingY: 256, tailY: 363, tailSpread: 58 },
  ship_scout_02: { wingDx: 77, wingY: 256, tailY: 382, tailSpread: 44 },
  ship_scout_03: { wingDx: 49, wingY: 281, tailY: 394, tailSpread: 32 },
  ship_scout_04: { wingDx: 66, wingY: 256, tailY: 373, tailSpread: 42 },
  ship_scout_05: { wingDx: 89, wingY: 256, tailY: 342, tailSpread: 52 },
  ship_scout_06: { wingDx: 72, wingY: 256, tailY: 372, tailSpread: 44 },
  ship_scout_07: { wingDx: 55, wingY: 256, tailY: 386, tailSpread: 35 },
  ship_scout_08: { wingDx: 68, wingY: 256, tailY: 378, tailSpread: 40 },
  ship_scout_09: { wingDx: 69, wingY: 256, tailY: 374, tailSpread: 43 },
  ship_scout_10: { wingDx: 103, wingY: 256, tailY: 328, tailSpread: 59 },
  ship_fighter_11: { wingDx: 95, wingY: 245, tailY: 342, tailSpread: 53 },
  ship_fighter_12: { wingDx: 102, wingY: 256, tailY: 317, tailSpread: 60 },
  ship_fighter_13: { wingDx: 98, wingY: 243, tailY: 327, tailSpread: 58 },
  ship_fighter_14: { wingDx: 95, wingY: 256, tailY: 349, tailSpread: 56 },
  ship_fighter_15: { wingDx: 79, wingY: 256, tailY: 365, tailSpread: 46 },
  ship_fighter_16: { wingDx: 94, wingY: 256, tailY: 343, tailSpread: 55 },
  ship_fighter_17: { wingDx: 72, wingY: 256, tailY: 373, tailSpread: 44 },
  ship_fighter_18: { wingDx: 62, wingY: 256, tailY: 382, tailSpread: 38 },
  ship_fighter_19: { wingDx: 69, wingY: 256, tailY: 373, tailSpread: 41 },
  ship_fighter_20: { wingDx: 80, wingY: 256, tailY: 364, tailSpread: 46 },
  ship_interceptor_21: { wingDx: 54, wingY: 256, tailY: 389, tailSpread: 33 },
  ship_interceptor_22: { wingDx: 106, wingY: 256, tailY: 325, tailSpread: 60 },
  ship_interceptor_23: { wingDx: 51, wingY: 256, tailY: 391, tailSpread: 32 },
  ship_interceptor_24: { wingDx: 47, wingY: 264, tailY: 392, tailSpread: 31 },
  ship_interceptor_25: { wingDx: 55, wingY: 256, tailY: 389, tailSpread: 34 },
  ship_interceptor_26: { wingDx: 97, wingY: 256, tailY: 335, tailSpread: 54 },
  ship_interceptor_27: { wingDx: 97, wingY: 256, tailY: 322, tailSpread: 58 },
  ship_interceptor_28: { wingDx: 55, wingY: 256, tailY: 387, tailSpread: 33 },
  ship_interceptor_29: { wingDx: 101, wingY: 256, tailY: 337, tailSpread: 56 },
  ship_interceptor_30: { wingDx: 66, wingY: 256, tailY: 377, tailSpread: 40 },
  ship_bomber_31: { wingDx: 102, wingY: 256, tailY: 317, tailSpread: 60 },
  ship_bomber_32: { wingDx: 66, wingY: 256, tailY: 377, tailSpread: 40 },
  ship_bomber_33: { wingDx: 102, wingY: 256, tailY: 329, tailSpread: 59 },
  ship_bomber_34: { wingDx: 108, wingY: 256, tailY: 344, tailSpread: 60 },
  ship_bomber_35: { wingDx: 97, wingY: 256, tailY: 347, tailSpread: 56 },
  ship_bomber_36: { wingDx: 106, wingY: 243, tailY: 339, tailSpread: 57 },
  ship_bomber_37: { wingDx: 77, wingY: 243, tailY: 367, tailSpread: 44 },
  ship_bomber_38: { wingDx: 68, wingY: 256, tailY: 377, tailSpread: 40 },
  ship_bomber_39: { wingDx: 101, wingY: 256, tailY: 346, tailSpread: 56 },
  ship_bomber_40: { wingDx: 94, wingY: 256, tailY: 350, tailSpread: 55 },
  ship_dreadnought_41: { wingDx: 81, wingY: 256, tailY: 362, tailSpread: 48 },
  ship_dreadnought_42: { wingDx: 56, wingY: 256, tailY: 385, tailSpread: 34 },
  ship_dreadnought_43: { wingDx: 104, wingY: 242, tailY: 344, tailSpread: 57 },
  ship_dreadnought_44: { wingDx: 112, wingY: 245, tailY: 344, tailSpread: 58 },
  ship_dreadnought_45: { wingDx: 60, wingY: 256, tailY: 383, tailSpread: 38 },
  ship_dreadnought_46: { wingDx: 99, wingY: 245, tailY: 337, tailSpread: 58 },
  ship_dreadnought_47: { wingDx: 67, wingY: 256, tailY: 376, tailSpread: 42 },
  ship_dreadnought_48: { wingDx: 103, wingY: 256, tailY: 304, tailSpread: 59 },
  ship_dreadnought_49: { wingDx: 54, wingY: 256, tailY: 389, tailSpread: 33 },
  ship_dreadnought_50: { wingDx: 81, wingY: 256, tailY: 362, tailSpread: 46 }
};

const buildHullList = () => {
  const classes = [
    { key: 'scout', label: 'Phi Thuyền Do Thám', start: 1, end: 10 },
    { key: 'fighter', label: 'Chiến Cơ Tiêm Kích', start: 11, end: 20 },
    { key: 'interceptor', label: 'Chiến Cơ Đánh Chặn', start: 21, end: 30 },
    { key: 'bomber', label: 'Oanh Tạc Cơ Hạng Nặng', start: 31, end: 40 },
    { key: 'dreadnought', label: 'Thiết Giáp Hạm Vũ Trụ', start: 41, end: 50 }
  ];

  const list = [];
  for (const cls of classes) {
    for (let i = cls.start; i <= cls.end; i++) {
      const num = String(i).padStart(2, '0');
      const id = `ship_${cls.key}_${num}`;
      list.push({
        id,
        name: `${cls.label} #${num}`,
        group: cls.key,
        src: `/assets/spaceships/hulls/${id}.png`,
        thumbSrc: `/assets/spaceships/thumbs/${id}.png`
      });
    }
  }

  return list;
};

export const spaceshipGroups = {
  hull: [
    { id: 'all', name: 'Tất Cả' },
    { id: 'scout', name: 'Do Thám' },
    { id: 'fighter', name: 'Tiêm Kích' },
    { id: 'interceptor', name: 'Đánh Chặn' },
    { id: 'bomber', name: 'Cường Kích' },
    { id: 'dreadnought', name: 'Thiết Giáp' }
  ]
};

export const spaceshipConfig = {
  hull: buildHullList(),

  thrusters: [
    { id: 'thrusters_none', name: 'Tắt Động Cơ' },
    {
      id: 'thruster_plasma_blue',
      name: 'Lửa Plasma Xanh Băng (Đơn)',
      isTwin: false,
      src: '/assets/spaceships/thrusters/thruster_plasma_blue.png',
      thumbSrc: '/assets/spaceships/thumbs/thruster_plasma_blue.png'
    },
    {
      id: 'thruster_twin_plasma',
      name: 'Động Cơ Plasma Kép (Đôi)',
      isTwin: true,
      src: '/assets/spaceships/thrusters/thruster_twin_plasma.png',
      thumbSrc: '/assets/spaceships/thumbs/thruster_twin_plasma.png'
    },
    {
      id: 'thruster_fire_wide',
      name: 'Đuôi Lửa Phản Lực Rộng (Đơn)',
      isTwin: false,
      src: '/assets/spaceships/thrusters/thruster_fire_wide.png',
      thumbSrc: '/assets/spaceships/thumbs/thruster_fire_wide.png'
    },
    {
      id: 'thruster_gold_vcore',
      name: 'Lõi Phản Vật Chất Vàng (Đơn)',
      isTwin: false,
      src: '/assets/spaceships/thrusters/thruster_gold_vcore.png',
      thumbSrc: '/assets/spaceships/thumbs/thruster_gold_vcore.png'
    },
    {
      id: 'thruster_amber_jet',
      name: 'Luồng Đẩy Hổ Phách (Đơn)',
      isTwin: false,
      src: '/assets/spaceships/thrusters/thruster_amber_jet.png',
      thumbSrc: '/assets/spaceships/thumbs/thruster_amber_jet.png'
    },
    {
      id: 'thruster_ion_lance',
      name: 'Mũi Giáo Ion Siêu Tốc (Đơn)',
      isTwin: false,
      src: '/assets/spaceships/thrusters/thruster_ion_lance.png',
      thumbSrc: '/assets/spaceships/thumbs/thruster_ion_lance.png'
    },
    {
      id: 'thruster_twin_fire',
      name: 'Cặp Động Cơ Lửa Đôi (Kép)',
      isTwin: true,
      src: '/assets/spaceships/thrusters/thruster_twin_fire.png',
      thumbSrc: '/assets/spaceships/thumbs/thruster_twin_fire.png'
    },
    {
      id: 'thruster_twin_ion',
      name: 'Cặp Động Cơ Ion Kép (Đôi)',
      isTwin: true,
      src: '/assets/spaceships/thrusters/thruster_twin_ion.png',
      thumbSrc: '/assets/spaceships/thumbs/thruster_twin_ion.png'
    }
  ],

  weapons: [
    { id: 'weapons_none', name: 'Không Gắn Vũ Khí' },
    {
      id: 'weapon_dual_missiles',
      name: 'Cặp Tên Lửa Tầm Nhiệt',
      src: '/assets/spaceships/weapons/weapon_dual_missiles.png',
      thumbSrc: '/assets/spaceships/thumbs/weapon_dual_missiles.png'
    },
    {
      id: 'weapon_laser_cannons',
      name: 'Cặp Pháo Laser Gắn Cánh',
      src: '/assets/spaceships/weapons/weapon_laser_cannons.png',
      thumbSrc: '/assets/spaceships/thumbs/weapon_laser_cannons.png'
    },
    {
      id: 'weapon_photon_torpedoes',
      name: 'Cặp Ngư Lôi Photon',
      src: '/assets/spaceships/weapons/weapon_photon_torpedoes.png',
      thumbSrc: '/assets/spaceships/thumbs/weapon_photon_torpedoes.png'
    },
    {
      id: 'weapon_heavy_rockets',
      name: 'Cặp Tên Lửa Hạng Nặng',
      src: '/assets/spaceships/weapons/weapon_heavy_rockets.png',
      thumbSrc: '/assets/spaceships/thumbs/weapon_heavy_rockets.png'
    },
    {
      id: 'weapon_plasma_lances',
      name: 'Cặp Giáo Năng Lượng Plasma',
      src: '/assets/spaceships/weapons/weapon_plasma_lances.png',
      thumbSrc: '/assets/spaceships/thumbs/weapon_plasma_lances.png'
    },
    {
      id: 'weapon_quad_blasters',
      name: 'Bệ Pháo Bốn Nòng Liên Thanh',
      src: '/assets/spaceships/weapons/weapon_quad_blasters.png',
      thumbSrc: '/assets/spaceships/thumbs/weapon_quad_blasters.png'
    }
  ],

  shield: [
    { id: 'shield_none', name: 'Tắt Khiên Năng Lượng' },
    {
      id: 'shield_cyan_plasma',
      name: 'Vòm Khiên Plasma Xanh Lam',
      src: '/assets/spaceships/shields/shield_cyan_plasma.png',
      thumbSrc: '/assets/spaceships/thumbs/shield_cyan_plasma.png'
    },
    {
      id: 'shield_purple_void',
      name: 'Khiên Hư Không Tím',
      src: '/assets/spaceships/shields/shield_purple_void.png',
      thumbSrc: '/assets/spaceships/thumbs/shield_purple_void.png'
    },
    {
      id: 'shield_blue_lightning',
      name: 'Khiên Cầu Sét Điện Từ',
      src: '/assets/spaceships/shields/shield_blue_lightning.png',
      thumbSrc: '/assets/spaceships/thumbs/shield_blue_lightning.png'
    },
    {
      id: 'shield_gold_aegis',
      name: 'Vòng Khiên Aegis Hoàng Kim',
      src: '/assets/spaceships/shields/shield_gold_aegis.png',
      thumbSrc: '/assets/spaceships/thumbs/shield_gold_aegis.png'
    },
    {
      id: 'shield_star_matrix',
      name: 'Ma Trận Khiên Ánh Sao',
      src: '/assets/spaceships/shields/shield_star_matrix.png',
      thumbSrc: '/assets/spaceships/thumbs/shield_star_matrix.png'
    }
  ],

  space_bg: [
    { id: 'space_bg_none', name: 'Trong Suốt (Không Nền)' },
    {
      id: 'bg_deep_space',
      name: 'Vũ Trụ Sâu Thẳm',
      src: '/assets/spaceships/backgrounds/bg_deep_space.png',
      thumbSrc: '/assets/spaceships/thumbs/bg_deep_space.png'
    },
    {
      id: 'bg_nebula_violet',
      name: 'Tinh Vân Tím Huyền Ảo',
      src: '/assets/spaceships/backgrounds/bg_nebula_violet.png',
      thumbSrc: '/assets/spaceships/thumbs/bg_nebula_violet.png'
    },
    {
      id: 'bg_starfield_galaxy',
      name: 'Dải Ngân Hà Rực Rỡ',
      src: '/assets/spaceships/backgrounds/bg_starfield_galaxy.png',
      thumbSrc: '/assets/spaceships/thumbs/bg_starfield_galaxy.png'
    },
    {
      id: 'bg_planet_horizon',
      name: 'Chân Trời Hành Tinh Lạ',
      src: '/assets/spaceships/backgrounds/bg_planet_horizon.png',
      thumbSrc: '/assets/spaceships/thumbs/bg_planet_horizon.png'
    }
  ]
};

const hullPalette = [
  { name: 'Nguyên Bản Nhà Máy', hex: '#FFFFFF' },
  { name: 'Đỏ Sao Hỏa', hex: '#EF4444' },
  { name: 'Xanh Ngân Hà', hex: '#3B82F6' },
  { name: 'Vàng Hoàng Gia', hex: '#EAB308' },
  { name: 'Xanh Ngọc Lục Bảo', hex: '#10B981' },
  { name: 'Tím Không Gian', hex: '#A855F7' },
  { name: 'Xanh Băng Cyber', hex: '#06B6D4' },
  { name: 'Cam Siêu Tân Tinh', hex: '#F97316' }
];

export const spaceshipColorPalettes = {
  hull: hullPalette,
  thrusters: hullPalette,
  weapons: hullPalette,
  shield: hullPalette,
  space_bg: [{ name: 'Nguyên Bản', hex: '#FFFFFF' }]
};

export const getSpaceshipLayers = (selections = {}, colors = {}) => {
  const layers = [];
  const hullItem = spaceshipConfig.hull.find(h => h.id === selections.hull) || spaceshipConfig.hull[0];
  const anchor = HULL_ANCHORS[hullItem?.id] || { wingDx: 85, wingY: 256, tailY: 360, tailSpread: 46 };

  const bgItem = spaceshipConfig.space_bg.find(b => b.id === selections.space_bg);
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

  const thrusterItem = spaceshipConfig.thrusters.find(t => t.id === selections.thrusters);
  if (thrusterItem && thrusterItem.src) {
    const dy = (anchor.tailY - 14) - 256;
    if (thrusterItem.isTwin) {
      layers.push({
        id: `${thrusterItem.id}_left`,
        category: 'thrusters',
        name: `${thrusterItem.name} (Trái)`,
        src: thrusterItem.src,
        color: colors.thrusters || '#ffffff',
        offsetPx: { x: -anchor.tailSpread, y: dy },
        z_index: 1
      });
      layers.push({
        id: `${thrusterItem.id}_right`,
        category: 'thrusters',
        name: `${thrusterItem.name} (Phải)`,
        src: thrusterItem.src,
        color: colors.thrusters || '#ffffff',
        offsetPx: { x: anchor.tailSpread, y: dy },
        flipX: true,
        z_index: 1
      });
    } else {
      layers.push({
        id: thrusterItem.id,
        category: 'thrusters',
        name: thrusterItem.name,
        src: thrusterItem.src,
        color: colors.thrusters || '#ffffff',
        offsetPx: { x: 0, y: dy },
        z_index: 1
      });
    }
  }

  const weaponItem = spaceshipConfig.weapons.find(w => w.id === selections.weapons);
  if (weaponItem && weaponItem.src) {
    const wy = (anchor.wingY - 12) - 256;
    layers.push({
      id: `${weaponItem.id}_left`,
      category: 'weapons',
      name: `${weaponItem.name} (Cánh Trái)`,
      src: weaponItem.src,
      color: colors.weapons || '#ffffff',
      offsetPx: { x: -anchor.wingDx, y: wy },
      z_index: 2
    });
    layers.push({
      id: `${weaponItem.id}_right`,
      category: 'weapons',
      name: `${weaponItem.name} (Cánh Phải)`,
      src: weaponItem.src,
      color: colors.weapons || '#ffffff',
      offsetPx: { x: anchor.wingDx, y: wy },
      flipX: true,
      z_index: 2
    });
  }

  if (hullItem && hullItem.src) {
    layers.push({
      id: hullItem.id,
      category: 'hull',
      name: hullItem.name,
      src: hullItem.src,
      color: colors.hull || '#ffffff',
      z_index: 3
    });
  }

  const shieldItem = spaceshipConfig.shield.find(s => s.id === selections.shield);
  if (shieldItem && shieldItem.src) {
    layers.push({
      id: shieldItem.id,
      category: 'shield',
      name: shieldItem.name,
      src: shieldItem.src,
      color: colors.shield || '#ffffff',
      z_index: 4
    });
  }

  return layers;
};
