
const btnLogin = document.querySelector('.btn')
const wrappper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
    wrappper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrappper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrappper.classList.add('active-popud');
});

iconClose.addEventListener('click', ()=> {
    wrappper.classList.remove('active-popud');
});


function login(){
    var user, password

    user = document.getElementById("email").value;
    password = document.getElementById("pass").value;

    if(user == "cliente@email.com" && password == 1234){
        btnLogin.addEventListener('click', ()=> {
            wrappper.classList.remove('active-popud');
        });
    }else{
        alert("datos incorrectos")
    }
} 
