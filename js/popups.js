var btnAbrirPopup = document.getElementById('btn__login'),
    overlay = document.getElementById('overlay__login'),
    popup = document.getElementById('popup'),
    btn__cerrar__popup = document.getElementById('btn__cerrar__popup'),
    btn__submit__login = document.getElementById('btn__submit__login');

btnAbrirPopup.addEventListener('click', function() {
    overlay__login.classList.add('active');
    popup.classList.add('active');
});

btn__cerrar__popup.addEventListener('click', function() {
    overlay__login.classList.remove('active');
    popup.classList.remove('active');
});

btn__submit__login.addEventListener('click', function() {
    overlay__forgot__pass.classList.add('active');
    popup__pass.classList.add('active');
    overlay__login.classList.remove('active');
    popup.classList.remove('active');
});