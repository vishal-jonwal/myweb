const input = document.querySelector('input')
const sumbitBtn = document.querySelector('.submit')
const startBtn = document.querySelector('.start-new')
const outputMessage = document.querySelector('.output-message')
const outputs = document.querySelector('.outputs')

// startBtn.disabled = true
let randomNum = Math.floor(Math.random() * 101)
let round = 0

sumbitBtn.addEventListener('click', (e) => {
    if (input.value && input.value < 101) {
        console.log('random Number : ', randomNum);
        console.log('enter Number : ', input.value);
        if (input.value > randomNum) {
            outputMessage.innerText = `Too high!`
        } else if (input.value < randomNum) {
            outputMessage.innerText = `Too low!`
        } else {
            outputMessage.innerText = `You got it! Congrats`
        }
        outputMessage.style.display = 'block'
        outputs.style.display = 'block'
        outputs.innerText = `${outputs.innerText} ${input.value}, `
        round++
        if (round == 10 || randomNum == input.value) {
            stopGame()
        }
    }

    input.value = ''

})


function stopGame() {
    sumbitBtn.disabled = true
    startBtn.disabled = false

}

startBtn.addEventListener('click', (e) => {
    sumbitBtn.disabled = false
    startBtn.disabled = true
    randomNum = Math.floor(Math.random() * 101)
    outputMessage.style.display = 'none'
    outputs.style.display = 'none'
    outputs.innerText = `Your guesses :`
    round = 0
    input.value = ''



})

