/**
 * Configuration & Layer Composer for Grand Fleet Top-Down Vehicles Studio
 * Merged & harmonized from:
 * 1. TopDown Vehicles v1.17 by @MinZiin_ (25 vehicles, 8 factory paints)
 * 2. Flipped Fleet Car Pack US by Filip Hron (16 American fleet vehicles)
 * 3. Flipped Fleet Car Pack EU by Filip Hron (16 European fleet vehicles)
 * Total: 57 unified vehicles (19x3 balanced grid, zero empty slots).
 */

export const vehicleConfig = {
  chassis: [
    // === PHÂN KHÚC 1: SIÊU XE & ĐUA TỐC ĐỘ (HYPERCAR & SPORTS) ===
    {
      id: 'supercar',
      name: 'Siêu Xe Hypercar GT (Supercar)',
      thumbSrc: '/assets/vehicles/thumbs/chassis_supercar.png'
    },
    {
      id: 'sport',
      name: 'Xe Thể Thao Tốc Độ (Sportscar GT)',
      thumbSrc: '/assets/vehicles/thumbs/chassis_sport.png'
    },
    {
      id: 'musclecar',
      name: 'Xe Cơ Bắp Đường Phố (Muscle Car)',
      thumbSrc: '/assets/vehicles/thumbs/chassis_musclecar.png'
    },
    {
      id: 'coupe',
      name: 'Xe Coupe Thể Thao 2 Cửa (Coupe)',
      thumbSrc: '/assets/vehicles/thumbs/chassis_coupe.png'
    },
    {
      id: 'us_gt_coupe',
      name: '🇺🇸 Siêu Xe GT Coupe Grand Tourer Mỹ',
      thumbSrc: '/assets/vehicles/thumbs/chassis_us_gt_coupe.png'
    },
    {
      id: 'us_sports_yellow',
      name: '🇺🇸 Xe Thể Thao Bumblebee Vàng Mỹ',
      thumbSrc: '/assets/vehicles/thumbs/chassis_us_sports_yellow.png'
    },
    {
      id: 'us_coupe',
      name: '🇺🇸 Xe Coupe Cổ Điển Đường Phố Mỹ',
      thumbSrc: '/assets/vehicles/thumbs/chassis_us_coupe.png'
    },
    {
      id: 'eu_sports',
      name: '🇪🇺 Xe Thể Thao Mui Kính Châu Âu',
      thumbSrc: '/assets/vehicles/thumbs/chassis_eu_sports.png'
    },
    {
      id: 'eu_hot_hatch',
      name: '🇪🇺 Xe Hot Hatch Thể Thao Tốc Độ EU',
      thumbSrc: '/assets/vehicles/thumbs/chassis_eu_hot_hatch.png'
    },

    // === PHÂN KHÚC 2: XE ĐÔ THỊ, COMPACT & GIA ĐÌNH (CITY & SEDAN) ===
    {
      id: 'sedan',
      name: 'Xe Sedan Đô Thị Tiêu Chuẩn',
      thumbSrc: '/assets/vehicles/thumbs/chassis_sedan.png'
    },
    {
      id: 'civic',
      name: 'Xe Đô Thị Nhỏ Gọn (Civic Hatch)',
      thumbSrc: '/assets/vehicles/thumbs/chassis_civic.png'
    },
    {
      id: 'hatchback',
      name: 'Xe Hatchback Thể Thao Đô Thị',
      thumbSrc: '/assets/vehicles/thumbs/chassis_hatchback.png'
    },
    {
      id: 'eu_sedan',
      name: '🇪🇺 Xe Sedan Doanh Nhân Châu Âu',
      thumbSrc: '/assets/vehicles/thumbs/chassis_eu_sedan.png'
    },
    {
      id: 'eu_hatchback',
      name: '🇪🇺 Xe Hatchback Đô Thị Châu Âu',
      thumbSrc: '/assets/vehicles/thumbs/chassis_eu_hatchback.png'
    },
    {
      id: 'eu_liftback',
      name: '🇪🇺 Xe Liftback Khí Động Học EU',
      thumbSrc: '/assets/vehicles/thumbs/chassis_eu_liftback.png'
    },
    {
      id: 'eu_city_car',
      name: '🇪🇺 Xe Đô Thị Mini Siêu Nhỏ EU',
      thumbSrc: '/assets/vehicles/thumbs/chassis_eu_city_car.png'
    },
    {
      id: 'micro',
      name: 'Xe Điện Mini Siêu Gọn (Micro Car)',
      thumbSrc: '/assets/vehicles/thumbs/chassis_micro.png'
    },
    {
      id: 'luxury',
      name: 'Xe Hạng Sang Nguyên Thủ (Luxury)',
      thumbSrc: '/assets/vehicles/thumbs/chassis_luxury.png'
    },

    // === PHÂN KHÚC 3: XE DÀI VIP & GIA ĐÌNH ĐA DỤNG (LIMO & WAGON) ===
    {
      id: 'limo',
      name: 'Xe Limousine VIP Dài (Limo GT)',
      thumbSrc: '/assets/vehicles/thumbs/chassis_limo.png'
    },
    {
      id: 'us_limo',
      name: '🇺🇸 Xe Limousine VIP Siêu Dài Mỹ',
      thumbSrc: '/assets/vehicles/thumbs/chassis_us_limo.png'
    },
    {
      id: 'wagon',
      name: 'Xe Du Lịch Gia Đình (Station Wagon)',
      thumbSrc: '/assets/vehicles/thumbs/chassis_wagon.png'
    },
    {
      id: 'eu_estate',
      name: '🇪🇺 Xe Du Lịch Wagon Estate Châu Âu',
      thumbSrc: '/assets/vehicles/thumbs/chassis_eu_estate.png'
    },
    {
      id: 'minivan',
      name: 'Xe Gia Đình 7 Chỗ (Minivan GT)',
      thumbSrc: '/assets/vehicles/thumbs/chassis_minivan.png'
    },
    {
      id: 'us_mpv',
      name: '🇺🇸 Xe Gia Đình MPV Đa Dụng Mỹ',
      thumbSrc: '/assets/vehicles/thumbs/chassis_us_mpv.png'
    },

    // === PHÂN KHÚC 4: SUV & BÁN TẢI ĐỊA HÌNH (SUV & PICKUP OFF-ROAD) ===
    {
      id: 'suv',
      name: 'SUV Đô Thị Gầm Cao (Crossover GT)',
      thumbSrc: '/assets/vehicles/thumbs/chassis_suv.png'
    },
    {
      id: 'us_crossover',
      name: '🇺🇸 Xe Crossover Đô Thị Hiện Đại Mỹ',
      thumbSrc: '/assets/vehicles/thumbs/chassis_us_crossover.png'
    },
    {
      id: 'us_suv',
      name: '🇺🇸 Xe SUV Cỡ Lớn Hầm Hố Mỹ',
      thumbSrc: '/assets/vehicles/thumbs/chassis_us_suv.png'
    },
    {
      id: 'pickup',
      name: 'Xe Bán Tải Địa Hình (Pickup 4x4)',
      thumbSrc: '/assets/vehicles/thumbs/chassis_pickup.png'
    },
    {
      id: 'us_crew_cab',
      name: '🇺🇸 Xe Bán Tải Cabin Đôi Hạng Nặng Mỹ',
      thumbSrc: '/assets/vehicles/thumbs/chassis_us_crew_cab.png'
    },
    {
      id: 'us_pickup',
      name: '🇺🇸 Xe Bán Tải Cổ Điển Thùng Dài Mỹ',
      thumbSrc: '/assets/vehicles/thumbs/chassis_us_pickup.png'
    },
    {
      id: 'us_utility_pickup',
      name: '🇺🇸 Xe Bán Tải Công Trình Kỹ Thuật Mỹ',
      thumbSrc: '/assets/vehicles/thumbs/chassis_us_utility_pickup.png'
    },
    {
      id: 'us_ute',
      name: '🇺🇸 Xe Bán Tải Thể Thao Ute Độc Lạ',
      thumbSrc: '/assets/vehicles/thumbs/chassis_us_ute.png'
    },
    {
      id: 'jeep',
      name: 'Xe Jeep Thám Hiểm Đồi Cát (Jeep)',
      thumbSrc: '/assets/vehicles/thumbs/chassis_jeep.png'
    },
    {
      id: 'eu_off_roader',
      name: '🇪🇺 Xe Địa Hình Off-Roader Châu Âu',
      thumbSrc: '/assets/vehicles/thumbs/chassis_eu_off_roader.png'
    },
    {
      id: 'camper',
      name: 'Xe Cắm Trại Dã Ngoại (Camper Van)',
      thumbSrc: '/assets/vehicles/thumbs/chassis_camper.png'
    },
    {
      id: 'us_offroad_van',
      name: '🇺🇸 Xe Van Dã Ngoại Offroad 4x4 Mỹ',
      thumbSrc: '/assets/vehicles/thumbs/chassis_us_offroad_van.png'
    },

    // === PHÂN KHÚC 5: XE CÔNG VỤ & KHẨN CẤP (POLICE, AMBULANCE & TAXI) ===
    {
      id: 'police',
      name: 'Xe Cảnh Sát Tuần Tra (Police Interceptor)',
      thumbSrc: '/assets/vehicles/thumbs/chassis_police.png'
    },
    {
      id: 'us_police',
      name: '🇺🇸 Xe Cảnh Sát Mỹ Tuần Tra Đô Thị',
      thumbSrc: '/assets/vehicles/thumbs/chassis_us_police.png'
    },
    {
      id: 'eu_police',
      name: '🇪🇺 Xe Cảnh Sát Tuần Tra Châu Âu',
      thumbSrc: '/assets/vehicles/thumbs/chassis_eu_police.png'
    },
    {
      id: 'ambulance',
      name: 'Xe Cứu Thương Khẩn Cấp (Ambulance 115)',
      thumbSrc: '/assets/vehicles/thumbs/chassis_ambulance.png'
    },
    {
      id: 'us_ambulance',
      name: '🇺🇸 Xe Cấp Cứu Paramedic Chuyên Dụng Mỹ',
      thumbSrc: '/assets/vehicles/thumbs/chassis_us_ambulance.png'
    },
    {
      id: 'eu_ambulance',
      name: '🇪🇺 Xe Cấp Cứu Battenburg Châu Âu',
      thumbSrc: '/assets/vehicles/thumbs/chassis_eu_ambulance.png'
    },
    {
      id: 'eu_fire_suv',
      name: '🇪🇺 Xe SUV Chỉ Huy Cứu Hỏa Châu Âu',
      thumbSrc: '/assets/vehicles/thumbs/chassis_eu_fire_suv.png'
    },
    {
      id: 'taxi',
      name: 'Xe Taxi Đô Thị Sọc Vàng (City Taxi)',
      thumbSrc: '/assets/vehicles/thumbs/chassis_taxi.png'
    },
    {
      id: 'us_taxi',
      name: '🇺🇸 Xe Taxi Vàng Biểu Tượng New York',
      thumbSrc: '/assets/vehicles/thumbs/chassis_us_taxi.png'
    },

    // === PHÂN KHÚC 6: XE TẢI, VAN & VẬN TẢI HÀNG (TRUCKS, VANS & BUS) ===
    {
      id: 'van',
      name: 'Xe Van Vận Chuyển Hàng (Cargo Van)',
      thumbSrc: '/assets/vehicles/thumbs/chassis_van.png'
    },
    {
      id: 'eu_van',
      name: '🇪🇺 Xe Van Vận Chuyển Hàng Châu Âu',
      thumbSrc: '/assets/vehicles/thumbs/chassis_eu_van.png'
    },
    {
      id: 'eu_premium_van',
      name: '🇪🇺 Xe Van VIP Thương Gia Châu Âu',
      thumbSrc: '/assets/vehicles/thumbs/chassis_eu_premium_van.png'
    },
    {
      id: 'eu_utility_van',
      name: '🇪🇺 Xe Van Tiện Ích Kỹ Thuật Châu Âu',
      thumbSrc: '/assets/vehicles/thumbs/chassis_eu_utility_van.png'
    },
    {
      id: 'eu_microvan',
      name: '🇪🇺 Xe Microvan Cổ Điển 2 Tông Màu',
      thumbSrc: '/assets/vehicles/thumbs/chassis_eu_microvan.png'
    },
    {
      id: 'bus',
      name: 'Xe Buýt Công Cộng Đô Thị (City Bus)',
      thumbSrc: '/assets/vehicles/thumbs/chassis_bus.png'
    },
    {
      id: 'us_minibus',
      name: '🇺🇸 Xe Buýt Mini Đô Thị Mỹ',
      thumbSrc: '/assets/vehicles/thumbs/chassis_us_minibus.png'
    },
    {
      id: 'eu_minibus',
      name: '🇪🇺 Xe Minibus Du Lịch Châu Âu',
      thumbSrc: '/assets/vehicles/thumbs/chassis_eu_minibus.png'
    },
    {
      id: 'boxtruck',
      name: 'Xe Tải Thùng Vận Chuyển (Box Truck)',
      thumbSrc: '/assets/vehicles/thumbs/chassis_boxtruck.png'
    },
    {
      id: 'mediumtruck',
      name: 'Xe Tải Hạng Trung Công Trình',
      thumbSrc: '/assets/vehicles/thumbs/chassis_mediumtruck.png'
    },

    // === PHÂN KHÚC 7: XE PHẾ LIỆU & HẬU TẬN THẾ (SURVIVAL WRECKAGE) ===
    {
      id: 'wreckage',
      name: 'Xe Đua Phế Liệu Hậu Tận Thế (Wreck)',
      thumbSrc: '/assets/vehicles/thumbs/chassis_wreckage.png'
    },
    {
      id: 'wreckage_police',
      name: 'Xe Cảnh Sát Bị Hư Hại Bỏ Hoang',
      thumbSrc: '/assets/vehicles/thumbs/chassis_wreckage_police.png'
    }
  ],

  direction: [
    {
      id: 'SOUTHEAST',
      name: 'Đông Nam (Chéo 3/4 Isometric)',
      thumbSrc: '/assets/vehicles/thumbs/direction_SOUTHEAST.png'
    },
    {
      id: 'EAST',
      name: 'Hướng Đông (Ngang Phải Profile)',
      thumbSrc: '/assets/vehicles/thumbs/direction_EAST.png'
    },
    {
      id: 'SOUTH',
      name: 'Hướng Nam (Thẳng Đầu Xe)',
      thumbSrc: '/assets/vehicles/thumbs/direction_SOUTH.png'
    },
    {
      id: 'SOUTHWEST',
      name: 'Tây Nam (Chéo 3/4 Trái Isometric)',
      thumbSrc: '/assets/vehicles/thumbs/direction_SOUTHWEST.png'
    },
    {
      id: 'WEST',
      name: 'Hướng Tây (Ngang Trái Profile)',
      thumbSrc: '/assets/vehicles/thumbs/direction_WEST.png'
    },
    {
      id: 'NORTH',
      name: 'Hướng Bắc (Thẳng Đuôi Xe Lên)',
      thumbSrc: '/assets/vehicles/thumbs/direction_NORTH.png'
    }
  ],

  paint: [
    {
      id: 'Red',
      name: 'Đỏ Thể Thao Đua (Racing Red)',
      thumbSrc: '/assets/vehicles/thumbs/paint_Red.png'
    },
    {
      id: 'Blue',
      name: 'Xanh Cobalt Năng Động (Cobalt Blue)',
      thumbSrc: '/assets/vehicles/thumbs/paint_Blue.png'
    },
    {
      id: 'Black',
      name: 'Đen Bóng Huyền Bí (Onyx Black)',
      thumbSrc: '/assets/vehicles/thumbs/paint_Black.png'
    },
    {
      id: 'White',
      name: 'Trắng Ngọc Trai (Pearl White)',
      thumbSrc: '/assets/vehicles/thumbs/paint_White.png'
    },
    {
      id: 'Yellow',
      name: 'Vàng Tươi Nổi Bật (Sport Yellow)',
      thumbSrc: '/assets/vehicles/thumbs/paint_Yellow.png'
    },
    {
      id: 'Green',
      name: 'Xanh Lục Bảo (Emerald Green)',
      thumbSrc: '/assets/vehicles/thumbs/paint_Green.png'
    }
  ],

  accessories: [
    {
      id: 'none',
      name: 'Xe Nguyên Bản (Clean Stock)',
      thumbSrc: '/assets/vehicles/thumbs/acc_none.png'
    },
    {
      id: 'headlights',
      name: 'Dàn Đèn Pha Xenon (Dual Beams)',
      thumbSrc: '/assets/vehicles/thumbs/acc_headlights.png'
    },
    {
      id: 'nitro',
      name: 'Luồng Lửa Đuôi Nitro (Twin Turbo)',
      thumbSrc: '/assets/vehicles/thumbs/acc_nitro.png'
    },
    {
      id: 'roof_beacon',
      name: 'Còi Đèn Cảnh Báo (Beacon Strobe)',
      thumbSrc: '/assets/vehicles/thumbs/acc_roof_beacon.png'
    },

    {
      id: 'drift_smoke',
      name: 'Vệt Phanh Drift & Bụi (Skidmarks)',
      thumbSrc: '/assets/vehicles/thumbs/acc_drift_smoke.png'
    }
  ],

  ground: [
    {
      id: 'asphalt_road',
      name: 'Mặt Đường Nhựa Đô Thị (Asphalt Road)',
      thumbSrc: '/assets/vehicles/thumbs/ground_asphalt_road.png'
    },
    {
      id: 'shadow_soft',
      name: 'Bóng Đổ Mềm Tiêu Chuẩn (Soft Shadow)',
      thumbSrc: '/assets/vehicles/thumbs/ground_shadow_soft.png'
    },
    {
      id: 'race_track',
      name: 'Đường Đua Tốc Độ (Race Track & Kerb)',
      thumbSrc: '/assets/vehicles/thumbs/ground_race_track.png'
    },
    {
      id: 'dirt_offroad',
      name: 'Đường Đất Bùn Địa Hình (Off-Road Dirt)',
      thumbSrc: '/assets/vehicles/thumbs/ground_dirt_offroad.png'
    },
    {
      id: 'parking_lot',
      name: 'Ô Kẻ Vạch Đỗ Xe (Parking Stall)',
      thumbSrc: '/assets/vehicles/thumbs/ground_parking_lot.png'
    },
    {
      id: 'none',
      name: 'Nền Trong Suốt (Transparent Canvas)',
      thumbSrc: '/assets/vehicles/thumbs/ground_none.png'
    }
  ]
};

