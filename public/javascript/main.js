// the javascript code for getting the query from the user

$(document).ready(function(){
	// send some data to the server
	$('#drop-down').change(function(){
		var selectedOption = $('#drop-down option:selected');
		var obj = { "match_text": selectedOption.val()};

		$.ajax({
			// this is the url of elastic beanstalk when we have initialized it
			url: 'http://localhost:3000',
			data: JSON.stringify(obj),
			contentType: 'application/json',
			type: 'POST',
			sucess: function(data){
				console.log("I got sucess!!");
				// alert('hi');
				// console.log(JSON.stringify(data));

			},
			error: function(xhr, status, error){
				console.log("Error has occured" + error.message);
			}
		});
	});


	// var obj = {"title":"harshit","message":"hello from the ajax"};
	

	

	// // dynamically uploading the maps in the html page
	// var map_script = document.createElement('script');
	// map_script.type = "text/javascript";
	// map_script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDSlwG2J0i6AmO82M3e6VQYQKB4d4NS7ek&callback=initMap";
	// document.getElementsByTagName('head')[0].appendChild(map_script);
});


