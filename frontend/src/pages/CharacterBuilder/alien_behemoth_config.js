/**
 * Alien Behemoth & Cosmic Evolution Studio Configuration (512x512 Native HD RGBA)
 * 8 Distinct Cosmic Species -> 69 Evolution Stages (Symmetry-Repaired)
 * Species-Compatible Dorsal Chitin Wings, Spiky Tendril Auras & Symbiont Incubator Egg Pods
 */

const SPECIES_DEFS = [
  {
    id: 'sp_mantismorph',
    folder: 'mantismorph',
    prefix: 'mantismorph_stage',
    count: 7,
    name: 'Bọ Ngựa Vũ Trụ (Mantismorph - 7 Cấp)',
    shortLabel: 'Bọ Ngựa Vũ Trụ',
    supportsMutations: true
  },
  {
    id: 'sp_locustmorph',
    folder: 'locustmorph',
    prefix: 'locustmorph_stage',
    count: 11,
    name: 'Châu Chấu Dị Giới (Locustmorph - 11 Cấp)',
    shortLabel: 'Châu Chấu Dị Giới',
    supportsMutations: true
  },
  {
    id: 'sp_lobstermorph',
    folder: 'lobstermorph',
    prefix: 'lobstermorph_stage',
    count: 5,
    name: 'Giáp Xác Thiết Giáp (Lobstermorph - 5 Cấp)',
    shortLabel: 'Giáp Xác Thiết Giáp',
    supportsMutations: true
  },
  {
    id: 'sp_squidmorph',
    folder: 'squidmorph',
    prefix: 'squidmorph_stage',
    count: 14,
    name: 'Bạch Tuộc Hư Không (Squidmorph - 14 Cấp)',
    shortLabel: 'Bạch Tuộc Hư Không',
    supportsMutations: false
  },
  {
    id: 'sp_rhinomorph',
    folder: 'rhinomorph',
    prefix: 'rhinomorph_tier',
    count: 5,
    name: 'Tê Giác Thiên Thạch (Rhinomorph - 5 Cấp)',
    shortLabel: 'Tê Giác Thiên Thạch',
    supportsMutations: true
  },
  {
    id: 'sp_eaglemorph',
    folder: 'eaglemorph',
    prefix: 'eaglemorph_stage',
    count: 8,
    name: 'Nhãn Quỷ Vũ Trụ (Eaglemorph - 8 Cấp)',
    shortLabel: 'Nhãn Quỷ Eaglemorph',
    supportsMutations: false
  },
  {
    id: 'sp_biodrone',
    folder: 'biodrone',
    prefix: 'biodrone_stage',
    count: 4,
    name: 'Ong Trinh Sát & Chúa Tể Tổ Kén (4 Cấp)',
    shortLabel: 'Ong Sinh Học & Tổ Kén',
    supportsMutations: true
  },
  {
    id: 'sp_spacewhale',
    folder: 'spacewhale',
    prefix: 'spacewhale_stage',
    count: 15,
    name: 'Kình Ngư Tinh Hà (Space Whale - 15 Cấp)',
    shortLabel: 'Kình Ngư Tinh Hà',
    supportsMutations: false
  },
  {
    id: 'sp_centipede',
    folder: 'centipede',
    prefix: 'centipede_stage',
    count: 6,
    name: 'Sâu Gai Cơ Khí (Centipedemorph - 6 Cấp)',
    shortLabel: 'Sâu Gai Cơ Khí',
    supportsMutations: true
  }
];

const COMPATIBLE_MUTATION_SPECIES = SPECIES_DEFS.filter(s => s.supportsMutations).map(s => s.id);

const buildSpeciesList = () =>
  SPECIES_DEFS.map(sp => {
    const defaultStage = `${sp.prefix}_01`;
    return {
      id: sp.id,
      name: sp.name,
      defaultStage,
      supportsMutations: sp.supportsMutations,
      src: `/assets/alien_behemoths/${sp.folder}/${defaultStage}.png`,
      thumbSrc: `/assets/alien_behemoths/thumbs/${defaultStage}.png`
    };
  });

