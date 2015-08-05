function largestOfFour(arr) {
  largestNumber = 0;
  largestArray = [0,0,0,0];
  // You can do this!
  for (x = 0; x < arr.length; x++) {
    for (y = 0; y < arr[x].length; y++) {
        if (arr[x][y] > largestNumber) {
           largestNumber = arr[x][y];
         }
         console.log("array: " + arr[x][y]);     
         console.log("largest: " + largestNumber);     
         largestArray[x] = largestNumber;
         console.log(largestArray[x]);
    }
  }
  
  return largestArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
