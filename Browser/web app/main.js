// body design
document.body.style.alignContent = "center";
document.body.style.alignItems = "center";
document.body.style.width = "100%";
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
//  top menu costum
let topMenu = document.getElementById("top");
topMenu.style.backgroundColor = "rgba(51,51,204,0.5)";
topMenu.style.height = "50px";
topMenu.style.width = "50%"
topMenu.style.display = "flex";
topMenu.style.flexDirection = "row";
topMenu.style.flexWrap = "wrap";
topMenu.style.justifyContent = "center";
topMenu.style.justifyItems = "center";
topMenu.style.justifyContent = "space-around";
topMenu.style.alignContent = "center";

// the line after top menu
let lineDiv = document.createElement("div")
topMenu.insertAdjacentElement("afterend", lineDiv)
lineDiv.style.width = "50%";
let line = document.createElement("hr");
lineDiv.appendChild(line)
/***********************************************************
 * *********************************************************
 * ****************costum User *****************************
 * **********************************************************
 * **********************************************************/

// user table
const tableDiv = document.getElementById("tableDiv");
tableDiv.style.backgroundColor = "rgba(255,153,51,0.8)"
tableDiv.style.width = "50%";
tableDiv.style.display = "flex";
tableDiv.style.alignItems = "center";
tableDiv.style.alignContent = "center";
tableDiv.style.justifyContent = "space-around";
tableDiv.style.justifyContent = "space-around";
tableDiv.style.flexDirection = "row";
tableDiv.style.flexWrap = "wrap";

// user table id
const tableId = document.getElementById("tableId");
tableId.style.border = "solid 1px white";
tableId.style.width = "95%";
tableId.style.textAlign = "left";


let userInfoClik = document.getElementById("userInfo");
userInfoClik.style.cursor = "pointer";
tableDiv.style.display = "none";

userInfoClik.onclick = () => {
    commentTable.style.display = "none";
    addUserTable.style.display = "none";
    addCommentTable.style.display = "none";
    if (userInfoClik.innerHTML.toLowerCase() == "users |") {
        tableDiv.style.display = "block";
        userInfoClik.innerHTML = "Hide All Users |";
        userComment.innerHTML = "Comments |";
        addComment.innerHTML = "Add Comment";
        addUser.innerHTML = "Add User |";

    } else {
        tableDiv.style.display = "none";
        userInfoClik.innerHTML = "Users |";
    }
}

/************************************************************
 * **********************************************************
 * ****************costum commentair*************************
 * **********************************************************
 * **********************************************************/

const commentTable = document.getElementById("commentTable");
commentTable.style.backgroundColor = "rgba(255,153,51,0.8)"
commentTable.style.width = "50%";
commentTable.style.display = "flex";
commentTable.style.alignItems = "center";
commentTable.style.alignContent = "center";
commentTable.style.justifyContent = "space-around";
commentTable.style.justifyContent = "space-around";
commentTable.style.flexDirection = "row";
commentTable.style.flexWrap = "wrap";

// user table id
const tablcommenteId = document.getElementById("comment");
comment.style.border = "solid 1px white";
comment.style.width = "95%";
comment.style.textAlign = "left";

let userComment = document.getElementById("userComment");
userComment.style.cursor = "pointer";
commentTable.style.display = "none";


userComment.onclick = () => {
    tableDiv.style.display = "none";
    addUserTable.style.display = "none";
    addCommentTable.style.display = "none";
    if (userComment.innerHTML.toLowerCase() == "comments |") {
        commentTable.style.display = "block";
        userComment.innerHTML = "Hide All Comments |";
        userInfoClik.innerHTML = "Users |";
        addComment.innerHTML = "Add Comment";
        addUser.innerHTML = "Add User |";

    } else {
        commentTable.style.display = "none";
        userComment.innerHTML = "Comments |"
    }

}

/************************************************************
 * **********************************************************
 * ****************costum Add Users*************************
 * **********************************************************
 * **********************************************************/

const addUserTable = document.getElementById("addUserTable");
addUserTable.style.backgroundColor = "rgba(255,153,51,0.8)"
addUserTable.style.width = "50%";
addUserTable.style.display = "flex";
addUserTable.style.alignItems = "center";
addUserTable.style.alignContent = "center";
addUserTable.style.flexDirection = "column";
// addUserTable.style.flexWrap="wrap";


