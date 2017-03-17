var sokeknapp = document.querySelector("#sokeknapp")
var menyknapp = document.querySelector("#menyknapp")

function toggle(){
	if(this === sokeknapp){
		document.querySelector(".sokebar").classList.toggle("gjemt");
	}
	if(this === menyknapp){

		document.querySelector("nav").classList.toggle("gjemt");
	}
}

sokeknapp.addEventListener("click", toggle);
menyknapp.addEventListener("click", toggle);

