function panic(message) {
    // window.history.back();
    alert(message);
}

function add_row(table, left, right) {
    new_row = document.createElement("TR");
    left_cell = document.createElement("TD");
    left_cell.appendChild(left);
    new_row.appendChild(left_cell);
    
    right_cell = document.createElement("TD");
    right_cell.appendChild(right);
    new_row.appendChild(right_cell);
    
    table.appendChild(new_row);
}

window.onload = function() {
    query_params = get_query_string_parameters();
    if (!query_params.id) {
        panic("No id given");
        return;
    }
    
    // get the movie_object from the "database" movies_object
    movie_object = movies_object[query_params.id];
    if (!movie_object) {
	panic("Could not retrieve movie_object!");
	return;
    }
    
    // get the genre info (if it exists)
    genre_object = genres_object[query_params.id];
    // get the review info (if it exists)
    review_object = reviews_object[query_params.id];
    
    
    // render page
    var title_element = document.getElementById("filmTittel");
    // title_element.appendChild(document.createTextNode(movie_object["otitle"]));    
    console.log(title_element);
    title_element.innerHTML = movie_object["otitle"];
    
    // metode for norsk tittel
    var title_elementNorsk = document.getElementById("norskTittel");
    console.log(title_elementNorsk);
    title_elementNorsk.innerHTML = ("Norsk tittel: " + movie_object["ntitle"])
    
    //metode for aa hente genre paa film
    var title_elementGenre = document.getElementById("genre");
    console.log(title_elementGenre);
    title_elementGenre.innerHTML = ("Genre : " + genre_object);

    // metode for a hente beskrivelse
    var title_elementBeskrivelse = document.getElementById("beskrivelse");
    console.log(title_elementBeskrivelse);
    title_elementBeskrivelse.innerHTML = movie_object["description"];

    //metode for youtube
    var title_elementYouTube = document.getElementById("youtubeFilm");
    title_elementYouTube.innerHTML = movie_object["youtube trailer id"]

    // metode for a hente skuespillere


    // metode for a hente a hente bilder



    
    // add a "debug-table" on the bottom showing all elements from movie_object
    stats_table = document.getElementById("movie_stat_table");
    for (key in movie_object) {
        left = document.createTextNode(key);
        right = document.createTextNode(movie_object[key]);
        add_row(stats_table, left, right);
    }
    
    // add a "debug-table" on the bottom showing all genre info
    genre_table = document.getElementById("genre_stat_table");
    for (var i in genre_object) {
		left = document.createTextNode(i);
		right = document.createTextNode(genre_object[i]);
		add_row(genre_table, left, right);
    }

    // review object debug-table
    review_table = document.getElementById("review_stat_table");
    for (key in review_object) {
	left = document.createTextNode(key);
	right = document.createTextNode(review_object[key]);
	add_row(review_table, left, right);
	for (subkey in review_object[key]) {
	    left = document.createTextNode(" -> " + subkey);
	    right = document.createTextNode(review_object[key][subkey]);
	    add_row(review_table, left, right);
	}
    }
};
