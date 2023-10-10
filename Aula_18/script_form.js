const form = document.getElementById('form')
const NOME_INPUT = document.getElementById('nome_input')
const botao = document.getElementById('enviar_input')
const N1_INPUT = document.getElementById('n1_input')
const N2_INPUT = document.getElementById('n2_input')
const N3_INPUT = document.getElementById('n3_input')

// validar o formulario:

function pegar_valores(){
    const nome = NOME_INPUT.value
    const n1 = N1_INPUT.value
    const n2 = N2_INPUT.value
    const n3 = N3_INPUT.value
    localStorage.setItem("nome", nome) // igual ha um dicionario, guarda valores!
    localStorage.setItem('n1', n1)
    localStorage.setItem('n2', n2)
    localStorage.setItem('n3', n3)
    window.location.pathname = "Aula_18/milho.html"
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    pegar_valores();
    // verificar se as notas estao preenchidas
    if(!validaNotas(nota1.value)){
        alert('Preencha a primeira nota!')
        return; // continuar fazendo!
    }
    
    if(!validaNotas(nota2.value)){
        alert('Preencha a segunda nota!')
        return; // continuar fazendo!
    }
    
    if(!validaNotas(nota3.value)){
        alert('Preencha a terceira nota!')
        return; // continuar fazendo!
    }

    // se estiver todo formulario preeenchido
    form.submit()
});

// função que valida a senha

function validaNotas(nota) {
    if (nota > 0 && nota <= 10) {
        return true; // nota validas
    }

    // nota invalida
    return false;

}

