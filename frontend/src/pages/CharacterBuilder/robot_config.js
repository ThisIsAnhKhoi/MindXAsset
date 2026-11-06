/**
 * Robot & Mecha Combat Studio Configuration (512x512 Native HD RGBA)
 * 4 Distinct Robot Classes -> 29 Chassis (4 Hoverbot Stances, 6 Cyber Watchers, 8 Utility & Cyber Turrets, 11 Mecha Starships)
 * Hoverbot-compatible Side Propeller Thrusters & Real Golden Laser Beams, plus Companion Drones & Space Backgrounds.
 * (HUD Visor removed per user feedback).
 */

export const robotGroups = {};

const buildMechaShipChassis = () => {
  const names = [
    'Chiến Cơ Mecha Xung Kích #01',
    'Chiến Cơ Mecha Lưỡi Hái #02',
    'Chiến Cơ Mecha Siêu Thanh #03',
    'Chiến Cơ Mecha Cánh Kép #04',
    'Chiến Cơ Mecha Phượng Hoàng #05',
    'Chiến Cơ Mecha Hộ Vệ #06',
    'Chiến Cơ Mecha Trọng Pháo #07',
    'Chiến Cơ Mecha Tia Chớp #08',
    'Chiến Cơ Mecha Hắc Ám #09',
    'Chiến Cơ Mecha Tinh Vân #10',
    'Soái Hạm Mecha Tối Thượng #11'
  ];
  return names.map((name, idx) => {
    const num = String(idx + 1).padStart(2, '0');
    const id = `chassis_mechaship_${num}`;
    return {
      id,
      name,
      forClass: 'cls_mechaship',
      src: `/assets/robots/chassis/${id}.png`,
      thumbSrc: `/assets/robots/thumbs/${id}.png`
    };
  });
};

