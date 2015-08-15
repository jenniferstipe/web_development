function diff(arr1, arr2) {
  // Same, same; but different.
  // Written by Jennifer Prichard
  
  var newArr = [];
    
  console.log(arr1);
  console.log(arr2);
  
// check lengths, don't bother to compare if either length is 0
if (arr1.length === 0 && arr2.length !== 0) {
   return arr2;
 }
 else if (arr1.length !== 0 && arr2.length === 0) {
   return arr1;
 } 

//compare each element of each array to the other - do not push undefined values 
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
  
  return newArr;
}

//diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
//diff(['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'], ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']);
//diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diff([], ['snuffleupagus', 'cookie monster', 'elmo']);