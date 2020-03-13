function add() {
  var sum = 0;
  for(var i= 0;i<arguments.length;i++){
    sum+= arguments[i];
  }
  return sum;
}

sum = add(3, 4, 10);
console.log(sum);
