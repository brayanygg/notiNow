const botonMenu = document.querySelector(".btnmenu")
const bDesplegable = document.querySelector(".herramientas1")

class noticia {
  constructor(titulo, articulo, foto) {
    this.titulo = titulo
    this.articulo = articulo
    this.foto = foto
  }

}
function iniciar() {

  botonMenu.addEventListener("click", () => {
  bDesplegable.classList.toggle("show");
  });
}
window.addEventListener('load', iniciar())