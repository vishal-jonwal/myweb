const nameInput = document.querySelector('#nameInput')
const myName = document.querySelector('.myName')
const ageInput = document.querySelector('#AgeInput')
console.log(ageInput);
const myAge = document.querySelector('.myAge')
const removeBtn = document.querySelector('.removeBtn')


// myName.innerText = localStorage.myName // access
// myName.innerText = localStorage.getItem('myName') 

// nameInput.addEventListener('input',(e)=>{
//     // localStorage.myName = e.target.value // update
//     localStorage.setItem('myName',e.target.value)
//     myName.innerText = localStorage.getItem('myName')  

// })

// myAge.innerText = localStorage.getItem('myAge') 

// ageInput.addEventListener('input',(e)=>{
//     // localStorage.myAge = e.target.value // update
//     localStorage.setItem('myAge',e.target.value)
//     myAge.innerText = localStorage.getItem('myAge')  

// })


const myData = JSON.parse(localStorage.getItem('myData')) || {}

if (myData.name) {
    myName.innerText = myData.name
}
if (myData.age) {
    myAge.innerText = myData.age
}
nameInput.addEventListener('input', (e) => {

    myData.name = e.target.value
    myName.innerText = myData.name
    localStorage.setItem('myData', JSON.stringify(myData))



})
ageInput.addEventListener('input', (e) => {
    myAge.innerText = e.target.value
    myData.age = e.target.value
    localStorage.setItem('myData', JSON.stringify(myData))

})
removeBtn.addEventListener('click', () => {
    myName.innerText = myData.name = ''
     myAge.innerText = myData.age = ''
    localStorage.clear()
})


