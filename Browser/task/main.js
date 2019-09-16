let valideObj = document.getElementById("valide");
valideObj.onclick = function (){
    //  case 1

    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let Job = document.getElementById("Job");
    let comment = document.getElementById("comment");
    console.log("submit");

    //  show data o other div
    // document.getElementById('dataContainer').innerHTML = ` Firt Name : ${firstName.value}<br> 
    // Last Name : ${lastName.value} <br>
    // Job Title : ${Job.value} <br>
    // comment : ${comment.value}`

    // case 2
     let alltextbox = document.querySelectorAll("input[type='text']");
     document.getElementById("dataContainer").innerHTML =` Firt Name : ${firstName.value}<br> 
     Last Name : ${lastName.value} <br>
     Job Title : ${Job.value} <br>
     comment : ${comment.value}`

    //  case 3
     let html = '';
     let  allLables = document.querySelectorAll("label");
     console.log(allLables);
     for (let i = 0; i < alltextbox.length; i++) {
         html += `${allLables[i].innerHTML} : ${alltextbox[i].value} <br>`         
     }
     document.getElementById("dataContainer").innerHTML =html;
     


}

