const http = require("https");

const app_id = "315b975c"; // insert your APP Id
const app_key = "cf9196cff03dd571059354b27282ab45"; // insert your APP Key
const wordId = "happy";
const fields = "definitions";
const strictMatch = "false";

const options = {
  host: 'od-api.oxforddictionaries.com',
  port: '443',
  path: '/api/v2/entries/en-gb/' + wordId + '?fields=' + fields + '&strictMatch=' + strictMatch,
  method: "GET",
  headers: {
    'app_id': app_id,
    'app_key': app_key
  }
};

http.get(options, (resp) => {
  let body = '';
  resp.on('data', (d) => {
    body += d;
  });
  resp.on('end', () => {    
    let parsed = JSON.parse(body);
    printData(parsed);
  });
});

printData = async(data)=>{
  try {
    let res =  await data;
    console.log(res.results[0]);
  } catch (error) {
    console.log(error);
    
  }
}
printData();