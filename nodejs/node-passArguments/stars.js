module.exports.print=(num,str)=>{    
    let symbol= `x `

//  if num = to Number and str = to Strings
// if num = to Strings and str = to Number
//  or undefined
if (num == undefined ||str == undefined  ) {
    console.log('********');
    console.log('Next time give me a value');
    console.log('********');
} else {
    console.log(symbol.repeat(num));
    console.log(str);
    console.log(symbol.repeat(num));
} 
}