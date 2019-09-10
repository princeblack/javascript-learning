// Create a function that takes a string and returns true or false, depending on whether the characters are in order or not.

function isInOrder(str) {
    str = str.split('')
    let comparator = str.slice()    
    comparator = comparator.sort()
    return str.join() === comparator.join()? true: false
}

// isInOrder("abc") //➞ true

// console.log(isInOrder("123"));
 //➞ false

// isInOrder("123") //➞ true

// isInOrder("xyzz") //➞ true

// Write a function that returns true if a word can be found in between the start and end word in a dictionary.

function isBetween(first, last, word) {
	return [...arguments].sort()[1] === word;

}

isBetween("apple", "banana", "azure") //➞ true

isBetween("monk", "monument", "monkey") //➞ true

isBetween("bookend", "boolean", "boost") //➞ false

// Your friend is trying to write a function that removes all vowels from a string. They write:

// Fix this incorrect code, so that all tests pass!
// However, it seems that it doesn't work? Fix your friend's code so that it actually does remove all vowels
function removeVowels(str) {
    return str.replace(/[aeiou]/g, '')
  }

removeVowels("candy") //➞ "cndy"
removeVowels("hello") //➞ "hllo"
// The "e" is removed, but the "o" is still there!
removeVowels("apple") //➞ "pple"

// Write two functions:
// firstArg() should return the first parameter passed in.
// lastArg() should return the last parameter passed in.
// Return undefined if the function takes no parameters.

function firstArg(...arr) {
	if (arr !== undefined) {
        return arr.shift();
    } else if (arr == ""){
        return undefined
    }
    
}

function lastArg(...arr) {
    if (arr !== undefined) {
        return arr.pop();
    } else  if (arr == ""){
        return undefined
    }
    
}


firstArg(1, 2, 3)//➞ 1
lastArg(1, 2, 3) //➞ 3
firstArg(8) //➞ 8
lastArg() //➞ 8

// Create a function that returns the next element in an arithmetic sequence. In an arithmetic sequence, each element is formed by adding the same constant to the previous element.


function nextElement(arr) {
    let add = arr[arr.length -1] - arr[arr.length -2];
    return add > 0 || add < -0? arr[arr.length -1] + add :arr[arr.length -1]
}


nextElement([3, 5, 7, 9]); //➞ 11

nextElement([-5, -6, -7]); //➞ -8

nextElement([2, 2, 2, 2, 2]);  //➞ 2

// Create a function which filters out strings from an array and returns a new array containing only integers.

function filterList(l) {
    let newArr = [];
	l=l.filter(arr =>{   
        if (typeof arr === "number") {
            newArr.push(arr) 
        }
    })
    return newArr
}

filterList([1, 2, 3, "x", "y", 10]);
 //➞ [1, 2, 3, 10]
filterList([1, "a", 2, "b", 3, "c"]) //➞ [1, 2, 3]
filterList([0, -32, "&@A", 64, "99", -128]) //➞ [0, -32, 64, -128]