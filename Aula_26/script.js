const URL_BASE = 'https://docs.awesomeapi.com.br/api-cep'

const CEP = document.querySelector('.cep')
const LOGRADOURO = document.querySelector('.logradouro')
const BAIRRO = document.querySelector('.bairro')
const CIDADE = document.querySelector('.cidade')
const ESTADO = document.querySelector('.estado')
const NUMERO = document.querySelector('.numero')

const fetch_cep = async(ceps) => {
    const response = await fetch(URL_BASE + ceps)
    if(response === 200){
        const info = response.json()
        return info
    }
}

const reder_cep = async(enderecos) => {
    const infor = await fetch_cep(enderecos)
    if(infor){
        LOGRADOURO.innerHTML = infor.address[0]
        BAIRRO.innerHTML = infor.district[0]
        CIDADE.innerHTML = infor.city[0]
        ESTADO.innerHTML = infor.state[0]
    }
}