const mark_mass = 80
const mark_height = 1.78
const jhon_mass = 75
const john_height = 1.74
const mark_bmi = mark_mass / mark_height ** 2
const john_bmi = jhon_mass / john_height ** 2
const markHigherBMI = mark_bmi > john_bmi;
if(markHigherBMI){
  console.log(`Mark's BMI(${mark_bmi}) is hight than Jhon's (${john_bmi})!`)
}else{
  console.log(`John's BMI(${john_bmi}) is hight than Mark's (${mark_bmi})!`)
}


////////
//use backticks for Template literals
const firstName = 'Gino';
const job = 'engineer';
const birth = 1983;
const year = 2021;

const msg = `Hi, I'm ${firstName} a ${(year -birth)} years old ${job}`
console.log(msg)
console.log(`simple string in backticks...`)

//Multiple lines: before it was harder with \n\
console.log('String with \n\
  multiple \n\
  lines')

//with backticks it's easier
console.log(`Another string
  with multiple
  lines`)

//Type Conversion
const inputVariable = '20'
const myConvertedNumber = Number(inputVariable)
console.log(myConvertedNumber)
console.log(inputVariable)
console.log(Number('abc')) //NaN
console.log(typeof NaN) // number
console.log(String('4654')) //as number

// Type Cooercion:  When an operator deals with 2 values that have diff types

console.log("I am "+ 50 + " years old")// the plus operator triggers a Cooercion of String
console.log("I am "+ '50' + " years old") // will be the same as converting as 50 as string

console.log('23' - '10' -3) // coercion from string to numbers
console.log('23' + '10' +3) // 3 is converted to String and everything is concatenated
console.log('23' * '10')
console.log('23' > '10')
// Only plus operator converted all numbers to String

//Sample
let n = '1' + 1 // this converted 2nd operand to a String and n='11'
n = n - 1 // n is converted to Num and it would bue n = 11 -1 = 10
console.log(n)
console.log(2+3+4+'5') // String 95 <- bc 3 first are sum up and then concatenated as 95
console.log('10'-'4'-'3'- 2 + '5') //<-

// 5 Falsy Values
// 0, '', undefined, null, NaN
console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean('Jonas'))
console.log(Boolean({}))
console.log(Boolean(''))  // the conversion of Boolean in practice is implicit

const money = 0;
if(money){
  console.log("done spend it all")
}else{
  console.log("you should get a job")
}

let height;
if(height){
  //If e.g. let height = 23 , it is truthly value
  console.log('height is defined');
}else{
  console.log('height is UNDEFINED');
}

//ISSUE, What if height = 0, is a valid Number, but is evaluated as False.
