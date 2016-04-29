// Public Key
// 6f769846a34acb7b0299a000d488f562

$(function(){
var marvelAPI = 'https://gateway.marvel.com/v1/public/characters/1009610?';
$.getJSON( marvelAPI, {
    apikey: '6f769846a34acb7b0299a000d488f562'
  })
    .done(function( response ) {
      	var results = response.data.results;
      	var resultsLen = results.length;
      	//var output = '<ul>'; 
      	var name = '';
	  
	//var name = results
      	for(var i=0; i<resultsLen; i++){
        	//if(results[i].images.length > 0) {
          		name += results[i].name;
			//output += '<li><img src="' + imgPath + '"><br>'+results[i].title+'</li>';
        	//}
      	}  
      	//output += '</ul>'
      	//$('#results').append(output);
	$('#h1').append(name);
  });
   
});
