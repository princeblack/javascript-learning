/*
1. Copy and paste these variables into your JavaScript file. In the commented section, write down which type you think each variable is. Check your answers by printing the types to the console. 
*/

let length = 16.78; //number
let lastName = "Johnson"; // string
let car = ""; //string
let isOpen = true; //boolean
console.log(typeof(length));
console.log(typeof(lastName));
console.log(typeof(car));
console.log(typeof(isOpen));

/*
2. Declare two variables called ageMark and ageJohn. Assign their ages - one age should be assigned as a string, the other as a number. Print the variables' data types to the console.
*/
var ageMark = 33;
var ageJohn = "45 year old";
console.log(ageJohn, "and", ageMark);

/*
3. Is John older than Mark? Declare a variable with a boolean value and print the following to the console eg. "John is older than Mark: true"
*/
if (ageJohn > ageMark) {
    console.log("John is older than Mark: true");    
} else {
    console.log("we have problem because John is really older then Mark");    
}
ageJohn=true;
console.log(`John is older than Mark ${ageJohn}`);

/*
4. Declare a variable called x. Do not assign a value. Print x's data type to the console.
*/
var X ;
console.log(typeof X);

/*
5. Assign a string to x. Print x's data type again.
*/
X= "i am the one";
console.log(typeof X)

/*
6. Print the last character of x's string to the console.
*/
console.log(X[11]);

/*
7. Print the length of x to the console, as well as the data type of x's length.
*/
 console.log(X .length);

/*
8. Declare three variables: a, b, c. Assign numbers to each of the variables. Check if the variable values are equal or not (e.g. console.log(a == b);). Do this for each possibility (a, b) (a, c), (b, c). Then, print the data type of this check to the console.
*/

var a=123;
var b=456;
var c=789;
console.log(a == b);
console.log(a == c);
console.log(b == a);
console.log(b == c);
console.log(c == b);
console.log(c == a);

/*
9. What is the type of Infinity? Comment your answer. Print the type of infinity to the console.
*/

/*
10. Declare a variable. Assign the variable the value of a number or a string. Use the isNaN() method to check whether the variable is a number or not. Print "variable is NOT a number: true/false".
*/

var number = 135;
console.log(number);
console.log(isNaN(number));
number= true;
console.log(`variable is NOT a number: ${number}`);


/*
11. Print the data type of isNaN(variable) to the console.
 */