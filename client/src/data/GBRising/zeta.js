// FINAL 

const general = { char: "Zeta", health: '10000', prejump: '4F', backdash: '22F' }

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
  damage: '1200',
  guard: 'Mid',
  startup: '9',
  active: '6',
  recovery: '17',
  onblock: '-4',
  onhit: '0',
  oncounterhit: '+12',
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
  damage: '350',
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
  recovery: '15',
  onblock: '-5',
  onhit: '-1',
  oncounterhit: '+1',
  clash: '2',
  motion: ['l'],
};
const far5M = {
  moveName: 'Far Medium',
  altName: 'f5M',
  damage: '700',
  guard: 'Mid',
  startup: '10',
  active: '4',
  recovery: '17',
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
  onblock: '-7',
  onhit: '-3',
  oncounterhit: '+5',
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
  startup: '9',
  active: '6',
  recovery: '12',
  onblock: '-3',
  onhit: '+1',
  oncounterhit: '+5',
  clash: '3',
  motion: ['2', 'm'],
};
const n2H = {
  moveName: 'Crouch Heavy',
  altName: '2H',
  damage: '1000',
  guard: 'Mid',
  startup: '11',
  active: '5',
  recovery: '24',
  onblock: '-12',
  onhit: '-8',
  oncounterhit: '0',
  clash: '4',
  motion: ['2', 'h'],
};
const n2U = {
  moveName: 'Crouch Unique',
  altName: '2U',
  damage: '300, 600',
  guard: 'Low',
  startup: '7',
  active: '3(15)3',
  recovery: '19',
  onblock: '-7',
  onhit: 'HKD (+48)',
  oncounterhit: 'HKD (+48)',
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
  damage: '550', 
  guard: 'High', 
  startup: '7', 
  active: '6', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '2',
  motion: ['m'],
};
const jH = { 
  moveName: 'Jump Heavy', 
  altName: 'jH', 
  damage: '800', 
  guard: 'High', 
  startup: '7', 
  active: '9', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '3',
  motion: ['h'],
};
const jU = { 
  moveName: 'Jump Unique', 
  altName: 'jU', 
  damage: '700', 
  guard: 'High', 
  startup: '5', 
  active: '-', 
  recovery: '-', 
  onblock: '+9', 
  onhit: '+9',
  oncounterhit: '+13',
  clash: '2',
  motion: ['u'],
};

// unique action
const lv1U = { 
  moveName: 'Signo Drive', 
  altName: '5U', 
  damage: '300, 100xN', 
  guard: 'Mid', 
  startup: '8', 
  active: '3(7)3xN', 
  recovery: '18', 
  onblock: '-2', 
  onhit: '+2',
  oncounterhit: '+2',
  clash: '3,2xN',
  motion: ['u'],
};

const groundThrow = { 
  moveName: 'Ground Throw', 
  damage: '1500', 
  guard: 'Throw', 
  startup: '7', 
  active: '3', 
  recovery: '31', 
  onblock: '-', 
  onhit: 'HKD (+51)',
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
  onhit: 'HKD (+39)',
  oncounterhit: '-',
  clash: '-',
  motion: ['4', 'l', 'm', 'or', '4', 'l', 'u'],
};
const airThrow = { 
  moveName: 'Air Throw', 
  damage: '1500', 
  guard: 'Throw', 
  startup: '5', 
  active: '5', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
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
  moveName: 'L Infinite Wonders', 
  altName: '236L', 
  damage: '700', 
  guard: 'All', 
  startup: '20', 
  active: '12', 
  recovery: '22', 
  onblock: '-7', 
  onhit: '-3',
  oncounterhit: '-1',
  clash: '-',
  motion: ['236', 'l', 'or', 'a'],
};
const mFireball = { 
  moveName: 'M Infinite Wonders', 
  altName: '236M', 
  damage: '900', 
  guard: 'All', 
  startup: '28⇒61', 
  active: '12', 
  recovery: '22', 
  onblock: '-7', 
  onhit: '-3',
  oncounterhit: '-1',
  clash: '-',
  motion: ['236', 'm', 'or', 'a', 'm'],
};
const hFireball = { 
  moveName: 'H Infinite Wonders', 
  altName: '236H', 
  damage: '200, 700', 
  guard: 'All', 
  startup: '18', 
  active: '24', 
  recovery: '22', 
  onblock: '-5', 
  onhit: 'HKD (+46)',
  oncounterhit: 'HKD (+46)',
  clash: '-',
  motion: ['236', 'h', 'or', 'a', 'h'],
};

