function repeat(str, num) {
  // written by jennifer prichard
  // repeat after me
  var newString = '';
  
  if (num < 0) {
    return '';
  }
  else {
    for (x = 1; x <= num; x++) {
      newString += str;
    }
  return newString;
  }
}

repeat('abc', 3);
