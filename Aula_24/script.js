const POKE_NAME = document.querySelector('.name-poke')
const POKE_NUMBER = document.querySelector('.num-poke')
const POKE_IMG = document.querySelector('.poke-img')
const FORM = document.querySelector('.formulario')
const INPUT = document.querySelector('.input-search')
const BTN_ANTERIOR = document.querySelector('.btn_anterior')
const BTN_PROXIMO = document.querySelector('.btn_proximo')

let id_pokemon = 1

const fetch_pokemon  = async (pokemon) => {
    api_response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    console.log(api_response)
    if(api_response.status === 200){
        const data = api_response.json()
        return data
    }
}

const render_pokemon = async (pokemon) => {
    POKE_NAME.innerHTML = "Pesquisando..."
    POKE_NUMBER.innerHTML = ""

    const info = await fetch_pokemon(pokemon)
    if(info){
        POKE_IMG.src = info['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
        POKE_IMG.style.display = 'block'
        POKE_NAME.innerHTML = info.name
        POKE_NUMBER.innerHTML = info.id
        id_pokemon = info.id
        INPUT.value = ''
    }
    else {
        POKE_IMG.style.display = 'none'
        POKE_NUMBER.innerHTML = ''
        POKE_NAME.innerHTML = 'Não encontrado'
        INPUT.value = ''
    }
}

FORM.addEventListener('submit', (evento) => {
    evento.preventDefault()
    let pokemon = INPUT.value.toLowerCase()
    render_pokemon(pokemon)
});

BTN_ANTERIOR.addEventListener('click', () => {
    if (id_pokemon > 1){
        id_pokemon -= 1
        render_pokemon(id_pokemon)
    }
})

BTN_PROXIMO.addEventListener('click', () => {
    id_pokemon += 1
    render_pokemon(id_pokemon)
})



render_pokemon(id_pokemon)