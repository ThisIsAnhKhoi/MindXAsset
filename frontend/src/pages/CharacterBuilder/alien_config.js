/**
 * Configuration & Layer Composer for Alien & Sci-Fi Creature Builder
 * Extends the Kenney CC0 modular vector system with extraterrestrial biology presets.
 */

import { monsterSkeletons } from './monster_config';

export const alienConfig = {
  body: [
    { id: 'body_greenA', name: 'Alien Green Slime', src: '/assets/monster/body_greenA.png' },
    { id: 'body_greenB', name: 'Alien Green Biped', src: '/assets/monster/body_greenB.png' },
    { id: 'body_greenC', name: 'Alien Green Oval', src: '/assets/monster/body_greenC.png' },
    { id: 'body_greenD', name: 'Alien Green Bloat', src: '/assets/monster/body_greenD.png' },
    { id: 'body_greenE', name: 'Alien Green Tall', src: '/assets/monster/body_greenE.png' },
    { id: 'body_darkA', name: 'Void Alien A', src: '/assets/monster/body_darkA.png' },
    { id: 'body_darkB', name: 'Void Alien B', src: '/assets/monster/body_darkB.png' },
    { id: 'body_darkD', name: 'Void Bloat', src: '/assets/monster/body_darkD.png' },
    { id: 'body_darkE', name: 'Void Tall Specimen', src: '/assets/monster/body_darkE.png' },
    { id: 'body_redB', name: 'Martian Biped', src: '/assets/monster/body_redB.png' },
    { id: 'body_redE', name: 'Martian Heavy', src: '/assets/monster/body_redE.png' },
    { id: 'body_whiteB', name: 'Cybernetic Exo B', src: '/assets/monster/body_whiteB.png' },
    { id: 'body_yellowD', name: 'Plasma Bio D', src: '/assets/monster/body_yellowD.png' }
  ],
  antenna: [
    { id: 'antenna_none', name: 'Không có', src: null },
    { id: 'detail_green_antenna_large', name: 'Ăng-Ten Sóng Não Lớn', src: '/assets/monster/detail_green_antenna_large.png' },
    { id: 'detail_green_antenna_small', name: 'Ăng-Ten Vệ Tinh Nhỏ', src: '/assets/monster/detail_green_antenna_small.png' },
    { id: 'detail_dark_antenna_large', name: 'Ăng-Ten Hư Không Lớn', src: '/assets/monster/detail_dark_antenna_large.png' },
    { id: 'detail_dark_antenna_small', name: 'Ăng-Ten Hư Không Nhỏ', src: '/assets/monster/detail_dark_antenna_small.png' },
    { id: 'detail_red_antenna_large', name: 'Râu Cảm Biến Đỏ', src: '/assets/monster/detail_red_antenna_large.png' },
    { id: 'detail_green_horn_large', name: 'Sừng Năng Lượng Xanh', src: '/assets/monster/detail_green_horn_large.png' },
    { id: 'detail_dark_horn_large', name: 'Gai Xương Vũ Trụ', src: '/assets/monster/detail_dark_horn_large.png' }
  ],
  eye: [
    { id: 'eye_psycho_dark', name: 'Mắt Xoáy Thôi Miên', src: '/assets/monster/eye_psycho_dark.png' },
    { id: 'eye_psycho_light', name: 'Mắt Plasma Trắng', src: '/assets/monster/eye_psycho_light.png' },
    { id: 'eye_angry_green', name: 'Mắt Bọ Xanh Lá', src: '/assets/monster/eye_angry_green.png' },
    { id: 'eye_angry_red', name: 'Mắt Đỏ Hỏa Tinh', src: '/assets/monster/eye_angry_red.png' },
    { id: 'eye_cute_dark', name: 'Mắt Đen Vô Cực', src: '/assets/monster/eye_cute_dark.png' },
    { id: 'eye_yellow', name: 'Mắt Vàng Quái Vật', src: '/assets/monster/eye_yellow.png' },
    { id: 'eye_dead', name: 'Mắt Robot Tắt Nguồn', src: '/assets/monster/eye_dead.png' }
  ],
  mouth: [
    { id: 'mouth_closed_fangs', name: 'Răng Nanh Ngoài Hành Tinh', src: '/assets/monster/mouth_closed_fangs.png' },
    { id: 'mouth_closed_teeth', name: 'Hàm Răng Bọc Thép', src: '/assets/monster/mouth_closed_teeth.png' },
    { id: 'mouthC', name: 'Miệng Nuốt Sao', src: '/assets/monster/mouthC.png' },
    { id: 'mouthF', name: 'Hàm Nhai Đá', src: '/assets/monster/mouthF.png' },
    { id: 'mouthH', name: 'Miệng Cười Nham Hiểm', src: '/assets/monster/mouthH.png' },
    { id: 'mouthI', name: 'Xúc Tu Miệng', src: '/assets/monster/mouthI.png' }
  ],
  arm: [
    { id: 'arm_greenA', name: 'Tay Xúc Tu Xanh A', src: '/assets/monster/arm_greenA.png' },
    { id: 'arm_greenD', name: 'Càng Bọ Xanh Lá D', src: '/assets/monster/arm_greenD.png' },
    { id: 'arm_darkA', name: 'Xúc Tu Hư Không A', src: '/assets/monster/arm_darkA.png' },
    { id: 'arm_darkC', name: 'Móng Vuốt Vô Cực C', src: '/assets/monster/arm_darkC.png' },
    { id: 'arm_darkE', name: 'Tay Cơ Khí Đen E', src: '/assets/monster/arm_darkE.png' },
    { id: 'arm_redD', name: 'Càng Cua Hỏa Tinh D', src: '/assets/monster/arm_redD.png' },
    { id: 'arm_whiteE', name: 'Cánh Tay Robot Trắng E', src: '/assets/monster/arm_whiteE.png' }
  ],
  leg: [
    { id: 'leg_greenA', name: 'Chân Xúc Tu Xanh A', src: '/assets/monster/leg_greenA.png' },
    { id: 'leg_greenC', name: 'Chân Bọ Nhảy C', src: '/assets/monster/leg_greenC.png' },
    { id: 'leg_darkA', name: 'Chân Đệm Hư Không A', src: '/assets/monster/leg_darkA.png' },
    { id: 'leg_darkD', name: 'Chân Bọc Thép Đen D', src: '/assets/monster/leg_darkD.png' },
    { id: 'leg_redB', name: 'Chân Cơ Bắp Đỏ B', src: '/assets/monster/leg_redB.png' },
    { id: 'leg_whiteD', name: 'Chân Robot Trắng D', src: '/assets/monster/leg_whiteD.png' }
  ]
};

