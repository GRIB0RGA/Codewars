const sorter = (textbooks) =>
  textbooks.sort((a, b) =>
    a.toLowerCase() === b.toLowerCase()
      ? 0
      : a.toLowerCase() < b.toLowerCase()
      ? -1
      : 1
  );
