const senha_elemet = document.getElementById("senha");
const copiar_elemet = document.getElementById("copiar");
const tamanho_elemet = document.getElementById("tamanho");
const maiusculas_elemet = document.getElementById("maiusculas");
const minusculas_elemet = document.getElementById("minusculas");
const numeros_elemet = document.getElementById("numeros");
const caracteres_elemet = document.getElementById("caracteres-especiais");
const gerar_senha_elemet = document.getElementById("gerar-senha");

const maiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const minusculas = 'abcdefghijklmnopqrstuvwxyz'
const numeros = '0123456789'
const caracteres_especiais = '+-*/!#=$@%&`?.,;ç'

function gerar_senha(){
    let tamanho_senha = tamanho_elemet.value
    
    if(!tamanho_senha || tamanho_senha < 6){
        tamanho_senha = 6
    }
    else if(tamanho_senha > 18){
        tamanho_senha = 18
    }

    let senha = ""

    // nao precisa mais!
    // if(maiusculas_elemet.checked){
    //     senha += sortear_maiuscula()
    // }

    // if(minusculas_elemet.checked){
    //     senha += sortear_minusculas()
    // }

    // if(numeros_elemet.checked){
    //     senha += sortear_numeros()
    // }

    // if(caracteres_elemet.checked){
    //     senha += sortear_caracter()
    // }

    for (let i = senha.length; i < tamanho_senha; i++){
        const x = misturar_senha()
        senha += x
    }
    
    senha_elemet.innerText = senha
}

function sortear_maiuscula(){
    let sorteado = maiusculas[Math.floor(Math.random() * maiusculas.length)]
    return sorteado
}

function sortear_minusculas(){
    let sorteado = minusculas[Math.floor(Math.random() * minusculas.length)]
    return sorteado
}

function sortear_numeros(){
    let sorteado = numeros[Math.floor(Math.random() * numeros.length)]
    return sorteado
}

function sortear_caracter(){
    let sorteado = caracteres_especiais[Math.floor(Math.random() * caracteres_especiais.length)]
    return sorteado
}

function misturar_senha(){
    const lista = []
    if (maiusculas_elemet.checked){
        lista.push(sortear_maiuscula())
    }
    if (minusculas_elemet.checked){
        lista.push(sortear_minusculas())
    }
    if (numeros_elemet.checked){
        lista.push(sortear_numeros())
    }
    if (caracteres_elemet.checked){
        lista.push(sortear_caracter())
    }

    if (lista.length === 0){
        return ''
    }
    return lista[Math.floor(Math.random() * lista.length)]
}

gerar_senha_elemet.addEventListener('click', gerar_senha)

// botao copiar

copiar_elemet.addEventListener('click', () => { // funçao sem nome!
    const area_text = document.createElement('textarea')
    const pw = senha_elemet.innerText

    if (!pw){
        return
    }

    area_text.value = pw
    document.body.appendChild(area_text)
    area_text.select()
    document.execCommand('copy')
    area_text.remove()
    window.alert('Senha copiada com sucesso!!')
})


