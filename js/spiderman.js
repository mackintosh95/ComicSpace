
var private_key = '63823d9c3343ef191f88b0f44c0dbe6d7cce7e4e';
var public_key = '6f769846a34acb7b0299a000d488f562';
var id = '1009610';
var ts = new Date().getTime();
var string = ts + private + public;
var hash = CryptoJS.MD5(string);



$(function()){
	
	var $header = $('#h1');
	
	$.ajax({
		type: 'GET',
		url: "'https://gateway.marvel.com/v1/public/characters/1009610?ts="+ts+"&hash="+hash+"apikey=" + public_key,
		success: function(data){
			//console.log(url) {
      var results = date.data.results;
      var resultsLen = results.length;
      var output = ''; 
      
      for(var i=0; i<resultsLen; i++){
        //if(results[i].images.length > 0) {
          //var imgPath = results[i].images[0].path + '/standard_xlarge.' + results[i].images[0].extension;
          output += '' +results[i].name;
        }
      } 
      $header.append(output);
  });
				
			//}
		}
	)
}
