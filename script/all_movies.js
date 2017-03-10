window.onload = function() {
    list_element = document.getElementById("all_movies");
    for (movie_id in movies_object){
        movie_details = movies_object[movie_id];
        list_item = document.createElement("LI");

	// prepare the link
        item_link = document.createElement("A");
        item_link.href = "show_movie.html?id=" + movie_id;
		link_text = document.createTextNode(movie_details["otitle"]);
        item_link.appendChild(link_text);
	
        list_item.appendChild(item_link);
        list_element.appendChild(list_item);      
    }
}
