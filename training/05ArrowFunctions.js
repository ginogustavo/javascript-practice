
var myElements = ['Hydrogen', 'Helium','Lithium','Berillium'];

var newArray = myElements.map( function(singleElement){
    return singleElement.length;
} );

console.log(newArray);

var youngerSiblingAges = [4,6,8,10];
var olderSiblingAges = youngerSiblingAges.map( function(age){
  return age*2;
});
console.log(olderSiblingAges);

//Using Arrow function
var olderSiblingAges2 = youngerSiblingAges.map( (age) => {return age*3;});
console.log(olderSiblingAges2);
