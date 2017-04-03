

// klassen er skrevet av Ådne Forslund/afo014

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
    title_elementNorsk.innerHTML = ("Norsk tittel: " + movie_object["ntitle"]);

    // metode for rating fra bruker xyz001, kan forandres til å hente fra flere
    var review_element = document.getElementById("ratingTall");
    console.log(review_object.rating)

    var sammenlagt = 0;
    var antall =0 ;
    var snitt = 0;
    for(ratingNokkel in review_object){
        sammenlagt += review_object[ratingNokkel].rating;
        antall++;
    }
    snitt = sammenlagt/antall;

    review_element.innerHTML = (snitt);
    
    //metode for aa hente genre paa film
    var title_elementGenre = document.getElementById("genre");
    console.log(title_elementGenre);
    title_elementGenre.innerHTML = ("Genre : " + genre_object + ".");

    // metode for a hente beskrivelse
    var title_elementBeskrivelse = document.getElementById("beskrivelse");
    console.log(title_elementBeskrivelse);
    title_elementBeskrivelse.innerHTML = movie_object["description"];
    

    // metode for regi
    var title_elementRegi = document.getElementById("regi");
    console.log(title_elementRegi);
    var dir = movie_object["dir"] + "";
    title_elementRegi.innerHTML = ("Regi: " + dir +".");

    //metode for youtube
    var iframe = document.getElementById("youtubeLink");
    var link = movie_object["youtube trailer id"] + "";
    link = "https://www.youtube.com/embed/" + link;
    iframe.setAttribute("src", link);
    
    // metode for a hente skuespillere
    var title_elementSkuespiller = document.getElementById("skuespillere");
    title_elementSkuespiller.innerHTML = movie_object["folk"];


    // metode for a få kommentarfelt
    var title_elementReview = document.getElementById("kommentarer");
    
    for (key in review_object){
        var li = document.createElement("li");
        if(typeof review_object[key].comment == "string"){
            if (review_object[key].comment !== "") {
            var tekst =document.createTextNode(review_object[key].mod_date + ", Bruker: " + review_object[key].username);
            var linjeskift =document.createElement("br");
            var tekst2 =document.createTextNode(" Vurdering: "+ review_object[key].comment);
            li.appendChild(tekst);
            li.appendChild(linjeskift);
            li.appendChild(tekst2);
            title_elementReview.appendChild(li);
            }
        }
    }



    // metode for a hente a hente stor bilde / skrevet av Bjørnar Herland/kiy005
    var filmbilde = document.getElementById("filmbilde");
    if (movie_object.id<1000) {
        filmbilde.src = filmbilde.src= "https://nelson.uib.no/o/0/" + movie_object.id +".jpg";
        legginnsmaabilder(0);
    }
    else if(movie_object.id<2000){
        filmbilde.src = filmbilde.src= "https://nelson.uib.no/o/1/" + movie_object.id +".jpg";
        legginnsmaabilder(1);
    }
    else if(movie_object.id<3000){
        filmbilde.src = filmbilde.src= "https://nelson.uib.no/o/2/" + movie_object.id +".jpg";
        legginnsmaabilder(2);
    }
    else{
        filmbilde.src = filmbilde.src= "https://nelson.uib.no/o/3/" + movie_object.id +".jpg";
        legginnsmaabilder(3);
    }

    // metode for a hente a hente små bilder skrevet av Bjørnar Herland/kiy005
    function legginnsmaabilder(tall) {
    for(i=0;i<4;i++){
        var smaabilde =  document.getElementsByClassName("underbildesmaa")[i];
        if(i==0){
            smaabilde.src = "https://nelson.uib.no/o/"+tall+"/" + movie_object.id +"b.jpg";
        }
        else if(i==1){
            smaabilde.src = "https://nelson.uib.no/o/"+tall+"/" + movie_object.id +"c.jpg";
        }
        else if(i==2){
            smaabilde.src = "https://nelson.uib.no/o/"+tall+"/" + movie_object.id +"d.jpg";
        }
        else if(i==3){
            smaabilde.src = "https://nelson.uib.no/o/"+tall+"/" + movie_object.id +"e.jpg";
        }
    }
    }

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
         console.log(right + ": " + key + "   " + subkey );
	}
    }
};
