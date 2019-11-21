let user ={
    name: "John",
    age: 30,
    toString(){
        return {name: `${this.name}`, age : `${this.age}`}
    }
}

console.log(user);
console.log(user.toString());
console.log(user.age + 1);

let student ={
    name:"John",
    age:30,
    isAdmin:false,
    courses: ['Html','Css','Js'],
    wife : null
}

console.log(student);

let json = JSON.stringify(student)
console.log(json);



// the resulting json string is called a Json-encoded or serialized or stringified or marshalled object

//  please note that a JSon-encoded object has several importent differences from the object literal:
// ---strings user dounle quotes. no Singles quotes or obligatory in JSON. so 'John' becomes "John"
// --- Object property names are double-quoted also- that's obligatory so age:30 becomes "age": 30.


// JSON.stringify can be applied to primitives as well.

//  a number in JSON is just number
console.log(JSON.stringify(1));
console.log(typeof(JSON.stringify(1)));

//  a string in Json is still a string, but double-quoted 
console.log(JSON.stringify('test'));
console.log(typeof(JSON.stringify('test')));

console.log(JSON.stringify(true));
console.log(typeof(JSON.stringify(true)));

console.log(JSON.stringify([1,2,3]));
console.log(typeof(JSON.stringify([1,2,3])));


// JSOn is data-only cross language specification, so some javascript Object properties are skipped by JSON.stringify
// Namely:
// ....Function properties (methods)
// ....Symbolic propertoes.
// ....Properties that store undefined.

let user2 = {
    sayhi(){
        console.log('Hello');        
    },
    [Symbol('id')] : 123,
    something: undefined
}

console.log(JSON.stringify(user2));

// nested object are supported ans converted automatically

let meetup = {
    title : "Conference",
    room : {
        number: 23,
        participants:["John","Ann"]
    }
};

console.log(JSON.stringify(meetup));

// The important limitation : there must be no circular references:

let room = {
    number:23
};

let meetup2 = {
    title : "Conference",
    participants: ["John","Bob"]
}

meetup2.place = room; // meetup references room
room.occupiedBy = meetup2; // room references meetup2

// console.log(JSON.stringify(meetup2)); Converting circular structure to JSON


// JSON.parse
// to decode a JSON string, we need another method named JSON.parse.
// --- JSON.parse to convert json back into an Object. 

let numbers = [0,1,2,3];
numbers = JSON.stringify(numbers);
console.log(numbers);
 numbers = JSON.parse(numbers);
 console.log(numbers[1]);
 
//  for nested Objects
let user3 = '{"name":"John", "age":35, "isAdmin":false, "friends":[0,1,2,3]}';
user3 = JSON.parse(user3);
console.log(user3);
console.log(user3.friends[1]);

// --------------------------------//--------------------------//

/**
 * JSON 
 */


//  there's another format named JSON5, with allow unquoted keys, comment etc.. but this is a standalone libary, not in let specificationof the language  
 let str = '{"title":"conferance", "date":"2019-11-18T12:00:00z"}';

 let meetup3= JSON.parse(str)
 console.log(meetup3);
 
//  
// console.log(meetup3.date.getDate()); //error
// the value of meetuo3date is a stzring, not a Date object

meetup3 = JSON.parse(str,function(key,value){
    if (key == "date") {
        return new Date(value)
    }
    return value;
});

console.log(meetup3.date.getDate());

// for nested object

let schedule =` {
    "meetups": [
        {
            "title": "conference",
            "date": "2019-11-17T12:00:00z"
        },
        {
            "title": "Birthday",
            "date": "2019-11-18T12:00:00z"
        }
    ]
}`;

schedule = JSON.parse(schedule,function(key,value){
    if (key == "date") {
        return new Date(value)
    }
    return value;
});

console.log(schedule.meetups[0].date.getDate());
