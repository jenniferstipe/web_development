function mutation(arr) {
  
  var isFound = 0; 
  var testArray = arr[1].split('');
  arr = arr.toLowerCase;
  console.log(arr);
  
  console.log(testArray);

  for (x=0;x < arr[1].length; x++) {

    isFound += arr.indexOf(arr[0],testArray[x]);    
  }

  if (isFound === arr[1].length) 
     { return true; }
    else 
     { return false;}
  
}


mutation(['hello', 'hey']);
