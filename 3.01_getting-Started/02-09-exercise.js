// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.


function addUp(num) {

    let total = 0;
	for (let i = 0; i <= num; i++) {
       total += i ;
    } 
    return total;

}
console.log(addUp(4));

console.log("++++++++++++++++++++++++++++++++++++++");


// Write a function that checks if two numbers are either:
// Smaller than 0
// Greater than 0
// Exactly 0

function both(n1, n2) {
	if (Math.sign(n1) == Math.sign(n2)) {
        return true
    } else {
        return false
    }
}
console.log(both(6,2));
console.log("++++++++++++++++++++++++++++++++++++++");

// A "truthy" value is a value that translates to true when evaluated in a Boolean context. All values are truthy unless they're defined as falsy.

// All falsy values are as follows:

// false
// null
// undefined
// 0
// NaN
// ""
// Create a function that takes an argument of any data type and returns 1 if it's truthy and 0 if it's falsy.

function isTruthy(input) {
    return input ? 0 : 1;
}

console.log(isTruthy(2)); //➞ 0
console.log(isTruthy(false) );//➞ 0
console.log(isTruthy("")); //➞ 0
console.log(isTruthy("false")); //➞ 1
 console.log("++++++++++++++++++++++++++++++++++++++");

//  Create a function that checks if the argument is an integer or a string. Return int if it's an integer and str if it's a string.

function intOrString(param) {
    if (isNaN(param)) {
        return "str";
    }else {
        return "int"
    }
   
}

console.log(intOrString(8)); //➞ "int"
console.log(intOrString("Hello")); //➞ "str"
console.log(intOrString(9843532)); //➞ "int"
console.log("++++++++++++++++++++++++++++++++++++++");

function greeting(person) {
    var name = person ? person.name : "stranger";
    return person ? "Howdy, " + name : "who are you, " + name 
}

console.log(greeting({name: 'Alice'}));  // "Howdy, Alice"
console.log(greeting(null));             // "Howdy, stranger"