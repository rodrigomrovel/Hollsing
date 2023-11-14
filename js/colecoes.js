/* ----- FUNCIONALIDADES ----- */


function instagram(){
    window.location.href='https://www.instagram.com/hollsignstudios/'
}

/* ---- MENU ---- */

function menuShow() {

    let menu = document.querySelector(".menu-mobile")
    let body = document.querySelector("body")

    if (menu.classList.contains("open")) {
        menu.classList.remove("open")
        body.style.position = "static";
    } else {
        menu.classList.add("open")
        body.style.position = "fixed";
    }

}


/* ---- ÍCONE MENU ---- */

let iconeMenu = document.querySelector("#icone-menu");

iconeMenu.addEventListener("click", () => {
    iconeMenu.classList.toggle("ativo");
    menuShow();
});

/* ------------------------------------------------------------------------------------------ */


const filterItem = document.querySelector(".itens");
const filterImagem = document.querySelectorAll(".imagem");

window.onload = () => { //once window loaded
    filterItem.onclick = (selectedItem) => {
        if (selectedItem.target.classList.contains("item")) {
            filterItem.querySelector(".ativo").classList.remove("ativo")
            selectedItem.target.classList.add("ativo")
            let filterName = selectedItem.target.getAttribute("data-name")
            filterImagem.forEach((imagem) => {
                let filterImagens = imagem.getAttribute("data-name")
                if ((filterImagens == filterName) || filterName == "Tudo") {
                    imagem.classList.remove("esconder")
                    imagem.classList.add("mostrar")
                } else {
                    imagem.classList.add("esconder")
                    imagem.classList.remove("mostrar")
                }
            })
        }
    }
    for (let index = 0; index < filterImagem.length; index++) {
        filterImagem[index].setAttribute("onclick", "preview(this)")
        
    }
}

const previewBox = document.querySelector(".preview-box"),
previewImagem = previewBox.querySelector("img"),
categoryName = previewBox.querySelector(".titulo p"),
closeIcon = previewBox.querySelector(".icone"),
sombra = document.querySelector(".sombra");

function preview(elements) {
    document.querySelector("body").style.overflow = "hidden"
    let selectedPreviewImg = elements.querySelector("img").src;
    let selectedImgCategory = elements.getAttribute("data-name")
    categoryName.textContent = selectedImgCategory;
    previewImagem.src = selectedPreviewImg;
    previewBox.classList.add("mostrar")
    sombra.classList.add("mostrar")
    closeIcon.onclick = () => {
        previewBox.classList.remove("mostrar")
        sombra.classList.remove("mostrar")
        document.querySelector("body").style.overflow = "scroll"
    }
}