const commonAlienPalette = [
  { name: 'Nguyên Bản', hex: '#FFFFFF' },
  { name: 'Xanh Sinh Học', hex: '#4ADE80' },
  { name: 'Xanh Plasma', hex: '#22D3EE' },
  { name: 'Tím Tinh Vân', hex: '#C084FC' },
  { name: 'Đỏ Sao Hỏa', hex: '#F87171' },
  { name: 'Vàng Bức Xạ', hex: '#FACC15' },
  { name: 'Hồng Lượng Tử', hex: '#F472B6' },
  { name: 'Xanh Hư Không', hex: '#6366F1' }
];

export const alienColorPalettes = {
  body: commonAlienPalette,
  antenna: commonAlienPalette,
  eye: commonAlienPalette,
  mouth: commonAlienPalette,
  arm: commonAlienPalette,
  leg: commonAlienPalette
};

const getArmPivot = (armId) => {
  if (armId && (armId.endsWith('C') || armId.endsWith('D') || armId.endsWith('E'))) {
    return { x: 0.5, y: 0.9 };
  }
  return { x: 0.5, y: 0.1 };
};

export const getAlienLayers = (selections) => {
  const layers = [];
  const bodyId = selections.body || 'body_greenA';
  const shape = bodyId.slice(-1);
  const skeleton = monsterSkeletons[shape] || monsterSkeletons['A'];
  const bodyCenter = skeleton.center;

  const bodyOpt = alienConfig.body.find(b => b.id === bodyId) || alienConfig.body[0];
  if (bodyOpt && bodyOpt.src) {
    layers.push({
      id: bodyOpt.id,
      category: 'body',
      src: bodyOpt.src,
      z_index: 0,
      position: { x: 0, y: 0 },
      pivot: { x: 0, y: 0 },
      bodyCenter: bodyCenter
    });
  }

  const legOpt = alienConfig.leg.find(l => l.id === selections.leg) || alienConfig.leg[0];
  if (legOpt && legOpt.src) {
    layers.push({
      id: legOpt.id + '_L',
      category: 'leg_L',
      src: legOpt.src,
      z_index: -2,
      position: skeleton.leg_L,
      pivot: { x: 0.5, y: 0.1 },
      scaleX: -1,
      bodyCenter: bodyCenter
    });
    layers.push({
      id: legOpt.id + '_R',
      category: 'leg_R',
      src: legOpt.src,
      z_index: -2,
      position: skeleton.leg_R,
      pivot: { x: 0.5, y: 0.1 },
      scaleX: 1,
      bodyCenter: bodyCenter
    });
  }

  const armOpt = alienConfig.arm.find(a => a.id === selections.arm) || alienConfig.arm[0];
  if (armOpt && armOpt.src) {
    const armPivot = getArmPivot(armOpt.id);
    layers.push({
      id: armOpt.id + '_L',
      category: 'arm_L',
      src: armOpt.src,
      z_index: -3,
      position: skeleton.arm_L,
      pivot: armPivot,
      scaleX: -1,
      bodyCenter: bodyCenter
    });
    layers.push({
      id: armOpt.id + '_R',
      category: 'arm_R',
      src: armOpt.src,
      z_index: -3,
      position: skeleton.arm_R,
      pivot: armPivot,
      scaleX: 1,
      bodyCenter: bodyCenter
    });
  }

  const antennaOpt = alienConfig.antenna.find(d => d.id === selections.antenna);
  if (antennaOpt && antennaOpt.src) {
    layers.push({
      id: antennaOpt.id + '_L',
      category: 'antenna_L',
      src: antennaOpt.src,
      z_index: -1,
      position: skeleton.detail_L,
      pivot: { x: 0.5, y: 0.9 },
      scaleX: -1,
      bodyCenter: bodyCenter
    });
    layers.push({
      id: antennaOpt.id + '_R',
      category: 'antenna_R',
      src: antennaOpt.src,
      z_index: -1,
      position: skeleton.detail_R,
      pivot: { x: 0.5, y: 0.9 },
      scaleX: 1,
      bodyCenter: bodyCenter
    });
  }

  const eyeOpt = alienConfig.eye.find(e => e.id === selections.eye) || alienConfig.eye[0];
  if (eyeOpt && eyeOpt.src) {
    layers.push({
      id: eyeOpt.id,
      category: 'eye',
      src: eyeOpt.src,
      z_index: 3,
      position: { x: skeleton.face.x, y: skeleton.face.y - 10 },
      pivot: { x: 0.5, y: 0.5 },
      bodyCenter: bodyCenter
    });
  }

  const mouthOpt = alienConfig.mouth.find(m => m.id === selections.mouth) || alienConfig.mouth[0];
  if (mouthOpt && mouthOpt.src) {
    layers.push({
      id: mouthOpt.id,
      category: 'mouth',
      src: mouthOpt.src,
      z_index: 2,
      position: { x: skeleton.face.x, y: skeleton.face.y + 35 },
      pivot: { x: 0.5, y: 0.5 },
      bodyCenter: bodyCenter
    });
  }

  return layers;
};
