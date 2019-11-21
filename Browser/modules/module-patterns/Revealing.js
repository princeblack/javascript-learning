// Revealing Module Pattern

var myGradesCalculate =(function() {
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
    // Explicitly reveal public pointers to the private method/function that we want to reveal publicly
    return{
        average: average,
        failing: failing
    }
})();

console.log(myGradesCalculate.average());
console.log(myGradesCalculate.failing());