const buildStagesList = () => {
  const items = [];
  for (const sp of SPECIES_DEFS) {
    for (let i = 1; i <= sp.count; i++) {
      const num = String(i).padStart(2, '0');
      const id = `${sp.prefix}_${num}`;
      const stageTitle =
        sp.id === 'sp_biodrone' && i === 4
          ? `${sp.shortLabel} - Chúa Tể Hive Mind (Cấp 4)`
          : `${sp.shortLabel} - Tiến Hóa Cấp ${i}`;
      items.push({
        id,
        name: stageTitle,
        forSpecies: sp.id,
        src: `/assets/alien_behemoths/${sp.folder}/${id}.png`,
        thumbSrc: `/assets/alien_behemoths/thumbs/${id}.png`
      });
    }
  }
  return items;
};

export const alienBehemothGroups = {};

export const alienBehemothConfig = {
  species: buildSpeciesList(),

  stage: buildStagesList(),

  mutation: [
    { id: 'mutation_none', name: 'Không Có Đột Biến Lưng' },
    {
      id: 'mutation_chitin_wings',
      name: 'Đôi Cánh Chitin Hoàng Kim (Côn Trùng & Giáp Xác)',
      allowedSpecies: COMPATIBLE_MUTATION_SPECIES,
      src: '/assets/alien_behemoths/mutations/mutation_chitin_wings.png',
      thumbSrc: '/assets/alien_behemoths/thumbs/mutation_chitin_wings.png'
    },
    {
      id: 'mutation_spiky_tendrils',
      name: 'Vòng Xúc Tu Gai Sinh Học (Côn Trùng & Giáp Xác)',
      allowedSpecies: COMPATIBLE_MUTATION_SPECIES,
      src: '/assets/alien_behemoths/mutations/mutation_spiky_tendrils.png',
      thumbSrc: '/assets/alien_behemoths/thumbs/mutation_spiky_tendrils.png'
    },
    {
      id: 'mutation_archangel_wings',
      name: 'Đôi Cánh Thiên Sứ Hoàng Kim (Côn Trùng & Giáp Xác)',
      allowedSpecies: COMPATIBLE_MUTATION_SPECIES,
      src: '/assets/alien_behemoths/mutations/mutation_archangel_wings.png',
      thumbSrc: '/assets/alien_behemoths/thumbs/mutation_archangel_wings.png'
    },
    {
      id: 'mutation_seraphim_wings',
      name: 'Đôi Cánh Seraphim Huyết Tinh (Côn Trùng & Giáp Xác)',
      allowedSpecies: COMPATIBLE_MUTATION_SPECIES,
      src: '/assets/alien_behemoths/mutations/mutation_seraphim_wings.png',
      thumbSrc: '/assets/alien_behemoths/thumbs/mutation_seraphim_wings.png'
    },
    {
      id: 'mutation_demon_bat_wings',
      name: 'Đôi Cánh Quỷ Dơi Hắc Ám (Côn Trùng & Giáp Xác)',
      allowedSpecies: COMPATIBLE_MUTATION_SPECIES,
      src: '/assets/alien_behemoths/mutations/mutation_demon_bat_wings.png',
      thumbSrc: '/assets/alien_behemoths/thumbs/mutation_demon_bat_wings.png'
    },
    {
      id: 'mutation_golden_halo',
      name: 'Vòng Hào Quang Thánh Tích (Côn Trùng & Giáp Xác)',
      allowedSpecies: COMPATIBLE_MUTATION_SPECIES,
      src: '/assets/alien_behemoths/mutations/mutation_golden_halo.png',
      thumbSrc: '/assets/alien_behemoths/thumbs/mutation_golden_halo.png'
    }
  ],

  symbiont: [
    { id: 'symbiont_none', name: 'Không Kèm Kén Trứng' },
    {
      id: 'mutation_incubator_egg',
      name: 'Cặp Trứng Ký Sinh Hộ Vệ (Côn Trùng & Giáp Xác)',
      allowedSpecies: COMPATIBLE_MUTATION_SPECIES,
      src: '/assets/alien_behemoths/mutations/mutation_incubator_egg.png',
      thumbSrc: '/assets/alien_behemoths/thumbs/mutation_incubator_egg.png'
    }
  ],

  space_bg: [
    { id: 'space_bg_none', name: 'Trong Suốt (Không Nền)' },
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
      id: 'bg_starfield_galaxy',
      name: 'Dải Ngân Hà Rực Rỡ',
      src: '/assets/spaceships/backgrounds/bg_starfield_galaxy.png',
      thumbSrc: '/assets/spaceships/thumbs/bg_starfield_galaxy.png'
    },
    {
      id: 'bg_planet_horizon',
      name: 'Chân Trời Hành Tinh Dị Giới',
      src: '/assets/spaceships/backgrounds/bg_planet_horizon.png',
      thumbSrc: '/assets/spaceships/thumbs/bg_planet_horizon.png'
    }
  ]
};

