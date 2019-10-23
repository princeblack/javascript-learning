//path
// const path = require("path");
// const basename = path.basename(
//   "/Users/wasabis/DCI/materials/js/nodejs/io/index.js"
// );

// const dirname = path.dirname(
//   "/Users/wasabis/DCI/materials/js/nodejs/io/index.js"
// );

// const aPath = path.join("wasabis", "DCI", "index.js");
// const parsedPAth = path.parse(
//   "/Users/wasabis/DCI/materials/js/nodejs/io/index.js"
// );
// console.log(`Basename :`, basename);
// console.log(`Dirname :`, dirname);
// console.log(`New path :`, aPath);
// console.log(`Parsed path:`, parsedPAth);

//fs
const fs = require("fs");
// // console.log(fs);
// const startingTime = new Date().getTime();

// console.log("---------------------------------");
// console.log("I am about to read a file asynchronously");
// fs.readFile("./data.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log("I am reading the file from async");
//   console.log("I run async", new Date().getTime() - startingTime);
//   console.log(data);
// });
// console.log("I am done async");
// console.log("---------------------------------");

// console.log("I am about to read a file synchronously");
// const data = fs.readFileSync("./data.txt", "utf8");
// console.log("I run sync", new Date().getTime() - startingTime);
// console.log(data);
// console.log("I am done synced");
// console.log("---------------------------------");

// const data = `Graceless
// I'm trying, but I'm graceless
// I don't have the sunny side to face this
// I am invisible and weightless
// You can't imagine how I hate this
// Graceless`;

// fs.writeFile("./data.txt", data, { flag: "a" }, err => {
//   if (err) throw err;
//   console.log("File has been updated...");
// });

// FS with JSON
// Let's get all the names from the json file and print them out
let ourNames = ["Sam", "Maher", "A Flo", "The other Flo", "Bleda"];

fs.readFile("./data.json", "utf8", (err, data) => {
  if (err) throw err;

  const dataObj = JSON.parse(data);
  console.log(dataObj);
  dataObj.names.forEach(e => {
    console.log(e);
  });
  console.log("");
  const res = dataObj.names.concat(ourNames);
  dataObj.names = res;
  const resJson = JSON.stringify(dataObj);
  fs.writeFile("./data.json", resJson, err => {
    if (err) throw err;
    console.log("File has been updated");
  });
});
