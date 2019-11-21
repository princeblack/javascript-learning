//  IIfE can return a value that can be assigned to a variable
// this approach lets us decide what variables methods
// what variables/methods we want to expose by putting them in the return statement 

// iife way + closures
var myGradesCalculate = (function () {
    //  we keep these variables private inside this closures scope
    var myGrades = [93, 95, 88, 0, 55, 91];
    return {
        average: function () {
            var total = myGrades.reduce(function (accumulator, item) {
                return accumulator + item;
            }, 0)
            return "Your average grade is " + Math.floor(total / myGrades.length) + ".";
        },
        failing: function () {
            var failingGrades = myGrades.filter((item) => {
                return item < 70;
            })
            return "You failed " + failingGrades.length + " times.";
        },
        getArray : function () {
            return myGrades;
        }
    }
})();
console.log(myGradesCalculate.average());
console.log(myGradesCalculate.failing());
console.log(myGradesCalculate.getArray());


