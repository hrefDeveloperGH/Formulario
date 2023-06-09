const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation")




form.addEventListener("submit", (event) =>{
    event.preventDefault();

    checkForm();

})


username.addEventListener("blur", () => {
    checkInputUsername();
})


email.addEventListener("blur", () => {
    checkInputEmail();
})

password.addEventListener("blur", () => {
    checkInputPassword();
})

passwordConfirmation.addEventListener("blur", () => {
    checkInputPasswordConfirmation();
})



function checkForm(){
    checkInputUsername();
    checkInputEmail();
    checkInputPassword();
    checkInputPasswordConfirmation();

    const formItems = form.querySelectorAll(".armazem")

    const isValid = [...formItems].every( (item) => {
        return item.className === "armazem"
    });

    if(isValid){
        alert("INSCRIÇÃO FEITA COM SUCESSO");
    }

}



function checkInputUsername(){
    const usernameValue = username.value;

    if(usernameValue === ""){
        errorInput(username, "Insira um nome para seu perfil.");
    }
    else{
        const formItem = username.parentElement;
        formItem.className = "armazem"
    }
}

function checkInputEmail(){
    const emailValue = email.value;

    if(emailValue === ""){
        errorInput(email, "insira um e-mail")}
        else{
            const formItem = email.parentElement;
            formItem.className = "armazem"
        }
}

function checkInputPassword(){
    const passwordValue = password.value;

    if(passwordValue === ""){
        errorInput(password, "Você precisa inserir uma senha")}


            else if(passwordValue.length < 8){
                errorInput(password, "A senha precisar ter no mínimo 8 caracteres")}
            
                else{
                    const formItem = password.parentElement;
                    formItem.className = "armazem"
                }
}

function checkInputPasswordConfirmation(){
    const passwordValue = password.value;
    const confirmationPasswordValue = passwordConfirmation.value;

    if(confirmationPasswordValue === ""){
        errorInput(passwordConfirmation, "Digite sua senha novamente")}


            else if(confirmationPasswordValue !== passwordValue){
                errorInput(passwordConfirmation, "Senha incorreta")}
            
                else{
                    const formItem = passwordConfirmation.parentElement;
                    formItem.className = "armazem"
                }
}


function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")
    
    textMessage.innerText = message;

    formItem.className = "armazem error"
}

form.addEventListener("submit", (event) =>{
    event.preventDefault();

    checkInputUsername();
    checkInputEmail();
    checkInputPassword();
    checkInputPasswordConfirmation();

})
