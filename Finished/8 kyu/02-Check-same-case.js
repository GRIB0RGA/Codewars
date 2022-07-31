const sameCase = (a, b) => {
  const isLetter =
    RegExp(/^\p{L}/, "u").test(a) && RegExp(/^\p{L}/, "u").test(b);

  if (!isLetter) {
    return -1;
  }
  const casingA = a === a.toUpperCase();
  const casingB = b === b.toUpperCase();

  return casingA === casingB ? 1 : 0;
};
