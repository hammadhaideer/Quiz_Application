const quizData = [
    {
        question: "What does HTML stand for?",
        options: ["1. Hyper Text Markup Language", "2. Hyperlinks and Text Markup Language", "3. Home Tool Markup Language", "4. Hyper Text Markup Leveler"],
        answer: "1"
    },
    {
        question: "What does CSS stand for?",
        options: ["1. Cascading Style Sheets", "2. Creative Style Sheets", "3. Computer Style Sheets", "4. Colorful Style Sheets"],
        answer: "1"
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        options: ["1. <scripting>", "2. <javascript>", "3. <script>", "4. <js>"],
        answer: "3"
    },
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const questionData = quizData[currentQuestion];

    questionElement.innerText = questionData.question;
    optionsElement.innerHTML = "";

    questionData.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option-btn');
        button.onclick = () => checkAnswer(option);
        optionsElement.appendChild(button);
    });

    document.getElementById('next-btn').disabled = true;
    document.getElementById('result').innerText = "";
}

function checkAnswer(selectedOption) {
    const questionData = quizData[currentQuestion];
    const selectedNumber = selectedOption.split('.')[0];
    if (selectedNumber === questionData.answer) {
        score++;
        document.getElementById('result').innerText = "Correct!";
    } else {
        document.getElementById('result').innerText = "Incorrect!";
    }

    document.getElementById('next-btn').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        document.getElementById('question').innerText = "Quiz completed!";
        document.getElementById('options').innerHTML = "";
        document.getElementById('result').innerText = `Your Score: ${score}/${quizData.length}`;
        document.getElementById('next-btn').style.display = 'none';
    }
}

loadQuestion();
