function where(collection, source) {
  var arr = [];
  var isFound = false;
  // What's in a name?
  // Written by Jennifer Prichard
  
  //var keys1 = Object.keys(collection[0]);  //if you don't specify the [0], you get "["0"],["1"],["2"]"
  //console.log(keys1);
  var keys2 = Object.keys(source);
  //console.log(keys2);  

  //console.log(Object.keys(source));    
  //console.log(collection[0].hasOwnProperty(Object.keys(source)));
  
  for (x=0;x < collection.length; x++) {  //loop as long as the collection.length
    if (collection[x].hasOwnProperty(keys2)) {  //if collection[x] has the key of source
          //console.log(collection[x][keys2]);
          //console.log(source[keys2]);      
       if (collection[x][keys2] === source[keys2]) {        //if the current collection with the key of source is equal to source
          //console.log(collection[x][keys2]);
          //console.log(collection[x]);
          arr.push(collection[x]);     //push the object to the new array
          console.log(arr);
         }
    }   
    else
      {  console.log('not found');     }
  
  }
   return arr;

}

where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' });