export const robotConfig = {
  robot_class: [
    {
      id: 'cls_hoverbot',
      name: 'Hoverbot Chiến Đấu Hạng Nặng (4 Tư Thế)',
      defaultChassis: 'chassis_hover_neutral',
      src: '/assets/robots/chassis/chassis_hover_neutral.png',
      thumbSrc: '/assets/robots/thumbs/chassis_hover_neutral.png'
    },
    {
      id: 'cls_watcher',
      name: 'Cyber Watcher Cầu Trinh Sát (6 Mẫu)',
      defaultChassis: 'chassis_watcher_01',
      src: '/assets/robots/chassis/chassis_watcher_01.png',
      thumbSrc: '/assets/robots/thumbs/chassis_watcher_01.png'
    },
    {
      id: 'cls_utility',
      name: 'Robot Công Nghiệp & Tháp Pháo (8 Mẫu)',
      defaultChassis: 'chassis_utility_01',
      src: '/assets/robots/chassis/chassis_utility_01.png',
      thumbSrc: '/assets/robots/thumbs/chassis_utility_01.png'
    },
    {
      id: 'cls_mechaship',
      name: 'Chiến Cơ Mecha Giáp Sắt (11 Mẫu)',
      defaultChassis: 'chassis_mechaship_01',
      src: '/assets/robots/chassis/chassis_mechaship_01.png',
      thumbSrc: '/assets/robots/thumbs/chassis_mechaship_01.png'
    },
    {
      id: 'cls_gundam',
      name: 'Mecha Gundam & Giáp Bộ Binh (14 Mẫu)',
      defaultChassis: 'gundam_rx_cannon',
      src: '/assets/robots/chassis/gundam_rx_cannon.png',
      thumbSrc: '/assets/robots/thumbs/gundam_rx_cannon.png'
    },
    {
      id: 'cls_vehicle',
      name: 'Chiến Xa & Mecha Biến Hình (12 Mẫu)',
      defaultChassis: 'veh_blue_apc_rifle',
      src: '/assets/robots/chassis/veh_blue_apc_rifle.png',
      thumbSrc: '/assets/robots/thumbs/veh_blue_apc_rifle.png'
    }
  ],

  chassis: [
    // Class 1: Hoverbot (4 stances)
    {
      id: 'chassis_hover_neutral',
      name: 'Hoverbot Chiến Đấu (Thế Chuẩn)',
      forClass: 'cls_hoverbot',
      src: '/assets/robots/chassis/chassis_hover_neutral.png',
      thumbSrc: '/assets/robots/thumbs/chassis_hover_neutral.png'
    },
    {
      id: 'chassis_hover_combat',
      name: 'Hoverbot Chiến Đấu (Thế Phòng Thủ)',
      forClass: 'cls_hoverbot',
      src: '/assets/robots/chassis/chassis_hover_combat.png',
      thumbSrc: '/assets/robots/thumbs/chassis_hover_combat.png'
    },
    {
      id: 'chassis_hover_charge',
      name: 'Hoverbot Nạp Năng Lượng Lõi',
      forClass: 'cls_hoverbot',
      src: '/assets/robots/chassis/chassis_hover_charge.png',
      thumbSrc: '/assets/robots/thumbs/chassis_hover_charge.png'
    },
    {
      id: 'chassis_hover_overdrive',
      name: 'Hoverbot Xả Pháo Overdrive',
      forClass: 'cls_hoverbot',
      src: '/assets/robots/chassis/chassis_hover_overdrive.png',
      thumbSrc: '/assets/robots/thumbs/chassis_hover_overdrive.png'
    },

    // Class 2: Cyber Watcher (6 models)
    {
      id: 'chassis_watcher_01',
      name: 'Cyber Watcher Xúc Tu Cơ Giới #01',
      forClass: 'cls_watcher',
      src: '/assets/robots/chassis/chassis_watcher_01.png',
      thumbSrc: '/assets/robots/thumbs/chassis_watcher_01.png'
    },
    {
      id: 'chassis_watcher_02',
      name: 'Cyber Watcher Đèn Báo Hiệu #02',
      forClass: 'cls_watcher',
      src: '/assets/robots/chassis/chassis_watcher_02.png',
      thumbSrc: '/assets/robots/thumbs/chassis_watcher_02.png'
    },
    {
      id: 'chassis_watcher_03',
      name: 'Cyber Watcher Ăng-Ten Quét #03',
      forClass: 'cls_watcher',
      src: '/assets/robots/chassis/chassis_watcher_03.png',
      thumbSrc: '/assets/robots/thumbs/chassis_watcher_03.png'
    },
    {
      id: 'chassis_watcher_04',
      name: 'Cyber Watcher Kẹp Quang Học #04',
      forClass: 'cls_watcher',
      src: '/assets/robots/chassis/chassis_watcher_04.png',
      thumbSrc: '/assets/robots/thumbs/chassis_watcher_04.png'
    },
    {
      id: 'chassis_watcher_05',
      name: 'Cyber Watcher Rada Tối Thượng #05',
      forClass: 'cls_watcher',
      src: '/assets/robots/chassis/chassis_watcher_05.png',
      thumbSrc: '/assets/robots/thumbs/chassis_watcher_05.png'
    },
    {
      id: 'chassis_watcher_06',
      name: 'Cyber Watcher Lõi Năng Lượng #06',
      forClass: 'cls_watcher',
      src: '/assets/robots/chassis/chassis_watcher_06.png',
      thumbSrc: '/assets/robots/thumbs/chassis_watcher_06.png'
    },

    // Class 3: Utility & Cyber Turrets (8 models)
    {
      id: 'chassis_utility_01',
      name: 'Robot Công Nghiệp Càng Kẹp #01',
      forClass: 'cls_utility',
      src: '/assets/robots/chassis/chassis_utility_01.png',
      thumbSrc: '/assets/robots/thumbs/chassis_utility_01.png'
    },
    {
      id: 'chassis_utility_02',
      name: 'Robot Rada Viễn Thám #02',
      forClass: 'cls_utility',
      src: '/assets/robots/chassis/chassis_utility_02.png',
      thumbSrc: '/assets/robots/thumbs/chassis_utility_02.png'
    },
    {
      id: 'chassis_utility_03',
      name: 'Robot Cánh Ngầm Phản Lực #03',
      forClass: 'cls_utility',
      src: '/assets/robots/chassis/chassis_utility_03.png',
      thumbSrc: '/assets/robots/thumbs/chassis_utility_03.png'
    },
    {
      id: 'chassis_utility_04',
      name: 'Robot Thiết Giáp Cánh Tinh Thể #04',
      forClass: 'cls_utility',
      src: '/assets/robots/chassis/chassis_utility_04.png',
      thumbSrc: '/assets/robots/thumbs/chassis_utility_04.png'
    },
    {
      id: 'chassis_turret_blade',
      name: 'Tháp Pháo Cánh Dao Tự Hành #05',
      forClass: 'cls_utility',
      src: '/assets/robots/chassis/chassis_turret_blade.png',
      thumbSrc: '/assets/robots/thumbs/chassis_turret_blade.png'
    },
    {
      id: 'chassis_turret_radar',
      name: 'Trạm Rada Quang Học Cố Định #06',
      forClass: 'cls_utility',
      src: '/assets/robots/chassis/chassis_turret_radar.png',
      thumbSrc: '/assets/robots/thumbs/chassis_turret_radar.png'
    },
    {
      id: 'chassis_turret_sphere',
      name: 'Trạm Cầu Hộ Vệ Năng Lượng #07',
      forClass: 'cls_utility',
      src: '/assets/robots/chassis/chassis_turret_sphere.png',
      thumbSrc: '/assets/robots/thumbs/chassis_turret_sphere.png'
    },
    {
      id: 'chassis_turret_reactor',
      name: 'Lò Phản Ứng Hạt Nhân Tự Vệ #08',
      forClass: 'cls_utility',
      src: '/assets/robots/chassis/chassis_turret_reactor.png',
      thumbSrc: '/assets/robots/thumbs/chassis_turret_reactor.png'
    },

    // Class 4: Mecha Starships (11 models)
    ...buildMechaShipChassis(),

    // Class 5: Mecha Gundam & Cyber Knights (14 models - Mecha Maker 2025 Vol 1 & Vol 2)
    {
      id: 'gundam_rx_cannon',
      name: 'Gundam RX Pháo Siêu Trường #01',
      forClass: 'cls_gundam',
      src: '/assets/robots/chassis/gundam_rx_cannon.png',
      thumbSrc: '/assets/robots/thumbs/gundam_rx_cannon.png'
    },
    {
      id: 'gundam_rx_flight',
      name: 'Gundam RX Cánh Phản Lực Không Chiến #02',
      forClass: 'cls_gundam',
      src: '/assets/robots/chassis/gundam_rx_flight.png',
      thumbSrc: '/assets/robots/thumbs/gundam_rx_flight.png'
    },
    {
      id: 'gundam_crimson_heavy',
      name: 'Mecha Crimson Đại Pháo Hạng Nặng #03',
      forClass: 'cls_gundam',
      src: '/assets/robots/chassis/gundam_crimson_heavy.png',
      thumbSrc: '/assets/robots/thumbs/gundam_crimson_heavy.png'
    },
    {
      id: 'gundam_samurai_ronin',
      name: 'Samurai Mecha Song Kiếm Ronin #04',
      forClass: 'cls_gundam',
      src: '/assets/robots/chassis/gundam_samurai_ronin.png',
      thumbSrc: '/assets/robots/thumbs/gundam_samurai_ronin.png'
    },
    {
      id: 'gundam_drill_berserker',
      name: 'Mecha Hắc Ám Song Khoan Berserker #05',
      forClass: 'cls_gundam',
      src: '/assets/robots/chassis/gundam_drill_berserker.png',
      thumbSrc: '/assets/robots/thumbs/gundam_drill_berserker.png'
    },
    {
      id: 'gundam_paladin_lancer',
      name: 'Kỵ Sĩ Mecha Khiên Thánh Paladin #06',
      forClass: 'cls_gundam',
      src: '/assets/robots/chassis/gundam_paladin_lancer.png',
      thumbSrc: '/assets/robots/thumbs/gundam_paladin_lancer.png'
    },
    {
      id: 'gundam_overlord_black',
      name: 'Thiết Giáp Chúa Tể Hắc Ám Overlord #07',
      forClass: 'cls_gundam',
      src: '/assets/robots/chassis/gundam_overlord_black.png',
      thumbSrc: '/assets/robots/thumbs/gundam_overlord_black.png'
    },
    {
      id: 'gundam_white_trooper',
      name: 'Binh Đoàn Mecha Trắng Xung Kích #08',
      forClass: 'cls_gundam',
      src: '/assets/robots/chassis/gundam_white_trooper.png',
      thumbSrc: '/assets/robots/thumbs/gundam_white_trooper.png'
    },
    {
      id: 'gundam_white_buster',
      name: 'Binh Đoàn Mecha Trắng Pháo Buster #09',
      forClass: 'cls_gundam',
      src: '/assets/robots/chassis/gundam_white_buster.png',
      thumbSrc: '/assets/robots/thumbs/gundam_white_buster.png'
    },
    {
      id: 'gundam_red_commando',
      name: 'Đặc Nhiệm Mecha Đỏ Commando #10',
      forClass: 'cls_gundam',
      src: '/assets/robots/chassis/gundam_red_commando.png',
      thumbSrc: '/assets/robots/thumbs/gundam_red_commando.png'
    },
    {
      id: 'gundam_red_heavy',
      name: 'Đặc Nhiệm Mecha Đỏ Pháo Hạng Nặng #11',
      forClass: 'cls_gundam',
      src: '/assets/robots/chassis/gundam_red_heavy.png',
      thumbSrc: '/assets/robots/thumbs/gundam_red_heavy.png'
    },
    {
      id: 'gundam_titan_crimson',
      name: 'Giáp Hạng Nặng Titan Huyết Thạch #12',
      forClass: 'cls_gundam',
      src: '/assets/robots/chassis/gundam_titan_crimson.png',
      thumbSrc: '/assets/robots/thumbs/gundam_titan_crimson.png'
    },
    {
      id: 'gundam_titan_violet',
      name: 'Giáp Hạng Nặng Titan Bóng Đêm #13',
      forClass: 'cls_gundam',
      src: '/assets/robots/chassis/gundam_titan_violet.png',
      thumbSrc: '/assets/robots/thumbs/gundam_titan_violet.png'
    },
    {
      id: 'gundam_titan_desert',
      name: 'Giáp Hạng Nặng Titan Sa Mạc #14',
      forClass: 'cls_gundam',
      src: '/assets/robots/chassis/gundam_titan_desert.png',
      thumbSrc: '/assets/robots/thumbs/gundam_titan_desert.png'
    },

    // Class 6: Combat Vehicles & Transformable Mechs (12 models)
    {
      id: 'veh_blue_apc_rifle',
      name: 'Chiến Xa Thiết Giáp Xanh Pháo Xung Kích #01',
      forClass: 'cls_vehicle',
      src: '/assets/robots/chassis/veh_blue_apc_rifle.png',
      thumbSrc: '/assets/robots/thumbs/veh_blue_apc_rifle.png'
    },
    {
      id: 'veh_blue_mortar_tank',
      name: 'Pháo Đài Thiết Giáp Xanh Cối Hạng Nặng #02',
      forClass: 'cls_vehicle',
      src: '/assets/robots/chassis/veh_blue_mortar_tank.png',
      thumbSrc: '/assets/robots/thumbs/veh_blue_mortar_tank.png'
    },
    {
      id: 'veh_crimson_drill_tank',
      name: 'Chiến Xa Mũi Khoan Địa Ngục Đỏ #03',
      forClass: 'cls_vehicle',
      src: '/assets/robots/chassis/veh_crimson_drill_tank.png',
      thumbSrc: '/assets/robots/thumbs/veh_crimson_drill_tank.png'
    },
    {
      id: 'veh_emerald_aero_fighter',
      name: 'Tiêm Kích Cơ Giới Ngọc Lục Bảo #04',
      forClass: 'cls_vehicle',
      src: '/assets/robots/chassis/veh_emerald_aero_fighter.png',
      thumbSrc: '/assets/robots/thumbs/veh_emerald_aero_fighter.png'
    },
    {
      id: 'veh_blue_drill_sub',
      name: 'Tàu Ngầm Mũi Khoan Thép Xanh #05',
      forClass: 'cls_vehicle',
      src: '/assets/robots/chassis/veh_blue_drill_sub.png',
      thumbSrc: '/assets/robots/thumbs/veh_blue_drill_sub.png'
    },
    {
      id: 'veh_silver_hover_lancer',
      name: 'Chiến Cơ Đệm Từ Trường Bạc #06',
      forClass: 'cls_vehicle',
      src: '/assets/robots/chassis/veh_silver_hover_lancer.png',
      thumbSrc: '/assets/robots/thumbs/veh_silver_hover_lancer.png'
    },
    {
      id: 'veh_hover_scout_pod',
      name: 'Khoang Trinh Sát Đệm Khí Bạc #07',
      forClass: 'cls_vehicle',
      src: '/assets/robots/chassis/veh_hover_scout_pod.png',
      thumbSrc: '/assets/robots/thumbs/veh_hover_scout_pod.png'
    },
    {
      id: 'veh_spiked_siege_pod',
      name: 'Khoang Công Thành Gai Thép Đỏ #08',
      forClass: 'cls_vehicle',
      src: '/assets/robots/chassis/veh_spiked_siege_pod.png',
      thumbSrc: '/assets/robots/thumbs/veh_spiked_siege_pod.png'
    },
    {
      id: 'veh_cyber_moto_red',
      name: 'Mô-Tô Phân Khối Cyber Đỏ #09',
      forClass: 'cls_vehicle',
      src: '/assets/robots/chassis/veh_cyber_moto_red.png',
      thumbSrc: '/assets/robots/thumbs/veh_cyber_moto_red.png'
    },
    {
      id: 'veh_cyber_moto_blue',
      name: 'Mô-Tô Phân Khối Cyber Xanh #10',
      forClass: 'cls_vehicle',
      src: '/assets/robots/chassis/veh_cyber_moto_blue.png',
      thumbSrc: '/assets/robots/thumbs/veh_cyber_moto_blue.png'
    },
    {
      id: 'veh_iron_submarine',
      name: 'Tàu Ngầm Thiết Giáp Bạc #11',
      forClass: 'cls_vehicle',
      src: '/assets/robots/chassis/veh_iron_submarine.png',
      thumbSrc: '/assets/robots/thumbs/veh_iron_submarine.png'
    },
    {
      id: 'veh_piyo_egg_cruiser',
      name: 'Khoang Tàu Con Thoi Piyo #12',
      forClass: 'cls_vehicle',
      src: '/assets/robots/chassis/veh_piyo_egg_cruiser.png',
      thumbSrc: '/assets/robots/thumbs/veh_piyo_egg_cruiser.png'
    }
  ],

  thrusters: [
    { id: 'thrusters_none', name: 'Không Lắp Động Cơ Phụ' },
    {
      id: 'thruster_propellers_mid',
      name: 'Chân Đẩy Phản Lực Cân Bằng (Hoverbot)',
      allowedClasses: ['cls_hoverbot'],
      src: '/assets/robots/thrusters/thruster_propellers_mid.png',
      thumbSrc: '/assets/robots/thumbs/thruster_propellers_mid.png'
    },
    {
      id: 'thruster_propellers_left',
      name: 'Chân Đẩy Nghiêng Trái (Hoverbot)',
      allowedClasses: ['cls_hoverbot'],
      src: '/assets/robots/thrusters/thruster_propellers_left.png',
      thumbSrc: '/assets/robots/thumbs/thruster_propellers_left.png'
    },
    {
      id: 'thruster_propellers_right',
      name: 'Chân Đẩy Nghiêng Phải (Hoverbot)',
      allowedClasses: ['cls_hoverbot'],
      src: '/assets/robots/thrusters/thruster_propellers_right.png',
      thumbSrc: '/assets/robots/thumbs/thruster_propellers_right.png'
    }
  ],

  weapons: [
    { id: 'weapons_none', name: 'Không Kích Hoạt Tia Laser' },
    {
      id: 'weapon_laser_focus',
      name: 'Tia Laser Hội Tụ Trung Tâm (Hoverbot)',
      allowedClasses: ['cls_hoverbot'],
      src: '/assets/robots/weapons/weapon_laser_focus.png',
      thumbSrc: '/assets/robots/thumbs/weapon_laser_focus.png'
    },
    {
      id: 'weapon_laser_hyper',
      name: 'Đại Pháo Laser Siêu Hội Tụ (Hoverbot)',
      allowedClasses: ['cls_hoverbot'],
      src: '/assets/robots/weapons/weapon_laser_hyper.png',
      thumbSrc: '/assets/robots/thumbs/weapon_laser_hyper.png'
    },
    {
      id: 'weapon_twin_shoulder_lasers',
      name: 'Cặp Laser Pháo Vai Đôi (Hoverbot)',
      allowedClasses: ['cls_hoverbot'],
      src: '/assets/robots/weapons/weapon_twin_shoulder_lasers.png',
      thumbSrc: '/assets/robots/thumbs/weapon_twin_shoulder_lasers.png'
    },
    {
      id: 'weapon_tri_overdrive',
      name: 'Tam Pháo Laser Overdrive Tối Thượng (Hoverbot)',
      allowedClasses: ['cls_hoverbot'],
      src: '/assets/robots/weapons/weapon_tri_overdrive.png',
      thumbSrc: '/assets/robots/thumbs/weapon_tri_overdrive.png'
    }
  ],

  companion: [
    { id: 'companion_none', name: 'Không Triệu Hồi Drone' },
    {
      id: 'companion_drone_twin',
      name: 'Cặp Drone Hộ Vệ Song Sinh',
      src: '/assets/robots/companions/companion_drone_twin.png',
      thumbSrc: '/assets/robots/thumbs/companion_drone_twin.png'
    },
    {
      id: 'companion_drone_left',
      name: 'Drone Trinh Sát Cánh Trái',
      src: '/assets/robots/companions/companion_drone_left.png',
      thumbSrc: '/assets/robots/thumbs/companion_drone_left.png'
    },
    {
      id: 'companion_drone_right',
      name: 'Drone Trinh Sát Cánh Phải',
      src: '/assets/robots/companions/companion_drone_right.png',
      thumbSrc: '/assets/robots/thumbs/companion_drone_right.png'
    }
  ],

  space_bg: [
    { id: 'space_bg_none', name: 'Trong Suốt (Không Nền)' },
    {
      id: 'bg_deep_space',
      name: 'Trạm Không Gian Sâu',
      src: '/assets/spaceships/backgrounds/bg_deep_space.png',
      thumbSrc: '/assets/spaceships/thumbs/bg_deep_space.png'
    },
    {
      id: 'bg_nebula_violet',
      name: 'Tinh Vân Năng Lượng Tím',
      src: '/assets/spaceships/backgrounds/bg_nebula_violet.png',
      thumbSrc: '/assets/spaceships/thumbs/bg_nebula_violet.png'
    },
    {
      id: 'bg_planet_horizon',
      name: 'Quỹ Đạo Hành Tinh Cơ Khí',
      src: '/assets/spaceships/backgrounds/bg_planet_horizon.png',
      thumbSrc: '/assets/spaceships/thumbs/bg_planet_horizon.png'
    }
  ]
};

