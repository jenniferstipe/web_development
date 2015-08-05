function titleCase(str) {
   var newString = '';
   var currentChar = '';
   
  for (x = 0;x < str.length; x++) {
      if (str.charAt(x) === ' ') {    //if the current char is a space, this means the NEXT char must be caps
        currentChar = str.charAt(x + 1);  //caps the next char
        currentChar = currentChar.toUpperCase();
        console.log(currentChar);
        newString += " " + currentChar;
        x++; //skip the next char
      }
      else if (str.charAt(x - 1) === ' ') {
        x++; //skip the next char, because the previous char was a space and handled above
      }
      else if (x === 0) {  //if this is the first character, it must always be caps
        currentChar = str.charAt(x);
        currentChar = currentChar.toUpperCase();
        console.log(currentChar);
        newString += currentChar;        
      }
      else {  //if this is any other character (not first, no space before it), make it lower case
          currentChar = str.charAt(x);
          currentChar = currentChar.toLowerCase();
          newString += currentChar;
      }
	}
  
  //str = strArray.join('');
  return newString;
}

titleCase("I'm a little tea pot");
