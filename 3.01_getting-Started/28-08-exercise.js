/////////////////////////////////////////
////////////////FOREACH//////////////////
/////////////////////////////////////////
/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]
*/
function doubleValues(num) {
    // console.log(num);
    num.forEach((element) => {
        element += element;
        return element;
    });
    
}

// console.log(doubleValues([1,2,3]));


/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]
*/
/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
Examples:
    showFirstAndLast(['colt','matt', 'tim', 'udemy']) // ["ct", "mt", "tm", "uy"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']
*/
/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 
Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]
*/
/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
/////////////////////////////////////////
/////////////////REDUCE//////////////////
/////////////////////////////////////////
// Write a function that will take as an input an array of words and it will concatenate all the words in one.
// output: himynameisslimshady 

var arr = ['hi','myname', 'is', 'slim', 'shady'];
let res = arr.reduce((acc,val)=>{
    return acc + val;   
});

console.log(res);
console.log('::::::::::::::::::::::::::::::::::::::::');



// Turn an array of numbers into a total of all the numbers
// var arr = [1, 5, 77, 33]
// call: addAll(arr); 
// output: 116 
var arr2 = [1, 5, 77, 33]
let arrReslt = arr2.reduce((acc,val)=>{
    return acc + val;
})
console.log(arrReslt);
console.log('::::::::::::::::::::::::::::::::::::::::');


// Figure out how many people voted
// var voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ];
// call: totalVotes(voters); 
// output: 7
var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
const totalVotes = voters.reduce((acc,val)=>{
     if (val.voted == true) {
         acc++
     } 
     return acc
},0);
console.log(totalVotes);
console.log('::::::::::::::::::::::::::::::::::::::::');


//Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
// var wishlist = [
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 }
// ];
// call: shoppingSpree(wishlist); 
// output: 227005

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];
let amount = 0;
const shoppingSpree = wishlist.reduce((acc,val)=>{
    amount += val.price
    return amount;
},0);
console.log(shoppingSpree);
console.log('::::::::::::::::::::::::::::::::::::::::');


//Given an array of arrays, flatten them into a single array
// var arrays = [
//     ["1", "2", "3"],
//     [true],
//     [4, 5, 6]
// ];
// call: flatten(arrays); 
// output: ["1", "2", "3", true, 4, 5, 6];

var arrays = [["1", "2", "3"],[true],[4, 5, 6]];

let test = [];
const flatten = arrays.reduce((acc,val)=>{
    
    return acc;
},[])
console.log(flatten);
console.log('::::::::::::::::::::::::::::::::::::::::');


/////////////////////////////////////////
//////////////////MAP////////////////////
/////////////////////////////////////////
// Make an array of numbers that are doubles of the first array
// call: doubleNumbers([2, 5, 100]); 
// output: [4, 10, 200]
// Take an array of numbers and make them strings
// call: doubleNumbers([2, 5, 100]); 
// output: ['2', '5', '100']
// Capitalize each of an array of names
// call: capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]); 
// output: ["John", "Jacob", "Jingleheimer", "Schmidt"]
// Make an array of strings of the names
// let arr = [
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16  
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]; 
// call: takeNames(arr);
// output: ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
// Using the same array above as input, write a function that returns an array of strings of the names saying whether or not they can go to The Matrix. In order to go to the Matrix you need to be at least 18
// call: whoCanGo(arr)
// output: 
// ["Angelina Jolie can go to The Matrix", 
// "Eric Jones is under age!!", 
// "Paris Hilton is under age!!", 
// "Kayne West is under age!!", 
// "Bob Ziroll can go to The Matrix"]
/////////////////////////////////////////
////////////////FILTER///////////////////
/////////////////////////////////////////
// Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
// call: fiveAndGreaterOnly([3, 6, 8, 2]); 
// output: [6, 8]
// Given an array of numbers, return a new array that only includes the even numbers.
// call: fiveAndGreaterOnly([3, 6, 8, 2]); 
// output: [6, 8, 2]
// Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
// call: fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"]); 
// output"["by", "dog", "wolf", "eaten"] 
// Write a function that will return a new array of people that are members of the Illuminati
//let arr =[
//     {
//         name: "Angelina Jolie",
//         member: true
//     },
//     {
//         name: "Eric Jones",
//         member: false
//     },
//     {
//         name: "Paris Hilton",
//         member: true
//     },
//     {
//         name: "Kayne West",
//         member: false
//     },
//     {
//         name: "Bob Ziroll",
//         member: true
//     }
// ]
//  call : whoIsAnIlluminati(arr)
// Filter out all the people who are not old enough to see The Matrix
// let arr = [
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16  
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]; 
// call: canSeeMAtrix(arr);
/////////////////////////////////////////
/////////////////SORT////////////////////
/////////////////////////////////////////
// Sort an array from smallest number to largest
// call: fromSmallToLarge([1, 3, 5, 2, 90, 20])
// ouput: [1, 2, 3, 5, 20, 90]
// Sort an array from largest number to smallest
// call: fromLargeToSmall([1, 3, 5, 2, 90, 20])
// ouput: [90, 20, 5, 3, 2, 1]
// Sort an array from shortest string to longest
// call: lengthSort(["dog", "wolf", "by", "family", "eaten"]); 
// output: ["by", "dog", "wolf", "eaten", "family"] 
// Sort an array alphabetically
// call: alphabetical(["dog", "wolf", "by", "family", "eaten"]); 
// output: ["by", "dog", "eaten", "family", "wolf"] 
// Sort the objects in the array by age
// let arr = [
//     {
//         name: "Quiet Samurai",
//         age: 22
//     },
//     {
//         name: "Arrogant Ambassador",
//         age: 100
//     },
//     {
//         name: "Misunderstood Observer",
//         age: 2
//     },
//     {
//         name: "Unlucky Swami",
//         age: 77
//     }
// ]
//call: sortByAge(arr);
// Collapse





