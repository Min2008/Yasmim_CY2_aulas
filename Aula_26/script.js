// const URL_BASE = 'https://docs.awesomeapi.com.br/api-cep'

const CEP = document.querySelector('.cep')
const LOGRADOURO = document.querySelector('.logradouro')
const ESTADO = document.querySelector('.estado')
const CIDADE = document.querySelector('.cidade')
const BAIRRO = document.querySelector('.bairro')
const FORM = document.querySelector('.cep-conteiner')

const fetch_cep = async(cep) => {
    api_response = await fetch(`https://cep.awesomeapi.com.br/json/${cep}`)
    if(api_response.status === 200){
        const endereco = api_response.json()
        return endereco
    }
}

const render_cep = async(cep) => {
    const informacao = await fetch_cep(cep)
    if(informacao){
        console.log(informacao)
        CEP.value = informacao.cep
        LOGRADOURO.value = informacao.address
        ESTADO.value = informacao.state
        CIDADE.value = informacao.city
        BAIRRO.value = informacao.district
    }
    else{
        LOGRADOURO.innerHTML = "none"
        ESTADO.innerHTML = "none"   
        CIDADE.innerHTML = "none"
        BAIRRO.innerHTML = "none"
    }
}

FORM.addEventListener('submit', (evento) =>{
    
    let ceps = CEP.value
    render_cep(ceps)
});











