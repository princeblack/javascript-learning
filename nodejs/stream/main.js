// let fs = require('fs');
// let myStream = fs.createReadStream("data.txt","utf8");
// let chunkNumber = 1;
// let word = "double-decker";
// let wordCounter = 0;

// myStream.on("data",chunk =>{
//     let len = chunk.length;
//     console.log(`chunk Number ${chunkNumber} is ${len}`);
//     chunkNumber++

//     let arr =chunk.split(" ");
//     arr.forEach(el => {
//         if (el === word) {
//             wordCounter++
//         }
//     });
//         console.log(`i found the word ${word} ${wordCounter} times`);
//         // wordCounter = 0;
// })

// myStream.on("end", chunk =>{
//     console.log("================");
//     console.log("I AM DONE LISTENING TO SMITHS");
//     console.log("================");

// })


/////////////////////////////////
/////////////////////////////////
////////////  PIPES AND WRITES  ////////////
/////////////////////////////////
/////////////////////////////////

let fs = require("fs");

let readStream = fs.createReadStream('bigData.txt','utf8');
let writeStream = fs.createWriteStream('result.txt', 'utf8');

let test =` Welcome to the Wordnik API
Request definitions, example sentences, spelling suggestions, synonyms and antonyms (and other related words), word phrases, pronunciations, random words, words of the day, and much more. Sign up today!`;

readStream.on('data',ch =>{
    let res = ch.toLowerCase();
    writeStream.write(res + ' '+ test );
})