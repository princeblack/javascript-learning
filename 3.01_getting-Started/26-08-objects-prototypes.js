// function instantiation

function animal(name, energy) {
    let  animal = {};
    animal.name = name;
    animal.energy = energy;

    animal.eat = function(amount){
        console.log(`${this.name} is eating`);
        this.energy += amount;
        
    }
    animal.sleep = function(length){
        console.log(`${this.name} is sleeping`);
        this.energy += length;
        
    }
    animal.play = function(length){
        console.log(`${this.name} is playing`);
        this.energy -= length;
        console.log(length);
        
        
    }
    return animal;
}

const leo = animal('leo', 7);
const snoop = animal('snoop', 10)

leo.play(10)

// functional Instantiation wish shared methods.

const animalMethods ={ // this is animalMethods object

    eat(amount){
        console.log(`${this.name} is eating`);
        this.energy += amount;
        
    },
    sleep(length){
        console.log(`${this.name} is sleeping`);
        this.energy += length;
        
    },
    play(length){
        console.log(`${this.name} is playing`);
        this.energy -= length;
        console.log(length);
        
    }
}

function animalPretador(name, energy) {
    let animal={};
    animal.name = name;
    animal.energy = energy;
    animal.eat = animalMethods.eat;
    animal.sleep = animalMethods.sleep;
    animal.play = animalMethods.play;
    return animal;
    
}
const lili = animal('lili',7);
const dogs = animal('dogs', 17)
lili.eat()


// object.create
const parent = {
    name: "John",
    age: 30,
    nationality: 'German'
};

const child =Object.create(parent);
console.log(child);
child.name = "Doe";
child.age = 20;
console.log(child);
 
console.log(child.name);
console.log(child.age);
console.log(child.nationality);

function animalpro(name, energy) {
    let animal=Object.create(animalMethods);
    animal.name = name;
    animal.energy = energy;
    animal.eat = animalMethods.eat;
    animal.sleep = animalMethods.sleep;
    animal.play = animalMethods.play;
    return animal;
    
}
const azza = animal('azza',7);
const imi = animal('imi', 17)
azza.eat()

// so far , so good. There are still some imporvement we can make though . it seems that still zo manage a separate object (animalMethods) in order to share methods across instances.
// that we can implement through prototype.
// prototypes -everry function in javascript has a prototype property that reference an object

function doThings() {
    
}
console.log(doThings.prototype); //doThings{}
// function doThings(){} = doThing.prototype

// prototype Instantiation
function animalBête(name, energy) {
    let animal=Object.create(animalBête.prototype);
    animal.name = name;
    animal.energy = energy;
    return animal;
}

animalBête.prototype.eat = function (amount) {
    console.log(`${this.name} is eating`);  
    this.energy += amount;

}

animalBête.prototype.sleep = function (length) {
    console.log(`${this.name} is sleeping`);  
    this.energy += length;

}
animalBête.prototype.play = function (length) {
    console.log(`${this.name} is playing`);  
    this.energy -= length;

}

// const baba = animalBête('baba', 23);
// const luise = animalBête('luise',8)
// luise.eat()

// object prototype
let obj ={};
console.log(obj);

// buit in prototypes : array, date,function
let arr = [1,2,3];
console.log(arr.__proto__=== Array.prototype);

console.log(arr.__proto__.__proto__ === Object.prototype);
console.log(arr.__proto__.__proto__.__proto__);
console.log(arr);

// Another example

function f() {
    
};
console.log(f.__proto__ === Function.prototype);
console.log(f.__proto__.__proto__=== Object.prototype);

// javascript array prototype constructor 

Array.prototype.myTest = function () {
    console.log('Array prototype::::::::::');
    for (let i = 0; i < this.length; i++) {
        this[i] =  this[i].toUpperCase();
    }
};

var fruits = ["orange","Apple","mango","banana"]
console.log(fruits);
fruits.myTest();
console.log(fruits);

var testArr = ["a","b","c"];
testArr.myTest();
console.log(testArr);

// Map  using array method
var arr1=[2,3,9,16]
const result = arr1.map(x=> x*2)
console.log(result);

// /with function defination
var newArr = arr1.map(myfunction);
console.log(newArr);
function myfunction(num) {
    return num * 10;
}

// example 3
var persons =[
    {firstName: "John", lastName: "doe"},
    {firstName: "Jayne", lastName: "Frye"},
    {firstName: "Sabine", lastName: "Ebert"}
]
console.log(persons.map(getFullName));

function getFullName(item) {
    return [item.firstName,item.lastName].join(" ")
}

