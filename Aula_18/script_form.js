const form = document.getElementById('form')
const nome = document.getElementById('nome')
const botao = document.getElementById('enviar')
const nota1 = document.getElementById('n1')
const nota2 = document.getElementById('n2')
const nota3 = document.getElementById('n3')

// validar o formulario:

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // verificar se o nome esta preenchido
    if (nome.value === ''){
        alert('Preencha o nome do aluno!')
        return; // continuar fazendo!
    }
    
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

