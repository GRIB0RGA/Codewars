const points = (games) =>
  games
    .map((score) => {
      const splittedScore = score.split("");
      const ourTeamScore = splittedScore[0];
      const enemyTeamScore = splittedScore[2];
      return ourTeamScore > enemyTeamScore
        ? 3
        : ourTeamScore === enemyTeamScore
        ? 1
        : 0;
    })
    .reduce((acc, cur) => acc + cur);
