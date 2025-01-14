function filterRange(arr, a, b) {
  let result = arr.filter(function(item) {


    if (a <= item && b >= item) {
      return item;
    }
  });
  return result;
}
