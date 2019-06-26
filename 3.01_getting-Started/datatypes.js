/*Data Types
strings (represents textual data)
number(numebr of any kind)
boolean (logical type)
Undefined
Null
Symbol*/

//Data Type: string

let str="hello";
let str1="Single quota are ok too"
console.log(str, str1);
let name="John";

console.log(`hello, ${name}`);
console.log("hello "+ name);
console.log(`the result is ${ 2+5}`);

let myName="mahamadi 123456789";
console.log(myName);
console.log(myName[6]);
console.log(myName.length);

// Data Type: Number

console.log(1/0);
console.log("this is number"/2);
let currentYear=2019;
console.log(currentYear);
console.log(currentYear[3]);
console.log(currentYear.length);
let n=12.344;
console.log(n);
let myNumber=1234e17;
console.log(myNumber);
let myNumber1=1234e-3;
console.log(myNumber1);
let myNumber2=1234e-5;
console.log(myNumber2);
let newNum=20;
console.log(newNum * Infinity);
console.log(newNum* -Infinity);

let country="Germany";
console.log(country/newNum);

// concatenation
let concat1="hello";
let concat2="world";
let conact3=concat1 + concat2;
console.log(conact3);
console.log(concat1 + " " + concat2);

// concatenate numbers and strings

let num1=20;
let num2=20;
let num3="hello";
let num4= num1+ num2+ num3;
console.log(num4);

let num5="hello";
let num6=num5+num1+num2;
console.log(num6);
let num7=num5+(num1+num2);
console.log(num7);


// Data Types boolean
let isGreater= 4>1;
console.log(isGreater);


let myObject={
             key1:"value",
             key2:12345,
             key3: {
                 newObject:"hello",
             }

};
console.log(myObject);

// personal information odject

var infoObject={
    firstName:"mahamadi",
    lastName:"congo",
    adress:{
        streetName: "septimer str 111",
        plz:12345,
        city: "Berlin",
    }
};

console.log(infoObject);
console.log(infoObject.adress.city);
console.log(infoObject.lastName);
