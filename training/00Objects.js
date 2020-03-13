//Creation of objects
var obj = new Object();
var obj2 = {}

//Structure of object
var userData = {
  username: "gamer15",
  password : "*****",
  address : {
    street: "Taylor St",
    city: "Chicago"
    }
}

console.log(userData.username);
console.log(userData.address.street);
console.log(userData['password']);
console.log(userData['address']['city']);

//Creating objects as function
function Person(name, age){
  this.name = name;
  this.age = age;
}

var you = new Person("Gustavo", 22);
console.log(you.name)

you.name = "Gino"

console.log(you.name)
var userinput = prompt('What iss your id');
you.name = userinput;


// Iterate over properties in an object
for (let property in you) {
  console.log(property);
}
