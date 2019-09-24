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

let userInfoClik = document.getElementById("userInfo");
userInfoClik.style.cursor="pointer";
tableDiv.style.display="none";
userInfoClik.onclick=()=>{
    commentTable.style.display="none";

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

// add User table info
let commentInfo = document.createElement("tr")
tablcommenteId.appendChild(commentInfo);
console.log(commentInfo);

//  comment Name info
let commentName= document.createElement("td");
commentInfo.appendChild(commentName);
commentName.innerHTML="Your name";

//  comment Email  info
let commentEmailTd= document.createElement("td");
commentInfo.appendChild(commentEmailTd);
commentEmailTd.innerHTML="Email";

// comment Id info
let commentIdTd= document.createElement("td");
commentInfo.appendChild(commentIdTd);
commentIdTd.innerHTML="Your comments ";

let userComment= document.getElementById("userComment");
userComment.style.cursor="pointer";
commentTable.style.display="none";


userComment.onclick=()=>{
    tableDiv.style.display="none";
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

 const addUserTable = document.getElementById("addUserTable")