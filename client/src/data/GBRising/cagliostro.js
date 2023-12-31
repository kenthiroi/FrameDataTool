// FINAL 

const general = { char: "Cagliostro", health: '10000', prejump: '4F', backdash: '22F' }

// close normals
const closeL = {
  moveName: 'Close Light',
  altName: 'cL',
  damage: '400',
  guard: 'Mid',
  startup: '5',
  active: '3',
  recovery: '6',
  onblock: '+2',
  onhit: '+6',
  oncounterhit: '+8',
  clash: '1',
  motion: ['l'],
};
const closeM = {
  moveName: 'Close Medium',
  altName: 'cM',
  damage: '700',
  guard: 'Mid',
  startup: '6',
  active: '3',
  recovery: '15',
  onblock: '-3',
  onhit: '+1',
  oncounterhit: '+5',
  clash: '3',
  motion: ['m'],
};
const closeH = {
  moveName: 'Close Heavy',
  altName: 'cH',
  damage: '700, 100x3',
  guard: 'Mid',
  startup: '9',
  active: '2x4',
  recovery: '20',
  onblock: '-3',
  onhit: '+1',
  oncounterhit: '+1',
  clash: '5',
  motion: ['h'],
};

// auto combos
const auto1 = {
  moveName: 'Auto Combo 2nd hit',
  altName: 'cXX',
  damage: '350',
  guard: 'Mid',
  startup: '9',
  active: '3',
  recovery: '15',
  onblock: '-3',
  onhit: '+1',
  oncounterhit: '+5',
  clash: '3',
  motion: ['l', 'l'],
};
const auto2 = {
  moveName: 'Auto Combo 3rd hit',
  altName: 'cXXX',
  damage: '280',
  guard: 'Mid',
  startup: '12',
  active: '3',
  recovery: '18',
  onblock: '-4',
  onhit: '0',
  oncounterhit: '+8',
  clash: '4',
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
  damage: '400',
  guard: 'Mid',
  startup: '6',
  active: '3',
  recovery: '13',
  onblock: '-3',
  onhit: '+1',
  oncounterhit: '+3',
  clash: '2',
  motion: ['l'],
};
const far5M = {
  moveName: 'Far Medium',
  altName: 'f5M',
  damage: '700',
  guard: 'Mid',
  startup: '10',
  active: '6',
  recovery: '15',
  onblock: '-6',
  onhit: '-2',
  oncounterhit: '+2',
  clash: '3',
  motion: ['m'],
};
const far5H = {
  moveName: 'Far Heavy',
  altName: 'f5H',
  damage: '1000',
  guard: 'Mid',
  startup: '9',
  active: '6',
  recovery: '18',
  onblock: '-5',
  onhit: '-1',
  oncounterhit: '-1',
  clash: '4',
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
  damage: '400',
  guard: 'Low',
  startup: '6',
  active: '3',
  recovery: '6',
  onblock: '+2',
  onhit: '+6',
  oncounterhit: '+8',
  clash: '1',
  motion: ['2', 'l'],
};
const n2M = {
  moveName: 'Crouch Medium',
  altName: '2M',
  damage: '700',
  guard: 'Mid',
  startup: '8',
  active: '3',
  recovery: '16',
  onblock: '-4',
  onhit: '0',
  oncounterhit: '+4',
  clash: '3',
  motion: ['2', 'm'],
};
const n2H = {
  moveName: 'Crouch Heavy',
  altName: '2H',
  damage: '1000',
  guard: 'Mid',
  startup: '11',
  active: '6',
  recovery: '24',
  onblock: '-13',
  onhit: '-9',
  oncounterhit: '-1',
  clash: '4',
  motion: ['2', 'h'],
};
const n2U = {
  moveName: 'Crouch Unique',
  altName: '2U',
  damage: '700',
  guard: 'Low',
  startup: '7',
  active: '6',
  recovery: '21',
  onblock: '-12',
  onhit: 'HKD (+43)',
  oncounterhit: 'HKD (+47)',
  clash: '3',
  motion: ['2', 'u'],
};

