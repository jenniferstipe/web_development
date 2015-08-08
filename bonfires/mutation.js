function mutation(arr) {
  // Written by Jennifer Prichard 8/7/2015  
  var isFound = 0; 
  //put the parameters into strings
  var firstString = arr[0];
  var secondString = arr[1];
  //set both strings to lower case
  firstString = firstString.toLowerCase();
  secondString = secondString.toLowerCase();
  
  //split both strings so we can iterate over them
  firstString = firstString.split('');
  secondString = secondString.split('');  
  
  for (x=0;x < secondString.length; x++) {    //iterate as long as the secondString, since that is what we are testing

    isFound = firstString.indexOf(secondString[x],0);    //check the array for an instance of secondString[x] - if ever not found, exit the loop and return false
    
    if (isFound === -1) 
     { return false; }
  
  }
  //console.log(isFound);
    
  return true;
}


mutation(['hello', 'Hey']);