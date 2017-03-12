// twitter instance
var twit = require('twitter');

// the initialization for the amazon aws
var elasticsearch = require('elasticsearch');
var http_aws_es = require('http-aws-es');


// // aws elasticsearch instance
// var elasticsearch = require('aws-es');
// elasticsearch local instance 
//var elasticsearch = require('elasticsearch');

// credentials for the twitter 
var twitter = new twit({
	consumer_key: '	####################',
	consumer_secret: '######################################',
	access_token_key: '	###################################',
	access_token_secret: '#####################################'
});

//credentials for the aws elasticsearch
var elasticsearch_client_aws = elasticsearch.Client( { 
  hosts: 'search-my-first-tweet-map-goizzcdxue2ghq3pauuiuxzfz4.us-west-2.es.amazonaws.com',
  connectionClass: http_aws_es,
  log: 'trace',
  amazonES: {
    region: 'us-west-2',
    accessKey: 'AKIAJ7QHI4VKSGGFML2Q',
    secretKey: '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'
  }
});

// //local elasticsearch instance 
// var elastic_client = new elasticsearch.Client({
//   host: 'localhost:9200',
//    log: 'trace'
// });

module.exports.twitter = twitter;
// module.exports.elastic_client = elastic_client;
module.exports.elasticsearch_client_aws = elasticsearch_client_aws;
// module.exports.elasticsearch_client_aws = elasticsearch_client_aws;