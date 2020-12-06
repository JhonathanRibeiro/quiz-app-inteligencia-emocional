/*!
 * QuizApp Inteligencia Emocional v1.0.0
 * Copyright 2020 Jhonathan Ribeiro
 * Licensed MIT (https://github.com/JhonathanRibeiro)
 */
const quizData = [
    {
        question: "Você sabe identificar as emoções que sente?",
        a: "Sempre",
        b: "Fequentemente",
        c: "De vez em quando",
        d: "Raramente",
        e: "Nunca"
    },
    {
        question: " Você sabe se acalmar quando se sente inquieto ou chateado?",
        a: "Sempre",
        b: "Fequentemente",
        c: "De vez em quando",
        d: "Raramente",
        e: "Nunca"
    },
    {
        question: "Você define metas a longo prazo?",
        a: "Sempre",
        b: "Fequentemente",
        c: "De vez em quando",
        d: "Raramente",
        e: "Nunca"
    },
    {
        question: "Você procura entendimento mútuo nas questões?",
        a: "Sempre",
        b: "Fequentemente",
        c: "De vez em quando",
        d: "Raramente",
        e: "Nunca"
    },
    {
        question: "Você é um bom ouvinte?",
        a: "Sempre",
        b: "Fequentemente",
        c: "De vez em quando",
        d: "Raramente",
        e: "Nunca"
    },
    {
        question: "Você persiste na busca por seus objetivos, apesar dos obstáculos?",
        a: "Sempre",
        b: "Fequentemente",
        c: "De vez em quando",
        d: "Raramente",
        e: "Nunca"
    },
    {
        question: "Você consegue admitir facilmente que cometeu um erro?",
        a: "Sempre",
        b: "Fequentemente",
        c: "De vez em quando",
        d: "Raramente",
        e: "Nunca"
    },
    {
        question: "Você sabe suas qualidades e defeitos?",
        a: "Sempre",
        b: "Fequentemente",
        c: "De vez em quando",
        d: "Raramente",
        e: "Nunca"
    },
    {
        question: "Você promove conversas difíceis para resolver problemas?",
        a: "Sempre",
        b: "Fequentemente",
        c: "De vez em quando",
        d: "Raramente",
        e: "Nunca"
    },
    {
        question: "Você tenta enxergar as situações pela perspectiva dos outros?",
        a: "Sempre",
        b: "Fequentemente",
        c: "De vez em quando",
        d: "Raramente",
        e: "Nunca"
    },
    {
        question: "Você tem ânimo para atingir seus objetivos?",
        a: "Sempre",
        b: "Fequentemente",
        c: "De vez em quando",
        d: "Raramente",
        e: "Nunca"
    },
    {
        question: "Você consegue pensar claramente quando está sob pressão?",
        a: "Sempre",
        b: "Fequentemente",
        c: "De vez em quando",
        d: "Raramente",
        e: "Nunca"
    },
    {
        question: "Você utiliza as críticas para crescer?",
        a: "Sempre",
        b: "Fequentemente",
        c: "De vez em quando",
        d: "Raramente",
        e: "Nunca"
    },
    {
        question: "Você acha fácil ler as emoções dos outros?",
        a: "Sempre",
        b: "Fequentemente",
        c: "De vez em quando",
        d: "Raramente",
        e: "Nunca"
    },
    {
        question: "Você lida com pessoas e situações difíceis com delicadeza?",
        a: "Sempre",
        b: "Fequentemente",
        c: "De vez em quando",
        d: "Raramente",
        e: "Nunca"
    },
    {
        question: "Você se orienta pelos seus valores e objetivos?",
        a: "Sempre",
        b: "Fequentemente",
        c: "De vez em quando",
        d: "Raramente",
        e: "Nunca"
    },
    {
        question: "Você supera facilmente o sentimento de frustração?",
        a: "Sempre",
        b: "Fequentemente",
        c: "De vez em quando",
        d: "Raramente",
        e: "Nunca"
    },
    {
        question: "Você reconhece como seu comportamento afeta os outros?",
        a: "Sempre",
        b: "Fequentemente",
        c: "De vez em quando",
        d: "Raramente",
        e: "Nunca"
    },
    {
        question: "Você consegue ouvir sem julgar?",
        a: "Sempre",
        b: "Fequentemente",
        c: "De vez em quando",
        d: "Raramente",
        e: "Nunca"
    },
    {
        question: "Você presta atenção aos seus relacionamentos?",
        a: "Sempre",
        b: "Fequentemente",
        c: "De vez em quando",
        d: "Raramente",
        e: "Nunca"
    },
];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("quest");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const e_text = document.getElementById("e_text");
const submitBtn = document.getElementById("submit");

let qtde = document.getElementById('qtdQuestoes');
let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    e_text.innerText = currentQuizData.e;
    qtde.innerText = `${currentQuiz+1}/${quizData.length}`;
}

