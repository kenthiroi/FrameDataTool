// FINAL 

const general = { char: "Belial", health: '10000', prejump: '4F', backdash: '26F' }

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
  oncounterhit: '+6',
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
  recovery: '12',
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
  startup: '9',
  active: '5',
  recovery: '19',
  onblock: '-5',
  onhit: '-1',
  oncounterhit: '+11',
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
  active: '5',
  recovery: '12',
  onblock: '-4',
  onhit: '0',
  oncounterhit: '+2',
  clash: '2',
  motion: ['l'],
};
const far5M = {
  moveName: 'Far Medium',
  altName: 'f5M',
  damage: '300, 500',
  guard: 'Mid',
  startup: '6',
  active: '5',
  recovery: '14',
  onblock: '-2',
  onhit: '+2',
  oncounterhit: '+2',
  clash: '3',
  motion: ['m'],
};
const far5H = {
  moveName: 'Far Heavy',
  altName: 'f5H',
  damage: '500, 500',
  guard: 'Mid',
  startup: '9',
  active: '2(13)2',
  recovery: '18',
  onblock: '-5',
  onhit: '0',
  oncounterhit: '0',
  clash: '4, 3',
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
  startup: '5',
  active: '3',
  recovery: '8',
  onblock: '0',
  onhit: '+4',
  oncounterhit: '+6',
  clash: '1',
  motion: ['2', 'l'],
};
const n2M = {
  moveName: 'Crouch Medium',
  altName: '2M',
  damage: '700',
  guard: 'Low',
  startup: '7',
  active: '3',
  recovery: '11',
  onblock: '+1',
  onhit: '+5',
  oncounterhit: '+9',
  clash: '3',
  motion: ['2', 'm'],
};
const n2H = {
  moveName: 'Crouch Heavy',
  altName: '2H',
  damage: '1000',
  guard: 'Mid',
  startup: '10',
  active: '6',
  recovery: '23',
  onblock: '-12',
  onhit: '-8',
  oncounterhit: '0',
  clash: '4',
  motion: ['2', 'h'],
};
const n2U = {
  moveName: 'Crouch Unique',
  altName: '2U',
  damage: '700',
  guard: 'Low',
  startup: '10',
  active: '6',
  recovery: '20',
  onblock: '-11',
  onhit: 'HKD (+44)',
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
  damage: '700', 
  guard: 'High', 
  startup: '10', 
  active: '6', 
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
  damage: '900', 
  guard: 'All', 
  startup: '23', 
  active: 'Til 1f after landing', 
  recovery: '18 (Whiff), 15 (Block)', 
  onblock: '-5', 
  onhit: '+13',
  oncounterhit: '+13',
  clash: '3',
  motion: ['u'],
};

// unique action
const lv1U = { 
  moveName: 'Give Daddy Some Sugar (Parry)', 
  altName: '5U', 
  damage: '-', 
  guard: 'All', 
  startup: '3', 
  active: '85', 
  recovery: '48', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['u'],
};
const lv2U = { 
  moveName: 'Give Daddy Some Sugar (Attack)', 
  altName: '5U', 
  damage: '200, 800', 
  guard: 'All', 
  startup: '-', 
  active: 'Til 2f after landing', 
  recovery: '11', 
  onblock: '-2', 
  onhit: 'HKD (+47)',
  oncounterhit: 'HKD (+47)',
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
  onhit: 'HKD (+44)',
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
  onhit: 'HKD (+38)',
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
  recovery: 'Til 6f after landing', 
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
  moveName: 'L Goetia', 
  altName: '236L', 
  damage: '800', 
  guard: 'All', 
  startup: '15', 
  active: '-', 
  recovery: '47', 
  onblock: '-10', 
  onhit: '-6',
  oncounterhit: '-4',
  clash: '-',
  motion: ['236', 'l', 'or', 'a'],
};
const mFireball = { 
  moveName: 'M Goetia', 
  altName: '236M', 
  damage: '800', 
  guard: 'All', 
  startup: '17', 
  active: '-', 
  recovery: '49', 
  onblock: '-10', 
  onhit: '-6',
  oncounterhit: '-4',
  clash: '-',
  motion: ['236', 'm', 'or', 'a', 'm'],
};
const hFireball = { 
  moveName: 'H Goetia', 
  altName: '236H', 
  damage: '300x3', 
  guard: 'All', 
  startup: '15', 
  active: '-', 
  recovery: '49', 
  onblock: '+2', 
  onhit: '+6',
  oncounterhit: '+6',
  clash: '-',
  motion: ['236', 'h', 'or', 'a', 'h'],
};

const lFireballFollowUp = {
  moveName: 'L Everyones A Little Crooked',
  altName: '236X->4L',
  damage: '250x3',
  guard: 'All',
  startup: '13',
  active: '-',
  recovery: '38',
  onblock: '+1',
  onhit: '+5',
  oncounterhit: '+5',
  clash: '-',
  motion: ['236', 'l', '4', 'l'],
}

