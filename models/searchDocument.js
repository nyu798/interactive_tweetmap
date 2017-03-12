var q = require('q');
var config = require('./config');
var elastic_client = config.elastic_client;

function search_document(obj_index, obj_type, match_string){
  // initialize the Q object for making the promise
  var defered = q.defer(); 
  // make the query object first
  var query_obj = {
    "query":{
      "match": match_string
    }
  };
	console.log("starting the search in the elastic_client");
  elastic_client.search({
  		index: obj_index,
  		type: obj_type,
  		body: {
    		query: {
      			match: {
        			message: match_string
      			}
    		}
  		}
	}).then(function (resp) {
    	var hits = resp.hits.hits;
    	console.log(JSON.stringify(hits));
	}, function (err) {
    	console.trace(err.message);
	});
}

module.exports.search_document = search_document;