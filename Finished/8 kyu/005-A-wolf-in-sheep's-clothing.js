const warnTheSheep = (queue) =>
  queue.indexOf("wolf") !== queue.length - 1
    ? `Oi! Sheep number ${queue
        .reverse()
        .indexOf("wolf")}! You are about to be eaten by a wolf!`
    : `Pls go away and stop eating my sheep`;
