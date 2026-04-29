const startScreen = document.getElementById("start-screen")
const quizScreen = document.getElementById("quiz-screen")
const resultScreen = document.getElementById("result-screen")
const startBtn = document.getElementById("start-quiz")
const questionText = document.getElementById("question-text")
const currentQuestionSpan = document.getElementById("current-question")
const totalQuestion = document.getElementById("total-questions")
const scoreSpan = document.getElementById("score")
const answerContainer = document.getElementById("answers-container")
const progressBar = document.getElementById("progress")
const finalScore = document.getElementById("final-score")
const maxScore = document.getElementById("max-score")
const resultMessage = document.getElementById("result-message")
const restartBtn = document.getElementById("restart-btn")


const quizQuestions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "London", correct: false },
      { text: "Berlin", correct: false },
      { text: "Paris", correct: true },
      { text: "Madrid", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
    ],
  },
  {
    question: "Which of these is NOT a programming language?",
    answers: [
      { text: "Java", correct: false },
      { text: "Python", correct: false },
      { text: "Banana", correct: true },
      { text: "JavaScript", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "Go", correct: false },
      { text: "Gd", correct: false },
      { text: "Au", correct: true },
      { text: "Ag", correct: false },
    ],
  },
];

let currentQuestionIndex = 0;
let score = 0;
let answerDisabled = false;

totalQuestion.textContent = quizQuestions.length;
maxScore.textContent = quizQuestions.length;

startBtn.addEventListener("click", startQuiz);
restartBtn.addEventListener("click", restartQuiz);

function startQuiz(){
    currentQuestionIndex = 0;
    score =0;
    scoreSpan.textContent = 0;

    startScreen.classList.remove("active");
    quizScreen.classList.add("active");

    showQuestion();
}

function showQuestion(){
    // reset state
    answerDisabled = false;

    const currentQuestion = quizQuestions[currentQuestionIndex];
    currentQuestionSpan.textContent = currentQuestionIndex+1;

    const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
    progressBar.style.width = progressPercent + "%";

    questionText.textContent = currentQuestion.question;

    answerContainer.innerHTML = "";

    currentQuestion.answers.forEach(answer=>{
        const btn = document.createElement("button");
        btn.textContent = answer.text;
        btn.classList.add("answer-btn");

        btn.dataset.correct = answer.correct;
        btn.addEventListener("click", selectAnswer);

        answerContainer.appendChild(btn);
    });
}

function selectAnswer(event){
    if(answerDisabled) return;

    answerDisabled = true;

    const selectedBtn = event.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    Array.from(answerContainer.children).forEach((btn)=>{
        if(btn.dataset.correct === "true"){
            btn.classList.add("correct");
        }
        else if(btn === selectedBtn){
            btn.classList.add("incorrect");
        }
    });

    if(isCorrect){
        score++;
        scoreSpan.textContent= score;
    }

    setTimeout(()=>{
        currentQuestionIndex++;

        if(currentQuestionIndex < quizQuestions.length){
            showQuestion();
        }
        else{
            showResult();
        }
    }, 1000)
}

function showResult(){
    quizScreen.classList.remove("active");
    resultScreen.classList.add("active");

    finalScore.textContent = score;

    const percentage= (score / quizQuestions.length) * 100;

    if (percentage === 100) {
        resultMessage.textContent = "Perfect! You're a genius!";
    } 
    else if (percentage >= 80) {
        resultMessage.textContent = "Great job! You know your stuff!";
    } 
    else if (percentage >= 60) {
        resultMessage.textContent = "Good effort! Keep learning!";
    } 
    else if (percentage >= 40) {
        resultMessage.textContent = "Not bad! Try again to improve!";
    } 
    else {
        resultMessage.textContent = "Keep studying! You'll get better!";
    }
}

function restartQuiz(){
    resultScreen.classList.remove("active");
    startQuiz();
}