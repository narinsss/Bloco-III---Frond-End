var nome = window.document.getElementById("lname");
var email = window.document.getElementById("lemail");
var assunto = window.document.getElementById("lsubjct");
var txtNome = document.querySelector("#txtNome")
var txtEmail = document.querySelector("#txtEmail")
var txtAssunto = document.querySelector("#txtAssunto")
var nomeOk = false
var emailOk = false
var assuntoOk = false

function validarNome(){
    if(nome.value.length < 3){
        txtNome.style.display = "block"
    }else{
        txtNome.style.display = "none"
        nomeOk = true
    }
}

function validarEmail() {
    if(email.value.indexOf('@') == -1){
        txtEmail.style.display = "block"
    }else{
        txtEmail.style.display = "none"
        emailOk = true
    }
}

function validarAssunto() {
    if(assunto.value.length > 500){
        txtAssunto.style.display = "block"
    }else{
        txtAssunto.style.display = "none"
        assuntoOk = true
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert("Formulário enviado com sucesso!")
    }else{
        alert("Preenche corretamente o formulário antes de enviar...")
    }
}