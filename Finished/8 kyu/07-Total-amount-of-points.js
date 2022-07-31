const points = (games) =>
  games
    .map((game) => (game[0] === game[2] ? 1 : game[0] > game[2] ? 3 : 0))
    .reduce((acc, score) => acc + score);
