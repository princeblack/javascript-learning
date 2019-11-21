
(function game() {
    let score = Math.floor(Math.random() * 100)
    console.log(score);
    
})();

console.log('another example...');

let test = {
    a: 'a value',
    b: "b value",
    c: function () {return "c value"}
}
console.log(test);
console.log("that is the c value==> "+test.c());

let y = (function (goodLuck) {
    let score =Math.floor(Math.random() * 10);
    console.log('score: '+score);
    console.log(score+goodLuck >= 5);

    return {
        a: function () {
            return score+5
        }
    }
})(2);
console.log("value of the y...");
console.log(y); // return object {}
console.log("object value=> "+y.a());


// normal function

function addTogether() {
    let x = 20,y=20;
    let answer = x+y;
    console.log(answer);
}
addTogether();

// iife way 1
(function addTogether() {
    let x = 20,y=20;
    let answer = x+y;
    console.log(answer);
})();

//  iife way 2
(function() {
    let x = 20,y=20;
    let answer = x+y;
    console.log(answer);
})();

// iife  way 3 : With Arrow
(()=>{
    let x = 20,y=20;
    let answer = x+y;
    console.log(answer);
})();

(function () {
    //  we keep these variables private inside it closures scope
    var myGrades =[93,95,88,0,55,91];
    var average = function () {
        var total = myGrades.reduce(function (accumulator,item) {
            return accumulator +item ;
        },0)
        return "Your average grade is "+ Math.floor(total/myGrades.length) + ".";
    }
    var failing = function(){
        var failingGrades = myGrades.filter((item)=>{
            return item < 70;
        })
        return  "You failed "+ failingGrades.length + " times.";
    }
    console.log(average());
    console.log(failing());
})();


// iife way + closures
var myGradesCalculate = (function () {
    //  we keep these variables private inside this closures scope
    var myGrades =[93,95,88,0,55,91];
    return{
         average : function () {
            var total = myGrades.reduce(function (accumulator,item) {
                return accumulator +item ;
            },0)
            return "Your average grade is "+ Math.floor(total/myGrades.length) + ".";
        },
         failing : function(){
            var failingGrades = myGrades.filter((item)=>{
                return item < 70;
            })
            return  "You failed "+ failingGrades.length + " times.";
        }  
    }
})();
console.log(myGradesCalculate.average());
console.log(myGradesCalculate.failing());

