
// Import and require various API keys from keys.js
var myKeys = require('./keys.js');
// Import various packages used for assignment:
// Twitter for tweets
var twitter = require('twitter');
// Initialize Twitter
var client = new twitter(myKeys.twitterKeys);
// Request for OMBD API calls
var request = require('request');
// FS to read and write logs / file based input.
var fs = require('fs');
// Spotify for song data
var spotify = require('node-spotify-api');
// Initialize Spotify
var spotifyClient = new spotify(myKeys.spotifyKeys);
// Get user input and store to variable for later parsing
var userInput = process.argv;
// Stores user argument after command
var userArg = ''
// Concats user input if it is multiple lines
function concatName(){
    if (userInput.length < 4){
        console.log("Your input did not include the necessary arguments!");
        return false;
    }
    else if (userInput.length == 4){
        userArg = userInput[3];
        return true;
    }
    else {
        userArg = userInput.splice(3).join("+");
        console.log(userArg);
        return true;
    };
};
// Evaluate user input and act based on user command, user input SHOULD be index 2 of input array, with 0 being node and 1 being path.
switch (userInput[2]){
    case "my-tweets":
        getTweets();
        break;
    case "spotify-this-song":
        if (concatName()){
            getSpotify();
        };
        break;
    case "movie-this":
        if (concatName()){
            getMovie()
        };
        break;
    case "do-what-it-says":
        readUserFile();
        break;
    default:
        console.log("Hi, sorry, you need to enter a valid command.");
};
// Function which retrieves last 20 tweets
function getTweets(){
    client.get('statuses/user_timeline', {screen_name: 'rshah_bc'}, function(error, tweets, response){
        // console.log(error);
        console.log(tweets);
        // console.log(response);
    }); 
};
// Function which calls Spotify API
function getSpotify(){
    spotifyClient.search({ type: 'track', query: userArg }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
      console.log(JSON.stringify(data, null, 2)); 
      });
};
// Function which calls OMDB database
function getMovie(){
    request('http://www.omdbapi.com/?t=' + userArg + '&apikey=trilogy', function (error, response, body) {
        // console.log('error:', error); // Print the error if one occurred
        // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
      });
};
// Function which gets user input from random file and passes it onto switch statement for parsing
function readUserFile(){
    fs.readFile('./random.txt', 'utf8', function(err, data){
        if (err){
            console.log(err);
        }
        else {
            console.log(data);
        };
    });
};

