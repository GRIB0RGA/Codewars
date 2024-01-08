var humanYearsCatYearsDogYears = function (humanYears) {
  const arr = [humanYears, 0, 0];
  const animalYearsBelowTwo = humanYears === 1 ? 15 : 24;
  if (humanYears <= 2) {
    return [humanYears, animalYearsBelowTwo, animalYearsBelowTwo];
  }

  for (let i = 0; i < humanYears; i++) {
    if (i <= 1) {
      continue;
    }
    arr[1] += 4;
    arr[2] += 5;
  }

  arr[1] += animalYearsBelowTwo;
  arr[2] += animalYearsBelowTwo;

  return arr;
};
