function diff(arr1, arr2) {
  // Same, same; but different.
  // Written by Jennifer Prichard
  
  var newArr = [];
    
  //arr1 = arr1.join('');
  //arr2 = arr2.join('');
  //console.log(arr1);
  //console.log(arr2);
  
 for (x=0; x < arr1.length; x++) {
   console.log(arr1.indexOf(arr2[x]));
   if (arr1.indexOf(arr2[x]) === -1) {
     if (arr2[x]) {
     newArr.push(arr2[x]);
     }
   }
 }

console.log(arr2.length); 
  
for (x=0; x < arr2.length; x++) {
   console.log(arr2.indexOf(arr1[x]));
   if (arr2.indexOf(arr1[x]) === -1) {
     if (arr1[x]) {
     newArr.push(arr1[x]);
     }
   }
 }  
  
  /*
  for (x=0;x < arr1.length; x++) {
    console.log(arr1[x]);
    console.log(arr2[x]);    
    if (arr1[x] === arr2[x]) {
      console.log("same");      
    }
    else if (arr2[x] != arr1[x]) {
      newArr.push(arr2[x]);
      console.log(arr2[x] + " arr2 is different");
    }
    else if (arr1[x] != arr2[x]) {
      newArr.push(arr1[x]);
      console.log(arr1[x] + " arr1 is different");
    }
  }
  
*/
  return newArr;
}

//diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
//diff(['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'], ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']);
//diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diff([], ['snuffleupagus', 'cookie monster', 'elmo']);