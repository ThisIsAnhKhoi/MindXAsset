// ============================================================
// FANTASY CHARACTER CONFIGURATION (Nhân Vật Fantasy Chibi RPG)
// Frame Size: 48x48 Pixel-Perfect Integer Scaled, Crisp 0-blur Rendering
// ============================================================

export const fantasyPalettes = [
  { name: 'Mặc định (Nguyên bản)', hex: '#ffffff' },
  { name: 'Hoàng Kim (Royal Gold)', hex: '#eab308' },
  { name: 'Lam Ngọc (Arcane Blue)', hex: '#38bdf8' },
  { name: 'Lục Bảo (Forest Jade)', hex: '#22c55e' },
  { name: 'Hỏa Diệm (Fire Crimson)', hex: '#ef4444' },
  { name: 'Hư Không (Nether Purple)', hex: '#a855f7' },
  { name: 'Hắc Ám (Shadow Onyx)', hex: '#334155' },
  { name: 'Bạch Kim (Silver Pure)', hex: '#e2e8f0' }
];

export const fantasyColorPalettes = {
  races: fantasyPalettes,
  hairs: fantasyPalettes,
  outfits: fantasyPalettes,
  bottoms: fantasyPalettes,
  headgear: fantasyPalettes,
  accessories: fantasyPalettes,
  weapons: fantasyPalettes
};

export const fantasyGroups = {
  races: [
    { id: 'all', name: 'Tất Cả (30)' },
    { id: 'human', name: '👤 Loài Người' },
    { id: 'fantasy', name: '🧝 Tiên & Ma Tộc' },
    { id: 'undead', name: '💀 Dị Chủng & Bất Tử' },
    { id: 'beast', name: '🦊 Hoang Thú Tộc' }
  ],
  hairs: [
    { id: 'all', name: 'Tất Cả (96)' },
    { id: 'Nâu', name: '🟤 Nâu' },
    { id: 'Vàng', name: '🟡 Vàng' },
    { id: 'Bạc', name: '⚪ Bạc' },
    { id: 'Đen', name: '⚫ Đen' },
    { id: 'Lam Ngọc', name: '🔵 Lam Ngọc' },
    { id: 'Lục Bảo', name: '🟢 Lục Bảo' },
    { id: 'Hung Đỏ', name: '🟠 Hung Đỏ' },
    { id: 'Bạch Kim', name: '✨ Bạch Kim' }
  ],
  outfits: [
    { id: 'all', name: 'Tất Cả (128)' },
    { id: 'chiengiap', name: '⚔️ Hiệp Sĩ & Áo Giáp' },
    { id: 'phapsu', name: '🔮 Pháp Sư & Thuật Sĩ' },
    { id: 'duhiep', name: '🏹 Du Hiệp & Sát Thủ' },
    { id: 'quytoc', name: '👑 Quý Tộc & Lễ Phục' },
    { id: 'thuongdan', name: '🌾 Thường Dân & Dã Ngoại' },
    { id: 'cobap', name: '🥋 Thân Trần & Cơ Bắp' }
  ]
};

