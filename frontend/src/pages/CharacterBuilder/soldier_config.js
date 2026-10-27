// ============================================================
// SOLDIER CONFIGURATION (Chiến Binh Quân Sự & Vũ Khí Hiện Đại)
// Đã tối ưu hướng vũ khí quay về trước, tỉ lệ cầm tay chuẩn và lưới 6 ô tròn vẹn
// ============================================================

export const soldierPalettes = [
  { name: 'Mặc định (Quân đội)', hex: '#ffffff' },
  { name: 'Đặc nhiệm Đêm (Spec-Ops)', hex: '#2b2d42' },
  { name: 'Rằn ri Rừng (Woodland)', hex: '#386641' },
  { name: 'Sa mạc Tan (Desert)', hex: '#c2a649' },
  { name: 'Tuyết Bắc Cực (Arctic)', hex: '#e0e1dd' },
  { name: 'Đỏ MindX Tactical', hex: '#b91c1c' },
  { name: 'Xám Titan Urban', hex: '#64748b' }
];

export const soldierColorPalettes = {
  bases: soldierPalettes,
  vests: soldierPalettes,
  bottoms: soldierPalettes,
  helmets: soldierPalettes,
  gear: soldierPalettes,
  weapons: soldierPalettes
};

export const soldierConfig = {
  bases: [
    {
      id: 'base_soldier',
      name: 'Chiến Binh Spec-Ops',
      src: '/assets/soldier/thumbs/thumb_base_soldier.png',
      type: 'bases',
      layers: [
        {
          src: '/assets/soldier/bases/base_soldier.png',
          z_index: 10,
          category: 'bases'
        }
      ]
    }
  ],
  vests: [
    {
      id: 'vest_none',
      name: 'Không mặc giáp',
      type: 'vests',
      layers: []
    },
    {
      id: 'vest_heavy_kevlar',
      name: 'Giáp Nặng Kevlar',
      src: '/assets/soldier/thumbs/thumb_vest_heavy_kevlar.png',
      type: 'vests',
      layers: [
        {
          src: '/assets/soldier/vests/vest_heavy_kevlar.png',
          z_index: 30,
          category: 'vests'
        }
      ]
    },
    {
      id: 'vest_light_specops',
      name: 'Giáp Nhẹ Spec-Ops',
      src: '/assets/soldier/thumbs/thumb_vest_light_specops.png',
      type: 'vests',
      layers: [
        {
          src: '/assets/soldier/vests/vest_light_specops.png',
          z_index: 30,
          category: 'vests'
        }
      ]
    },
    {
      id: 'vest_recon_plate',
      name: 'Tấm Chống Đạn Recon',
      src: '/assets/soldier/thumbs/thumb_vest_recon_plate.png',
      type: 'vests',
      layers: [
        {
          src: '/assets/soldier/vests/vest_recon_plate.png',
          z_index: 30,
          category: 'vests'
        }
      ]
    },
    {
      id: 'vest_desert_molle',
      name: 'Giáp Molle Sa Mạc',
      src: '/assets/soldier/thumbs/thumb_vest_desert_molle.png',
      type: 'vests',
      layers: [
        {
          src: '/assets/soldier/vests/vest_desert_molle.png',
          z_index: 30,
          category: 'vests'
        }
      ]
    },
    {
      id: 'vest_woodland_tactical',
      name: 'Giáp Rằn Ri Rừng',
      src: '/assets/soldier/thumbs/thumb_vest_woodland_tactical.png',
      type: 'vests',
      layers: [
        {
          src: '/assets/soldier/vests/vest_woodland_tactical.png',
          z_index: 30,
          category: 'vests'
        }
      ]
    }
  ],
  bottoms: [
    {
      id: 'bottoms_none',
      name: 'Không mặc',
      type: 'bottoms',
      layers: []
    },
    {
      id: 'pants_specops_black',
      name: 'Quần Đặc Nhiệm Đen',
      src: '/assets/soldier/thumbs/thumb_pants_specops_black.png',
      type: 'bottoms',
      layers: [
        {
          src: '/assets/soldier/bottoms/pants_specops_black.png',
          z_index: 20,
          category: 'bottoms'
        }
      ]
    },
    {
      id: 'pants_desert_tan',
      name: 'Quần Sa Mạc Tan',
      src: '/assets/soldier/thumbs/thumb_pants_desert_tan.png',
      type: 'bottoms',
      layers: [
        {
          src: '/assets/soldier/bottoms/pants_desert_tan.png',
          z_index: 20,
          category: 'bottoms'
        }
      ]
    },
    {
      id: 'pants_woodland_camo',
      name: 'Quần Rằn Ri Rừng',
      src: '/assets/soldier/thumbs/thumb_pants_woodland_camo.png',
      type: 'bottoms',
      layers: [
        {
          src: '/assets/soldier/bottoms/pants_woodland_camo.png',
          z_index: 20,
          category: 'bottoms'
        }
      ]
    },
    {
      id: 'pants_urban_gray',
      name: 'Quần Đô Thị Urban',
      src: '/assets/soldier/thumbs/thumb_pants_urban_gray.png',
      type: 'bottoms',
      layers: [
        {
          src: '/assets/soldier/bottoms/pants_urban_gray.png',
          z_index: 20,
          category: 'bottoms'
        }
      ]
    },
    {
      id: 'pants_arctic_camo',
      name: 'Quần Băng Tuyết Arctic',
      src: '/assets/soldier/thumbs/thumb_pants_arctic_camo.png',
      type: 'bottoms',
      layers: [
        {
          src: '/assets/soldier/bottoms/pants_arctic_camo.png',
          z_index: 20,
          category: 'bottoms'
        }
      ]
    }
  ],
  helmets: [
    {
      id: 'helmet_none',
      name: 'Không đội mũ',
      type: 'helmets',
      layers: []
    },
    {
      id: 'helmet_nvg_specops',
      name: 'Mũ Sắt NVG Đặc Nhiệm',
      src: '/assets/soldier/thumbs/thumb_helmet_nvg_specops.png',
      type: 'helmets',
      layers: [
        {
          src: '/assets/soldier/helmets/helmet_nvg_specops.png',
          z_index: 50,
          category: 'helmets'
        }
      ]
    },
    {
      id: 'helmet_desert_camo',
      name: 'Mũ Dã Chiến Sa Mạc',
      src: '/assets/soldier/thumbs/thumb_helmet_desert_camo.png',
      type: 'helmets',
      layers: [
        {
          src: '/assets/soldier/helmets/helmet_desert_camo.png',
          z_index: 50,
          category: 'helmets'
        }
      ]
    },
    {
      id: 'helmet_woodland_camo',
      name: 'Mũ Rằn Ri Rừng',
      src: '/assets/soldier/thumbs/thumb_helmet_woodland_camo.png',
      type: 'helmets',
      layers: [
        {
          src: '/assets/soldier/helmets/helmet_woodland_camo.png',
          z_index: 50,
          category: 'helmets'
        }
      ]
    },
    {
      id: 'helmet_skull_gasmask',
      name: 'Mặt Nạ Skull Chống Độc',
      src: '/assets/soldier/thumbs/thumb_helmet_skull_gasmask.png',
      type: 'helmets',
      layers: [
        {
          src: '/assets/soldier/helmets/helmet_skull_gasmask.png',
          z_index: 50,
          category: 'helmets'
        }
      ]
    },
    {
      id: 'helmet_arctic_white',
      name: 'Mũ Tác Chiến Bắc Cực',
      src: '/assets/soldier/thumbs/thumb_helmet_arctic_white.png',
      type: 'helmets',
      layers: [
        {
          src: '/assets/soldier/helmets/helmet_arctic_white.png',
          z_index: 50,
          category: 'helmets'
        }
      ]
    }
  ],
  gear: [
    {
      id: 'gear_none',
      name: 'Không mang phụ kiện',
      type: 'gear',
      layers: []
    },
    {
      id: 'gear_radio_antenna',
      name: 'Bộ Đàm & Ăng-ten',
      src: '/assets/soldier/thumbs/thumb_gear_radio_antenna.png',
      type: 'gear',
      layers: [
        {
          src: '/assets/soldier/gear/gear_radio_antenna.png',
          z_index: 40,
          category: 'gear'
        }
      ]
    },
    {
      id: 'gear_ammo_bandolier',
      name: 'Dây Đai Đạn Quân Dụng',
      src: '/assets/soldier/thumbs/thumb_gear_ammo_bandolier.png',
      type: 'gear',
      layers: [
        {
          src: '/assets/soldier/gear/gear_ammo_bandolier.png',
          z_index: 40,
          category: 'gear'
        }
      ]
    },
    {
      id: 'gear_tactical_pack',
      name: 'Túi Phụ Molle Sau Lưng',
      src: '/assets/soldier/thumbs/thumb_gear_tactical_pack.png',
      type: 'gear',
      layers: [
        {
          src: '/assets/soldier/gear/gear_tactical_pack.png',
          z_index: 40,
          category: 'gear'
        }
      ]
    },
    {
      id: 'gear_side_holster',
      name: 'Bao Súng Đùi Dã Chiến',
      src: '/assets/soldier/thumbs/thumb_gear_side_holster.png',
      type: 'gear',
      layers: [
        {
          src: '/assets/soldier/gear/gear_side_holster.png',
          z_index: 40,
          category: 'gear'
        }
      ]
    },
    {
      id: 'gear_comm_green',
      name: 'Tai Nghe Chỉ Huy Spec-Ops',
      src: '/assets/soldier/thumbs/thumb_gear_comm_green.png',
      type: 'gear',
      layers: [
        {
          src: '/assets/soldier/gear/gear_comm_green.png',
          z_index: 40,
          category: 'gear'
        }
      ]
    }
  ],
  weapons: [
    {
      id: 'weapon_none',
      name: 'Tay không',
      type: 'weapons',
      layers: []
    },
    {
      id: 'ak47_tactical',
      name: 'Súng Trường AK-47 Tactical',
      src: '/assets/soldier/weapons/ak47_tactical_thumb.png',
      type: 'weapons',
      layers: [
        {
          src: '/assets/soldier/weapons/ak47_tactical.png',
          z_index: 60,
          category: 'weapons'
        }
      ]
    },
    {
      id: 'm4a1_carbine',
      name: 'Súng Trường M4A1 Carbine',
      src: '/assets/soldier/weapons/m4a1_carbine_thumb.png',
      type: 'weapons',
      layers: [
        {
          src: '/assets/soldier/weapons/m4a1_carbine.png',
          z_index: 60,
          category: 'weapons'
        }
      ]
    },
    {
      id: 'scar_heavy',
      name: 'Súng Trường SCAR-H Nặng',
      src: '/assets/soldier/weapons/scar_heavy_thumb.png',
      type: 'weapons',
      layers: [
        {
          src: '/assets/soldier/weapons/scar_heavy.png',
          z_index: 60,
          category: 'weapons'
        }
      ]
    },
    {
      id: 'g36_assault',
      name: 'Súng Trường Tấn Công G36',
      src: '/assets/soldier/weapons/g36_assault_thumb.png',
      type: 'weapons',
      layers: [
        {
          src: '/assets/soldier/weapons/g36_assault.png',
          z_index: 60,
          category: 'weapons'
        }
      ]
    },
    {
      id: 'mp5_specops',
      name: 'Tiểu Liên MP5 Spec-Ops',
      src: '/assets/soldier/weapons/mp5_specops_thumb.png',
      type: 'weapons',
      layers: [
        {
          src: '/assets/soldier/weapons/mp5_specops.png',
          z_index: 60,
          category: 'weapons'
        }
      ]
    },
    {
      id: 'vector_smg',
      name: 'Tiểu Liên Siêu Tốc Vector',
      src: '/assets/soldier/weapons/vector_smg_thumb.png',
      type: 'weapons',
      layers: [
        {
          src: '/assets/soldier/weapons/vector_smg.png',
          z_index: 60,
          category: 'weapons'
        }
      ]
    },
    {
      id: 'p90_compact',
      name: 'Tiểu Liên P90 Bullpup',
      src: '/assets/soldier/weapons/p90_compact_thumb.png',
      type: 'weapons',
      layers: [
        {
          src: '/assets/soldier/weapons/p90_compact.png',
          z_index: 60,
          category: 'weapons'
        }
      ]
    },
    {
      id: 'uzi_micro',
      name: 'Tiểu Liên Micro Uzi',
      src: '/assets/soldier/weapons/uzi_micro_thumb.png',
      type: 'weapons',
      layers: [
        {
          src: '/assets/soldier/weapons/uzi_micro.png',
          z_index: 60,
          category: 'weapons'
        }
      ]
    },
    {
      id: 'awp_sniper',
      name: 'Bắn Tỉa AWP Ngắm Xa',
      src: '/assets/soldier/weapons/awp_sniper_thumb.png',
      type: 'weapons',
      layers: [
        {
          src: '/assets/soldier/weapons/awp_sniper.png',
          z_index: 60,
          category: 'weapons'
        }
      ]
    },
    {
      id: 'barrett_50cal',
      name: 'Bắn Tỉa Barrett .50 Cal',
      src: '/assets/soldier/weapons/barrett_50cal_thumb.png',
      type: 'weapons',
      layers: [
        {
          src: '/assets/soldier/weapons/barrett_50cal.png',
          z_index: 60,
          category: 'weapons'
        }
      ]
    },
    {
      id: 'spas12_shotgun',
      name: 'Shotgun Tác Chiến SPAS-12',
      src: '/assets/soldier/weapons/spas12_shotgun_thumb.png',
      type: 'weapons',
      layers: [
        {
          src: '/assets/soldier/weapons/spas12_shotgun.png',
          z_index: 60,
          category: 'weapons'
        }
      ]
    },
    {
      id: 'minimi_lmg',
      name: 'Đại Liên Minimi LMG',
      src: '/assets/soldier/weapons/minimi_lmg_thumb.png',
      type: 'weapons',
      layers: [
        {
          src: '/assets/soldier/weapons/minimi_lmg.png',
          z_index: 60,
          category: 'weapons'
        }
      ]
    },
    {
      id: 'grenade_launcher',
      name: 'Súng Phóng Lựu Cầm Tay',
      src: '/assets/soldier/weapons/grenade_launcher_thumb.png',
      type: 'weapons',
      layers: [
        {
          src: '/assets/soldier/weapons/grenade_launcher.png',
          z_index: 60,
          category: 'weapons'
        }
      ]
    },
    {
      id: 'glock_tactical',
      name: 'Súng Ngắn Glock Chiến Thuật',
      src: '/assets/soldier/weapons/glock_tactical_thumb.png',
      type: 'weapons',
      layers: [
        {
          src: '/assets/soldier/weapons/glock_tactical.png',
          z_index: 60,
          category: 'weapons'
        }
      ]
    },
    {
      id: 'desert_eagle',
      name: 'Súng Ngắn Desert Eagle .50',
      src: '/assets/soldier/weapons/desert_eagle_thumb.png',
      type: 'weapons',
      layers: [
        {
          src: '/assets/soldier/weapons/desert_eagle.png',
          z_index: 60,
          category: 'weapons'
        }
      ]
    },
    {
      id: 'revolver_magnum',
      name: 'Súng Ngắn Magnum .357',
      src: '/assets/soldier/weapons/revolver_magnum_thumb.png',
      type: 'weapons',
      layers: [
        {
          src: '/assets/soldier/weapons/revolver_magnum.png',
          z_index: 60,
          category: 'weapons'
        }
      ]
    },
    {
      id: 'combat_knife',
      name: 'Dao Găm Tác Chiến Spec-Ops',
      src: '/assets/soldier/weapons/combat_knife_thumb.png',
      type: 'weapons',
      layers: [
        {
          src: '/assets/soldier/weapons/combat_knife.png',
          z_index: 60,
          category: 'weapons'
        }
      ]
    }
  ]
};

export const getSoldierLayers = (selections, activeColors = {}) => {
  const layers = [
    {
      src: '/assets/soldier/shadows/soldier_shadow.png',
      z_index: 0,
      category: 'shadows'
    }
  ];

  const categories = ['bases', 'bottoms', 'vests', 'gear', 'helmets', 'weapons'];

  categories.forEach(cat => {
    const selectedId = selections[cat];
    if (!selectedId || selectedId.endsWith('_none')) return;

    const group = soldierConfig[cat];
    if (!group) return;

    const item = group.find(i => i.id === selectedId);
    if (item && item.layers) {
      item.layers.forEach(layer => {
        layers.push({
          ...layer,
          color: activeColors[cat] || '#ffffff'
        });
      });
    }
  });

  return layers.sort((a, b) => (a.z_index || 0) - (b.z_index || 0));
};
