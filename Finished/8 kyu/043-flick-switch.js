const flickSwitch = (arr) => {
  let bool = true;
  return arr.map((word) => (bool = word === "flick" ? !bool : bool));
};
