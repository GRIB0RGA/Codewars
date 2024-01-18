const getSize = (width, height, depth) => [
  2 * (depth * (width + height) + width * height),
  width * height * depth,
];
