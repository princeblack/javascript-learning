// let a = 13, 
//     b = 5,
//     c = 22,
//     d = 6,
//     e = 24;

// let mult1 = a * b;
// console.log(mult1)

// let mult2 = c * d;
// console.log(mult1)

// let mult3 = e * e;
// console.log(mult1)


// function multiplication() {
//     let a = 13, 
//         b = 5,
//         c = 22,
//         d = 6,
//         e = 24;

//     let mult1 = a * b;
//     console.log(mult1)

//     let mult2 = c * d;
//     console.log(mult1)

//     let mult3 = e * e;
//     console.log(mult1)

// }
// multiplication();


// function multiplication(a,b){
   
//     console.log(`My a is ${a}`)
//     console.log(`My b is ${b}`)
//     if (typeof (a) !== 'number' || typeof (b) !== 'number'){
//         console.log(`is`)
//         return
//     }

//     let mult = a * b;
//     console.log(mult)
// }
// multiplication( 13, 'bab');

//  a = 100;
//  b = 39 ;
//  console.log(a * b)

//  function checkIfDividedBySeven(num) {
//      if ( isNaN(num)){
//          console.log(`Feed me a number you fool`)
//          return
//      }
//      if (num % 7 === 0) {
//          console.log(`${num} is divided by 7`)         
//      } else{
//          console.log(`${num} is not divided by 7`)
//      }
     
//  }
//  checkIfDividedBySeven(`jhkdhi`);

// let checkIfDividedBySeven = function (num) {
//     if ( isNaN(num)){
//         return false
//     }
//     if (num % 7 === 0) {
//         console.log(`${num} is divided by 7`)
//         return true         
//     } else{
//         console.log(`${num} is not divided by 7`)
//     }
    
// }
// console.log(checkIfDividedBySeven(7));

// function selfMulti(num) {
//     console.log('I am inside selfMutli')
//     let res = num *num ;
//     console.log(`I have multiplies ${num} by it self`)
//     console.log(`I will call multiTwelve for ${res}`)
//     multiTwelve(res)
//     console.log(`I will print the selfMulti result`)
//     console.log(res)
// }

// function multiTwelve(num) {
//     console.log(`I have inside multiTwelve`)
//     let res = num * 12
//     console.log(res)
// }
// selfMulti(5)


// function drawPyramid(num){
//     let res;
//     console.log(I` am about to print some stuff`)   
//     for (let j = 0; j < num; j++) {
//         console.log(`this is for line number`)
//         res = '*';
//         console.log(`I am starting the stars loop`)
//         // add the spaces
//         for (let k = m; k > 0; k--) {
//             console.log(`this is spaces iteration number`)
//             res = '0' + res;
//             console.log(`I have added a space`)
//             console.log(res)            
//         }  
//         console.log(`I am done with the spaces loop`)
//         // add the stars
//         console.log(`I am starthing the stars loop`) 
//         for (let i = 0; i < ; i++) {
//             console.log();
            
//         }  
//     }
// }
// drawPyramid(5);

// rest Operator
// function countAgrument(par1, par2, par3){
//     console.log(par1 + " " + par2 + " " + par3);
    
// }
// countAgrument('Welcome', 'to', 'Earth');

// function name(par1,...args) {

//     console.log(args);    
// }
// name('Welcome', 'to', 'Earth');

//Task : Pass all your personal info as parameters except first name , last name and birth date and rest all the info (like title,city,zip,country) collect as rest operator and proper display via console inside the function.

// function personal(name,lastName,birth,...moreInfo) {
//     console.log(name + " " + lastName + " " + birth);
//     console.log('*******************');
//     let moreData = moreInfo[0];
//     console.log(moreData);
//     console.log('*******************');
//     console.log(moreInfo.slice(1,4).join(' '));
   
// }
// personal('Mahamadi', 'Congo', '1991', 'More Info:', 'Berlin', '12053', 'Germany');

// // Global Scope
// let userName01 = "John";

// function showName() {
//     var userName01 = "Madi"
//     let message = "hello , " + userName01;
//     console.log(message);
    
// }
// showName()
// console.log("   ");

// var tableau_associa={
//     "valeur1":10,
//     "valeur2":55,
//     "valeur3":30
//     };
// console.log(tableau_associa);

//Task : Make Two Functions
//Create one gobal variable and it contains both function info and show in console log.
//Function 1 : Contains Personal Info (Full name, date of birth, Title, age)
//Function 2 : Contains Address Info (City,State,Zip, Country)
//Hint Take Third function to merge both values and put in global variables.
// let dataInfo= " i'm the little God of javascript";

