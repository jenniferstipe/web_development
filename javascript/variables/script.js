
//----> global vs. local variables
/*Check out the code in the editor. Until now you've been using the var keyword without really understanding why. The var keyword creates a new variable in the current scope. That means if var is used outside a function, that variable has a global scope. If var is used inside a function, that variable has a local scope.

On line 4 we have not used the var keyword, so when we log my_number to the console outside of the function, it will be 14.
*/
var my_number = 7; //this has global scope

var timesTwo = function(number) {
    var my_number = number * 2;
    console.log("Inside the function my_number is: ");
    console.log(my_number);
}; 

timesTwo(7);

console.log("Outside the function my_number is: ")
console.log(my_number);