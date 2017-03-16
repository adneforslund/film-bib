var sokeknapp = document.querySelector("#sokeknapp")
var menyknapp = document.querySelector("#menyknapp")

function toggle(){
	if(this === sokeknapp){
		document.querySelector(".sokebar").classList.toggle("gjemt");
	}
	if(this === menyknapp){
<<<<<<< HEAD
		console.log("Y U NO WORK")
=======
>>>>>>> 4cacddc596acef441b28d36076fd76d7f2dc96fe
		document.querySelector("nav").classList.toggle("gjemt");
	}
}

sokeknapp.addEventListener("click", toggle);
menyknapp.addEventListener("click", toggle);
