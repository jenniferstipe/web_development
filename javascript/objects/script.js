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