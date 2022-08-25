var nome = window.document.getElementById("lname");
var email = window.document.getElementById("lemail");
var assunto = window.document.getElementById("lsubjct");
var txtNome = document.querySelector("#txtNome")
let txtEmail = document.querySelector("#txtEmail")

function validarNome(){
    if(nome.value.length < 3){
        txtNome.innerHTML = "Nome inválido!"
        txtNome.style.color = "#ec2300";
    }else{
        txtNome.innerHTML = "Nome válido!"
        txtNome.style.color = "#cf3";
    }
}

function validarEmail() {
    if(email.value.indexOf('@') == -1){
        txtEmail.innerHTML = "E-mail inválido!"
        txtEmail.style.color = "#ec2300"
    }else{
        txtEmail.innerHTML = "E-mail válido!"
        txtEmail.style.color = "#cf3";
    }
}