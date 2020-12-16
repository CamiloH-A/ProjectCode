const formulario = document.getElementById('formulario__admin');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    nombre__registrado: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    usuario__registrado: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    id__registrado: /^[a-zA-Z0-9_.+-]{1,500}$/,
    email__registrado: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    pass__registrado: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    pass2__registrado: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    birthdate__registrado: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,

}

const campos = {

    nombre__registrado: false,
    usuario__registrado: false,
    id__registrado: false,
    email__registrado: false,
    pass__registrado: false,
    pass2__registrado: false,
    birthdate__registrado: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre__registrado":
            validarCampo(expresiones.nombre__registrado, e.target, 'nombre__registrado');
            break;
        case "usuario__registrado":
            validarCampo(expresiones.usuario__registrado, e.target, 'usuario__registrado');
            break;
        case "id__registrado":
            validarCampo(expresiones.id__registrado, e.target, 'id__registrado');
            break;
        case "email__registrado":
            validarCampo(expresiones.email__registrado, e.target, 'email__registrado');
             break;
        case "pass__registrado":
            validarCampo(expresiones.pass__registrado, e.target, 'pass__registrado');
            break;
        case "pass2__registrado":
            validarCampo(expresiones.pass2__registrado, e.target, 'pass2__registrado');
            break; 
        case "birthdate__registrado":
            validarCampo(expresiones.birthdate__registrado, e.target, 'birthdate__registrado');
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

    if (campos.nombre__registrado && campos.usuario__registrado && campos.id__registrado && campos.email__registrado && campos.pass__registrado && campos.pass2__registrado && campos.birthdate__registrado) {
        formulario.reset();

        document.querySelectorAll('.contenedor__admin-correcto').forEach((icono) => {
            icono.classList.remove('contenedor__admin-correcto');
        });

        document.getElementById('formulario__error').classList.remove('formulario__error-activo');
    } else {
        document.getElementById('formulario__error').classList.add('formulario__error-activo');
    }
});