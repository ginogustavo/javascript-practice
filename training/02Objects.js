//Creation objects

// 1st approach
function makePerson(first, last){
  return {
    first: first,
    last : last,
    fullName: function(){
      return this.first + " "+this.last;
    },
    reversedName: function(){
      return this.last+", "+this.first;
    }
  };
}

var n = makePerson("Maria", "Soto");
console.log(n.fullName());
console.log(n.reversedName());

// 2nd approach: Using This
function Person(first, last){
  this.first = first;
  this.last = last;
  this.fullName = function(){
    return this.first + "  "+ this.last;
  };
  this.reversedName = function(){
    return this.last+", "+this.first;
  }
}

var per = new Person("Lyta", "Qui");
console.log(per.fullName());

// 3rd approach: shared code for functions
function personFullName(){
  return this.first + "  "+ this.last;
}
function reversedName(){
  return this.last+", "+this.first;
}
function Person2(first, last){
  this.first = first;
  this.last = last;
  this.fullName = personFullName;
  this.reversedName = reversedName;
}
p2 = new Person2("Jhonny", "BO");
console.log(p2.fullName());
