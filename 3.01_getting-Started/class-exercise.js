// Task :
// Create a class called Student which accepts
//the name of a student as string,
//his/ her class name as string.
//address as string
//birthDate as date
// The Student class should have the following methods
// fullName : John Doe
// Address  : vulkenstr 1, 2341, Berlin
// Subjects : return all the subjects which currently studying like ‘Web’, ‘Math’, ‘Science’ etc
// birthDate : need to pass the year and store this year in this object’s property birthDate.
// Age: it will return the age of the student, you no need to pass anything in this method but birthDate will take from previously stored from the object property.
//Outputs
//show fullname, show address, show subjects, birthdate, age

class Studen {

    constructor(fullName, className, address, birthDate) {
        this.fullName = fullName;
        this.className = className;
        this.address = address;
        this.birthDate = new Date(birthDate);
    }
    getFullName() {
        console.log("getFullName");
        return this.fullName;
    }
    getAddress() {
        console.log("getAddress");
        return this.address
    }
    getSubjects() {
        console.log("getSubjects");
        this.subjects = 'Math, German, Science,History'
        return this.subjects
    }
    getBirthDate() {
        console.log("getBirthDate");
        return this.birthDate

    }
    getAge() {
        console.log("getAge");
        this.age = 2018 - this.birthDate.getFullYear()
        return this.age
    }
}

const studentObj = new Studen(' John Doe', 'Fbw15', 'vulkenstr 1 , 12343, Berlin', '1984-03-10');

// console.log(studentObj);
// console.log(studentObj.getAge())
// console.log(studentObj.getBirthDate())
// console.log(studentObj.getSubjects());



//Create Class validateCreditCard and constructor accept the card number.
//Class contain one method validate and it decide card number is valid or not.
// Here are the rules for a valid number:
// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16

class ValidateCreditCard {
    constructor(num) {
        this.num = num
    }
    validate(creditCardNum) {
        this.creditCardNum = [creditCardNum];
        if (creditCardNum.length !== 16) {
            return false;
        }
        // All of the digits must be numbers
        for (let i = 0; i < creditCardNum.length; i++) {
            let currentNumber = creditCardNum[i];
            currentNumber = Number.parseInt(currentNumber);
            if (!Number.isInteger(currentNumber)) {
                return false
            }
        }
        // the credit card number must be composed of at least two different digits (i.e all of the digits cannot be the same)

        var obj = {};
        for (let i = 0; i < creditCardNum.length; i++) {
            obj[creditCardNum[i]] = true;
        }
        // console.log(Object.keys(obj))
        if (Object.keys(obj).length < 2) {
            return false
        }

        // the final digit of the credit card number must be even.

        // console.log(creditCardNum[creditCardNum.length] - 1);

        if (creditCardNum[creditCardNum.length - 1] % 2 !== 0) {
            return false
        }

        // the sum of all the digits must be greater than 16

        let sum = 0;
        for (let i = 0; i < creditCardNum.length; i++) {
            sum += Number.parseInt(creditCardNum[i]);
        }
        if (sum <= 16) {
            return false
        } else {
            return true
        }

    }

}

const obj = new ValidateCreditCard()

// console.log(obj.validate('9999777088880000'));//true
// console.log(obj.validate('6666666666661666')); //true
// console.log(obj.validate('a92332119c011112')); //false
// console.log(obj.validate('4444444444444444')); //false
// console.log(obj.validate('1211111111111112')); //true



//Task:. Even Number Generator
//Create a class EvenNumberGenerator  with method  evenNumbers that finds all even numbers from 1 to the given number.
//
//Examples:
//evenNums(8) ➞ [2, 4, 6, 8]
//evenNums(4) ➞ [2, 4]
//evenNums(2) ➞ [2]
//
//If there are no even numbers, return an empty array.

class EvenNumberGenerator {
    evenNumbers(num) {
        this.num = num;
        let even = [];
        for (let i = 1; i <= this.num; i++) {
            if (i % 2 === 0) {
                even.push(i);
            }
        }
        return even
    }
}
const evenNums = new EvenNumberGenerator();

console.log(evenNums.evenNumbers(8));


