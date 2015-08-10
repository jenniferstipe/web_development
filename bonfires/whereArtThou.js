function where(collection, source) {
  var arr = [];
  // What's in a name?
  // Written by Jennifer Prichard
  
  var keys1 = Object.keys(collection);
  console.log(keys1);
  var keys2 = Object.keys(source);
  console.log(keys2);  
  return arr;
}

where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' });
