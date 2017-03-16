window.onload = function() {
    var container = document.getElementById("sistTilgjengelig");
    for (movie_id in movies_object){
        movie_details = movies_object[movie_id];
        var img = document.createElement("img");
        img.src= "http://fillmurray.com/200/200";
        var a = document.createElement("a");
        a.href = "show_movie.html?id=" + movie_id;

        a.id = "film" + movie_id;
        a.className = "gjemt";
        a.appendChild(img);
        container.appendChild(a);
    // prepare the link

              
    }
}