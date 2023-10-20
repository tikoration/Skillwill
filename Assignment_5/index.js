// Task 1

const task1 = document.createElement('h4')
task1.innerText = 'Task 1'

const divEl = document.createElement('div')
divEl.setAttribute("id", "secret-text")
divEl.innerText = "I am visible"

const btnEl = document.createElement("button")
btnEl.setAttribute("id", "showbtn")
btnEl.innerText = "Hide the text"

document.body.append(task1, btnEl, divEl)

btnEl.addEventListener("click", () => {
    divEl.remove()
})

// Task 2

const task2 = document.createElement('h4')
task2.innerText = 'Task 2'

const lotrCard = document.createElement('div')
lotrCard.setAttribute("id", "card")
const mainCharEl = document.createElement("h2")
mainCharEl.innerText = "Gendalf"

const link = document.createElement("a")
link.setAttribute("href","#")
link.innerText = "Go to profile"

lotrCard.append(task2, mainCharEl, link)
document.body.append(lotrCard)

// Task 3

const task3 = document.createElement('h4')
task3.innerText = 'Task 3'

// questions with their answers
const quiz = [
    {
        question: "How many colors are in a rainbow?",
        answers: {
            rightAns: "7", 
            answers: ["12", "5", "7", "3"]}
        },
    {
        question: "What is the capital city of Germany?",
        answers: {
            rightAns: "Berlin", 
            answers: ["Rome", "Berlin", "Paris", "Tbilisi"]} 
    }, {
        question: "Is cheese made out of milk?",
        answers: {
            rightAns: "Yes", 
            answers: ["Yes", "No"]}
    }
]

// creating div and h2 element for the whole quiz
const quizDiv = document.createElement("div")
const title = document.createElement('h1')
title.innerText = "Quizzlet"
quizDiv.setAttribute("id", "quiz-id")
quizDiv.appendChild(title)

// creating element for the points to count the score
const totalPoints = document.createElement('h2')
let points = 0
totalPoints.innerText = `Total Score: ${points}`

// looping over our quiz array with questions and 
// answers objects and creating h3 and button elements

quiz.forEach((section, index) => {
    const question = document.createElement("h3")
    question.innerText = section.question
    quizDiv.append(question)

    // seperate div for answers
    const ansDiv = document.createElement('div')
    quizDiv.append(ansDiv)

    // looping over each answer and creating
    // button element with a seperate id for each question section
    section.answers.answers.forEach(an => {
        const answer = document.createElement("button")
        answer.setAttribute("id", `answers-id${index}`)
        answer.innerText = an
        ansDiv.append(answer)

        // adding event listener for each button
        answer.addEventListener("click", ()=> {

            // disabling specific section buttons to not press more than one at a time 
            const sectionAnswers = document.querySelectorAll(`#answers-id${index}`)
            sectionAnswers.forEach(a => a.setAttribute('disabled','disabled'))
        
            // changing background color of the buttons accordingly
            // and adding points the total score
            if(an === section.answers.rightAns){
                answer.style.backgroundColor = "#769a6e"
                points++
                totalPoints.innerText = `Total Score: ${points}`
            } else {
                answer.style.backgroundColor = "#bc544b"
            }
        })
    })
})

quizDiv.appendChild(totalPoints)

document.body.append(task3, quizDiv)

