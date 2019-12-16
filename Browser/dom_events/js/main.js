let parent=  document.querySelector(".parent");
let child = document.querySelector(".child");
let a = 1;
let b = 1;

parentClick= e =>{
    console.log("somebody click on the parent");
    console.log(a);
    console.log(b);
    
    
    parent.style.zIndex = a;
    if (parent.style.zIndex == a) {
        b = b -1;
        child.style.zIndex = b;
    }
    a = 1;
    b = 1;
}


childClick= e =>{
    e.stopPropagation()
    console.log("somebody click on the child");
    console.log(a);
    console.log(b);
    child.style.zIndex = b;
    if (child.style.zIndex == b) {
        a = a -1
        parent.style.zIndex = a;
    }
    a = 1;
    b = 1;
}


parent.addEventListener("click",parentClick)
child.addEventListener("click",childClick)

