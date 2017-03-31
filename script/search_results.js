/* Her kan dere implementere en søkefunksjon. For eksempel:
*/
// skrevet av Adne Forslund/afo014
function search_for_X(soekeStreng, what) {
    for(index in movies_object){
    	var film_object = movies_object[index];
    	if(soekeStreng.toLowerCase() === film_object.otitle.toLowerCase() || soekeStreng.toLowerCase() === film_object.ntitle.toLowerCase() ){
    		console.log(film_object);
    		build_search_results(film_object);
    	}
    }
	
	
} 


/* Her kan dere implementere en display function som viser resulatetene av søket. For eksempel:
*/
// skrevet av Adne Forslund/afo014
function display_X(results_list) {
 
for (indeks in results_list) {
	var film = results_list[indeks];
// skrevet av Bjørnar Herland
	
}

}


window.onload = function() {
	query_params = get_query_string_parameters();
	search_results = movies_object;
    var results = []; 
	if (query_params.film_title) {
        film_title = document.getElementById("film_title");
		//Her kan dere for eksempel kalle en søkefunksjon som søker for tittel.
        var resultat = search_for_X(query_params.film_title, 0);

        /* console.log(resultat.otitle);
        var tittelelement = document.getElementById("film_title");
        tittelelement.innerHTML = resultat.otitle; */
    }
	
	if (query_params.actor) {
        actor = document.getElementById("actor");
		actor.innerHTML = film.actor;
        search_for_X(query_params.actor, 1);
    }
	
	if (query_params.director) {
		director = document.getElementById("director");
		director.innerHTML = query_params.director;
		search_for_X(query_params.actor, 2);
    }
	
	if (query_params.genre) {
        genre = document.getElementById("genre");
		genre.innerHTML = query_params.genre;
		search_for_X(query_params.actor, 3);
    }
	
	if (query_params.country) {
        country = document.getElementById("country");
		country.innerHTML = query_params.country;
		search_for_X(query_params.actor, 4);
    }
	display_X();
	
	//Her kan dere for eksempel kalle en (display) funksjon som viser søkeresultater 
}

// skrevet av Bjørnar Herland
function build_search_results(film_object){

}