//  User name Input
const nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.style.border = "solid 3px rgba(51,51,204,0.5)";
nameInput.style.margin = "5px";
nameInput.placeholder = "Your Name"
nameInput.name = "fname";
nameInput.required = "name";
addUserTable.appendChild(nameInput);

var x = document.createElement("BR");
addUserTable.appendChild(x);

//  User email Input
const emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.style.border = "solid 3px rgba(51,51,204,0.5)";
emailInput.style.margin = "5px";
addUserTable.appendChild(emailInput);
emailInput.required = "email";
emailInput.placeholder = "Your Email";

var x = document.createElement("BR");
addUserTable.appendChild(x);

// user data submit
const submitButton = document.createElement("button");
addUserTable.appendChild(submitButton);
submitButton.innerHTML = "Submit";
submitButton.value = "submit";
submitButton.style.border = "solid 5px rgba(51,51,204,0.5)";
submitButton.style.width = "100px";
submitButton.style.height = "50px";
submitButton.style.fontSize = "20px";
submitButton.style.borderTopRightRadius = "50px";
submitButton.style.borderBottomRightRadius = "50px";
submitButton.style.borderBottomLeftRadius = "60px";
submitButton.required = "text";
submitButton.style.cursor = "pointer";

let addUser = document.getElementById("addUser");
addUser.style.cursor = "pointer";
addUserTable.style.display = "none";

addUser.onclick = () => {
    addUserTable.style.display = "block";
    commentTable.style.display = "none";
    tableDiv.style.display = "none";
    addCommentTable.style.display = "none";
    //  show and hidde add users 
    if (addUser.innerHTML.toLowerCase() == "add user |") {
        addUserTable.style.display = "block";
        addUser.innerHTML = "Hide User Data |"
        userInfoClik.innerHTML = "Users |"
        userComment.innerHTML = "Comments |"
        addComment.innerHTML = "Add Comment";
    } else {
        addUserTable.style.display = "none";
        addUser.innerHTML = "Add User |";
    }
}


/************************************************************
 * **********************************************************
 * ****************costum  update all data *************************
 * **********************************************************
 * **********************************************************/
let namArray = [];
let emailArray = [];
submitButton.onclick = () => {

    //  valide input and change the value of email and name
    if (emailInput.value !== '' && nameInput.value !== '' && emailInput.value.includes("@")) {

        /************************************************************
        * *******************All Users data ************************
        * **********************************************************/
        // add User table info
        let userInfoTr = document.createElement("tr")
        tableId.appendChild(userInfoTr);

        //  User Name info
        let userNameTD = document.createElement("td");
        userInfoTr.appendChild(userNameTD);

        //  User Email  info
        let userEmailTd = document.createElement("td");
        userInfoTr.appendChild(userEmailTd);

        // user Id info
        let userIdTd = document.createElement("td");
        userInfoTr.appendChild(userIdTd);

        userNameTD.innerHTML = `${nameInput.value}`;
        userEmailTd.innerHTML = `${emailInput.value}`;
        userIdTd.innerHTML = `${Math.floor(Math.random() * 10)}`;
        namArray.push(nameInput.value);
        emailArray.push(emailInput.value);
    } else {
        alert("Please fill out all fields.");
    }
    emailInput.value = '';
    nameInput.value = '';
    console.log(namArray);
    console.log(namArray.length);
    console.log(emailArray);
    console.log(emailArray.length);
}





/************************************************************
 * **********************************************************
 * ****************costum  Add Comment **********************
 * **********************************************************
 * **********************************************************/
let addComment = document.getElementById("addComment");
addComment.style.cursor = ("pointer");

let addCommentTable = document.getElementById("addCommentTable");
addCommentTable.style.backgroundColor = "rgba(255,153,51,0.8)"
addCommentTable.style.width = "50%";
addCommentTable.style.display = "flex";
addCommentTable.style.flexDirection = "column";
addCommentTable.style.justifyItems = "center";
addCommentTable.style.alignContent = "center";
addCommentTable.style.alignItems = "center";
addCommentTable.style.flexWrap = "nowrap";


