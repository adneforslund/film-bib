window.onload = function() {
   
    addFilm("sistTilgjengelig",3);
    addFilm("sistLant", 16);
    addFilm("ambefalinger", 9);
}

function addFilm(where, start){

    var container = document.getElementById(where);
    addArrow(("#" + where) ,true);

    for (movie_id in movies_object){
        movie_details = movies_object[movie_id];
        var img = document.createElement("img");
        if (movie_id< (start+10)){
        if (movie_id < 1000){
            img.src= "https://nelson.uib.no/o/0/" + movie_id +".jpg";
        }
        else if (movie_id < 2000){
            img.src= "https://nelson.uib.no/o/1/" + movie_id +".jpg";
        }
        else if (movie_id < 3000){
            img.src= "https://nelson.uib.no/o/2/" + movie_id +".jpg";
        }
        }    
        var a = document.createElement("a");
        a.href = "show_movie.html?id=" + movie_id;

        a.id = "film" + movie_id;
        img.className = "filmBilde";
        img.alt = movie_details.etitle;
        if (movie_id > (start+2)){
        a.className = "gjemt";
        }
        else if (movie_id < (start)){
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