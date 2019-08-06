// TASK 1
// Create a function that takes two numbers as arguments and return their sum. Do it with the 3 different function syntaxes (Function Declaration, Function Expression and Arrow Function)

function declaration(num1, num2) {
    let result =  num1 + num2;
    console.log(result);  
    return result;
}
const expression = function(num1,num2){
let result = num1 * num2;
console.log(result);
return result;
}
const arrow = (num1, num2) =>{
    let result = num1 / num2;
    console.log(result);
    return result;

}
declaration(2,8);
expression(25,58);
arrow (565, 23);

// TASK 2
// Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".

const plural = (letter) =>{
    if (letter.endsWith("s")){
        console.log(`${letter} is a plural`)
    } else {
        console.log(`${letter} is not a plural`); 
    }
}
plural("mamas")

// TASK 3
// Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:
// Total number of slices.
// Number of recipients.
// How many slices each person gets.

function fairly(numberOfSlice , numberOfRecipients, eachPersonGets) {
    if (numberOfRecipients > numberOfSlice || numberOfRecipients == numberOfSlice  ) {
      
        
        if (numberOfSlice == eachPersonGets || numberOfSlice  >eachPersonGets) {
               console.log(`each person get ${eachPersonGets = numberOfSlice / eachPersonGets } slices`);
        } else {
            console.log(` sorry the number of slices is too small for all this peoples`);
                        
        }
    } else {
        console.log(` ohhh no sorry not enough recipients `);
    }
}

fairly(190, 120, 20)