export const vehicleColorPalettes = {
  chassis: [
    { name: 'Màu Sơn Nhà Máy', hex: '#FFFFFF' },
    { name: 'Đỏ Thể Thao', hex: '#EF4444' },
    { name: 'Xanh Năng Động', hex: '#3B82F6' },
    { name: 'Vàng Bumblebee', hex: '#EAB308' },
    { name: 'Xanh Lá Chiến Thuật', hex: '#10B981' },
    { name: 'Đen Carbon', hex: '#18181B' },
    { name: 'Tím Cyberpunk', hex: '#A855F7' },
    { name: 'Xanh Neon Plasma', hex: '#06B6D4' }
  ],
  direction: [
    { name: 'Mặc Định', hex: '#FFFFFF' }
  ],
  paint: [
    { name: 'Chuẩn Màu Sơn Nhà Máy', hex: '#FFFFFF' }
  ],
  accessories: [
    { name: 'Chuẩn Hiệu Ứng', hex: '#FFFFFF' },
    { name: 'Vàng Pha Xenon', hex: '#FEF08A' },
    { name: 'Lửa Xanh Plasma', hex: '#38BDF8' },
    { name: 'Lửa Đỏ Nitro', hex: '#F97316' },
    { name: 'Tím Neon Đêm', hex: '#C084FC' },
    { name: 'Xanh Lục Độc Lập', hex: '#4ADE80' }
  ],
  ground: [
    { name: 'Mặc Định', hex: '#FFFFFF' },
    { name: 'Tối Màu / Ban Đêm', hex: '#94A3B8' },
    { name: 'Bùn Nâu Đất', hex: '#D97706' },
    { name: 'Xanh Đường Rừng', hex: '#65A30D' },
    { name: 'Xám Tarmac', hex: '#64748B' },
    { name: 'Ánh Đèn Đường Neon', hex: '#F472B6' }
  ]
};

