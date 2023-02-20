const seccionArt = document.getElementById('categorias__art')

let noticiaArt = []

class CategoriasArt {
    constructor(foto, titulo, texto) {
        this.foto = foto
        this.titulo = titulo
        this.texto = texto
    }

}

let art1 = new CategoriasArt('./imgs/categoria1.jpg', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, sit! ', '   Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, eum.Cum assumenda numquam natus. Nisi laudantium natus,a dolorum ratione vero deleniti laborum eos?  ')
let art2 = new CategoriasArt('./imgs/categoria1.jpg', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, sit! ', '   Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, eum.Cum assumenda numquam natus. Nisi laudantium natus,a dolorum ratione vero deleniti laborum eos?  ')
let art3 = new CategoriasArt('./imgs/categoria1.jpg', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, sit! ', '   Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, eum.Cum assumenda numquam natus. Nisi laudantium natus,a dolorum ratione vero deleniti laborum eos?  ')
let art4 = new CategoriasArt('./imgs/categoria1.jpg', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, sit! ', '   Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, eum.Cum assumenda numquam natus. Nisi laudantium natus,a dolorum ratione vero deleniti laborum eos?  ')
let art5 = new CategoriasArt('./imgs/categoria1.jpg', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, sit! ', '   Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, eum.Cum assumenda numquam natus. Nisi laudantium natus,a dolorum ratione vero deleniti laborum eos?  ')
let art6 = new CategoriasArt('./imgs/categoria1.jpg', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, sit! ', '   Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, eum.Cum assumenda numquam natus. Nisi laudantium natus,a dolorum ratione vero deleniti laborum eos?  ')
let art7 = new CategoriasArt('./imgs/categoria1.jpg', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, sit! ', '   Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, eum.Cum assumenda numquam natus. Nisi laudantium natus,a dolorum ratione vero deleniti laborum eos?  ')
let art8 = new CategoriasArt('./imgs/categoria1.jpg', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, sit! ', '   Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, eum.Cum assumenda numquam natus. Nisi laudantium natus,a dolorum ratione vero deleniti laborum eos?  ')
let art9 = new CategoriasArt('./imgs/categoria1.jpg', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, sit! ', '   Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, eum.Cum assumenda numquam natus. Nisi laudantium natus,a dolorum ratione vero deleniti laborum eos?  ')
let art10 = new CategoriasArt('./imgs/categoria1.jpg', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, sit! ', '   Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, eum.Cum assumenda numquam natus. Nisi laudantium natus,a dolorum ratione vero deleniti laborum eos?  ')
let art11 = new CategoriasArt('./imgs/categoria1.jpg', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, sit! ', '   Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, eum.Cum assumenda numquam natus. Nisi laudantium natus,a dolorum ratione vero deleniti laborum eos?  ')
let art12 = new CategoriasArt('./imgs/categoria1.jpg', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, sit! ', '   Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, eum.Cum assumenda numquam natus. Nisi laudantium natus,a dolorum ratione vero deleniti laborum eos?  ')

noticiaArt.push(art1, art2, art3, art4, art5, art6, art7, art8, art9, art10, art11, art12)

noticiaArt.forEach(CategoriasArt => {
  
    let  containerArt = `
    <div class="Noticia">
    <div class="interno__contenido-C">
        <figure class="img__categorias"><img src=${CategoriasArt.foto} alt=""> </figure>
        <h4 class="titulo__articulos-C"> ${CategoriasArt.titulo}
        </h4>
        <p class="texto__articulo-C"> ${CategoriasArt.texto}</p>
    </div>
</div>
    
  `

        seccionArt.innerHTML += containerArt
});