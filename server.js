//setup: import dependent modules
var express = require('express');
var app = express();
var firebase = require('firebase');
var bodyParser = require('body-parser');


app.use(express.static(__dirname + '/public')); //set the static files location
app.use(bodyParser.urlencoded({'extended':'true'})); //parse application/x-www-form-urlencoded
app.use(bodyParser.json()); //parse application/json



app.listen('8080');
console.log('App listening on port 8080')


//configure Firebase and create an instance of the database
var config = {
	apiKey: "AIzaSyDtwD8StzSnSh27q7KlTRnXyoRNGl_VPng",
    authDomain: "prom-79c6c.firebaseapp.com",
    databaseURL: "https://prom-79c6c.firebaseio.com",
    storageBucket: "prom-79c6c.appspot.com",
};
firebase.initializeApp(config);
var db = firebase.database();
