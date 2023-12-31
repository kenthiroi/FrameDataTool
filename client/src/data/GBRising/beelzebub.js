// FINAL 

const general = { char: "Beelzebub", health: '10000', prejump: '4F', backdash: '26F' }

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
  startup: '7',
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
  damage: '800, 200x2',
  guard: 'Mid',
  startup: '10',
  active: '6',
  recovery: '19',
  onblock: '-2',
  onhit: '+2',
  oncounterhit: '+2',
  clash: '5',
  motion: ['h'],
};

// auto combos
const auto1 = {
  moveName: 'Auto Combo 2nd hit',
  altName: 'cXX',
  damage: '200, 150',
  guard: 'Mid',
  startup: '9',
  active: '3',
  recovery: '16',
  onblock: '-3',
  onhit: '+1',
  oncounterhit: '+1',
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
  startup: '8',
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
  startup: '10',
  active: '9',
  recovery: '21',
  onblock: '-11',
  onhit: '-7',
  oncounterhit: '+1',
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
  startup: '7',
  active: '6',
  recovery: '14',
  onblock: '-5',
  onhit: '-1',
  oncounterhit: '+3',
  clash: '3',
  motion: ['2', 'm'],
};

const n2H = {
  moveName: 'Crouch Heavy',
  altName: '2H',
  damage: '1000',
  guard: 'Mid',
  startup: '12',
  active: '6[3,3]',
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
  startup: '9',
  active: '6',
  recovery: '18',
  onblock: '-9',
  onhit: 'HKD (+46)',
  oncounterhit: 'HKD (+50)',
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
  startup: '7', 
  active: '9', 
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
  damage: '400, 200x2', 
  guard: 'High', 
  startup: '9', 
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
  damage: '800', 
  guard: 'High', 
  startup: '11', 
  active: '12', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '3',
  motion: ['u'],
};

// unique action
const teleport = { 
  moveName: 'Shadowstep', 
  altName: '5U Teleport', 
  damage: '-', 
  guard: '-', 
  startup: '12', 
  active: '13', 
  recovery: '11', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['u'],
};

