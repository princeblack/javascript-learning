let json = `
{
	"results": [
		{
			"name": "Luke Skywalker",
			"height": "172",
			"mass": "77",
			"hair_color": "blond",
			"skin_color": "fair",
			"eye_color": "blue",
			"birth_year": "19BBY",
			"gender": "male",
			"homeworld": "https://swapi.co/api/planets/1/"
		},
		{
			"name": "C-3PO",
			"height": "167",
			"mass": "75",
			"hair_color": "n/a",
			"skin_color": "gold",
			"eye_color": "yellow",
			"birth_year": "112BBY",
			"gender": "n/a",
			"homeworld": "https://swapi.co/api/planets/1/"
		},
		{
			"name": "R2-D2",
			"height": "96",
			"mass": "32",
			"hair_color": "n/a",
			"skin_color": "white, blue",
			"eye_color": "red",
			"birth_year": "33BBY",
			"gender": "n/a",
			"homeworld": "https://swapi.co/api/planets/8/"
		},
		{
			"name": "Darth Vader",
			"height": "202",
			"mass": "136",
			"hair_color": "none",
			"skin_color": "white",
			"eye_color": "yellow",
			"birth_year": "41.9BBY",
			"gender": "male",
			"homeworld": "https://swapi.co/api/planets/1/"
		},
		{
			"name": "Leia Organa",
			"height": "150",
			"mass": "49",
			"hair_color": "brown",
			"skin_color": "light",
			"eye_color": "brown",
			"birth_year": "19BBY",
			"gender": "female",
			"homeworld": "https://swapi.co/api/planets/2/"
		},
		{
			"name": "Owen Lars",
			"height": "178",
			"mass": "120",
			"hair_color": "brown, grey",
			"skin_color": "light",
			"eye_color": "blue",
			"birth_year": "52BBY",
			"gender": "male",
			"homeworld": "https://swapi.co/api/planets/1/"
		},
		{
			"name": "Beru Whitesun lars",
			"height": "165",
			"mass": "75",
			"hair_color": "brown",
			"skin_color": "light",
			"eye_color": "blue",
			"birth_year": "47BBY",
			"gender": "female",
			"homeworld": "https://swapi.co/api/planets/1/"
		},
		{
			"name": "R5-D4",
			"height": "97",
			"mass": "32",
			"hair_color": "n/a",
			"skin_color": "white, red",
			"eye_color": "red",
			"birth_year": "unknown",
			"gender": "n/a",
			"homeworld": "https://swapi.co/api/planets/1/"
		},
		{
			"name": "Biggs Darklighter",
			"height": "183",
			"mass": "84",
			"hair_color": "black",
			"skin_color": "light",
			"eye_color": "brown",
			"birth_year": "24BBY",
			"gender": "male",
			"homeworld": "https://swapi.co/api/planets/1/"
		},
		{
			"name": "Obi-Wan Kenobi",
			"height": "182",
			"mass": "77",
			"hair_color": "auburn, white",
			"skin_color": "fair",
			"eye_color": "blue-gray",
			"birth_year": "57BBY",
			"gender": "male",
			"homeworld": "https://swapi.co/api/planets/20/"
        },
        {
            "name": "Anakin Skywalker", 
            "height": "188", 
            "mass": "84", 
            "hair_color": "blond", 
            "skin_color": "fair", 
            "eye_color": "blue", 
            "birth_year": "41.9BBY", 
            "gender": "male", 
            "homeworld": "https://swapi.co/api/planets/1/"
        }, 
        {
            "name": "Wilhuff Tarkin", 
            "height": "180", 
            "mass": "unknown", 
            "hair_color": "auburn, grey", 
            "skin_color": "fair", 
            "eye_color": "blue", 
            "birth_year": "64BBY", 
            "gender": "male", 
            "homeworld": "https://swapi.co/api/planets/21/"
        }, 
        {
            "name": "Chewbacca", 
            "height": "228", 
            "mass": "112", 
            "hair_color": "brown", 
            "skin_color": "unknown", 
            "eye_color": "blue", 
            "birth_year": "200BBY", 
            "gender": "male", 
            "homeworld": "https://swapi.co/api/planets/14/"
        }, 
        {
            "name": "Han Solo", 
            "height": "180", 
            "mass": "80", 
            "hair_color": "brown", 
            "skin_color": "fair", 
            "eye_color": "brown", 
            "birth_year": "29BBY", 
            "gender": "male", 
            "homeworld": "https://swapi.co/api/planets/22/"
        }, 
        {
            "name": "Greedo", 
            "height": "173", 
            "mass": "74", 
            "hair_color": "n/a", 
            "skin_color": "green", 
            "eye_color": "black", 
            "birth_year": "44BBY", 
            "gender": "male", 
            "homeworld": "https://swapi.co/api/planets/23/"
        }, 
        {
            "name": "Jabba Desilijic Tiure", 
            "height": "175", 
            "mass": "1,358", 
            "hair_color": "n/a", 
            "skin_color": "green-tan, brown", 
            "eye_color": "orange", 
            "birth_year": "600BBY", 
            "gender": "hermaphrodite", 
            "homeworld": "https://swapi.co/api/planets/24/"
        }, 
        {
            "name": "Wedge Antilles", 
            "height": "170", 
            "mass": "77", 
            "hair_color": "brown", 
            "skin_color": "fair", 
            "eye_color": "hazel", 
            "birth_year": "21BBY", 
            "gender": "male", 
            "homeworld": "https://swapi.co/api/planets/22/"
        }, 
        {
            "name": "Jek Tono Porkins", 
            "height": "180", 
            "mass": "110", 
            "hair_color": "brown", 
            "skin_color": "fair", 
            "eye_color": "blue", 
            "birth_year": "unknown", 
            "gender": "male", 
            "homeworld": "https://swapi.co/api/planets/26/"
        }, 
        {
            "name": "Yoda", 
            "height": "66", 
            "mass": "17", 
            "hair_color": "white", 
            "skin_color": "green", 
            "eye_color": "brown", 
            "birth_year": "896BBY", 
            "gender": "male", 
            "homeworld": "https://swapi.co/api/planets/28/"
        }, 
        {
            "name": "Palpatine", 
            "height": "170", 
            "mass": "75", 
            "hair_color": "grey", 
            "skin_color": "pale", 
            "eye_color": "yellow", 
            "birth_year": "82BBY", 
            "gender": "male", 
            "homeworld": "https://swapi.co/api/planets/8/"
        }
	]
}`;

