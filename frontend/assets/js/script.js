//Ejecutando funciones
document.getElementById("btn-iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn-registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

//Declarando variables
const formularioLogin = document.querySelector(".formulario-login");
const formularioRegister = document.querySelector(".formulario-register");
const contenedorLoginRegister = document.querySelector(".contenedor-login-register");
const cajaTraseraLogin = document.querySelector(".caja-trasera-login");
const cajaTraseraRegister = document.querySelector(".caja-trasera-register");

//FUNCIONES

function anchoPage(){

    if (window.innerWidth > 850){
        cajaTraseraRegister.style.display = "block";
        cajaTraseraLogin.style.display = "block";
    }else{
        cajaTraseraRegister.style.display = "block";
        cajaTraseraRegister.style.opacity = "1";
        cajaTraseraLogin.style.display = "none";
        formularioLogin.style.display = "block";
        contenedorLoginRegister.style.left = "0px";
        formularioRegister.style.display = "none";   
    }
}

anchoPage();


    function iniciarSesion(){
        if (window.innerWidth > 850){
            formularioLogin.style.display = "block";
            contenedorLoginRegister.style.left = "10px";
            formularioRegister.style.display = "none";
            cajaTraseraRegister.style.opacity = "1";
            cajaTraseraLogin.style.opacity = "0";
        }else{
            formularioLogin.style.display = "block";
            contenedorLoginRegister.style.left = "0px";
            formularioRegister.style.display = "none";
            cajaTraseraRegister.style.display = "block";
            cajaTraseraLogin.style.display = "none";
        }
    }

    function register(){
        if (window.innerWidth > 850){
            formularioRegister.style.display = "block";
            contenedorLoginRegister.style.left = "410px";
            formularioLogin.style.display = "none";
            cajaTraseraRegister.style.opacity = "0";
            cajaTraseraLogin.style.opacity = "1";
        }else{
            formularioRegister.style.display = "block";
            contenedorLoginRegister.style.left = "0px";
            formularioLogin.style.display = "none";
            cajaTraseraRegister.style.display = "none";
            cajaTraseraLogin.style.display = "block";
            cajaTraseraLogin.style.opacity = "1";
        }
}

// ----------------VALIDACIONES LOGIN Y FORM--------------------------------------------------------
const formulario = document.getElementById("formulario");
const btnLogin = document.getElementById("btnLogin");
const button = document.createElement("button");
const box_form = document.querySelectorAll('.form_control');

const regexName = /^[a-zA-Z]*$/;
const regexEmail = /^[\w]+@{1}[\w]+\.+[a-z]{2,3}$/;
const regexTel = /^\(?\d{2}\)?[\s\.-]?\d{4}[\s\.-]?\d{4}$/;
const regexContra = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const errors = {
  nombre:true,
  email: true,
  usuario:true,
  contraseña: true,
}

// Itera el array de inputs y crea un evento que tiene una funcion para cada uno!
box_form.forEach((box) =>{
  const  input = box.querySelector('input');

  input.addEventListener('input',(event)=>{
    validationform(input)
  })
})

function validationform(input){
    if (input.name === 'nombre'){
        if (regexName.test(input.value) && input.value.length >= 3 && input.value.length <= 20 ) {
          set_correct(input)
        }else{
          set_error(input, 'El campo debe contener al menos 3-20 caracteres, sin simbolos ')
        }
        if (input.value.trim() === ''){
          set_error(input, "Por favor Complete el campo con su nombre")
        }
       incompleteForm();
      }
    if (input.name === 'email'){

        if (regexEmail.test(input.value)) {
          set_correct(input)
        }else{
          set_error(input, 'Por favor ingrese su email correctamente')
        }
        if (input.value.trim() === ''){
          set_error(input, "Por favor Complete el campo con su email")
        }
        incompleteForm();
      }
      if (input.name === 'usuario'){
        if (regexName.test(input.value) && input.value.length >= 6 && input.value.length <= 20 ) {
          set_correct(input)
        }else{
          set_error(input, 'El campo debe contener al menos 6-20 caracteres ')
        }
        if (input.value.trim() === ''){
          set_error(input, "Por favor Complete el campo con su nombre de usuario")
        }
       incompleteForm();
      }
      if (input.name === 'contraseña'){
  
        if (regexContra.test(input.value)) {
          set_correct(input)
        }else{
          set_error(input, 'El campo debe contener mínimo ocho caracteres, al menos una letra y un número')
        }
        if (input.value.trim() === ''){
          set_error(input, "Por favor Complete el campo con su contraseña")
        }
        incompleteForm();
      }
}

function incompleteForm(){
    if(errors.nombre){
        submit_btn.setAttribute('disabled', true)
      }else {
        submit_btn.removeAttribute('disabled')
      }
    if(errors.email){
        button.setAttribute('disabled', true)
    }else {
        button.removeAttribute('disabled')
    }
    if(errors.usuario){
        submit_btn.setAttribute('disabled', true)
      }else {
        submit_btn.removeAttribute('disabled')
      }
      if(errors.contaseña){
        submit_btn.setAttribute('disabled', true)
      }else {
        submit_btn.removeAttribute('disabled')
      }
    
  }

// Funciones de Errores y Validaciones
function set_error(input, msj) {
    const formCotrol = input.parentElement;
    const parrafo = formCotrol.querySelector("p");
    input.style.border = "2px solid rgb(190, 36, 9)";
    parrafo.style.display = "block";
    parrafo.innerText = msj;
    errors[input.name] = true;
  }
  function set_correct(input) {
    const grupoCampos = input.parentElement;
    const parrafo = grupoCampos.querySelector("p");
    input.style.border = "2px solid rgb(2, 184, 2)";
    parrafo.style.display = "none";
    parrafo.innerText = "";
    errors[input.name] = false;
  }
// --------------------------------------------------------------------------------------

