// template 

const general = { char: "Isla", health: '9000', prejump: 4, backdash: 26 }

// template move
const closeA = {
  moveName: 'Close A',
  altName: 'cl.A',
  damage: 25,
  guard: 'Mid',
  cancels: ['cmd'],
  startup: 4,
  active: 4,
  recovery: 6,
  onblock: 3,
  onhit: 5,
  stun: 30,
  guardDmg: 60,
  motion: ['a'],
  description: ''
};

const closeB = {
  moveName: 'Close B',
  altName: 'cl.B',
  damage: 30,
  guard: 'Low',
  cancels: ['cmd'],
  startup: 5,
  active: 4,
  recovery: 8,
  onblock: 1,
  onhit: 3,
  stun: 30,
  guardDmg: 60,
  motion: ['b'],
  description: ''
};

const closeC = {
  moveName: 'Close C',
  altName: 'cl.C',
  damage: 70,
  guard: 'Mid',
  cancels: ['cmd'],
  startup: 5,
  active: 4,
  recovery: 16,
  onblock: -1,
  onhit: 1,
  stun: 70,
  guardDmg: 120,
  motion: ['c'],
  description: ''
};

const closeD = {
  moveName: 'Close D',
  DltName: 'cl.D',
  damage: 80,
  guard: 'Mid',
  cancels: ['cmd'],
  startup: 6,
  active: 4,
  recovery: 18,
  onblock: -3,
  onhit: -1,
  stun: 70,
  guardDmg: 120,
  motion: ['d'],
  description: ''
};

// Far Normals

const farA = {
  moveName: 'Far A',
  altName: 'st.A',
  damage: 25,
  guard: 'Mid',
  cancels: ['cmd'],
  startup: 6,
  active: 4,
  recovery: 12,
  onblock: -3,
  onhit: -1,
  stun: 30,
  guardDmg: 60,
  motion: ['a'],
  description: ''
};

const farB = {
  moveName: 'Far B',
  altName: 'st.B',
  damage: 30,
  guard: 'Mid',
  cancels: ['cmd'],
  startup: 6,
  active: 4,
  recovery: 11,
  onblock: -2,
  onhit: 0,
  stun: 30,
  guardDmg: 60,
  motion: ['b'],
  description: ''
};

const farC = {
  moveName: 'Far C',
  altName: 'st.C',
  damage: 70,
  guard: 'Mid',
  cancels: ['spc'],
  startup: 12,
  active: 4,
  recovery: 19,
  onblock: -4,
  onhit: -2,
  stun: 70,
  guardDmg: 120,
  motion: ['c'],
  description: ''
};

const farD = {
  moveName: 'Far D',
  DltName: 'st.D',
  damage: 80,
  guard: 'Mid',
  cancels: ['spc'],
  startup: 7,
  active: 6,
  recovery: 21,
  onblock: -8,
  onhit: -6,
  stun: 70,
  guardDmg: 120,
  motion: ['d'],
  description: ''
};

//Crouch normals

const crouchA = {
  moveName: 'Crouch A',
  altName: 'cr.A',
  damage: 25,
  guard: 'Mid',
  cancels: ['cmd'],
  startup: 4,
  active: 4,
  recovery: 7,
  onblock: 2,
  onhit: 4,
  stun: 30,
  guardDmg: 60,
  motion: ['2', 'a'],
  description: ''
};

const crouchB = {
  moveName: 'Crouch B',
  altName: 'cr.B',
  damage: 15,
  guard: 'Low',
  cancels: ['spr'],
  startup: 4,
  active: 4,
  recovery: 10,
  onblock: -1,
  onhit: 1,
  stun: 15,
  guardDmg: 30,
  motion: ['2', 'b'],
  description: ''
};

const crouchC = {
  moveName: 'Crouch C',
  altName: 'cr.C',
  damage: 70,
  guard: 'Mid',
  cancels: ['cmd'],
  startup: 8,
  active: 5,
  recovery: 18,
  onblock: -2,
  onhit: 0,
  stun: 70,
  guardDmg: 120,
  motion: ['2', 'c'],
  description: ''
};

const crouchD = {
  moveName: 'Crouch D',
  DltName: 'cr.D',
  damage: 80,
  guard: 'Low',
  cancels: ['cmd'],
  startup: 7,
  active: 4,
  recovery: 17,
  onblock: -2,
  onhit: 'KD (+28)',
  stun: 70,
  guardDmg: 120,
  motion: ['2', 'd'],
  description: ''
};

//Hop/Jump normals

const hopA = {
  moveName: 'Hop A',
  altName: 'h.A',
  damage: 40,
  guard: 'High',
  cancels: [],
  startup: 6,
  active: 4,
  recovery: '1 (On Landing)',
  onblock: '-',
  onhit: '-',
  stun: 30,
  guardDmg: 50,
  motion: ['a'],
  description: ''
};

