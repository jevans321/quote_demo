$(document).ready(function(){

	var clickHandler = function(){

		$.get("https://api.github.com/zen", fetchApi)
	}

	$("#quote").click(function(){
		alert("button clicked!");
	})
	//"api": application programmer interface web 2.0. "provider and consumer, provider defines the api"
	// event is response from web server
	var fetchApi = function(data){
		$(".quote").text(data)
	}

	
	//$.get("https://tranquil-headland-8146.herokuapp.com/zen.json", fetchApi)

	
});