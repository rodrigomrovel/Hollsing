/* ----- FUNCIONALIDADES DAS TELAS DE LOGIN E CADASTRO ----- */

/* ---- BOTÕES DE TROCA ENTRE TELAS ---- */

var formLogin = document.getElementById("formularioLogin")
var formCadastro = document.getElementById("formularioCadastro")
var btnColor = document.querySelector(".corBotoes")

document.querySelector("#botao-login").addEventListener("click", () => {
    formLogin.style.left = "25px"
    formCadastro.style.left = "450px"
    btnColor.style.left = "0px"
})

document.querySelector("#botao-cadastro").addEventListener("click", () => {
    formLogin.style.left = "-450px"
    formCadastro.style.left = "25px"
    btnColor.style.left = "117px"
})


/* ---- MOSTRAR E OCULTAR SENHAS ---- */

function mostrarSenha() {
    var inputSenha = document.getElementById("senha-box")
    var btnMostrarSenha = document.getElementById("btn-senha")

    if (inputSenha.type === "password") {
        inputSenha.setAttribute("type", "text")
        btnMostrarSenha.classList.replace("fa-eye", "fa-eye-slash")
    } else {
        inputSenha.setAttribute("type", "password")
        btnMostrarSenha.classList.replace("fa-eye-slash", "fa-eye")
    }
}

function mostrarSenhaCadastro() {
    var inputSenha = document.getElementById("senhaCadastro-box")
    var btnMostrarSenha = document.getElementById("btn-senhaCadastro")

    if (inputSenha.type === "password") {
        inputSenha.setAttribute("type", "text")
        btnMostrarSenha.classList.replace("fa-eye", "fa-eye-slash")
    } else {
        inputSenha.setAttribute("type", "password")
        btnMostrarSenha.classList.replace("fa-eye-slash", "fa-eye")
    }
}

function ConfirmarSenha() {
    var inputSenha = document.getElementById("confirmarSenha-box")
    var btnMostrarSenha = document.getElementById("btn-confirmarSenha")

    if (inputSenha.type === "password") {
        inputSenha.setAttribute("type", "text")
        btnMostrarSenha.classList.replace("fa-eye", "fa-eye-slash")
    } else {
        inputSenha.setAttribute("type", "password")
        btnMostrarSenha.classList.replace("fa-eye-slash", "fa-eye")
    }
}