let age = 0;
let year = 1991;
while (age < 27 || year < 2019){
    age++
    year++
    console.log(`In ${year} i was ${age} years old.`)
}
console.log("========================================")
var hour = 0;
 do{
    
    if (hour > 0 && hour <= 8){
        console.log(`The hour is ${hour} : It's still night outside`)
    }else if (hour > 8 && hour <= 16) {
        console.log(`The hour is ${hour} : OHMAGORD it's hot outside`) 
    } else if (hour >16 && hour <= 22) {
        console.log(`The hour is ${hour} : It's quite better actually now`)  
    } else {
        console.log(`The hour is ${hour} : Bye bye i am going to bed`) 
    }
    hour++
}while (hour <= 24)

