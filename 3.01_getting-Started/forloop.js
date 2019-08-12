for (let i = 0; i < 100; i++ ){
    console.log(i)
}

let name = 'mahamadi';
for(let i = 0; i < 3; i++){
    console.log(`this is loop number ${i}`)
    name = name + name
    console.log(name);
}

 let num = 0;
for (let i = 0; i < 5; i++) {
    // console.log(i);
    num = i * 2
    console.log(num);
    
    
    
}








let count = 2;
for(let i = 5; i > 0 ; i--){
    count = count + count;
    console.log(count);
    console.log(`this is loop number ${i}`)

}


















for (let i = 0;  i < 100; i++) {
    if (i%17 == 0) {
        console.log(`the first number that is being perfectly divised by 17 is : ${i}`)    
    }else{
        console.log(`${i} is not cool`)
    }
}













let string = '1'
for (let i = 0; i <= 2; i++) {
    string = string +'@'
    console.log(string)
    for (let j = 0; j <=2; j++) {
        string = string +'#'
        console.log(string)  
        for (let a = 0; a < 2; a++) {
            string = string + 'bibi'
            console.log(string);
            
        }      
    }    
}

//Task: Write function that return string with capitalize the first character of the each word in the string. Put main logic inside getCapitalize function.
// Usage : letterCapitalize("hello world",getCapitalize);
// Output: Hello World
// Usage : letterCapitalize("i am student of the dci",getCapitalize);
// Output: I A Student Of The Dci

function letterCapitalize (params,letter) {
    console.log(letter(params));
    
}


function getCapitalize(params) {
    let letterArray = params.split(' ')
    for (let i = 0; i < letterArray.length; i++) {
        letterArray[i] = letterArray[i].charAt(0).toUpperCase() + letterArray[i].substring(1)    }
        
    return letterArray.join(' ');
}
getCapitalize(" je suis le boss")
letterCapitalize('azza is the boss',getCapitalize)








// Let do exercise 
// Exercise 1:  Pyramid Star
// Define function with paramater and it will draw the following pyramid.
//      *
//     ***
//    *****
//   *******
//  ********* 
// if you will pass 5 number in the function then above output will print. if you will pass other number then it will different output but it always pyramid as shown above.
// e.g drawPyramid(5);
 
const pyramid = function (num){
    let imo =' '.repeat(num);
    let test = '*'
    for (let i = 0; i < num; i++) {
        console.log(imo + test); 
        test+=  '**'  
        imo =  imo.substring(1)
    }
}
pyramid(10)