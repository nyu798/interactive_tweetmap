var config = require('./config');
var twitter = config.twitter;


function stream_twitter(){
	console.log('the stream of twitter has started');
	twitter.stream('statuses/sample',function(stream){

		stream.on('data',function(event){
			if(event.place !== null && event.place !== undefined)
			{
				console.log(event.place.bounding_box.coordinates[0][0]);
			}
		});

		stream.on('error',function(error){
			throw error;
		});
	});
	console.log('the stream of twitter has stoped');
}

module.exports.stream_twitter = stream_twitter;