let carrusel = [
    {
        src: "./imagenes/img1.jpg",
        titulo: "img",
        descripcion: "img1"
    },
    {
        src: "./imagenes/img2.jpg",
        titulo: "img",
        descripcion: "img2"
    },
    {
        src: "./imagenes/img3.jpg",
        titulo: "img",
        descripcion: "img3"
    },
    {
        src: "./imagenes/img4.jpg",
        titulo: "img",
        descripcion: "img4"
    },
    {
        src: "./imagenes/img5.jpg",
        titulo: "img",
        descripcion: "img5"
    },
];

let FotoActual = 0;

function createSlides() {
    const container = document.getElementById('carrusel');
    carrusel.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'img' + (index === 0 ? ' active' : '');
        div.innerHTML = `<img src="${item.src}" alt="${item.descripcion}">`;
        container.appendChild(div);
    });
}

function showSlide(index) {
    const slides = document.querySelectorAll('.img');
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function prevSlide() {
    FotoActual = (FotoActual > 0) ? FotoActual - 1 : carrusel.length - 1;
    showSlide(FotoActual);
}

function nextSlide() {
    FotoActual = (FotoActual < carrusel.length - 1) ? FotoActual + 1 : 0;
    showSlide(FotoActual);
}

document.addEventListener('DOMContentLoaded', () => {
    createSlides();
    showSlide(FotoActual);
});
