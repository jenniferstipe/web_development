function destroyer(arr) {
 
    var searchArray = [];
    var matchArray = [];

    //put arr[0] (the array to filter) in an array variable so it can be called separately using searchArray.filter below	
    for (x=0;x < arguments[0].length; x++) {
        searchArray.push(arguments[0][x]);
    }
    //console.log(searchArray); 
    // put the rest of the array in another variable so it can be matched against searchArray n the filter function
    for (x=1;x < arguments.length; x++) {
        matchArray.push(arguments[x]);
    }     
    //console.log(matchArray);  
  
  function filter(value) {
     //console.log(value);
     var matched = false;   
      
     for (y=0;y < matchArray.length; y++) {  // compare the incoming value with the matchArray
      console.log("MatchArray: " + matchArray[y]);
      console.log("Value: " + value);
       if (value === matchArray[y]) {
          matched = true;
         }                               
     } 
                         
     if (!matched) {  //if the value matches, we don't want to return in so it is filtered
       return value;
     }  

    }    
     
  var filtered = searchArray.filter(filter);
  console.log(filtered);
  return filtered;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
