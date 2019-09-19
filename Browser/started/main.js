let greetingObj = document.getElementById("greeting");
console.log(greetingObj);

greetingObj.innerHTML= "Hello World";
 
let saymynameObj =document.getElementById("saymyname");

saymynameObj.onclick=function () {
    // alert("is that really your name ?")
    let mynameObj= document.getElementById("myname");
    let thedateobj= document.getElementById("thedate");
    thedateobj.innerHTML= "Hello " + mynameObj.value +  " today is " + getDayName()[0] + " only " + getDayName()[1] + " days left until the wenkend";
    
    // by class
    const exampleObj= document.getElementsByClassName("example");
    exampleObj[1].innerHTML= " I am from back-end";
    exampleObj[0].innerHTML = " I am form front-end"

    //  by querySelector
    let exampleSelectorObj = document.querySelector(".example");
    exampleSelectorObj.style.backgroundColor="#42f59e";

   //  by querySelectorAll
   let exampleAllSelectorObj = document.querySelectorAll(".example");
    exampleAllSelectorObj[1].style.backgroundColor="#5ca5f2";

    // selector + #idName

    let divContainerObj = document.querySelector("#divContainer");
    divContainerObj.innerHTML= "#IDName access and replace";
    function getDayName() {
        const weekDays = ['Monday','Tuesday','wednesday','Thursday','Friday','Saturday','Sunday'];
        // current date
        let date = new Date();
        // current day
        let day = date.getDay();
        let arr = [weekDays[day-1],5-day];
        return arr;
    }
}

//  add dynamic input type text
let inputObj= document.createElement("input");
inputObj.type= "text";
inputObj.className="testClass";
document.body.appendChild(inputObj)

let divContainerObj = document.querySelector("#divContainer");
let newHeading = document.createElement('h1');

newHeading.innerHTML = "I am Heading from the backend - added dynamically";
divContainerObj.insertAdjacentElement("afterbegin",newHeading);

divContainerObj.insertAdjacentHTML("afterend", "<h3> I am here H3 testing</h3>")



