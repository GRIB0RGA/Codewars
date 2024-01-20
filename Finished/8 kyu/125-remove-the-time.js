const shortenToDate = (longDate) =>
  longDate
    .split(" ")
    .filter((word) => !(word.includes("pm") || word.includes("am")))
    .join(" ")
    .replace(",", "");
