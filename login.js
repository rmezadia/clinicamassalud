//Variables para campos de registro.

var nombre = [],
    apellidos = [],
    dni = [],
    email = [],
    direccion = [],
    usuario = [],
    contraseña = [];

var botonRegistar = document.querySelector("#btnRegistrar");

//Activa el click para registrar usuarios.
botonRegistar.addEventListener('click', registrarUsuario);

//Añade funcionalidad para añadir usuarios.
function registrarUsuario(){

  var nombre = document.querySelector("#textoNom");
    apellidos = document.querySelector("#textoApell");
    dni = document.querySelector("#textoDni");
    email = document.querySelector("#textoEmail");
    direccion = document.querySelector("#textoDir");
    usuario = document.querySelector("#textoNick");
    contraseña = document.querySelector("#textoPassword");


    localStorage.setItem('nombre_usuario', JSON.stringify(nombre));
    localStorage.setItem('apellidos_usuario', JSON.stringify(nombre));
    localStorage.setItem('dni_usuario', JSON.stringify(nombre));
    localStorage.setItem('email_usuario', JSON.stringify(nombre));
    localStorage.setItem('direccion_usuario', JSON.stringify(nombre));
    localStorage.setItem('nickname_usuario', JSON.stringify(nombre));
    localStorage.setItem('password_usuario', JSON.stringify(nombre));

}





