//Written by Jennifer Prichard
function sumAll(arr) {
 

  minNum = Math.min(arr[0],arr[1]);
  maxNum = Math.max(arr[0],arr[1]);  
  tallyNum = 0;
  
  console.log(minNum);
  console.log(maxNum);
  
  function sumUp(values) {
    for (x=minNum;x <= maxNum; x++) {
      console.log(x);
      tallyNum += x;
      console.log(tallyNum);
    }
      return tallyNum;
  }
  
  return arr.reduce(sumUp);
  
  //return(1);
}

sumAll([1, 4]);
