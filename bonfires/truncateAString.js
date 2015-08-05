function truncate(str, num) {
  // Written by Jennifer Prichard
  // Clear out that junk in your trunk
  if (str.length >= num) {
    str.slice(0,num);
  }
  return str;
  
}

truncate('A-tisket a-tasket A green and yellow basket', 11);
