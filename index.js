const $startGameButton = document.querySelector(".start")
const $nextQuestionButton = document.querySelector(".next")
const $questionsContainer = document.querySelector(".questoes-container")
const $questionText = document.querySelector(".question")
const $answersContainer = document.querySelector(".respostas-container")
const $answers = document.querySelectorAll(".resposta")

let currentQuestionIndex = 0
let totalCorrect = 0

$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)

function startGame() {
  $startGameButton.classList.add("hide")
  $questionsContainer.classList.remove("hide")
  displayNextQuestion()
}

function displayNextQuestion() {
  resetState()
  
  if (questions.length === currentQuestionIndex) {
    return finishGame()
  }

  $questionText.textContent = questions[currentQuestionIndex].question
  questions[currentQuestionIndex].answers.forEach(answer => {
    const newAsnwer = document.createElement("button")
    newAsnwer.classList.add("button", "answer")
    newAsnwer.textContent = answer.text
    if (answer.correct) {
      newAsnwer.dataset.correct = answer.correct
    }
    $answersContainer.appendChild(newAsnwer)

    newAsnwer.addEventListener("click", selectAnswer)
  })
}

function resetState() {
  while($answersContainer.firstChild) {
    $answersContainer.removeChild($answersContainer.firstChild)
  }

  document.body.removeAttribute("class")
  $nextQuestionButton.classList.add("hide")
}

function selectAnswer(event) {

    const answerClicked = event.target

    if (answerClicked.dataset.correct) {
      document.body.classList.add("orrect")
      totalCorrect++
    } else {
      document.body.classList.add("ncorrect") 
    }


  document.querySelectorAll(".answer").forEach(button => {
    button.disabled = true

    if (button.dataset.correct) {
      button.classList.add("correct")
    } else {
      button.classList.add("incorrect")
    }
  })
  
  $nextQuestionButton.classList.remove("hide")
  currentQuestionIndex++
}

function finishGame() {
  

  $questionsContainer.innerHTML = 
  `
   
    <button 
      onclick=window.location.reload() 
      class="button"
    >
      Jogar Novamente
    </button>
  `
}


const questions = [
  {
    question: "Qual o nome do pai do Naruto?",
    answers: [
      { text: "Iruka", correct: false },
      { text: "Kakashi", correct: false },
      { text: "Minato", correct: true },
      { text: "Jiraya", correct: false }
    ]
  },
  {
    question: "Qual o pokémon mais forte do Ash?",
    answers: [
      { text: "Charizard", correct: true },
      { text: "Pikachu", correct: false },
      { text: "Aceus", correct: false },
      { text: "Greninja", correct: false }
    ]
  },
  {
    question: "Qual o anime mais assistido do Brasil",
    answers: [
      { text: "Naruto", correct: true },
      { text: "Dragon Ball", correct: false },
      { text: "Pokémon", correct: false },
      { text: "One Piece", correct: false }
    ]
  },
  {
    question: 'O arquivo JavaScript externo deve conter a tag <script>',
    answers: [
      { text: "Verdadeiro", correct: false },
      { text: "Falso", correct: true },
      { text: "xxx.js", correct: false },
      { text: "Nenhuma das alternativas", correct: false }
    ]
  },
  {
    question: 'Como escrever "Hello World" numa caixa de alerta?',
    answers: [
      { text: 'msg("Hello World");', correct: false },
      { text: 'alert("Hello World");', correct: true },
      { text: 'msgBox("Hello World");', correct: false },
      { text: 'alertBox("Hello World");', correct: false }
    ]
  },
  {
    question: 'Como podemos criar uma função no JavaScript?',
    answers: [
      { text: 'function:myFunction()', correct: false },
      { text: 'function myFunction()', correct: true },
      { text: 'function = myFunction()', correct: false },
      { text: 'Nenhum desses códigos criaria uma função', correct: false }
    ]
  },
  {
    question: 'Como podemos chamar uma função chamada "minhaFuncao"?',
    answers: [
      { text: 'call minhaFuncao()', correct: false },
      { text: 'call function minhaFuncao()', correct: false },
      { text: 'Nenhum desses códigos chamaria essa função', correct: false },
      { text: 'minhaFuncao()', correct: true },
    ]
  },
  {
    question: 'Como podemos chamar uma função chamada "minhaFuncao"?',
    answers: [
      { text: 'call minhaFuncao()', correct: false },
      { text: 'call function minhaFuncao()', correct: false },
      { text: 'Nenhum desses códigos chamaria essa função', correct: false },
      { text: 'minhaFuncao()', correct: true },
    ]
  },
  {
    question: 'Como podemos chamar uma função chamada "minhaFuncao"?',
    answers: [
      { text: 'call minhaFuncao()', correct: false },
      { text: 'call function minhaFuncao()', correct: false },
      { text: 'Nenhum desses códigos chamaria essa função', correct: false },
      { text: 'minhaFuncao()', correct: true },
    ]
  },
  {
    question: 'Como podemos chamar uma função chamada "minhaFuncao"?',
    answers: [
      { text: 'call minhaFuncao()', correct: false },
      { text: 'call function minhaFuncao()', correct: false },
      { text: 'Nenhum desses códigos chamaria essa função', correct: false },
      { text: 'minhaFuncao()', correct: true },
    ]
  },
]



  // outro relogio
  let tempo = 0;
let cronometro;

function formatarTempo(segundos) {
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const segundosFormatados = segundos % 60;

    return `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundosFormatados).padStart(2, '0')}`;
}

function atualizarTempo() {
    tempo++;
    document.getElementById('tempo').innerText = formatarTempo(tempo);
}

function iniciarCronometro() {
    if (!cronometro) {
        cronometro = setInterval(atualizarTempo, 1000);
    }
}

function pararCronometro() {
    clearInterval(cronometro);
    cronometro = null;
}

function zerarCronometro() {
    tempo = 0;
    document.getElementById('tempo').innerText = formatarTempo(tempo);
    pararCronometro();
}

