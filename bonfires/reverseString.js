function reverseString(str) {
  strArray = str.split('');   //split the string into an array
  strArray.reverse();  //reverse the array
  newString = strArray.join('');  //join the array together into a string object
  str = newString; //assign str to newString (probably could skip this and just return newString
  return str;
}

reverseString('hello');
