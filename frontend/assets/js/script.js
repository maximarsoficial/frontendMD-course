//Ejecutando funciones
document.getElementById("btn-login").addEventListener("click", login);
document.getElementById("btn-register").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

//Declarando variables
const formLogin = document.querySelector(".form-login");
const formRegister = document.querySelector(".form-register");
const containerLoginRegister = document.querySelector(".container-login-register");
const backBoxLogin = document.querySelector(".back-box-login");
const backBoxRegister = document.querySelector(".back-box-register");

//FUNCIONES

function anchoPage() {

    if (window.innerWidth > 850) {
        backBoxRegister.style.display = "block";
        backBoxLogin.style.display = "block";
    } else {
        backBoxRegister.style.display = "block";
        backBoxRegister.style.opacity = "1";
        backBoxLogin.style.display = "none";
        formLogin.style.display = "block";
        containerLoginRegister.style.left = "0px";
        formRegister.style.display = "none";
    }
}

anchoPage();


function login() {
    if (window.innerWidth > 850) {
        formLogin.style.display = "block";
        containerLoginRegister.style.left = "10px";
        formRegister.style.display = "none";
        backBoxRegister.style.opacity = "1";
        backBoxLogin.style.opacity = "0";
    } else {
        formLogin.style.display = "block";
        containerLoginRegister.style.left = "0px";
        formRegister.style.display = "none";
        backBoxRegister.style.display = "block";
        backBoxLogin.style.display = "none";
    }
}

function register() {
    if (window.innerWidth > 850) {
        formRegister.style.display = "block";
        containerLoginRegister.style.left = "410px";
        formLogin.style.display = "none";
        backBoxRegister.style.opacity = "0";
        backBoxLogin.style.opacity = "1";
    } else {
        formRegister.style.display = "block";
        containerLoginRegister.style.left = "0px";
        formLogin.style.display = "none";
        backBoxRegister.style.display = "none";
        backBoxLogin.style.display = "block";
        backBoxLogin.style.opacity = "1";
    }
}

// ----------------VALIDACIONES LOGIN Y FORM--------------------------------------------------------
const form = document.getElementById("form");
const btnLogin = document.getElementById("btn-Login");
const button = document.createElement("button");
const boxForm = document.querySelectorAll('.form-control');

const regexName = /^[a-zA-Z]*$/;
const regexEmail = /^[\w]+@{1}[\w]+\.+[a-z]{2,3}$/;
const regexTel = /^\(?\d{2}\)?[\s\.-]?\d{4}[\s\.-]?\d{4}$/;
const regexContra = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const errors = {
    name: true,
    email: true,
    user: true,
    password: true,
}

// Itera el array de inputs y crea un evento que tiene una funcion para cada uno!
boxForm.forEach((box) => {
    const input = box.querySelector('input');

    input.addEventListener('input', (event) => {
        validationform(input)
    })
})

function validationform(input) {
    if (input.name === 'name') {
        if (regexName.test(input.value) && input.value.length >= 3 && input.value.length <= 20) {
            set_correct(input)
        } else {
            set_error(input, 'The field must contain at least 3-20 characters, without symbols')
        }
        if (input.value.trim() === 'Please fill in the field with your name') {
            set_error(input, "")
        }
        incompleteForm();
    }
    if (input.name === 'email') {

        if (regexEmail.test(input.value)) {
            set_correct(input)
        } else {
            set_error(input, 'Please enter your email correctly')
        }
        if (input.value.trim() === '') {
            set_error(input, "Please fill in the field with your email")
        }
        incompleteForm();
    }
    if (input.name === 'user') {
        if (regexName.test(input.value) && input.value.length >= 6 && input.value.length <= 20) {
            set_correct(input)
        } else {
            set_error(input, 'The field must contain at least 6-20 characters ')
        }
        if (input.value.trim() === '') {
            set_error(input, "Please fill in the field with your username")
        }
        incompleteForm();
    }
    if (input.name === 'password') {

        if (regexContra.test(input.value)) {
            set_correct(input)
        } else {
            set_error(input, 'The field must contain at least eight characters, at least one letter and one number')
        }
        if (input.value.trim() === '') {
            set_error(input, "Please fill in the field with your password")
        }
        incompleteForm();
    }
}

function incompleteForm() {
    if (errors.name) {
        submit_btn.setAttribute('disabled', true)
    } else {
        submit_btn.removeAttribute('disabled')
    }
    if (errors.email) {
        button.setAttribute('disabled', true)
    } else {
        button.removeAttribute('disabled')
    }
    if (errors.user) {
        submit_btn.setAttribute('disabled', true)
    } else {
        submit_btn.removeAttribute('disabled')
    }
    if (errors.password) {
        submit_btn.setAttribute('disabled', true)
    } else {
        submit_btn.removeAttribute('disabled')
    }

}

// Funciones de Errores y Validaciones
function set_error(input, msj) {
    const formCotrol = input.parentElement;
    const paragraph = formCotrol.querySelector("p");
    input.style.border = "2px solid rgb(190, 36, 9)";
    paragraph.style.display = "block";
    paragraph.innerText = msj;
    errors[input.name] = true;
}

function set_correct(input) {
    const fieldsGroup = input.parentElement;
    const paragraph = fieldsGroup.querySelector("p");
    input.style.border = "2px solid rgb(2, 184, 2)";
    paragraph.style.display = "none";
    paragraph.innerText = "";
    errors[input.name] = false;
}
// --------------------------------------------------------------------------------------