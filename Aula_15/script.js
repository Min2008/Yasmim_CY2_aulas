var mensagem = document.getElementById('msg')
var img = document.getElementById('foto')
var horas = document.getElementById('horas')
let horario = prompt('digite as horas: ')
var data = new Date();
var hora = data.getHours()

horas.innerHTML = `Agora são ${horario} horas`


// if (horario <= 12){ eu fiz
//     var mensagem = document.getElementById('msg')
//     var img = document.getElementById('foto')
// }

// if (horario > 12 && horario <= 19){
// }

// if (horario > 19 && horario <= 11){
// } eu fiz

// correção: =>

if (horario >= 5 && horario <= 12){
    document.body.style.background = 'brown'
    mensagem.innerHTML = 'BOM DIA!!!'

} 
else if (horario >= 12 && horario <= 18){
    document.body.style.background = 'lightblue'
    mensagem.innerHTML = 'BOA TARDE!!!'
    img.src = './img/boa tarde.jpg'
}
else{
    document.body.style.background = 'purple'
    mensagem.innerHTML = 'BOA NOITE!!!'
    img.src = './img/boa noite.jpg'
}

