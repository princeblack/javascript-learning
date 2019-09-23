document.body.style.textAlign="center";
document.body.style.alignContent="center";
document.body.style.alignItems="center";
document.body.style.justifyContent="center";
document.body.style.justifyItems="center";
document.body.style.width="50%";

document.getElementById("mainDiv").style.textAlign = "center";
let mainDiv = document.getElementById("mainDiv");
mainDiv.style.border="solid black";

console.log(mainDiv);

//Task 1:
//Create H1 Element using dom method and put in main Div.
//set id as test

let test = document.createElement("h1");
test.id="test";
// test.style.
test.innerHTML= 'WELCOM';
mainDiv.appendChild(test);

//add one button inside mainDiv with click event bind and when click on it
//show message “Hallo i am from onclick with listener”

const mainButton = document.createElement("button");
mainButton.style.fontSize="20px";
mainButton.style.height="50px";
mainButton.style.width="120px";
mainButton.style.fontWeight="900";
mainButton.style.borderRadius="50px 150px 50px";
mainButton.style.color="rgba(255,51,51,1)";

mainButton.innerText="Say hello";
mainDiv.appendChild(mainButton);
let sayHallo = document.createElement("p");
sayHallo.id="hello";
sayHallo.innerHTML="Hallo i am from onclick with listener";
sayHallo.style.display="none";

mainButton.onclick = ()=>{
    mainButton.after(sayHallo)
    if (mainButton.innerHTML.toLowerCase()=="say hello") {
        sayHallo.style.display="block";
        mainButton.innerHTML="hello";
        mainButton.style.color="rgba(238,238,238,1)";
        mainButton.style.backgroundColor="rgba(51,51,153,1)";
        document.getElementById('hello').style.backgroundColor="rgba(0,51,204,0.6)";
        document.getElementById('hello').style.color="#FFFF33";
    } else {
        sayHallo.style.display="none";
        mainButton.innerHTML="Say hello";
        mainButton.style.backgroundColor="rgba(51,204,102,0.5)";
        mainButton.style.color="rgba(0,0,0,1)";
    }
}

//Task 2:

// div one
const divOne = document.createElement("div");
divOne.id="one";
mainDiv.appendChild(divOne);

// divTwo
const divTwo = document.createElement("div");
divTwo.id="two";
mainDiv.appendChild(divTwo)

let divTwoP=document.createElement("p");
divTwoP.innerHTML=`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam ipsa fuga vel obcaecati neque, possimus distinctio quas odit veniam molestiae perferendis, quam eos nesciunt soluta repellat earum, enim corrupti non.`
divTwo.appendChild(divTwoP)

// divTree
const divThree = document.createElement("div");
divThree.id="three";
mainDiv.appendChild(divThree);

// divFour
const divFour = document.createElement("div");
divFour.id="four";
mainDiv.appendChild(divFour);
const divFourImg = document.createElement("img");
divFourImg.setAttribute("src","https://picsum.photos/id/42/600/400");
divFourImg.setAttribute("width","90%")
divFour.appendChild(divFourImg);

// button before the end (mainDiv).
let mainEndButton = document.createElement("button");
mainEndButton.innerHTML="Test Me Event";
mainDiv.appendChild(mainEndButton)
mainEndButton.style.fontSize="20px";
mainEndButton.style.border="solid 6px green";
mainEndButton.style.borderRadius="50%";
mainEndButton.style.fontWeight="900";
mainEndButton.style.color="white";
mainEndButton.style.backgroundColor="rgba(0,51,255,1)";


// 2.5 : Insert h6 tag before the main Div tag
const h6Tag = document.createElement("h6");
h6Tag.style.textAlign="center";
h6Tag.style.fontSize="30px";
h6Tag.innerHTML="h6";
mainDiv.insertAdjacentElement("beforebegin",h6Tag)

//2.6 : Insert h3 tag just after the main div tag
const h3Tag = document.createElement("h3");
h3Tag.style.textAlign="center";
h3Tag.style.fontSize="30px";
h3Tag.innerHTML="h3";
mainDiv.insertAdjacentElement("afterend",h3Tag)

//2.7 : Insert a tag just before the four div tag.
const aTag=document.createElement("a")
aTag.style.textAlign="center";
aTag.style.fontSize="30px";
aTag.innerHTML="A tag";
mainDiv.appendChild(aTag).before(divThree);

//2.8 : Insert p tag after the end of the main div tag.
const pTag=document.createElement("p");
pTag.id="ptag";
pTag.style.textAlign="center";
pTag.style.fontSize="30px";
pTag.innerHTML="P tag";
h3Tag.insertAdjacentElement("afterend",pTag)

//2.9 : Show all div box with adding border but every div has different border color.
let colArray = ["#CC6699","#3399FF","#FF9966","#CCCC00","#660033"]
divOne.style.border=`solid 5px ${colArray[0]}`;
divTwo.style.border=`solid 5px ${colArray[1]}`;
divThree.style.border=`solid 5px ${colArray[2]}`;
divFour.style.border=`solid 5px ${colArray[3]}`;

//2.10 : Set background color for the p tag and foreground color for the text inside of //the p tag.
let pBgColor=divTwo.lastChild;
pBgColor.id="testt"
document.getElementById("testt").style.backgroundColor="rgba(51,204,153,0.1)";
document.getElementById("testt").style.color="rgba(255,51,204,1)";

document.getElementById("ptag").style.backgroundColor="rgba(51,153,255,0.3)";
document.getElementById("ptag").style.color="#009900";


//2.11 : Change a element/tag url link color from the blue to dark red.

//2.12 : Apply onclick event to button and Change text “Test Me Event” of the button.

//2.13 : Add button and assign text “Change href” and bind the function which change the //href of the a tag.

//2.14 : Add button and assign text “Calculate” and perform the +, - and / and display in //the front/page.

//2.15 : Add h4 tag with id “greeting” , text “Hallo DCI” and p tag with id “thedate”, //text How are you?

//2.16 : Add input type “text” and id “myname”

//2.17 : Add button with id “saymyname”, text “Say hallo”.

//2.18 : Get name which entered in the textbox myname and show when click on the button “saymyname” and also need to replace “DCI” text with entered name from the h4.