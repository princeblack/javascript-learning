for (let i = 0; i < 100; i++ ){
    console.log(i)
}

let name = 'mahamadi';
for(let i = 0; i < 3; i++){
    console.log(`this is loop number ${i}`)
    name = name + name
    console.log(name);
}

let amount = 2;
for(let i = 5; i > 0 ; i--){
    console.log(`this is loop number ${i}`)
    amount = amount + amount
    console.log(amount);
}

for (let i = 0;  i < 100; i++) {
    if (i%17 == 0) {
        console.log(`the first number that is being perfectly divised by 17 is : ${i}`)    
        break;    
    }else{
        console.log(`${i} is not cool`)
    }
    
}
let string = '1'
for (let i = 0; i <= 3; i++) {
    string = string +'@'
    console.log(string)
    for (let j = 0; j <=5; j++) {
        string = string +'_'
        console.log(string)        
    }    
}