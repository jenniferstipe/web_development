function chunk(arr, size) {
  // Break it up.
  // Written by Jennifer Prichard
  var newArray = [];
  var arrayString = '';

  arrayString = arr.slice(0,size);
  newArray.push(arrayString);  
  
  for (x=size; x < arr.length; x++) {
    arrayString = arr.slice(x,x+size);
    newArray.push(arrayString);
    x += size;
  }
  return newArray;
  
}

chunk(['a', 'b', 'c', 'd'], 2);
