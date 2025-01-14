function getMinMax(str) {
  let t = str.split(" ").filter(numb => parseFloat(numb)).map(numb => Number(numb));


  let result = {
    min: Math.min(...t),
    max: Math.max(...t)
  };
  return result;
}
