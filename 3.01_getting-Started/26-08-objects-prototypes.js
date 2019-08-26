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

const baba = animalBête('baba', 23);
const luise = animalBête('luise',8)
luise.eat()

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





