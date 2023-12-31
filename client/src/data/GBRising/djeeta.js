// Updated to be able to utilize startup/active/recovery data for calculators

const general = { char: "Djeeta", health: 10000, prejump: 4, backdash: 24 }

// close normals
const closeL = {
  moveName: 'Close Light',
  altName: 'cL',
  damage: 400,
  guard: 'Mid',
  startup: 5,
  active: 3,
  recovery: 6,
  onblock: 2,
  onhit: 6,
  oncounterhit: 8,
  clash: 1,
  motion: ['l'],
};
const closeM = {
  moveName: 'Close Medium',
  altName: 'cM',
  damage: 700,
  guard: 'Mid',
  startup: 6,
  active: 3,
  recovery: 12,
  onblock: 0,
  onhit: 4,
  oncounterhit: 8,
  clash: 3,
  motion: ['m'],
};
const closeH = {
  moveName: 'Close Heavy',
  altName: 'cH',
  damage: 1200,
  guard: 'Mid',
  startup: 8,
  active: 4,
  recovery: 18,
  onblock: -3,
  onhit: 1,
  oncounterhit: 13,
  clash: 5,
  motion: ['h'],
};

// auto combos
const auto1 = {
  moveName: 'Auto Combo 2nd hit',
  altName: 'cXX',
  damage: 350,
  guard: 'Mid',
  startup: 9,
  active: 3,
  recovery: 15,
  onblock: -3,
  onhit: 1,
  oncounterhit: 5,
  clash: 3,
  motion: ['l', 'l'],
};
const auto2 = {
  moveName: 'Auto Combo 3rd hit',
  altName: 'cXXX',
  damage: 350,
  guard: 'Mid',
  startup: 12,
  active: 3,
  recovery: 18,
  onblock: -4,
  onhit: 0,
  oncounterhit: 8,
  clash: 4,
  motion: ['l', 'l', 'l'],
};
const autoHighEnder = {
  moveName: 'Auto Combo High Ender',
  altName: 'cXX6X',
  damage: '-',
  guard: 'High',
  startup: '-',
  active: '-',
  recovery: '-',
  onblock: '-',
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['l', 'l','6','l'],
};
const autoLowEnder = {
  moveName: 'Auto Combo Low Ender',
  altName: 'cXX2X',
  damage: '-',
  guard: 'Low',
  startup: '-',
  active: '-',
  recovery: '-',
  onblock: '-',
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['l', 'l','2','l'],
};

// far normals
const far5L = {
  moveName: 'Far Light',
  altName: 'f5L',
  damage: 400,
  guard: 'Mid',
  startup: 6,
  active: 5,
  recovery: 11,
  onblock: -3,
  onhit: 1,
  oncounterhit: 3,
  clash: 2,
  motion: ['l'],
};
const far5M = {
  moveName: 'Far Medium',
  altName: 'f5M',
  damage: 700,
  guard: 'Mid',
  startup: 8,
  active: 3,
  recovery: 18,
  onblock: -6,
  onhit: -2,
  oncounterhit: +2,
  clash: 3,
  motion: ['m'],
};
const far5H = {
  moveName: 'Far Heavy',
  altName: 'f5H',
  damage: 1000,
  guard: 'Mid',
  startup: 10,
  active: 5,
  recovery: 21,
  onblock: -9,
  onhit: -5,
  oncounterhit: 3,
  clash: 4,
  motion: ['h'],
};

// dash normals

const lDash = { 
  moveName: 'L Dash Attack', 
  altName: '-', 
  damage: '-', 
  guard: '-', 
  startup: '-', 
  active: '-', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['-'],
};
const mDash = { 
  moveName: 'M Dash Attack', 
  altName: '-', 
  damage: '-', 
  guard: '-', 
  startup: '-', 
  active: '-', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['-'],
};
const hDash = { 
  moveName: 'H Dash Attack', 
  altName: '-', 
  damage: '-', 
  guard: '-', 
  startup: '-', 
  active: '-', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['-'],
};