// dragon punches
const lSpear = { 
  moveName: 'L Spear of Arvess', 
  altName: '66L', 
  damage: '600', 
  guard: 'Mid', 
  startup: '16', 
  active: '7', 
  recovery: '19', 
  onblock: '-9', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '3',
  motion: ['6', '6', 'l', 'or', '6', 'a'],
};
const mSpear = { 
  moveName: 'M Spear of Arvess', 
  altName: '66M', 
  damage: '800', 
  guard: 'Mid', 
  startup: '19', 
  active: '12', 
  recovery: '19', 
  onblock: '-14', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '3',
  motion: ['6', '6', 'm', 'or', '6', 'a', 'm'],
};
const hSpear = { 
  moveName: 'H Spear of Arvess', 
  altName: '66H', 
  damage: '600', 
  guard: 'Mid', 
  startup: '15', 
  active: '12', 
  recovery: '19', 
  onblock: '-14', 
  onhit: 'HKD (+45)',
  oncounterhit: 'HKD (+49)',
  clash: '4',
  motion: ['6', '6', 'h', 'or', '6', 'a', 'h'],
};
const lSpearRise = { 
  moveName: 'L Spear of Arvess (Rise)', 
  altName: '22L', 
  damage: '800', 
  guard: 'Mid', 
  startup: '12', 
  active: '12', 
  recovery: '43', 
  onblock: '-38', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '3',
  motion: ['2', '2', 'l', 'or', '2', 'a'],
};
const mSpearRise = { 
  moveName: 'M Spear of Arvess (Rise)', 
  altName: '22M', 
  damage: '1000', 
  guard: 'Mid', 
  startup: '12', 
  active: '12', 
  recovery: '44', 
  onblock: '-39', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '3',
  motion: ['2', '2', 'm', 'or', '2', 'a', 'm'],
};
const hSpearRise = { 
  moveName: 'H Spear of Arvess (Rise)', 
  altName: '22H', 
  damage: '800', 
  guard: 'Mid', 
  startup: '12', 
  active: '12', 
  recovery: '43', 
  onblock: '-38', 
  onhit: 'HKD (+37)',
  oncounterhit: 'HKD (+41)',
  clash: '4',
  motion: ['2', '2', 'h', 'or', '2', 'a', 'h'],
};
const lSpearFall = { 
  moveName: 'L Spear of Arvess (Fall)', 
  altName: 'j22L', 
  damage: '800', 
  guard: 'All', 
  startup: '18', 
  active: '-', 
  recovery: '15', 
  onblock: '-', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '2',
  motion: ['2', '2', 'l', 'or', '2', 'a'],
};
const mSpearFall = { 
  moveName: 'M Spear of Arvess (Fall)', 
  altName: 'j22M', 
  damage: '800', 
  guard: 'All', 
  startup: '18', 
  active: '-', 
  recovery: '15', 
  onblock: '-', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '2',
  motion: ['2', '2', 'm', 'or', '2', 'a', 'm'],
};
const hSpearFall = { 
  moveName: 'H Spear of Arvess (Fall)', 
  altName: 'j22H', 
  damage: '800', 
  guard: 'All', 
  startup: '18', 
  active: '-', 
  recovery: '15', 
  onblock: '-', 
  onhit: 'HKD',
  oncounterhit: 'HKD',
  clash: '3',
  motion: ['2', '2', 'h', 'or', '2', 'a', 'h'],
};

