window.onload = function() {
   
    addFilm("sistTilgjengelig");
    addFilm("sistLant");
    addFilm("ambefalinger");
}

function addFilm(where){

    var container = document.getElementById(where);
    addArrow(("#" + where) ,true);

    for (movie_id in movies_object){
        movie_details = movies_object[movie_id];
        var img = document.createElement("img");
        img.src= "http://fillmurray.com/200/200";
        var a = document.createElement("a");
        a.href = "show_movie.html?id=" + movie_id;

        a.id = "film" + movie_id;
        img.className = "filmBilde";
        img.alt = movie_details.etitle;
        if (movie_id > 3){
        a.className = "gjemt";
        }
        a.appendChild(img);
        container.appendChild(a);       

    }

    addArrow(("#" + where) ,false);

}

function addArrow(selector, isLeft){
    var img = document.createElement("img");
    if(isLeft){
        img.src="assets/images/Ikoner/pilvenstre.png";
        img.alt="pil venstre";
        img.className="pil";
    }
    else{
        img.src="assets/images/Ikoner/pilhoyre.png";
        img.alt="pil høyre";
        img.className="pil";
    }
    document.querySelector(selector).appendChild(img);

}