const bioPalette = [
  { name: 'Sinh Học Nguyên Bản', hex: '#FFFFFF' },
  { name: 'Xanh Độc Phóng Xạ', hex: '#22C55E' },
  { name: 'Tím Hư Không', hex: '#A855F7' },
  { name: 'Đỏ Huyết Quỷ', hex: '#EF4444' },
  { name: 'Xanh Phát Quang Biển Sâu', hex: '#06B6D4' },
  { name: 'Vàng Chitin Cổ Đại', hex: '#EAB308' },
  { name: 'Hồng Ký Sinh', hex: '#EC4899' },
  { name: 'Cam Dung Nham', hex: '#F97316' }
];

export const alienBehemothColorPalettes = {
  species: [{ name: 'Nguyên Bản', hex: '#FFFFFF' }],
  stage: bioPalette,
  mutation: bioPalette,
  symbiont: bioPalette,
  space_bg: [{ name: 'Nguyên Bản', hex: '#FFFFFF' }]
};

export const getAlienBehemothLayers = (selections = {}, colors = {}) => {
  const layers = [];

  const bgItem = alienBehemothConfig.space_bg.find(b => b.id === selections.space_bg);
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

  const activeSpecies = selections.species || 'sp_mantismorph';
  const stageItem =
    alienBehemothConfig.stage.find(s => s.id === selections.stage && s.forSpecies === activeSpecies) ||
    alienBehemothConfig.stage.find(s => s.forSpecies === activeSpecies) ||
    alienBehemothConfig.stage[0];

  const speciesAllowedForMutation = COMPATIBLE_MUTATION_SPECIES.includes(activeSpecies);

  if (speciesAllowedForMutation) {
    const mutationItem = alienBehemothConfig.mutation.find(m => m.id === selections.mutation);
    if (mutationItem && mutationItem.src) {
      layers.push({
        id: mutationItem.id,
        category: 'mutation',
        name: mutationItem.name,
        src: mutationItem.src,
        color: colors.mutation || '#ffffff',
        z_index: 1
      });
    }
  }

  if (stageItem && stageItem.src) {
    layers.push({
      id: stageItem.id,
      category: 'stage',
      name: stageItem.name,
      src: stageItem.src,
      color: colors.stage || '#ffffff',
      z_index: 2
    });
  }

  if (speciesAllowedForMutation) {
    const symbiontItem = alienBehemothConfig.symbiont.find(s => s.id === selections.symbiont);
    if (symbiontItem && symbiontItem.src) {
      layers.push({
        id: symbiontItem.id,
        category: 'symbiont',
        name: symbiontItem.name,
        src: symbiontItem.src,
        color: colors.symbiont || '#ffffff',
        z_index: 3
      });
    }
  }

  return layers;
};
