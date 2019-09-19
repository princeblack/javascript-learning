const {printMeAJoke,whatever} = require('./print');

const typeOfJoke = process.argv[2];
printMeAJoke(typeOfJoke);
whatever(typeOfJoke);