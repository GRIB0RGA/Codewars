const quadrant = (x, y) => {
  const xQuadrant = x > 0 ? "14" : "23";
  const yQuadrant = y > 0 ? "12" : "34";
  return yQuadrant.split("").find((yChar) => xQuadrant.includes(yChar)) * 1;
};
