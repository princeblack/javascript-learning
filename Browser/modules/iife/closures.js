function retirement(retirementAge) {
    var a = " years left until retirement"; // is declared outside of the anonymous fucntion 
    return function (yearOfBrirth) {
        var age = 2019 -yearOfBrirth;
        console.log((retirementAge - age) +a);
    }
}
var retirementUS = retirement(66)
retirementUS(1990)

retirement(77)(1991)


function interviewQuestion(job) {
    return function (name) {
        if (job == 'designer'.toLowerCase()) {
            console.log(name +' , can you please explain what UX design?');
        }else if (job == "teacher".toLowerCase()) {
            console.log('what subject do you teach,' +name+ '?');
        }else{
            console.log('Hallo '+name+ ', what do you do?');
        }
    }
}
interviewQuestion('Teacher')('john')

// counter example : Create a counter variable that is the scope of a function.
//                  create an inner fucntion that increases the counter by 1.

function inc() {
    let counter = 0;
    return function () {
        counter++
        return counter;
    }
}

let c = inc()
console.log(c());
