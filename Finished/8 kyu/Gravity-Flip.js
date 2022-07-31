const flip = (d, a) => (a.sort((a, b) => a - b) && d === "R" ? a : a.reverse());

flip("R", [3, 2, 1, 2]), // [1, 2, 2, 3];
flip("L", [1, 4, 5, 3, 5]); // [5, 5, 4, 3, 1];
