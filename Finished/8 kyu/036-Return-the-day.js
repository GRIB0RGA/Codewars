const arr = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
const whatday =(num) => num <1 || num>7 ? 'Wrong, please enter a number between 1 and 7' : arr[num-1]