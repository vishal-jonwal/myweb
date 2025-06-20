const body = document.querySelector('body')
const questionCon = document.querySelector('.question-area')
const allInputs = document.querySelectorAll('.option')
const nextBtn = document.querySelector('.next-btn')
const restult = document.querySelector('.result-con')
const appCon = document.querySelector('app-con')
const timerCon = document.querySelector('.timer')
let questionNum = -1
let rightAnswer = 0

var BGM = new Audio('BGM.mp3');
var winMusic = new Audio('win.mp3')
var loseMusic = new Audio('lose.mp3')
var winner = new Audio('winning-218995.mp3')

document.addEventListener('click', () => {
    BGM.play()
})

// const allQuestion  = localStorage.setItem('allQuestion', JSON.stringify(allQuestion))
const allQuestion = [
    {
        question: 'How to add an image in HTML?',
        optiops: ['<image>', '<png>', '<img>', '<pic>'],
        answer: '<img>'
    },
    {
        question: 'Which display property is used for layout?',
        optiops: ['self-align', 'flex', 'none', 'block'],
        answer: 'flex'
    },
    {
        question: `If we don't assign any value to a variable, what is the default value?`,
        optiops: ['undefined', 'null', 'number', 'true'],
        answer: 'undefined'
    },
    {
        question: 'What tag is used to create a link in HTML?',
        optiops: ['<a>', '<link>', '<href>', '<url>'],
        answer: '<a>'
    },
    {
        question: 'Which CSS property is used to change text color?',
        optiops: ['background', 'font-style', 'color', 'text-decoration'],
        answer: 'color'
    },
    {
        question: 'How do you declare a JavaScript variable?',
        optiops: ['var myVar;', 'variable myVar;', 'v myVar;', 'int myVar;'],
        answer: 'var myVar;'
    },
    {
        question: 'Which HTML tag is used to make text bold?',
        optiops: ['<bold>', '<strong>', '<bld>', '<b>'],
        answer: '<b>'
    },
    {
        question: 'What is the correct way to comment in CSS?',
        optiops: ['// comment', '<!-- comment -->', '# comment', '/* comment */'],
        answer: '/* comment */'
    },
    {
        question: 'Which keyword is used to define a constant in JavaScript?',
        optiops: ['var', 'let', 'const', 'define'],
        answer: 'const'
    },
    {
        question: 'Which HTML element is used to create a list with bullets?',
        optiops: ['<ul>', '<ol>', '<li>', '<list>'],
        answer: '<ul>'
    },
    {
        question: 'What does CSS stand for?',
        optiops: ['Color Style Sheets', 'Cascading Style Sheets', 'Creative Style System', 'Coded Style Syntax'],
        answer: 'Cascading Style Sheets'
    },
    {
        question: 'How do you call a function in JavaScript?',
        optiops: ['call functionName;', 'functionName();', 'call.functionName()', 'run functionName'],
        answer: 'functionName();'
    },
    {
        question: 'Which attribute is used to define inline CSS in HTML?',
        optiops: ['css', 'style', 'class', 'font'],
        answer: 'style'
    },
    {
        question: 'How can you include JavaScript code in HTML?',
        optiops: ['<js>', '<script>', '<javascript>', '<code>'],
        answer: '<script>'
    },
    {
        question: 'What symbol is used for ID selectors in CSS?',
        optiops: ['.', '#', '*', '$'],
        answer: '#'
    },
    {
        question: 'Which method converts a string to an integer in JavaScript?',
        optiops: ['parseInt()', 'parse()', 'int()', 'toInt()'],
        answer: 'parseInt()'
    },
    {
        question: 'Which HTML tag is used to define a table?',
        optiops: ['<tbl>', '<table>', '<t>', '<data>'],
        answer: '<table>'
    },
    {
        question: 'Which CSS property controls the size of text?',
        optiops: ['font-size', 'text-style', 'font-weight', 'text-size'],
        answer: 'font-size'
    },
    {
        question: 'What will `typeof null` return in JavaScript?',
        optiops: ['null', 'undefined', 'object', 'string'],
        answer: 'object'
    },
    {
        question: 'How to center a div using flexbox?',
        optiops: ['justify-content: middle;', 'align-items: center;', 'justify-content: center;', 'margin: auto;'],
        answer: 'justify-content: center;'
    },
    {
        question: 'How do you write a single-line comment in JavaScript?',
        optiops: ['<!-- comment -->', '// comment', '# comment', '** comment **'],
        answer: '// comment'
    },
    {
        question: 'Which HTML tag defines the largest heading?',
        optiops: ['<h6>', '<h3>', '<h1>', '<head>'],
        answer: '<h1>'
    },
    {
        question: 'Which function adds an element at the end of an array?',
        optiops: ['push()', 'add()', 'append()', 'insert()'],
        answer: 'push()'
    },
    {
        question: 'Which property is used to make text italic in CSS?',
        optiops: ['font-style', 'font-weight', 'text-decoration', 'italic'],
        answer: 'font-style'
    },
    {
        question: 'How can you apply the same style to multiple elements in CSS?',
        optiops: ['Using commas', 'Using semicolon', 'Using colon', 'Using asterisk'],
        answer: 'Using commas'
    }
];



