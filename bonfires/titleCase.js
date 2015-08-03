function titleCase(str) {
  //strArray = str.split('');
  previousCharacter = '';
  
  for (x = 1;x < str.length; x++) {
    if (previousCharacter === '\s' ) {
      var currentCharacter = '';
      currentCharacter = str.charAt[x];
      currentCharacter = currentCharacter.toLowerCase;
      str.charAt[x] = currentCharacter;
    }
    else
        previousCharacter = str.charAt(x);
   
  }
  //str = strArray.join('');
  return str;
}

titleCase("I'm a little tea pot");
