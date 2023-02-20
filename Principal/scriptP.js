const slider = document.querySelector("#section__news");
const btnLeft = document.querySelector("#btn-letf");
const btnRight = document.querySelector("#btn-right");
const seccionNacional = document.getElementById('noticiasVarias')

let noticias = []
let sliderSection = document.querySelectorAll(".news__now");
let sliderSectionLast = sliderSection[sliderSection.length - 1];

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next() {
    let sliderSectionFirst = document.querySelectorAll(".news__now")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function () {
        slider.style.transition = "none"
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}

function Prev() {
    let sliderSection = document.querySelectorAll(".news__now");
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function () {
        slider.style.transition = "none"
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}

btnRight.addEventListener('click', function () {
    Next();
});

btnLeft.addEventListener('click', function () {
    Prev();
});

setInterval(function () {
    Next()
}, 20000);


class NoticiaC {
    constructor(foto, titulo) {
        this.foto = foto
        this.titulo = titulo
    }
}

let noticia1 = new NoticiaC('./img/varias1.jpg', 'Cae el muro de Berlin.')
let noticia2 = new NoticiaC('./img/varias2.jpg', 'Halla red de pedofilia en el Vaticano.')
let noticia3 = new NoticiaC('./img/varias3.jpg', 'Tsunami en las costas de Bolivia.')
let noticia4 = new NoticiaC('./img/varias4.jpg', 'Avistamiento de ovni en suiza.')
let noticia5 = new NoticiaC('./img/varias5.jpg', 'chica gamer vende sus fluidos.')
let noticia6 = new NoticiaC('./img/varias6.jpg', 'Gobiernos son controlados por los illuminatis.')
let noticia7 = new NoticiaC('./img/varias7.jpg', 'Las torres gemelas CAEN.')
let noticia8 = new NoticiaC('./img/varias8.jpeg', 'Se desata guerra entre rusia y ucrania.')
let noticia9 = new NoticiaC('./img/categoria1.jpg', 'lo suponia')


noticias.push(noticia1, noticia2, noticia3, noticia4, noticia5, noticia6, noticia7, noticia8, noticia9)

noticias.forEach(NoticiaC => {
    let noticiasN = `
    
        <div class="noticiaV">
                    <img src=${NoticiaC.foto} alt="" class="zoom">
                <a href="">
                    <p>${NoticiaC.titulo}</p>
                </a>
            </div>
        <hr>
     `
     seccionNacional.innerHTML +=  noticiasN 

});
