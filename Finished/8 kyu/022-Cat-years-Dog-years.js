var humanYearsCatYearsDogYears = function (humanYears) {
  const arr = [0, 0, 0];
  if (humanYears <= 2) {
    animalYears = humanYears <= 1 ? 15 : 24;
    return [humanYears, animalYears, animalYears];
  }
  dogYears = humanYears - 2;

  for (let i = 0; i < humanYears; i++) {
    if (i + 1 > 2) {
      arr[1] += 4;
      arr[2] += 5;
    }
    arr[0] = humanYears;
  }
  return arr;
};