function getSelected() {
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
            switch(answer){
                case answer.value = 'a':
                    score += 5
                break
                case answer.value = 'b':
                    score += 4
                break
                case answer.value = 'c':
                    score += 3
                break
                case answer.value = 'd':
                    score += 2
                break
                case answer.value = 'e':
                    score += 1
                break
            }
            console.log('score:',score);
        }
    });
    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", (btn) => {
    // check to see the answer
    btn.preventDefault();
    const answer = getSelected();
    if (answer) {
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else if(score <= 39) {
            quiz.innerHTML = `
                <h2 class="p-0 m-0 text-danger text-bolder">Crítico</h2>
                <div class="text-center m-0 p-0">
                    <span class="text-center">${score} pontos</span>
                </div>
                <p class="pl-2 pr-2 pt-1 m-1">
                Você precisa trabalhar para desenvolver sua inteligência emocional. Apesar de sua sinceridade ser admirável,
                é provável que você se sinta sobrecarregado por suas emoções e lute para gerenciar emoções. Reagir a isso,
                explodindo, ou, pelo contrário, não expressando suas emoções, é igualmente prejudicial.
                </p>
                <p class="pl-2 pr-2 pt-1 m-1">
                Suas respostas às pressões comuns da vida podem estar baseadas no medo e na insegurança - em vez de
                paixão e propósito. No entanto, isto não precisa ser algo definitivo! A inteligência emocional não vem do
                nascimento: ela pode ser desenvolvida.
                </p>
                <p class="pl-2 pr-2 pt-1 m-1">
                Trabalhe sua autoconsciência, porque ela é o primeiro fundamento da inteligência emocional. Se parece muito
                difícil, não hesite em pedir ajuda para quem você considera ter muito conhecimento relacionado a oferecer. A
                intenção de desenvolver a inteligência emocional é o primeiro – e mais importante – passo.
                </p>
                <button onclick="location.reload()">Refazer teste</button>
            `;
        } else if(score >= 40 && score <= 59) {
            quiz.innerHTML = `
                <h2 class="p-0 m-0 text-warning text-bolder">Baixo</h2>
                <div class="text-center m-0 p-0">
                    <span class="text-center">${score} pontos</span>
                </div>
                <p class="pl-2 pr-2 pt-1 m-1">
                Seu nível de inteligência emocional ainda é um pouco baixo. Você tem mais dificuldade nas situações que
                exigem mais habilidades de interação social. É provável que se sinta frequentemente frustrado com colegas,
                ou até entes queridos por ter um “amortecedor” para lidar com situações e relacionamentos difíceis menos
                desenvolvido.
                </p>
                <p class="pl-2 pr-2 pt-1 m-1">
                Comece a trabalhar o autoconhecimento. Entenda quais habilidades são mais difíceis para você - pode ser a
                empatia, receber críticas, ou social skills básicas - e pratique-as. Olhe também para o que você já faz de bom
                e procure entender como consegue, para aplicar seus métodos bem-sucedidos aos novos aprendizados.
                </p>
                <button onclick="location.reload()">Refazer teste</button>
            `;
        } else if(score >= 60 && score <= 79) {
            quiz.innerHTML = `
                <h2 class="p-0 m-0 text-success text-bolder">Bom</h2>
                <div class="text-center m-0 p-0">
                    <span class="text-center">${score} pontos</span>
                </div>
                <p class="pl-2 pr-2 pt-1 m-1">
                Bom nível de inteligência emocional. É bem provável que você seja sensível às emoções dos que estão
                ao seu redor - colegas, amigos, familiares e clientes. Você também tem consciência sobre o efeito do seu
                comportamento nos outros.
                </p>
                <p class="pl-2 pr-2 pt-1 m-1">
                Enquanto ser adepto a colocar as outras pessoas e suas necessidades a frente das suas é algo admirável, nem
                sempre é o melhor a se fazer. Não tenha medo de se comunicar honestamente e mostrar seus sentimentos,
                desde que com habilidade. Este é um dos aspectos mais importantes para desenvolver a inteligência
                emocional.
                </p>
                <button onclick="location.reload()">Refazer teste</button>
            `;
        } else if(score >= 80 && score <= 100) {
            quiz.innerHTML = `
                <h2 class="p-0 m-0 text-success text-bolder">Ótimo</h2>
                <div class="text-center m-0 p-0">
                    <span class="text-center">${score} pontos</span>
                </div>
                <p class="pl-2 pr-2 pt-1 m-1">
                Se seus resultados estão neste intervalo, há duas possibilidades: ou você tem um nível de inteligência
                emocional extremamente alto, ou baixíssimo.
                </p>
                <p class="pl-2 pr-2 pt-1 m-1">
                Como isso é possível? Esses resultados podem refletir elevado grau de autoconhecimento - neste caso,
                ótimo! Mas não pare de buscar oportunidades de aprendizado. Ou, pelo contrário: podem ser consequência
                de uma grande falta de autoconhecimento, porque é preciso ser autoconsciente para se avaliar com precisão.
                </p>
                <p class="pl-2 pr-2 pt-1 m-1">
                A autoconsciência é a capacidade fundamental da inteligência emocional, porque ela reflete diretamente nas
                outras. É preciso ter noção sobre si próprio para mudar qualquer comportamento. Então, ou você chegou ao
                topo, ou tem um longo caminho pela frente.
                </p>
                <button onclick="location.reload()">Refazer teste</button>
            `;
        }
    }
});