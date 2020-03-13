var a = new Array();
a[0] = "dog";
a[1] = "cat";
a[2] = "parrot";
a[100] = "fox";
console.log(a.length);

var b = ['apple', 'oranges', 'avocado']
console.log(b.length);

for (const i of b){
  console.log(i);
}

b.forEach(function(currentValue, index, array){
  console.log(index+" "+currentValue+ " "+ array);
});

b.push("strawberry")
console.log(b)
