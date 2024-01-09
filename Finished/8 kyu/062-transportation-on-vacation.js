function rentalCarCost(day) {
  if (day >= 7) {
    return day * 40 - 50;
  } else if (day >= 3) {
    return day * 40 - 20;
  } else {
    return day * 40;
  }
}
