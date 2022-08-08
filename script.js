const labelMaker = (name, num) => `0${num}-${name?.replaceAll(" ", "-")}.js`;
console.log(labelMaker("The Feast of Many Beasts", 20));
