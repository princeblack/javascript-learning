for (let i = 0; i < 11; i++) {
    console.log(i)
    break;
    
}
console.log("------------------------------------------------")
// number 3
for (let i = 0; i <= 2; i++) {
    i = i +'*'
    console.log(i)
    for (let j = 0; j <=4; j++) {
        i = i +'*'
        console.log(i)        
    }    
}
console.log("------------------------------------------------")
// number 4
for (let iteration  = 1; iteration  < 7; iteration ++) {
    console.log(`This is iteration number ${iteration}`)    
}
console.log("------------------------------------------------")
// number 5
for (let odd = 0; odd < 33; odd++) {
    if (odd%2 == 0) {
        console.log(odd)  
    }
}

console.log("------------------------------------------------")
// number 6
for (let odd = 0; odd < 33; odd++) {
    if (odd%2 == 1) {
        console.log(odd)  
    }
}
console.log("------------------------------------------------")
// number 7
for (let odd = 0; odd < 100; odd++) {
    if (odd%6 == 0) {
        console.log(odd)  
    }
}
console.log("------------------------------------------------")
// number 8
var b = 'BA-'
var c = 'BA-'
var d = 'BA-'
for (let a = 0; a < 1; a++) {
    console.log(`${b}${c}${d}BY-LON`)    
}

console.log("------------------------------------------------")
// number 9
for (let loop = 0; loop < 3; loop++) {
    console.log(`I am a normal for loop`)
    for (let nested = 0; nested < 3; nested++) {
        console.log(`I am a nested a for loop`)        
    }    
}
console.log("------------------------------------------------")
// number 10
for (let i = 0; i < 5; i++) {
    i = i + '!'
    console.log(i)
    for (let j = 0; j < 3; j++) {
        i = i + '*'
        console.log(i) 
        for (let j = 0; j < 3; j++) {
            i = i + '!'
            console.log(i)        
        }
    }    
}
console.log("------------------------------------------------")
// number 11
var conter = 901;
for (let i = 2; i < 5; i++) {
    console.log(i)
    for (let j = 900; j < 903; j++) {
        console.log(conter)   
        conter++ 
    }    
}
console.log("------------------------------------------------")
// number 12
for (let i = 0; i <= 3; i++) {
    i = i + '*'
    console.log(i)
    for (let j = 0; j <= 3; j++) {
        i = i + '*'
        console.log(i)        
    }    
}