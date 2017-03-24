/* Her kan dere implementere en søkefunksjon. For eksempel:
*/
// skrevet av Adne Forslund/afo014
function search_for_X(soekeStreng) {
    for(index in movies_object){
    	var film = movies_object[index];
    	if(soekeStreng === film.otitle || soekeStreng === film.ntitle ){
    		return film;
    		console.log(film);
    	}
    	 
    }
	
	
} 


/* Her kan dere implementere en display function som viser resulatetene av søket. For eksempel:
*/
// skrevet av Adne Forslund/afo014
function display_X(results_list) {
 
for (indeks in results_list) {
	var film = results_list[indeks];
    
}
}


window.onload = function() {
	query_params = get_query_string_parameters();
	search_results = movies_object;
    var results = []; 
	if (query_params.film_title) {
        film_title = document.getElementById("film_title");
		//Her kan dere for eksempel kalle en søkefunksjon som søker for tittel.
        var resultat = search_for_X(query_params.film_title);
        console.log(resultat.otitle);
        var tittelelement = document.getElementById("film_title");
        tittelelement.innerHTML = resultat.otitle;
    }
	
	if (query_params.actor) {
        actor = document.getElementById("actor");
		actor.innerHTML = film.actor;
        search_for_X(query_params.actor);
    }
	
	if (query_params.director) {
		director = document.getElementById("director");
		director.innerHTML = query_params.director;
    }
	
	if (query_params.genre) {
        genre = document.getElementById("genre");
		genre.innerHTML = query_params.genre;
    }
	
	if (query_params.country) {
        country = document.getElementById("country");
		country.innerHTML = query_params.country;
    }
	display_X();
	
	//Her kan dere for eksempel kalle en (display) funksjon som viser søkeresultater 
}