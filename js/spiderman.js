
var private_key = '63823d9c3343ef191f88b0f44c0dbe6d7cce7e4e';
var public_key = '6f769846a34acb7b0299a000d488f562';
var id = '1009610';
var ts = new Date().getTime();
//var crypto = require('crypto');
var string = ts + private_key + public_key;
var hash = md5(string);





$(function(){
	
	var $header = $('#h1');
	
	$.ajax({
		type: 'GET',
		url: "https://gateway.marvel.com/v1/public/characters/1009610?ts="+ts+"&hash="+hash+"&apikey=" + public_key,
		dataType: "json",
		data: "name=value",
		success: function(response){
			
			var results = response.data.results;
			var resultsLen = results.length;
				
			for(var i=0; i<resultsLen; i++){
				var name = results[i].name;
				var description = results[i].description;
				var image = results[i].thumbnail;
				$('.details').append(name);
				$('.details').append(description);
				$('.profile-picture').append(image);
				
			}
			
			console.log(response);
			
			
		}
	});
			
});

//$('#description').text= response.data.results[0].description

