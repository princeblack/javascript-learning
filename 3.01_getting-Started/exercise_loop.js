// 1 Addition
for (let i = 0; i < 20;) {
    i += 1  
    console.log(i);  
}

// 2 bottles of beer
for (let i = 0; i < 1;) {
    i += 1
    console.log(`there is ${i} bottle of beer on the wall`)
    for (let j= i; j >= i  && j < 5;) {
        j += 1
        console.log(`there is ${j} bottles of beer on the wall`)
    }        
}   


// 3. The odd/even reporter

for (let i = 0; i < 20; ) {
    i += 1
    if (i % 2 == 0) {
        console.log(`${i} is even`)   
    }else{
        console.log(`${i} is odd`)   

    }
}

// 4. Multiplication Tables
multi = 0;
for (multi = 1; multi <= 11;) {
    multi += 1
    console.log(`mutliplication of ${multi}`)
    for (let numb = 2; numb < 10; ) {
        console.log(`${multi } * ${numb} = ${multi * numb}`)  
        numb += 1        
    }   
}

// 6. Fizz Buzz Write a program which iterates the integers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.


//  8. Create an array filled with your friends’ and family’s names


var friends = " mohamed sala "
var friends2 = " zlatan ibrahimovic "
var friends3 = " kylian m'bappe "
var friends4 = " Antoine Krizman "
let name = 0
while (name < 1) {
    console.log(`hello ${friends}`)
    name += 1
    for (let i = 0; i < 1; ) {
        console.log(`hello ${friends2}`)  
        i += 1       
    }
    for (let i = 0; i < 1; ) {
        console.log(`hello ${friends3}`)  
        i += 1       
    }
    for (let i = 0; i < 1; ) {
        console.log(`hello ${friends4}`)  
        i += 1       
    }

}

