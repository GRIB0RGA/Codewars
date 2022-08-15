const defineSuit = (card) =>
  card.includes("♣")
    ? "clubs"
    : card.includes("♦")
    ? "diamonds"
    : card.includes("♥")
    ? "hearts"
    : "spades";