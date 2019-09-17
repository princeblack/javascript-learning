//local Storage vs Session Storage
//Local storage: It keeps store the user information data without expiration date this data will not be deleted when user closed the browser windows it will be available for day, week, month and year.
//Session Storage: It is same like local storage date except it will delete all data when browser windows closed by a web user.
//set the value in local storage object
//localStorage.setItem("dci","Web Developer");
// console.log(localStorage.getItem("dci"));
// //localStorage.removeItem("dci");
// //localStorage.clear();
// sessionStorage.setItem("classroom","FbW15");
// console.log(sessionStorage.getItem("classroom"));

let addGiftObj= document.getElementById("addGift");
addGiftObj.onclick = ()=>{
    let giftObj = document.getElementById("gift");
    let shoppingObj = document.getElementById("shopping");
    let newGiftObj = document.createElement('li');
    newGiftObj.innerHTML= giftObj.value;    
    shoppingObj.appendChild(newGiftObj)
    giftObj.value = '';
}


// remove last gift button click
let removeLastGiftObj = document.getElementById('removeLastGift');
removeLastGiftObj.onclick= () =>{
    let allGiftObj = document.querySelectorAll("#shopping > li");
    allGiftObj[[allGiftObj.length-1]].remove();
}


// remove first gift button click
let removeFirstGistObj = document.getElementById("removeFirstGift");
removeFirstGistObj.onclick = ()=>{
    let allGiftObj = document.querySelectorAll("#shopping > li");
    allGiftObj[0].remove()
}

// remove first gift button click
let removeObj = document.getElementById("remove");
removeObj.onclick=() =>{
    let allGiftObj = document.querySelectorAll("#shopping > li");
    let texBoxGiftObj = document.getElementById('gift');
    let found = false;
    for (let i = 0; i < allGiftObj.length; i++) {
        let deleteGift = allGiftObj[i].innerHTML;  
        if (texBoxGiftObj.value.toLowerCase() === deleteGift.toLowerCase()) {
            allGiftObj[i].remove();
            texBoxGiftObj.value='';
            found = true;
        } 
    }
    if (!found) {
        alert(`gift ${texBoxGiftObj.value} not found!`)
    }
}

