function where(arr, num) {
  // Find my place in this sorted array.
  arr.sort();
  
  for (x=0;x<arr.length;x++) {
     if (arr[x] >= num && arr[x - 1] < num) {  //if the current array is greater than or equal to num, but also less than the previous iteration
      //console.log(arr[x]);
      //console.log(arr[x-1]);
      //console.log(x);
      return x;
    
    }
  }
}

where([10, 20, 30, 40, 50], 30);