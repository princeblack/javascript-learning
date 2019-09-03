 
// *******************************************CLASSES*******************************************
// You can create an object using either "Object.create" or "new" keyword
function Animal(name, energy) {
    // let animal = Object.create(Animal.prototype);   //when calling with new keyword we don't need this line anymore
    //animal.name = name;                           
    this.name = name;               // to call it with the "new" keyword we have to add "this" keyword here and delete "animal" before name
    //animal.energy = energy;
    this.energy = energy;            // to call it with the "new" keyword we have to add "this" keyword here and delete "animal" before energy
    // return animal;
}
Animal.prototype.eat = function (amount) {
    console.log(`${this.name} is eating`);
    this.energy += amount;
}
Animal.prototype.sleep = function (length) {
    console.log(`${this.name} is sleeping`);
    this.energy += length;
}
Animal.prototype.play = function (length) {
    console.log(`${this.name} is playing`);
    this.energy -= length;
}
// With Object.create we can call the above function like this:
// const leo = Animal("Leo", 7);
// const snoop = Animal("Snoop", 10);
// console.log(leo);  // undefined
// whenever we use the new keyword it means object instantiation.
// now we remove Object.create and use new keyword
const leo = new Animal("Leo", 7);
const snoop = new Animal("Snoop", 10);
//console.log(leo);  // returns object as Animal { name: 'Leo', energy: 7 }
/************************************************************************************************ */
// A class is a type of special function, but instead of using the keyword function to initiate it, we use the keyword "class", and the properties is assigned inside a constructor() method.
// The class syntax has two components: class expressions and class declarations. Class declaration: to declare a class, you use the class keyword with the name of the class : ex: class Animal{...}
// The constructor method is a special method for creating and initializing an object created within a class.
// Use the keyword "class" to create a class, and always add a constructor method.
// The constructor method is called each time the class object is initialized.
// to reach inside a class use objectName.methodName  (leo.eat)
class Animal2 {
    constructor(name, energy) {
        console.log("constructor...");
        this.name = name;
        this.energy = energy;
    }
    eat(amount) {
        console.log(`${this.name} is eating`);
        this.energy += amount;
    }
    sleep(length) {
        console.log(`${this.name} is sleeping`);
        this.energy += length;
    }
    play(length) {
        console.log(`${this.name} is playing`);
        this.energy -= length;
    }
    static nextToEat(animals) {
        const sortedLeastEnergy = animals.sort((a, b) => {
            return a.energy - b.energy;
        });
        console.log(sortedLeastEnergy);
        return sortedLeastEnergy[0].name;
    }
}
//In this case, eat,sleep and play are not belong to animal object, object is to reach the all the methods of the class
const firstObj = new Animal2();

// console.log(firstObj);

//Output of the above is
// constructor...   //because whenever you create a new object, it calls it with constructor.
// Animal2 { name: undefined, energy: undefined }
const secondObj = new Animal2("second", 1);
// console.log(`constructor calling secondObj firs time`);
// console.log(secondObj);
//Output of the above is
// constructor...
// Animal2 { name: 'second', energy: 1 }
firstObj.name = "first";
firstObj.energy = 2;
// console.log(`constructor calling secondObj second time`);
// console.log(secondObj);  // Animal2 { name: 'second', energy: 1 }
// console.log(`calling first obj`);
// console.log(firstObj);  // Animal2 { name: 'first', energy: 2 }
firstObj.name = "replace";
firstObj.energy = 3;
// console.log(`calling first obj after replace and 3`);
// console.log(firstObj);  // Animal2 { name: 'replace', energy: 3 }
//firstObj.eat(5);  // replace is eating
//console.log(firstObj);   // Animal2 { name: 'replace', energy: 8 } // because when you call it firstObj.eat(5), it adds the energy(3) with given value(5) 
/************************************************************************************************ */
const leoObj = new Animal2("Leo", 7); // output is: constructor..  // because whenever you create a new object, it calls it with constructor. (leo is the instance of the Animal2 class or leo is an object of this Animal2 class)
const snoopObj = new Animal2("Snoop", 10); // output is: constructor..
//leoObj.eat(5);       // Leo is eating
// console.log(leoObj.name);   // Leo
// console.log(snoopObj.name);  // Snoop
// console.log(leoObj);    //  Animal2 { name: 'Leo', energy: 12 }
/*******************************************STATIC METHOD***************************************************** */
// Static methods are defined on the class itself, and not on the prototype/object. That means you can not call a static method by using the name of the object.
// If you want to access inside a static method, you can do it by using the class name (which is written after "static" keyword)
// function nextToEat(animals) {                                  // this is the function we added above as static
//     const sortedLeastEnergy = animals.sort((a, b) => {
//         return a.energy - b.energy;
//     });
//     return sortedLeastEnergy[0].name;
// }
const leon = new Animal2("Leon,7");
const snoopy = new Animal2("Snoopy", 10);
//console.log(nextToEat([leon, snoopy]));  // Leon,7   // I am passing an array because sort method belongs to an array

// console.log(Animal2.nextToEat([leon, snoopy]));  // Leon,7

//console.log(Animal2.eat(5));   // eat is not static method and if you want to access a non static method you need to use the name of the object
/************************************************************************************************ */
// Task: Create a class called Person which accepts the name of a person as a string, and his / her age as a number.
// The Person class should have a method called describe which returns a string with the following syntax: "name, age years old".So for example, if John is 19 years old then the function describe of his object will return "John, 19 years old".

/**********************************encapsulation*************************/

// One of the core concepts of OOP is encapsulation.
//An important part of encapsulation is that data (object properties) should not be directly accessed or modified from outside the object.
//To access or modify a property we would use a getter (access) or a setter (modify), which are specific methods we define in our class.
//Currently there is no native support for private properties in JavaScript (it is possible to mimic private properties but we’re not going to go into that). So all the properties we’ve declared can be directly accessed from outside the object.

//There are a few things to keep in mind when using super():
// 1. You can only use super() in a derived class. If you try to use it in a non-derived class (a class that doesn’t use extends) or a function, it will throw an error.
// 2 . You must call super() before accessing this in the constructor. Since super() is responsible for initializing this, attempting to access this before calling super() results in an error.
// 3. The only way to avoid calling super() is to return an object from the class constructor.
class User {
    constructor(name,age,email){
        this.name = name;
        this.age = age;
        this.email = email;
    }
    get name (){
        console.log("get name :::::");
        return this.fullName;
    }
    set name (newName){
        console.log("set name :::::");
        this.fullName = newName;
    }
}
const objUser = new User("John", 30, "test@gmail.com");
console.log(objUser.name);  // output John
objUser.name = "test" ; // this called set name method
console.log(objUser.name); // it called get name method


//------------------- Inheritance ------------------------------
//Inheritance: Classes can also inherit from other classes. The class being inherited from is called the parent, and the class inheriting from the parentis called the child. In our example, another class, let’s say Administrator, can inherit the properties and methods of the User class:
//To create a class inheritance, use the extends keyword.
//User class= Parent  and Administrator class = chil

class Administrator extends User {
    constructor(name,age,email,role){
        super(name,age,email)
        this.role = role;
    }
    get rolePermission(){
        console.log("get role ::::::");
        return this.role;
    }
    set rolePermission(newRole){
        console.log(" set role :::::::");
        this.role = newRole;
    }
}
const objAdmin = new Administrator("Sara", 25,"sara@gmail.com","Admin");
console.log(objAdmin.name);
console.log(objAdmin.rolePermission);

// hoisting
// unlike functions, and other Javascript declarations, classe declarations are not hoisted.
// That means that you must declare a class before you can use it .
