var btnAbrirPopup = document.getElementById('btn__login'),
    btnAbrirPopupR = document.getElementById('btn__r'),
    overlay = document.getElementById('overlay__login'),
    overlay = document.getElementById('overlay__register'),
    popup = document.getElementById('popup'),
    popup2 = document.getElementById('popup2'),
    btn__cerrar__popup = document.getElementById('btn__cerrar__popup'),
    btn__submit__login = document.getElementById('btn__submit__login'),
    btn__submit__admin = document.getElementById('btn__submit__admin'),
    btn__submit__ureg = document.getElementById('btn__submit__ureg'),
    btn__submit__uesp = document.getElementById('btn__submit__uesp'),
    btn__forgot__pass = document.getElementById('forgot__pass'),
    overlay__pass = document.getElementById('overlay__forgot__pass'),
    popup__pass = document.getElementById('popup__pass'),
    btn__aceptar = document.getElementById('btn__aceptar__pass');

btnAbrirPopup.addEventListener('click', function() {
    overlay__login.classList.add('active');
    popup.classList.add('active');
});

btnAbrirPopupR.addEventListener('click', function() {
    overlay__register.classList.add('active');
    popup2.classList.add('active');
});

btn__cerrar__popup.addEventListener('click', function() {
    overlay__login.classList.remove('active');
    popup.classList.remove('active');
});

btn__cerrar__popup2.addEventListener('click', function() {
    overlay__register.classList.remove('active');
    popup2.classList.remove('active');
});


btn__forgot__pass.addEventListener('click', function() {
    overlay__pass.classList.add('active');
    popup__pass.classList.add('active');
});