// jump normals
const jL = { 
  moveName: 'Jump Light', 
  altName: 'jL', 
  damage: '400', 
  guard: 'High', 
  startup: '5', 
  active: '-', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '2',
  motion: ['l'],
};
const jM = { 
  moveName: 'Jump Medium', 
  altName: 'jM', 
  damage: '600', 
  guard: 'High', 
  startup: '6', 
  active: '6', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '3',
  motion: ['m'],
};
const jH = { 
  moveName: 'Jump Heavy', 
  altName: 'jH', 
  damage: '800', 
  guard: 'High', 
  startup: '8', 
  active: '6', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '3',
  motion: ['h'],
};

const jU = { 
  moveName: 'Collapse (Conjure)', 
  altName: 'jU', 
  damage: '500', 
  guard: 'All', 
  startup: '12', 
  active: '4', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '1',
  motion: ['u'],
};

const s5U = { 
  moveName: 'Collapse (Conjure) (Air)', 
  altName: 'jU', 
  damage: '500', 
  guard: 'All', 
  startup: '11', 
  active: '4', 
  recovery: '6 (after landing)', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '3',
  motion: ['u'],
};

// unique action
const lv1U = { 
  moveName: 'Collapse (Fire) Lv1', 
  altName: '6U Lv1', 
  damage: '400', 
  guard: 'All', 
  startup: '18', 
  active: '-', 
  recovery: '45 (Entire move)', 
  onblock: '-8', 
  onhit: '-4',
  oncounterhit: '-2',
  clash: '-',
  motion: ['6', 'u'],
};
const lv2U = { 
  moveName: 'Collapse (Fire) Lv2', 
  altName: '6U Lv2', 
  damage: '600', 
  guard: 'All', 
  startup: '18', 
  active: '-', 
  recovery: '45 (Entire move)', 
  onblock: '0', 
  onhit: '+4',
  oncounterhit: '+4',
  clash: '-',
  motion: ['6', 'u'],
};
const lv3U = { 
  moveName: 'Collapse (Fire) Lv3', 
  altName: '6U Lv3', 
  damage: '700', 
  guard: 'All', 
  startup: '18', 
  active: '-', 
  recovery: '45 (Entire move)', 
  onblock: '+2', 
  onhit: '+6',
  oncounterhit: '+6',
  clash: '-',
  motion: ['6', 'u'],
};
const lv4U = { 
  moveName: 'Collapse (Fire) Lv4', 
  altName: '6U Lv4', 
  damage: '800', 
  guard: 'All', 
  startup: '18', 
  active: '-', 
  recovery: '45 (Entire move)',  
  onblock: '+4', 
  onhit: '+8',
  oncounterhit: '+8',
  clash: '-',
  motion: ['6', 'u'],
};
const lv5U = { 
  moveName: 'Collapse (Fire) Lv5', 
  altName: '6U Lv5', 
  damage: '1000', 
  guard: 'All', 
  startup: '18', 
  active: '-', 
  recovery: '45 (Entire move)', 
  onblock: '+7', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '-',
  motion: ['6', 'u'],
};

const airLv1U = { 
  moveName: 'Air Collapse (Fire) Lv1', 
  altName: '6U Lv1', 
  damage: '400', 
  guard: 'All', 
  startup: '22', 
  active: '-', 
  recovery: '9 (After landing)', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['6', 'u'],
};
const airLv2U = { 
  moveName: 'Air Collapse (Fire) Lv2', 
  altName: '6U Lv2', 
  damage: '600', 
  guard: 'All', 
  startup: '22', 
  active: '-', 
  recovery: '9 (After landing)', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['6', 'u'],
};
const airLv3U = { 
  moveName: 'Air Collapse (Fire) Lv3', 
  altName: '6U Lv3', 
  damage: '700', 
  guard: 'All', 
  startup: '22', 
  active: '-', 
  recovery: '9 (After landing)', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['6', 'u'],
};
const airLv4U = { 
  moveName: 'Air Collapse (Fire) Lv4', 
  altName: '6U Lv4', 
  damage: '800', 
  guard: 'All', 
  startup: '22', 
  active: '-', 
  recovery: '9 (After landing)', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['6', 'u'],
};
const airLv5U = { 
  moveName: 'Air Collapse (Fire) Lv5', 
  altName: '6U Lv5', 
  damage: '1000', 
  guard: 'All', 
  startup: '22', 
  active: '-', 
  recovery: '9 (After landing)', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['6', 'u'],
};


