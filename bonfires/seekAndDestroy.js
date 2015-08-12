function destroyer(arr) {
  // Remove all the values

//  console.log(arguments);  
//  console.log(arguments[0]); 
//  console.log(arguments[1]);   
//  console.log(arguments[2]);                
//  console.log(arguments.length);
//  console.log(arguments[0].length);
                        
  function filter(values) {

     var searchArray = [];
     var matchArray = [];    
     var newArray = [];
    //    console.log(arguments);
    for (x=0;x < values[0].length; x++) {
        searchArray.push(values[0][x]);
    }

//    console.log(searchArray);    
    
    for (x=1;x < values.length; x++) {
        matchArray.push(values[x]);
    }       

//    console.log(matchArray);      
  
     for (y=0;y < matchArray.length; y++) {
//      console.log(searchArray.indexOf(matchArray[x]));
//      console.log(searchArray[x]);     
      var match = searchArray.indexOf(matchArray[y]);
      console.log("MatchArray: " + matchArray[y]);
      console.log("Match: " + match);
       if (match > 0) {
          newArray.push(matchArray[y]);
          }                   
     } 

                           
      console.log(newArray);
      return newArray;
    }    
   
  
  var filtered = arr.filter(filter);
  //arr = arr.filter(2);
  return filtered;
}



destroyer([1, 2, 3, 1, 2, 3], 2, 3);
