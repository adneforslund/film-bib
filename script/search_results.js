
// variabler
var arr = [];


/* Her kan dere implementere en søkefunksjon. For eksempel:
*/
// skrevet av Adne Forslund/afo014, forbedret av Bjørnar Herland/kiy005
function search_for_X(soekeStreng, searchForWhat) {
	if(searchForWhat == "film_title"){
		for(index in movies_object){
    		var film_object = movies_object[index];
    		if(soekeStreng.toLowerCase() === film_object.otitle.toLowerCase() || soekeStreng.toLowerCase() === film_object.ntitle.toLowerCase() ){
    			build_search_results(film_object);
    		}
    	}
	}
	// skrevet av Bjørnar Herland/kiy005
	else if(searchForWhat == "actor"){
    	for(index in movies_object){
   		 	var film_object = movies_object[index];
    		folk = film_object.folk;
    		if (folk){
    			if(folk.toLowerCase().includes(soekeStreng.toLowerCase())){
    				build_search_results(film_object);
   		 		}
   			}
    	}
	}
	else if(searchForWhat == "director"){
    	for(index in movies_object){
   		 	var film_object = movies_object[index];
    		dir = film_object.dir;
    		if (dir){
    			if(dir.toLowerCase().includes(soekeStreng.toLowerCase())){
    				build_search_results(film_object);
   		 		}
   			}
    	}
	}
	else if(searchForWhat == "genre"){
    	for(index in movies_object){
   		 	var film_object = movies_object[index];
    		genre = film_object.dir;
    		if (genre){
    			if(dir.toLowerCase().includes(soekeStreng.toLowerCase())){
    				build_search_results(film_object);
   		 		}
   			}
    	}
	}
	else if(searchForWhat == "country"){
    	for(index in movies_object){
   		 	var film_object = movies_object[index];
    		country = film_object.country;
    		if (country){
    			if(country.toLowerCase().includes(soekeStreng.toLowerCase())){
    				build_search_results(film_object);
   		 		}
   			}
    	}
	}
	
} 


/* Her kan dere implementere en display function som viser resulatetene av søket. For eksempel:
*/
// skrevet av Bjørnar Herland/kiy005
function display_X() {
	var container = document.getElementById("sokeresultater");

 	if (arr.length > 0) {

 			var ul = document.createElement("ul");

		for (indeks in arr) {
			var film = arr[indeks];
			var li = document.createElement("li");
			var details = document.createElement("details");
			var summary = document.createElement("summary");
			var summaryTekst = document.createElement("h2");
			var summaryTekstinnhold = document.createTextNode(film.otitle);
			var detailsTekst = document.createElement("p");
			var link = document.createElement("a");
			var linkTekst = document.createTextNode("Les mer...");
			link.href = "show_movie.html?id=" + film.id;
			link.appendChild(linkTekst);
			var detailsTekstinnhold = document.createTextNode(film.description + " ");
			detailsTekst.appendChild(detailsTekstinnhold);
			detailsTekst.appendChild(link);
			summaryTekst.appendChild(summaryTekstinnhold);
			summary.appendChild(summaryTekst);
			details.appendChild(summary);
			details.appendChild(detailsTekst)
			li.appendChild(details);
			ul.appendChild(li);
			container.appendChild(ul);
		}
	}

	else{
		var ingenResultater = document.createElement("h3");
		var ingenResultaterTekst = document.createTextNode("Ditt søk ga desverre ingen søkeresultater");
		ingenResultater.appendChild(ingenResultaterTekst);
		container.appendChild(ingenResultater);
	}


}


window.onload = function() {
	query_params = get_query_string_parameters();
	search_results = movies_object;
    var results = []; 
	if (query_params.film_title) {
		//søker etter tittel og skriver ut hva den søkeretter i toppen av siden. 
        var resultat = search_for_X(query_params.film_title, "film_title");
        var searching_for = document.getElementById("sokerEtter");
    	searching_for.innerHTML=query_params.film_title;
    }
	
	if (query_params.actor) {
		//søker etter tittel og skriver ut hva den søkeretter i toppen av siden. 
        var resultat = search_for_X(query_params.actor, "actor");
        var searching_for = document.getElementById("sokerEtter");
    	searching_for.innerHTML=query_params.actor;
    }
	
	if (query_params.director) {
		var resultat = search_for_X(query_params.director, "director");
        var searching_for = document.getElementById("sokerEtter");
    	searching_for.innerHTML=query_params.director;
    }
	
	if (query_params.genre) {
        var resultat = search_for_X(query_params.genre, "genre");
        var searching_for = document.getElementById("sokerEtter");
    	searching_for.innerHTML=query_params.genre;
    }
	
	if (query_params.country) {
        var resultat = search_for_X(query_params.country, "country");
        var searching_for = document.getElementById("sokerEtter");
    	searching_for.innerHTML=query_params.country;
    }
	display_X();
	
	//Her kan dere for eksempel kalle en (display) funksjon som viser søkeresultater 
}

// skrevet av Bjørnar Herland
function build_search_results(film_object) {
	arr.push(film_object);
}