const groundThrow = { 
  moveName: 'Ground Throw', 
  damage: '1500', 
  guard: 'Throw', 
  startup: '7', 
  active: '3', 
  recovery: '31', 
  onblock: '-', 
  onhit: 'HKD (+36), +24 on delay tech',
  oncounterhit: '-',
  clash: '-',
  motion: ['l', 'm', 'or', 'l', 'u'],
};

const backThrow = { 
  moveName: 'Back Throw', 
  damage: '1500', 
  guard: 'Throw', 
  startup: '7', 
  active: '3', 
  recovery: '31', 
  onblock: '-', 
  onhit: 'HKD (+42), +24 on delay tech',
  oncounterhit: '-',
  clash: '-',
  motion: ['l', 'm', 'or', 'l', 'u'],
};

const airThrow = { 
  moveName: 'Air Throw', 
  damage: '1500', 
  guard: 'Throw', 
  startup: '5', 
  active: '5', 
  recovery: '6 (After landing)', 
  onblock: '-', 
  onhit: 'HKD (+44)',
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
const lTrap = { 
  moveName: 'L Mehen', 
  altName: '236L', 
  damage: '400', 
  guard: 'All', 
  startup: '50 ⇒ 589', 
  active: '6', 
  recovery: '33 (Entire move)', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['236', 'l', 'or', 'a'],
};
const mTrap = { 
  moveName: 'M Mehen', 
  altName: '236M', 
  damage: '400', 
  guard: 'All', 
  startup: '50 ⇒ 589', 
  active: '6', 
  recovery: '33 (Entire move)', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['236', 'm', 'or', 'a', 'm'],
};
const hTrap = { 
  moveName: 'H Mehen', 
  altName: '236H', 
  damage: '400x2', 
  guard: 'All', 
  startup: '38 ⇒ 589', 
  active: '6', 
  recovery: '33 (Entire move)',
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['236', 'h', 'or', 'a', 'h'],
};

const lTrapAir = { 
  moveName: 'Air L Mehen', 
  altName: '236L', 
  damage: '400', 
  guard: 'All', 
  startup: '39 ⇒ 578', 
  active: '6', 
  recovery: '4 (After landing)', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['236', 'l', 'or', 'a'],
};
const mTrapAir = { 
  moveName: 'Air M Mehen', 
  altName: '236M', 
  damage: '400', 
  guard: 'All', 
  startup: '39 ⇒ 578', 
  active: '6', 
  recovery: '4 (After landing)', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['236', 'm', 'or', 'a', 'm'],
};
const hTrapAir = { 
  moveName: 'Air H Mehen', 
  altName: '236H', 
  damage: '400x2', 
  guard: 'All', 
  startup: '39 ⇒ 578', 
  active: '6', 
  recovery: '4 (After landing)',
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['236', 'h', 'or', 'a', 'h'],
};

// dragon punches
const lUppercut = { 
  moveName: 'L Calculated', 
  altName: '623L', 
  damage: '1000', 
  guard: 'Mid', 
  startup: '20', 
  active: '5', 
  recovery: '27', 
  onblock: '-5', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '-',
  motion: ['623', 'l', 'or', '6', 'a'],
};
const mUppercut = { 
  moveName: 'M Calculated', 
  altName: '623M', 
  damage: '1000', 
  guard: 'Mid', 
  startup: '24', 
  active: '5', 
  recovery: '26', 
  onblock: '-4', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '-',
  motion: ['623', 'm', 'or', '6', 'a', 'm'],
};
const hUppercut = { 
  moveName: 'H Calculated', 
  altName: '623H', 
  damage: '1200', 
  guard: 'Mid', 
  startup: '2(0', 
  active: '5', 
  recovery: '27', 
  onblock: '-4', 
  onhit: 'HKD (+64)',
  oncounterhit: 'HKD (+70)',
  clash: '-',
  motion: ['623', 'h', 'or', '6', 'a', 'h'],
};

// rekka
const lRekka = { 
  moveName: 'L Alexandria', 
  altName: '214L', 
  damage: '1000', 
  guard: 'Mid', 
  startup: '15', 
  active: '10', 
  recovery: '16', 
  onblock: '-9', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '3',
  motion: ['214', 'l', 'or', '2', 'a'],
};
const mRekka = { 
  moveName: 'M Alexandria', 
  altName: '214M', 
  damage: '1200', 
  guard: 'Mid', 
  startup: '21', 
  active: '13', 
  recovery: '16', 
  onblock: '-12', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '4',
  motion: ['214', 'm', 'or', '4', 'a'],
};
const hRekka = { 
  moveName: 'H Alexandria', 
  altName: '214H', 
  damage: '1200', 
  guard: 'Mid', 
  startup: '12', 
  active: '13', 
  recovery: '16', 
  onblock: '-12', 
  onhit: 'HKD (+44)',
  oncounterhit: 'HKD (+48)',
  clash: '4',
  motion: ['214', 'h', 'or', '2', 'a', 'h'],
};

const lTeleport = {
  moveName: 'L Spare Body', 
  altName: '22L', 
  damage: '-', 
  guard: '-', 
  startup: '-', 
  active: '-', 
  recovery: '30 (Entire move)', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['2', '2', 'l', 'or', '2', 'a'],
};

const mTeleport = {
  moveName: 'M Spare Body', 
  altName: '22M', 
  damage: '-', 
  guard: '-', 
  startup: '-', 
  active: '-', 
  recovery: '39 (Entire move)',  
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['2', '2', 'm', 'or', '2', 'a', 'm'],
};

const hTeleport = {
  moveName: 'H Spare Body', 
  altName: '22H', 
  damage: '1000', 
  guard: 'All', 
  startup: '13', 
  active: '5', 
  recovery: '19', 
  onblock: '+1', 
  onhit: 'HKD (+59)',
  oncounterhit: 'HKD (+63)',
  clash: '-',
  motion: ['2', '2', 'h', 'or', '2', 'a', 'h'],
};

const lTeleportAir = {
  moveName: 'L Spare Body (Air)', 
  altName: '22L', 
  damage: '-', 
  guard: '-', 
  startup: '-', 
  active: '-', 
  recovery: '34 (Entire move)', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['2', '2', 'l', 'or', '2', 'a'],
};

const mTeleportAir = {
  moveName: 'M Spare Body (Air)', 
  altName: '22M', 
  damage: '-', 
  guard: '-', 
  startup: '-', 
  active: '-', 
  recovery: '39 (Entire move)',  
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['2', '2', 'm', 'or', '2', 'a', 'm'],
};

const hTeleportAir = {
  moveName: 'H Spare Body (Air)', 
  altName: '22H', 
  damage: '1000', 
  guard: 'All', 
  startup: '13', 
  active: '5', 
  recovery: '17', 
  onblock: '+3', 
  onhit: 'HKD',
  oncounterhit: 'HKD',
  clash: '-',
  motion: ['2', '2', 'h', 'or', '2', 'a', 'h'],
};

// skybound art
const sba = { 
  moveName: 'Ars Magna', 
  altName: '236236H', 
  damage: '2000, 300x5', 
  guard: 'All', 
  startup: '13', 
  active: '3x16 (48)', 
  recovery: '49', 
  onblock: '-27', 
  onhit: 'HKD (T:+45, S:+35)',
  oncounterhit: 'HKD (T:+45, S:+35)',
  clash: '-',
  motion: ['236', '236', 'h', 'or', '236', 'a'],
};
const ssba = { 
  moveName: 'Everything\'s Coming Up Cagliostro', 
  altName: '236236U', 
  damage: '4500', 
  guard: 'All', 
  startup: '13', 
  active: '3x6', 
  recovery: '48', 
  onblock: '-32', 
  onhit: 'HKD (T:+45, S:+40)',
  oncounterhit: 'HKD (T:+45, S:+40)',
  clash: '-',
  motion: ['236', '236', 'u', 'or', '236', 'a', 'u'],
};


export const cagInfo = [
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
  s5U,
  lv1U,
  lv2U,
  lv3U,
  lv4U,
  lv5U,
  airLv1U,
  airLv2U,
  airLv3U,
  airLv4U,
  airLv5U,
  groundThrow,
  backThrow,
  airThrow,
  ragingStrike,
  ragingChain,
  braveCounter,
  lTrap,
  mTrap,
  hTrap,
  lTrapAir,
  mTrapAir,
  hTrapAir,
  lUppercut,
  mUppercut,
  hUppercut,
  lRekka,
  mRekka,
  hRekka,
  lTeleport,
  mTeleport,
  hTeleport,
  lTeleportAir,
  mTeleportAir,
  hTeleportAir,
  sba,
  ssba
]