

// let band = {
//     name : 'The National',
//     amoubtOfMembers : 4,
//     genre : " Roch",
//     city : "Cincinnati",
//     latestAlbum : "I Am Easy To Find",
//     instruments : ['guitar', 'bass', 'keys', 'drums'],
//     kickOutAMember : function () {
//         console.log(" I kicked out somebody");
        
//     }

// }

// console.log(band.latestAlbum);
// console.log(band.instruments);
// console.log(band["latestAlbum"]);
// band.active = true;
// console.log(band);
// band.kickOutAMember()

// console.log("/////////////////////////////////////////////");

// let myLife = {
//     name : 'Vasilis',
//     nickName : 'Wasabis',
//     yearOfBirth : 1988,
//     myAge : 30,
//     anotherYearPassed : function () {
//         this.myAge++;
//     }
// }
// console.log(myLife);

const  numbers = [
    1,[2],[3, [4]],5
]

console.log(numbers[1][0]);

let res = JSON.parse(JSON.stringify(numbers))

console.log(res);


let origArray = [1,2,3];
let copyArray = origArray;

console.log('Array' , origArray);
console.log('Array Copy', copyArray);

// ///////////////////
console.log("************************************************************");


let origArray2 = [1,2,3];
let copyArray2 = [...origArray2];
 origArray2[0]= "I have change , i promise"
console.log('Array' , origArray2);
console.log('Array Copy', copyArray2);

console.log("************************************************************");

let nestedArray = [1, [2], 3];
let arrayCopy = [...nestedArray];

arrayCopy[0]= 'hello';
arrayCopy[1][0]= 'there';

console.log('Array',nestedArray);
console.log('Array Copy',arrayCopy);

console.log("************************************************************");

let nestedArray2 = [1, [2], 3];
let arrayCopy2 = JSON.parse(JSON.stringify(nestedArray2));

arrayCopy2[0]= 'hello';
arrayCopy2[1][0]= 'there';

console.log('Array',nestedArray2);
console.log('Array Copy',arrayCopy2);

console.log(Math.pow(Math.sqrt(2) + Math.sqrt(2),2));


