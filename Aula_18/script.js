// variaveis
// let aluno = prompt('Qual o seu nome?')
// let nota1 = prompt('Nota 1: ')
// let nota2 = prompt('Nota 2: ')
// let nota3 = prompt('Nota 3: ')

// var nome = document.getElementById('nome')
// var resultado = document.getElementById('resultado')
// var media = document.getElementById('media')
// var media_total = new Mediat(nota1, nota2, nota3);
// var total = media_total.getMediaTotal();

// if (total < 6){
//     resultado.innerHTML = ' Você foi REPROVADO!'
// } else{
//     resultado.innerHTML = 'Você foi APROVADO!'
// }


// correção:

const NOME_TXT = document.getElementById('nome');
const MEDIA_TXT = document.getElementById('media');
const RESULTADO_TXT = document.getElementById('resultado');
const NOME_INPUT = document.getElementById('nome_input')
const N1_INPUT = document.getElementById('n1_input');
const N2_INPUT = document.getElementById('n2_input');
const N3_INPUT = document.getElementById('n3_input');
const FORM = document.getElementById('form')



function calcular_media(){
    n1 = parseInt(localStorage.getItem('n1'))
    n2 = parseInt(localStorage.getItem('n2'))
    n3 = parseInt(localStorage.getItem('n3'))

    let soma = n1 + n2 + n3
    let media = soma / 3
    
    if (media >= 7)
    {
        RESULTADO_TXT.innerHTML = 'APROVADO'
    } 
    else if (media <= 4) 
    {
        RESULTADO_TXT.innerHTML = 'REPROVADO'
    } 
    else 
    {
        RESULTADO_TXT.innerHTML = 'RECUPERAÇÃO'
    }
    MEDIA_TXT.innerHTML = media
}

function nome(){
    aluno = localStorage.getItem("nome")
    NOME_TXT.innerHTML = aluno
}


nome();
calcular_media();






/** problemas a concertar
 * 1 - criar o formulário para coletar nome e três notas - feito!
 * 2 - tratar erros (nome e nota obrigatorios e a nota tem que ser condizente, ou seja, entre 1 e 10) - feito!
 * 3 - formatar as casas decimais - feito!
 * 4 - cor coerente com o resultado, por exemplo: verde - aprovado; vermelho - reprovado e laranja - recuperação 
 */

