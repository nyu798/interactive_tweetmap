var config = require('./config');
var twitter = config.twitter;
// var elasticsearch_client = config.elastic_client;
var elasticsearch_client_aws = config.elasticsearch_client_aws;

function stream_twitter(obj_index, obj_type){
	console.log('the stream of twitter has started');
	twitter.stream('statuses/sample',function(stream){
		var bulkObj = [];
		var count = 1;
	stream.on('data',function(data){
		if(data.place !== null && data.place !== undefined && data.lang == 'en')
		{
			var obj;
			if(count % 200 == 0)
			{
				console.log('50 tweets has sent to elasticsearch');
				// console.log('the value of bulk is:'+JSON.stringify(bulkObj));
				elasticsearch_client_aws.bulk({
					body: bulkObj
				},function(error, response){
					if(error)
					{
						console.log("Some error has occured while creating");
					}
					else
					{
						console.log("all is well");
					}
				});
				// the local elasticsearch putting the data 
				// elasticsearch_client.bulk({
				// 	body: bulkObj
				// },function(error, response){
				// 	if(error)
				// 	{
				// 		console.log("Some error has occured while creating");
				// 	}
				// 	else
				// 	{
				// 		console.log("all is well");
				// 	}
				// });
				stream.destroy();
				//count++;
			}
			else
			{
				console.log("the value of the count is:"+ count);
				var lon = data.place.bounding_box.coordinates[0][0][0];
				var lat = data.place.bounding_box.coordinates[0][0][1];
				if((lat >= -90 && lat <= 90) && (lon >= -180 && lon<= 180)){
					// console.log("the value of the lat is:"+lat);
					// console.log("the value of lon is:"+lon);
					
					var id = data.id;
					// console.log('the value of the log is:'+id);
					var prefix = {index: {_index: obj_index, _type: obj_type,_id:id}};
					// console.log("the value for the prefix is:"+JSON.stringify(prefix));
					obj = {"message" : data.text, "location" : {"lat":lat,"lon":lon}};
					bulkObj.push(prefix);
					bulkObj.push(obj);
				}
				count++;
			}
		}
	});
	stream.on('error',function(error){
		throw error;
	});
});
	console.log('the stream of twitter has stoped');
}

module.exports.twitter_stream = stream_twitter;