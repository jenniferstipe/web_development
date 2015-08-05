function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  console.log("Length: " + str.length);
  console.log("Substr: " + str.substr(str.length - 1,1));
  //start the substr at the length of the string minus the target's length, then go target.length chars
  if ( str.substr(str.length - target.length,target.length) == target ) {  
    return true;    
  }
  else {
    return false;
  }
}

end('Bastian', 'n');