// regular normals
const n2L = {
  moveName: 'Crouch Light',
  altName: '2L',
  damage: 400,
  guard: 'Low',
  startup: 6,
  active: 3,
  recovery: 6,
  onblock: 2,
  onhit: 6,
  oncounterhit: 8,
  clash: 1,
  motion: ['2', 'l'],
};
const n2M = {
  moveName: 'Crouch Medium',
  altName: '2M',
  damage: 700,
  guard: 'Mid',
  startup: 7,
  active: 6,
  recovery: 12,
  onblock: -3,
  onhit: 1,
  oncounterhit: 5,
  clash: 3,
  motion: ['2', 'm'],
};
const n2H = {
  moveName: 'Crouch Heavy',
  altName: '2H',
  damage: 1000,
  guard: 'Mid',
  startup: 10,
  active: 6,
  recovery: 24,
  onblock: -13,
  onhit: -9,
  oncounterhit: -1,
  clash: 4,
  motion: ['2', 'h'],
};
const n2U = {
  moveName: 'Crouch Unique',
  altName: '2U',
  damage: 700,
  guard: 'Low',
  startup: 7,
  active: 6,
  recovery: 21,
  onblock: -12,
  onhit: 'HKD (+43)',
  oncounterhit: 'HKD (+47)',
  clash: 3,
  motion: ['2', 'u'],
};

// jump normals
const jL = { 
  moveName: 'Jump Light', 
  altName: 'jL', 
  damage: 400, 
  guard: 'High', 
  startup: 5, 
  active: '-', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: 2,
  motion: ['l'],
};
const jM = { 
  moveName: 'Jump Medium', 
  altName: 'jM', 
  damage: 550, 
  guard: 'High', 
  startup: 6, 
  active: 6, 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: 2,
  motion: ['m'],
};
const jH = { 
  moveName: 'Jump Heavy', 
  altName: 'jH', 
  damage: 800, 
  guard: 'High', 
  startup: 7, 
  active: 6, 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: 3,
  motion: ['h'],
};
const jU = { 
  moveName: 'Jump Unique', 
  altName: 'jU', 
  damage: 700, 
  guard: 'High', 
  startup: 12, 
  active: 8, 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: 3,
  motion: ['u'],
};

// unique action
const lv1U = { 
  moveName: 'Overdrive Surge Lv1', 
  altName: '5ULv1', 
  damage: 800, 
  guard: 'Mid', 
  startup: 16, 
  active: 5, 
  recovery: 14, 
  onblock: -2, 
  onhit: 3,
  oncounterhit: 'KD',
  clash: 4,
  motion: ['u'],
};
const lv2U = { 
  moveName: 'Overdrive Surge Lv2', 
  altName: '5ULv2', 
  damage: 1000, 
  guard: 'Mid', 
  startup: 16, 
  active: 5, 
  recovery: 14, 
  onblock: -2, 
  onhit: 3,
  oncounterhit: 'KD',
  clash: 4,
  motion: ['u'],
};
const lv3U = { 
  moveName: 'Overdrive Surge Lv3', 
  altName: '5ULv3', 
  damage: 1200, 
  guard: 'Mid', 
  startup: 16, 
  active: 5, 
  recovery: 14, 
  onblock: 0, 
  onhit: 5,
  oncounterhit: 'KD',
  clash: 4,
  motion: ['u'],
};
const lv4U = { 
  moveName: 'Overdrive Surge Lv4', 
  altName: '5ULv4', 
  damage: 1400, 
  guard: 'Mid', 
  startup: 16, 
  active: 5, 
  recovery: 14, 
  onblock: 0, 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: 4,
  motion: ['u'],
};
const lv5U = { 
  moveName: 'Overdrive Surge Lv5', 
  altName: '5ULv5', 
  damage: 1800, 
  guard: 'Mid', 
  startup: 16, 
  active: 5, 
  recovery: 14, 
  onblock: 0, 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: 4,
  motion: ['u'],
};

const groundThrow = { 
  moveName: 'Ground Throw', 
  damage: 1500, 
  guard: 'Throw', 
  startup: 7, 
  active: 3, 
  recovery: 31, 
  onblock: '-', 
  onhit: 'HKD (+44)',
  oncounterhit: '-',
  clash: '-',
  motion: ['l', 'm', 'or', 'l', 'u'],
};
const backThrow = { 
  moveName: 'Back Throw', 
  damage: '1500', 
  guard: 'Throw', 
  startup: 7, 
  active: 3, 
  recovery: 31, 
  onblock: '-', 
  onhit: 'HKD (+45)',
  oncounterhit: '-',
  clash: '-',
  motion: ['4', 'l', 'm', 'or', '4', 'l', 'u'],
};
const airThrow = { 
  moveName: 'Air Throw', 
  damage: 1500, 
  guard: 'Throw', 
  startup: 5, 
  active: 5, 
  recovery: '-', 
  onblock: '-', 
  onhit: 'HKD (+50)',
  oncounterhit: '-',
  clash: '-',
  motion: ['l', 'm', 'or', 'l', 'u'],
};