// Parry
const lParry = { 
  moveName: 'L Rhapsody', 
  altName: '214L', 
  damage: '-', 
  guard: '-', 
  startup: '3', 
  active: '40', 
  recovery: '21', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['214', 'l', 'or', '4', 'a'],
};
const mParry = { 
  moveName: 'M Rhapsody', 
  altName: '214M', 
  damage: '-', 
  guard: '-', 
  startup: '3', 
  active: '40', 
  recovery: '21', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['214', 'm', 'or', '4', 'a'],
};
const lParryFollowup = {
  moveName: 'Crimson Cleave', 
  altName: '214X -> L', 
  damage: '1000', 
  guard: 'Mid', 
  startup: '15', 
  active: '3', 
  recovery: '23', 
  onblock: '-9', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '4',
  motion: ['214', 'l', 'l', 'or', '4', 'a', 'l'],
}
const mParryFollowup = {
  moveName: 'Rising Split', 
  altName: '214X -> M', 
  damage: '1000', 
  guard: 'Mid', 
  startup: '9', 
  active: '6', 
  recovery: '20', 
  onblock: '-9', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '4',
  motion: ['214', 'l', 'm', 'or', '4', 'a', 'm'],
}
const hParryFollowup = {
  moveName: 'Knee Assault', 
  altName: '214X -> H', 
  damage: '1000', 
  guard: 'Mid', 
  startup: '8', 
  active: '4', 
  recovery: '16', 
  onblock: '-5', 
  onhit: 'KD (+34)',
  oncounterhit: 'KD',
  clash: '3',
  motion: ['214', 'l', 'h', 'or', '4', 'a', 'h'],
}
const hParry = { 
  moveName: 'H Rhapsody', 
  altName: '214H', 
  damage: '-', 
  guard: '-', 
  startup: '1', 
  active: '42', 
  recovery: '21', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['214', 'h', 'or', '4', 'a', 'h'],
};

// skybound art
const sba = { 
  moveName: 'Resolute Strike', 
  altName: '236236H', 
  damage: '2500-3500', 
  guard: 'Mid', 
  startup: '14', 
  active: '9', 
  recovery: '33', 
  onblock: '-21', 
  onhit: 'HKD (S:+33, T:+43)',
  oncounterhit: 'HKD (S:+33, T:+43)',
  clash: '-',
  motion: ['236', '236', 'h', 'or', '236', 'a'],
};
const airSba = { 
  moveName: 'Resolute Strike (Air)', 
  altName: 'j236236H', 
  damage: '2500-3500', 
  guard: 'Mid', 
  startup: '12', 
  active: '-', 
  recovery: '35', 
  onblock: '-13', 
  onhit: 'HKD',
  oncounterhit: 'HKD',
  clash: '-',
  motion: ['236', '236', 'h', 'or', '236', 'a'],
};
const ssba = { 
  moveName: 'Sirius Roar', 
  altName: '236236U', 
  damage: '3500-4500', 
  guard: 'All', 
  startup: '13', 
  active: '6,2,2,2', 
  recovery: '61', 
  onblock: '-51', 
  onhit: 'HKD (S:+40, T:+50)',
  oncounterhit: 'HKD (S:+40, T:+50)',
  clash: '-',
  motion: ['236', '236', 'u', 'or', '236', 'a', 'u'],
};


export const zetaInfo = [
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
  groundThrow,
  backThrow,
  airThrow,
  ragingStrike,
  ragingChain,
  braveCounter,
  lFireball,
  mFireball,
  hFireball,
  lSpear,
  mSpear,
  hSpear,
  lSpearRise,
  mSpearRise,
  hSpearRise,
  lSpearFall,
  mSpearFall,
  hSpearFall,
  lParry,
  mParry,
  hParry,
  lParryFollowup,
  mParryFollowup,
  hParryFollowup,
  sba,
  airSba,
  ssba
]