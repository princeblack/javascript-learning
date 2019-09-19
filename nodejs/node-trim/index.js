const {forma} = require('./formatting');
const {message} = require('./messaging')

const nameType = process.argv.slice(2).filter(x => x !== '--help'.toLowerCase())[0];
const helpType = process.argv.slice(2).filter(x => x == '--help'.toLowerCase())[0];
message(helpType);
forma(nameType);
