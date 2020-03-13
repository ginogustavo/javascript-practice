//Person.prototype : object shared by all instances of Person.
function Person4(first, last){
  this.first = first;
  this.last = last;
}
Person4.prototype.fullName = function(){
 return this.first + "  "+ this.last;
};
Person4.prototype.reversedName = function(){
   return this.last+", "+this.first;
};

p4 = new Person4("Jimmy", "MB");
console.log(p4.fullName());


// modifying in run-time
//console.log(p4.firstNameCaps()); // Type Error : p4.firstNameCaps is not a function
Person4.prototype.firstNameCaps = function(){
  return this.first.toUpperCase();
};
console.log(p4.firstNameCaps());


// adding function to the prototype of built-in Javascript objects
var myString = "Arquitecture";
String.prototype.reversedStr = function(){
  var r = "";
  for(var i = this.length-1;i>=0;i--){
    r+=this[i];
  }
  return r;
};

console.log(myString.reversedStr());
