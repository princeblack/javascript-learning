//1. Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console.
var thePark = 'I can walk in the park all day!';
console.log(thePark.slice(18,22));
console.log(thePark.length);

// 2. Declare a variable with the value "JavaScript". Use string methods to print the the characters "aSc" from your declared variable.
let js='JavaScript'
var js_resultat= js.startsWith
console.log(js.slice(3,6));

// 3. Declare a variable with the value of "Hello World". Covert the value to upper case and print the converted value to the console.
let salutation = "Hello World";
console.log(salutation.toUpperCase());

// 4. Declare another variable with the value of "Hello Earthling". Convert the value to lower case and print the converted value to the console.
const Earthling = "Hello Earthling";
console.log(Earthling.toLowerCase());

// 5. Check if the sentence "nice shoes" contains the letter l or n. 
var shoes = "nice shoes";
var nice = shoes.includes('l',);
console.log(nice)
nice = shoes.includes('n');
console.log(nice)

// 6. Create a new string from a given string with the first character of the given string added at the front and back. example of exepected output: JavaScript => JJavaScriptJ
 var a = "moumouni";
 var b = a.slice(0,1);
 console.log(b)
 var rst = b+a+b;
 console.log(rst);

//  7. Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more. eg. of output: javascript => iptJavaScriptipt

var c = "moumouni";
 var d = c.slice(5);
 console.log(d)
 var rst2 = d+c+d;
 console.log(rst2);

// 8. Create a variable and assign a string value to it. Then, convert the value to upper case and print the converted value to the console and check whether it includes "Java".
var javastring = "this is javascript and not java";
var java = javastring.includes('java');
console.log(java);

// 9. Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 2. eg. of output JavaScript => tavaScripJ
var chang = "JavaScript";
var retro = chang.slice(1,4);
var retro2 = chang.slice(0,1);
var retro3 = chang.slice(4,9);
var retro4 = chang.slice(9);
const retrofinal = retro4+retro+retro3+retro2;
console.log(retrofinal);

// 10. Create 3 different variables about yourself using strings as values e.g. let firstName = "Maria". Print the sentence to the console using string interpolation. e.g. of output "My name is Maria. I live in Berlin and I am a teacher". 
let name = 'madi';
let city = 'Berlin';
let prof = 'web-developer'
console.log(`my name is ${name} and im living in  ${city} working ass ${prof} `);

// 11. Declare a variable and assign the value "the quick brown fox" (all in lower case). Capitalize the first letter of that string. Print the result to the console.
console.log('=============')
var quick ="the quick brown fox";
    quick.charAt(1)
    console.log(quick);

var cal = 5, cal1 = 10;
let rest = cal + cal1;


