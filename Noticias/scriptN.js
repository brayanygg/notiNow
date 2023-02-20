const botonMenu = document.querySelector(".BtnMenu")
const menuDesplegable = document.querySelector(".Menu")

const firtsline = document.querySelector(".Lineaone");
const twoline = document.querySelector(".Lineatwo");
const threeline = document.querySelector(".Lineathree");

const seccionNrelevantes = document.getElementById('Noticiasinteres')

let notiR = []

botonMenu.addEventListener("click", iniciar);
//Desplegar menu...
function iniciar() {
    firtsline.classList.toggle("OnLineaone");
    twoline.classList.toggle("OnLineatwo");
    threeline.classList.toggle("OnLineathree");
    botonMenu.classList.toggle("OnBtnMenu");
    menuDesplegable.classList.toggle("Show");
}

alert('welcome to NotiNow')

class NoticiasRelevantes {
    constructor(titulo) {
        this.titulo = titulo 
    }
}

let noticiaR1 = new NoticiasRelevantes('Se filtra informacion de pentagono')
let noticiaR2 = new NoticiasRelevantes('Moscu es anexada por Ucranica')
let noticiaR3 = new NoticiasRelevantes('La Torre Eiffel se desploma')
let noticiaR4 = new NoticiasRelevantes('Chinna invade a Taiwan')
let noticiaR5 = new NoticiasRelevantes('Sacerdote es apresado por violacion')
let noticiaR6 = new NoticiasRelevantes('Atentado explosivo en Barcelona')
let noticiaR7 = new NoticiasRelevantes('Valor del Dolar se desploma')
let noticiaR8 = new NoticiasRelevantes('El Yuan se convierte en moneda Lider')
let noticiaR9 = new NoticiasRelevantes('Riesgo de impacto por asteroide')
let noticiaR10 = new NoticiasRelevantes('Robot Asesina a su Progrmador')
let noticiaR11 = new NoticiasRelevantes('Tierra entra en nueva era glaciar')
let noticiaR12 = new NoticiasRelevantes('Se encotro una ciudad en el Polo')
let noticiaR13 = new NoticiasRelevantes('Tormenta sola se acerca a la Tierra')
let noticiaR14 = new NoticiasRelevantes('Finlandia solicitó el ingreso a la OTAN')
let noticiaR15 = new NoticiasRelevantes('Rusia exige rublos para la compra gas')
let noticiaR16 = new NoticiasRelevantes(' manifestaciones por el clima en UK')
let noticiaR17 = new NoticiasRelevantes('Explosión en Sudáfrica mató a 15 personas')

notiR.push(noticiaR1, noticiaR2, noticiaR3, noticiaR4, noticiaR5, noticiaR6, noticiaR7, noticiaR8, noticiaR9, noticiaR10, noticiaR11, noticiaR12, noticiaR13, noticiaR14, noticiaR15, noticiaR16, noticiaR17 )

notiR.forEach(NoticiasRelevantes => {
   let seccionR = `

        <nav class="ArticulosRelevantes">
            <p>${NoticiasRelevantes.titulo}</p>
        </nav>
     `
        seccionNrelevantes.innerHTML += seccionR
});









