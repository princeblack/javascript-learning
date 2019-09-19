module.exports.forma = (name)=>{  
    if (name == undefined) {
        console.log('Please give something to print');
        return;
    }
    let newName = '';
    newName = name.toLowerCase().split(' ');
    let rest ='';
    let strName = [];

    const capitalizeInitial = ()=>{
        for (let i = 0; i < newName.length; i++) {
            if (newName[i] !== '') {
               strName.push(newName[i].charAt(0).toUpperCase()+newName[i].slice(1));
            }
         }
         return strName;
    }
    capitalizeInitial();

    const removeSpace = ()=>{
        for (let i = 0; i < strName.length; i++) {
            if (strName[i] !== '') {
                rest = rest + ' ' + strName[i];
            }
        }
        return rest
    }
    removeSpace();
    console.log(rest.trim());
}