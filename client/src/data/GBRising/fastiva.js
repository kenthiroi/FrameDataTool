
// FRAME DATA UNFINISHED 

const general = { char: "Ladiva", health: '11000', prejump: '4F', backdash: '22F' }

// close normals
const closeL = {
  moveName: 'Close Light',
  altName: 'cL',
  damage: '400',
  guard: 'Mid',
  startup: '6',
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
  damage: '800',
  guard: 'Mid',
  startup: '7',
  active: '1',
  recovery: '14',
  onblock: '0',
  onhit: '+4',
  oncounterhit: '+8',
  clash: '3',
  motion: ['m'],
};
const closeH = {
  moveName: 'Close Heavy',
  altName: 'cH',
  damage: '1200',
  guard: 'Mid',
  startup: '12',
  active: '6',
  recovery: '15',
  onblock: '-2',
  onhit: '+2',
  oncounterhit: '+14',
  clash: '5',
  motion: ['h'],
};

// auto combos
const auto1 = {
  moveName: 'Auto Combo 2nd hit',
  altName: 'cXX',
  damage: '400',
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
  damage: '400',
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
  recovery: '8',
  onblock: '+2',
  onhit: '+6',
  oncounterhit: '+8',
  clash: '2',
  motion: ['l'],
};
const far5M = {
  moveName: 'Far Medium',
  altName: 'f5M',
  damage: '700',
  guard: 'Mid',
  startup: '8',
  active: '3',
  recovery: '18',
  onblock: '-6',
  onhit: '-2',
  oncounterhit: '+6',
  clash: '4',
  motion: ['m'],
};
const far5H = {
  moveName: 'Far Heavy',
  altName: 'f5H',
  damage: '1100',
  guard: 'Mid',
  startup: '6',
  active: '3',
  recovery: '8',
  onblock: '+2',
  onhit: '+6',
  oncounterhit: '+8',
  clash: '1',
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
  guard: 'Mid',
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
  guard: 'Low',
  startup: '8',
  active: '5',
  recovery: '12',
  onblock: '-2',
  onhit: '+2',
  oncounterhit: '+6',
  clash: '3',
  motion: ['2', 'm'],
};
const n2H = {
  moveName: 'Crouch Heavy',
  altName: '2H',
  damage: '600, 500',
  guard: 'Mid',
  startup: '11',
  active: '2,2',
  recovery: '23',
  onblock: '-8',
  onhit: '-4',
  oncounterhit: '-4',
  clash: '4',
  motion: ['2', 'h'],
};
const n2U = {
  moveName: 'Crouch Unique',
  altName: '2U',
  damage: '900',
  guard: 'Low',
  startup: '7',
  active: '6',
  recovery: '28',
  onblock: '-19',
  onhit: 'HKD (+36)',
  oncounterhit: 'HKD (+44)',
  clash: '4',
  motion: ['2', 'u'],
};

// jump normals
const jL = { 
  moveName: 'Jump Light', 
  altName: 'jL', 
  damage: '500', 
  guard: 'High', 
  startup: '5', 
  active: '6', 
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
  damage: '700', 
  guard: 'High', 
  startup: '7', 
  active: '10', 
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
  damage: '900', 
  guard: 'High', 
  startup: '11', 
  active: '8', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '4',
  motion: ['h'],
};
const jU = { 
  moveName: 'Jump Unique', 
  altName: 'jU', 
  damage: '800', 
  guard: 'High', 
  startup: '12', 
  active: '16', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '4',
  motion: ['u'],
};

