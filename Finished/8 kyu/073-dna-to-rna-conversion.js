function DNAtoRNA(dna) {
  while (dna.includes(`T`)) {
    dna = dna.replace(`T`, `U`);
  }
  return dna;
}