/**
 * Composes Top-Down vehicle layers in correct z-index order
 * Supports all 57 vehicles across MinZiin, US Fleet, and EU Fleet.
 */
export const getVehicleLayers = (selections = {}, colors = {}) => {
  const layers = [];

  const chassisId = selections.chassis || 'supercar';
  const directionId = selections.direction || 'SOUTHEAST';
  const paintId = selections.paint || 'Red';
  const groundId = selections.ground || 'asphalt_road';
  const accId = selections.accessories || 'none';

  // 1. Layer Mặt Đường / Bóng Đổ (z_index: 1)
  if (groundId && groundId !== 'none') {
    layers.push({
      id: `ground_${groundId}`,
      category: 'ground',
      name: 'Mặt Đường & Bóng Đổ',
      src: `/assets/vehicles/ground/${groundId}.png`,
      color: colors.ground || '#ffffff',
      z_index: 1
    });
  }

  // 2. Layer Thân Xe Top-Down (z_index: 2)
  let vehicleSrc = '';
  const isDirectSprite = 
    chassisId.startsWith('us_') || 
    chassisId.startsWith('eu_') || 
    ['police', 'ambulance', 'taxi', 'wreckage', 'wreckage_police'].includes(chassisId);

  if (isDirectSprite) {
    vehicleSrc = `/assets/vehicles/topdown/${chassisId}/${directionId}.png`;
  } else {
    // MinZiin civilian vehicles with 6/8 factory paint subfolders
    vehicleSrc = `/assets/vehicles/topdown/${chassisId}/${paintId}/${directionId}.png`;
  }

  // Preserve natural artist pixels (tires, glass, sirens, decals). Only tint if colors.chassis is explicitly given.
  const chassisTint = colors.chassis && colors.chassis !== '#ffffff' ? colors.chassis : '#ffffff';

  layers.push({
    id: `vehicle_${chassisId}_${directionId}`,
    category: 'chassis',
    name: 'Thân Xe Top-Down',
    src: vehicleSrc,
    color: chassisTint,
    z_index: 2
  });

  // 3. Layer Phụ Kiện / Hiệu Ứng (Đèn Pha, Nitro, Còi Đèn, Sọc Đua, Khói Drift) (z_index: 3)
  if (accId && accId !== 'none') {
    layers.push({
      id: `acc_${accId}_${directionId}`,
      category: 'accessories',
      name: 'Phụ Kiện & Hiệu Ứng',
      src: `/assets/vehicles/accessories/${chassisId}/${accId}_${directionId}.png`,
      color: colors.accessories || '#ffffff',
      z_index: 3
    });
  }

  return layers;
};
