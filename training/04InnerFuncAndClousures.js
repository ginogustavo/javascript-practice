//Inner function
//nested function can access variables in their parent function's scope.

function parentFunc(){

  var a= 1;

  function nestedFunc(){
    var b = 4;
    return a+b;
  }

  return nestedFunc();
}

console.log(parentFunc());


//Clousures
//Combination of a function and the scope object which it was created
//They let you save state

//https://stackoverflow.com/questions/111102/how-do-javascript-closures-work

function makeAdder(a){
  return function(b){
    return a+b;
  };
}

var addFive = makeAdder(5);
var addSeven = makeAdder(7);

console.log(addFive(10));
console.log(addSeven(20));
