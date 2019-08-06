// Write a function that takes as an input a first name and a last name and returns a full name. Then call the function with three different names and last names.

function profile(firt,last) {
    console.log( firt + '' +last)
}
profile(' issa ', 'madi')

// Write a function that will let you know if a number is divided by 5 and 3. Then call the function for the following number 66,75,123,554,225,455635. After that call the function for all the odd numbers from 0 till 100.

function divided(num) {
    if (num % 5 === 0 && num % 3 === 0) {
        return console.log(`${num} is devided by 5 and 3`)
    }else{
        return console.log(`please change ${num} to another number . ${num} is not divided by  5 and 3`)
    }
}
divided()

function add() { 
    for (let i = 0; i <= 100; i++) {
        if (i % 2 !== 0 ) {
            console.log(i)
             divided(i)

        }
    } 
}
add()

//Write a function that will take as input the lengths of two sides of a triangle and it will return the length of the third side (Pythagorean).
function Pythagorean(a,b) {

    res = Math.sqrt(a * a + b * b)
    console.log(res)
}
Pythagorean(3,4)