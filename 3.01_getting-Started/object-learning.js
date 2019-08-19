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

// user
