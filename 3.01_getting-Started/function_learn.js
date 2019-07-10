
showMessage();
console.log("the second s")
function showMessage() {
    console.log('Hello Everyone!');
}
 function test() {
    var wordToCheck ="madam";
    var tempLng=wordToCheck.length;
    var halfthelength = wordToCheck.length / 2;
    var booleant = true;
    for (let index = 0; index < halfthelength; index++) {
    
        let partWord1=wordToCheck.slice(index,index+1);
        let partWord2=wordToCheck.slice(wordToCheck.length-index-1,wordToCheck.length-index);
    
       if ( partWord1 !== partWord2) {
           booleant = false;
       }
    }
    console.log(booleant); 
 }
 test();

 let showMessage2 = function(){
     console.log(`i am function expressoin`)
 };
 showMessage2();
 let copyfun = showMessage2;
 copyfun();

 showMessage2 = showMessage;

 showMessage2();

//  const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   })
  
//   readline.question(`What's your name?`, (name) => {
//     console.log(`Hi ${name}!`)
//     readline.close() 
//   })

  const showMessageWithArron = () => {
    console.log('i am arrow function')
};
showMessageWithArron();

// ===========================================

const showMessageWithArronWithParm = (message) => {
    console.log(message);
};
showMessageWithArronWithParm('i am arrow function');

let sum = (a,b) =>{
    console.log(a + b);
};
sum(4,5);

let sam = (a,b) => a + b;
console.log(sam(4,5));

const param1 = true;
const param2 = false;

function twoParams(p1,p2) {
    console.log(p1,p2);    
}
twoParams(param1,param2)

function showGreeting(form, text) {
    console.log(form + ':' + text)
}
showGreeting('Ann','hello')

function showGreetingDefaultValue(form, text= 'no text given') {
    console.log(form + ':' + text)
}
showGreetingDefaultValue('Ann',);

function aboutMe (firstName,lastName,work) {
    console.log ('MY name is ' + firstName + " " + lastName + "and I am a " +  work)
};
aboutMe('ali','mohammed ','IT enginer');

function personInfo(firstName, yearofBirth , lastName= 'smith ',
nationality= ' Germany') {
    console.log(firstName + '' + lastName + '' + yearofBirth + '' + nationality)    
}
personInfo('john',1890 ,);

function test() {
    return true ;    
}
console.log(test());

function sumWithReturn(a,b) {
    return a + b;
}
let result = sumWithReturn(1,455 +(34 *80))
console.log(result)

function doNothing() {
    
}
console.log(doNothing()===undefined)
function doNothing1() {
    return;
}
console.log(doNothing1()===undefined)

function pyramid(n) {

    for(let i=1; i<= n; i++){
  
      let str = ' '.repeat(n-i);
      let str2 = '*'. repeat(i*2 -1)   
      console.log(str + str2 + str);
    }
}
pyramid(8);


function displayPyramid(n) {
    for (var i = 0; i < n; i++) {
        var str = '';
        for (var j = 1; j < n - i; j++) {
            str = str + ' ';
        }
        for (var k = 1; k <= (2 * i + 1); k++) {
            str = str + '*';
        }
        console.log(str);
    }
 }
 displayPyramid(8);


