var path = require('path');
var search_doc = require('../models/searchDocument');
// var config = require('./models/config');

// var twitter = config.twitter;
// var elastic_client = config.elastic_client;

function homePage(req, res){
	
	// req.on('data',function(data){
	// 	console.log('got some data');
	// });

	res.render('home');
	// res.send("Hello from the server to harshit");
}
function handlingPost(req,res){
	console.log("the data recieved is:"+JSON.stringify(req.body));
	var text = req.body.match_text;
	
	var hits = search_doc.search_document("twitter","tweet",text);

	// console.log("the data in the hits is:"+ JSON.stringify(hits));


	res.json({"success" : "Updated Successfully", "status" : 200});
}

function pageNotFound(req, res){
	res.send('<h2> this page is not available on this site</h2>')
}

// function getJson(req,res){
// 	res.send("<h1> I will give sample json object </h1>")
// 	// res.send(path.join(__dirname,'public/SampleJson', 'sample.json'));
// }

module.exports.home = homePage;
module.exports.notFound = pageNotFound;
// module.exports.getJson = getJson;
module.exports.postHome = handlingPost;