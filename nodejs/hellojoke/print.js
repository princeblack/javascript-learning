var giveMeAJoke = require('give-me-a-joke');


module.exports.printMeAJoke = (type)=>{
    console.log(`I will print a ${type} joke`);

    if (type == 'dad') {
        giveMeAJoke.getRandomDadJoke (function(joke) {
            console.log(joke);
        });
    }else if (type == 'chuck') {
        giveMeAJoke.getRandomCNJoke (function(joke) {
            console.log(joke);
        });
    }else{
          console.log(joke);         
    }
}
module.exports.whatever = (here)=>{
    console.log(`sasasasasasa ${here} lilili`);
    
}