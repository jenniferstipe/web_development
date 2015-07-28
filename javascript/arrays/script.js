// You are now declaring an array.
// Arrays are an awesome data structure!

var junk = ["Jen","Mike",38,39];
console.log(junk);

// Let's print out every element of an array using a for loop

var cities = ["Melbourne", "Amman", "Helsinki", "NYC","London","Seattle","Cincinnati"];

for (var i = 0; i < cities.length; i++) {
    console.log("I would like to visit " + cities[i]);
}

// Click on "Stuck? Get a hint!" if you get stuck!

names = ["Leaha","Marie","Saowanee","Lucy","Phil"];

for (i = 0; i < names.length; i++) {
    console.log("I know someone called " + names[i]);
}

//--->  3 col, 3 row array
var myArray = [ [0,0,0], [0,0,0] ];

//Sometimes you want arrays that aren't as nice and even as your 3 x 3 two-dimensional array: you may have three elements in the first row, one element in the second row, and two elements in the third row. JavaScript allows those, and they're called jagged arrays.
var jagged = [ [0,0], [0,0,0] ];

