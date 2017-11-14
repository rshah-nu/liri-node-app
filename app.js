// Import and require twitter's keys from keys.js
var myKeys = require('./keys.js');
// Import various packages used for assignment:
// Twitter for tweets
// Request for OMBD API calls
// Spotify for song data
// FS to read and write logs / file based input.
var twitter = require('twitter');
var request = require('request');
var fs = require('fs');
var spotify = require('node-spotify-api');
// Get user input and store to variable for later parsing
var userInput = process.argv;
// Evaluate user input and act based on user command, user input SHOULD be index 2 of input array, with 0 being node and 1 being path.
switch (userInput[2]){
    case "my-tweets":
        break;
    case "spotify-this-song":
        break;
    case "movie-this":
        break;
    case "do-what-it-says":
        break;
    default:
        console.log("Hi, sorry, you need to enter a valid command.");
};
