var  Flo, Swantje, Sam, Mafe, Irem;
let member = Flo == Swantje == Sam == Mafe == Irem;
let access = Flo == Swantje == Sam == Mafe == Irem;
let name = "mahamadi"

if (member == access) {
     console.log(`welcome to the billionaire club`)
}  else if (name == member) {
    console.log(`sorry ${name} you are not member , if you are than change your name because this name is not in the system`)
}else{
    console('please go in change your name')
}

var member1 = {
        Flo,
        Swantje,
        Sam,
        Mafe,
        Irem
    }
       
    

let myName = "mahamadi";
if (myName == Sam) {
    console.log(` welcome ${myName}`)    
} else if (myName == Flo || myName == Mafe ||myName ==Irem ||Swantje){
    console.log(` welcome ${myName}`)   
} 
else {
   console.log(`Sorry ${myName}, you should change your name and come back tomorrow.`) 
}


let bandName = "UB-40"
if (bandName == "UB-40") {
    console.log(`thas is ${bandName} but i don't know which genre of music they play , but it seems  to be good music " oh ja they are a reggae music group formed in 1978"`)
    
} else if (bandName == "the rock"){
    console.log( `ohhh i don't thing The Rock is a band and no genre fonds`)    
}else if (bandName == "50 cent"){
    console.log( `ohhh 50 cent is a rapper but maybe you mean G-unit the group that he part`)    
}else if (bandName == "sniper"){
    console.log( `wow  old school sniper is a old rapper group in french formed in 1997 `)    
}else if (bandName == "U2"){
    console.log( `U2 is an Irish rock band from Dublin, formed in 1976. `)    
}else{
    console.log(`i don't what your taking about sorry`)
}

switch (bandName) {
    case (bandName == "UB-40"):
        console.log(`thas is ${bandName} but i don't know which genre of music they play , but it seems  to be good music " oh ja they are a reggae music group formed in 1978"`) 
        break;
    case (bandName == "the rock"):
        console.log( `ohhh i don't thing The Rock is a band and no genre fonds`)
        break;
    case (bandName == "50 cent"):
        console.log( `ohhh 50 cent is a rapper but maybe you mean G-unit the group that he part`)
        break;
    case (bandName == "sniper"):
        console.log( `wow  old school sniper is a old rapper group in french formed in 1997 `)
        break;
    case (bandName == "U2"):
        console.log( `U2 is an Irish rock band from Dublin, formed in 1976. `)  
        break;
    default: console.log(`i don't what your taking about sorry`)
        break;
}