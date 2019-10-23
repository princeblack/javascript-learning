const axios = require("axios");

const app_id = "315b975c"; // insert your APP Id
const app_key = "cf9196cff03dd571059354b27282ab45"; // insert your APP Key
const wordId = process.argv[2]
const fields = "definitions";
const strictMatch = "false";
const url = 'https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/' + wordId + '?fields=' + fields + '&strictMatch=' + strictMatch;


const getData = async () => {
    try {
        let response = await axios.get(url, { headers: { 'app_id': app_id, 'app_key': app_key } })
            .then(response => {
                printDefinitions(response.data)
            })
    } catch (error) {
        console.log('error ' + error);
    }
}

printDefinitions = (data) => {

    let getDefinitions = data.results[0].lexicalEntries[0].entries[0].senses;
    let getSubsensesDef = data.results[0].lexicalEntries[0].entries[0].senses[0].subsenses;
    // Variable that get definitions data in the for loop
    let definitions = " ";
    // Variable that get subsenses definitions data in the for loop
    let subsenses_definitions = "";

    for (let i = 0; i < getDefinitions.length && i < getSubsensesDef.length; i++) {
        // get definitions data
        definitions += getDefinitions[i].definitions + " ";
        //   get subsenses definitions data
        subsenses_definitions += getSubsensesDef[i].definitions + " ";
    }

    // word category
    console.log(`${data.id} is :
     ${data.results[0].lexicalEntries[0].lexicalCategory.text} `);

    //  word language
    console.log(`Language : 
     ${data.results[0].language}`);

    //  word definitions
    console.log(`definitions : 
    ${definitions}`);

    // word Subsenses definitions
    console.log(`Subsenses definitions : 
    ${subsenses_definitions}`);
}
getData()