// Convert the above JSON string into an array

let data = JSON.parse(json);

// Write a function that takes the above object as input and prints out three arrays
data.updateToArray = function (array) {
    return [array];
}
data.updateToArray()

// based on the gender of each character. The available genders are male, female, n/a, hermaphrodite.
// getCharactersByGender(dataset)
// ['Obi-Wan Kenobi',  'Biggs Darklighter', 'Owen Lars', 'Darth Vader']
// ['R5-D4', 'R2-D2', 'C-3PO']
// ['Leia Organa', 'R2-D2', 'Beru Whitesun lars']
// ['Jabba Desilijic Tiure']

//Write a function that takes the dataset as input and it returns the number of humans and the number of robots there are there.
// howMany(dataset)
// Returns: Currently in the database we have ... humans and ... robots.


// Write a function that takes two arguments as input. One is a name of a character and the other one is the object we created above (i call it dataset). The function should print out a sentence like the following.
// Obi-Wan Kenobi was born on 57BBY and his height is 182cm.
// Beru Whitesun lars was born on 47BBY and her height is 165cm. 
// If the given name doesnt exist please return a message to the user saying that you couldn't find any information.
// If the name belongs to a robot you should return a message to the user saying 'Robots server is down. Please try later.'
// info('Obi-Wan Kenobi', dataset)
// info('Biggs Darklighter', dataset)
// info('Jar Jar', dataset)ç

// BONUS: make the getCharactersByGender dynamic. Assume that you don't know the available genders.
// Collapse



