var sokeknapp = document.querySelector("#sokeknapp");
var menyknapp = document.querySelector("#menyknapp");
function toggle(){
	if(this === sokeknapp){
		document.querySelector(".sokebar").classList.toggle("gjemt");
	}
	if(this === menyknapp){
		document.querySelector("nav").classList.toggle("gjemt");
	}
}

function snurr(){
	if(this.classList.contains("pilhoyre")){
		var forelder = this.parentNode.getAttribute("id");
		var barn = this.parentNode.children;
		var start = NaN;

		for(i=1; i<(barn.length-1); i++){
			if(barn[i].classList.contains("gjemt")==false){
				if(start != start){
				console.log(barn[i]);
				start = i;
				}
			}
		}
		barn[start].classList.toggle("gjemt");
		barn[start+3].classList.toggle("gjemt");

	}
	else{
		console.log("venstre");
	}
}

sokeknapp.addEventListener("click", toggle);
menyknapp.addEventListener("click", toggle);
