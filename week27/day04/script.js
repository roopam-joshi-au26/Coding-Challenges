let questionBox = document.getElementById("question")
let optionsBox = document.getElementById("options")
let nextBtn = document.getElementById("next")

let questions;
let idx = 0;
let score = 0;
questionBox.innerText = "Getting Questions....."
getData()

Array.prototype.insert = function (item, before) {
    if (!item) return;
    if (before == null || before < 0 || before > this.length - 1) {
        this.push(item);
        return;
    }
    this.splice(before, 0, item);
}

async function getData() {
    let promise = await fetch("https://opentdb.com/api.php?amount=5")
    let response = await promise.json()
    get(response.results)
}

function get(q) {
    questions = q
    showQ(idx)
    nextBtn.style.display = "inline-block"
}

nextBtn.addEventListener("click", e => {
    if (nextBtn.innerText == "Play Again") {
        nextBtn.style.display = "none"
        nextBtn.innerText = "Next"
        idx = 0
        score = 0
        optionsBox.innerText = ""
        questionBox.innerText = "Getting new Questions....."
        getData()
        return
    }
    checkAnswer(idx)
    idx += 1
    if (idx == questions.length) {
        questionBox.innerHTML = ""
        optionsBox.innerHTML = ""
        optionsBox.innerHTML = `SCORE : ${score}`
        nextBtn.innerText = "Play Again"
    }
    else {
        showQ(idx)
    }
})

function checkAnswer(idx) {
    let options = document.querySelectorAll('input[name="option"]')
    let selectedValue;
    let correct = questions[idx].correct_answer
    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            selectedValue = options[i].value
        }
    }
    if (selectedValue == correct) {
        score += 1
    }
}

function showQ(idx) {
    let currQuestion = questions[idx].question
    let allAnswers = [...questions[idx].incorrect_answers]
    let correctAnswer = questions[idx].correct_answer
    let randomIdx = Math.floor(Math.random() * (allAnswers.length + 1))
    allAnswers.insert(correctAnswer, randomIdx)

    questionBox.innerHTML = currQuestion
    optionsBox.innerHTML = ""

    for (let i = 0; i < allAnswers.length; i++) {
        let option = allAnswers[i]
        optionsBox.innerHTML +=
            `<div class="my-3 optionBox">
            <input name="option" type="radio" class="me-2" value="${option}">
            <span>${option}</span>
        </div>`
    }
    let optionBox = document.querySelectorAll('.optionBox')
    let options = document.querySelectorAll('input[name="option"]')
    for (let i = 0; i < optionBox.length; i++) {
        optionBox[i].addEventListener("click", e => {
            options[i].checked = true;
            for (let j = 0; j < optionBox.length; j++) {
                optionBox[j].style.backgroundColor = ""
            }
            optionBox[i].style.backgroundColor = "rgba(0,0,0,0.15)"
        })
    }
}