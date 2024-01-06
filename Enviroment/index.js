const kataNameGenerator = (name) => name.toLowerCase().replaceAll(" ", "-");

console.log(kataNameGenerator("048-A wolf in sheep's clothing"));

function quadratic(x1, x2) {
  return [1, x2 + x1, x1 * x2];
  //   x2 -2x -x + 2
  return [1, 0, 0];
}
console.log(quadratic(-4, -9), [1, 13, 36]);

const warnTheSheep = (queue) =>
  queue.indexOf("wolf") === queue.length - 1
    ? "Pls go away and stop eating my sheep"
    : `Oi! Sheep number ${
        queue.length - queue.indexOf("wolf") - 1
      }! You are about to be eaten by a wolf!`;
