function getMinMax(str) {
  let array = str.split(" ").map(Number).filter(Boolean);

  let newArr = {
    min: Math.min.apply(Math, array),
    max: Math.max.apply(Math, array),
  };
  return newArr;
}