// System Mechanics
const ragingStrike = { 
  moveName: 'Raging Strike', 
  altName: 'Guard Crush', 
  damage: 1000, 
  guard: 'Unblockable', 
  startup: 28, 
  active: 6, 
  recovery: 17, 
  onblock: -4, 
  onhit: 1,
  oncounterhit: 13,
  clash: 5,
  motion: ['m', 'h'],
};
const ragingChain = {
  moveName: 'Raging Chain',
  altName: 'Guard Crush Followup', 
  damage: '-', 
  guard: '-', 
  startup: '-', 
  active: '-', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['6', 'm', 'h'],
}
const braveCounter = {
  moveName: 'Brave Counter',
  altName: 'Guard Cancel',
  damage: '-', 
  guard: '-', 
  startup: '-', 
  active: '-', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['6', 'm', 'h'],
}

// fireballs
const lFireball = { 
  moveName: 'L Reginleiv', 
  altName: '236L', 
  damage: 800, 
  guard: 'All', 
  startup: 16, 
  active: '-', 
  recovery: 47, 
  onblock: -7, 
  onhit: -3,
  oncounterhit: -1,
  clash: '-',
  motion: ['236', 'l', 'or', 'a'],
};
const mFireball = { 
  moveName: 'M Reginleiv', 
  altName: '236M', 
  damage: 800, 
  guard: 'All', 
  startup: 16, 
  active: '-', 
  recovery: 47, 
  onblock: -7, 
  onhit: -3,
  oncounterhit: -1,
  clash: '-',
  motion: ['236', 'm', 'or', 'a', 'm'],
};
const hFireball = { 
  moveName: 'H Reginleiv', 
  altName: '236H', 
  damage: '300x2, 400', 
  guard: 'All', 
  startup: 16, 
  active: '-', 
  recovery: 47, 
  onblock: 2, 
  onhit: 6,
  oncounterhit: 6,
  clash: '-',
  motion: ['236', 'h', 'or', 'a', 'h'],
};

const lChargedFireball = { 
  moveName: 'L Reginleiv (Charged)', 
  altName: '236L', 
  damage: 900, 
  guard: 'All', 
  startup: 41, 
  active: '-', 
  recovery: 69, 
  onblock: -4, 
  onhit: 0,
  oncounterhit: 'KD',
  clash: '-',
  motion: ['236', 'l', 'or', 'a'],
};
const mChargedFireball = { 
  moveName: 'M Reginleiv (Charged)', 
  altName: '236M', 
  damage: 900, 
  guard: 'All', 
  startup: 41, 
  active: '-', 
  recovery: 69, 
  onblock: -4, 
  onhit: 0,
  oncounterhit: 'KD',
  clash: '-',
  motion: ['236', 'm', 'or', 'a', 'm'],
};
const hChargedFireball = { 
  moveName: 'H Reginleiv (Charged)', 
  altName: '236H', 
  damage: '300x2, 500', 
  guard: 'All', 
  startup: 30, 
  active: '-', 
  recovery: 60, 
  onblock: 8, 
  onhit: 12,
  oncounterhit: 'HKD (+71)',
  clash: '-',
  motion: ['236', 'h', 'or', 'a', 'h'],
};

// dragon punches
const lUppercut = { 
  moveName: 'L Rising Sword', 
  altName: '623L', 
  damage: '700, 300', 
  guard: 'Mid, All', 
  startup: 9, 
  active: '2,9', 
  recovery: 30, 
  onblock: -22, 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '-',
  motion: ['623', 'l', 'or', '6', 'a'],
};
const mUppercut = { 
  moveName: 'M Rising Sword', 
  altName: '623M', 
  damage: '700, 300x2', 
  guard: 'Mid, All*2', 
  startup: 12, 
  active: '2,3,17', 
  recovery: 29, 
  onblock: -27, 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '-',
  motion: ['623', 'm', 'or', '6', 'a', 'm'],
};
const hUppercut = { 
  moveName: 'H Rising Sword', 
  altName: '623H', 
  damage: 1400, 
  guard: 'Mid*3, All', 
  startup: 9, 
  active: '2,3,6(23)2(3)2,2,3,3,9', 
  recovery: 32, 
  onblock: -28, 
  onhit: 'HKD (+52)',
  oncounterhit: 'HKD (+51)',
  clash: '-',
  motion: ['623', 'h', 'or', '6', 'a', 'h'],
};

