// variable declaration for getting the express and route module
var express = require('express');
var route = require('./routes');
var app = express();


// the body parser for the parsing of the json objects
var body_parser = require('body-parser');
app.use(body_parser.urlencoded({
    extended: true
}));
app.use(body_parser.json());

// to specify our static content is in public
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// setting the view engine as ejs
app.set('view engine','ejs');

// setting home for the site to be home
app.get('/', route.home);

// handling a post method on the home
app.post('/', route.postHome);

// give the sample json object to the user
// app.get('sample.json', function(req,res){
// 	console.log("hi how are you!");
// });

app.get('/sample.json', function(req,res){
});

// if the user is trying to access any other page rather then routed
// app.get('*', route.notFound);


// listening on the port 3000
app.listen(3000, function(){
	console.log("app has started to listen on the port 3000");
});