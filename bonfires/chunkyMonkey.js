function chunk(arr, size) {
  // Break it up.
  // Written by Jennifer Prichard
  var newArray = [];
  var arrayString = '';

  arrayString = arr.slice(0,size);
  newArray.push(arrayString);  
  
  for (x=size; x < arr.length; x += size) {  //iterate adding the size each time to x
    arrayString = arr.slice(x,x+size);
    newArray.push(arrayString);
  }
  return newArray;
  
}

chunk([0, 1, 2, 3, 4, 5], 4);