// constantes

const QUESTOES_QUIZ = [ //lista!
    {
        questao: "Melhor fruta?",
        a: "Morango",
        b: "Maçã",
        c: "Melancia",
        d: "Manga",
        correta: "c"
    },

    {
        questao: "Melhor frase de mãe?",
        a: "Se eu for aí e achar?!",
        b: "Eu avisei!!",
        c: "Pegou a blusa?",
        d: "Na volta a gente compra...",
        correta: "d"
    },

    {
        questao: "Melhor filme da Disney?",
        a: "Frozen",
        b: "Enrolados",
        c: "Encanto",
        d: "Detona Half",
        correta: "b"
    },
]

// identificando elementos
const quiz_titulo = document.getElementById('questao')
const alternativa_a = document.getElementById('text_a')
const alternativa_b = document.getElementById('text_b')
const alternativa_c = document.getElementById('text_c')
const alternativa_d = document.getElementById('text_d')
const botao = document.getElementById('enviar')
const resposta = document.querySelectorAll('.respota')
const quiz_conteiner = document.getElementById('quiz')

// variaveis
let questao_atual = 0
let corretas = 0

// funções

carregar_quiz();

function carregar_quiz() {
    const info_questao = QUESTOES_QUIZ[questao_atual]

    quiz_titulo.innerText = info_questao.questao
    alternativa_a.innerText = info_questao.a
    alternativa_b.innerText = info_questao.b
    alternativa_c.innerText = info_questao.c
    alternativa_d.innerText = info_questao.d
}

botao.addEventListener('click', () => {
    const resp = pegar_resposta();
    const total_perguntas = QUESTOES_QUIZ.length

    if (resp)
    {
        if (resp === QUESTOES_QUIZ[questao_atual].correta)
        {
            corretas++ // ++ soma de um em um
        }
        questao_atual++
        if(questao_atual < total_perguntas)
        {
            carregar_quiz();
        }
        else
        {
            quiz_conteiner.innerHTML = `<h1>Você acertou ${corretas}/${total_perguntas} questões </h1>`
        }
    }
})


