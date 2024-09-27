
const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "Hyper Text Markup Language", correct: true },
            { text: "High Tech Markup Language", correct: false },
            { text: "Hyperlink Text Markup Language", correct: false },
            { text: " Home Tool Markup Language", correct: false },

        ]
    },
    {
        question: "Which technology is primarily responsible for the styling of web pages?",
        answers: [
            { text: "JavaScript", correct: false },
            { text: "HTML", correct: false },
            { text: "CSS", correct: true },
            { text: "Python", correct: false },

        ]
    },
    {
        question: "Which programming language is mainly used for adding interactivity to websites?",
        answers: [
            { text: "HTML", correct: false },
            { text: "CSS", correct: false },
            { text: "Python", correct: false },
            { text: "JavaScript", correct: true },

        ]
    },
    {
        question: "Which part of web development is responsible for handling data storage and retrieval?",
        answers: [
            { text: "Front-end development", correct: false },
            { text: "Back-end development", correct: true },
            { text: "Full-stack development", correct: false },
            { text: "Middleware development", correct: false },

        ]
    },
    {
        question: "Which of the following is not a back-end programming language commonly used in web development?",
        answers: [
            { text: "PHP", correct: false },
            { text: "Ruby", correct: false },
            { text: "Java", correct: false },
            { text: "HTML", correct: true },

        ]
    }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();

}

// Show Questions

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
        question;

    //show answers

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);

    });
}

// Remove all the previous answers.

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;

    }
    else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";

}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "play Again";
    nextButton.style.display = "block";
}

function handledNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handledNextButton();
    }
    else {
        startQuiz();
    }
});
startQuiz();