const mechaPalette = [
  { name: 'Nguyên Bản Nhà Máy', hex: '#FFFFFF' },
  { name: 'Đỏ Crimson Mecha', hex: '#EF4444' },
  { name: 'Xanh Cyber Neon', hex: '#3B82F6' },
  { name: 'Vàng Công Nghiệp Nặng', hex: '#EAB308' },
  { name: 'Xanh Lục Quân Sự', hex: '#10B981' },
  { name: 'Tím Lõi Năng Lượng', hex: '#A855F7' },
  { name: 'Xanh Băng Quang Học', hex: '#06B6D4' },
  { name: 'Cam Nhiệt Hạch', hex: '#F97316' }
];

export const robotColorPalettes = {
  robot_class: [{ name: 'Nguyên Bản', hex: '#FFFFFF' }],
  chassis: mechaPalette,
  thrusters: mechaPalette,
  weapons: mechaPalette,
  companion: mechaPalette,
  space_bg: [{ name: 'Nguyên Bản', hex: '#FFFFFF' }]
};

export const getRobotLayers = (selections = {}, colors = {}) => {
  const layers = [];

  const bgItem = robotConfig.space_bg.find(b => b.id === selections.space_bg);
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

  const activeClass = selections.robot_class || 'cls_hoverbot';
  const chassisItem =
    robotConfig.chassis.find(c => c.id === selections.chassis && c.forClass === activeClass) ||
    robotConfig.chassis.find(c => c.forClass === activeClass) ||
    robotConfig.chassis[0];

  const isHoverbot = chassisItem?.forClass === 'cls_hoverbot';

  // Hoverbot side propeller thrusters ONLY render on Hoverbot chassis
  if (isHoverbot) {
    const thrusterItem = robotConfig.thrusters.find(t => t.id === selections.thrusters);
    if (thrusterItem && thrusterItem.src) {
      layers.push({
        id: thrusterItem.id,
        category: 'thrusters',
        name: thrusterItem.name,
        src: thrusterItem.src,
        color: colors.thrusters || '#ffffff',
        z_index: 1
      });
    }
  }

  // Hoverbot laser beams ONLY render on Hoverbot chassis
  if (isHoverbot) {
    const weaponItem = robotConfig.weapons.find(w => w.id === selections.weapons);
    if (weaponItem && weaponItem.src) {
      layers.push({
        id: weaponItem.id,
        category: 'weapons',
        name: weaponItem.name,
        src: weaponItem.src,
        color: colors.weapons || '#ffffff',
        z_index: 2
      });
    }
  }

  if (chassisItem && chassisItem.src) {
    layers.push({
      id: chassisItem.id,
      category: 'chassis',
      name: chassisItem.name,
      src: chassisItem.src,
      color: colors.chassis || '#ffffff',
      z_index: 3
    });
  }

  const companionItem = robotConfig.companion.find(c => c.id === selections.companion);
  if (companionItem && companionItem.src) {
    layers.push({
      id: companionItem.id,
      category: 'companion',
      name: companionItem.name,
      src: companionItem.src,
      color: colors.companion || '#ffffff',
      z_index: 4
    });
  }

  return layers;
};
