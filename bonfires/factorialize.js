function factorialize(num) {
  
  total = 1;  //start at 1, because starting with 0 makes everything 0
  
  for (x=1; x < num; x++) {    // while x is less than the num, since we are adding 1 in the calculation
    total *= x + 1;            // multiply the total times x + 1, so when x = 1, total = 1*2;  when 2, equals 2*3, etc.
  }
  
  return total;
}

factorialize(5);
