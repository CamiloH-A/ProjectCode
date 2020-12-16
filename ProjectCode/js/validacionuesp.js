const formulario = document.getElementById('formulario__admin');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    nombre__esp: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    usuario__esp: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    id__esp: /^[a-zA-Z0-9_.+-]{1,500}$/,
    email__esp: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    pass__esp: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    pass2__esp: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    birthdate__esp: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,

}

const campos = {

    nombre__esp: false,
    usuario__esp: false,
    id__esp: false,
    email__esp: false,
    pass__esp: false,
    pass2__esp: false,
    birthdate__esp: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre__esp":
            validarCampo(expresiones.nombre__esp, e.target, 'nombre__esp');
            break;
        case "usuario__esp":
            validarCampo(expresiones.usuario__esp, e.target, 'usuario__esp');
            break;
        case "id__esp":
            validarCampo(expresiones.id__esp, e.target, 'id__esp');
            break;
        case "email__esp":
            validarCampo(expresiones.email__esp, e.target, 'email__esp');
             break;
        case "pass__esp":
            validarCampo(expresiones.pass__esp, e.target, 'pass__esp');
            break;
        case "pass2__esp":
            validarCampo(expresiones.pass2__esp, e.target, 'pass2__esp');
            break; 
        case "birthdate__esp":
            validarCampo(expresiones.birthdate__esp, e.target, 'birthdate__esp');
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

    if (campos.nombre__esp && campos.usuario__esp && campos.id__esp && campos.email__esp && campos.pass__esp && campos.pass2__esp && campos.birthdate__esp) {
        formulario.reset();

        document.querySelectorAll('.contenedor__admin-correcto').forEach((icono) => {
            icono.classList.remove('contenedor__admin-correcto');
        });

        document.getElementById('formulario__error').classList.remove('formulario__error-activo');
    } else {
        document.getElementById('formulario__error').classList.add('formulario__error-activo');
    }
});