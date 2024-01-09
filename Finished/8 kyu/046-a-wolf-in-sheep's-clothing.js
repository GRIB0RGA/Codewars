const warnTheSheep = (queue) =>
  queue.indexOf("wolf") === queue.length - 1
    ? "Pls go away and stop eating my sheep"
    : `Oi! Sheep number ${
        queue.length - queue.indexOf("wolf") - 1
      }! You are about to be eaten by a wolf!`;
