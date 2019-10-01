// body design
document.body.style.alignContent="center";
document.body.style.alignItems="center";
document.body.style.width="100%";
document.body.style.display="flex";
document.body.style.flexDirection="column";
//  top menu costum
let topMenu = document.getElementById("top");
topMenu.style.backgroundColor="rgba(51,51,204,0.5)";
topMenu.style.height="50px";
topMenu.style.width="50%"
topMenu.style.display="flex";
topMenu.style.flexDirection="row";
topMenu.style.flexWrap="wrap";
topMenu.style.justifyContent="center";
topMenu.style.justifyItems="center";
topMenu.style.justifyContent="space-around";
topMenu.style.alignContent="center";

// the line after top menu
let lineDiv = document.createElement("div")
topMenu.insertAdjacentElement("afterend",lineDiv)
lineDiv.style.width="50%";
let line = document.createElement("hr");
lineDiv.appendChild(line)
/***********************************************************
 * *********************************************************
 * ****************costum User *****************************
 * **********************************************************
 * **********************************************************/

// user table
const tableDiv = document.getElementById("tableDiv");
tableDiv.style.backgroundColor="rgba(255,153,51,0.8)"
tableDiv.style.width="50%";
tableDiv.style.display="flex";
tableDiv.style.alignItems="center";
tableDiv.style.alignContent="center";
tableDiv.style.justifyContent="space-around";
tableDiv.style.justifyContent="space-around";
tableDiv.style.flexDirection="row";
tableDiv.style.flexWrap="wrap";

// user table id
const tableId = document.getElementById("tableId");
tableId.style.border="solid 1px white";
tableId.style.width="95%";
tableId.style.textAlign="left"

let userInfoClik = document.getElementById("userInfo");
userInfoClik.style.cursor="pointer";
tableDiv.style.display="none";

userInfoClik.onclick=()=>{
    commentTable.style.display="none";
    addUserTable.style.display="none";
if (userInfoClik.innerHTML.toLowerCase()== "users |") {
    tableDiv.style.display="block";
    userInfoClik.innerHTML="All Users |"
} else {
    tableDiv.style.display="none";
    userInfoClik.innerHTML="Users |"
}    
}

/************************************************************
 * **********************************************************
 * ****************costum commentair*************************
 * **********************************************************
 * **********************************************************/

const commentTable = document.getElementById("commentTable");
commentTable.style.backgroundColor="rgba(255,153,51,0.8)"
commentTable.style.width="50%";
commentTable.style.display="flex";
commentTable.style.alignItems="center";
commentTable.style.alignContent="center";
commentTable.style.justifyContent="space-around";
commentTable.style.justifyContent="space-around";
commentTable.style.flexDirection="row";
commentTable.style.flexWrap="wrap";

// user table id
const tablcommenteId = document.getElementById("comment");
comment.style.border="solid 1px white";
comment.style.width="95%";
comment.style.textAlign="left";
console.log(tablcommenteId);

let userComment= document.getElementById("userComment");
userComment.style.cursor="pointer";
commentTable.style.display="none";


userComment.onclick=()=>{
    tableDiv.style.display="none";
    addUserTable.style.display="none";
    if (userComment.innerHTML.toLowerCase()== "comments |") {
        commentTable.style.display="block";
        userComment.innerHTML="All Comments |"
     } else {
        commentTable.style.display="none";
        userComment.innerHTML="Comments |"
    }

}

/************************************************************
 * **********************************************************
 * ****************costum Add Users*************************
 * **********************************************************
 * **********************************************************/

 const addUserTable = document.getElementById("addUserTable");
addUserTable.style.backgroundColor="rgba(255,153,51,0.8)"
addUserTable.style.width="50%";
addUserTable.style.display="flex";
addUserTable.style.alignItems="center";
addUserTable.style.alignContent="center";


addUserTable.style.flexDirection="column";
// addUserTable.style.flexWrap="wrap";
console.log(addUserTable);


