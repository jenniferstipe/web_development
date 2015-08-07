function slasher(arr, howMany) {
  // it doesn't always pay to be first
  
  if (howMany > 0) {
  arr = arr.splice(howMany, howMany);
  }
  return arr;
  
}

slasher([1, 2, 3], 2);
