var path = require('path');
var search_doc = require('../models/searchDocument');
var stream_twitter = require('../models/streamTwitter');
var Q = require('q');
// var config = require('./models/config');

// var twitter = config.twitter;
// var elastic_client = config.elastic_client;

function homePage(req, res){
	// put some tweets on the elasticsearch
	stream_twitter.twitter_stream("twitter", "tweet");
	
	res.render('home');
}
function handlingPost(req,res){
	var text = req.param('match_text');
	console.log("text that i got from the get request"+text);
	Q(search_doc.search_document("twitter","tweet",text)).then(function(data){
		console.log("the data is:"+ JSON.stringify(data));
		res.send(data);
	});
}

function pageNotFound(req, res){
	res.send('<h2> this page is not available on this site</h2>')
}

module.exports.home = homePage;
module.exports.notFound = pageNotFound;
module.exports.postHome = handlingPost;