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
canCapture(["A8", "E8"])  //➞ true
canCapture(["A1", "B2"]) //➞ false
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

function middleEarth(arr) {
    let sam = arr.indexOf("Sam");
    let frodo = arr.indexOf("Frodo");
    return sam - frodo == 1 || frodo - sam == -1 ||frodo - sam == 1 ||sam - frodo == -1    
}
middleEarth(["Frodo", "Sam", "Gandalf"])//➞ true
middleEarth(["Frodo", "Saruman", "Sam"])//➞ false
middleEarth(["Orc", "Sam", "Frodo", "Legolas"])//➞ true
middleEarth(['Orc', 'Sam','Gandalf', 'Frodo']) //➞ false 
 
// Write a function that takes an integer and returns a string with the given number of "a"s in Edabit.

function howManyTimes(num) {
    let name = 'Edbit'.split('');
    let add = 'a';
    let alf = name.splice(0,2).join('');
    return num > 0? alf+add.repeat(num)+name.splice(-0).join('') : name.join('')  
}  

howManyTimes(15); //➞ "Edaaaaabit"
howManyTimes(0) //➞ "Edbit"
howManyTimes(12) // ➞ "Edaaaaaaaaaaaabit"

// Create a function that goes through the array, incrementing (+1) for each odd number and decrementing (-1) for each even number.

function transform(arr) {
    return arr.map(x => x %2 !==0 ? x +1 :x -1)
}
transform([1, 2, 3, 4, 5]); //➞ [2, 1, 4, 3, 6]
transform([3, 3, 4, 3]) //➞ [4, 4, 3, 4]
transform([2, 2, 0, 8, 10]) //➞ [1, 1, -1, 7, 9]

// Create a function to remove all null values from an array.

function removeNull(arr) {
	return arr.filter(x => x == null ? x != null : x)
}
removeNull(["a", null, "b", null]) //➞ ["a", "b"]
removeNull([null, null, null, null, null]) //➞ []
removeNull([7, 8, null, 9]) //➞ [7, 8, 9]

// Write a function that turns a comma-delimited list into an array of strings.

function toArray(str) {
    let arr = [];
    if (str.length >= 1) {
        str =str.split(', ')
        for (let i = 0; i < str.length; i++) {          
            arr.push(str[i])        
        }
    }
    return arr
}

toArray("watermelon, raspberry, orange")//➞ ["watermelon", "raspberry", "orange"]
toArray("x1, x2, x3, x4, x5")
//➞ ["x1", "x2", "x3", "x4", "x5"]
toArray("a, b, c, d") //➞ ["a", "b", "c", "d"]
toArray("") //➞ []

// Create a function to calculate the determinant of a 2 x 2 matrix. The determinant of the following matrix is: ad - bc:

function calcDeterminant(matrix) {
    let matrix1 = matrix[0][0] * matrix[1][1];
    let matrix2 = matrix[0][1] * matrix[1][0];
    let res = matrix1 - matrix2;
    return res    ;
}
calcDeterminant([[1, 2],[3, 4]]) //➞ -2
calcDeterminant([[5, 3],[3, 1]]) //➞ -4
calcDeterminant([[1, 1],[1, 1]]) //➞ 0

// Create a function that takes a number (from 1 - 60) and returns a corresponding string of hyphens.

function Go(num) {    
	return num >= 1 && num <= 60 ? "-".repeat(num) : ""
} 
Go(60) //➞ "-"
Go(5) //➞ "-----"
Go(3) //➞ "---"


//I am trying to filter out empty arrays from an array. In other words, I want to transform something that looks like this: ["a", "b", [], [], [1, 2, 3]] to look like ["a", "b", [1, 2, 3]]. My code looks like this: 

function removeEmptyArrays(arr) {    
    return arr.filter(x => x.length >= 1 || Number.isInteger(x))
  }
  // What I want:
removeEmptyArrays(["a", "b", []]);
 //➞ ["a", "b"]
removeEmptyArrays([1, 2, [], 4]);
 //➞ [1, 2, 4]

//  Write a function that returns true if there exists at least one number that is larger than or equal to n.

function existsHigher(arr, n) {
	return arr.some(x => x >= n ? true : false)
}

existsHigher([5, 3, 15, 22, 4], 10) //➞ true
existsHigher([1, 2, 3, 4, 5], 8) //➞ false
existsHigher([4, 3, 3, 3, 2, 2, 2], 4) //➞ true
existsHigher([], 5) //➞ false

// Create a function that takes an array of hurdle heights and a jumper's jump height, and determine whether or not the hurdler can clear all the hurdles.

// A hurdler can clear a hurdle if their jump height is greater than or equal to the hurdle height.

function hurdleJump(hurdles, jumpHeight) {    
	return  hurdles.every(x => x <= jumpHeight)
}
hurdleJump([1, 2, 3, 4, 5], 5);
 //➞ true
hurdleJump([5, 5, 3, 4, 5], 3);
 //➞ false
hurdleJump([5, 4, 5, 6], 10);
 //➞ true
hurdleJump([1, 2, 1], 1) //➞ false

// Write a function that reverses a string. Make your function recursive.
function reverse(str) {
    return str.split('').reverse().join('')    
}

console.log(reverse("hello"));
 //➞ "olleh"

reverse("world") //➞ "dlrow"

reverse("a") //➞ "a"

reverse("") //➞ "