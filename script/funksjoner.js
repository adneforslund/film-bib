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
		for(i=1; i < 10; i++){
			console.log(forelder + "film" + i);
		}

	}
	else{
		console.log("venstre");
	}
}

sokeknapp.addEventListener("click", toggle);
menyknapp.addEventListener("click", toggle);