// example 4
// using var arr1=[,2,3,9,16]
var x = arr1.map(Math.sqrt);
console.log(x);

// reduce method
// the reduce() method reduces the array to a single value
// the reduce() method executes a provided function for each value of the array (from left-to-right).
// the reduce value of the function is store in an accumulator (result/total).
// note : reduce() does not execute the function for array elements without values.
// note : this method does  not change the original array.

// array.reduce(function(total, currentValue, currentIndex,Arr), initialValue)

//  example 1
var numbers = [50,60,70,10];
var resultOut = numbers.reduce(myReduceFunc);
function myReduceFunc(total,num){
    console.log(`total : ${total} and num : ${num}`);
    return total + num;
}
console.log(resultOut);

// example 2

const euros = [29.76, 41.85, 46.5];
console.log( euros);

const average = euros.reduce((total,amount,index,array) =>{
    console.log(`total : ${total} and amount : ${amount}`);
    total += amount;

    console.log(`total : ${ total}`);
    
    if (index == array.length-1) {
        return total / array.length;
    }else{
        return total;
    }
    
});

console.log(average);

// example 3

console.log("::::::::with adding ititial value ::::::::::::");
console.log( euros);

const averageAddInitial = euros.reduce((total,amount,index,array) =>{
    console.log(`total : ${total} and amount : ${amount}`);
    total += amount;

    console.log(`total : ${ total}`);
    
    if (index == array.length-1) {
        return total / array.length;
    }else{
        return total;
    }
    
},5);
console.log(averageAddInitial);

// example 4 : [29.76, 41.85, 46.5]
const averageAddInitialArr = euros.reduce((total,amount,index,array)=>{
    total.push(amount);
    if (index == array.length-1) {
        var average = 0 , temp = [];
        for (let i = 0; i < total.length; i++) {
            console.log("i=>" + total);
            average += total[i];                   
        }
        temp.push(average / array.length);
        return temp;

    } else {
        return total;
    }
}, [55]);
console.log(averageAddInitialArr);

// example 5
const dataArr = [[1,2,3],[4,5,6],[7,8,9]];

const flatValues = dataArr.reduce((total, value) =>{
    console.log(`total : ${total} and value : ${value}`);
    return total.concat(value);
},[]);
console.log(flatValues);

//  Task reduce Method
//  const fruitBasket = ['banana','cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig'];

// output : {banana : 2, cherry : 3, apple : 2, fig : 1}


const fruitBasket = ['banana','cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig'];

const fruitvalue = fruitBasket.reduce((value , letter )=>{
    if (value[letter] == undefined) {
        value[letter]= 0;
    } 
    

    letter[letter] == letter[letter] +1 ;
    return value ;
    
},{});
console.log(fruitvalue);

// filter : array method

// the filter() method creates an array filled with all array element that pass a test (provided as a function).
// note : filter() does not execute the function for array elements without values .
// note : filter() does not change the original array.

// array.filter(function(currentValue, index,arr), thisValue)

//  example 1, check adult age return all ages which is greater than 18
var ages = [32,33,16,40];

function checkAdult(age) {
    console.log("age ==>" + age);
    return age >= 18;    
}
console.log(ages.filter(checkAdult));

// example 2, get all event number
const numbers2 = [1,3,4,6,8,9]

const filterValue = () =>{
    return numbers2.filter(number => {
        return number % 2 == 0;
    })
}
console.log(filterValue());

// example 3 , count fruits in basket
var objTemp = {};
var tempArr= fruitBasket.filter((fruit)=>{
    objTemp[fruit] = (objTemp[fruit] || 0) +1
});
console.log(objTemp);

const  calculateFruit = fruitBasket.reduce((basketObj, fruitParam,index,array) =>{
    basketObj[fruitParam] = array.filter((fruit)=> (fruit === fruitParam)).length
    return basketObj
});
console.log(calculateFruit);

// example 4, Manipulate country data

const data =[
    {
        country : 'China',
        population : 13799999.999999998
    },
    {
        country : 'India',
        population : 13390000
    },
    {
        country : 'USA',
        population : 3257000
    },
    {
        country : 'Germany',
        population : 827900.0000000001
    }
]

let newData = data.filter(item =>{
    return item.population < 900000;
});
console.log(newData);

//Task : Searching in an array using filter method
//const students = ['krunal', 'ankit', 'appdividend', 'nehal', 'dhaval'];
//return all item who has 'al' inside.
//output :  ['krunal', 'nehal','dhaval']

const students = ['krunal', 'ankit', 'appdividend', 'nehal', 'dhaval'];

let includeInside = students.filter(item =>{
    return item.includes('al')
});

console.log(includeInside);
