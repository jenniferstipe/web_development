var friends = new Object();

friends.bill = new Object();
friends.steve = new Object();

friends.bill.firstName = 'Bill';
friends.steve.firstName = 'Steve';

friends.bill.lastName = 'Gates';
friends.steve.lastName = 'Jobs';

friends.bill.number = '(513) 377-6791';
friends.steve.number = '(513) 378-9093';

friends.bill.address = ['One Microsoft Way','Redmond','WA'];
friends.steve.address = ['One Apple Way','San Diego','CA'];

function list(key) {
 for (var key in friends) {
   console.log(key);
 }
}

function search(name) {
 for (var key in friends) {
   if (friends[key].firstName === name) {
     console.log(friends[key]);
     return friends[key];
   }
 }
}

search('Bill');