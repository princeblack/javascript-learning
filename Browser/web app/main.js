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
topMenu.style.width = "50%";
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
tableDiv.style.backgroundColor = "rgba(255,153,519,0.8)"
tableDiv.style.width = "50%";
tableDiv.style.display = "flex";
tableDiv.style.alignItems = "center";
tableDiv.style.alignContent = "center";
tableDiv.style.justifyContent = "space-around";
tableDiv.style.flexDirection = "row";
tableDiv.style.flexWrap = "wrap";



// user table id
const tableId = document.getElementById("tableId");

tableId.style.width = "80%";
tableId.style.marginLeft = "9.5%";
tableId.style.textAlign = "left";
tableId.style.border = "9px solid white";

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
 * ****************costum commentair table *************************
 * **********************************************************
 * **********************************************************/

const commentTable = document.getElementById("commentTable");
commentTable.style.backgroundColor = "rgba(255,153,519,0.8)"
commentTable.style.width = "50%";


// user table id
const tablcommenteId = document.getElementById("comment");
tablcommenteId.style.width = "80%";
tablcommenteId.style.marginLeft = "9.5%";
tablcommenteId.style.border = "9px solid white";

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
addUserTable.style.textAlign = "center";



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
let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

submitButton.onclick = () => {

    //  valide input and change the value of email and name
    if (re.test(emailInput.value) && nameInput !== '') {
        /************************************************************
        * *******************All Users data ************************
        * **********************************************************/

        // for (let i = 0; i <= emailArray.length; i++) {
        if (emailArray.indexOf(emailInput.value) == -1) {
            namArray.push(nameInput.value);
            emailArray.push(emailInput.value);
            // add User table info
            let userInfoTr = document.createElement("tr")
            tableId.appendChild(userInfoTr);
            userInfoTr.style.backgroundColor = "white";

            //  User Name info
            let userNameTD = document.createElement("td");
            userNameTD.style.overflowWrap="break-word";
            userNameTD.style.wordBreak="break-all";
            userInfoTr.appendChild(userNameTD);

            //  User Email  info
            let userEmailTd = document.createElement("td");
            userEmailTd.style.overflowWrap="break-word";
            userEmailTd.style.wordBreak="break-all";
            userInfoTr.appendChild(userEmailTd);

            // user Id info
            let userIdTd = document.createElement("td");
            userIdTd.style.overflowWrap="break-word";
            userIdTd.style.wordBreak="break-all";
            userInfoTr.appendChild(userIdTd);


            //  now give the value to User Name ,User Email and user Id info
            userNameTD.innerHTML = `${nameInput.value}`;
            userEmailTd.innerHTML = `${emailInput.value}`;
            userIdTd.innerHTML = `${emailArray.indexOf(emailInput.value) + 1}`;

        } else if (emailArray.indexOf(emailInput.value) > -1) {
            alert(`${emailInput.value} is Already registered `)
        }
    } else {
        alert(`${emailInput.value} is not a valid email`);
        alert("Please fill out all fields.");
    }
    emailInput.value = '';
    nameInput.value = '';
}





/************************************************************
 * **********************************************************
 * ****************costum  Add user Comment **********************
 * **********************************************************
 * **********************************************************/
let addComment = document.getElementById("addComment");
addComment.style.cursor = ("pointer");

let addCommentTable = document.getElementById("addCommentTable");
addCommentTable.style.backgroundColor = "rgba(255,153,51,0.8)"
addCommentTable.style.width = "50%";
addCommentTable.style.textAlign = "center";



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
userTextarea.style.height = "80px"
userTextarea.maxLength = "100";
userTextarea.style.wordBreak = "break-all";
userTextarea.style.overflowWrap="break-word";

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

/************************************************************
 * *******************All Users comments ************************
 * **********************************************************/
commentSubmit.onclick = () => {

    if (re.test(userCommentEmail.value) && userCommentName.value !== '') {
        // add User table info
        let commentInfoTr = document.createElement("tr");
        commentInfoTr.style.backgroundColor = "white";
        commentInfoTr.style.border="solid 5px green"
        commentInfoTr.style.width="100%"
        tablcommenteId.appendChild(commentInfoTr);

        //  get all user index in the namArray
        let indicesName = [];
        let idxName = namArray.indexOf(userCommentName.value);
        let idxEmail = emailArray.indexOf(userCommentEmail.value);
        while (idxName != -1) {
            indicesName.push(idxName)
            idxName = namArray.indexOf(userCommentName.value, idxName + 1)
        }

        //  valid de comment 
        if (indicesName.includes(idxEmail)) {

            //  comment Name info
            let commentName = document.createElement("td");
            commentInfoTr.appendChild(commentName);
            commentName.style.maxWidth="20%";
            commentName.style.minWidth="20%";
            commentName.style.overflowWrap="break-word";
            commentName.style.wordBreak="break-all";
            commentName.style.resize="none";

            //  comment Email  info
            let commentEmailTd = document.createElement("td");
            commentInfoTr.appendChild(commentEmailTd);
            commentEmailTd.style.maxWidth="30%";
            commentEmailTd.style.minWidth = "30%";
            commentEmailTd.style.overflowWrap="break-word";
            commentEmailTd.style.wordBreak="break-all";        

            // comment Id info
            let commentIdTd = document.createElement("td");
            commentInfoTr.appendChild(commentIdTd);
            commentIdTd.style.maxWidth = "100px";
            commentIdTd.style.maxHeight= "150px";
            commentIdTd.style.overflowWrap="break-word";
            commentIdTd.style.wordBreak="break-all";
            commentIdTd.maxLength = "100";
            commentIdTd.readOnly = "true";
            commentIdTd.style.resize="both";


            // delete comment info and user info
            let deletcomment = document.createElement("td");
            deletcomment.style.maxWidth="10%";
            commentInfoTr.appendChild(deletcomment);
            
            let deletcommentbutton = document.createElement("button");
            deletcommentbutton.style.maxWidth="100%";
            deletcommentbutton.style.minWidth="100%";

            deletcommentbutton.innerHTML="Remove";
            deletcomment.appendChild(deletcommentbutton)

            //  edite user comment
            let editcomment = document.createElement("button");
            editcomment.style.maxWidth="100%";
            editcomment.style.minWidth="100%";

            editcomment.innerHTML = "edite";
            deletcomment.appendChild(editcomment)

            commentEmailTd.innerHTML = `${userCommentEmail.value}`;
            commentName.innerHTML = `${userCommentName.value}`;
            commentIdTd.innerHTML = `${userTextarea.value}`;

            deletcommentbutton.onclick = () => {
                commentName.remove();
                commentEmailTd.remove();
                commentIdTd.remove();
                deletcomment.remove();
                editcomment.remove();
            }

            editcomment.onclick = () => {
                if (commentEmailTd.contentEditable == "true") {
                    commentEmailTd.contentEditable="false";
                    commentIdTd.contentEditable = "false";
                    commentName.contentEditable="false";
                    editcomment.innerHTML="reading";
                }else {
                    editcomment.innerHTML="edite";
                    commentEmailTd.contentEditable="true";
                    commentIdTd.contentEditable = "true";
                    commentName.contentEditable="true";
                }
            }
        } else if (indicesName.includes(idxEmail) === false) {
            alert(`${userCommentName.value}  or  ${userCommentEmail.value} is not valid`)
        }
    } else {
        alert("data not Valid")
    }
    userCommentEmail.value = '';
    userCommentName.value = '';
    userTextarea.value = '';
}