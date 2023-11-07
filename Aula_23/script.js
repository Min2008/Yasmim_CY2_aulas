const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"

const IMGPATH = "https://image.tmdb.org/t/p/w1280"

const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="

const CONTEUDO = document.getElementById('conteudo')
const FORMULARIO = document.getElementById('formulario')
const PESQUISA = document.getElementById('pesquisa')

pegar_filmes(APIURL)
    // async => sicronizar, 
async function pegar_filmes(url){
    const resp = await fetch(url)
    const resp_info = await resp.json() // json é tranformar em um dicionario
    
    mostrar_filmes(resp_info.results) // acessar o results para pegar o que eu quero dentro da API
}

 function mostrar_filmes(catalogo){
    CONTEUDO.innerHTML = ''

    catalogo.forEach(filme => { // for each laço de repetiçao
        const {
            poster_path, title, vote_average
        } = filme
        const filme_elemento = document.createElement('div')
        filme_elemento.classList.add('filme')

        // colocar o conteudo
        filme_elemento.innerHTML = `
            <img
            src="${IMGPATH + filme.poster_path}"
            alt="${filme.title}"
            >
            <div class="filme-info">
                <h3>${filme.title}</h3>
                <span class="${cor_nota(filme.vote_average)}">🌟${filme.vote_average}</span>
            </div>
        `
        // colocar o conteudo na main (tela)
        CONTEUDO.appendChild(filme_elemento)
    })
}

function cor_nota(nota){
    if(nota >= 7){
        return 'green'
    } else if(nota>= 5) {
        return 'yellow'
    } else{
        return 'red'
    }
}

FORMULARIO.addEventListener("submit", (e) => {
    e.preventDefault();
    const texto_pesquisado = PESQUISA.value
    if(texto_pesquisado){
        pegar_filmes(SEARCHAPI + texto_pesquisado)
        PESQUISA.value = ''
    }
})


