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

let basket = [];

let addGiftObj = document.getElementById("addGift");
let giftObj = document.getElementById("gift");

giftObj.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        addGiftObj.onclick();
    }
})
addGiftObj.onclick = () => {
    //1. only items that have at least 3 characters can be added. otherwise, an error alert appears.

    let shoppingObj = document.getElementById("shopping");
    let newGiftObj = document.createElement('li');


    // add item name and price to the basket array
    let price = 5 + Math.floor(Math.random() * 95);

    basket.push({
        name: giftObj.value,
        price: price
    });

    newGiftObj.insertAdjacentHTML("beforeend", `<span>${giftObj.value}</span>,<span>Price: ${price}</span>`)

    // show alert message for added basket less then 3
    let status = document.getElementById('statusMessage');
    status.style.background = "rgba(237, 68, 68, 0.79)"
    // status.style.display='block';
    if (giftObj.value.length < 3 && giftObj.value.length > 0) {
        status.innerHTML = "";
        // color for gift input
        giftObj.style.backgroundColor = "rgba(219, 0, 0, 0.17)(236, 105, 105, 0.53)"
        status.innerHTML = `${giftObj.value} is too short`;
        return;
    } else {
        shoppingObj.appendChild(newGiftObj)
        giftObj.style.backgroundColor = "white"
    }
    // after adding 
    giftObj.value = '';
    // sumObj.onclick()
    getstats()

}


// remove last gift button click
let removeLastGiftObj = document.getElementById('removeLastGift');
removeLastGiftObj.onclick = () => {
    let allGiftObj = document.querySelectorAll("#shopping > li");
    allGiftObj[[allGiftObj.length - 1]].remove();
    basket.pop()
    // sumObj.onclick()
    getstats()

}


// remove first gift button click
let removeFirstGistObj = document.getElementById("removeFirstGift");
removeFirstGistObj.onclick = () => {
    let allGiftObj = document.querySelectorAll("#shopping > li");
    allGiftObj[0].remove()
    basket.shift()
    // sumObj.onclick()
    getstats()
}


// remove gift button click
let removeObj = document.getElementById("remove");
removeObj.onclick = () => {
    let allGiftObj = document.querySelectorAll("#shopping > li");
    let texBoxGiftObj = document.getElementById('gift');
    let found = false;

    for (let i = 0; i < allGiftObj.length; i++) {
        let deleteGift = allGiftObj[i].getElementsByTagName('span')[0].innerHTML;
        // let deleteGift = allGiftObj[i].firstChild.innerHTML
        if (texBoxGiftObj.value.trim().toLowerCase() === deleteGift.trim().toLowerCase()) {
            allGiftObj[i].remove();
            texBoxGiftObj.value = '';
            found = true;
            basket.splice(i, 1);
            break
        }
    }
    if (!found) {
        alert(`gift ${texBoxGiftObj.value} not found!`)
        // sumObj.onclick()
        getstats()
    }
}

let getstats = ()=>{
    let totalsum = basket.reduce((total,val)=>{
        total += val.price;
        return total;
    },0);
    let statsObj = document.getElementById('stats');
    statsObj.style.backgroundColor = "rgba(212, 243, 184, 0.69)";
    statsObj.style.width = '250px';
    statsObj.style.height = "150px";
    statsObj.style.position= 'static';
    statsObj.style.border= "10px solid rgb(250, 206, 85)";

    // totalsum.style.width = '200px';
    statsObj.firstChild.innerHTML=`Count : ${basket.length} `;
    statsObj.lastChild.innerHTML=`Price : ${totalsum}`;
}

//sum gift button click
// let sumObj = document.getElementById('sum');
// let sumTotal = document.getElementById("sumTotal");
// let articleSum = document.getElementById("articleSum")
// sumObj.onclick = () => {
//     let totalsum = 0;
//     let articlesum = 0;
//     basket.filter(x => x.name.length > 2 ? articlesum += 1 : articlesum += 0)

//     basket.reduce((acc,val) => {
//         totalsum = acc + val.price
//         return totalsum
//     }, 0);

//     console.log(`${giftObj.value} here`);

//     sumTotal.innerHTML = "";
//     sumTotal.innerHTML = `the sum is: ${totalsum}`;
//     sumTotal.style.background = "rgba(212, 243, 184, 0.69)";
//     articleSum.innerHTML = "";
//     articleSum.innerHTML = `total article: ${articlesum}`;
//     articleSum.style.background = "rgba(212, 243, 184, 0.69)";

// }

// sumObj.addEventListener('keyup', function (x) {
//     x.preventDefault();
//     if (x === 13) {
//         sumObj.onclick()
//     }
// })

let warningObj = document.getElementById('warning');
warningObj.style.display = 'none';
let showWarning = document.getElementById('showWarning');
showWarning.onclick = () => {
    if (showWarning.innerHTML.toLowerCase() == 'show') {
        warningObj.style.display = 'block';
        showWarning.innerHTML = 'Hide';
    } else {
        warningObj.style.display = 'none';
        showWarning.innerHTML = 'Show';
    }
}
