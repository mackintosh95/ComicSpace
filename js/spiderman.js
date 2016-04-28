
//values
var private = '63823d9c3343ef191f88b0f44c0dbe6d7cce7e4e';
var public = '6f769846a34acb7b0299a000d488f562';
var id = '1009610';
var ts = new Date().getTime();
var string = ts + private + public;
var hash = CryptoJS.MD5(string);


$(function()){
	
	var $header = $('#header');
	
	$.ajax({
		type: 'GET',
		url: "http://gateway.marvel.com:80/v1/public/characters/id?ts="+ts+"&hash="+hash+"apikey=" + public,
		success: function(data){
			//console.log(url) {
				$.each(data, function(i, item){
					$header.append('' + item.data.results.name + '');
					
				})
				
			//}
		}
	})
}
