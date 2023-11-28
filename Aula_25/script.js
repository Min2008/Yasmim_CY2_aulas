const URL_BASE = 'https://restcountries.com/v3.1/name/'

const FORM = document.querySelector('.conteudo-pesquisa')
const ENTRADA = document.querySelector('.search')
const NOME = document.querySelector('.nome-oficial')
const BANDEIRA = document.querySelector('.bandeira')
const TERRITORIO = document.querySelector('.territorio')
const CAPITAL = document.querySelector('.capital')
const CONTINENTE = document.querySelector('.continente')
const SUB_REGIAO = document.querySelector('.sub-regiao')
const SIGLA = document.querySelector('.sigla')
const POPULATION = document.querySelector('.populacao')



const fetch_country = async(country) => {
    const response = await fetch(URL_BASE + country)
    if (response.status === 200) {
        const INFO = response.json()
        return INFO
    }
}

const render_country = async(countries) => {
    const info = await fetch_country(countries)
    if(info){
        NOME.innerHTML = info[0].name['official']
        BANDEIRA.src = info[0].flags['svg']
        TERRITORIO.innerHTML = info[0].area
        CAPITAL.innerHTML = info[0].capital[0] 
        CONTINENTE.innerHTML = info[0].region
        SUB_REGIAO.innerHTML = info[0].subregion
        SIGLA.innerHTML = info[0].fifa
        POPULATION.innerHTML = info[0].population
    }
}

render_country('Mexico')