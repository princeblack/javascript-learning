// 9. Cubed
// Create a function that takes in an array of numbers and returns the sum of its cubes.
// Examples: 
//     sumOfCubes([1, 5, 9]) ➞ 855   //// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
// sumOfCubes([3, 4, 5]) ➞ 216
// sumOfCubes([2]) ➞ 8
// sumOfCubes([]) ➞ 
//**Note**
//If given an empty array, return 0.

// function cubesArray(...sum) {
//     let array1;
//     let num = 0;
    
//     if (array1 = []) {
//         array1 = 0;
//     }


//     for (let i = 0; i < sum.length; i++) {
//         array1 = num += Math.pow(sum[i],3) 
//         console.log(sum[i]);
          
//     }
//     console.log(array1);
    
    
    
// }
// cubesArray(1, 5, 9)


//6. Even Number Generator
// Create a function that finds all even numbers from 1 to the given number.
// Examples:
//   evenNums(8) ➞ [2, 4, 6, 8] 
//   evenNums(4) ➞ [2, 4]
//   evenNums(2) ➞ [2]
//If there are no even numbers, return an empty array. 
// function generator(num) {
//     let count = [];
//     for (let i = 1; i <= num; i++) {
//         if (i % 2 == 0) {
//             count.push(i);
//             console.log(i);
            
//         }
//     }
//     // console.log(count);
// }
// generator(8)


// 7. Pig Latin Translation
// Create a function that takes a string of words and moves the first letter of each word to the end of it, then adds 'ay' to the end of the word. This is a basic form of "Pig Latin".

// **Rules**
// Move the first letter of each word to the end of the word.
// Add "ay" to the end of the word.
// Words starting with a vowel (A, E, I, O, U) simply have "WAY" appended to the end.

// //Examples:
// pigLatin("Cats are great pets.") ➞ "Atscay areway reatgay etspay"
// pigLatin("Tom got a small piece of pie.") ➞ "Omtay otgay away allsmay iecepay ofway iepay"
// pigLatin("He told us a very exciting tale.") ➞ "Ehay oldtay usway away eryvay excitingway aletay"

//**Notes**
//Be sure to preserve proper capitalization, ignore punctuation.

function Translation(string) {
    let arrayConverse = [];
    let firstLetter =[];
    string = string.split(' ');
    
    console.log(string);
    
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < string.length; j++) {
            

            if (string[i] == string[j]) {
                firstLetter = string[j][0].toLowerCase();
                if (j == 0){
                    arrayConverse.push(string[j].substring(1,2).toUpperCase() + string[j].substring(2) +  firstLetter + 'ay'); 
                }else {
                arrayConverse.push(string[j].substring(1) +  firstLetter + 'ay');
            }
                
            }
        } 
    }

    console.log(arrayConverse);
    
    
}
Translation('Cats are great pets')