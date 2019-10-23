let parent=  document.querySelector(".parent");
let child = document.querySelector(".child");


parentClick= e =>{
    console.log("somebody click on the parent");
    parent.style.backround = "red";
    parent.style.zIndex = "1";
    if (parent.style.zIndex == 1) {
        child.style.zIndex = "-1";
    }
    
}

childClick= e =>{
    // e.stopPropagation()
    if (parent.style.zIndex == 1) {
        parent.style.zIndex = "-1";
        child.style.zIndex = "1";

    }
    
    console.log("somebody click on the child");
}
parent.addEventListener("click",parentClick)
child.addEventListener("click",childClick)