restult.innerText = `${(questionNum) + 2}/${allQuestion.length}`


let startinMin = 0.34
let timer = startinMin * 60
const showTimer = document.querySelector('.timer')

chagneQuestion()
function chagneQuestion() {
    timer = startinMin * 60
    

    if (questionNum => 0 && questionNum <= allQuestion.length) {
        newQuestionStyel()

    }
    if (questionNum < allQuestion.length) {
        allInputs.forEach((input, i) => {

            input.innerText = allQuestion[questionNum].optiops[i]
            // input.innerText = localStorage.getItem(allQuestion[questionNum].optiops[i])
            questionCon.innerText = allQuestion[questionNum].question

        })
    }





}



allInputs.forEach((input) => {
    input.addEventListener('click', (e) => {

        if (allQuestion[questionNum].answer == e.target.innerText) {
            e.target.style.border = '2px solid green'
            winMusic.play()
            rightAnswer++

        } else {
            e.target.style.border = '2px solid red'
            loseMusic.play()
        }

        showrightAnswer()
    })

})

function showrightAnswer() {
    allInputs.forEach((input) => {
        if (allQuestion[questionNum].answer == input.innerText) {

            input.style.border = '2px solid green'
        }
        input.disabled = true
    })

}


function newQuestionStyel() {
    allInputs.forEach((input) => {
        input.style.border = '2px solid black'
        input.disabled = false

    })
    ++questionNum
    if (questionNum < allQuestion.length) {


        restult.innerText = `${(questionNum) + 1}/${allQuestion.length}`

    }

    if (questionNum == allQuestion.length) {
        timer = startinMin * 60
        clearInterval(1)
        if (rightAnswer / allQuestion.length * 100 > 75) {
            winner.play()
            
        } else {
            winner.play()


        }

        // debugger
        document.querySelector('.question-area').style.display = 'none'
        document.querySelectorAll('.option').forEach((option) => {
            option.style.display = 'none'
        })
        document.querySelector('.next-btn').style.display = 'none'
        document.querySelector('.result-con').style.display = 'none'
        document.querySelector('.app-con').style.display = 'none'
        timerCon.style.display = 'none'
        document.querySelector('.yourScore').style.display = 'flex'
        document.querySelector('.green').style.width = `${rightAnswer / allQuestion.length * 100}%`
        document.querySelector('.green').innerText = `${rightAnswer / allQuestion.length * 100}%`
        // document.querySelector('.yourScore').innerText = `${rightAnswer}/${allQuestion.length}`
    }



}



nextBtn.addEventListener('click', chagneQuestion)














function updateTimer() {
    seconds = Math.floor(timer % 60)
    showTimer.innerText = `${seconds}`

    timer--



    if (seconds > 15) {
        // debugger
        timerCon.style.borderColor = '#0077ff'

        body.style.backgroundColor = '#50a3ff'
        questionCon.style.borderColor = '#0077ff'
        nextBtn.style.color = '#0077ff'
        questionCon.style.backgroundColor = '#50a3ff'
        // allInputs.forEach((input) => {
        //     input.style.borderColor = '#50a3ff'
        // })

    }
    if (seconds == 15) {
        // debugger
        timerCon.style.borderColor = '#825c18'
        body.style.backgroundColor = 'orange'
        questionCon.style.borderColor = '#825c18'
        nextBtn.style.color = '#825c18'
        questionCon.style.backgroundColor = 'orange'
        // allInputs.forEach((input) => {
        //     input.style.borderColor = 'orange'
        // })
    }
    if (seconds == 5) {
        timerCon.style.borderColor = '#bb1919'

        body.style.backgroundColor = 'red'
        questionCon.style.borderColor = '#bb1919'
        nextBtn.style.color = '#bb1919'
        questionCon.style.backgroundColor = 'red'
        questionCon.style.backgroundColor = 'red'
        // allInputs.forEach((input) => {
        //     input.style.borderColor = 'red'
        // })

    }
    if (seconds <= 0) {
        timer = startinMin * 60
        chagneQuestion()
        // showTimer.innerText = `0`
        // clearInterval(1)
    }


    return
}

let id = setInterval(updateTimer, 1000)
