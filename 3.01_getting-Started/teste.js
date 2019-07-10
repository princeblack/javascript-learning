var firtName, 
lastName, 
access = confirm;
if (access = confirm('to access in this page you must  be 18 years old or older, click on "OK" if this is the case')) {
        
        alert(' you will be redirected to the site')
        firtName = prompt("your firt Name");
        lastName = prompt("your last Name");
        alert(`you are ${firtName} ${lastName}`);
        var startAge = alert('please for secure raison we will like to know your age 😂',);
        
        adult = parseInt(prompt('your age :'));
        age = parseInt(adult);

    if (adult) {
        alert(confirm(`you are really ${age} years old ?`)); 

    } else {
        alert("sorry go back and do it again");

    }
    var yourCity = prompt( " your city : ");
    alert(" ✋ stop hahaha we forget to ask you for your country");
    var country = prompt( "your country please");
    alert ( `wow your coming form ${country}  . top 👍`);
    var postal = prompt(" your postal code please");
    var postalCode = parseInt(postal);
    alert (

    `   Profile :
    Firt Name : ${firtName},
    Last Name :  ${lastName},
    Age:  ${age},
    City: ${yourCity},
    Country: ${country},
    Postal:  ${postalCode},`
    );

    var floor = parseInt(prompt("enter the floor where the elevator must go  (from -2 to 30) "));
    if (floor == 0) {
        alert("you are alredy in the ground floor") ; 
    } else if (-2 <= floor && floor <= 30){
        alert("direction floor n ° " + floor + ' !') ;
    } else{
        alert("this floor does not exist");
    }  

} else {
    alert("sorry , you can't have access to the site");
}

var drawer = parseInt(prompt("choose the drawer to open (1 to 4 :"));
switch (drawer){
    case 1:
        alert('contains various tools for drawing: paper, pencils, etc.');
        break;
    case 2:
        alert('contains computer equipment: cables, components etc.');
        break;
    case 3:
        alert('Ah? this drawer is locked! Pity !')
        break;
    case 4:
        alert('contains clothes: shirts, panttons, etc,')
        break;
    default:
        alert('info of the day: the cabinet contains only 4 drawers and until proven otherwise, the drawers do not exist');
}






