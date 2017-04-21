var sokeknapp = document.querySelector("#sokeknapp");
var menyknapp = document.querySelector("#menyknapp");

function toggle() {
    if (this === sokeknapp) {
        document.querySelector(".sokebar").classList.toggle("gjemt");
    }
    if (this === menyknapp) {
        document.querySelector("nav").classList.toggle("gjemt");
    }
}

function snurr() {

    var forelder = this.parentNode.getAttribute("id");
    var barn = this.parentNode.children;
    var start = NaN;

    if (this.classList.contains("pilhoyre")) {

        for (i = 1; i < (barn.length - 1); i++) {
            if (barn[i].classList.contains("gjemt") == false) {
                if (start != start) {
                    start = i;
                }
            }
        }
        barn[start].classList.toggle("gjemt");
        barn[start + 3].classList.toggle("gjemt");

    } else {

        for (i = 1; i < (barn.length - 1); i++) {
            if (barn[i].classList.contains("gjemt") == false) {
                if (start != start) {
                    start = i;
                }
            }
        }
        if (start > 2) {
            barn[start + 2].classList.toggle("gjemt");
            barn[start - 1].classList.toggle("gjemt");
        }
    }
}

sokeknapp.addEventListener("click", toggle);
menyknapp.addEventListener("click", toggle);