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
    iconeMenu.classList.toggle("active");
    menuShow();
});

/* ------------------------------------------------------------------------- */


/* ---- CARROSSEL ---- */

/* --- NAVEGAÇÃO AUTOMÁTICA --- */

var radio = document.querySelector(".botao-manual")
var contador = 1

document.getElementById("radio1").checked = true

setInterval(() => {
    proximaImagem()
}, 8000)

function proximaImagem() {
    contador++

    if (contador > 3) {
        contador = 1
    }

    document.getElementById("radio" + contador).checked = true
}


/* --- NAVEGAÇÃO MANUAL --- */

document.addEventListener("DOMContentLoaded", function () {
    var carrossel = document.querySelector(".carrossel-conteudo");
    var container = document.querySelector(".carrossel");
    var startX, endX;

    container.addEventListener("touchstart", function (event) {
        startX = event.touches[0].clientX;
    });

    container.addEventListener("touchend", function (event) {
        endX = event.changedTouches[0].clientX;
        var diffX = startX - endX;

        if (diffX > 40) {
            mostrarProximaImagem();
        } else if (diffX < -40) {
            mostrarImagemAnterior();
        }
    });

    function mostrarProximaImagem() {
        var radios = document.querySelectorAll('input[name="botao-radio"]');
        for (var i = 0; i < radios.length; i++) {
            if (i !== 0 && i !== 1) {
                i = 0
                radios[i].checked = true;
                return
            }

            if (radios[i].checked) {
                radios[i].checked = false;
                if (i < radios.length - 1) {
                    radios[i + 1].checked = true;
                    return;
                }
            }
        }
    }

    function mostrarImagemAnterior() {
        var radios = document.querySelectorAll('input[name="botao-radio"]');
        for (var i = 0; i < radios.length; i++) {
            if (i !== 0 && i !== 1) {
                i = 0
                radios[i].checked = true;
                return
            }

            if (radios[i].checked) {
                radios[i].checked = false;
                if (i > 0) {
                    radios[i - 1].checked = true;
                    return;
                }
            }
        }
    }
});