const botonMenu = document.querySelector(".BtnMenu")
const menuDesplegable = document.querySelector(".Menu")

const firtsline = document.querySelector(".Lineaone");
const twoline = document.querySelector(".Lineatwo");
const threeline = document.querySelector(".Lineathree");

botonMenu.addEventListener("click", iniciar);
//Desplegar el menu...
function iniciar() {
    firtsline.classList.toggle("OnLineaone");
    twoline.classList.toggle("OnLineatwo");
    threeline.classList.toggle("OnLineathree");
    botonMenu.classList.toggle("OnBtnMenu");
    menuDesplegable.classList.toggle("Show");
}







