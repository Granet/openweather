$(document).ready(function(){

	function invia(){
    	$.ajax({
		    url: 'http://api.openweathermap.org/data/2.5/weather',
		    dataType: 'json',
		    data: {
		      	q: $('#input_citta').val(),
		      	units: "metric",
		      	lang: "it",
		      	appid: "44db6a862fba0b067b1930da0d769e98"
		    },
		    success: function (response){
		    	localStorage.setItem("lastWeather", JSON.stringify(response));
		    	$('#citta').text(response.name);
		        $('#temp').text(response.main.temp);
		        $('#descrizione').text(response.weather[0].description);
		        $('#wind').text(response.wind.speed);
		        $('#umidita').text(response.main.humidity);
		        $('#temp').append("°<small>C</small>");
	           	$('#umidita').append("<small>%</small>"); 
	           	$('#wind').append("<small>Km/h</small>");
	           	
	           	switch(response.weather[0].icon){
	           		case "11d": 
	           			$('#slide-1').attr('data-weather', 'storm');
	           			break;
	           		case "09d": 
	           			$('.slide').attr('data-weather', 'drizzle');
	           			break;
	           		case "10d": 
	           			$('.slide').attr('data-weather', 'rain');
       					break;
	           		case "01d": 
	           			$('#slide-1').attr('data-weather', 'sunny');
	           			break;
	           		
	           		case "11n": 
	           			$('#slide-1').attr('data-weather', 'storm');
	           			break;
	           		case "09n": 
	           			$('.slide').attr('data-weather', 'drizzle');
	           			location.reload();
	           			break;
	           		case "10n": 
	           			$('.slide').attr('data-weather', 'rain');
	           			('#tutto').load('.container');
       					break;
	           		case "01n": 
	           			console.log("ciao");
	           			$('#slide-1').attr('data-weather', 'sunny');
	           			('#tutto').load('.container');
	           			break;
	           	};

		    },
		});
    };

    function lel(){
    		$.ajax({
		    url: 'http://api.openweathermap.org/data/2.5/weather',
		    dataType: 'json',
		    data: {
		      	q: "London",
		      	units: "metric",
		      	lang: "it",
		      	appid: "44db6a862fba0b067b1930da0d769e98"
		    },
		    success: function (response){
		    	localStorage.setItem("lastWeather", JSON.stringify(response));
		    	$('#citta').text(response.name);
		        $('#temp').text(response.main.temp);
		        $('#descrizione').text(response.weather[0].description);
		        $('#wind').text(response.wind.speed);
		        $('#umidita').text(response.main.humidity);
		        $('#temp').append("°<small>C</small>");
	           	$('#umidita').append("<small>%</small>"); 
	           	$('#wind').append("<small>Km/h</small>");
	           	
	           	switch(response.weather[0].icon){
	           		case "11d": 
	           			$('#slide-1').attr('data-weather', 'storm');
	           			break;
	           		case "09d": 
	           			$('.slide').attr('data-weather', 'drizzle');
	           			break;
	           		case "10d": 
	           			$('.slide').attr('data-weather', 'rain');
       					break;
	           		case "01d": 
	           			$('#slide-1').attr('data-weather', 'sunny');
	           			break;
	           		
	           		case "11n": 
	           			$('#slide-1').attr('data-weather', 'storm');
	           			break;
	           		case "09n": 
	           			$('.slide').attr('data-weather', 'drizzle');
	           			location.reload();
	           			break;
	           		case "10n": 
	           			$('.slide').attr('data-weather', 'rain');
	           			('#tutto').load('.container');
       					break;
	           		case "01n": 
	           			console.log("ciao");
	           			$('#slide-1').attr('data-weather', 'sunny');
	           			('#tutto').load('.container');
	           			break;
	           	};

		    },
		});
    };

    if (localStorage.getItem("lastWeather") != "null"){
	    var response = JSON.parse(localStorage.getItem("lastWeather"));
		$('#citta').text(response.name);
		$('#temp').text(response.main.temp);
		$('#descrizione').text(response.weather[0].description);
		$('#wind').text(response.wind.speed);
		$('#umidita').text(response.main.humidity);
		$('#temp').append("°<small>C</small>");
    	$('#umidita').append("<small>%</small>");
    	$('#wind').append("<small>Km/h</small>");  

    	switch(response.weather[0].icon){
       		case "11d": 
       			$('#slide-1').attr('data-weather', 'storm');
       			break;
       		case "09d": 
       			$('.slide').attr('data-weather', 'drizzle');
       			break;
       		case "10d": 
       			$('.slide').attr('data-weather', 'rain');
					break;
       		case "01d": 
       			$('#slide-1').attr('data-weather', 'sunny');
       			break;
       		
       		case "11n": 
       			$('#slide-1').attr('data-weather', 'storm');
       			break;
       		case "09n": 
       			$('.slide').attr('data-weather', 'drizzle');
       			break;
       		case "10n": 
       			$('.slide').attr('data-weather', 'rain');
					break;
       		case "01n": 
       			console.log("ciao");
       			$('.slide').attr('data-weather', 'sunny');
       			break;
	    	
		};
    }
    else {
    	lel();    	
    }

	$('#invia').click(function(){
		invia();
	});
	$("#input_citta").keypress(function(event){
		if(event.keyCode == 13){
			invia();
		}
	});
});
