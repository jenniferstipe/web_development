//----->  phonebook entry

var phonebookEntry = {};

phonebookEntry.name = 'Oxnard Montalvo';
phonebookEntry.number = '(555) 555-5555';
phonebookEntry.phone = function() {
  console.log('Calling ' + this.name + ' at ' + this.number + '...');
};

phonebookEntry.phone();

//----->  me
//object literal notation
var me = {
    name: "Jennifer Prichard",
    age: 38
};

//object constructor
var me = new Object();

me.name = "Jennifer Prichard";
me.age = 38;

//object literal notation
var object1 = {
    id: 1,
    desc: "one"
};

//object constructor
var object2 = new Object();

object2.id = 2;
object2.name = "two";

//object constructor
var object3 = new Object();

object3.id = 3;
object3.name = "three";

//array with an object

var myObject = new Object();

myArray = [1, true, 'hello', myObject ];

//jagged array with object
var myObject = new Object();

var newArray = [ [0,0], [0,myObject,0] ];

//---->  object with an array

myArray = [0,0];

var myObject = {
  name: 'Eduardo',
  type: 'Most excellent',
  // Add your code here!
  interests: myArray
};

// - showing keys (bill, steve) for empty objects
var friends = new Object();

friends.bill = new Object();
friends.steve = new Object();

//---->  adding values to objects

var friends = new Object();

friends.bill = new Object();
friends.steve = new Object();

friends.bill.firstName = 'Bill';
friends.steve.firstName = 'Steve';

friends.bill.lastName = 'Gates';
friends.steve.lastName = 'Jobs';

friends.bill.number = '(513) 377-6791';
friends.steve.number = '(513) 378-9093';

//--->  bracket notation

// Take a look at our next example object, a dog
var dog = {
  species: "greyhound",
  weight: 60,
  age: 4
};

var species = dog["species"];
// fill in the code to save the weight and age using bracket notation
var weight = dog["weight"];
var age = dog["age"];

//Our setAge method works great for bob because it updates bob.age, but what if we want to use it for other people?
//It turns out we can make a method work for many objects using a new keyword, this. The keyword this acts as a placeholder, and will refer to whichever object called that method when the method is actually used.
//Let's look at the method setAge (line 2) to see how this works. By using the keyword this, setAge will change the age property of any object that calls it. Previously, we had a specific object bob instead of the keyword this. But that limited the use of the method to just bob.
//Then when we say bob.setAge = setAge; (line 9), it means whenever we type bob.setAge( ), this.age in the setAge method will refer to bob.age.

// here we define our method using "this", before we even introduce bob
var setAge = function (newAge) {
  this.age = newAge;
};
// now we make bob
var bob = new Object();
bob.age = 30;
// and down here we just use the method we already made
bob.setAge = setAge;
  
// change bob's age to 50 here
bob.setAge(50);

//------another example of this

// here we define our method using "this", before we even introduce bob
var setAge = function (newAge) {
  this.age = newAge;
};
// now we make bob
var bob = new Object();
bob.age = 30;
bob.setAge = setAge;
  
// make susan here, and first give her an age of 25
var susan = new Object();
susan.age = 25;
susan.setAge = setAge;  //add this method as an already existing function


// here, update Susan's age to 35 using the method
susan.setAge(35);

// use of this, but cannot be reused since defined with rectangle. prefix

var rectangle = new Object();
rectangle.height = 3;
rectangle.width = 4;
// here is our method to set the height
rectangle.setHeight = function (newHeight) {
  this.height = newHeight;
};
// help by finishing this method
rectangle.setWidth = function (newWidth) {
    this.width = newWidth;
};
  

// here change the width to 8 and height to 6 using our new methods
rectangle.setHeight(6);
rectangle.setWidth(8);

//-----> square

var square = new Object();
square.sideLength = 6;
square.calcPerimeter = function() {
  return this.sideLength * 4;
};
// help us define an area method here
square.calcArea = function() {
  return this.sideLength * this.sideLength;
};

