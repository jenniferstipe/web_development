//-----> OrangeCost

function orangeCost(cost) {
    cost *= 5;
    console.log(cost);
}

orangeCost(5);

//-------> TimesTwo
// Parameter is a number, and we do math with that parameter
var timesTwo = function(number) {
    return number * 2;
};

// Call timesTwo here!
var newNumber = timesTwo(10);
console.log(newNumber);


//-----> Quarter
function quarter(number) {
 return number / 4;   
}

if (quarter(12) % 3 === 0 ) {
  console.log("The statement is true");
} else {
  console.log("The statement is false");
}

//----> perimeterBox
function perimeterBox(length, width) {
 return (length * 2) + (width * 2);   
}

perimeterBox(10, 10);

//-----> nameString
var nameString = function (name) {
	return("Hi, I am " + name);
	
};

console.log(nameString("Jen"));

//----> SleepCheck
function sleepCheck(numHours) {
 if (numHours >= 8) {
     return("You're getting plenty of sleep! Maybe even too much!");
 }
 else if (numHours < 8) {
     return("Get some more shut eye!");
 }
}

sleepCheck(10);
sleepCheck(5);
sleepCheck(8);

//---->  IsEven

var isEven = function(number) {
  // Your code goes here!
  if (number % 2 === 0) {
      return true;
  }
  else if (isNaN(number)) {
      return("ERROR:  Non-numeric input, please enter a number.");
  }  
  else {
      return false;
  }
};