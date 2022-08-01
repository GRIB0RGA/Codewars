const drawStairs = (n) => {
  if (n === 1) {
    return "I";
  }
  let tower = "";
  let width = "";

  for (let i = 0; i < n; i++) {
    if (i === n - 1) {
      tower += "I";
      break;
    }
    tower += "I\n";
    width += " ";
    tower += width;
  }
  return tower;
};
