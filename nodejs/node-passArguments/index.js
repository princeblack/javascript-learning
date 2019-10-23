const {print} = require('./stars');

const numType = process.argv.slice(2).filter(x => !isNaN(x))[0];
const strType = process.argv.slice(2).filter(x => isNaN(x))[0];
print(numType,strType);