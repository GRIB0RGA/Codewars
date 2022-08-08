const guns = {
  PT92: 17,
  M4A1: 30,
  M16A2: 30,
  PSG1: 5,
};

const magNumber = ([gun, streets]) => Math.ceil((streets * 3) / guns[`${gun}`]);