// rekka
const lRekka = { 
  moveName: 'L Vorpal Blade', 
  altName: '214L', 
  damage: '350x2', 
  guard: 'Mid', 
  startup: 14, 
  active: '3(11)3', 
  recovery: 20, 
  onblock: -6, 
  onhit: -2,
  oncounterhit: -2,
  clash: 3,
  motion: ['214', 'l', 'or', '2', 'a'],
};
const mRekka = { 
  moveName: 'M Vorpal Blade', 
  altName: '214M', 
  damage: '400x2', 
  guard: 'Mid', 
  startup: 20, 
  active: '3(13)3', 
  recovery: 18, 
  onblock: -4, 
  onhit: 0,
  oncounterhit: 'KD',
  clash: 3,
  motion: ['214', 'm', 'or', '4', 'a'],
};
const rekkaEnder = { 
  moveName: 'Vorpal Blade (Ender)', 
  altName: '214L/M -> 4L/M', 
  damage: 500, 
  guard: 'Mid', 
  startup: 20, 
  active: 3, 
  recovery: 22, 
  onblock: -8, 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: 3,
  motion: ['214', 'm', 'or', '4', 'a'],
};
const hRekka = { 
  moveName: 'H Vorpal Blade', 
  altName: '214H', 
  damage: '300x2', 
  guard: 'Mid', 
  startup: 15, 
  active: '2(8)5', 
  recovery: 18, 
  onblock: -6, 
  onhit: -2,
  oncounterhit: -2,
  clash: 4,
  motion: ['214', 'h', 'or', '2', 'a', 'h'],
};
const hRekkaFollowUp = { 
  moveName: 'H Vorpal Blade (Follow Up)', 
  altName: '214H', 
  damage: '350x2', 
  guard: 'Mid', 
  startup: 11, 
  active: '2(10)3', 
  recovery: 20, 
  onblock: -6, 
  onhit: 'HKD (+64)',
  oncounterhit: 'HKD (+64)',
  clash: 4,
  motion: ['214', 'h', 'or', '2', 'a', 'h'],
};
const hRekkaEnder = { 
  moveName: 'H Vorpal Blade (Ender)', 
  altName: '214H', 
  damage: 400, 
  guard: 'Mid', 
  startup: 17, 
  active: 3, 
  recovery: 22, 
  onblock: -8, 
  onhit: 'HKD (+52)',
  oncounterhit: 'HKD (+46)',
  clash: 4,
  motion: ['214', 'h', 'or', '2', 'a', 'h'],
};

// skybound art
const sba = { 
  moveName: 'Eternal Ascendancy', 
  altName: '236236H', 
  damage: '2500-3700', 
  guard: 'All', 
  startup: 14, 
  active: '-', 
  recovery: '-', 
  onblock: -13, 
  onhit: 'HKD (T:+44, S:+34)',
  oncounterhit: 'HKD (T:+44, S:+34)',
  clash: '-',
  motion: ['236', '236', 'h', 'or', '236', 'a'],
};
const ssba = { 
  moveName: 'Skyfall', 
  altName: '236236U', 
  damage: '3500-4500', 
  guard: 'All', 
  startup: 13, 
  active: '6[3,3]3,3,3,3,6(5)6', 
  recovery: 42, 
  onblock: -52, 
  onhit: 'HKD (T:+45, S:+35)',
  oncounterhit: 'HKD (T:+45, S:+35)',
  clash: '-',
  motion: ['236', '236', 'u', 'or', '236', 'a', 'u'],
};


export const djeetaInfo = [
  general,
  closeL,
  closeM,
  closeH,
  auto1,
  auto2,
  autoHighEnder,
  autoLowEnder,
  far5L,
  far5M,
  far5H,
  lDash,
  mDash,
  hDash,
  n2L,
  n2M,
  n2H,
  n2U,
  jL,
  jM,
  jH,
  jU,
  lv1U,
  lv2U,
  lv3U,
  lv4U,
  lv5U,
  groundThrow,
  backThrow,
  airThrow,
  ragingStrike,
  ragingChain,
  braveCounter,
  lFireball,
  mFireball,
  hFireball,
  lChargedFireball,
  mChargedFireball,
  hChargedFireball,
  lUppercut,
  mUppercut,
  hUppercut,
  lRekka,
  mRekka,
  rekkaEnder,
  hRekka,
  hRekkaFollowUp,
  hRekkaEnder,
  sba,
  ssba
]
