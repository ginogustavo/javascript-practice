function add() {
  var sum = 0;
  for(var i= 0;i<arguments.length;i++){
    sum+= arguments[i];
  }
  return sum;
}
var sum = add(3, 4, 10);
console.log(sum);

function avg() {
  var sum = 0;
  for(var i= 0;i<arguments.length;i++){
    sum+= arguments[i];
  }
  return sum/arguments.length;
}

var result = avg(1,2,3,4,5,6);
console.log(result);

//Rest Parameter Operator
function avgRPO(...args){
  var sum = 0;
  for (let value of args){
    sum+= value;
  }
  return sum/args.length;
}
console.log(avgRPO(10,11,12,13,14));

// .apply() function with an arbitrary array of arguments
console.log(avgRPO.apply(null,[8,9,10,11]))
