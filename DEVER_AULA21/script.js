const numero = document.getElementById('numero')
const resetar_btn = document.getElementById('resetar')
const diminuir_btn = document.getElementById('diminuir')
const aumentar_btn = document.getElementById('aumentar')
const aumentar_auto = document.getElementById('aumentar_sozinho')
const diminuir_auto = document.getElementById('diminuir_sozinho')


const UpdateValue = () => {
    numero.innerHTML = count;
};

let count = 0
let intervalId = 0

aumentar_btn.addEventListener('mousedown', () => {
    intervalId = setInterval (() => {
        count += 1;
        UpdateValue();
    }, 70);
});

diminuir_btn.addEventListener('mousedown', () => {
    intervalId = setInterval (() => {
        count -= 1;
        UpdateValue();
    }, 70);
});

resetar_btn.addEventListener('click', () => {
        count = 0;
        UpdateValue();
});


document.addEventListener('mouseup', () => clearInterval(intervalId));

