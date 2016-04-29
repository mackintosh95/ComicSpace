<script src="js/md5.min.js"></script>
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
		url: "'https://gateway.marvel.com/v1/public/characters/1009610?ts="+ts+"&hash="+hash+"apikey=" + public_key,
		dataType: "json",
		data: "name=value",
		success: function(response){
			//$.each(response, function(i, item){
				var results = response.data.results;
				var resultsLen = results.length;
				var name = '';
				var desc = '';
				
				for(var i=0; i<resultsLen; i++){
					name += '' + results[i].name;
				
				}
			$header.append(name);
			
			}
		})
			
})