const jumpA = {
  moveName: 'Jump A',
  altName: 'j.A',
  damage: 45,
  guard: 'High',
  cancels: [],
  startup: 6,
  active: 6,
  recovery: '1 (On Landing)',
  onblock: '-',
  onhit: '-',
  stun: 30,
  guardDmg: 60,
  motion: ['a'],
  description: ''
};

const hopB = {
  moveName: 'Hop B',
  altName: 'h.B',
  damage: 40,
  guard: 'High',
  cancels: [],
  startup: 5,
  active: 7,
  recovery: '1 (On Landing)',
  onblock: '-',
  onhit: '-',
  stun: 30,
  guardDmg: 50,
  motion: ['b'],
  description: ''
};

const jumpB = {
  moveName: 'Jump B',
  altName: 'j.B',
  damage: 40,
  guard: 'High',
  cancels: [],
  startup: 5,
  active: 7,
  recovery: '1 (On Landing)',
  onblock: '-',
  onhit: '-',
  stun: 30,
  guardDmg: 60,
  motion: ['b'],
  description: ''
};

const hopC = {
  moveName: 'Hop C',
  altName: 'h.C',
  damage: 70,
  guard: 'High',
  cancels: [],
  startup: 7,
  active: 5,
  recovery: '1 (On Landing)',
  onblock: '-',
  onhit: '-',
  stun: 70,
  guardDmg: 100,
  motion: ['c'],
  description: ''
};

const jumpC = {
  moveName: 'Jump C',
  altName: 'j.C',
  damage: 70,
  guard: 'High',
  cancels: [],
  startup: 7,
  active: 6,
  recovery: '1 (On Landing)',
  onblock: '-',
  onhit: '-',
  stun: 70,
  guardDmg: 120,
  motion: ['c'],
  description: ''
};

const hopD = {
  moveName: 'Hop D',
  DltName: 'h.D',
  damage: 70,
  guard: 'Mid',
  cancels: [],
  startup: 6,
  active: 4,
  recovery: '1 (On Landing)',
  onblock: '-',
  onhit: '-',
  stun: 70,
  guardDmg: 100,
  motion: ['d'],
  description: ''
};

const jumpD = {
  moveName: 'Jump D',
  altName: 'j.D',
  damage: 70,
  guard: 'Mid',
  cancels: [],
  startup: 6,
  active: 4,
  recovery: '1 (On Landing)',
  onblock: '-',
  onhit: '-',
  stun: 70,
  guardDmg: 100,
  motion: ['d'],
  description: ''
};

//Blowback

const standCD = {
  moveName: 'Blowback',
  altName: 'CD',
  damage: 75,
  guard: 'Mid',
  cancels: ['spc'],
  startup: 14,
  active: 5,
  recovery: 25,
  onblock: -7,
  onhit: 'Wall Splat (Ground hit) / Soft Knockdown (Air hit)',
  stun: 100,
  guardDmg: 160,
  motion: ['c', 'd'],
  description: ''
};

const shatterStrikeCD = {
  moveName: 'Shatter Strike',
  altName: '236CD',
  damage: 75,
  guard: 'Mid',
  cancels: ['spc'],
  startup: 15,
  active: 6,
  recovery: 28,
  onblock: -10,
  onhit: 'Crumple (Ground Hit) / Wall Bounce (Air hit)',
  guardDmg: 200,
  motion: ['236', 'c', 'd'],
  description: ''
};

const hopCD = {
  moveName: 'Hop CD',
  altName: 'h.CD',
  damage: 80,
  guard: 'Mid',
  cancels: ['spc'],
  startup: 13,
  active: 5,
  recovery: '1 (On Landing)',
  onblock: '-',
  onhit: 'KD',
  stun: 80,
  guardDmg: 120,
  motion: ['c', 'd'],
  description: ''
};

const jumpCD = {
  moveName: 'Jump CD',
  altName: 'j.CD',
  damage: 90,
  guard: 'Mid',
  cancels: ['spc'],
  startup: 13,
  active: 7,
  recovery: '1 (On Landing)',
  onblock: '-',
  onhit: 'KD',
  stun: 80,
  guardDmg: 140,
  motion: ['c', 'd'],
  description: ''
};


export const islaInfo = [
  general,
  closeA,
  closeB,
  closeC,
  closeD,
  farA,
  farB,
  farC,
  farD,
  crouchA,
  crouchB,
  crouchC,
  crouchD,
  hopA,
  jumpA,
  hopB,
  jumpB,
  hopC,
  jumpC,
  hopD,
  jumpD,
  standCD,
  shatterStrikeCD,
  hopCD,
  jumpCD,
]