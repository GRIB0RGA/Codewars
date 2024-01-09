function fuelPrice(litres, pricePerLitre) {
  if (litres >= 10) {
    pricePerLitre -= 0.25;
  } else if (litres >= 8) {
    pricePerLitre -= 0.2;
  } else if (litres >= 6) {
    pricePerLitre -= 0.15;
  } else if (litres >= 4) {
    pricePerLitre -= 0.1;
  } else if (litres >= 2) {
    pricePerLitre -= 0.05;
  }
  return Number((litres * pricePerLitre).toFixed(2));
}