export const fantasyConfig = {
  races: [
  {
    "id": "race_human_fair",
    "name": "Người - Da Sáng (Fair Human)",
    "src": "/assets/fantasy/thumbs/race_human_fair.png",
    "type": "races",
    "group": "human",
    "defaultSrc": "/assets/fantasy/races/race_human_fair.png",
    "expressions": {
      "expr_neutral": "/assets/fantasy/races/race_human_fair_expr_neutral.png",
      "expr_smile": "/assets/fantasy/races/race_human_fair_expr_smile.png",
      "expr_shy": "/assets/fantasy/races/race_human_fair_expr_shy.png",
      "expr_shy_smile": "/assets/fantasy/races/race_human_fair_expr_shy_smile.png",
      "expr_focused": "/assets/fantasy/races/race_human_fair_expr_focused.png",
      "expr_battle_cry": "/assets/fantasy/races/race_human_fair_expr_battle_cry.png"
    },
    "layers": [
      {
        "src": "/assets/fantasy/races/race_human_fair.png",
        "z_index": 40,
        "category": "races"
      }
    ]
  },
  {
    "id": "race_human_peach",
    "name": "Người - Da Hồng Hào (Peach)",
    "src": "/assets/fantasy/thumbs/race_human_peach.png",
    "type": "races",
    "group": "human",
    "defaultSrc": "/assets/fantasy/races/race_human_peach.png",
    "expressions": {
      "expr_neutral": "/assets/fantasy/races/race_human_peach_expr_neutral.png",
      "expr_smile": "/assets/fantasy/races/race_human_peach_expr_smile.png",
      "expr_shy": "/assets/fantasy/races/race_human_peach_expr_shy.png",
      "expr_shy_smile": "/assets/fantasy/races/race_human_peach_expr_shy_smile.png",
      "expr_focused": "/assets/fantasy/races/race_human_peach_expr_focused.png",
      "expr_battle_cry": "/assets/fantasy/races/race_human_peach_expr_battle_cry.png"
    },
    "layers": [
      {
        "src": "/assets/fantasy/races/race_human_peach.png",
        "z_index": 40,
        "category": "races"
      }
    ]
  },
  {
    "id": "race_human_tan",
    "name": "Người - Da Nâu Đồng (Tan)",
    "src": "/assets/fantasy/thumbs/race_human_tan.png",
    "type": "races",
    "group": "human",
    "defaultSrc": "/assets/fantasy/races/race_human_tan.png",
    "expressions": {
      "expr_neutral": "/assets/fantasy/races/race_human_tan_expr_neutral.png",
      "expr_smile": "/assets/fantasy/races/race_human_tan_expr_smile.png",
      "expr_shy": "/assets/fantasy/races/race_human_tan_expr_shy.png",
      "expr_shy_smile": "/assets/fantasy/races/race_human_tan_expr_shy_smile.png",
      "expr_focused": "/assets/fantasy/races/race_human_tan_expr_focused.png",
      "expr_battle_cry": "/assets/fantasy/races/race_human_tan_expr_battle_cry.png"
    },
    "layers": [
      {
        "src": "/assets/fantasy/races/race_human_tan.png",
        "z_index": 40,
        "category": "races"
      }
    ]
  },
  {
    "id": "race_human_dark",
    "name": "Người - Da Ngăm Đen (Dark)",
    "src": "/assets/fantasy/thumbs/race_human_dark.png",
    "type": "races",
    "group": "human",
    "defaultSrc": "/assets/fantasy/races/race_human_dark.png",
    "expressions": {
      "expr_neutral": "/assets/fantasy/races/race_human_dark_expr_neutral.png",
      "expr_smile": "/assets/fantasy/races/race_human_dark_expr_smile.png",
      "expr_shy": "/assets/fantasy/races/race_human_dark_expr_shy.png",
      "expr_shy_smile": "/assets/fantasy/races/race_human_dark_expr_shy_smile.png",
      "expr_focused": "/assets/fantasy/races/race_human_dark_expr_focused.png",
      "expr_battle_cry": "/assets/fantasy/races/race_human_dark_expr_battle_cry.png"
    },
    "layers": [
      {
        "src": "/assets/fantasy/races/race_human_dark.png",
        "z_index": 40,
        "category": "races"
      }
    ]
  },
  {
    "id": "race_human_sunburnt",
    "name": "Người - Nắng Gió (Sunburnt)",
    "src": "/assets/fantasy/thumbs/race_human_sunburnt.png",
    "type": "races",
    "group": "human",
    "defaultSrc": "/assets/fantasy/races/race_human_sunburnt.png",
    "expressions": {
      "expr_neutral": "/assets/fantasy/races/race_human_sunburnt_expr_neutral.png",
      "expr_smile": "/assets/fantasy/races/race_human_sunburnt_expr_smile.png",
      "expr_shy": "/assets/fantasy/races/race_human_sunburnt_expr_shy.png",
      "expr_shy_smile": "/assets/fantasy/races/race_human_sunburnt_expr_shy_smile.png",
      "expr_focused": "/assets/fantasy/races/race_human_sunburnt_expr_focused.png",
      "expr_battle_cry": "/assets/fantasy/races/race_human_sunburnt_expr_battle_cry.png"
    },
    "layers": [
      {
        "src": "/assets/fantasy/races/race_human_sunburnt.png",
        "z_index": 40,
        "category": "races"
      }
    ]
  },
  {
    "id": "race_orc",
    "name": "Đại Ma Tộc - Chiến Binh Orc (Green)",
    "src": "/assets/fantasy/thumbs/race_orc.png",
    "type": "races",
    "group": "fantasy",
    "defaultSrc": "/assets/fantasy/races/race_orc.png",
    "expressions": {
      "expr_neutral": "/assets/fantasy/races/race_orc_expr_neutral.png",
      "expr_smile": "/assets/fantasy/races/race_orc_expr_smile.png",
      "expr_shy": "/assets/fantasy/races/race_orc_expr_shy.png",
      "expr_shy_smile": "/assets/fantasy/races/race_orc_expr_shy_smile.png",
      "expr_focused": "/assets/fantasy/races/race_orc_expr_focused.png",
      "expr_battle_cry": "/assets/fantasy/races/race_orc_expr_battle_cry.png"
    },
    "layers": [
      {
        "src": "/assets/fantasy/races/race_orc.png",
        "z_index": 40,
        "category": "races"
      }
    ]
  },
  {
    "id": "race_dark_elf",
    "name": "Hắc Tiên Tộc - Dạ Thuật Drow",
    "src": "/assets/fantasy/thumbs/race_dark_elf.png",
    "type": "races",
    "group": "fantasy",
    "defaultSrc": "/assets/fantasy/races/race_dark_elf.png",
    "expressions": {
      "expr_neutral": "/assets/fantasy/races/race_dark_elf_expr_neutral.png",
      "expr_smile": "/assets/fantasy/races/race_dark_elf_expr_smile.png",
      "expr_shy": "/assets/fantasy/races/race_dark_elf_expr_shy.png",
      "expr_shy_smile": "/assets/fantasy/races/race_dark_elf_expr_shy_smile.png",
      "expr_focused": "/assets/fantasy/races/race_dark_elf_expr_focused.png",
      "expr_battle_cry": "/assets/fantasy/races/race_dark_elf_expr_battle_cry.png"
    },
    "layers": [
      {
        "src": "/assets/fantasy/races/race_dark_elf.png",
        "z_index": 40,
        "category": "races"
      }
    ]
  },
  {
    "id": "race_beastman",
    "name": "Hoang Thú Tộc - Hổ Báo",
    "src": "/assets/fantasy/thumbs/race_beastman.png",
    "type": "races",
    "group": "fantasy",
    "defaultSrc": "/assets/fantasy/races/race_beastman.png",
    "expressions": {
      "expr_neutral": "/assets/fantasy/races/race_beastman_expr_neutral.png",
      "expr_smile": "/assets/fantasy/races/race_beastman_expr_smile.png",
      "expr_shy": "/assets/fantasy/races/race_beastman_expr_shy.png",
      "expr_shy_smile": "/assets/fantasy/races/race_beastman_expr_shy_smile.png",
      "expr_focused": "/assets/fantasy/races/race_beastman_expr_focused.png",
      "expr_battle_cry": "/assets/fantasy/races/race_beastman_expr_battle_cry.png"
    },
    "layers": [
      {
        "src": "/assets/fantasy/races/race_beastman.png",
        "z_index": 40,
        "category": "races"
      }
    ]
  },
  {
    "id": "race_high_elf",
    "name": "Thượng Tiên Tộc - Tai Nhọn",
    "src": "/assets/fantasy/thumbs/race_high_elf.png",
    "type": "races",
    "group": "fantasy",
    "defaultSrc": "/assets/fantasy/races/race_high_elf.png",
    "expressions": {
      "expr_neutral": "/assets/fantasy/races/race_high_elf_expr_neutral.png",
      "expr_smile": "/assets/fantasy/races/race_high_elf_expr_smile.png",
      "expr_shy": "/assets/fantasy/races/race_high_elf_expr_shy.png",
      "expr_shy_smile": "/assets/fantasy/races/race_high_elf_expr_shy_smile.png",
      "expr_focused": "/assets/fantasy/races/race_high_elf_expr_focused.png",
      "expr_battle_cry": "/assets/fantasy/races/race_high_elf_expr_battle_cry.png"
    },
    "layers": [
      {
        "src": "/assets/fantasy/races/race_high_elf.png",
        "z_index": 40,
        "category": "races"
      }
    ]
  },
  {
    "id": "race_vampire",
    "name": "Huyết Tộc Dạ Thần - Vampire",
    "src": "/assets/fantasy/thumbs/race_vampire.png",
    "type": "races",
    "group": "fantasy",
    "defaultSrc": "/assets/fantasy/races/race_vampire.png",
    "expressions": {
      "expr_neutral": "/assets/fantasy/races/race_vampire_expr_neutral.png",
      "expr_smile": "/assets/fantasy/races/race_vampire_expr_smile.png",
      "expr_shy": "/assets/fantasy/races/race_vampire_expr_shy.png",
      "expr_shy_smile": "/assets/fantasy/races/race_vampire_expr_shy_smile.png",
      "expr_focused": "/assets/fantasy/races/race_vampire_expr_focused.png",
      "expr_battle_cry": "/assets/fantasy/races/race_vampire_expr_battle_cry.png"
    },
    "layers": [
      {
        "src": "/assets/fantasy/races/race_vampire.png",
        "z_index": 40,
        "category": "races"
      }
    ]
  },
  {
    "id": "race_undead",
    "name": "Xác Sống Cổ Thành - Zombie",
    "src": "/assets/fantasy/thumbs/race_undead.png",
    "type": "races",
    "group": "undead",
    "defaultSrc": "/assets/fantasy/races/race_undead.png",
    "expressions": {
      "expr_neutral": "/assets/fantasy/races/race_undead_expr_neutral.png",
      "expr_smile": "/assets/fantasy/races/race_undead_expr_smile.png",
      "expr_shy": "/assets/fantasy/races/race_undead_expr_shy.png",
      "expr_shy_smile": "/assets/fantasy/races/race_undead_expr_shy_smile.png",
      "expr_focused": "/assets/fantasy/races/race_undead_expr_focused.png",
      "expr_battle_cry": "/assets/fantasy/races/race_undead_expr_battle_cry.png"
    },
    "layers": [
      {
        "src": "/assets/fantasy/races/race_undead.png",
        "z_index": 40,
        "category": "races"
      }
    ]
  },
  {
    "id": "race_skeleton",
    "name": "Khung Xương Ma Thuật - Mắt Đỏ",
    "src": "/assets/fantasy/thumbs/race_skeleton.png",
    "type": "races",
    "group": "undead",
    "defaultSrc": "/assets/fantasy/races/race_skeleton.png",
    "expressions": {
      "expr_neutral": "/assets/fantasy/races/race_skeleton_expr_neutral.png",
      "expr_smile": "/assets/fantasy/races/race_skeleton_expr_smile.png",
      "expr_shy": "/assets/fantasy/races/race_skeleton_expr_shy.png",
      "expr_shy_smile": "/assets/fantasy/races/race_skeleton_expr_shy_smile.png",
      "expr_focused": "/assets/fantasy/races/race_skeleton_expr_focused.png",
      "expr_battle_cry": "/assets/fantasy/races/race_skeleton_expr_battle_cry.png"
    },
    "layers": [
      {
        "src": "/assets/fantasy/races/race_skeleton.png",
        "z_index": 40,
        "category": "races"
      }
    ]
  },
  {
    "id": "race_golden_lich",
    "name": "Hoàng Kim Vu Yêu - Mắt Vàng",
    "src": "/assets/fantasy/thumbs/race_golden_lich.png",
    "type": "races",
    "group": "undead",
    "defaultSrc": "/assets/fantasy/races/race_golden_lich.png",
    "expressions": {
      "expr_neutral": "/assets/fantasy/races/race_golden_lich_expr_neutral.png",
      "expr_smile": "/assets/fantasy/races/race_golden_lich_expr_smile.png",
      "expr_shy": "/assets/fantasy/races/race_golden_lich_expr_shy.png",
      "expr_shy_smile": "/assets/fantasy/races/race_golden_lich_expr_shy_smile.png",
      "expr_focused": "/assets/fantasy/races/race_golden_lich_expr_focused.png",
      "expr_battle_cry": "/assets/fantasy/races/race_golden_lich_expr_battle_cry.png"
    },
    "layers": [
      {
        "src": "/assets/fantasy/races/race_golden_lich.png",
        "z_index": 40,
        "category": "races"
      }
    ]
  },
  {
    "id": "race_stone_golem",
    "name": "Người Đá Cổ Thạch - Golem",
    "src": "/assets/fantasy/thumbs/race_stone_golem.png",
    "type": "races",
    "group": "undead",
    "defaultSrc": "/assets/fantasy/races/race_stone_golem.png",
    "expressions": {
      "expr_neutral": "/assets/fantasy/races/race_stone_golem_expr_neutral.png",
      "expr_smile": "/assets/fantasy/races/race_stone_golem_expr_smile.png",
      "expr_shy": "/assets/fantasy/races/race_stone_golem_expr_shy.png",
      "expr_shy_smile": "/assets/fantasy/races/race_stone_golem_expr_shy_smile.png",
      "expr_focused": "/assets/fantasy/races/race_stone_golem_expr_focused.png",
      "expr_battle_cry": "/assets/fantasy/races/race_stone_golem_expr_battle_cry.png"
    },
    "layers": [
      {
        "src": "/assets/fantasy/races/race_stone_golem.png",
        "z_index": 40,
        "category": "races"
      }
    ]
  },
  {
    "id": "race_reptilian",
    "name": "Thằn Lằn Đầm Lầy - Bò Sát",
    "src": "/assets/fantasy/thumbs/race_reptilian.png",
    "type": "races",
    "group": "undead",
    "defaultSrc": "/assets/fantasy/races/race_reptilian.png",
    "expressions": {
      "expr_neutral": "/assets/fantasy/races/race_reptilian_expr_neutral.png",
      "expr_smile": "/assets/fantasy/races/race_reptilian_expr_smile.png",
      "expr_shy": "/assets/fantasy/races/race_reptilian_expr_shy.png",
      "expr_shy_smile": "/assets/fantasy/races/race_reptilian_expr_shy_smile.png",
      "expr_focused": "/assets/fantasy/races/race_reptilian_expr_focused.png",
      "expr_battle_cry": "/assets/fantasy/races/race_reptilian_expr_battle_cry.png"
    },
    "layers": [
      {
        "src": "/assets/fantasy/races/race_reptilian.png",
        "z_index": 40,
        "category": "races"
      }
    ]
  },
  {
    "id": "race_alien",
    "name": "Dị Tộc Không Gian - Ngoại Giới",
    "src": "/assets/fantasy/thumbs/race_alien.png",
    "type": "races",
    "group": "undead",
    "defaultSrc": "/assets/fantasy/races/race_alien.png",
    "expressions": {
      "expr_neutral": "/assets/fantasy/races/race_alien_expr_neutral.png",
      "expr_smile": "/assets/fantasy/races/race_alien_expr_smile.png",
      "expr_shy": "/assets/fantasy/races/race_alien_expr_shy.png",
      "expr_shy_smile": "/assets/fantasy/races/race_alien_expr_shy_smile.png",
      "expr_focused": "/assets/fantasy/races/race_alien_expr_focused.png",
      "expr_battle_cry": "/assets/fantasy/races/race_alien_expr_battle_cry.png"
    },
    "layers": [
      {
        "src": "/assets/fantasy/races/race_alien.png",
        "z_index": 40,
        "category": "races"
      }
    ]
  },
  {
    "id": "race_fox",
    "name": "Linh Hồ Tộc - Cáo Lửa Kitsune",
    "src": "/assets/fantasy/thumbs/race_fox.png",
    "type": "races",
    "group": "beast",
    "defaultSrc": "/assets/fantasy/races/race_fox.png",
    "expressions": {
      "expr_neutral": "/assets/fantasy/races/race_fox.png",
      "expr_smile": "/assets/fantasy/races/race_fox_expr_battle_cry.png",
      "expr_shy": "/assets/fantasy/races/race_fox.png",
      "expr_shy_smile": "/assets/fantasy/races/race_fox_expr_battle_cry.png",
      "expr_focused": "/assets/fantasy/races/race_fox.png",
      "expr_battle_cry": "/assets/fantasy/races/race_fox_expr_battle_cry.png"
    },
    "layers": [
      {
        "src": "/assets/fantasy/races/race_fox.png",
        "z_index": 40,
        "category": "races"
      }
    ]
  },
  {
    "id": "race_wolf",
    "name": "Lang Tộc - Sói Xám Hoang Dã",
    "src": "/assets/fantasy/thumbs/race_wolf.png",
    "type": "races",
    "group": "beast",
    "defaultSrc": "/assets/fantasy/races/race_wolf.png",
    "expressions": {
      "expr_neutral": "/assets/fantasy/races/race_wolf.png",
      "expr_smile": "/assets/fantasy/races/race_wolf_expr_battle_cry.png",
      "expr_shy": "/assets/fantasy/races/race_wolf.png",
      "expr_shy_smile": "/assets/fantasy/races/race_wolf_expr_battle_cry.png",
      "expr_focused": "/assets/fantasy/races/race_wolf.png",
      "expr_battle_cry": "/assets/fantasy/races/race_wolf_expr_battle_cry.png"
    },
    "layers": [
      {
        "src": "/assets/fantasy/races/race_wolf.png",
        "z_index": 40,
        "category": "races"
      }
    ]
  },
  {
    "id": "race_raccoon",
    "name": "Gấu Mèo Du Mục - Raccoon",
    "src": "/assets/fantasy/thumbs/race_raccoon.png",
    "type": "races",
    "group": "beast",
    "defaultSrc": "/assets/fantasy/races/race_raccoon.png",
    "expressions": {
      "expr_neutral": "/assets/fantasy/races/race_raccoon.png",
      "expr_smile": "/assets/fantasy/races/race_raccoon_expr_battle_cry.png",
      "expr_shy": "/assets/fantasy/races/race_raccoon.png",
      "expr_shy_smile": "/assets/fantasy/races/race_raccoon_expr_battle_cry.png",
      "expr_focused": "/assets/fantasy/races/race_raccoon.png",
      "expr_battle_cry": "/assets/fantasy/races/race_raccoon_expr_battle_cry.png"
    },
    "layers": [
      {
        "src": "/assets/fantasy/races/race_raccoon.png",
        "z_index": 40,
        "category": "races"
      }
    ]
  },
  {
    "id": "race_cat",
    "name": "Miêu Tộc - Mèo Mun Huyền Bí",
    "src": "/assets/fantasy/thumbs/race_cat.png",
    "type": "races",
    "group": "beast",
    "defaultSrc": "/assets/fantasy/races/race_cat.png",
    "expressions": {
      "expr_neutral": "/assets/fantasy/races/race_cat.png",
      "expr_smile": "/assets/fantasy/races/race_cat_expr_battle_cry.png",
      "expr_shy": "/assets/fantasy/races/race_cat.png",
      "expr_shy_smile": "/assets/fantasy/races/race_cat_expr_battle_cry.png",
      "expr_focused": "/assets/fantasy/races/race_cat.png",
      "expr_battle_cry": "/assets/fantasy/races/race_cat_expr_battle_cry.png"
    },
    "layers": [
      {
        "src": "/assets/fantasy/races/race_cat.png",
        "z_index": 40,
        "category": "races"
      }
    ]
  },
  {
    "id": "race_bat",
    "name": "Dạ Điệp Tộc - Dơi Ma Cà Rồng",
    "src": "/assets/fantasy/thumbs/race_bat.png",
    "type": "races",
    "group": "beast",
    "defaultSrc": "/assets/fantasy/races/race_bat.png",
    "expressions": {
      "expr_neutral": "/assets/fantasy/races/race_bat.png",
      "expr_smile": "/assets/fantasy/races/race_bat_expr_battle_cry.png",
      "expr_shy": "/assets/fantasy/races/race_bat.png",
      "expr_shy_smile": "/assets/fantasy/races/race_bat_expr_battle_cry.png",
      "expr_focused": "/assets/fantasy/races/race_bat.png",
      "expr_battle_cry": "/assets/fantasy/races/race_bat_expr_battle_cry.png"
    },
    "layers": [
      {
        "src": "/assets/fantasy/races/race_bat.png",
        "z_index": 40,
        "category": "races"
      }
    ]
  },
  {
    "id": "race_devil",
    "name": "Tiểu Dạ Quỷ - Ác Ma Bé",
    "src": "/assets/fantasy/thumbs/race_devil.png",
    "type": "races",
    "group": "beast",
    "defaultSrc": "/assets/fantasy/races/race_devil.png",
    "expressions": {
      "expr_neutral": "/assets/fantasy/races/race_devil.png",
      "expr_smile": "/assets/fantasy/races/race_devil_expr_battle_cry.png",
      "expr_shy": "/assets/fantasy/races/race_devil.png",
      "expr_shy_smile": "/assets/fantasy/races/race_devil_expr_battle_cry.png",
      "expr_focused": "/assets/fantasy/races/race_devil.png",
      "expr_battle_cry": "/assets/fantasy/races/race_devil_expr_battle_cry.png"
    },
    "layers": [
      {
        "src": "/assets/fantasy/races/race_devil.png",
        "z_index": 40,
        "category": "races"
      }
    ]
  },
  {
    "id": "race_rabbit",
    "name": "Ngọc Thố Tộc - Thỏ Trắng",
    "src": "/assets/fantasy/thumbs/race_rabbit.png",
    "type": "races",
    "group": "beast",
    "defaultSrc": "/assets/fantasy/races/race_rabbit.png",
    "expressions": {
      "expr_neutral": "/assets/fantasy/races/race_rabbit.png",
      "expr_smile": "/assets/fantasy/races/race_rabbit_expr_battle_cry.png",
      "expr_shy": "/assets/fantasy/races/race_rabbit.png",
      "expr_shy_smile": "/assets/fantasy/races/race_rabbit_expr_battle_cry.png",
      "expr_focused": "/assets/fantasy/races/race_rabbit.png",
      "expr_battle_cry": "/assets/fantasy/races/race_rabbit_expr_battle_cry.png"
    },
    "layers": [
      {
        "src": "/assets/fantasy/races/race_rabbit.png",
        "z_index": 40,
        "category": "races"
      }
    ]
  },
  {
    "id": "race_dog",
    "name": "Khuyển Hiệp Sĩ - Chó Trung Thành",
    "src": "/assets/fantasy/thumbs/race_dog.png",
    "type": "races",
    "group": "beast",
    "defaultSrc": "/assets/fantasy/races/race_dog.png",
    "expressions": {
      "expr_neutral": "/assets/fantasy/races/race_dog.png",
      "expr_smile": "/assets/fantasy/races/race_dog_expr_battle_cry.png",
      "expr_shy": "/assets/fantasy/races/race_dog.png",
      "expr_shy_smile": "/assets/fantasy/races/race_dog_expr_battle_cry.png",
      "expr_focused": "/assets/fantasy/races/race_dog.png",
      "expr_battle_cry": "/assets/fantasy/races/race_dog_expr_battle_cry.png"
    },
    "layers": [
      {
        "src": "/assets/fantasy/races/race_dog.png",
        "z_index": 40,
        "category": "races"
      }
    ]
  },
  {
    "id": "race_minotaur",
    "name": "Ngưu Ma Tộc - Trâu Rừng",
    "src": "/assets/fantasy/thumbs/race_minotaur.png",
    "type": "races",
    "group": "beast",
    "defaultSrc": "/assets/fantasy/races/race_minotaur.png",
    "expressions": {
      "expr_neutral": "/assets/fantasy/races/race_minotaur.png",
      "expr_smile": "/assets/fantasy/races/race_minotaur_expr_battle_cry.png",
      "expr_shy": "/assets/fantasy/races/race_minotaur.png",
      "expr_shy_smile": "/assets/fantasy/races/race_minotaur_expr_battle_cry.png",
      "expr_focused": "/assets/fantasy/races/race_minotaur.png",
      "expr_battle_cry": "/assets/fantasy/races/race_minotaur_expr_battle_cry.png"
    },
    "layers": [
      {
        "src": "/assets/fantasy/races/race_minotaur.png",
        "z_index": 40,
        "category": "races"
      }
    ]
  },
  {
    "id": "race_snake",
    "name": "Bạch Xà Tộc - Rắn Ma Thuật",
    "src": "/assets/fantasy/thumbs/race_snake.png",
    "type": "races",
    "group": "beast",
    "defaultSrc": "/assets/fantasy/races/race_snake.png",
    "expressions": {
      "expr_neutral": "/assets/fantasy/races/race_snake.png",
      "expr_smile": "/assets/fantasy/races/race_snake_expr_battle_cry.png",
      "expr_shy": "/assets/fantasy/races/race_snake.png",
      "expr_shy_smile": "/assets/fantasy/races/race_snake_expr_battle_cry.png",
      "expr_focused": "/assets/fantasy/races/race_snake.png",
      "expr_battle_cry": "/assets/fantasy/races/race_snake_expr_battle_cry.png"
    },
    "layers": [
      {
        "src": "/assets/fantasy/races/race_snake.png",
        "z_index": 40,
        "category": "races"
      }
    ]
  },
  {
    "id": "race_goose",
    "name": "Ngỗng Trời Tinh Nghịch - Duck",
    "src": "/assets/fantasy/thumbs/race_goose.png",
    "type": "races",
    "group": "beast",
    "defaultSrc": "/assets/fantasy/races/race_goose.png",
    "expressions": {
      "expr_neutral": "/assets/fantasy/races/race_goose.png",
      "expr_smile": "/assets/fantasy/races/race_goose_expr_battle_cry.png",
      "expr_shy": "/assets/fantasy/races/race_goose.png",
      "expr_shy_smile": "/assets/fantasy/races/race_goose_expr_battle_cry.png",
      "expr_focused": "/assets/fantasy/races/race_goose.png",
      "expr_battle_cry": "/assets/fantasy/races/race_goose_expr_battle_cry.png"
    },
    "layers": [
      {
        "src": "/assets/fantasy/races/race_goose.png",
        "z_index": 40,
        "category": "races"
      }
    ]
  },
  {
    "id": "race_dragon",
    "name": "Long Tộc - Viêm Long Hỏa Diệm",
    "src": "/assets/fantasy/thumbs/race_dragon.png",
    "type": "races",
    "group": "beast",
    "defaultSrc": "/assets/fantasy/races/race_dragon.png",
    "expressions": {
      "expr_neutral": "/assets/fantasy/races/race_dragon.png",
      "expr_smile": "/assets/fantasy/races/race_dragon_expr_battle_cry.png",
      "expr_shy": "/assets/fantasy/races/race_dragon.png",
      "expr_shy_smile": "/assets/fantasy/races/race_dragon_expr_battle_cry.png",
      "expr_focused": "/assets/fantasy/races/race_dragon.png",
      "expr_battle_cry": "/assets/fantasy/races/race_dragon_expr_battle_cry.png"
    },
    "layers": [
      {
        "src": "/assets/fantasy/races/race_dragon.png",
        "z_index": 40,
        "category": "races"
      }
    ]
  },
  {
    "id": "race_frog",
    "name": "Cóc Tinh Ma Thuật - Frog Mage",
    "src": "/assets/fantasy/thumbs/race_frog.png",
    "type": "races",
    "group": "beast",
    "defaultSrc": "/assets/fantasy/races/race_frog.png",
    "expressions": {
      "expr_neutral": "/assets/fantasy/races/race_frog.png",
      "expr_smile": "/assets/fantasy/races/race_frog_expr_battle_cry.png",
      "expr_shy": "/assets/fantasy/races/race_frog.png",
      "expr_shy_smile": "/assets/fantasy/races/race_frog_expr_battle_cry.png",
      "expr_focused": "/assets/fantasy/races/race_frog.png",
      "expr_battle_cry": "/assets/fantasy/races/race_frog_expr_battle_cry.png"
    },
    "layers": [
      {
        "src": "/assets/fantasy/races/race_frog.png",
        "z_index": 40,
        "category": "races"
      }
    ]
  },
  {
    "id": "race_crocodile",
    "name": "Cá Sấu Đầm Lầy - Swamp Croc",
    "src": "/assets/fantasy/thumbs/race_crocodile.png",
    "type": "races",
    "group": "beast",
    "defaultSrc": "/assets/fantasy/races/race_crocodile.png",
    "expressions": {
      "expr_neutral": "/assets/fantasy/races/race_crocodile.png",
      "expr_smile": "/assets/fantasy/races/race_crocodile_expr_battle_cry.png",
      "expr_shy": "/assets/fantasy/races/race_crocodile.png",
      "expr_shy_smile": "/assets/fantasy/races/race_crocodile_expr_battle_cry.png",
      "expr_focused": "/assets/fantasy/races/race_crocodile.png",
      "expr_battle_cry": "/assets/fantasy/races/race_crocodile_expr_battle_cry.png"
    },
    "layers": [
      {
        "src": "/assets/fantasy/races/race_crocodile.png",
        "z_index": 40,
        "category": "races"
      }
    ]
  }
],
  expressions: [
  {
    "id": "expr_neutral",
    "name": "Bình Thản (Neutral)",
    "src": "/assets/fantasy/thumbs/thumb_expr_neutral.png",
    "type": "expressions",
    "layers": []
  },
  {
    "id": "expr_smile",
    "name": "Mỉm Cười (Smile)",
    "src": "/assets/fantasy/thumbs/thumb_expr_smile.png",
    "type": "expressions",
    "layers": []
  },
  {
    "id": "expr_shy",
    "name": "Thẹn Thùng (Shy)",
    "src": "/assets/fantasy/thumbs/thumb_expr_shy.png",
    "type": "expressions",
    "layers": []
  },
  {
    "id": "expr_shy_smile",
    "name": "Cười E Ấp (Blushing)",
    "src": "/assets/fantasy/thumbs/thumb_expr_shy_smile.png",
    "type": "expressions",
    "layers": []
  },
  {
    "id": "expr_focused",
    "name": "Tập Trung (Determined)",
    "src": "/assets/fantasy/thumbs/thumb_expr_focused.png",
    "type": "expressions",
    "layers": []
  },
  {
    "id": "expr_battle_cry",
    "name": "Gầm Vang (Battle Cry)",
    "src": "/assets/fantasy/thumbs/thumb_expr_battle_cry.png",
    "type": "expressions",
    "layers": []
  }
],
  hairs: [
  {
    "id": "hair_none",
    "name": "Trọc đầu / Không tóc (Bald)",
    "type": "hairs",
    "layers": []
  },
  {
    "id": "hair_r8_c0",
    "name": "Tóc Ngắn Chiến Binh (Nâu)",
    "src": "/assets/fantasy/thumbs/hair_r8_c0.png",
    "type": "hairs",
    "group": "Nâu",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r8_c0.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r8_c1",
    "name": "Tóc Vuốt Kèm Râu Quai Nón (Nâu)",
    "src": "/assets/fantasy/thumbs/hair_r8_c1.png",
    "type": "hairs",
    "group": "Nâu",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r8_c1.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r8_c2",
    "name": "Tóc Ngắn Lãng Tử (Nâu)",
    "src": "/assets/fantasy/thumbs/hair_r8_c2.png",
    "type": "hairs",
    "group": "Nâu",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r8_c2.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r8_c3",
    "name": "Búi Tóc Samurai / Đạo Sĩ (Nâu)",
    "src": "/assets/fantasy/thumbs/hair_r8_c3.png",
    "type": "hairs",
    "group": "Nâu",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r8_c3.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r8_c4",
    "name": "Tóc Đuôi Ngựa Quý Tộc (Nâu)",
    "src": "/assets/fantasy/thumbs/hair_r8_c4.png",
    "type": "hairs",
    "group": "Nâu",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r8_c4.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r8_c5",
    "name": "Tóc Dài Suôn Mượt (Nâu)",
    "src": "/assets/fantasy/thumbs/hair_r8_c5.png",
    "type": "hairs",
    "group": "Nâu",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r8_c5.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r8_c6",
    "name": "Tóc Rẽ Ngôi Lãng Mạn (Nâu)",
    "src": "/assets/fantasy/thumbs/hair_r8_c6.png",
    "type": "hairs",
    "group": "Nâu",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r8_c6.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r8_c7",
    "name": "Tóc Nam Tính Kèm Râu Rậm (Nâu)",
    "src": "/assets/fantasy/thumbs/hair_r8_c7.png",
    "type": "hairs",
    "group": "Nâu",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r8_c7.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r8_c8",
    "name": "Tóc Búi Đôi Phong Cách (Nâu)",
    "src": "/assets/fantasy/thumbs/hair_r8_c8.png",
    "type": "hairs",
    "group": "Nâu",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r8_c8.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r8_c9",
    "name": "Tóc Hai Bím Dài (Nâu)",
    "src": "/assets/fantasy/thumbs/hair_r8_c9.png",
    "type": "hairs",
    "group": "Nâu",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r8_c9.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r8_c10",
    "name": "Mái Tóc Ngắn Đơn Giản (Nâu)",
    "src": "/assets/fantasy/thumbs/hair_r8_c10.png",
    "type": "hairs",
    "group": "Nâu",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r8_c10.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r8_c11",
    "name": "Tóc Dựng Spiky Cá Tính (Nâu)",
    "src": "/assets/fantasy/thumbs/hair_r8_c11.png",
    "type": "hairs",
    "group": "Nâu",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r8_c11.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r8_c12",
    "name": "Tóc Dreadlock Dài (Nâu)",
    "src": "/assets/fantasy/thumbs/hair_r8_c12.png",
    "type": "hairs",
    "group": "Nâu",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r8_c12.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r8_c13",
    "name": "Tóc Bồng Bềnh Quý Tộc (Nâu)",
    "src": "/assets/fantasy/thumbs/hair_r8_c13.png",
    "type": "hairs",
    "group": "Nâu",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r8_c13.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r8_c14",
    "name": "Tóc Mái Bằng Nữ Tính (Nâu)",
    "src": "/assets/fantasy/thumbs/hair_r8_c14.png",
    "type": "hairs",
    "group": "Nâu",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r8_c14.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r8_c15",
    "name": "Tóc Xoăn Xù Bồng Bềnh (Nâu)",
    "src": "/assets/fantasy/thumbs/hair_r8_c15.png",
    "type": "hairs",
    "group": "Nâu",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r8_c15.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r9_c0",
    "name": "Tóc Ngắn Chiến Binh (Hung Đỏ)",
    "src": "/assets/fantasy/thumbs/hair_r9_c0.png",
    "type": "hairs",
    "group": "Hung Đỏ",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r9_c0.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r9_c1",
    "name": "Tóc Vuốt Kèm Râu Quai Nón (Hung Đỏ)",
    "src": "/assets/fantasy/thumbs/hair_r9_c1.png",
    "type": "hairs",
    "group": "Hung Đỏ",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r9_c1.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r9_c2",
    "name": "Tóc Ngắn Lãng Tử (Hung Đỏ)",
    "src": "/assets/fantasy/thumbs/hair_r9_c2.png",
    "type": "hairs",
    "group": "Hung Đỏ",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r9_c2.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r9_c3",
    "name": "Búi Tóc Samurai / Đạo Sĩ (Hung Đỏ)",
    "src": "/assets/fantasy/thumbs/hair_r9_c3.png",
    "type": "hairs",
    "group": "Hung Đỏ",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r9_c3.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r9_c4",
    "name": "Tóc Đuôi Ngựa Quý Tộc (Hung Đỏ)",
    "src": "/assets/fantasy/thumbs/hair_r9_c4.png",
    "type": "hairs",
    "group": "Hung Đỏ",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r9_c4.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r9_c5",
    "name": "Tóc Dài Suôn Mượt (Hung Đỏ)",
    "src": "/assets/fantasy/thumbs/hair_r9_c5.png",
    "type": "hairs",
    "group": "Hung Đỏ",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r9_c5.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r9_c6",
    "name": "Tóc Rẽ Ngôi Lãng Mạn (Hung Đỏ)",
    "src": "/assets/fantasy/thumbs/hair_r9_c6.png",
    "type": "hairs",
    "group": "Hung Đỏ",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r9_c6.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r9_c7",
    "name": "Tóc Nam Tính Kèm Râu Rậm (Hung Đỏ)",
    "src": "/assets/fantasy/thumbs/hair_r9_c7.png",
    "type": "hairs",
    "group": "Hung Đỏ",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r9_c7.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r9_c8",
    "name": "Tóc Búi Đôi Phong Cách (Hung Đỏ)",
    "src": "/assets/fantasy/thumbs/hair_r9_c8.png",
    "type": "hairs",
    "group": "Hung Đỏ",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r9_c8.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r9_c9",
    "name": "Tóc Hai Bím Dài (Hung Đỏ)",
    "src": "/assets/fantasy/thumbs/hair_r9_c9.png",
    "type": "hairs",
    "group": "Hung Đỏ",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r9_c9.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r9_c10",
    "name": "Mái Tóc Ngắn Đơn Giản (Hung Đỏ)",
    "src": "/assets/fantasy/thumbs/hair_r9_c10.png",
    "type": "hairs",
    "group": "Hung Đỏ",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r9_c10.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r9_c11",
    "name": "Tóc Dựng Spiky Cá Tính (Hung Đỏ)",
    "src": "/assets/fantasy/thumbs/hair_r9_c11.png",
    "type": "hairs",
    "group": "Hung Đỏ",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r9_c11.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r9_c12",
    "name": "Tóc Dreadlock Dài (Hung Đỏ)",
    "src": "/assets/fantasy/thumbs/hair_r9_c12.png",
    "type": "hairs",
    "group": "Hung Đỏ",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r9_c12.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r9_c13",
    "name": "Tóc Bồng Bềnh Quý Tộc (Hung Đỏ)",
    "src": "/assets/fantasy/thumbs/hair_r9_c13.png",
    "type": "hairs",
    "group": "Hung Đỏ",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r9_c13.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r9_c14",
    "name": "Tóc Mái Bằng Nữ Tính (Hung Đỏ)",
    "src": "/assets/fantasy/thumbs/hair_r9_c14.png",
    "type": "hairs",
    "group": "Hung Đỏ",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r9_c14.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r9_c15",
    "name": "Tóc Xoăn Xù Bồng Bềnh (Hung Đỏ)",
    "src": "/assets/fantasy/thumbs/hair_r9_c15.png",
    "type": "hairs",
    "group": "Hung Đỏ",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r9_c15.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r10_c0",
    "name": "Tóc Ngắn Chiến Binh (Vàng)",
    "src": "/assets/fantasy/thumbs/hair_r10_c0.png",
    "type": "hairs",
    "group": "Vàng",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r10_c0.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r10_c1",
    "name": "Tóc Vuốt Kèm Râu Quai Nón (Vàng)",
    "src": "/assets/fantasy/thumbs/hair_r10_c1.png",
    "type": "hairs",
    "group": "Vàng",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r10_c1.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r10_c2",
    "name": "Tóc Ngắn Lãng Tử (Vàng)",
    "src": "/assets/fantasy/thumbs/hair_r10_c2.png",
    "type": "hairs",
    "group": "Vàng",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r10_c2.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r10_c3",
    "name": "Búi Tóc Samurai / Đạo Sĩ (Vàng)",
    "src": "/assets/fantasy/thumbs/hair_r10_c3.png",
    "type": "hairs",
    "group": "Vàng",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r10_c3.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r10_c4",
    "name": "Tóc Đuôi Ngựa Quý Tộc (Vàng)",
    "src": "/assets/fantasy/thumbs/hair_r10_c4.png",
    "type": "hairs",
    "group": "Vàng",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r10_c4.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r10_c5",
    "name": "Tóc Dài Suôn Mượt (Vàng)",
    "src": "/assets/fantasy/thumbs/hair_r10_c5.png",
    "type": "hairs",
    "group": "Vàng",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r10_c5.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r10_c6",
    "name": "Tóc Rẽ Ngôi Lãng Mạn (Vàng)",
    "src": "/assets/fantasy/thumbs/hair_r10_c6.png",
    "type": "hairs",
    "group": "Vàng",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r10_c6.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r10_c7",
    "name": "Tóc Nam Tính Kèm Râu Rậm (Vàng)",
    "src": "/assets/fantasy/thumbs/hair_r10_c7.png",
    "type": "hairs",
    "group": "Vàng",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r10_c7.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r10_c8",
    "name": "Tóc Búi Đôi Phong Cách (Vàng)",
    "src": "/assets/fantasy/thumbs/hair_r10_c8.png",
    "type": "hairs",
    "group": "Vàng",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r10_c8.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r10_c9",
    "name": "Tóc Hai Bím Dài (Vàng)",
    "src": "/assets/fantasy/thumbs/hair_r10_c9.png",
    "type": "hairs",
    "group": "Vàng",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r10_c9.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r10_c10",
    "name": "Mái Tóc Ngắn Đơn Giản (Vàng)",
    "src": "/assets/fantasy/thumbs/hair_r10_c10.png",
    "type": "hairs",
    "group": "Vàng",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r10_c10.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r10_c11",
    "name": "Tóc Dựng Spiky Cá Tính (Vàng)",
    "src": "/assets/fantasy/thumbs/hair_r10_c11.png",
    "type": "hairs",
    "group": "Vàng",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r10_c11.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r10_c12",
    "name": "Tóc Dreadlock Dài (Vàng)",
    "src": "/assets/fantasy/thumbs/hair_r10_c12.png",
    "type": "hairs",
    "group": "Vàng",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r10_c12.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r10_c13",
    "name": "Tóc Bồng Bềnh Quý Tộc (Vàng)",
    "src": "/assets/fantasy/thumbs/hair_r10_c13.png",
    "type": "hairs",
    "group": "Vàng",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r10_c13.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r10_c14",
    "name": "Tóc Mái Bằng Nữ Tính (Vàng)",
    "src": "/assets/fantasy/thumbs/hair_r10_c14.png",
    "type": "hairs",
    "group": "Vàng",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r10_c14.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r10_c15",
    "name": "Tóc Xoăn Xù Bồng Bềnh (Vàng)",
    "src": "/assets/fantasy/thumbs/hair_r10_c15.png",
    "type": "hairs",
    "group": "Vàng",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r10_c15.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r11_c0",
    "name": "Tóc Ngắn Chiến Binh (Bạc)",
    "src": "/assets/fantasy/thumbs/hair_r11_c0.png",
    "type": "hairs",
    "group": "Bạc",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r11_c0.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r11_c1",
    "name": "Tóc Vuốt Kèm Râu Quai Nón (Bạc)",
    "src": "/assets/fantasy/thumbs/hair_r11_c1.png",
    "type": "hairs",
    "group": "Bạc",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r11_c1.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r11_c2",
    "name": "Tóc Ngắn Lãng Tử (Bạc)",
    "src": "/assets/fantasy/thumbs/hair_r11_c2.png",
    "type": "hairs",
    "group": "Bạc",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r11_c2.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r11_c3",
    "name": "Búi Tóc Samurai / Đạo Sĩ (Bạc)",
    "src": "/assets/fantasy/thumbs/hair_r11_c3.png",
    "type": "hairs",
    "group": "Bạc",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r11_c3.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r11_c4",
    "name": "Tóc Đuôi Ngựa Quý Tộc (Bạc)",
    "src": "/assets/fantasy/thumbs/hair_r11_c4.png",
    "type": "hairs",
    "group": "Bạc",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r11_c4.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r11_c5",
    "name": "Tóc Dài Suôn Mượt (Bạc)",
    "src": "/assets/fantasy/thumbs/hair_r11_c5.png",
    "type": "hairs",
    "group": "Bạc",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r11_c5.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r11_c6",
    "name": "Tóc Rẽ Ngôi Lãng Mạn (Bạc)",
    "src": "/assets/fantasy/thumbs/hair_r11_c6.png",
    "type": "hairs",
    "group": "Bạc",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r11_c6.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r11_c7",
    "name": "Tóc Nam Tính Kèm Râu Rậm (Bạc)",
    "src": "/assets/fantasy/thumbs/hair_r11_c7.png",
    "type": "hairs",
    "group": "Bạc",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r11_c7.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r11_c8",
    "name": "Tóc Búi Đôi Phong Cách (Bạc)",
    "src": "/assets/fantasy/thumbs/hair_r11_c8.png",
    "type": "hairs",
    "group": "Bạc",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r11_c8.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r11_c9",
    "name": "Tóc Hai Bím Dài (Bạc)",
    "src": "/assets/fantasy/thumbs/hair_r11_c9.png",
    "type": "hairs",
    "group": "Bạc",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r11_c9.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r11_c10",
    "name": "Mái Tóc Ngắn Đơn Giản (Bạc)",
    "src": "/assets/fantasy/thumbs/hair_r11_c10.png",
    "type": "hairs",
    "group": "Bạc",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r11_c10.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r11_c11",
    "name": "Tóc Dựng Spiky Cá Tính (Bạc)",
    "src": "/assets/fantasy/thumbs/hair_r11_c11.png",
    "type": "hairs",
    "group": "Bạc",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r11_c11.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r11_c12",
    "name": "Tóc Dreadlock Dài (Bạc)",
    "src": "/assets/fantasy/thumbs/hair_r11_c12.png",
    "type": "hairs",
    "group": "Bạc",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r11_c12.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r11_c13",
    "name": "Tóc Bồng Bềnh Quý Tộc (Bạc)",
    "src": "/assets/fantasy/thumbs/hair_r11_c13.png",
    "type": "hairs",
    "group": "Bạc",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r11_c13.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r11_c14",
    "name": "Tóc Mái Bằng Nữ Tính (Bạc)",
    "src": "/assets/fantasy/thumbs/hair_r11_c14.png",
    "type": "hairs",
    "group": "Bạc",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r11_c14.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r11_c15",
    "name": "Tóc Xoăn Xù Bồng Bềnh (Bạc)",
    "src": "/assets/fantasy/thumbs/hair_r11_c15.png",
    "type": "hairs",
    "group": "Bạc",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r11_c15.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r12_c0",
    "name": "Tóc Ngắn Chiến Binh (Lam Ngọc)",
    "src": "/assets/fantasy/thumbs/hair_r12_c0.png",
    "type": "hairs",
    "group": "Lam Ngọc",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r12_c0.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r12_c1",
    "name": "Tóc Vuốt Kèm Râu Quai Nón (Lam Ngọc)",
    "src": "/assets/fantasy/thumbs/hair_r12_c1.png",
    "type": "hairs",
    "group": "Lam Ngọc",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r12_c1.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r12_c2",
    "name": "Tóc Ngắn Lãng Tử (Lam Ngọc)",
    "src": "/assets/fantasy/thumbs/hair_r12_c2.png",
    "type": "hairs",
    "group": "Lam Ngọc",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r12_c2.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r12_c3",
    "name": "Búi Tóc Samurai / Đạo Sĩ (Lam Ngọc)",
    "src": "/assets/fantasy/thumbs/hair_r12_c3.png",
    "type": "hairs",
    "group": "Lam Ngọc",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r12_c3.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r12_c4",
    "name": "Tóc Đuôi Ngựa Quý Tộc (Lục Bảo)",
    "src": "/assets/fantasy/thumbs/hair_r12_c4.png",
    "type": "hairs",
    "group": "Lục Bảo",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r12_c4.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r12_c5",
    "name": "Tóc Dài Suôn Mượt (Lục Bảo)",
    "src": "/assets/fantasy/thumbs/hair_r12_c5.png",
    "type": "hairs",
    "group": "Lục Bảo",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r12_c5.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r12_c6",
    "name": "Tóc Rẽ Ngôi Lãng Mạn (Lục Bảo)",
    "src": "/assets/fantasy/thumbs/hair_r12_c6.png",
    "type": "hairs",
    "group": "Lục Bảo",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r12_c6.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r12_c7",
    "name": "Tóc Nam Tính Kèm Râu Rậm (Lục Bảo)",
    "src": "/assets/fantasy/thumbs/hair_r12_c7.png",
    "type": "hairs",
    "group": "Lục Bảo",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r12_c7.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r12_c8",
    "name": "Tóc Búi Đôi Phong Cách (Đen)",
    "src": "/assets/fantasy/thumbs/hair_r12_c8.png",
    "type": "hairs",
    "group": "Đen",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r12_c8.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r12_c9",
    "name": "Tóc Hai Bím Dài (Đen)",
    "src": "/assets/fantasy/thumbs/hair_r12_c9.png",
    "type": "hairs",
    "group": "Đen",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r12_c9.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r12_c10",
    "name": "Mái Tóc Ngắn Đơn Giản (Đen)",
    "src": "/assets/fantasy/thumbs/hair_r12_c10.png",
    "type": "hairs",
    "group": "Đen",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r12_c10.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r12_c11",
    "name": "Tóc Dựng Spiky Cá Tính (Đen)",
    "src": "/assets/fantasy/thumbs/hair_r12_c11.png",
    "type": "hairs",
    "group": "Đen",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r12_c11.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r12_c12",
    "name": "Tóc Dreadlock Dài (Đen)",
    "src": "/assets/fantasy/thumbs/hair_r12_c12.png",
    "type": "hairs",
    "group": "Đen",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r12_c12.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r12_c13",
    "name": "Tóc Bồng Bềnh Quý Tộc (Đen)",
    "src": "/assets/fantasy/thumbs/hair_r12_c13.png",
    "type": "hairs",
    "group": "Đen",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r12_c13.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r12_c14",
    "name": "Tóc Mái Bằng Nữ Tính (Đen)",
    "src": "/assets/fantasy/thumbs/hair_r12_c14.png",
    "type": "hairs",
    "group": "Đen",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r12_c14.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r12_c15",
    "name": "Tóc Xoăn Xù Bồng Bềnh (Đen)",
    "src": "/assets/fantasy/thumbs/hair_r12_c15.png",
    "type": "hairs",
    "group": "Đen",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r12_c15.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r13_c0",
    "name": "Tóc Ngắn Chiến Binh (Bạch Kim)",
    "src": "/assets/fantasy/thumbs/hair_r13_c0.png",
    "type": "hairs",
    "group": "Bạch Kim",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r13_c0.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r13_c1",
    "name": "Tóc Vuốt Kèm Râu Quai Nón (Bạch Kim)",
    "src": "/assets/fantasy/thumbs/hair_r13_c1.png",
    "type": "hairs",
    "group": "Bạch Kim",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r13_c1.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r13_c2",
    "name": "Tóc Ngắn Lãng Tử (Bạch Kim)",
    "src": "/assets/fantasy/thumbs/hair_r13_c2.png",
    "type": "hairs",
    "group": "Bạch Kim",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r13_c2.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r13_c3",
    "name": "Búi Tóc Samurai / Đạo Sĩ (Bạch Kim)",
    "src": "/assets/fantasy/thumbs/hair_r13_c3.png",
    "type": "hairs",
    "group": "Bạch Kim",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r13_c3.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r13_c4",
    "name": "Tóc Đuôi Ngựa Quý Tộc (Bạch Kim)",
    "src": "/assets/fantasy/thumbs/hair_r13_c4.png",
    "type": "hairs",
    "group": "Bạch Kim",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r13_c4.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r13_c5",
    "name": "Tóc Dài Suôn Mượt (Bạch Kim)",
    "src": "/assets/fantasy/thumbs/hair_r13_c5.png",
    "type": "hairs",
    "group": "Bạch Kim",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r13_c5.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r13_c6",
    "name": "Tóc Rẽ Ngôi Lãng Mạn (Bạch Kim)",
    "src": "/assets/fantasy/thumbs/hair_r13_c6.png",
    "type": "hairs",
    "group": "Bạch Kim",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r13_c6.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r13_c7",
    "name": "Tóc Nam Tính Kèm Râu Rậm (Bạch Kim)",
    "src": "/assets/fantasy/thumbs/hair_r13_c7.png",
    "type": "hairs",
    "group": "Bạch Kim",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r13_c7.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r13_c8",
    "name": "Tóc Búi Đôi Phong Cách (Bạch Kim)",
    "src": "/assets/fantasy/thumbs/hair_r13_c8.png",
    "type": "hairs",
    "group": "Bạch Kim",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r13_c8.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r13_c9",
    "name": "Tóc Hai Bím Dài (Bạch Kim)",
    "src": "/assets/fantasy/thumbs/hair_r13_c9.png",
    "type": "hairs",
    "group": "Bạch Kim",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r13_c9.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r13_c10",
    "name": "Mái Tóc Ngắn Đơn Giản (Bạch Kim)",
    "src": "/assets/fantasy/thumbs/hair_r13_c10.png",
    "type": "hairs",
    "group": "Bạch Kim",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r13_c10.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r13_c11",
    "name": "Tóc Dựng Spiky Cá Tính (Bạch Kim)",
    "src": "/assets/fantasy/thumbs/hair_r13_c11.png",
    "type": "hairs",
    "group": "Bạch Kim",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r13_c11.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r13_c12",
    "name": "Tóc Dreadlock Dài (Bạch Kim)",
    "src": "/assets/fantasy/thumbs/hair_r13_c12.png",
    "type": "hairs",
    "group": "Bạch Kim",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r13_c12.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r13_c13",
    "name": "Tóc Bồng Bềnh Quý Tộc (Bạch Kim)",
    "src": "/assets/fantasy/thumbs/hair_r13_c13.png",
    "type": "hairs",
    "group": "Bạch Kim",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r13_c13.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r13_c14",
    "name": "Tóc Mái Bằng Nữ Tính (Bạch Kim)",
    "src": "/assets/fantasy/thumbs/hair_r13_c14.png",
    "type": "hairs",
    "group": "Bạch Kim",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r13_c14.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  },
  {
    "id": "hair_r13_c15",
    "name": "Tóc Xoăn Xù Bồng Bềnh (Bạch Kim)",
    "src": "/assets/fantasy/thumbs/hair_r13_c15.png",
    "type": "hairs",
    "group": "Bạch Kim",
    "layers": [
      {
        "src": "/assets/fantasy/hairs/hair_r13_c15.png",
        "z_index": 60,
        "category": "hairs"
      }
    ]
  }
],
  outfits: [
  {
    "id": "outfit_r16_c0",
    "name": "Áo Choàng Đỏ Cổ Viền Vàng",
    "src": "/assets/fantasy/thumbs/outfit_r16_c0.png",
    "type": "outfits",
    "group": "quytoc",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r16_c0.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r16_c1",
    "name": "Áo Dài Dạ Hội Tím Than",
    "src": "/assets/fantasy/thumbs/outfit_r16_c1.png",
    "type": "outfits",
    "group": "quytoc",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r16_c1.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r16_c2",
    "name": "Y Phục Corset Thợ Săn Nâu",
    "src": "/assets/fantasy/thumbs/outfit_r16_c2.png",
    "type": "outfits",
    "group": "quytoc",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r16_c2.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r16_c3",
    "name": "Váy Dạ Hội Caro Lục Bảo",
    "src": "/assets/fantasy/thumbs/outfit_r16_c3.png",
    "type": "outfits",
    "group": "quytoc",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r16_c3.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r16_c4",
    "name": "Váy Caro Hoàng Gia Xanh Đen",
    "src": "/assets/fantasy/thumbs/outfit_r16_c4.png",
    "type": "outfits",
    "group": "quytoc",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r16_c4.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r16_c5",
    "name": "Lễ Phục Trắng Dải Vàng Quý Tộc",
    "src": "/assets/fantasy/thumbs/outfit_r16_c5.png",
    "type": "outfits",
    "group": "quytoc",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r16_c5.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r16_c6",
    "name": "Áo Sơ Mi Trắng Kẻ Sọc Quý Phái",
    "src": "/assets/fantasy/thumbs/outfit_r16_c6.png",
    "type": "outfits",
    "group": "quytoc",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r16_c6.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r16_c7",
    "name": "Y Phục Hầu Gái Đen Trắng",
    "src": "/assets/fantasy/thumbs/outfit_r16_c7.png",
    "type": "outfits",
    "group": "quytoc",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r16_c7.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r16_c8",
    "name": "Áo Thụng Pháp Sư Đen Cổ Vàng",
    "src": "/assets/fantasy/thumbs/outfit_r16_c8.png",
    "type": "outfits",
    "group": "quytoc",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r16_c8.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r16_c9",
    "name": "Y Phục Bạch Y Tiên Tử",
    "src": "/assets/fantasy/thumbs/outfit_r16_c9.png",
    "type": "outfits",
    "group": "quytoc",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r16_c9.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r16_c10",
    "name": "Áo Gile Đen Lãng Tử",
    "src": "/assets/fantasy/thumbs/outfit_r16_c10.png",
    "type": "outfits",
    "group": "quytoc",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r16_c10.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r16_c11",
    "name": "Áo Len Kem Quý Tộc",
    "src": "/assets/fantasy/thumbs/outfit_r16_c11.png",
    "type": "outfits",
    "group": "quytoc",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r16_c11.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r16_c12",
    "name": "Áo Choàng Khăn Quàng Đỏ Sát Thủ",
    "src": "/assets/fantasy/thumbs/outfit_r16_c12.png",
    "type": "outfits",
    "group": "quytoc",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r16_c12.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r16_c13",
    "name": "Áo Khoác Da Biker Đen",
    "src": "/assets/fantasy/thumbs/outfit_r16_c13.png",
    "type": "outfits",
    "group": "quytoc",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r16_c13.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r16_c14",
    "name": "Áo Len Dệt Đen Sọc Xanh",
    "src": "/assets/fantasy/thumbs/outfit_r16_c14.png",
    "type": "outfits",
    "group": "quytoc",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r16_c14.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r16_c15",
    "name": "Áo Choàng Pháp Sư Đêm Huyền Bí",
    "src": "/assets/fantasy/thumbs/outfit_r16_c15.png",
    "type": "outfits",
    "group": "quytoc",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r16_c15.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r17_c0",
    "name": "Chiến Bào Kẻ Caro Vàng Đỏ",
    "src": "/assets/fantasy/thumbs/outfit_r17_c0.png",
    "type": "outfits",
    "group": "thuongdan",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r17_c0.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r17_c1",
    "name": "Áo Len Cổ Lọ Đỏ Phối Đen",
    "src": "/assets/fantasy/thumbs/outfit_r17_c1.png",
    "type": "outfits",
    "group": "thuongdan",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r17_c1.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r17_c2",
    "name": "Áo Len Đỏ Đô Thêu Gia Huy",
    "src": "/assets/fantasy/thumbs/outfit_r17_c2.png",
    "type": "outfits",
    "group": "thuongdan",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r17_c2.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r17_c3",
    "name": "Yếm Xanh Dã Ngoại Thợ Thủ Công",
    "src": "/assets/fantasy/thumbs/outfit_r17_c3.png",
    "type": "outfits",
    "group": "thuongdan",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r17_c3.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r17_c4",
    "name": "Áo Dệt Thổ Cẩm Vàng Đỏ Cổ Xưa",
    "src": "/assets/fantasy/thumbs/outfit_r17_c4.png",
    "type": "outfits",
    "group": "thuongdan",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r17_c4.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r17_c5",
    "name": "Áo Thô Tím Xám Thường Dân",
    "src": "/assets/fantasy/thumbs/outfit_r17_c5.png",
    "type": "outfits",
    "group": "thuongdan",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r17_c5.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r17_c6",
    "name": "Áo Gile Trắng Thêu Chỉ Bạc",
    "src": "/assets/fantasy/thumbs/outfit_r17_c6.png",
    "type": "outfits",
    "group": "thuongdan",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r17_c6.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r17_c7",
    "name": "Yếm Nâu Thợ Rèn Da Bò",
    "src": "/assets/fantasy/thumbs/outfit_r17_c7.png",
    "type": "outfits",
    "group": "thuongdan",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r17_c7.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r17_c8",
    "name": "Y Phục Bác Sĩ Cổ Điển",
    "src": "/assets/fantasy/thumbs/outfit_r17_c8.png",
    "type": "outfits",
    "group": "thuongdan",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r17_c8.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r17_c9",
    "name": "Áo Nỉ Xám Phong Cách Đời Thường",
    "src": "/assets/fantasy/thumbs/outfit_r17_c9.png",
    "type": "outfits",
    "group": "thuongdan",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r17_c9.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r17_c10",
    "name": "Áo Khoác Cánh Dơi Đen Quý Tộc",
    "src": "/assets/fantasy/thumbs/outfit_r17_c10.png",
    "type": "outfits",
    "group": "thuongdan",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r17_c10.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r17_c11",
    "name": "Áo Len Mận Chín Đốm Trắng",
    "src": "/assets/fantasy/thumbs/outfit_r17_c11.png",
    "type": "outfits",
    "group": "thuongdan",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r17_c11.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r17_c12",
    "name": "Áo Choàng Tím Xám Xé Rách Sát Thủ",
    "src": "/assets/fantasy/thumbs/outfit_r17_c12.png",
    "type": "outfits",
    "group": "thuongdan",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r17_c12.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r17_c13",
    "name": "Áo Khoác Nỉ Đỏ Mận Mùa Đông",
    "src": "/assets/fantasy/thumbs/outfit_r17_c13.png",
    "type": "outfits",
    "group": "thuongdan",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r17_c13.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r17_c14",
    "name": "Áo Thô Nâu Xám Nông Dân",
    "src": "/assets/fantasy/thumbs/outfit_r17_c14.png",
    "type": "outfits",
    "group": "thuongdan",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r17_c14.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r17_c15",
    "name": "Y Phục Xanh Thẫm Viền Bạc Đạo Sĩ",
    "src": "/assets/fantasy/thumbs/outfit_r17_c15.png",
    "type": "outfits",
    "group": "thuongdan",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r17_c15.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r18_c0",
    "name": "Áo Khoác Đen Viền Tím Huyền Bí",
    "src": "/assets/fantasy/thumbs/outfit_r18_c0.png",
    "type": "outfits",
    "group": "duhiep",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r18_c0.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r18_c1",
    "name": "Áo Choàng Sát Thủ Viền Hồng",
    "src": "/assets/fantasy/thumbs/outfit_r18_c1.png",
    "type": "outfits",
    "group": "duhiep",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r18_c1.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r18_c2",
    "name": "Áo Đen Tuyền Tối Giản",
    "src": "/assets/fantasy/thumbs/outfit_r18_c2.png",
    "type": "outfits",
    "group": "duhiep",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r18_c2.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r18_c3",
    "name": "Y Phục Đen Đai Lưng Đỏ Nổi Bật",
    "src": "/assets/fantasy/thumbs/outfit_r18_c3.png",
    "type": "outfits",
    "group": "duhiep",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r18_c3.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r18_c4",
    "name": "Áo Thụng Cổ Thuyền Đỏ Rượu",
    "src": "/assets/fantasy/thumbs/outfit_r18_c4.png",
    "type": "outfits",
    "group": "duhiep",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r18_c4.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r18_c5",
    "name": "Khăn Quàng Xanh Áo Len Mận Đỏ",
    "src": "/assets/fantasy/thumbs/outfit_r18_c5.png",
    "type": "outfits",
    "group": "duhiep",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r18_c5.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r18_c6",
    "name": "Áo Choàng Du Ca Nhành Gai Cổ",
    "src": "/assets/fantasy/thumbs/outfit_r18_c6.png",
    "type": "outfits",
    "group": "duhiep",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r18_c6.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r18_c7",
    "name": "Chiến Bào Đai Lưng Da Nâu Đỏ",
    "src": "/assets/fantasy/thumbs/outfit_r18_c7.png",
    "type": "outfits",
    "group": "duhiep",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r18_c7.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r18_c8",
    "name": "Áo Lụa Trắng Thêu Dây Kim Tuyến",
    "src": "/assets/fantasy/thumbs/outfit_r18_c8.png",
    "type": "outfits",
    "group": "duhiep",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r18_c8.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r18_c9",
    "name": "Y Phục Thổ Dân Thắt Lưng Bện Vàng",
    "src": "/assets/fantasy/thumbs/outfit_r18_c9.png",
    "type": "outfits",
    "group": "duhiep",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r18_c9.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r18_c10",
    "name": "Áo Lụa Trắng Thuần Khiết",
    "src": "/assets/fantasy/thumbs/outfit_r18_c10.png",
    "type": "outfits",
    "group": "duhiep",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r18_c10.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r18_c11",
    "name": "Áo Choàng Đỏ Đô Sang Trọng",
    "src": "/assets/fantasy/thumbs/outfit_r18_c11.png",
    "type": "outfits",
    "group": "duhiep",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r18_c11.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r18_c12",
    "name": "Áo Nỉ Đen Tuyền Chiến Binh",
    "src": "/assets/fantasy/thumbs/outfit_r18_c12.png",
    "type": "outfits",
    "group": "duhiep",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r18_c12.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r18_c13",
    "name": "Chiến Giáp Hắc Báo Thầm Lặng",
    "src": "/assets/fantasy/thumbs/outfit_r18_c13.png",
    "type": "outfits",
    "group": "duhiep",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r18_c13.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r18_c14",
    "name": "Áo Dài Lục Bảo Phối Trắng Thanh Nhã",
    "src": "/assets/fantasy/thumbs/outfit_r18_c14.png",
    "type": "outfits",
    "group": "duhiep",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r18_c14.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r18_c15",
    "name": "Y Phục Đỏ Đô Dải Lụa Trắng",
    "src": "/assets/fantasy/thumbs/outfit_r18_c15.png",
    "type": "outfits",
    "group": "duhiep",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r18_c15.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r19_c0",
    "name": "Lễ Phục Tuxedo Nơ Đỏ Quý Tộc",
    "src": "/assets/fantasy/thumbs/outfit_r19_c0.png",
    "type": "outfits",
    "group": "chiengiap",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r19_c0.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r19_c1",
    "name": "Chiến Giáp Da Xanh Lá Cung Thủ",
    "src": "/assets/fantasy/thumbs/outfit_r19_c1.png",
    "type": "outfits",
    "group": "chiengiap",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r19_c1.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r19_c2",
    "name": "Áo Da Nâu Dây Chéo Đeo Tên",
    "src": "/assets/fantasy/thumbs/outfit_r19_c2.png",
    "type": "outfits",
    "group": "chiengiap",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r19_c2.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r19_c3",
    "name": "Áo Thợ Săn Rừng Sâu Dây Đạn",
    "src": "/assets/fantasy/thumbs/outfit_r19_c3.png",
    "type": "outfits",
    "group": "chiengiap",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r19_c3.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r19_c4",
    "name": "Chiến Giáp Da Báo Săn Thú",
    "src": "/assets/fantasy/thumbs/outfit_r19_c4.png",
    "type": "outfits",
    "group": "chiengiap",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r19_c4.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r19_c5",
    "name": "Áo Choàng Lông Thú Man Tộc Đỏ Nâu",
    "src": "/assets/fantasy/thumbs/outfit_r19_c5.png",
    "type": "outfits",
    "group": "chiengiap",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r19_c5.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r19_c6",
    "name": "Hoàng Bào Vua Đỏ Viền Lông Chồn",
    "src": "/assets/fantasy/thumbs/outfit_r19_c6.png",
    "type": "outfits",
    "group": "chiengiap",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r19_c6.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r19_c7",
    "name": "Áo Giáp Bản Da Đỏ Viền Trắng",
    "src": "/assets/fantasy/thumbs/outfit_r19_c7.png",
    "type": "outfits",
    "group": "chiengiap",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r19_c7.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r19_c8",
    "name": "Áo Giáp Bản Đỏ Đô Nẹp Kim Loại",
    "src": "/assets/fantasy/thumbs/outfit_r19_c8.png",
    "type": "outfits",
    "group": "chiengiap",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r19_c8.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r19_c9",
    "name": "Chiến Bào Hiệp Sĩ Xanh Dương Đai Trắng",
    "src": "/assets/fantasy/thumbs/outfit_r19_c9.png",
    "type": "outfits",
    "group": "chiengiap",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r19_c9.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r19_c10",
    "name": "Áo Thụng Hiệp Sĩ Xanh Thẫm Cổ Vàng",
    "src": "/assets/fantasy/thumbs/outfit_r19_c10.png",
    "type": "outfits",
    "group": "chiengiap",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r19_c10.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r19_c11",
    "name": "Giáp Xích Thép Hiệp Sĩ Paladin",
    "src": "/assets/fantasy/thumbs/outfit_r19_c11.png",
    "type": "outfits",
    "group": "chiengiap",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r19_c11.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r19_c12",
    "name": "Giáp Thép Tấm Nặng Knight Templar",
    "src": "/assets/fantasy/thumbs/outfit_r19_c12.png",
    "type": "outfits",
    "group": "chiengiap",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r19_c12.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r19_c13",
    "name": "Giáp Bản Kim Loại Chống Phép",
    "src": "/assets/fantasy/thumbs/outfit_r19_c13.png",
    "type": "outfits",
    "group": "chiengiap",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r19_c13.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r19_c14",
    "name": "Áo Giáp Vảy Cá Biển Sâu Lam Xanh",
    "src": "/assets/fantasy/thumbs/outfit_r19_c14.png",
    "type": "outfits",
    "group": "chiengiap",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r19_c14.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r19_c15",
    "name": "Chiến Bào Quân Đội Rừng Xanh Thẫm",
    "src": "/assets/fantasy/thumbs/outfit_r19_c15.png",
    "type": "outfits",
    "group": "chiengiap",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r19_c15.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r20_c0",
    "name": "Áo Choàng Bay Đỏ Nhung Lãng Tử",
    "src": "/assets/fantasy/thumbs/outfit_r20_c0.png",
    "type": "outfits",
    "group": "phapsu",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r20_c0.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r20_c1",
    "name": "Áo Choàng Bóng Đêm Sát Thủ",
    "src": "/assets/fantasy/thumbs/outfit_r20_c1.png",
    "type": "outfits",
    "group": "phapsu",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r20_c1.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r20_c2",
    "name": "Váy Nữ Tính Xanh Lam Nhạt",
    "src": "/assets/fantasy/thumbs/outfit_r20_c2.png",
    "type": "outfits",
    "group": "phapsu",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r20_c2.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r20_c3",
    "name": "Váy Lụa Trắng Xanh Hoàng Gia",
    "src": "/assets/fantasy/thumbs/outfit_r20_c3.png",
    "type": "outfits",
    "group": "phapsu",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r20_c3.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r20_c4",
    "name": "Áo Sơ Mi Trắng Nút Cúc Đen",
    "src": "/assets/fantasy/thumbs/outfit_r20_c4.png",
    "type": "outfits",
    "group": "phapsu",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r20_c4.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r20_c5",
    "name": "Pháp Phục Lam Ngọc Thắt Đai Xanh",
    "src": "/assets/fantasy/thumbs/outfit_r20_c5.png",
    "type": "outfits",
    "group": "phapsu",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r20_c5.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r20_c6",
    "name": "Áo Choàng Thần Bí Đen Phối Vàng",
    "src": "/assets/fantasy/thumbs/outfit_r20_c6.png",
    "type": "outfits",
    "group": "phapsu",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r20_c6.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r20_c7",
    "name": "Pháp Y Dạ Thần Xanh Thẫm Thắt Nơ",
    "src": "/assets/fantasy/thumbs/outfit_r20_c7.png",
    "type": "outfits",
    "group": "phapsu",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r20_c7.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r20_c8",
    "name": "Pháp Phục Lôi Điện Xanh Băng",
    "src": "/assets/fantasy/thumbs/outfit_r20_c8.png",
    "type": "outfits",
    "group": "phapsu",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r20_c8.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r20_c9",
    "name": "Chiến Bào Hộ Vệ Lam Ngọc Nạm Bạc",
    "src": "/assets/fantasy/thumbs/outfit_r20_c9.png",
    "type": "outfits",
    "group": "phapsu",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r20_c9.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r20_c10",
    "name": "Áo Da Bọc Ống Thép Nâu Đất",
    "src": "/assets/fantasy/thumbs/outfit_r20_c10.png",
    "type": "outfits",
    "group": "phapsu",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r20_c10.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r20_c11",
    "name": "Áo Da Cung Thủ Kèm Dây Đạn",
    "src": "/assets/fantasy/thumbs/outfit_r20_c11.png",
    "type": "outfits",
    "group": "phapsu",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r20_c11.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r20_c12",
    "name": "Áo Thợ Săn Xanh Lục Dã Ngoại",
    "src": "/assets/fantasy/thumbs/outfit_r20_c12.png",
    "type": "outfits",
    "group": "phapsu",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r20_c12.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r20_c13",
    "name": "Áo Du Mục Xanh Rêu Đeo Nhành Cây",
    "src": "/assets/fantasy/thumbs/outfit_r20_c13.png",
    "type": "outfits",
    "group": "phapsu",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r20_c13.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r20_c14",
    "name": "Áo Khoác Da Thợ Săn Xanh Rêu",
    "src": "/assets/fantasy/thumbs/outfit_r20_c14.png",
    "type": "outfits",
    "group": "phapsu",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r20_c14.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r20_c15",
    "name": "Y Phục Xanh Rêu Nẹp Vàng Quý Tộc",
    "src": "/assets/fantasy/thumbs/outfit_r20_c15.png",
    "type": "outfits",
    "group": "phapsu",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r20_c15.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r21_c0",
    "name": "Áo Choàng Nhung Nâu Nẹp Vàng",
    "src": "/assets/fantasy/thumbs/outfit_r21_c0.png",
    "type": "outfits",
    "group": "quytoc",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r21_c0.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r21_c1",
    "name": "Áo Len Tím Khói Thắt Dây Lưng",
    "src": "/assets/fantasy/thumbs/outfit_r21_c1.png",
    "type": "outfits",
    "group": "quytoc",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r21_c1.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r21_c2",
    "name": "Áo Khoác Da Nâu Hạt Dẻ Khỏe Khoắn",
    "src": "/assets/fantasy/thumbs/outfit_r21_c2.png",
    "type": "outfits",
    "group": "quytoc",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r21_c2.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r21_c3",
    "name": "Chiến Bào Nhung Đỏ Đai Lưng Đen",
    "src": "/assets/fantasy/thumbs/outfit_r21_c3.png",
    "type": "outfits",
    "group": "quytoc",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r21_c3.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r21_c4",
    "name": "Hoàng Bào Đỏ Thẫm Nẹp Vàng Đế Vương",
    "src": "/assets/fantasy/thumbs/outfit_r21_c4.png",
    "type": "outfits",
    "group": "quytoc",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r21_c4.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r21_c5",
    "name": "Áo Choàng Da Nâu Khắc Họa Tiết",
    "src": "/assets/fantasy/thumbs/outfit_r21_c5.png",
    "type": "outfits",
    "group": "quytoc",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r21_c5.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r21_c6",
    "name": "Áo Gile Vàng Hoàng Kim Quý Tộc",
    "src": "/assets/fantasy/thumbs/outfit_r21_c6.png",
    "type": "outfits",
    "group": "quytoc",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r21_c6.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r21_c7",
    "name": "Áo Choàng Kỵ Sĩ Đỏ Thẫm Thắt Nơ",
    "src": "/assets/fantasy/thumbs/outfit_r21_c7.png",
    "type": "outfits",
    "group": "quytoc",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r21_c7.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r21_c8",
    "name": "Chiến Y Nâu Sẫm Dải Lụa Vàng",
    "src": "/assets/fantasy/thumbs/outfit_r21_c8.png",
    "type": "outfits",
    "group": "quytoc",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r21_c8.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r21_c9",
    "name": "Áo Kẻ Sọc Vàng Nâu Nổi Bật",
    "src": "/assets/fantasy/thumbs/outfit_r21_c9.png",
    "type": "outfits",
    "group": "quytoc",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r21_c9.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r21_c10",
    "name": "Y Phục Vàng Nghệ Thêu Hoa Văn Cổ",
    "src": "/assets/fantasy/thumbs/outfit_r21_c10.png",
    "type": "outfits",
    "group": "quytoc",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r21_c10.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r21_c11",
    "name": "Áo Gile Dạ Hội Tím Than Cổ Thêu",
    "src": "/assets/fantasy/thumbs/outfit_r21_c11.png",
    "type": "outfits",
    "group": "quytoc",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r21_c11.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r21_c12",
    "name": "Áo Khoác Dạ Tím Than Dây Lưng Lụa",
    "src": "/assets/fantasy/thumbs/outfit_r21_c12.png",
    "type": "outfits",
    "group": "quytoc",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r21_c12.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r21_c13",
    "name": "Áo Choàng Nhung Tím Thẫm Cúc Vàng",
    "src": "/assets/fantasy/thumbs/outfit_r21_c13.png",
    "type": "outfits",
    "group": "quytoc",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r21_c13.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r21_c14",
    "name": "Áo Thổ Cẩm Tím Kẻ Caro Hoàng Tộc",
    "src": "/assets/fantasy/thumbs/outfit_r21_c14.png",
    "type": "outfits",
    "group": "quytoc",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r21_c14.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r21_c15",
    "name": "Chiến Bào Hắc Ám Nẹp Bạc Đầu Lâu",
    "src": "/assets/fantasy/thumbs/outfit_r21_c15.png",
    "type": "outfits",
    "group": "quytoc",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r21_c15.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r22_c0",
    "name": "Thân Trần Cơ Bắp - Da Sáng",
    "src": "/assets/fantasy/thumbs/outfit_r22_c0.png",
    "type": "outfits",
    "group": "cobap",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r22_c0.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r22_c1",
    "name": "Thân Trần Cơ Bắp - Da Hồng",
    "src": "/assets/fantasy/thumbs/outfit_r22_c1.png",
    "type": "outfits",
    "group": "cobap",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r22_c1.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r22_c2",
    "name": "Thân Trần Cơ Bắp - Da Nâu Đồng",
    "src": "/assets/fantasy/thumbs/outfit_r22_c2.png",
    "type": "outfits",
    "group": "cobap",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r22_c2.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r22_c3",
    "name": "Thân Trần Cơ Bắp - Da Ngăm",
    "src": "/assets/fantasy/thumbs/outfit_r22_c3.png",
    "type": "outfits",
    "group": "cobap",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r22_c3.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r22_c4",
    "name": "Thân Trần Ma Tộc - Da Lam Thẫm",
    "src": "/assets/fantasy/thumbs/outfit_r22_c4.png",
    "type": "outfits",
    "group": "cobap",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r22_c4.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r22_c5",
    "name": "Thân Trần Thú Tộc - Da Nâu",
    "src": "/assets/fantasy/thumbs/outfit_r22_c5.png",
    "type": "outfits",
    "group": "cobap",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r22_c5.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r22_c6",
    "name": "Thân Trần Orc - Da Xanh Lục",
    "src": "/assets/fantasy/thumbs/outfit_r22_c6.png",
    "type": "outfits",
    "group": "cobap",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r22_c6.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r22_c7",
    "name": "Thân Trần Yêu Tiên - Da Trắng",
    "src": "/assets/fantasy/thumbs/outfit_r22_c7.png",
    "type": "outfits",
    "group": "cobap",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r22_c7.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r22_c8",
    "name": "Thân Trần Hắc Tiên - Da Tím Khói",
    "src": "/assets/fantasy/thumbs/outfit_r22_c8.png",
    "type": "outfits",
    "group": "cobap",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r22_c8.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r22_c9",
    "name": "Thân Trần Mộc Tộc - Da Xám",
    "src": "/assets/fantasy/thumbs/outfit_r22_c9.png",
    "type": "outfits",
    "group": "cobap",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r22_c9.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r22_c10",
    "name": "Áo Len Thép Tối Giản",
    "src": "/assets/fantasy/thumbs/outfit_r22_c10.png",
    "type": "outfits",
    "group": "cobap",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r22_c10.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r22_c11",
    "name": "Áo Thun Sọc Xanh Rêu Thể Thao",
    "src": "/assets/fantasy/thumbs/outfit_r22_c11.png",
    "type": "outfits",
    "group": "cobap",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r22_c11.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r22_c12",
    "name": "Áo Len Ô Liu Đơn Sắc",
    "src": "/assets/fantasy/thumbs/outfit_r22_c12.png",
    "type": "outfits",
    "group": "cobap",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r22_c12.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r22_c13",
    "name": "Áo Thun Đỏ Đô Thể Thao",
    "src": "/assets/fantasy/thumbs/outfit_r22_c13.png",
    "type": "outfits",
    "group": "cobap",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r22_c13.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r22_c14",
    "name": "Chiến Y Đỏ Thẫm Trơn",
    "src": "/assets/fantasy/thumbs/outfit_r22_c14.png",
    "type": "outfits",
    "group": "cobap",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r22_c14.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r22_c15",
    "name": "Chiến Y Huyết Sắc Hoa Văn",
    "src": "/assets/fantasy/thumbs/outfit_r22_c15.png",
    "type": "outfits",
    "group": "cobap",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r22_c15.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r23_c0",
    "name": "Áo Dệt Lông Da Báo Thổ Dân",
    "src": "/assets/fantasy/thumbs/outfit_r23_c0.png",
    "type": "outfits",
    "group": "cobap",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r23_c0.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r23_c1",
    "name": "Áo Lụa Trắng Băng Giá",
    "src": "/assets/fantasy/thumbs/outfit_r23_c1.png",
    "type": "outfits",
    "group": "cobap",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r23_c1.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r23_c2",
    "name": "Áo Gile Da Bò Thường Dân",
    "src": "/assets/fantasy/thumbs/outfit_r23_c2.png",
    "type": "outfits",
    "group": "cobap",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r23_c2.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r23_c3",
    "name": "Áo Khoác Nỉ Thám Hiểm Xám",
    "src": "/assets/fantasy/thumbs/outfit_r23_c3.png",
    "type": "outfits",
    "group": "cobap",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r23_c3.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r23_c4",
    "name": "Áo Khoác Da Xanh Kẻ Sọc",
    "src": "/assets/fantasy/thumbs/outfit_r23_c4.png",
    "type": "outfits",
    "group": "cobap",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r23_c4.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r23_c5",
    "name": "Áo Vảy Cá Rồng Xanh Dương",
    "src": "/assets/fantasy/thumbs/outfit_r23_c5.png",
    "type": "outfits",
    "group": "cobap",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r23_c5.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r23_c6",
    "name": "Thân Thể Xăm Họa Tiết Đá Cổ",
    "src": "/assets/fantasy/thumbs/outfit_r23_c6.png",
    "type": "outfits",
    "group": "cobap",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r23_c6.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r23_c7",
    "name": "Cơ Bắp 6 Múi Vạm Vỡ - Da Sáng",
    "src": "/assets/fantasy/thumbs/outfit_r23_c7.png",
    "type": "outfits",
    "group": "cobap",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r23_c7.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r23_c8",
    "name": "Cơ Bắp 6 Múi Vạm Vỡ - Da Hồng",
    "src": "/assets/fantasy/thumbs/outfit_r23_c8.png",
    "type": "outfits",
    "group": "cobap",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r23_c8.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r23_c9",
    "name": "Cơ Bắp 6 Múi Vạm Vỡ - Da Nâu Đồng",
    "src": "/assets/fantasy/thumbs/outfit_r23_c9.png",
    "type": "outfits",
    "group": "cobap",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r23_c9.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r23_c10",
    "name": "Cơ Bắp 6 Múi Vạm Vỡ - Da Ngăm",
    "src": "/assets/fantasy/thumbs/outfit_r23_c10.png",
    "type": "outfits",
    "group": "cobap",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r23_c10.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r23_c11",
    "name": "Cơ Bắp 6 Múi - Ác Ma Lam Thẫm",
    "src": "/assets/fantasy/thumbs/outfit_r23_c11.png",
    "type": "outfits",
    "group": "cobap",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r23_c11.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r23_c12",
    "name": "Cơ Bắp 6 Múi - Hoang Thú Nâu",
    "src": "/assets/fantasy/thumbs/outfit_r23_c12.png",
    "type": "outfits",
    "group": "cobap",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r23_c12.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r23_c13",
    "name": "Cơ Bắp 6 Múi - Đại Ma Orc Xanh",
    "src": "/assets/fantasy/thumbs/outfit_r23_c13.png",
    "type": "outfits",
    "group": "cobap",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r23_c13.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r23_c14",
    "name": "Cơ Bắp 6 Múi - Bạch Tạng Vampire",
    "src": "/assets/fantasy/thumbs/outfit_r23_c14.png",
    "type": "outfits",
    "group": "cobap",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r23_c14.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  },
  {
    "id": "outfit_r23_c15",
    "name": "Cơ Bắp 6 Múi - Dạ Ma Tím Khói",
    "src": "/assets/fantasy/thumbs/outfit_r23_c15.png",
    "type": "outfits",
    "group": "cobap",
    "layers": [
      {
        "src": "/assets/fantasy/outfits/outfit_r23_c15.png",
        "z_index": 30,
        "category": "outfits"
      }
    ]
  }
],
  bottoms: [
  {
    "id": "bottom_r26_c0",
    "name": "Chân Trần - Da Sáng",
    "src": "/assets/fantasy/thumbs/bottom_r26_c0.png",
    "type": "bottoms",
    "layers": [
      {
        "src": "/assets/fantasy/bottoms/bottom_r26_c0.png",
        "z_index": 20,
        "category": "bottoms"
      }
    ]
  },
  {
    "id": "bottom_r26_c1",
    "name": "Chân Trần - Da Hồng",
    "src": "/assets/fantasy/thumbs/bottom_r26_c1.png",
    "type": "bottoms",
    "layers": [
      {
        "src": "/assets/fantasy/bottoms/bottom_r26_c1.png",
        "z_index": 20,
        "category": "bottoms"
      }
    ]
  },
  {
    "id": "bottom_r26_c2",
    "name": "Chân Trần - Da Nâu Đồng",
    "src": "/assets/fantasy/thumbs/bottom_r26_c2.png",
    "type": "bottoms",
    "layers": [
      {
        "src": "/assets/fantasy/bottoms/bottom_r26_c2.png",
        "z_index": 20,
        "category": "bottoms"
      }
    ]
  },
  {
    "id": "bottom_r26_c3",
    "name": "Chân Trần - Da Ngăm",
    "src": "/assets/fantasy/thumbs/bottom_r26_c3.png",
    "type": "bottoms",
    "layers": [
      {
        "src": "/assets/fantasy/bottoms/bottom_r26_c3.png",
        "z_index": 20,
        "category": "bottoms"
      }
    ]
  },
  {
    "id": "bottom_r26_c4",
    "name": "Chân Trần - Nắng Gió",
    "src": "/assets/fantasy/thumbs/bottom_r26_c4.png",
    "type": "bottoms",
    "layers": [
      {
        "src": "/assets/fantasy/bottoms/bottom_r26_c4.png",
        "z_index": 20,
        "category": "bottoms"
      }
    ]
  },
  {
    "id": "bottom_r26_c5",
    "name": "Chân Trần - Orc Xanh",
    "src": "/assets/fantasy/thumbs/bottom_r26_c5.png",
    "type": "bottoms",
    "layers": [
      {
        "src": "/assets/fantasy/bottoms/bottom_r26_c5.png",
        "z_index": 20,
        "category": "bottoms"
      }
    ]
  },
  {
    "id": "bottom_r26_c6",
    "name": "Chân Trần - Hắc Tiên Tím",
    "src": "/assets/fantasy/thumbs/bottom_r26_c6.png",
    "type": "bottoms",
    "layers": [
      {
        "src": "/assets/fantasy/bottoms/bottom_r26_c6.png",
        "z_index": 20,
        "category": "bottoms"
      }
    ]
  },
  {
    "id": "bottom_r26_c7",
    "name": "Chân Trần - Thú Tộc",
    "src": "/assets/fantasy/thumbs/bottom_r26_c7.png",
    "type": "bottoms",
    "layers": [
      {
        "src": "/assets/fantasy/bottoms/bottom_r26_c7.png",
        "z_index": 20,
        "category": "bottoms"
      }
    ]
  },
  {
    "id": "bottom_r26_c8",
    "name": "Chân Trần - Thượng Tiên",
    "src": "/assets/fantasy/thumbs/bottom_r26_c8.png",
    "type": "bottoms",
    "layers": [
      {
        "src": "/assets/fantasy/bottoms/bottom_r26_c8.png",
        "z_index": 20,
        "category": "bottoms"
      }
    ]
  },
  {
    "id": "bottom_r26_c9",
    "name": "Chân Trần - Vampire Trắng",
    "src": "/assets/fantasy/thumbs/bottom_r26_c9.png",
    "type": "bottoms",
    "layers": [
      {
        "src": "/assets/fantasy/bottoms/bottom_r26_c9.png",
        "z_index": 20,
        "category": "bottoms"
      }
    ]
  },
  {
    "id": "bottom_r26_c10",
    "name": "Chân Trần - Zombie Xám",
    "src": "/assets/fantasy/thumbs/bottom_r26_c10.png",
    "type": "bottoms",
    "layers": [
      {
        "src": "/assets/fantasy/bottoms/bottom_r26_c10.png",
        "z_index": 20,
        "category": "bottoms"
      }
    ]
  },
  {
    "id": "bottom_r26_c11",
    "name": "Khung Xương Trần Mắt Đỏ",
    "src": "/assets/fantasy/thumbs/bottom_r26_c11.png",
    "type": "bottoms",
    "layers": [
      {
        "src": "/assets/fantasy/bottoms/bottom_r26_c11.png",
        "z_index": 20,
        "category": "bottoms"
      }
    ]
  },
  {
    "id": "bottom_r26_c12",
    "name": "Hoàng Kim Xương Trần",
    "src": "/assets/fantasy/thumbs/bottom_r26_c12.png",
    "type": "bottoms",
    "layers": [
      {
        "src": "/assets/fantasy/bottoms/bottom_r26_c12.png",
        "z_index": 20,
        "category": "bottoms"
      }
    ]
  },
  {
    "id": "bottom_r26_c13",
    "name": "Chân Đá Cổ Thạch",
    "src": "/assets/fantasy/thumbs/bottom_r26_c13.png",
    "type": "bottoms",
    "layers": [
      {
        "src": "/assets/fantasy/bottoms/bottom_r26_c13.png",
        "z_index": 20,
        "category": "bottoms"
      }
    ]
  },
  {
    "id": "bottom_r26_c14",
    "name": "Chân Trần Thằn Lằn",
    "src": "/assets/fantasy/thumbs/bottom_r26_c14.png",
    "type": "bottoms",
    "layers": [
      {
        "src": "/assets/fantasy/bottoms/bottom_r26_c14.png",
        "z_index": 20,
        "category": "bottoms"
      }
    ]
  },
  {
    "id": "bottom_r26_c15",
    "name": "Chân Dị Tộc Ngoại Giới",
    "src": "/assets/fantasy/thumbs/bottom_r26_c15.png",
    "type": "bottoms",
    "layers": [
      {
        "src": "/assets/fantasy/bottoms/bottom_r26_c15.png",
        "z_index": 20,
        "category": "bottoms"
      }
    ]
  },
  {
    "id": "bottom_r30_c0",
    "name": "Ủng Hiệp Sĩ Xanh Thẫm Viền Vàng",
    "src": "/assets/fantasy/thumbs/bottom_r30_c0.png",
    "type": "bottoms",
    "layers": [
      {
        "src": "/assets/fantasy/bottoms/bottom_r30_c0.png",
        "z_index": 20,
        "category": "bottoms"
      }
    ]
  },
  {
    "id": "bottom_r30_c1",
    "name": "Ủng Chiến Binh Xanh Phối Đỏ",
    "src": "/assets/fantasy/thumbs/bottom_r30_c1.png",
    "type": "bottoms",
    "layers": [
      {
        "src": "/assets/fantasy/bottoms/bottom_r30_c1.png",
        "z_index": 20,
        "category": "bottoms"
      }
    ]
  },
  {
    "id": "bottom_r30_c2",
    "name": "Ủng Hiệp Sĩ Hắc Ám Viền Đỏ",
    "src": "/assets/fantasy/thumbs/bottom_r30_c2.png",
    "type": "bottoms",
    "layers": [
      {
        "src": "/assets/fantasy/bottoms/bottom_r30_c2.png",
        "z_index": 20,
        "category": "bottoms"
      }
    ]
  },
  {
    "id": "bottom_r30_c3",
    "name": "Ủng Vàng Đen Hiệp Sĩ Hoàng Gia",
    "src": "/assets/fantasy/thumbs/bottom_r30_c3.png",
    "type": "bottoms",
    "layers": [
      {
        "src": "/assets/fantasy/bottoms/bottom_r30_c3.png",
        "z_index": 20,
        "category": "bottoms"
      }
    ]
  },
  {
    "id": "bottom_r30_c4",
    "name": "Quần Da Thợ Săn Rừng Xanh Thẫm",
    "src": "/assets/fantasy/thumbs/bottom_r30_c4.png",
    "type": "bottoms",
    "layers": [
      {
        "src": "/assets/fantasy/bottoms/bottom_r30_c4.png",
        "z_index": 20,
        "category": "bottoms"
      }
    ]
  },
  {
    "id": "bottom_r30_c5",
    "name": "Quần Vải Lụa Đen Sát Thủ",
    "src": "/assets/fantasy/thumbs/bottom_r30_c5.png",
    "type": "bottoms",
    "layers": [
      {
        "src": "/assets/fantasy/bottoms/bottom_r30_c5.png",
        "z_index": 20,
        "category": "bottoms"
      }
    ]
  },
  {
    "id": "bottom_r30_c6",
    "name": "Quần Lụa Đen Đế Thép Nổi Bật",
    "src": "/assets/fantasy/thumbs/bottom_r30_c6.png",
    "type": "bottoms",
    "layers": [
      {
        "src": "/assets/fantasy/bottoms/bottom_r30_c6.png",
        "z_index": 20,
        "category": "bottoms"
      }
    ]
  },
  {
    "id": "bottom_r30_c7",
    "name": "Quần Nâu Thợ Rèn Viền Vàng",
    "src": "/assets/fantasy/thumbs/bottom_r30_c7.png",
    "type": "bottoms",
    "layers": [
      {
        "src": "/assets/fantasy/bottoms/bottom_r30_c7.png",
        "z_index": 20,
        "category": "bottoms"
      }
    ]
  },
  {
    "id": "bottom_r30_c8",
    "name": "Quần Lụa Tím Sát Thủ Độc Dược",
    "src": "/assets/fantasy/thumbs/bottom_r30_c8.png",
    "type": "bottoms",
    "layers": [
      {
        "src": "/assets/fantasy/bottoms/bottom_r30_c8.png",
        "z_index": 20,
        "category": "bottoms"
      }
    ]
  },
  {
    "id": "bottom_r30_c9",
    "name": "Quần Xám Khói Viền Đỏ Mận",
    "src": "/assets/fantasy/thumbs/bottom_r30_c9.png",
    "type": "bottoms",
    "layers": [
      {
        "src": "/assets/fantasy/bottoms/bottom_r30_c9.png",
        "z_index": 20,
        "category": "bottoms"
      }
    ]
  },
  {
    "id": "bottom_r30_c10",
    "name": "Quần Xanh Rêu Viền Da Bò",
    "src": "/assets/fantasy/thumbs/bottom_r30_c10.png",
    "type": "bottoms",
    "layers": [
      {
        "src": "/assets/fantasy/bottoms/bottom_r30_c10.png",
        "z_index": 20,
        "category": "bottoms"
      }
    ]
  },
  {
    "id": "bottom_r30_c11",
    "name": "Quần Đỏ Đô Thợ Săn Hoang Dã",
    "src": "/assets/fantasy/thumbs/bottom_r30_c11.png",
    "type": "bottoms",
    "layers": [
      {
        "src": "/assets/fantasy/bottoms/bottom_r30_c11.png",
        "z_index": 20,
        "category": "bottoms"
      }
    ]
  },
  {
    "id": "bottom_r30_c12",
    "name": "Quần Đỏ Rượu Vang Tối Giản",
    "src": "/assets/fantasy/thumbs/bottom_r30_c12.png",
    "type": "bottoms",
    "layers": [
      {
        "src": "/assets/fantasy/bottoms/bottom_r30_c12.png",
        "z_index": 20,
        "category": "bottoms"
      }
    ]
  },
  {
    "id": "bottom_r30_c13",
    "name": "Quần Nhung Tím Than Chiến Binh",
    "src": "/assets/fantasy/thumbs/bottom_r30_c13.png",
    "type": "bottoms",
    "layers": [
      {
        "src": "/assets/fantasy/bottoms/bottom_r30_c13.png",
        "z_index": 20,
        "category": "bottoms"
      }
    ]
  },
  {
    "id": "bottom_r30_c14",
    "name": "Quần Vải Xanh Thẫm Tối Giản",
    "src": "/assets/fantasy/thumbs/bottom_r30_c14.png",
    "type": "bottoms",
    "layers": [
      {
        "src": "/assets/fantasy/bottoms/bottom_r30_c14.png",
        "z_index": 20,
        "category": "bottoms"
      }
    ]
  },
  {
    "id": "bottom_r30_c15",
    "name": "Quần Hiệp Sĩ Hắc Báo",
    "src": "/assets/fantasy/thumbs/bottom_r30_c15.png",
    "type": "bottoms",
    "layers": [
      {
        "src": "/assets/fantasy/bottoms/bottom_r30_c15.png",
        "z_index": 20,
        "category": "bottoms"
      }
    ]
  },
  {
    "id": "bottom_r31_c0",
    "name": "Ủng Da Bò Cổ Điển",
    "src": "/assets/fantasy/thumbs/bottom_r31_c0.png",
    "type": "bottoms",
    "layers": [
      {
        "src": "/assets/fantasy/bottoms/bottom_r31_c0.png",
        "z_index": 20,
        "category": "bottoms"
      }
    ]
  },
  {
    "id": "bottom_r31_c1",
    "name": "Ủng Da Xám Du Mục",
    "src": "/assets/fantasy/thumbs/bottom_r31_c1.png",
    "type": "bottoms",
    "layers": [
      {
        "src": "/assets/fantasy/bottoms/bottom_r31_c1.png",
        "z_index": 20,
        "category": "bottoms"
      }
    ]
  },
  {
    "id": "bottom_r31_c2",
    "name": "Ủng Da Đen Hiệp Sĩ Bọc Thép",
    "src": "/assets/fantasy/thumbs/bottom_r31_c2.png",
    "type": "bottoms",
    "layers": [
      {
        "src": "/assets/fantasy/bottoms/bottom_r31_c2.png",
        "z_index": 20,
        "category": "bottoms"
      }
    ]
  },
  {
    "id": "bottom_r31_c3",
    "name": "Ủng Da Tím Quý Tộc",
    "src": "/assets/fantasy/thumbs/bottom_r31_c3.png",
    "type": "bottoms",
    "layers": [
      {
        "src": "/assets/fantasy/bottoms/bottom_r31_c3.png",
        "z_index": 20,
        "category": "bottoms"
      }
    ]
  },
  {
    "id": "bottom_r31_c4",
    "name": "Quần Xanh Lục Đậm Chân Trần",
    "src": "/assets/fantasy/thumbs/bottom_r31_c4.png",
    "type": "bottoms",
    "layers": [
      {
        "src": "/assets/fantasy/bottoms/bottom_r31_c4.png",
        "z_index": 20,
        "category": "bottoms"
      }
    ]
  },
  {
    "id": "bottom_r31_c5",
    "name": "Quần Vàng Hoàng Gia Chân Trần",
    "src": "/assets/fantasy/thumbs/bottom_r31_c5.png",
    "type": "bottoms",
    "layers": [
      {
        "src": "/assets/fantasy/bottoms/bottom_r31_c5.png",
        "z_index": 20,
        "category": "bottoms"
      }
    ]
  },
  {
    "id": "bottom_r31_c6",
    "name": "Quần Đen Sát Thủ Chân Trần",
    "src": "/assets/fantasy/thumbs/bottom_r31_c6.png",
    "type": "bottoms",
    "layers": [
      {
        "src": "/assets/fantasy/bottoms/bottom_r31_c6.png",
        "z_index": 20,
        "category": "bottoms"
      }
    ]
  },
  {
    "id": "bottom_r31_c7",
    "name": "Chân Trần Dã Ngoại Tự Nhiên",
    "src": "/assets/fantasy/thumbs/bottom_r31_c7.png",
    "type": "bottoms",
    "layers": [
      {
        "src": "/assets/fantasy/bottoms/bottom_r31_c7.png",
        "z_index": 20,
        "category": "bottoms"
      }
    ]
  },
  {
    "id": "bottom_r31_c8",
    "name": "Ủng Da Dài Đen Tuyền",
    "src": "/assets/fantasy/thumbs/bottom_r31_c8.png",
    "type": "bottoms",
    "layers": [
      {
        "src": "/assets/fantasy/bottoms/bottom_r31_c8.png",
        "z_index": 20,
        "category": "bottoms"
      }
    ]
  },
  {
    "id": "bottom_r31_c9",
    "name": "Ủng Chiến Binh Viền Trắng Nổi Bật",
    "src": "/assets/fantasy/thumbs/bottom_r31_c9.png",
    "type": "bottoms",
    "layers": [
      {
        "src": "/assets/fantasy/bottoms/bottom_r31_c9.png",
        "z_index": 20,
        "category": "bottoms"
      }
    ]
  },
  {
    "id": "bottom_r31_c10",
    "name": "Ủng Đen Đế Trắng Thể Thao",
    "src": "/assets/fantasy/thumbs/bottom_r31_c10.png",
    "type": "bottoms",
    "layers": [
      {
        "src": "/assets/fantasy/bottoms/bottom_r31_c10.png",
        "z_index": 20,
        "category": "bottoms"
      }
    ]
  },
  {
    "id": "bottom_r31_c11",
    "name": "Ủng Da Nâu Đậm Du Mục",
    "src": "/assets/fantasy/thumbs/bottom_r31_c11.png",
    "type": "bottoms",
    "layers": [
      {
        "src": "/assets/fantasy/bottoms/bottom_r31_c11.png",
        "z_index": 20,
        "category": "bottoms"
      }
    ]
  },
  {
    "id": "bottom_r31_c12",
    "name": "Ủng Da Đen Nẹp Đồng",
    "src": "/assets/fantasy/thumbs/bottom_r31_c12.png",
    "type": "bottoms",
    "layers": [
      {
        "src": "/assets/fantasy/bottoms/bottom_r31_c12.png",
        "z_index": 20,
        "category": "bottoms"
      }
    ]
  },
  {
    "id": "bottom_r31_c13",
    "name": "Quần Nhung Tím Phong Cách",
    "src": "/assets/fantasy/thumbs/bottom_r31_c13.png",
    "type": "bottoms",
    "layers": [
      {
        "src": "/assets/fantasy/bottoms/bottom_r31_c13.png",
        "z_index": 20,
        "category": "bottoms"
      }
    ]
  }
],
  headgear: [
  {
    "id": "headgear_none",
    "name": "Không đội mũ / phụ kiện đầu (Trống)",
    "type": "headgear",
    "layers": []
  },
  {
    "id": "hg_r14_c0",
    "name": "Tai Thỏ Trắng Dài Hồng",
    "src": "/assets/fantasy/thumbs/hg_r14_c0.png",
    "type": "headgear",
    "layers": [
      {
        "src": "/assets/fantasy/headgear/hg_r14_c0.png",
        "z_index": 70,
        "category": "headgear"
      }
    ]
  },
  {
    "id": "hg_r14_c1",
    "name": "Cặp Sừng Linh Dương Xám",
    "src": "/assets/fantasy/thumbs/hg_r14_c1.png",
    "type": "headgear",
    "layers": [
      {
        "src": "/assets/fantasy/headgear/hg_r14_c1.png",
        "z_index": 70,
        "category": "headgear"
      }
    ]
  },
  {
    "id": "hg_r14_c2",
    "name": "Tai Chó Cụp Nâu Xám",
    "src": "/assets/fantasy/thumbs/hg_r14_c2.png",
    "type": "headgear",
    "layers": [
      {
        "src": "/assets/fantasy/headgear/hg_r14_c2.png",
        "z_index": 70,
        "category": "headgear"
      }
    ]
  },
  {
    "id": "hg_r14_c3",
    "name": "Tai Chó Vểnh Đen",
    "src": "/assets/fantasy/thumbs/hg_r14_c3.png",
    "type": "headgear",
    "layers": [
      {
        "src": "/assets/fantasy/headgear/hg_r14_c3.png",
        "z_index": 70,
        "category": "headgear"
      }
    ]
  },
  {
    "id": "hg_r14_c4",
    "name": "Băng Bịt Mắt Sát Thủ (Eye Patch)",
    "src": "/assets/fantasy/thumbs/hg_r14_c4.png",
    "type": "headgear",
    "layers": [
      {
        "src": "/assets/fantasy/headgear/hg_r14_c4.png",
        "z_index": 70,
        "category": "headgear"
      }
    ]
  },
  {
    "id": "hg_r14_c5",
    "name": "Kính Râm Quý Tộc / Điệp Viên (Glasses)",
    "src": "/assets/fantasy/thumbs/hg_r14_c5.png",
    "type": "headgear",
    "layers": [
      {
        "src": "/assets/fantasy/headgear/hg_r14_c5.png",
        "z_index": 70,
        "category": "headgear"
      }
    ]
  },
  {
    "id": "hg_r14_c6",
    "name": "Băng Đô Ninja Đỏ (Headband)",
    "src": "/assets/fantasy/thumbs/hg_r14_c6.png",
    "type": "headgear",
    "layers": [
      {
        "src": "/assets/fantasy/headgear/hg_r14_c6.png",
        "z_index": 70,
        "category": "headgear"
      }
    ]
  },
  {
    "id": "hg_r14_c7",
    "name": "Tai Cáo Lửa Nâu Vàng (Kitsune Ears)",
    "src": "/assets/fantasy/thumbs/hg_r14_c7.png",
    "type": "headgear",
    "layers": [
      {
        "src": "/assets/fantasy/headgear/hg_r14_c7.png",
        "z_index": 70,
        "category": "headgear"
      }
    ]
  },
  {
    "id": "hg_r14_c8",
    "name": "Tai Cáo Hoàng Kim Thần Thoại",
    "src": "/assets/fantasy/thumbs/hg_r14_c8.png",
    "type": "headgear",
    "layers": [
      {
        "src": "/assets/fantasy/headgear/hg_r14_c8.png",
        "z_index": 70,
        "category": "headgear"
      }
    ]
  },
  {
    "id": "hg_r14_c9",
    "name": "Tai Sói Xám Hoang Dã",
    "src": "/assets/fantasy/thumbs/hg_r14_c9.png",
    "type": "headgear",
    "layers": [
      {
        "src": "/assets/fantasy/headgear/hg_r14_c9.png",
        "z_index": 70,
        "category": "headgear"
      }
    ]
  },
  {
    "id": "hg_r14_c14",
    "name": "Kính Mắt Cyber / Ma Pháp Viền Tím",
    "src": "/assets/fantasy/thumbs/hg_r14_c14.png",
    "type": "headgear",
    "layers": [
      {
        "src": "/assets/fantasy/headgear/hg_r14_c14.png",
        "z_index": 70,
        "category": "headgear"
      }
    ]
  },
  {
    "id": "hg_r14_c15",
    "name": "Vết Sẹo Phong Trần / Lông Mày Độc",
    "src": "/assets/fantasy/thumbs/hg_r14_c15.png",
    "type": "headgear",
    "layers": [
      {
        "src": "/assets/fantasy/headgear/hg_r14_c15.png",
        "z_index": 70,
        "category": "headgear"
      }
    ]
  },
  {
    "id": "hg_r15_c15",
    "name": "Cặp Sừng Ác Ma Uốn Cong (Demon Horns)",
    "src": "/assets/fantasy/thumbs/hg_r15_c15.png",
    "type": "headgear",
    "layers": [
      {
        "src": "/assets/fantasy/headgear/hg_r15_c15.png",
        "z_index": 70,
        "category": "headgear"
      }
    ]
  }
],
  accessories: [
  {
    "id": "acc_none",
    "name": "Không phụ kiện lưng/đuôi (Trống)",
    "type": "accessories",
    "layers": []
  },
  {
    "id": "acc_r14_c10",
    "name": "Đuôi Sói Xám Hoang Dã",
    "src": "/assets/fantasy/thumbs/acc_r14_c10.png",
    "type": "accessories",
    "layers": [
      {
        "src": "/assets/fantasy/accessories/acc_r14_c10.png",
        "z_index": 10,
        "category": "accessories"
      }
    ]
  },
  {
    "id": "acc_r14_c11",
    "name": "Đuôi Cáo Lửa Kitsune Nâu Đỏ",
    "src": "/assets/fantasy/thumbs/acc_r14_c11.png",
    "type": "accessories",
    "layers": [
      {
        "src": "/assets/fantasy/accessories/acc_r14_c11.png",
        "z_index": 10,
        "category": "accessories"
      }
    ]
  },
  {
    "id": "acc_r14_c12",
    "name": "Đuôi Chồn Đen Uốn Lượn",
    "src": "/assets/fantasy/thumbs/acc_r14_c12.png",
    "type": "accessories",
    "layers": [
      {
        "src": "/assets/fantasy/accessories/acc_r14_c12.png",
        "z_index": 10,
        "category": "accessories"
      }
    ]
  },
  {
    "id": "acc_r14_c13",
    "name": "Đuôi Ác Ma Mũi Tên Nhọn (Devil Tail)",
    "src": "/assets/fantasy/thumbs/acc_r14_c13.png",
    "type": "accessories",
    "layers": [
      {
        "src": "/assets/fantasy/accessories/acc_r14_c13.png",
        "z_index": 10,
        "category": "accessories"
      }
    ]
  },
  {
    "id": "acc_r24_c0",
    "name": "Thắt Lưng Chiến Binh Khóa Đồng Đỏ",
    "src": "/assets/fantasy/thumbs/acc_r24_c0.png",
    "type": "accessories",
    "layers": [
      {
        "src": "/assets/fantasy/accessories/acc_r24_c0.png",
        "z_index": 35,
        "category": "accessories"
      }
    ]
  },
  {
    "id": "acc_r24_c1",
    "name": "Khóa Thắt Lưng Vàng Da Sáng",
    "src": "/assets/fantasy/thumbs/acc_r24_c1.png",
    "type": "accessories",
    "layers": [
      {
        "src": "/assets/fantasy/accessories/acc_r24_c1.png",
        "z_index": 35,
        "category": "accessories"
      }
    ]
  },
  {
    "id": "acc_r24_c2",
    "name": "Thắt Lưng Da Nâu Đen Thợ Săn",
    "src": "/assets/fantasy/thumbs/acc_r24_c2.png",
    "type": "accessories",
    "layers": [
      {
        "src": "/assets/fantasy/accessories/acc_r24_c2.png",
        "z_index": 35,
        "category": "accessories"
      }
    ]
  },
  {
    "id": "acc_r24_c3",
    "name": "Khóa Lưng Lục Bảo Cổ Điển",
    "src": "/assets/fantasy/thumbs/acc_r24_c3.png",
    "type": "accessories",
    "layers": [
      {
        "src": "/assets/fantasy/accessories/acc_r24_c3.png",
        "z_index": 35,
        "category": "accessories"
      }
    ]
  },
  {
    "id": "acc_r24_c4",
    "name": "Đai Lưng Lam Ngọc Pháp Sư",
    "src": "/assets/fantasy/thumbs/acc_r24_c4.png",
    "type": "accessories",
    "layers": [
      {
        "src": "/assets/fantasy/accessories/acc_r24_c4.png",
        "z_index": 35,
        "category": "accessories"
      }
    ]
  },
  {
    "id": "acc_r24_c5",
    "name": "Thắt Lưng Da Bò Quý Phái",
    "src": "/assets/fantasy/thumbs/acc_r24_c5.png",
    "type": "accessories",
    "layers": [
      {
        "src": "/assets/fantasy/accessories/acc_r24_c5.png",
        "z_index": 35,
        "category": "accessories"
      }
    ]
  },
  {
    "id": "acc_r24_c6",
    "name": "Thắt Lưng Thép Titan Chiến Binh",
    "src": "/assets/fantasy/thumbs/acc_r24_c6.png",
    "type": "accessories",
    "layers": [
      {
        "src": "/assets/fantasy/accessories/acc_r24_c6.png",
        "z_index": 35,
        "category": "accessories"
      }
    ]
  },
  {
    "id": "acc_r24_c7",
    "name": "Đai Lụa Trắng Hoàng Tộc",
    "src": "/assets/fantasy/thumbs/acc_r24_c7.png",
    "type": "accessories",
    "layers": [
      {
        "src": "/assets/fantasy/accessories/acc_r24_c7.png",
        "z_index": 35,
        "category": "accessories"
      }
    ]
  },
  {
    "id": "acc_r24_c12",
    "name": "Thắt Lưng Vàng Kim Khảm Đá Đen",
    "src": "/assets/fantasy/thumbs/acc_r24_c12.png",
    "type": "accessories",
    "layers": [
      {
        "src": "/assets/fantasy/accessories/acc_r24_c12.png",
        "z_index": 35,
        "category": "accessories"
      }
    ]
  },
  {
    "id": "acc_r24_c13",
    "name": "Đai Lưng Lam Thạch Huyền Bí",
    "src": "/assets/fantasy/thumbs/acc_r24_c13.png",
    "type": "accessories",
    "layers": [
      {
        "src": "/assets/fantasy/accessories/acc_r24_c13.png",
        "z_index": 35,
        "category": "accessories"
      }
    ]
  }
],
  weapons: [
  {
    "id": "weapon_none",
    "name": "Không trang bị vũ khí (Trống)",
    "type": "weapons",
    "layers": []
  },
  {
    "id": "sword_iron",
    "name": "Thanh Kiếm Hiệp Sĩ Sắt",
    "src": "/assets/props/thumbs/sword_iron.png",
    "type": "weapons",
    "layers": [
      {
        "src": "/assets/fantasy/weapons/sword_iron.png",
        "z_index": 80,
        "category": "weapons"
      }
    ]
  },
  {
    "id": "sword_gold",
    "name": "Hoàng Kim Trảm Long Kiếm",
    "src": "/assets/props/thumbs/sword_gold.png",
    "type": "weapons",
    "layers": [
      {
        "src": "/assets/fantasy/weapons/sword_gold.png",
        "z_index": 80,
        "category": "weapons"
      }
    ]
  },
  {
    "id": "sword_frost",
    "name": "Băng Hàn Trảm Kiếm",
    "src": "/assets/props/thumbs/sword_frost.png",
    "type": "weapons",
    "layers": [
      {
        "src": "/assets/fantasy/weapons/sword_frost.png",
        "z_index": 80,
        "category": "weapons"
      }
    ]
  },
  {
    "id": "sword_void",
    "name": "Hư Không Đoạt Hồn Kiếm",
    "src": "/assets/props/thumbs/sword_void.png",
    "type": "weapons",
    "layers": [
      {
        "src": "/assets/fantasy/weapons/sword_void.png",
        "z_index": 80,
        "category": "weapons"
      }
    ]
  },
  {
    "id": "bow_iron",
    "name": "Cung Gỗ Săn Bắn Thợ Săn",
    "src": "/assets/props/thumbs/bow_iron.png",
    "type": "weapons",
    "layers": [
      {
        "src": "/assets/fantasy/weapons/bow_iron.png",
        "z_index": 80,
        "category": "weapons"
      }
    ]
  },
  {
    "id": "wand_gold",
    "name": "Trượng Phép Hoàng Kim Trí Tuệ",
    "src": "/assets/props/thumbs/wand_gold.png",
    "type": "weapons",
    "layers": [
      {
        "src": "/assets/fantasy/weapons/wand_gold.png",
        "z_index": 80,
        "category": "weapons"
      }
    ]
  },
  {
    "id": "wand_frost",
    "name": "Quyền Trượng Hàn Băng Cổ Đại",
    "src": "/assets/props/thumbs/wand_frost.png",
    "type": "weapons",
    "layers": [
      {
        "src": "/assets/fantasy/weapons/wand_frost.png",
        "z_index": 80,
        "category": "weapons"
      }
    ]
  },
  {
    "id": "gear_wood_shield",
    "name": "Khiên Gỗ Chiến Binh Viền Thép",
    "src": "/assets/props/thumbs/gear_wood_shield.png",
    "type": "weapons",
    "layers": [
      {
        "src": "/assets/fantasy/weapons/gear_wood_shield.png",
        "z_index": 75,
        "category": "weapons"
      }
    ]
  },
  {
    "id": "potion_health",
    "name": "Bình Thuốc Sinh Mệnh Đỏ",
    "src": "/assets/props/thumbs/potion_health.png",
    "type": "weapons",
    "layers": [
      {
        "src": "/assets/fantasy/weapons/potion_health.png",
        "z_index": 80,
        "category": "weapons"
      }
    ]
  },
  {
    "id": "potion_mana",
    "name": "Bình Dược Năng Lượng Lam Ngọc",
    "src": "/assets/props/thumbs/potion_mana.png",
    "type": "weapons",
    "layers": [
      {
        "src": "/assets/fantasy/weapons/potion_mana.png",
        "z_index": 80,
        "category": "weapons"
      }
    ]
  }
],
  shadows: [
  {
    "id": "shadow_none",
    "name": "Không bóng đổ (Trống)",
    "type": "shadows",
    "layers": []
  },
  {
    "id": "shadow_ground_pixel",
    "name": "Bóng Đổ Mặt Đất (Pixel Shadow)",
    "src": "/assets/fantasy/thumbs/shadow_ground_pixel.png",
    "type": "shadows",
    "layers": [
      {
        "src": "/assets/fantasy/shadows/shadow_ground_pixel.png",
        "z_index": 5,
        "category": "shadows"
      }
    ]
  },
  {
    "id": "aura_arcane_blue",
    "name": "Hào Quang Lam Ngọc Ma Pháp",
    "src": "/assets/props/auras/aura_arcane_blue.png",
    "type": "shadows",
    "layers": [
      {
        "src": "/assets/fantasy/shadows/shadow_ground_pixel.png",
        "z_index": 5,
        "category": "shadows"
      },
      {
        "src": "/assets/props/auras/aura_arcane_blue.png",
        "z_index": 2,
        "category": "shadows"
      }
    ]
  },
  {
    "id": "aura_fire_red",
    "name": "Hào Quang Hỏa Diệm Rực Lửa",
    "src": "/assets/props/auras/aura_fire_red.png",
    "type": "shadows",
    "layers": [
      {
        "src": "/assets/fantasy/shadows/shadow_ground_pixel.png",
        "z_index": 5,
        "category": "shadows"
      },
      {
        "src": "/assets/props/auras/aura_fire_red.png",
        "z_index": 2,
        "category": "shadows"
      }
    ]
  },
  {
    "id": "aura_legendary_gold",
    "name": "Hào Quang Hoàng Kim Truyền Thuyết",
    "src": "/assets/props/auras/aura_legendary_gold.png",
    "type": "shadows",
    "layers": [
      {
        "src": "/assets/fantasy/shadows/shadow_ground_pixel.png",
        "z_index": 5,
        "category": "shadows"
      },
      {
        "src": "/assets/props/auras/aura_legendary_gold.png",
        "z_index": 2,
        "category": "shadows"
      }
    ]
  },
  {
    "id": "aura_nether_purple",
    "name": "Hào Quang Hư Không Hắc Ám",
    "src": "/assets/props/auras/aura_nether_purple.png",
    "type": "shadows",
    "layers": [
      {
        "src": "/assets/fantasy/shadows/shadow_ground_pixel.png",
        "z_index": 5,
        "category": "shadows"
      },
      {
        "src": "/assets/props/auras/aura_nether_purple.png",
        "z_index": 2,
        "category": "shadows"
      }
    ]
  }
]
};