let userCommentName = document.createElement("input");
userComment.type = "text";
userCommentName.placeholder = "Your Name";
userCommentName.required = "name";
userCommentName.style.border = "solid 3px rgba(51,51,204,0.5)";
userCommentName.style.margin = "5px";
addCommentTable.appendChild(userCommentName);

var x = document.createElement("BR");
addCommentTable.appendChild(x);


let userCommentEmail = document.createElement("input");
userCommentEmail.type = "text";
userCommentEmail.required = "email";
userCommentEmail.placeholder = "Your Email";
userCommentEmail.style.border = "solid 3px rgba(51,51,204,0.5)";
userCommentEmail.style.margin = "5px";
addCommentTable.appendChild(userCommentEmail);

var x = document.createElement("BR");
addCommentTable.appendChild(x);

let userTextarea = document.createElement("textarea");
userTextarea.style.border = "solid 3px rgba(51,51,204,0.5)";
userTextarea.style.margin = "5px";
userTextarea.style.height = "150px"
addCommentTable.appendChild(userTextarea);

var x = document.createElement("BR");
addCommentTable.appendChild(x);

let commentSubmit = document.createElement("button");
commentSubmit.type.cursor = "pointer";
commentSubmit.type = "submit";
commentSubmit.innerHTML = "Submit";
commentSubmit.style.border = "solid 5px rgba(51,51,204,0.5)";
commentSubmit.style.width = "80px";
commentSubmit.style.height = "50px";
commentSubmit.style.fontSize = "20px";
commentSubmit.style.borderTopRightRadius = "50px";
commentSubmit.style.borderBottomRightRadius = "50px";
commentSubmit.style.borderBottomLeftRadius = "60px";
addCommentTable.appendChild(commentSubmit);

addCommentTable.style.display = "none";

addComment.onclick = () => {
    tableDiv.style.display = "none";
    addUserTable.style.display = "none";
    commentTable.style.display = "none";
    addCommentTable.style.display = "flex";
    addCommentTable.style.flexDirection = "column";
    if (addComment.innerHTML.toLowerCase() == "add comment") {
        addCommentTable.style.display = "block";
        addComment.innerHTML = "Hide Add Comment";
        userInfoClik.innerHTML = "Users |";
        userComment.innerHTML = "Comments |";
        addUser.innerHTML = "Add User |";

    } else {
        addCommentTable.style.display = "none";
        addComment.innerHTML = "Add Comment";
    }
}

commentSubmit.onclick = () => {
    /************************************************************
 * *******************All Users comments ************************
 * **********************************************************/
    // add User table info
    let commentInfoTr = document.createElement("tr")
    tablcommenteId.appendChild(commentInfoTr);

    //  comment Name info
    let commentName = document.createElement("td");
    commentInfoTr.appendChild(commentName);

    //  comment Email  info
    let commentEmailTd = document.createElement("td");
    commentInfoTr.appendChild(commentEmailTd);

    // comment Id info
    let commentIdTd = document.createElement("td");
    commentInfoTr.appendChild(commentIdTd)

    if (userCommentEmail.value !== '' && userCommentName.value!== '' && userCommentEmail.value.includes('@')) {
        for (let i = 0; i < namArray.length; i++) {
            if (userCommentName.value == namArray[i] ) {
                for (let i = 0; i < emailArray.length; i++) {
                    if (userCommentEmail.value == emailArray[i]) {
                        commentEmailTd.innerHTML = `${userCommentEmail.value}`;
                        commentName.innerHTML = `${userCommentName.value}`;
                    }else{
                        alert(`Sorry ${userCommentEmail.value} is not register please try again`)
                    }            
                }
            } else {
                alert(`Sorry ${userCommentName.value} is not User please try again`)
            }            
        }
        if (commentName.innerHTML == `${userCommentName.value}` && commentEmailTd.innerHTML == `${userCommentEmail.value}`)  {
            commentIdTd.innerHTML = `${userTextarea.value}`;
        }
    }
    userCommentEmail.value = '';
    userCommentName.value = '';
    userTextarea.value = '';
}