// unique action
const throw5U = { 
  moveName: 'Love Grapple', 
  altName: '5U', 
  damage: '1000', 
  guard: 'Throw', 
  startup: '34-40', 
  active: '3', 
  recovery: '32', 
  onblock: 'HKD (+52)', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
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
  onhit: '+3',
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
  onhit: 'HKD (+54)',
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
  onhit: 'HKD (+56)',
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

// SPDs
const lSPD = { 
  moveName: 'L Jewel Resort Screwdriver', 
  altName: '360L', 
  damage: '2000', 
  guard: 'Throw', 
  startup: '6', 
  active: '3', 
  recovery: '38', 
  onblock: '-', 
  onhit: 'HKD (+46)',
  oncounterhit: '-',
  clash: '-',
  motion: ['2', '6', '8', '4', 'l', 'or', 'a'],
};
const mSPD = { 
  moveName: 'M Jewel Resort Screwdriver', 
  altName: '360M', 
  damage: '2500', 
  guard: 'Throw', 
  startup: '9', 
  active: '3', 
  recovery: '38', 
  onblock: '-', 
  onhit: 'HKD (+56)',
  oncounterhit: '-',
  clash: '-',
  motion: ['2', '6', '8', '4', 'm', 'or', 'a', 'm'],
};
const hSPD = { 
  moveName: 'H Jewel Resort Screwdriver', 
  altName: '360H', 
  damage: '3000', 
  guard: 'Throw', 
  startup: '6', 
  active: '3', 
  recovery: '38', 
  onblock: '-', 
  onhit: 'HKD (+56)',
  oncounterhit: '-',
  clash: '-',
  motion: ['2', '6', '8', '4', 'h', 'or', 'a', 'h'],
};

const lAirSPD = { 
  moveName: 'L Leg Drop of Adoration', 
  altName: 'j360L', 
  damage: '2000', 
  guard: 'Throw', 
  startup: '7', 
  active: '3', 
  recovery: '16 (On landing)', 
  onblock: '-', 
  onhit: 'HKD (+46)',
  oncounterhit: '-',
  clash: '-',
  motion: ['2', '6', '8', '4', 'or', 'a'],
};
const mAirSPD = { 
  moveName: 'M Leg Drop of Adoration', 
  altName: 'j360M', 
  damage: '2500', 
  guard: 'Throw', 
  startup: '9', 
  active: '3', 
  recovery: '16 (On landing)', 
  onblock: '-', 
  onhit: 'HKD (+56)',
  oncounterhit: '-',
  clash: '-',
  motion: ['2', '6', '8', '4', 'm', 'or', 'a', 'm'],
};
const hAirSPD = { 
  moveName: 'H Leg Drop of Adoration', 
  altName: 'j360H', 
  damage: '3000', 
  guard: 'Throw', 
  startup: '4', 
  active: '3', 
  recovery: '16 (On landing)', 
  onblock: '-', 
  onhit: 'HKD (+57)',
  oncounterhit: '-',
  clash: '-',
  motion: ['2', '6', '8', '4', 'h', 'or', 'a', 'h'],
};

// ground airthrow
const lAirThrow = { 
  moveName: 'L Devoted Body Slam', 
  altName: '623L', 
  damage: '1500',
  guard: 'Throw', 
  startup: '7', 
  active: '5', 
  recovery: '22', 
  onblock: '-', 
  onhit: 'HKD (+50)',
  oncounterhit: '-',
  clash: '-',
  motion: ['623', 'l', 'or', '6', 'a'],
};
const mAirThrow = { 
  moveName: 'M Devoted Body Slam', 
  altName: '623M', 
  damage: '2000', 
  guard: 'Throw', 
  startup: '12', 
  active: '5', 
  recovery: '22', 
  onblock: '-', 
  onhit: 'HKD (+57)',
  oncounterhit: '-',
  clash: '-',
  motion: ['623', 'm', 'or', '6', 'a', 'm'],
};
const hAirThrow = { 
  moveName: 'H Devoted Body Slam', 
  altName: '623H', 
  damage: '2500', 
  guard: 'Throw', 
  startup: '10', 
  active: '5', 
  recovery: '22', 
  onblock: '-', 
  onhit: 'HKD (+57)',
  oncounterhit: '-',
  clash: '-',
  motion: ['623', 'h', 'or', '6', 'a', 'h'],
};

// headbutt
const lHeadbutt = {
  moveName: 'L Headbutt of Love', 
  altName: '236L', 
  damage: '1000', 
  guard: 'Mid', 
  startup: '18', 
  active: '3', 
  recovery: '14', 
  onblock: '-2', 
  onhit: '+3',
  oncounterhit: '+7',
  clash: '3',
  motion: ['236', 'l', 'or', '6', 'a'],
};
const mHeadbutt = {
  moveName: 'M Headbutt of Love', 
  altName: '236M', 
  damage: '1200', 
  guard: 'Mid', 
  startup: '28', 
  active: '6', 
  recovery: '11', 
  onblock: '+2', 
  onhit: '+7',
  oncounterhit: '+11',
  clash: '5',
  motion: ['236', 'm', 'or', '6', 'm', 'a'],
};
const hHeadbutt = {
  moveName: 'H Headbutt of Love', 
  altName: '236H', 
  damage: '500', 
  guard: 'Mid', 
  startup: '18', 
  active: '6', 
  recovery: '11', 
  onblock: '+2', 
  onhit: '+12',
  oncounterhit: '+16',
  clash: '5',
  motion: ['236', 'h', 'or', '6', 'h', 'a'],
};
const hHeadbutt2 = {
  moveName: 'H Headbutt of Love (2nd hit)', 
  altName: '236H > 6H', 
  damage: '700', 
  guard: 'Mid', 
  startup: '17', 
  active: '6', 
  recovery: '13', 
  onblock: '0', 
  onhit: '+10',
  oncounterhit: '+14',
  clash: '5',
  motion: ['236', 'h', '6', 'h', 'or', '6', 'h', 'a', '6', 'h'],
};
const hHeadbutt3 = {
  moveName: 'H Headbutt of Love (3rd hit)', 
  altName: '236H > 6H > 6H', 
  damage: '1000', 
  guard: 'Mid', 
  startup: '17', 
  active: '6', 
  recovery: '15', 
  onblock: '-2', 
  onhit: 'HKD (+32)',
  oncounterhit: 'HKD (+36)',
  clash: '5',
  motion: ['236', 'h', '6', 'h', '6', 'h', 'or', '6', 'h', 'a', '6', 'h', '6', 'h'],
};

// rekka
const lRekka = { 
  moveName: 'L Elegant Lariat', 
  altName: '214L', 
  damage: '1200', 
  guard: 'Mid', 
  startup: '18', 
  active: '6', 
  recovery: '21', 
  onblock: '+5', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '3',
  motion: ['214', 'l', 'or', '4', 'a'],
};
const mRekka = { 
  moveName: 'M Elegant Lariat', 
  altName: '214M', 
  damage: '1500', 
  guard: 'Mid', 
  startup: '34', 
  active: '6', 
  recovery: '18', 
  onblock: '+6', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '3',
  motion: ['214', 'm', 'or', '4', 'a', 'm'],
};
const hRekka = { 
  moveName: 'H Elegant Lariat', 
  altName: '214H', 
  damage: '1300', 
  guard: 'Mid', 
  startup: '18', 
  active: '6', 
  recovery: '21', 
  onblock: '+5', 
  onhit: 'HKD (+62)',
  onhit: 'HKD (+66)',
  clash: '4',
  motion: ['214', 'h', 'or', '4', 'a', 'h'],
};

// skybound art
const sba = { 
  moveName: 'Maximum Love Bomb (Strike)', 
  altName: '236236H', 
  damage: '3300-3600', 
  guard: 'Mid', 
  startup: '15', 
  active: '6', 
  recovery: '24', 
  onblock: '-11', 
  onhit: 'HKD (+18)',
  oncounterhit: 'HKD (+18)',
  clash: '-',
  motion: ['236', '236', 'h', 'or', '236', 'a'],
};
const throwsba = { 
  moveName: 'Maximum Love Bomb (Throw)', 
  altName: '214214H', 
  damage: '4000', 
  guard: 'Throw', 
  startup: '9', 
  active: '2', 
  recovery: '39', 
  onblock: '-', 
  onhit: 'HKD (+18)',
  oncounterhit: '-',
  clash: '-',
  motion: ['214', '214', 'h', 'or', '214', 'a'],
};
const ssba = { 
  moveName: 'The Shape of Love', 
  altName: '720U', 
  damage: '5000', 
  guard: 'Throw', 
  startup: '9', 
  active: '2', 
  recovery: '39', 
  onblock: '-', 
  onhit: 'HKD (+17)',
  oncounterhit: '-',
  clash: '-',
  motion: ['2', '6', '8', '4', '2', '6', '8', '4', 'u', 'or', '236', 'a', 'u'],
};


export const fastivaInfo = [
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
  throw5U,
  groundThrow,
  backThrow,
  airThrow,
  ragingStrike,
  ragingChain,
  braveCounter,
  lSPD,
  mSPD,
  hSPD,
  lAirSPD,
  mAirSPD,
  hAirSPD,
  lAirThrow,
  mAirThrow,
  hAirThrow,
  lHeadbutt,
  mHeadbutt,
  hHeadbutt,
  hHeadbutt2,
  hHeadbutt3,
  lRekka,
  mRekka,
  hRekka,
  throwsba,
  sba,
  ssba
]