var p = square.calcPerimeter();
var a = square.calcArea();

//----> object constructors

// object constructor function
function Person(name,age) {
  this.name = name;
  this.age = age;
}

// Let's make bob and susan again, using our constructor
var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 25);
// help us make george, whose name is "George Washington" and age is 275
var george = new Person("George Washington", 275);

// more constructors
function Cat(age, color) {
  this.age = age;
  this.color = color;
}

// make a Dog constructor here
function Dog(breed, size) {
    this.breed = breed;
    this.size = size;
}


//In a constructor, we don't have to define all the properties using parameters. Look at our new Person example on line 1, and see how we set the species to be "Homo Sapiens" (line 4). This means that when we create any Person, their species will be "Homo Sapiens". In this way, the values associated with name and age are not yet assigned, but species will always have the same value.
//In this case, both sally and holden will have the same species of "Homo Sapiens", which makes sense because that is the same across all people.
function Person(name,age) {
  this.name = name;
  this.age = age;
  this.species = "Homo Sapiens";
}

var sally = new Person("Sally Bowles",39);
var holden = new Person("Holden Caulfield",16);
console.log("sally's species is " + sally.species + " and she is " + sally.age);
console.log("holden's species is " + holden.species + " and he is " + holden.age);

//---> rectangle

function Rectangle(height, width) {
  this.height = height;
  this.width = width;
  this.calcArea = function() {
      return this.height * this.width;
  };
  // put our perimeter function here!
  this.calcPerimeter = function() {
      return (this.height + this.width) * 2;
  };
}

var rex = new Rectangle(7,3);
var area = rex.calcArea();
var perimeter = rex.calcPerimeter();

// Rabbit
function Rabbit(adjective) {
    this.adjective = adjective;
    this.describeMyself = function() {
        console.log("I am a " + this.adjective + " rabbit");
    };
}

// now we can easily make all of our rabbits

rabbit1 = new Rabbit("fluffy");
rabbit2 = new Rabbit("happy");
rabbit3 = new Rabbit("sleepy");

rabbit1.describeMyself;
rabbit2.describeMyself;
rabbit3.describeMyself;

//---> Array of objects

// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// Now we can make an array of people
var family = new Array();
family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);
// add the last family member, "timmy", who is 6 years old
family[3] = new Person("timmy",6);

//--> pass objects into a function
// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// We can make a function which takes persons as arguments
// This one computes the difference in ages between two people
var ageDifference = function(person1, person2) {
    return person1.age - person2.age;
}

var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);

// get the difference in age between alice and billy using our function
var diff = ageDifference(alice,billy);

//--- person age

// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// We can make a function which takes persons as arguments
// This one computes the difference in ages between two people
var ageDifference = function(person1, person2) {
    return person1.age - person2.age;
};

// Make a new function, olderAge, to return the age of
// the older of two people
var olderAge = function(person1, person2) {
    if (person1.age > person2.age) {
      return person1.age;
    }
    else if (person1.age < person2.age) {
        return person2.age;
    }
    else if (person1.age === person2.age) {
        return person1.age;
    }
}

// Let's bring back alice and billy to test our new function
var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);

console.log("The older person is " + olderAge(alice, billy));

//--> circle
function Circle (radius) {
    this.radius = radius;
    this.area = function () {
        return Math.PI * this.radius * this.radius;
        
    };
    // define a perimeter method here
    this.perimeter = function() {
      return 2 * (Math.PI * this.radius);
    }
};

//address book
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

/*Create a search function
then call it passing "Jones"*/
function search(lastName) {
  	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		if (contacts[i].lastName = lastName) {
  		  printPerson(contacts[i]);
		}
	}
}

function add(firstName, lastName, email, phoneNumber) {
  contacts[contacts.length] = {
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
    email: email
};
}
add("Jennifer", "Prichard", "jenprichard@gmail.com", "513-377-6791");
list();