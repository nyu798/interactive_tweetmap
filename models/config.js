var twit = require('twitter');
var elasticsearch = require('elasticsearch');

var twitter = new twit({
	consumer_key: 'i4ZbyZo0bNDqvtX2MeuQpQuuM',
	consumer_secret: 'sYyxYoJHhhJKrd7MQvwLcP5BQOuc8A36FmzrjWJFw9QAyy1Hbb',
	access_token_key: '4826489261-xWs8iYr4S7EIGzQBDNS2XkLCr9ztvgd997p2YiG',
	access_token_secret: 'XwFHijujBv6MP9a7s8vxRfNsz26M9MNzC866kQmSFcVev'
});

var elastic_client = new elasticsearch.Client({
  host: 'localhost:9200',
  // log: 'trace'
});

module.exports.twitter = twitter;
module.exports.elastic_client = elastic_client;