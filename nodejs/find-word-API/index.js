let fs = require("fs");
// let found = process.argv[2];
let [found,path] = process.argv.slice(2);
let counter = 0;
let readingCounter = 1;
let arr = '';
let myStream = fs.createReadStream(path, "utf8");

myStream.on("data", chunk => {
    arr = chunk.toLowerCase().split(found)
    counter += arr.length - 1
    console.log(`Reading chunk ${readingCounter++}`);
})
myStream.on("end", chunk => {
    console.log("================");
    console.log("================");
    console.log("End of data");
    console.log(`Number of chunk : ${readingCounter - 1}`);
    console.log(`Found '${found}' ${counter} times`);

})