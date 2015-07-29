//----> lunch choice

var lunch = prompt("What do you want for lunch?","Type your lunch choice here");

switch(lunch){
  case 'sandwich':
    console.log("Sure thing! One sandwich, coming up.");
    break;
  case 'soup':
    console.log("Got it! Tomato's my favorite.");
    break;
  case 'salad':
    console.log("Sounds good! How about a caesar salad?");
    break;
  case 'pie':
    console.log("Pie's not a meal!");
    break;
  default:
    console.log("Huh! I'm not sure what " + lunch + " is. How does a sandwich sound?");
}

//--->  color
var color = prompt("What's your favorite primary color?","Type your favorite color here");

switch(color) {
  case 'red':
    console.log("Red's a good color!");
    break;
  case 'blue':
    console.log("That's my favorite color, too!");
    break;
  //Add your case here!
  case 'yellow':
    console.log("I love dandelions and daffodils!");
    break;
  default:
    console.log("I don't think that's a primary color!");
}

//----> candy
var candy = prompt("What's your favorite candy?","Type your favorite candy here.");

switch(candy) {
  case 'licorice':
    console.log("Gross!");
    break;
  case 'gum':
    console.log("I like gum!");
    break;
  case 'beets':
    console.log("...is that even a candy?");
    break;
  // Add your code here!
  default:
    console.log("What kind of candy is that?");
}

//---> robot
var answer = prompt("Are you a robot?");

switch(answer) {
  case 'yes':
    console.log("I too am a robot!  Yay!");
    break;
  // Add your code here!
  case 'no':
    console.log("That's too bad.  Perhaps in the future you can become one.");
    break;      
  default:
    console.log("Is that too personal a question?");
}

//---> live

var answer = prompt("Where do you live?");

switch(answer) {
    case "United States":
        console.log("Hi, how's it going?");
        break;
    case "UK":
        console.log("Hullo ole chap!");
        break;
    case "Austrailia":
        console.log("G'day mate!");
        break;
    default:
        console.log("No idea where " + answer + " is, but it sounds lovely!");
}


//---> movie review

var getReview = function (movie) {
  switch(movie) {
   case "Toy Story 2": return "Great story. Mean prospector.";
   case "Finding Nemo": return "Cool animation, and funny turtles.";
   case "The Lion King": return "Great songs."
   default: return "I don't know!";
  }
};
