const minBtn = document.querySelector('#min-btn')
const addBtn = document.querySelector('#add-btn')
const restBtn = document.querySelector('#rest-btn')
const input = document.querySelector('input')
const result = document.querySelector('.resutl-display')

let counter = 0

minBtn.addEventListener('click', (e) => {
    counter = counter - input.valueAsNumber
    result.innerText = counter
})
addBtn.addEventListener('click', (e) => {
    counter = counter + input.valueAsNumber
    result.innerText = counter
})

restBtn.addEventListener('click', (e) => {
    counter = 0
    result.innerText = counter
})






// anurag's code

/*
minBtn.addEventListener('click', (e) => {
    const countvalue = parseInt(resutldisplay.innerText)
    const changeValue = parseInt(input.value)
    resutldisplay.innerText = countvalue - changeValue
})
addBtn.addEventListener('click', (e) => {
    const countvalue = parseInt(resutldisplay.innerText)
    const changeValue = parseInt(input.value)
    resutldisplay.innerText = countvalue + changeValue
})
restBtn.addEventListener('click',(e)=>{
    resutldisplay.innerText = 0
})
*/
   

