var btnAbrirPopup = document.getElementById('btn__login'),
    overlay = document.getElementById('overlay__login'),
    popup = document.getElementById('popup'),
    btn__cerrar__popup = document.getElementById('btn__cerrar__popup'),
    btn__submit__login = document.getElementById('btn__submit__login'),
    btnAbrirPopupR = document.getElementById('btn__r'),
    overlay = document.getElementById('overlay__register'),
    popup2 = document.getElementById('popup2'),
    btn__submit__admin = document.getElementById('btn__submit__admin'),
    btn__submit__ureg = document.getElementById('btn__submit__ureg'),
    btn__submit__uesp = document.getElementById('btn__submit__uesp'),
    BtnAbrirPopupPass = document.getElementById('forgot__pass'),
    overlay__pass = document.getElementById('overlay__pass'),
    popup__pass = document.getElementById('popup__pass'),
    BtnCerrarPopupPass = document.getElementById('BtnCerrarPopupPass'),
    BtnSubmitPass = document.getElementById('BtnSubmitPass');

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

BtnAbrirPopupPass.addEventListener('click', function() {
    overlay__login.classList.remove('active');
    popup.classList.remove('active');
    overlay__pass.classList.add('active');
    popup__pass.classList.add('active');
});

BtnCerrarPopupPass.addEventListener('click', function() {
    overlay__pass.classList.remove('active');
    popup__pass.classList.remove('active');
});

BtnSubmitPass.addEventListener('click', function() {
    overlay__pass.classList.remove('active');
    popup__pass.classList.remove('active');
});