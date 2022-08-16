function multiTable(number) {
  let table = "";
  for (let i = 1; i <= 10; i++) {
    const increment = `${i} * ${number} = ${i * number}`;
    i === 10 ? (table += increment) : (table += increment + "\n");
  }
  return table;
}
