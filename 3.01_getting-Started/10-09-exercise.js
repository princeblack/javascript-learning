// This is a reverse coding challenge. Normally you're given explicit directions with how to create a function. Here, you must generate your own function to satisfy the relationship between the inputs and outputs.

// Your task is to create a function that, when fed the inputs below, produce the sample outputs shown.

function mysteryFunc(arr, num) {
    return arr.map(x => x%num)
}

[5, 7, 8, 2, 1], 2 //➞ [1, 1, 0, 0, 1]
[9, 8, 16, 47], 4 //➞ [1, 0, 0, 3]
[17, 11, 99, 55, 23, 1], 5 //➞ [2, 1, 4, 0, 3, 1]
[6, 1], 7 //➞ [6, 1]
[3, 2, 9], 3 //➞ [0, 2, 0]
[48, 22, 0, 19, 33, 100], 10 //➞ [8, 2, 0, 9, 3, 0]

// Create a function that takes in an array and returns true if all its values are even, and false otherwise.
// Not a big deal, your friend says. He writes the following code:

/*function checkAllEven(arr) {
    return arr.every(x % 2 === 0)
  }*/

//   The code above leads to a Reference Error, with x being undefined. Fix the code above so that all tests pass:

function checkAllEven(arr) {
    return arr.every(x => x % 2 === 0)
  }

checkAllEven([1, 2, 3, 4]) //➞ false
checkAllEven([2, 4, 6]) //➞ true
checkAllEven([5, 6, 8, 10]) //➞ false
checkAllEven([-2, 2, -2, 2]) //➞ true

// Create a function that returns the smaller number.

function smallerNum(n1, n2) {
    n1 = parseInt(n1)
    n2 = parseInt(n2)
    return n1 > n2 ? n2.toString() : n1.toString()
} 

smallerNum("21", "44") //➞ "21"
smallerNum("1500", "1")  //➞ "1"
smallerNum("5", "5")  //➞ "5"
smallerNum("1500", "16") // ➞ "16"

// Write a function that returns true if two rooks can attack each other, and false otherwise.

function canCapture([yourRook, opponentsRook]) {
	return yourRook.split('')[0] == opponentsRook.split('')[0] || yourRook.split('')[1] == opponentsRook.split('')[1] 
} 
console.log(canCapture(["A8", "E8"]) ); //➞ true
console.log(canCapture(["A1", "B2"])); //➞ false
canCapture(["H4", "H3"]) //➞ true
canCapture(["F5", "C8"]) //➞ false

// Create a function that returns true if an input string contains only uppercase or only lowercase letters.

function sameCase(str) {
	return str == str.toUpperCase() || str == str.toLowerCase()
}

sameCase("hello") //➞ true
sameCase("HELLO"); //➞ true
sameCase("Hello") //➞ false
sameCase("ketcHUp");  //➞ false

// Sam and Frodo need to be close. If they are side by side in the array, your function should return true. If there is a name between them, return false.