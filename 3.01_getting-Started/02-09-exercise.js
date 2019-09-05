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

// example 
function greeting(person) {
    var name = person ? person.name : "stranger";
    return person ? "Howdy, " + name : "who are you, " + name 
}

console.log(greeting({name: 'Alice'}));  // "Howdy, Alice"
console.log(greeting(null));             // "Howdy, stranger"
console.log("++++++++++++++++++++++++++++++++++++++");



// You are given 2 out of 3 of the angles in a triangle, in degrees.

// Write a function that classifies the missing angle as either "acute", "right", or "obtuse" based on its degrees.

// An acute angle is one smaller than 90 degrees.
// A right angle is one that is exactly 90 degrees.
// An obtuse angle is one greater than 90 degrees (but smaller than 180 degrees).
// For example: missingAngle(11, 20) should return "obtuse", since the missing angle would be 149 degrees, which makes it obtuse.

function missingAngle(angle1, angle2) {
    let triangle = 180;
    let res = triangle - (angle1 + angle2);
    if (res == 90 ) {
        return "right";
    } else if (res < 90 ){
        return "acute" ;
    }else{
        return "obtuse" ;
    }
}

console.log(missingAngle(27, 59));  // ➞ "obtuse" 
console.log(missingAngle(135, 11)); //➞ "acute"
console.log(missingAngle(45, 45)); //➞ "right"


console.log("++++++++++++++++++++++++++++++++++++++");

// Create a function that takes a number (from 1 to 12) and return its corresponding month name as a string.

// Months
// January
// February
// March
// April
// May
// June
// July
// August
// September
// October
// November
// December

function month_name(num) {
	let arr = ['January','February','March','April','May','June',
        'July','August','September','October',' November', 'December'];
        console.log(arr[num - 1]);
}        

month_name(3) //➞ "March"
month_name(12) //➞ "December"
month_name(6) //➞ "June"

console.log("++++++++++++++++++++++++++++++++++++++");

// Create a function that takes a string and returns the word count. The string will be a sentence.

function countWords(str) {
    str = str.split(' ')
    console.log(str);
    console.log(str.length);
}
countWords("Just an example here move along") // ➞ 6
countWords("This is a test") //➞ 4
countWords("What an easy task, right") //➞ 5

console.log("++++++++++++++++++++++++++++++++++++++");

// Create a function that takes a base number and an exponent number and returns the calculation.
function calculateExponent(num, exp) {
	console.log(Math.pow(num, exp));
}
calculateExponent(5, 5) //➞ 3125
calculateExponent(10, 10) //➞ 10000000000
calculateExponent(3, 3) //➞ 27

console.log("++++++++++++++++++++++++++++++++++++++");




console.log("++++++++++++++++++++++++++++++++++++++");




console.log("++++++++++++++++++++++++++++++++++++++");
