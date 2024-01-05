const neutralise = (s1, s2) =>
  s1
    .split("")
    .map((char, i) => {
      const pair = char + s2[i];
      const uniqueCharacters = [...new Set(pair.split(""))];
      return uniqueCharacters.length === pair.length ? "0" : char;
    })
    .join("");
