// https://emojihub.yurace.pro/api/random

const URL = 'https://emojihub.yurace.pro/api/random'
const TITULO_EL = document.getElementsByTagName('h1') 
const EMOJI_EL = document.querySelector('.emoji')
const BUTTON_EL = document.querySelector('.novo-emoji')

function novo_emoji(){
    request = fetch(URL).then(response => response.json()).then(data => atualizar_emoji(data)) // usando metodos
}

function atualizar_emoji(data) {
    if(toString(data.name).search(',')){
        console.log('tem virgula')
    }

    EMOJI_EL.innerHTML = data.htmlCode[0]
    TITULO_EL[0].innerHTML = data.name
}

window.onload = novo_emoji

BUTTON_EL.addEventListener('click', novo_emoji)