// variable for timer (function set timeout)
// array of questions and answers
// function for what happens when you press the start button
// in order to save info use local storage
// 

var quizArray = [
    { q: "QUESTION 1", a: ["A","B","C","D"] },
    { q: "QUESTION 2", a: ["E","F","G","H"] },
    { q: "QUESTION 3", a: ["I","J","K","L"] },
    { q: "QUESTION 4", a: ["A","B","C","D"] },
    { q: "QUESTION 5", a: ["A","B","C","D"] }
];

var score = 0;
var turn = 0;

const startBtn = document.getElementById("startbtn");
const mainEl = document.getElementById("mainEl")
startBtn.addEventListener("click",startBtnClickHandler);

function startBtnClickHandler() {
    startBtn.style.display = "none"
    mainEl.appendChild(createQuestion(turn))
    turn++
}

function createQuestion(index) {
    const panel = document.createElement("div");
    const question = document.createElement("h3")
    const answers = document.createElement("ul")
    question.innerText = quizArray[index].q
    panel.appendChild(question)

    for (var i = 0; i < 4; i++) {
        const answer = document.createElement("li")
        answer.innerText = quizArray[index].a[i]
        answer.addEventListener("click", answerClickHandler)
        answers.appendChild(answer)
    }
    panel.appendChild(answers)

    return panel
}

function answerClickHandler() {
    mainEl.removeChild(mainEl.lastChild)
    mainEl.appendChild(createQuestion(turn))
    turn++
}









