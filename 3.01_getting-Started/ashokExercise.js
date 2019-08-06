const myAge = (yearBorn) =>{
    let year = 2019;
    let age = year - yearBorn;
    console.log(age);
    
    
}

myAge(1991);

const geaterTen = (num,n) =>{
    while (num) {
        if (num > 10) {
            console.log(true);
            
            return true;
        }else{
            console.log(false);
            
            return false;
        }
    }
    
}
geaterTen(98798)


function between(quality) {
    if (quality  >= 8 && quality <= 10) {
        return console.log('Great');
    } else if (quality >= 6 &&  quality <= 8){
        return  console.log('Good')
    }else if (quality >= 3 && quality <= 6){
        return  console.log('Okay')
    }else if (quality >= 0 && quality <= 3){
        return console.log('Not so okay');
    }     
} 
between(8);

const stringsUsing = (str1, str2) =>{   
    
    return console.log( str1 + " " + str2);
} 

 stringsUsing("i'am", "mahamadi")

function upNmber(num) {
    let res = 0;
    for (let i = 0; i => 0; i--) {
        i += 1 + res;
        console.log(res);        
    }
}

Task :
// Write a JavaScript function that reverse a number.

function reverseNumber (a) {
    if (typeof a != 'number' || Number.isInteger(a) != true) return console.log('Not a integer number')
    else {
        return console.log(a.toString().split('').reverse().join(''))
    }
}

// Sample Data and output:
// Example x = 32243;
// Expected Output: 34223

reverseNumber ('gjhgj'); // Output: 34223


function matrix(n)
{
for (let row=1; row <= n; row++)
{
  let result='';
  for (let column=1; column <= n; column++)
  {
       //  if(row==column)
       //     result +=' 1 ';
       //  else
       //     result +=' 0 ';
       result += (row==column) ? ' 1 ' : ' 0 ';
   }
   console.log(result);
 }
}
matrix(10);


