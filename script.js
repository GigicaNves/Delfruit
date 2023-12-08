const $startGameButton = document.querySelector(".start-quiz.button")
const $nextQuestionButton = document.querySelector(".next-question")
const $questionsContainer = document.querySelector(".questions-quiz")
const $questionText = document.querySelector(".question")
const $answersContainer = document.querySelector(".answers-quiz")
const $answers = document.querySelectorAll(".answer")
const $img = document.querySelector(".img-delfruit")
const $correctAnswer = document.querySelector(".correct-answer")

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
  $img.src = "./assets/quiz/delfruitPergunta.png";
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
  $correctAnswer.classList.add("hide")
}

function selectAnswer(event) {
  const answerClicked = event.target

  if (answerClicked.dataset.correct) {
    $img.src = "./assets/quiz/delfruitAcerta.png";
    document.body.classList.add("correct")
    totalCorrect++
  } else {
    $img.src = "./assets/quiz/delfruitErra.png";
    document.body.classList.add("incorrect") 
  }

  document.querySelectorAll(".answer").forEach(button => {
    button.disabled = true

    if (button.dataset.correct) {
      button.classList.add("correct")
    } else {
      button.classList.add("incorrect")
    }
  })

  $correctAnswer.classList.remove("hide")
  $correctAnswer.textContent = questions[currentQuestionIndex].response
  $nextQuestionButton.classList.remove("hide")
  currentQuestionIndex++
}

function finishGame() {
  const totalQuestions = questions.length
  const performance = Math.floor(totalCorrect * 100 / totalQuestions)
  
  let message = ""

  switch (true) {
    case (performance >= 90):
      message = "Excelente :)"
      break
    case (performance >= 70):
      message = "Muito bom :)"
      break
    case (performance >= 50):
      message = "Bom"
      break
    default:
      message = "Pode melhorar :("
  }

  $questionsContainer.innerHTML = 
  `
    <p class="final-message">
      Você acertou ${totalCorrect} de ${totalQuestions} questões!
      <span>Resultado: ${message}</span>
    </p>
    <button 
      onclick=window.location.reload() 
      class="button"
    >
      Refazer teste
    </button>
  `
}


const questions = [
  {
    question: "As cascas de frutas cítricas podem ser consumidas?",
    answers: [
      { text: "Não, podem entrar em conflito com os ácidos do corpo.", correct: false },
      { text: "Sim, mas com moderação.", correct: true },
      { text: "Apenas se a fruta estiver madura.", correct: false },
      { text: "Sim, mas frequentemente.", correct: false }
    ],
    response: "A casca e o bagaço da laranja são ricos em fibras alimentares e são altamente indicados para o consumo. Além disso, conta também com a presença de flavonoides e antioxidantes, uma combinação que ajuda a controlar o colesterol e a prevenir problemas relacionados à pressão.",
  },
  {
    question: "Consumir casca de uva é benéfico para a saúde cardiovascular. Essa afirmação é verdadeira ou falsa?",
    answers: [
      { text: "Verdadeira", correct: true },
      { text: "Falsa", correct: false },
    ],
    response: " Há uma presença de minerais (como o cálcio, ferro e potássio) e uma significativa quantidade de fibras essenciais para o funcionamento adequado de nosso organismo, especialmente do sistema digestivo. As vitaminas encontradas nas uvas são: Vitamina E; Vitamina C; Vitamina K; Vitamina A.",
  },
  {
    question: "Descascar as frutas protege-as do agrotóxico. Essa afirmação é verdadeira ou falsa?",
    answers: [
      { text: "Falsa", correct: true},
      { text: "Verdadeira", correct: false },
    ],
    response: "Como a maior parte dos resíduos de agrotóxicos está na casca, em tese, descascar a fruta ou vegetal faria com que boa parte dessas substâncias fossem eliminadas. No entanto, descascar os alimentos reduz também a ingestão de fibras insolúveis, por exemplo. Além disso, ao descascarmos, desperdiçamos muito do alimento, que poderia, em certos casos, ser aproveitado de forma integral.",
  },
  {
    question: "Qual é a casca que tem como principal benefício alivio de queimaduras?",
    answers: [
      { text: "A maça", correct: false },
      { text: "A banana", correct: true },
      { text: "A uva", correct: false },
      { text: "A laranja", correct: false }
    ],
    response: "Como cultura, no Brasil a casca da banana é conhecida como remédio na ação de cicatrização de feridas, por ser fortemente usada em queimaduras, por apresentar metabólicos como taninos.",
  },
  {
    question: "Qual fruta mais atua como um potente antioxidante?",
    answers: [
      { text: "Melancia", correct: false },
      { text: "Mamão", correct: false },
      { text: "Limão", correct: false },
      { text: "Laranja", correct: true }
    ],
    response: "Isso porque possui os flavonoides, que atuam como antioxidantes e podem bloquear o surgimento de determinados genes, responsáveis por doenças degenerativas, incluindo o câncer. A vitamina C também atua removendo e interrompendo as reações dos radicais livres, auxiliando na prevenção de alguns tipos de câncer.",
  },
]

