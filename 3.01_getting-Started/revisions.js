// a recursive function is a function that calls itself

function florian() {
    // florian()
}

// ! Factorial
function factorial() {
    let result = 1;
    for (let i = 1; i <= 5; i++) {
        result *= i;        
    }
    return result;
}
// console.log(factorial());

function victoria(number) {
    if (number === 1) {
        return 1;
    }
    console.log(number);
    
    return number * victoria(number - 1)
}
// console.log(victoria(3) );


// callback

let names = [
    "swantje",
    "Mahamadi",
    "Maria",
    "Osward",
    "Erwan",
    "Itamar",
    "florian",
    "Vlad",
    "Firat",
    "Bleda",
    "Irem",
    "Alex",
    "Albert"


]
const namesWithM = names.filter(name => {
    return name[0] === "M";
})

// console.log(namesWithM);

// Closure

//  A closure is a function that contains another function definition AND a variable declaration 

const wrapMe = () =>{
    const age = 33;
    const ageIn5Years = () => {
        return age + 5;
    };    
};
// wrapMe();

//  Most commonly closures 
// IIFE = Immediately Invoked Function EXpression

((ind) =>{
    const myAge = 40;
    const ageIn5Years = () =>{
        return myAge + ind ;
    }
    console.log(ageIn5Years());
    
})(10)

let score = 0;
while (score <= 10){
    console.log("Walking::::....");
    score+= 4 
};
console.log("Yah , I won!");