//  User name Input
const nameInput= document.createElement("input");
nameInput.type="text";
nameInput.style.border="solid 3px rgba(51,51,204,0.5)";
nameInput.style.margin="5px";
nameInput.placeholder="Your Name"
nameInput.name="fname";
nameInput.required="name";
addUserTable.appendChild(nameInput);

//  User email Input
const emailInput= document.createElement("input");
emailInput.type="email";
emailInput.style.border="solid 3px rgba(51,51,204,0.5)";
emailInput.style.margin="5px";
addUserTable.appendChild(emailInput);
emailInput.required="email";
emailInput.placeholder="Your Email"


// user data submit
const submitButton = document.createElement("button");
addUserTable.appendChild(submitButton);
submitButton.innerHTML="Submit";
submitButton.value="submit";
submitButton.style.border="solid 5px rgba(51,51,204,0.5)";
submitButton.style.width="100px";
submitButton.style.height="50px";
submitButton.style.fontSize="20px";
submitButton.style.borderTopRightRadius="50px";
submitButton.style.borderBottomRightRadius="50px";
submitButton.style.borderBottomLeftRadius="60px";
submitButton.required="text";
submitButton.style.cursor="pointer";

let addUser=document.getElementById("addUser");
addUser.style.cursor="pointer";
addUserTable.style.display="none";

addUser.onclick=()=>{
    addUserTable.style.display="block";
    commentTable.style.display="none";
    tableDiv.style.display="none";
}


/************************************************************
 * **********************************************************
 * ****************costum  update all data *************************
 * **********************************************************
 * **********************************************************/

submitButton.onclick=()=>{
/************************************************************
 * *******************All Users data ************************
 * **********************************************************/
    // add User table info
    let userInfoTr = document.createElement("tr")
    tableId.appendChild(userInfoTr);
    console.log(userInfoTr);

    //  User Name info
    let userNameTD= document.createElement("td");
    userNameTD.innerHTML="User name";
    userInfoTr.appendChild(userNameTD);

    //  User Email  info
    let userEmailTd= document.createElement("td");
    userInfoTr.appendChild(userEmailTd);
    userEmailTd.innerHTML="Email";

    // user Id info
    let userIdTd= document.createElement("td");
    userInfoTr.appendChild(userIdTd);
    userIdTd.innerHTML="Your ID";
/************************************************************
 * *******************All Users comments ************************
 * **********************************************************/

        // add User table info
    let commentInfoTr = document.createElement("tr")
    tablcommenteId.appendChild(commentInfoTr);

    //  comment Name info
    let commentName= document.createElement("td");
    commentInfoTr.insertAdjacentElement("afterbegin",commentName);
    commentName.innerHTML="Your name";

    //  comment Email  info
    let commentEmailTd= document.createElement("td");
    commentInfoTr.insertAdjacentElement("afterbegin",commentEmailTd);
    commentEmailTd.innerHTML="Email";

    // comment Id info
    let commentIdTd= document.createElement("td");
    commentInfoTr.insertAdjacentElement("beforeend",commentIdTd).after(commentIdTd);
    commentIdTd.innerHTML="Your comments "; 

    if (emailInput.value !== '' && nameInput.value !== '') {
        commentEmailTd.innerHTML=`${emailInput.value}`;
        commentName.innerHTML=`${nameInput.value}`;
        userNameTD.innerHTML =`${nameInput.value}`;
        userEmailTd.innerHTML =`${emailInput.value}`;
    } else {
        alert("Please fill out all fields.")
    }
    emailInput.value='';
    nameInput.value='';
}


/************************************************************
 * **********************************************************
 * ****************costum  Add Comment **********************
 * **********************************************************
 * **********************************************************/
let addComment = document.getElementById("addComment");
addComment.style.cursor=("pointer");

let addCommentTable = document.getElementById("addCommentTable");
addCommentTable.backgroundColor="rgba(255,153,51,0.8)";
addCommentTable.style.width="50%";
addCommentTable.style.display="flex";
addCommentTable.style.alignItems="center";
addCommentTable.style.alignContent="center";
addCommentTable.style.flexDirection="column";