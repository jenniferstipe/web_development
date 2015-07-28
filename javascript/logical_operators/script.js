
//----> javascript <3

var iLoveJavaScript = true;
var iLoveLearning = true;

if(iLoveJavaScript && iLoveLearning) {
  // if iLoveJavaScript AND iLoveLearning:
  console.log("Awesome! Let's keep learning!");
} else if(!(iLoveJavaScript || iLoveLearning)) {
  // if NOT iLoveJavaScript OR iLoveLearning:
  console.log("Let's see if we can change your mind.");
} else {
  console.log("You only like one but not the other? We'll work on it.");
}

//----> AND
var hungry = true;
var foodHere = true;

var eat = function() {
  // Add your if/else statement here!
  if (hungry && foodHere) {
      return true;
      }
  else {
     return false;
     }
}


//----> OR 
var tired = true;
var bored = false;

var nap = function() {
  // Add your if/else statement here!
  if (tired || bored) {
      return true;
  }
  else {
      return false;
  }
};

//---->  ! Not
var programming = false;

var happy = function() {
  // Add your if/else statement here!
  if (!programming) {
      return true;
  }
  else {
      return false;
  }
};