export const getFantasyLayers = (selections, activeColors = {}) => {
  const layers = [];

  // 1. Shadows (Ground shadow & aura)
  const shadowId = selections.shadows || 'shadow_ground_pixel';
  if (shadowId && !shadowId.endsWith('_none')) {
    const group = fantasyConfig.shadows;
    const item = group.find(i => i.id === shadowId);
    if (item && item.layers) {
      item.layers.forEach(l => layers.push({ ...l, color: activeColors.shadows || '#ffffff' }));
    }
  }

  // 2. Tails & Back accessories (behind body)
  const accId = selections.accessories;
  if (accId && !accId.endsWith('_none')) {
    const group = fantasyConfig.accessories;
    const item = group.find(i => i.id === accId);
    if (item && item.layers) {
      item.layers.forEach(l => layers.push({ ...l, color: activeColors.accessories || '#ffffff' }));
    }
  }

  // 3. Bottoms / Legs (2 distinct legs, pants & boots)
  const bottomId = selections.bottoms || 'bottom_r30_c0';
  if (bottomId && !bottomId.endsWith('_none')) {
    const group = fantasyConfig.bottoms;
    const item = group.find(i => i.id === bottomId);
    if (item && item.layers) {
      item.layers.forEach(l => layers.push({ ...l, color: activeColors.bottoms || '#ffffff' }));
    }
  }

  // 4. Outfits (Torso / Clothes / Armor)
  const outfitId = selections.outfits || 'outfit_r19_c0';
  if (outfitId && !outfitId.endsWith('_none')) {
    const group = fantasyConfig.outfits;
    const item = group.find(i => i.id === outfitId);
    if (item && item.layers) {
      item.layers.forEach(l => layers.push({ ...l, color: activeColors.outfits || '#ffffff' }));
    }
  }

  // 5. Races & Expressions (Head / Face)
  const raceId = selections.races || 'race_human_fair';
  const exprId = selections.expressions || 'expr_neutral';
  const raceGroup = fantasyConfig.races;
  const raceItem = raceGroup.find(i => i.id === raceId) || raceGroup[0];
  
  if (raceItem) {
    let headSrc = raceItem.defaultSrc;
    if (raceItem.expressions && raceItem.expressions[exprId]) {
      headSrc = raceItem.expressions[exprId];
    }
    layers.push({
      src: headSrc,
      z_index: 40,
      category: 'races',
      color: activeColors.races || '#ffffff'
    });
  }

  // 6. Hairstyles
  const hairId = selections.hairs || 'hair_r8_c0';
  if (hairId && !hairId.endsWith('_none')) {
    const group = fantasyConfig.hairs;
    const item = group.find(i => i.id === hairId);
    if (item && item.layers) {
      item.layers.forEach(l => layers.push({ ...l, color: activeColors.hairs || '#ffffff' }));
    }
  }

  // 7. Headgear (Horns, Animal ears, Headbands, Glasses)
  const hgId = selections.headgear;
  if (hgId && !hgId.endsWith('_none')) {
    const group = fantasyConfig.headgear;
    const item = group.find(i => i.id === hgId);
    if (item && item.layers) {
      item.layers.forEach(l => layers.push({ ...l, color: activeColors.headgear || '#ffffff' }));
    }
  }

  // 8. Weapons & Tools
  const weaponId = selections.weapons;
  if (weaponId && !weaponId.endsWith('_none')) {
    const group = fantasyConfig.weapons;
    const item = group.find(i => i.id === weaponId);
    if (item && item.layers) {
      item.layers.forEach(l => layers.push({ ...l, color: activeColors.weapons || '#ffffff' }));
    }
  }

  return layers.sort((a, b) => (a.z_index || 0) - (b.z_index || 0));
};
