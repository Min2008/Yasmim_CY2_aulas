const POKE_NAME = document.querySelector('.name-poke')
const POKE_NUMBER = document.querySelector('.num-poke')
const POKE_IMG = document.querySelector('.poke-img')
const FORM = document.querySelector('.formulario')
const INPUT = document.querySelector('.input-search')
const BTN_ANTERIOR = document.querySelector('.btn-anterior')
const BTN_PROXIMO = document.querySelector('.btn-proximo')

const fetch_pokemon  = async (pokemon) => {
    api_response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    console.log(api_response)
    if(api_response.status === 200){
        const data = api_response.json()
        return data
    }
}

const render_pokemon = async (pokemon) => {
    const info = await fetch_pokemon(pokemon)
    if(info){
        POKE_IMG.src = info['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
        POKE_IMG.style.display = 'block'
        POKE_NAME.innerHTML = info.name
        POKE_NUMBER.innerHTML = info.id
    }
}

render_pokemon('ditto')