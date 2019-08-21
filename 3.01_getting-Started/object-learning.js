// creating a object

let myCar = {
    // key : value,
    make : 'Ford',
    model : 'Mustang',
    year : 1969
};

console.log(myCar);
console.log(`The property make : ${myCar.make}`);
console.log(`The property model : ${myCar.model}`);
console.log(`The property year : ${myCar.year}`);


//   assigning values to properties

let myNewCar ={};

myNewCar.make = 'Ford';
myNewCar.model = 'Mustang';
myNewCar.year = 1969;

console.log(myNewCar);
console.log(`The property make : ${myNewCar.make}`);
console.log(`The property model : ${myNewCar.model}`);
console.log(`The property year : ${myNewCar.year}`);

// Array info
var info = ['John',' Schulz', 32, 'Berlin']
console.log(info[0]); 

//  objetct info

let objInfo = {
    firstName : 'John',
    lastName : 'Schulz',
    age : 32,
    city : 'Berlin'
}
console.log(objInfo.lastName);

var family ={
    children : [{age :3, name: 'paul'},{age : 4, name: 'susi'}],
    father :  'peter',
    mother : 'sandra'
};
console.log(family.children[1].name);
console.log(family);

var appletree = {
    apples :[
        {
            color : 'red',
            taste : 'very',
            num : 12,
            size : [
                'big',
                'small',
                'medium'
            ]
        },
        {
            color : 'yellow',
            tast : 'very',
            num : 11
        }
    ],
    tree : 'wonderful'
}
//  access the value medium of the size property.
console.log( appletree.apples[0].size[2]);

// get value of the num property
console.log(appletree.apples[1].num);

// user object
 let user = {
     name : 'John',
     age : 30
 }
user.isAdmin = true;
console.log(user);

delete user.age;
console.log(user);

let user2 = {
    name : 'John',
    age : 30,
    "like birds" : true  // multiword property name must be quoted
} 

console.log(user2);
// console.log(user.like birds);  error  , property can not be with space
// console.log(user2."like birds"); error, property can not assign as string
console.log(user2["like birds"]); // with bracket you can get value for the multiword

let user3 ={};
user3["like birds"] = true;

// get
console.log(user3);

delete user3["like birds"];
console.log(user3);

// we can use square brackets in an object literal. that's called computed properties.

let fruit = "kiwi red";
let fruitBuchet = {
    [fruit] : 5
}
console.log(fruitBuchet["kiwi red"]); // if let fruit = "kiwi red"
console.log(fruitBuchet); // {kiwi : 5}


// Reserved words (inbuilt words of the javascript ) are allowed as property names

let obj1 = {
    for : 1,
    let : 2,
    return : 3
}
console.log(obj1.for + obj1.let + obj1.return ); // 6

let obj2 = {
    for :" return",
    let : 2,
    return : 3
}
console.log(obj2.for + obj2.let + obj2.return ); // return23

let obj3 = {
    for : 1,
    let : "return",
    return : 3
}
console.log(obj3.for + obj3.let + obj3.return ); // 1return3



// comparion object
console.log('cOMPARING OBKJECTS');

let obj4 = {
    name : {
        firstName : 'John',
        lastName : 'Schulz'
    },
    age : 32
};


let obj5 = {
    name : {
        firstName : 'John',
        lastName : 'Schulz'
    },
    age : 32
};

console.log(obj4 == obj5); //false
console.log(obj4.name === obj5.name); // false
console.log(obj4.name.firstName == obj5.name.firstName);

// looping through Objects

// the better way to loop through objects is first to convert the object into an arry . Than you loop throuh the array .
//  you can convert an object into an  array with three methods.
// 1. Object.keys
// 2. Object.values
// 3. Object.entries 

// 1. Object.keys : creates an array that contains the properties of an object
const fruits ={
    apple : 28,
    orange : 17,
    pear : 54
}
console.log(fruits);

const keys = Object.keys(fruits)
console.log(keys);

//  looping through arrays created from Object.keys
console.log("--- Case 1 ---");
// case 1 : old way

for (let i = 0; i < keys.length; i++) {
    console.log(keys[i]);

}

console.log("--- Case 2 ---");
// case 2 : new way
for (const key of  keys) {
    console.log(key);
    
}

// case 3 : array.forEach (function  (currentValue, index, arr), thisValue)
// thisValue : OPtional . A value to be passed to the function to be used as its "this" value.
//  If this parameter is empty, the value "undefined" will be passed as its "this" value

console.log("--- Case 3 ---");
console.log(keys);
keys.forEach(displayKeys);
function displayKeys(item, jeSuisLa,keys) {
    console.log(`The key ${item} has index ${jeSuisLa}`);
}


// in short form
keys.forEach((item,index)=>{
    console.log(`The key ${item} has index ${index}`);

});

// 2. Object.values creates an array that contains the values of every property in an object

const values = Object.values(fruits);
console.log(values);

// for(const item of values){
//     values [item]= "test";
//     console.log([item]);

    
    
// }

//  Object.entries creates an array within an array (an array of arrays). Each inner array has two item. The first item is the property and second item is the value.

const entries = Object.entries(fruits);
console.log(entries);

// Write a JavaScript program to list the properties of a JavaScript object.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// Sample Output: name,sclass,rollno

console.clear()
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };

const javaKey = Object.keys(student)
console.log(javaKey);


// #### 1. Check if a number is within a given range
let num = "12";
for (const key in student) {
    if (student[key] == num ) {
        console.log(student[key]);
        
    }
}
// Write a program that checks if a number is within the range of an object's min and max properties.
// Examples:
// * 4, { min: 0, max: 5 }) ➞ true
// * 4, { min: 4, max: 5 }) ➞ true
// * 4, { min: 6, max: 10 }) ➞ false
// * 5, { min: 5, max: 5 }) ➞ true
// * Notes: Assume min <= max is always true.

let value = 4;



// 1. Leap Years
// Write a program which finds the leap years in a given range of years.
