

let band = {
    name : 'The National',
    amoubtOfMembers : 4,
    genre : " Roch",
    city : "Cincinnati",
    latestAlbum : "I Am Easy To Find",
    instruments : ['guitar', 'bass', 'keys', 'drums'],
    kickOutAMember : function () {
        console.log(" I kicked out somebody");
        
    }

}

console.log(band.latestAlbum);
console.log(band.instruments);
console.log(band["latestAlbum"]);
band.active = true;
console.log(band);
band.kickOutAMember()

console.log("/////////////////////////////////////////////");

let myLife = {
    name : 'Vasilis',
    nickName : 'Wasabis',
    yearOfBirth : 1988,
    myAge : 30,
    anotherYearPassed : function () {
        this.myAge++;
    }
}
console.log(myLife);


