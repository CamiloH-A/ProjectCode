const formulario = document.getElementById('formulario__admin');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    nombre__admin: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    usuario__admin: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    id__admin: /^[a-zA-Z0-9_.+-]{1,500}$/,
    email__admin: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    pass__admin: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    pass2__admin: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    birthdate__admin: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,

}

const campos = {

    nombre__admin: false,
    usuario__admin: false,
    id__admin: false,
    email__admin: false,
    pass__admin: false,
    pass2__admin: false,
    birthdate__admin: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre__admin":
            validarCampo(expresiones.nombre__admin, e.target, 'nombre__admin');
            break;
        case "usuario__admin":
            validarCampo(expresiones.usuario__admin, e.target, 'usuario__admin');
            break;
        case "id__admin":
            validarCampo(expresiones.id__admin, e.target, 'id__admin');
            break;
        case "email__admin":
            validarCampo(expresiones.email__admin, e.target, 'email__admin');
             break;
        case "pass__admin":
            validarCampo(expresiones.pass__admin, e.target, 'pass__admin');
            break;
        case "pass2__admin":
            validarCampo(expresiones.pass2__admin, e.target, 'pass2__admin');
            break; 
        case "birthdate__admin":
            validarCampo(expresiones.birthdate__admin, e.target, 'birthdate__admin');
            break; 
    }
}

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`contenedor__admin`).classList.remove('contenedor__admin-incorrecto');
        document.getElementById(`contenedor__admin`).classList.add('contenedor__admin-correcto');
        document.querySelector(`contenedor__admin i`).classList.remove('fa-times-circle');
        document.querySelector(`contenedor__admin i`).classList.add('fa-check-circle');
        campos[campo] = true;
    } else {
        document.getElementById(`contenedor__admin`).classList.add('contenedor__admin-incorrecto');
        document.getElementById(`contenedor__admin`).classList.remove('contenedor__admin-correcto');
        document.querySelector(`contenedor__admin i`).classList.remove('fa-check-circle');
        document.querySelector(`contenedor__admin i`).classList.add('fa-times-circle');
        campos[campo] = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('BtnSubmitAdmin', (e) => {
    e.preventDefault();

    if (campos.nombre__admin && campos.usuario__admin && campos.id__admin && campos.email__admin && campos.pass__admin && campos.pass2__admin && campos.birthdate__admin) {
        formulario.reset();

        document.querySelectorAll('.contenedor__admin-correcto').forEach((icono) => {
            icono.classList.remove('contenedor__admin-correcto');
        });

        document.getElementById('formulario__error').classList.remove('formulario__error-activo');
    } else {
        document.getElementById('formulario__error').classList.add('formulario__error-activo');
    }
});