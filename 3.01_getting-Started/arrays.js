// let fruit = ['mango', 'pineapple', 'banana']
// let vegatables =  new Array ('tomato', 'pak choi', 'aubergine')
// console.log(fruit );

// let bands = [['Queen', 'Iron and Wine','Tokyo Hotel','Green Day'],'Black Sabbath','Guns n Roses']
// console.log(bands);


// console.log("=================================================");
// console.log(bands);


// for (let i = 0; i < bands.length; i++) {
//     console.log(bands[i]);
//     for (let j = 0; j < bands[i].length; j++) {
//         console.log(bands[i][j]);
//         bands = bands[i][j].toUpperCase()
        
//     }
    
// }


// 1. Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.


let euroCities =["Paris", "London", "Valletta", "Prague", "Rome"];

let getFormEuroCities =  euroCities[1];
console.log(getFormEuroCities);

console.log("======================================================");
// Change the first item in the array to "Berlin".

euroCities.splice([0],1,'Berlin');
console.log(euroCities);

console.log("======================================================");
// 3. Print the length of the array "euroCities".

console.log(euroCities.length);

console.log("======================================================");
// 4. Remove the last item of the array "euroCities".

euroCities.pop();
console.log(euroCities);

console.log("======================================================");
// 5. Use an array method to add "Budapest" to the euroCities array.

euroCities.push('Budapest');
console.log(euroCities);

console.log("======================================================");
// 6. Remove the second and third items from the euroCities array.

euroCities.splice(1,2);
console.log(euroCities);

console.log("======================================================");
// 7. Create another variable named asianCities and assign an array to the variable. Clone the array asianCities.

let asianCities = ['Shanghai','Karachi','Dhaka','Delhi','Istanbul'];
let asianCitiesClones = asianCities.slice('');
console.log(asianCitiesClones);

console.log("======================================================");
// 8. Use an array method to select items 2-4 from the array of asianCities and store this in another variable.

let recevAsianCities = asianCities.slice(2,4);
console.log(recevAsianCities);

console.log("======================================================");
// 9. Use a method to concat euroCities with asianCities. Store the result in a variable (eg. worldCities).

let  worldCities = euroCities.concat(asianCities);
console.log(worldCities);

console.log("======================================================");
// 10. Reverse the order of worldCities.

worldCities = worldCities.reverse();
console.log(worldCities);

console.log("======================================================");
// 11. Replace the 3rd item in the array of worldCities with "Toronto".

worldCities.splice(3,1,'Toronto');
console.log(worldCities);

console.log("======================================================");
// 12. Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position.

worldCities.splice(2,0,'Washington');
console.log(worldCities);

console.log("======================================================");
// 13. Write a program to join all elements of the result (worldCities) into a string.
// Example: worldCities = ["Berlin", "London", "Bangkok", "Phnom Penh"];
// Expected Output:
// "Berlin,London,Bangkok,Phnom Penh"
// "Berlin+London+Bangkok+Phnom Penh"

function name(params) {
    let converse = params.join(' + ');
    return console.log(converse);
    
}
name(worldCities);

console.log("======================================================");
// 14. Empty the array euroCities while keeping the original intact.

let EmptyWorld = worldCities[-0][-1]
console.log(EmptyWorld);


console.log("======================================================");
// 15. Write a program to reverse the string: "Hello World".
var great = ['hello world']
function reverseHello(params) {
    let getReversre = params.reverse();
    return console.log(getReversre);
}
reverseHello(great);
// ##Extra Practice

// **Print the results to the console.**
console.log("======================================================");
// 1. Make an array of your siblings' names or your favorite movie characters' names.

 let siblings = ['Mariam','Fatila','Abarata'];

 console.log("======================================================");
//  2. Make an array of your parents' names.

let parents = ['Boureima', 'Aminata'];

console.log("======================================================");
// 3. Combine these two arrays.
let familie = parents.concat(siblings);
console.log(familie);

console.log("======================================================");
// 4. Add your pets' names.
 
familie.push('Animal : Commado');
console.log(familie);

console.log("======================================================");
// 5. Reverse the order of the array.

familie = familie.reverse();
console.log(familie);

console.log("======================================================");
// 6. Access one of your parents' names.

console.log(familie[4]);


console.log("======================================================");
// 7. Update the name of one of your parents.

familie [5] = 'Ibrahime';
console.log(familie);

// Create a function that takes an array of numbers and return the first and last elements as a new array.

function firstLast(arr) {
    arr = [arr[0],arr[arr.length -1]];
    return arr   
}
firstLast([5, 10, 15, 20, 25]) // ➞ [5, 25]

// Create a function that returns the ASCII value of the passed in character.
function ctoa(c) {
	return c.charCodeAt()
}

ctoa("A")  //➞ 65

// Write two functions:
// toInt() : A function to convert a string to an integer.
// toStr() : A function to convert an integer to a string.
function toInt(str) {
    str =parseInt(str);
    return str
}

function toStr(int) {
    int = String(int)
    return int
}

toInt("77")  //➞ 77
toStr(532)   //➞ "532"

// Given a number and an object with min and max properties, return true if the number lies within the given range (inclusive).

function isInRange(num, range) {
	if (  num >=  Math.min(range.min) &&  num <= Math.max(range.max)) {
        return true
    }else{
        return false
    }
}
console.log(isInRange(4, { min: 0, max: 5 }));
 //➞ true
console.log( isInRange(4, { min: 4, max: 5 }));
 //➞ true
 console.log(isInRange(4, { min: 6, max: 10 }));
 //➞ false
 console.log(isInRange(5, { min: 5, max: 5 }));
 //➞ true

//  Create a function that takes a number as an argument and returns the amount of digits it has.

function findDigitAmount(num) {
    num =  num.toString()
    return num.length
    
}
console.log(findDigitAmount(123));


