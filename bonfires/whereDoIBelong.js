function where(arr, num) {
  // Find my place in this sorted array.
  arr.sort();
  
  for (x=0;x<arr.length;x++) {
    if (arr[x] > num) {
      console.log(arr[x]);
      console.log(x);
      return x;
      
    }
  }
}

where([40, 60], 50);
