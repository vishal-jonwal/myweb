let startinMin = 0.50
let timer = startinMin * 60
const showTimer = document.querySelector('.timer')


let id = setInterval(updateTimer, 1000)
function updateTimer() {
    let min = Math.floor((timer / 60))
    let seconds = Math.floor(timer % 60)
    console.log(min, seconds);
    showTimer.innerText = `${seconds}`

    timer--
    if (seconds <= 0) {
        showTimer.innerText = `0`

        clearInterval(1)
        // id = setInterval(updateTimer, 1000)


    }
    return
}
