/*jshint multistr:true */

var text = "Jen, can you hold on one second? I have got Jen on the other line.";
var myName = "Jen";
var hits = [];

for (var x = 0; x <= text.length; x++) {
    if (text[x] === myName[x]) {
       for (var y = x; y < (x + myName.length); y++) {
          hits.push(text[y]);
       }
    }
}


if (hits.length === 0) {
   console.log("Your name was not found!");
}
else {
   console.log(hits);
    }
