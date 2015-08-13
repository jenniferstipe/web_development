function sumAll(arr) {
 

  minNum = Math.min(arr[0],arr[1]);
  maxNum = Math.max(arr[0],arr[1]);  

  console.log(minNum);
  console.log(maxNum);
  
  function sumUp(values) {
    tallyNum = 0;
    for (x=minNum;x < maxNum; x++) {
      tallyNum += x;
      console.log(tallyNum);
      return tallyNum;
    }
  }
  
  return arr.reduce(sumUp);
  
  //return(1);
}

sumAll([1, 4]);
