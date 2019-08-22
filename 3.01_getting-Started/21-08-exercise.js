//1. Create a variable that contains a JSON string. The properties of this JSON string should be about Joaquin Phoenix and should contain firstName, lastName, dateOFBirth, placeOfBirth, imdbRating, movies(this should be an empty array) and latestMovieTitle.

let profile = `{    
    "firstName" : "Joaquin", 
    "lastName" : "Phoenix",
    "dateOFBirth" :"28 octobre 1974",
    "placeOfBirth" : " San Juan",
    "imdbRating" : 7 ,
     "movies" :[],
    "latestMovieTitle" : "Joker"
}`;

console.log(profile);

// Convert that JSON to an object.

let info = JSON.parse(profile)


console.log(info);
console.log("**********************************");


// 3. Add a function to the object above called updateImdbRating that takes as input a number and updates the object's imdbRating.

info.updateImdbRating =function(num){
    this.imdbRating = num; 
}
console.log(info);
console.log("**********************************");


// 4. Update his IMDB rating using the function above.

info.updateImdbRating(5);
console.log(info);
console.log("**********************************");



// 5. Add a new property named lastMovie. It should be an object that contains the title of the movie and the year. 
//  {title: 'Gladiator', year: 2000} .
// let test = ' {title: 'Gladiator', year: 2000}'
info.lastMovie = {title: 'Gladiator', year: 2000} ;
console.log(info);
console.log("**********************************");



// 6. Add a function called updateLatestMovie that takes an object as an input and edits the lastMovie and the movies array.
info.updateLatestMovie = function(object){
    let t = object.title;



    if ( this.movies.length === 0){
        this.movies.push(object)
    }


    for (let i = 0; i < this.movies.length; i++) {
        if (this.movies[i].title === t) {
            return
        } else if (i == this.movies.length - 1) {
            this.movies.push(object)
        }               
    }

}


// 7. Update his lastMovie and movies using that function. Please avoid duplicates in the movie array. Use the below object to call updateLatestMovie.
// {title: 'Walk the line', year: 2005}
info.updateLatestMovie({title: 'Joker', year : '2029'})
// console.log(info);
// console.log("**********************************");

// 8. Add a property called oscarsWon with the value of 0.
info.oscarsWon = 0;
console.log(info);
console.log("**********************************");


// 9. Make a function called updateOscarsCount that updates oscarsWon by one.

info.updateOscarsCount = function (num) {
    this.oscarsWon = num;
}
console.log(info);
console.log("**********************************");

// 10. Call updateOscarsCount twice
console.log("------first--------");

 info.updateOscarsCount(2)
console.log(info);
console.log("**********************************");



 console.log("---------second------------");
 
 info.updateOscarsCount(5)
console.log(info);

console.log("**********************************");

// 11. Add a function called addMovies that will take an array of movies (please use the spread operator ...) and will add movies to the movies array.

info.addMovies = function (getmovie) {
    for (let i = 0; i < getmovie.length; i++) {
                
    }
}

// 12. Call the function three times with the below arrays. Make sure your movies array has no duplicates when you update it.
movies = [
 {title: '8 mm', year: '1999'},
 {title: 'Buffalo Soldiers', year: '2001'},
 {title: 'Quills', year: '2000'}
]

moreMovies = [
 {title: 'The Village', year: 2004},
 {title: 'Buffalo Soldiers', year: '2001'},
 {title: 'Signs', year: 2002},
 {title: 'Walk the line', year: 2005}
]

someMoreMovies = [
 {title: 'The Master', year: 2012},
 {title: 'Joker', year: 2019},
 {title: 'Inherent Vice', year: 2014},
 {title: 'Walk the line', year: 2005},
 {title: 'You Were Never Really Here', year: 2017},
 {title: 'The Immigrant', year: 2013}
]
info.addMovies(movies)
console.log(info);
console.log("**********************************");

info.addMovies(moreMovies)
console.log(info);
console.log("**********************************");

info.addMovies(someMoreMovies)
console.log(info);
console.log("**********************************");

// 13.   Add a function called calculateNumberOfMovies that will calculate how many movies he made and it will add a new property to the initial object called totalMovies.
info.totalMovies = 0;

info.calculateNumberOfMovies = function () {
    
    let movieNum = Object.keys(this.movies)
    console.log(movieNum);
    this.totalMovies = movieNum.length;
    
    
}
info.calculateNumberOfMovies(movies)
console.log(info);
console.log("**********************************");

// 14.     Everytime you call the addMovies function, which adds more movies to the object, it should update the totalMovies and it should also update the lastMovie with the latest movie based on the year of each movie.

info.updateAll = function (all) {
    let getValues = [];
    for (let i = 0; i < info.movies.length; i++) {
        // console.log(info.movies[i].year);
        getValues.push(info.movies[i].year);
        console.log(getValues);

    }
    getValues = Math.max(...getValues)
    this.lastMovie = getValues;
    console.log(getValues);
    let updateMovie;
    for (let i = 0; i < info.movies.length; i++) {
        if (info.movies[i].year ==  getValues ) {
            // console.log(info.movies[i]);
            updateMovie = (info.movies[i])
        }
    }

    console.log(updateMovie);
    this.updateLatestMovie(updateMovie)

    

}




console.log("**********************************");

// console.log(valueYear);


info.updateAll()

// console.log(info.updateAll.toString());




