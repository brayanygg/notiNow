const botonMenu = document.querySelector(".btnmenu")
const bDesplegable = document.querySelector(".herramientas1")

const seccionNoticiasV = document.getElementById('noticiasVarias')

let noticias = []
let noticiasVarias

class Noticia {
  constructor(titulo, foto) {
    this.titulo = titulo
    this.foto = foto
  }
}

let noticia1 = new Noticia('Se desata guerra entre rusia y ucrania', './imgs/varias1.jpg')
let noticia2 = new Noticia('Las torres gemelas caen', './imgs/varias2.jpg')
let noticia3 = new Noticia('Gobiernos son controlados por los illuminatis', './imgs/varias3.jpg')
let noticia4 = new Noticia('Chica gamer vende sus fluidos', './imgs/varias4.jpg')
let noticia5 = new Noticia('Avistamiento de ovni en suiza', './imgs/varias5.jpg')
let noticia6 = new Noticia('Tsunami en las costas de Bolivia', './imgs/varias6.jpg')
let noticia7 = new Noticia('Hallan red de pedofilia en el Vaticano', './imgs/varias7.jpg')
let noticia8 = new Noticia('Cae el muro de Berlin', './imgs/varias8.jpeg')

noticias.push(noticia1,noticia2,noticia3,noticia4,noticia5,noticia6,noticia7,noticia8,)

function iniciar() {

  botonMenu.addEventListener("click", () => {
  bDesplegable.classList.toggle("show");
  });

  noticias.forEach((Noticia) => {
    noticiasVarias = `
    <div class="noticiaV">
        <img src=${Noticia.foto} alt="${Noticia.titulo}" class="zoom">
        <a href="">
            <p>${Noticia.titulo}</p>
        </a>
    </div>
    <hr>
    `
    seccionNoticiasV.innerHTML += noticiasVarias
  })
}
window.addEventListener('load', iniciar())