/**
 * Modular Starship Constructor Configuration (512x512 Pre-Aligned HD RGBA)
 * Source: SpaceShooterShipConstructor
 * Supports both Custom 8-Layer Modular Assembly (Symmetrical Left+Right Wings, Flanks, Blasters, Cannons, Missiles)
 * and 16 Pre-Assembled Factory Reference Ships (Example 01..16).
 */

const buildIndexedList = (folder, prefix, count, labelPrefix, includeNone = false, noneLabel = 'Không Lắp') => {
  const items = [];
  if (includeNone) {
    items.push({ id: `${prefix}_none`, name: noneLabel });
  }
  for (let i = 1; i <= count; i++) {
    const num = String(i).padStart(2, '0');
    const id = `${prefix}_${num}`;
    items.push({
      id,
      name: `${labelPrefix} #${num}`,
      src: `/assets/modular_starship/${folder}/${id}.png`,
      thumbSrc: `/assets/modular_starship/thumbs/${folder}/${id}.png`
    });
  }
  return items;
};

export const modularStarshipConfig = {
  preset_mode: [
    {
      id: 'preset_custom',
      name: 'Chế Độ Tự Lắp Ráp Từng Module (Custom 8 Lớp)'
    },
    ...buildIndexedList('presets', 'example_ship', 16, 'Mẫu Tàu Nguyên Bản Nhà Máy')
  ],

  core_body: buildIndexedList('core_body', 'body_c', 5, 'Thân Chính Trung Tâm (Core Hull)'),

  flank_a: buildIndexedList('flank_a', 'body_a', 10, 'Giáp Sườn Trong Đối Xứng (Inner Flank)', true, 'Không Lắp Giáp Sườn Trong'),

  flank_b: buildIndexedList('flank_b', 'body_b', 10, 'Giáp Sườn Ngoài Đối Xứng (Outer Flank)', true, 'Không Lắp Giáp Sườn Ngoài'),

  cabin: buildIndexedList('cabins', 'cabin', 11, 'Buồng Lái Kính Cường Lực (Cockpit)'),

  wings_a: buildIndexedList('wings_a', 'wing_a', 10, 'Cánh Chính Đối Xứng (Primary Wings)', true, 'Không Lắp Cánh Chính'),

  wings_b: buildIndexedList('wings_b', 'wing_b', 10, 'Cánh Phụ Khí Động Học (Secondary Winglets)', true, 'Không Lắp Cánh Phụ'),

  engine: buildIndexedList('engines', 'engine', 10, 'Cụm Động Cơ Đuôi (Main Engine)', true, 'Không Lắp Động Cơ'),

  flame: buildIndexedList('flames', 'flame', 11, 'Luồng Lửa Phản Lực (Thruster Plume)', true, 'Tắt Luồng Lửa Đuôi'),

  guns: [
    { id: 'guns_none', name: 'Không Lắp Pháo Cánh' },
    ...buildIndexedList('guns_a', 'gun_a', 10, 'Súng Blaster Sườn Trong (Twin Blaster)'),
    ...buildIndexedList('guns_b', 'gun_b', 10, 'Đại Pháo Cánh Ngoài (Heavy Cannon)')
  ],

  ordnance: [
    { id: 'ordnance_none', name: 'Không Phóng Tên Lửa / Đạn' },
    ...buildIndexedList('ordnance', 'missile', 5, 'Cặp Tên Lửa Hành Trình Đuôi Lửa'),
    ...buildIndexedList('ordnance', 'bullet', 6, 'Loạt Đạn Laser Xung Kích'),
    ...buildIndexedList('ordnance', 'mine', 5, 'Cặp Thủy Lôi Không Gian Hộ Vệ')
  ],

  space_bg: [
    { id: 'space_bg_none', name: 'Trong Suốt (Không Nền)' },
    {
      id: 'bg_spaceshooter_grid',
      name: 'Trạm Không Gian Space Constructor',
      src: '/assets/modular_starship/backgrounds/bg_spaceshooter_grid.png',
      thumbSrc: '/assets/modular_starship/thumbs/backgrounds/bg_spaceshooter_grid.png'
    },
    {
      id: 'bg_deep_space',
      name: 'Không Gian Sâu Thẳm',
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
      id: 'bg_planet_horizon',
      name: 'Quỹ Đạo Hành Tinh',
      src: '/assets/spaceships/backgrounds/bg_planet_horizon.png',
      thumbSrc: '/assets/spaceships/thumbs/bg_planet_horizon.png'
    }
  ]
};

