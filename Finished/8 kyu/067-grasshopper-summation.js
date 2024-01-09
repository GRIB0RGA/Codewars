var summation = function (num) {
  const result = [];
  for (let i = 1; i <= num; i++) {
    result.push(i);
  }
  return result.reduce((p, c) => p + c, 0);
};
