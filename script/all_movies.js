// filen er skrevet av kiy005


window.onload = function() {
    addFilm("sistTilgjengelig", 3);
    addFilm("sistLant", 16);
    addFilm("ambefalinger", 9);
}
// legger inn en rull med filmer som skal lastes ned

// skrevet av 253
function addFilm(where, start) {

    var container = document.getElementById(where);
    addArrow(("#" + where), true);

    for (movie_id in movies_object) {
        if (movie_id < (start + 30)) {
        movie_details = movies_object[movie_id];
        var img = document.createElement("img");
        
            var heltallDiv = Math.floor(movie_id / 1000);
            img.src = "https://nelson.uib.no/o/" + heltallDiv + "/" + movie_id + ".jpg";
    
        img.onerror = function() {
            this.src = "http://fillmurray.com/200/200";
        }
        var a = document.createElement("a");
        a.href = "show_movie.html?id=" + movie_id;

        a.id = where + "film" + movie_id;
        img.className = "filmBilde";
        img.alt = movie_details.etitle;
        if (movie_id > (start + 2)) {
            a.className = "gjemt";
        } else if (movie_id < (start)) {
            a.className = "gjemt";
        }
        a.appendChild(img);
        container.appendChild(a);
        }
    }

    addArrow(("#" + where), false);

}

function addArrow(selector, isLeft) {
    var img = document.createElement("img");
    if (isLeft) {
        img.src = "assets/images/Ikoner/pilvenstre.png";
        img.alt = "pil venstre";
        img.className = "pilvenstre pil";
    } else {
        img.src = "assets/images/Ikoner/pilhoyre.png";
        img.alt = "pil høyre";
        img.className = "pilhoyre pil";
    }
    img.addEventListener("click", snurr);
    document.querySelector(selector).appendChild(img);
}