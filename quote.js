$(document).ready(function(){
	//alert("hello world");
	var quote = "qwerty!"
	//"api": application programmer interface web 2.0. "provider and consumer, provider defines the api"
	var fetchApi = function(data){
		alert(quote)
		$(".quote").text(data)
	}

	$.get("https://api.github.com/zen", fetchApi)
	//$.get("https://tranquil-headland-8146.herokuapp.com/zen.json", fetchApi)

	
});