// //Write a program to compute the average marks of the following students Then, this average is used to determine the corresponding grade.
// //David    80
// //Vinoth 77
// //Divya    88
// //Ishitha 95
// //Thomas 68
// //
// //The grades are computed as follows :
// //Range    Grade
// //<60    F
// //<70    D
// //<80    C
// //<90    B
// //<100 A



// function calcul(...name) {
//     let total = 0
//     for (let i = 0; i < name.length; i++) {
//         ;
//         total += name[i]
//         console.log(total);
//     } 
//      let average = total / name.length
//      console.log(average);
     
//      if (average >  0 && average <= 60) {
//          console.log(`The average is : ${average} in the Grade is F`);
//      }else if (average > 60 && average <= 70) {
//         console.log(`The average is : ${average} in the Grade is D`);
//      }else if (average > 70  && average <= 80) {
//         console.log(`The average is : ${average} in the Grade is C`);
//      }else if (average  > 80 && average <= 90) {
//         console.log(`The average is : ${average} in the Grade is B`);
//      }else if (average  > 90 && average <=100) {
//         console.log(`The average is : ${average} in the Grade is A`);
//      }
// }
// calcul(12,70,100) 

//2. Write a program to compute the sum and product of an array of integers.

// function arrayOfIntegers(params) {
//     let num = params;
//     let sum = 0;
//     let product = 1;

//     for (let i = 0; i < num.length; i++) {
//         sum += num[i];
//         product *= num[i];  
//         console.log(` the sum is : ${sum} ande product is : ${product}`);

//    }

// }
// arrayOfIntegers([20,20,30,30,40,40])

// Find the sum of squares of a numeric vector

// function sumOfSquares(params) {
//     let sum = 0;
//     let i = params.length
// }



//3. Write a program which prints the elements of the following array:
//let arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
//Sample Output:
//"row 0"
//" 1"
//" 2"
//" 1"
//" 24"
//"row 1"
//" 8"
//" 11"
//" 9"
//" 4"

// let arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//     count++
//     console.log(`row ${count} is :`)
//     for (let j = 0; j < arr[j].length; j++) {
//         console.log(arr[i][j]);  
//     }
// }
 
//Missing Number
//Create a function that takes an array of numbers between 0 and 10 (excluding one number) and returns the missing number.
//Examples:
//missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
//missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
//missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7

// let missingNums = [1, 3, 4,5,6, 7,8, 9, 10];
// for (let i = 1; i < missingNums.length+1; i++) {
//   if (missingNums.indexOf(i) == -1) {
//     console.log(i);
//   }
// }

// function missing(arr) {
//     let total = 55;
//     for (let i = 0; i < arr.length; i++) {        
//         total -= arr[i]
//     }
//     return total;
// }

// missing(1,2,3,5,6,7,8,9,10);



// Remove duplicate items from an array (ignore case sensitivity).
// Input : var nums = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
//Output nums= [1, 2, 3, 4, 5, 6,7,8]

// var nums = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6,9,10,11];

// for (let i = 0; i < nums.length; i++) {    
//     for (let j = 0; j < nums.length; j++) {
//         if (nums[i] == nums[j] ) {
//             if (i != j) {
//                 nums.splice(j,1)                     
//             }
//         }        
//     }
    
// }

// function name(params) {
//     let min = '';
//     let res = [];
//     let lola = params.length;
//     for (let i = 0; i < lola; i++) {
    
//        min = Math.min.apply(null,params);
//     //    console.log(nums.indexOf(min));
//     params.splice(params.indexOf(min),1);
//        res.push(min) 
//     }
//     return res ;
// }
// console.log(name(nums));






// /Create a function that takes an array of numbers and return the number that's unique.
//Examples:
//unique([3, 3, 3, 7, 3, 3]) ➞ 7
//unique([0, 0, 0.77, 0, 0]) ➞ 0.77
//unique([0, 1, 1, 1, 1, 1, 1, 1]) ➞ 0

// function returnUnique(params) {
//     let res = '';
//     for (let i = 0; i < params.length; i++) {
//         for (let j = 0; j < params.length; j++) {
//             if             
//         }
     
//     }
//     console.log(res);
    
// }
// returnUnique([3, 3, 3, 7, 3, 3])








// Create a function toCamelCase() that takes a single string and convert it into camelCase from snake_case.
//Examples:
//toCamelCase("hello_world") ➞ "helloWorld"
//toCamelCase("javascript_is_fun") ➞ "javaScriptIsFun"

// function toCamelCase(params) {
//     params = params.split("_")
//     console.log(params);
//     for (let i = 0; i < params.length; i++) {
//         console.log(params[i]);
//         params[i] = params[i].charAt(0).toUpperCase() + params[i].substring(1);  
//     }
//     params = params.join("")
//     console.log(params);    
// }
// toCamelCase("hello_world_je_suis");



//Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns //either true or false.
//* Return a boolean value (true or false).
//* The string can contain any character.
//* When neither an x nor an o is in the string, return true.
//
//Examples:
//XO("ooxx") ➞ true
//XO("xooxx") ➞ false
//XO("ooxXm") ➞ true (case insensitive)
//XO("zpzpzpp") ➞ true (returns true if no x and o)
//XO("zzoo") ➞ false

function sameNumber(params) {
    params = params.toLowerCase() 
    let count = "";
    let xCount = '';

    for (let i = 0; i < params.length; i++) {
      if (params[i] == "o") {
          count++
      }
      if (params[i]== 'x') {
          xCount++
      }
 
    }  
    if ( count == xCount) {
        return true
    } else{
        return false
    }
}
console.log(sameNumber ("oooxXx"));
 

//     for (let j = 0; j < nums.length; j++) {
//         if (nums[i] == nums[j] ) {
//             if (i != j) {
//                 nums.splice(j,1)                     
//             }