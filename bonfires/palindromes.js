function palindrome(str) {
  str = str.replace(/\W/g,'');  //replace all non-alphanumeric chars (including spaces and punctuation) with nothing - do not put ' ' around the regexp!
  str = str.toLowerCase();      //make string lowercase.  replace and toLowerCase must be output to another variable.
  strArray = str.split('');   //split the string into an array
  strArray.reverse();  //reverse the array
  newString = strArray.join('');  //join the array together into a string object
  
  if (str === newString) {
    return true;
    }
  else {
    return false;
   }
  }



palindrome("eye");