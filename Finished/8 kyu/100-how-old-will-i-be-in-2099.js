function  calculateAge(a,b) {
  const gap = a-b;
  const yearsString = Math.abs(gap) === 1 ? 'year' : "years"
  return gap === 0 ? "You were born this very year!" : gap < 0 ? `You are ${Math.abs(a-b)} ${yearsString} old.` : `You will be born in ${Math.abs(a-b)} ${yearsString}.`
}