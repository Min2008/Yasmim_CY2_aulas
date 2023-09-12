// constantes:
const diasEl = document.getElementById('dias');
const horasEl = document.getElementById('horas');
const minutosEl = document.getElementById('minutos');
const segundosEl = document.getElementById('segundos');

// repreentar a data de aniversario
const birthday = ('19 Oct 2023');

// para o contador funcionar - fazer uma função:
function countdown(){

    // constante para a nova data do aniversario
    const newBirthdayDate = new Date(birthday);
    // constante para a data atual
    const currentDate = new Date();
    
    // constantes do contador:
    const totalSegundos = (newBirthdayDate - currentDate) / 1000;

    const dias = Math.floor(totalSegundos / 3600 / 24);
    const horas = Math.floor(totalSegundos / 3600) % 24;
    const minutos = Math.floor(totalSegundos / 60) % 60;
    const segundos = Math.floor(totalSegundos) % 60; // Obs: o % significa que ele vai dar o resto ou modulo da divisap feita antes!


    diasEl.innerHTML = dias;
    horasEl.innerHTML = formatTime(horas);
    minutosEl.innerHTML = formatTime(minutos);
    segundosEl.innerHTML = formatTime(segundos);

}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}


countdown()

setInterval(countdown, 1000);