const groundThrow = { 
  moveName: 'Forward Throw', 
  damage: '1500', 
  guard: 'Throw', 
  startup: '7', 
  active: '3', 
  recovery: '31', 
  onblock: '-', 
  onhit: 'HKD (+43), +24 after delay tech',
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
  onhit: 'HKD (+41), +24 after delay tech',
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
  recovery: '6F after landing', 
  onblock: '-', 
  onhit: 'HKD (+47)',
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
const lFireballLvl1 = { 
  moveName: 'L Black Flies Lvl 1', 
  altName: '236L', 
  damage: '800', 
  guard: 'All', 
  startup: '16-30', 
  active: '-', 
  recovery: '44-58 (Entire move)', 
  onblock: '-4', 
  onhit: '0',
  oncounterhit: '+2',
  clash: '-',
  motion: ['236', 'l', 'or', 'a'],
};

const lFireballLvl2 = { 
  moveName: 'L Black Flies Lvl 2', 
  altName: '236L', 
  damage: '800, 100', 
  guard: 'All', 
  startup: '31', 
  active: '-', 
  recovery: '59 (Entire move)', 
  onblock: '+3', 
  onhit: '+7',
  oncounterhit: '+7',
  clash: '-',
  motion: ['236', 'l', 'or', 'a'],
};

const mFireballLvl1 = { 
  moveName: 'M Black Flies Lvl 1', 
  altName: '236M', 
  damage: '900, 100', 
  guard: 'All', 
  startup: '38-57', 
  active: '-', 
  recovery: '57-76 (Entire move)', 
  onblock: '+4', 
  onhit: '+12',
  oncounterhit: '+12',
  clash: '-',
  motion: ['236', 'm', 'or', 'a', 'm'],
};

const mFireballLvl2 = { 
  moveName: 'M Black Flies Lvl 2', 
  altName: '236M', 
  damage: '900, 100x2', 
  guard: 'All', 
  startup: '58-82', 
  active: '-', 
  recovery: '77-101 (Entire move)', 
  onblock: '+11', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '-',
  motion: ['236', 'm', 'or', 'a', 'm'],
};

const mFireballLvl3 = { 
  moveName: 'M Black Flies Lvl 3', 
  altName: '236M', 
  damage: '900, 100x4', 
  guard: 'All', 
  startup: '83', 
  active: '-', 
  recovery: '102 (Entire move)', 
  onblock: '-6', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '-',
  motion: ['236', 'm', 'or', 'a', 'm'],
};

const hFireballLvl1 = { 
  moveName: 'H Black Flies Lvl 1', 
  altName: '236H', 
  damage: '500x2, 100', 
  guard: 'All', 
  startup: '16,36->30,50', 
  active: '-', 
  recovery: '57-61 (Entire move)', 
  onblock: '+2', 
  onhit: 'HKD (+65)',
  oncounterhit: 'HKD (+65)',
  clash: '-',
  motion: ['236', 'h', 'or', 'a', 'h'],
};

const hFireballLvl2 = { 
  moveName: 'H Black Flies Lvl 2', 
  altName: '236H', 
  damage: '500, 100, 500, 100x2', 
  guard: 'All', 
  startup: '31,51->45,65', 
  active: '-', 
  recovery: '72-86', 
  onblock: '+2', 
  onhit: 'HKD (+73)',
  oncounterhit: 'HKD (+73)',
  clash: '-',
  motion: ['236', 'h', 'or', 'a', 'h'],
};

const hFireballLvl3 = { 
  moveName: 'H Black Flies Lvl 3', 
  altName: '236H', 
  damage: '500, 100x2, 500, 100x4', 
  guard: 'All', 
  startup: '46,66', 
  active: '-',
  recovery: '87', 
  onblock: '+23', 
  onhit: 'HKD (+88)',
  oncounterhit: 'HKD (+88)',
  clash: '-',
  motion: ['236', 'h', 'or', 'a', 'h'],
};

// dragon punches
const lUppercut = { 
  moveName: 'L Langelaan Field', 
  altName: '623L', 
  damage: '1000',
  guard: 'All', 
  startup: '11', 
  active: '6', 
  recovery: '33', 
  onblock: '-24', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '-',
  motion: ['623', 'l', 'or', '6', 'a'],
};
const mUppercut = { 
  moveName: 'M Langelaan Field', 
  altName: '623M', 
  damage: '1000', 
  guard: 'All', 
  startup: '19', 
  active: '15', 
  recovery: '24', 
  onblock: '-24', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '-',
  motion: ['623', 'm', 'or', '6', 'a', 'm'],
};
const hUppercut = { 
  moveName: 'H Langelaan Field', 
  altName: '623H', 
  damage: '1200', 
  guard: 'Mid', 
  startup: '11', 
  active: '6', 
  recovery: '37', 
  onblock: '-24', 
  onhit: 'HKD (+35)',
  oncounterhit: 'HKD (+39)',
  clash: '-',
  motion: ['623', 'h', 'or', '6', 'a', 'h'],
};

// rekka
const lRekka = { 
  moveName: 'L Chaoscalibur', 
  altName: '214L', 
  damage: '200x2, 600', 
  guard: 'All', 
  startup: '16', 
  active: '3,2x2', 
  recovery: '23', 
  onblock: '-6', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '5',
  motion: ['214', 'l', 'or', '2', 'a'],
};

const mRekka = { 
  moveName: 'M Chaoscalibur', 
  altName: '214M', 
  damage: '250, 300, 700', 
  guard: 'Low', 
  startup: '20', 
  active: '2x3', 
  recovery: '22', 
  onblock: '-5', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '5',
  motion: ['214', 'm', 'or', '4', 'a'],
};

const hRekka = { 
  moveName: 'H Chaoscalibur', 
  altName: '214H', 
  damage: '200x6', 
  guard: 'Low*3, Mid*3', 
  startup: '14', 
  active: '2x3, 2x3', 
  recovery: '20', 
  onblock: '-3', 
  onhit: 'HKD (+64)',
  oncounterhit: 'HKD (+64)',
  clash: '5',
  motion: ['214', 'h', 'or', '2', 'a', 'h'],
};

const lVacuum = {
  moveName: "L Karma",
  altName: '22L',
  damage: '100',
  guard: 'All',
  startup: '25',
  active: '27', 
  recovery: '14', 
  onblock: '-2', 
  onhit: '+22',
  oncounterhit: '+26',
  clash: '5',
  motion: ['2', '2', 'l', 'or', '2', 'a'],
}

const mVacuum = {
  moveName: "M Karma",
  altName: '22M',
  damage: '100',
  guard: 'All',
  startup: '40',
  active: '27', 
  recovery: '14', 
  onblock: '-2', 
  onhit: '+22',
  oncounterhit: '+26',
  clash: '5',
  motion: ['2', '2', 'm', 'or', '2', 'm', 'a'],
}

const hVacuum = {
  moveName: "H Karma",
  altName: '22H',
  damage: '100',
  guard: 'All',
  startup: '25',
  active: '27', 
  recovery: '19', 
  onblock: '+2', 
  onhit: '+26',
  oncounterhit: '+30',
  clash: '5',
  motion: ['2', '2', 'h', 'or', '2', 'h', 'a'],
}

const lDivekick = {
  moveName: 'L Unisonic',
  altName: 'j214L',
  damage: '900',
  guard: 'All',
  startup: '22',
  active: '-',
  recovery: '16',
  onblock: '-',
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '3',
  motion: ['214', 'l', 'or', 'a'],
}

const mDivekick = {
  moveName: 'M Unisonic',
  altName: 'j214M',
  damage: '1200',
  guard: 'All',
  startup: '32',
  active: '-',
  recovery: '16',
  onblock: '-',
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '3',
  motion: ['214', 'm', 'or', 'm', 'a'],
}

const hDivekick = {
  moveName: 'H Unisonic',
  altName: 'j214H',
  damage: '800, 400',
  guard: 'All',
  startup: '13',
  active: '-',
  recovery: '16',
  onblock: '-',
  onhit: 'HKD (+78)',
  oncounterhit: 'HKD (+78)',
  clash: '3',
  motion: ['214', 'h', 'or', 'h', 'a'],
}

// skybound art
const sba = { 
  moveName: 'Black Spear', 
  altName: '236236H', 
  damage: '2000-2500', 
  guard: 'All', 
  startup: '12', 
  active: '-', 
  recovery: '98 (Entire move)', 
  onblock: '-34', 
  onhit: 'HKD (T:+42, S:+32)',
  oncounterhit: 'HKD (T:+42, S:+32)',
  clash: '-',
  motion: ['236', '236', 'h', 'or', '236', 'a'],
};

const chargedSba = { 
  moveName: 'Black Spear', 
  altName: '236236[H]', 
  damage: '100x1~11, 2000-2500', 
  guard: 'Mid*1~11, All', 
  startup: '12', 
  active: '-', 
  recovery: '98 (Entire move)', 
  onblock: '-34', 
  onhit: 'HKD (T:+42, S:+32)',
  oncounterhit: 'HKD (T:+42, S:+32)',
  clash: '-',
  motion: ['236', '236', 'h', 'or', '236', 'a'],
};

const cmdGrabSba = { 
  moveName: 'Anthem', 
  altName: '214214H', 
  damage: '2500-3000', 
  guard: 'All', 
  startup: '13', 
  active: '2', 
  recovery: '71', 
  onblock: '-', 
  onhit: 'HKD (T:+35, S:+25)',
  oncounterhit: 'HKD (T:+35, S:+25)',
  clash: '-',
  motion: ['214', '214', 'h', 'or', '214', 'a'],
};

const ssba = { 
  moveName: 'Chaos Legion', 
  altName: '236236U', 
  damage: '3500-4500', 
  guard: 'Throw/All', 
  startup: '15', 
  active: '6x5', 
  recovery: '39', 
  onblock: '-26', 
  onhit: 'HKD (T:+50, S:+40)',
  oncounterhit: '-',
  clash: '-',
  motion: ['236', '236', 'u', 'or', '236', 'a', 'u'],
};


export const bubzInfo = [
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
  teleport,
  groundThrow,
  backThrow,
  airThrow,
  ragingStrike,
  ragingChain,
  braveCounter,
  lFireballLvl1,
  lFireballLvl2,
  mFireballLvl1,
  mFireballLvl2,
  mFireballLvl3,
  hFireballLvl1,
  hFireballLvl2,
  hFireballLvl3,
  lUppercut,
  mUppercut,
  hUppercut,
  lRekka,
  mRekka,
  hRekka,
  lVacuum,
  mVacuum,
  hVacuum,
  lDivekick,
  mDivekick,
  hDivekick,
  sba,
  chargedSba,
  cmdGrabSba,
  ssba
]