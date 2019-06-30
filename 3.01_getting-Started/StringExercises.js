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