// function personalInfo() {    
//     const name = "Mahamadi";
//     const lastName = "Congo";
//     const date = 1991;   
//     return name + " " + lastName +" " + date + " ";
// }
// dataInfo = personalInfo();
// function addressInfo() {
//     var City = 'berlin',
//     Zip = "12053",
//     Country = "Germany";
//     let homeData = City + " " + Zip + " " + Country;
//    return homeData;
// }
// dataInfo = personalInfo() + " " + addressInfo();
// console.log(dataInfo);
// personalInfo("24564")
// addressInfo()
// console.log(dataInfo);

// passing Function as agruments
// var name = "John";
// function detailsCalculate(name, birthYear, calcule) {
//     console.log(`hi , ${name} your age is ${calcule(birthYear)} `);
// }

// function calculateAge(ageParam) {
//     return (2019 - ageParam);
// }
// detailsCalculate(name,1991,calculateAge);

// // ==============================================================

// function isFullAge(ageParam) {
//     return ageParam >= 18 ;
// }
// detailsCalculate(name,1991,isFullAge); 

//Task : Write Javascript function that accepts three arguments, a string,letter and function. Passed Function as argument will count the number of occurrences of the specified letter within the string.
//Sameple arguments, "Iamstudent at DCI", 't',countWord
//Expected output: 3

//  function exString(name,letter,myfunction) {
//      console.log(`${name} ${letter} ${myfunction(name ,letter)}`)
//  }

//  function countWord(str,params) {
//      str = str.toLowerCase();
//   let n = 0;
//   for (let i = 0; i < str.length; i++) {
//       if (str.charAt(i) == params) {
//         n += 1;
//       }
//   }
//   return n;
//  }
//  exString("Iam student at DCI", 't',countWord)


//Task : Write Javascript function that accepts two arguments, a string and function (you can give function: findNotRepeated).
//Passed Function as argument will check the string and find the not repeated character from string and return that not repeated all characters.
//Sample arguments, "axbyazcddbexcyz", findNotRepeated
//Expected output: e

// function findNotRepeated(name, letter) {
//     console.log(`the letter is  ${letter(name)} time inside the word ${name}, `);
    
// }
// function findRepeated(params,find) {
//     let nombre = 0;
//     for (let i = 0; i < params.length; i++) {
//         if (params.includes(i) == find) {
//             nombre += 1;
//         }
        
//     }
//     return nombre;
// }

// findNotRepeated("axbyazcddbexcyz",findRepeated)

function findNotRepeated(name, letter) {
    console.log(`the letter is  ${letter(name)} time inside the word ${name}, `);
    
}
function findRepeated(params) {
    let nombre = ' ';
    for (let i = 0; i < params.length; i++) {
        let res = 0;
        for (let j = 0; j < params.length; j++) {
            if (params[i] === params[j]){
                console.log(params[i]);
                res ++;
            }
            if (res < 2) {
                nombre = params;
                break;
            }
        }

    }
    return nombre;
}

// findNotRepeated("axbyazcddbexcyz",findRepeated);

function interview(job ){
    if (job == 'IBRA') {
        return function (params) {
            console.log(`heeee ${params} what are you talking about are you not Ibra johnson`);
        }
    }  
    if (job == 'ibra') {
        return function (params) {
            console.log(`${params}  welcome to I.T.I Designer ?`);
        } 
    }
    if (job == 'designer') {
        return function designerJob(params) {
            console.log(`${params} can you please enplain what UX Design is ?`)
        }
    }
    if (job == 'teacher') {
        return function teacherJob(params) {
               console.log(`what subject do you teach , ${params}`);       
        }
    }else{
        return function(params){
            console.log(`Hello, ${params} what do you do ?`);
            
        }
    }

}

// var funCallBack = interview("designer")
// funCallBack("madi")

// Another example

let add = function (a,b) {
    return a + b;
}
let multiply = function(a, b){
    return a * b ;
}
let calc = function(num1, num2, CallBack){
    return CallBack(num1,num2)
}

// console.log(calc(2,3,add));

// Task : Write function that return string with capitalize the first character of the each in the string. put main logic inside getCapitalize function.
// Usage : letterCapitalize("hello world", getCapitalize);
// output : Hello World
// Usage : letterCapitalize("i am stundent of the dci",getCapitalize)
// output : I Am Student Of The Dci

function letterCapitalize(params) {

    if (paramas) {

        return
    }
}
function getCapitalize(params) {
    let count = '';  
}
getCapitalize('je suis malade')


