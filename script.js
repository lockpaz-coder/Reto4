document.addEventListener("DOMContentLoaded", () => {
    /* ======================================
    SELECCIÓN DE ELEMENTOS DEL DOM
====================================== */

const images = document.querySelectorAll(".gallery-item");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");

const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

/* ========================================
    VARIABLE DE CONTROL
======================================== */

let currentIndex = 0;

/* ========================================
    lISTADO DE ANIMACIONES
======================================== */

const animations = [
    "zoom-animation",
    "rotate-animation",
    "slide-animation",
    "fade-animation"
];

/* ========================================
    MOSTRAR IMAGEN MODAL
======================================== */
const modalTitle = document.getElementById("modalTitle");

function showImage(index) {
    
    console.log("Abriendo imagen:", index);

    currentIndex = index;

    modal.style.display = "flex";

    modalImage.src = images[index].src;

    modalTitle.textContent = images[index].dataset.title;

    void modalImage.offsetWidth;


    // Eliminar posibles animaciones previas
    modalImage.className = "modal-content";

    // Asignar animación distinta
    const animation = animations[index % animations.length];

    modalImage.classList.add(animation);
}

/* ========================================
    EVENTO CLICK EN IMAGEN
======================================== */

images.forEach((image,index) => {

    image.addEventListener("click", ()=>{

        showImage(index);

    });

});

/* ========================================
    IMAGEN SIGUIENTE
======================================== */

function nextImage(){

    currentIndex++;

    if(currentIndex >= images.length){
        currentIndex = 0;
    }

    showImage(currentIndex);

}

/* ========================================
    IMAGEN ANTERIOR
======================================== */

function prevImage(){
    
    currentIndex--;

    if(currentIndex < 0){
        currentIndex = images.length - 1;
    }

    showImage(currentIndex);
}

/* ========================================
    EVENTOS BOTONES
======================================== */

nextBtn.addEventListener("click", (e)=>{
    e.stopPropagation();
    nextImage();
});

prevBtn.addEventListener("click", (e)=>{
    e.stopPropagation();
    prevImage();
});

/* ========================================
    CERRAR MODAL
======================================== */

closeBtn.addEventListener("click", ()=>{

    modal.style.display = "none";
});

/* ========================================
    CERRAR AL HACER CLICK FUERA
======================================== */

modal.addEventListener("click",(e)=>{

    if(e.target === modal){

        modal.style.display = "none";
    }

});

/* ========================================
    NAVEGACIÓN CON TECLADO
======================================== */

document.addEventListener("keydown",(e)=>{

    if(modal.style.display === "flex"){

        if(e.key === "ArrowRight"){
            nextImage();
        }

        if(e.key === "ArrowLeft"){

            prevImage();
        }

        if(e.key === "Escape"){
            modal.style.display = "none";
        }

    }

})
});