const mFireballFollowUp = {
  moveName: 'M Everyones A Little Crooked',
  altName: '236X->4M',
  damage: '250x3',
  guard: 'All',
  startup: '13',
  active: '-',
  recovery: '38',
  onblock: '+1',
  onhit: '+5',
  oncounterhit: '+5',
  clash: '-',
  motion: ['236', 'l', '4', 'm'],
}

const hFireballFollowUp = {
  moveName: 'H Everyones A Little Crooked',
  altName: '236X->4H',
  damage: '150x5',
  guard: 'All',
  startup: '27',
  active: '-',
  recovery: '40',
  onblock: '+12',
  onhit: '+16',
  oncounterhit: '+16',
  clash: '-',
  motion: ['236', 'l', '4', 'h'],
}

// dragon punches
const lUppercut = { 
  moveName: 'L Notoria', 
  altName: '623L', 
  damage: '700, 300', 
  guard: 'All', 
  startup: '9', 
  active: '2(3)9', 
  recovery: '28', 
  onblock: '-20', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '-',
  motion: ['623', 'l', 'or', '6', 'a'],
};
const mUppercut = { 
  moveName: 'M Notoria', 
  altName: '623M', 
  damage: '1000, 500', 
  guard: 'All', 
  startup: '38', 
  active: '5', 
  recovery: '10', 
  onblock: '+2', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '3',
  motion: ['623', 'm', 'or', '6', 'a', 'm'],
};
const hUppercut = { 
  moveName: 'H Notoria', 
  altName: '623H', 
  damage: '600, 300, 500', 
  guard: 'Mid', 
  startup: '9', 
  active: '2(3)9(18(5)', 
  recovery: '24', 
  onblock: '-12', 
  onhit: 'HKD (+48)',
  oncounterhit: 'HKD (+48)',
  clash: '-',
  motion: ['623', 'h', 'or', '6', 'a', 'h'],
};

// rekka
const lRekka = { 
  moveName: 'L Asmodeus', 
  altName: '214L', 
  damage: '700, 500', 
  guard: 'All', 
  startup: '15', 
  active: '4', 
  recovery: '21', 
  onblock: '-6', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '3',
  motion: ['214', 'l', 'or', '2', 'a'],
};
const mRekka = { 
  moveName: 'M Asmodeus', 
  altName: '214M', 
  damage: '700, 700', 
  guard: 'All', 
  startup: '21', 
  active: '4', 
  recovery: '19', 
  onblock: '-4', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '4',
  motion: ['214', 'm', 'or', '4', 'a'],
};
const hRekka = { 
  moveName: 'H Asmodeus', 
  altName: '214H', 
  damage: '700, 600', 
  guard: 'All', 
  startup: '14', 
  active: '4', 
  recovery: '19', 
  onblock: '-4', 
  onhit: 'HKD (+63)',
  oncounterhit: 'HKD (+63)',
  clash: '-',
  motion: ['214', 'h', 'or', '2', 'a', 'h'],
};

const lCmdThrow = {
  moveName: "L Vassago",
  altName: '632146L',
  damage: '2000',
  guard: 'Throw',
  startup: '34',
  active: '3', 
  recovery: '36', 
  onblock: '-', 
  onhit: 'HKD (+40)',
  oncounterhit: '-',
  clash: '-',
}

const mCmdThrow = {
  moveName: "M Vassago",
  altName: '632146M',
  damage: '2500',
  guard: 'Throw',
  startup: '52',
  active: '3', 
  recovery: '36', 
  onblock: '-', 
  onhit: 'HKD (+40)',
  oncounterhit: '-',
  clash: '-',
}

const hCmdThrow = {
  moveName: "H Vassago",
  altName: '632146H',
  damage: '2000',
  guard: 'Throw',
  startup: '27 -> 82(Max)',
  active: '3', 
  recovery: '34', 
  onblock: '-', 
  onhit: 'HKD (+40)',
  oncounterhit: '-',
  clash: '-',
}

// skybound art
const sba = { 
  moveName: 'Legemeton', 
  altName: '236236H', 
  damage: '2500-3500', 
  guard: 'All', 
  startup: '13', 
  active: '4(18)9', 
  recovery: '30', 
  onblock: '-20', 
  onhit: 'HKD (Si: +30, Tc: +40)',
  oncounterhit: '-',
  clash: '-',
  motion: ['236', '236', 'h', 'or', '236', 'a'],
};
const ssba = { 
  moveName: 'Anagenesis', 
  altName: '236236U', 
  damage: '3500-4500', 
  guard: 'All', 
  startup: '13', 
  active: '3(12)3', 
  recovery: '45', 
  onblock: '-29', 
  onhit: 'HKD (S:+31, T:+41)',
  oncounterhit: '-',
  clash: '-',
  motion: ['236', '236', 'u', 'or', '236', 'a', 'u'],
};


export const belialInfo = [
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
  groundThrow,
  backThrow,
  airThrow,
  ragingStrike,
  ragingChain,
  braveCounter,
  lFireball,
  mFireball,
  hFireball,
  lFireballFollowUp,
  mFireballFollowUp,
  hFireballFollowUp,
  lUppercut,
  mUppercut,
  hUppercut,
  lRekka,
  mRekka,
  hRekka,
  lCmdThrow,
  mCmdThrow,
  hCmdThrow,
  sba,
  ssba
]