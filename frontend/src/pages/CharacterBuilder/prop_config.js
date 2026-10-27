/**
 * Configuration & Layer Composer for Interactive Game Props & Objects
 * Supports multi-state in-game assets (Chests, Levers, Potions, Portals).
 */

export const propConfig = {
  prop_type: [
    { id: 'chest', name: 'Rương Kho Báu Hầm Ngục', defaultState: 'closed' },
    { id: 'lever', name: 'Cần Gạt Cơ Quan Mở Cửa', defaultState: 'off' },
    { id: 'potion', name: 'Bình Thuốc Phép Thuật', defaultState: 'red' },
    { id: 'portal', name: 'Cổng Dịch Chuyển Không Gian', defaultState: 'active' }
  ],
  state: [
    // Chest states
    { id: 'chest_wood_closed', name: 'Rương Đóng Khóa', src: '/assets/props/chest_wood_closed.svg', forType: 'chest' },
    { id: 'chest_wood_open', name: 'Rương Mở Tràn Vàng', src: '/assets/props/chest_wood_open.svg', forType: 'chest' },

    // Lever states
    { id: 'lever_off', name: 'Cần Gạt Tắt (Đèn Đỏ)', src: '/assets/props/lever_off.svg', forType: 'lever' },
    { id: 'lever_on', name: 'Cần Gạt Bật (Đèn Xanh)', src: '/assets/props/lever_on.svg', forType: 'lever' },

    // Potion states/types
    { id: 'potion_red', name: 'Bình Máu Đỏ (Health Potion)', src: '/assets/props/potion_red.svg', forType: 'potion' },
    { id: 'potion_blue', name: 'Bình Mana Xanh (Mana Potion)', src: '/assets/props/potion_blue.svg', forType: 'potion' },

    // Portal states
    { id: 'portal_active', name: 'Cổng Kích Hoạt Vòng Xoáy Tím', src: '/assets/props/portal_active.svg', forType: 'portal' }
  ]
};

export const getPropLayers = (selections) => {
  const layers = [];
  const selectedType = selections.prop_type || 'chest';
  const stateId = selections.state;

  // Tìm state phù hợp với prop_type
  let matchingState = propConfig.state.find(s => s.id === stateId);
  if (!matchingState || matchingState.forType !== selectedType) {
    matchingState = propConfig.state.find(s => s.forType === selectedType) || propConfig.state[0];
  }

  if (matchingState) {
    layers.push({
      id: matchingState.id,
      category: 'prop',
      name: matchingState.name,
      src: matchingState.src,
      z_index: 1
    });
  }

  return layers;
};
