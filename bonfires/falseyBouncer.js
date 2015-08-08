function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  // Written by Jennifer Prichard 8/8/2015
  function isFalse(testString) {
    if (!testString) {   
       console.log('found null');
       }
      else {
       console.log('no null');        
       return testString;
      }
    }
  var filtered = arr.filter(isFalse);  //the function (IsFalse) used in arr.filter actually has to return the acceptable values
  return filtered;
  
}

bouncer([7, 'ate', '', false, 9]);
