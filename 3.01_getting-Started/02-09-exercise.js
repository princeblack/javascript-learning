// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.


function addUp(num) {

    let total = 0;
	for (let i = 0; i <= num; i++) {
       total += i ;
    } 
    return total;

}
console.log(addUp(4));

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
	if (input == (false),(null),(undefined),(0),(0n), (NaN),(''),(""),(``)) {
        return 0;
    } else {
        return 1;
    }
}

console.log(isTruthy(2));
 //➞ 0

console.log(isTruthy(false) );
//➞ 0

console.log(isTruthy(""));
 //➞ 0

console.log(isTruthy("false"));
 //➞ 1