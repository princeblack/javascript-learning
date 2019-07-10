let name='Mahamadi';  //string
let lastName = "Congo";//string
var fullname = "Mahamadi congo" //string
var age = 27;
const myFullName = name + " " + lastName;
console.log(myFullName);

var smt = `hello ` + name + '! ' + 'your age is ' + age + '.';
console.log(smt);
var smt = `hello ${name}! you age is ${age}`;
console.log(smt);

var vr = typeof smt;
console.log(vr);

console.log(smt.length);
var test = 
console.log(test)
console.log(age);
age = age % 2;
console.log(age);

let poem = 'to be or not to be';
console.log(poem);


//toUpperCase

var steve = poem.toUpperCase();
console.log(steve);

// toLowerCase
steve = poem.toLowerCase();
console.log(steve);

// endWith
let result = poem.endsWith('be');
console.log(`this poems end with 'be' ${result}`);

// slice
result = poem.slice(5,10);
console.log(result);
var index = 5;
var name1 ='dmc'

console.log(`the poem is ${index} time better then${name1}`);

var sentence = 'The quick brown fox jumps over the lazy dog.';
console.log('The character at index ' + index + ' is ' + sentence.charAt(index));
// expected output: "The character at index 4 is q"


