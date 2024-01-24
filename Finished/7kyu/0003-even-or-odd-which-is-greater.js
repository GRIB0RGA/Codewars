const evenOrOdd = (str) => {
  const numbersArray = str.split("").map((x)=>Number(x));
  const sumOfOdds = numbersArray.filter((x) => x % 2 != 0).reduce((acc,curr)=>acc+curr,0);
  const sumOfEvens = numbersArray.filter((x) => x % 2 == 0).reduce((acc,curr)=>acc+curr,0);
  return sumOfOdds === sumOfEvens ? 'Even and Odd are the same' : sumOfOdds > sumOfEvens ? 'Odd is greater than Even' : 'Even is greater than Odd'
};