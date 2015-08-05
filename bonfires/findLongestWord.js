function findLongestWord(str) {
  longestWordLength = 0;
  strArray = str.split(' ');
  for (x=1;x < strArray.length; x++) {
    if (strArray[x].length > longestWordLength) {
      longestWordLength = strArray[x].length;
    }
  }
  return longestWordLength;
}

findLongestWord('The quick brown fox jumped over the lazy dog');
