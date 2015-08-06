function chunk(arr, size) {
  // Break it up.
  // Written by Jennifer Prichard
  var newArray = [];
  var arrayString = '';
 
  for (x=0; newArray.length < size; x + size) {
    arrayString = arr.slice(x,x+size);
    console.log(arrayString);
    newArray.push(arrayString);
  }
  return newArray;
  
}

chunk(['a', 'b', 'c', 'd'], 2);