const hullPalette = [
  { name: 'Nguyên Bản Nhà Máy', hex: '#FFFFFF' },
  { name: 'Đỏ Crimson Không Quân', hex: '#EF4444' },
  { name: 'Xanh Liên Minh Vũ Trụ', hex: '#3B82F6' },
  { name: 'Vàng Hoàng Gia', hex: '#EAB308' },
  { name: 'Xanh Ngọc Lục Bảo', hex: '#10B981' },
  { name: 'Tím Tinh Vân', hex: '#A855F7' },
  { name: 'Xanh Băng Giá', hex: '#06B6D4' },
  { name: 'Cam Phản Lực', hex: '#F97316' }
];

export const modularStarshipColorPalettes = {
  preset_mode: hullPalette,
  core_body: hullPalette,
  flank_a: hullPalette,
  flank_b: hullPalette,
  cabin: hullPalette,
  wings_a: hullPalette,
  wings_b: hullPalette,
  engine: hullPalette,
  flame: hullPalette,
  guns: hullPalette,
  ordnance: hullPalette,
  space_bg: [{ name: 'Nguyên Bản', hex: '#FFFFFF' }]
};

export const getModularStarshipLayers = (selections = {}, colors = {}) => {
  const layers = [];

  const bgItem = modularStarshipConfig.space_bg.find(b => b.id === selections.space_bg);
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

  // Always allow ordnance and thruster flames even if viewing a preset, or render full custom stack
  const ordItem = modularStarshipConfig.ordnance.find(o => o.id === selections.ordnance);
  if (ordItem && ordItem.src) {
    layers.push({
      id: ordItem.id,
      category: 'ordnance',
      name: ordItem.name,
      src: ordItem.src,
      color: colors.ordnance || '#ffffff',
      z_index: 1
    });
  }

  const flameItem = modularStarshipConfig.flame.find(f => f.id === selections.flame);
  if (flameItem && flameItem.src) {
    layers.push({
      id: flameItem.id,
      category: 'flame',
      name: flameItem.name,
      src: flameItem.src,
      color: colors.flame || '#ffffff',
      z_index: 2
    });
  }

  const presetItem = modularStarshipConfig.preset_mode.find(p => p.id === selections.preset_mode);
  if (presetItem && presetItem.src) {
    // Factory reference ship mode
    layers.push({
      id: presetItem.id,
      category: 'preset_mode',
      name: presetItem.name,
      src: presetItem.src,
      color: colors.preset_mode || '#ffffff',
      z_index: 5
    });
    return layers;
  }

  // Custom 8-Layer Modular Assembly Stack
  const addPart = (catKey, zIndex) => {
    const list = modularStarshipConfig[catKey] || [];
    const item = list.find(x => x.id === selections[catKey]);
    if (item && item.src) {
      layers.push({
        id: item.id,
        category: catKey,
        name: item.name,
        src: item.src,
        color: colors[catKey] || '#ffffff',
        z_index: zIndex
      });
    }
  };

  addPart('engine', 3);
  addPart('guns', 4);
  addPart('wings_b', 5);
  addPart('wings_a', 6);
  addPart('flank_b', 7);
  addPart('core_body', 8);
  addPart('flank_a', 9);
  addPart('cabin', 10);

  return layers;
};

