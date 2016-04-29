// Public Key
// 6f769846a34acb7b0299a000d488f562

var private_key = '63823d9c3343ef191f88b0f44c0dbe6d7cce7e4e';
var public_key = '6f769846a34acb7b0299a000d488f562';
var id = '1009610';
var ts = new Date().getTime();
var string = ts + private_key + public_key;
var hash = CryptoJS.MD5(string);

$(function(){
var marvelAPI = "http://gateway.marvel.com:80/v1/public/characters/id?ts="+ts+"&hash="+hash+"apikey="+public_key;
//$.getJSON( marvelAPI, {
    //apikey: '6f769846a34acb7b0299a000d488f562'
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
