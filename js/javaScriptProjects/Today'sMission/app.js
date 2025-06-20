const { createElement } = require("react");

const checboxList = document.querySelectorAll('.checbox')
const allInput = document.querySelectorAll('.mission-input')
const progressBar = document.querySelector('.progress-value')
let isInputFiled = false;


checboxList.forEach((chebox) => {
    chebox.addEventListener('click', (e) => {

        isInputFiled = [...allInput].every((input) => {

            return input.value
        })
        if (isInputFiled) {
            chebox.parentElement.classList.toggle('completed')

            if (chebox.parentElement.className == 'mission-con') {

                chebox.nextElementSibling.disabled = false
                chebox.nextElementSibling.style.cursor = 'auto'

                progressBar.firstChild.style.display = 'block'

                allMission[chebox.nextElementSibling.id]['completed'] = false
                localStorage.setItem('allMission', JSON.stringify(allMission))







            } else {

                chebox.nextElementSibling.disabled = true
                chebox.nextElementSibling.style.cursor = 'auto'


                progressBar.firstChild.style.display = 'block'

                allMission[chebox.nextElementSibling.id]['completed'] = true
                localStorage.setItem('allMission', JSON.stringify(allMission))



            }
            setProgress()


        } else {
            console.log('errror');

        }



    })
})



const allMission = JSON.parse(localStorage.getItem('allMission')) || {}


allInput.forEach((input) => {



    if (allMission[input.id]) {
        input.value = allMission[input.id]['missionName']


    }

    input.addEventListener('input', (e) => {
        allMission[input.id] = {
            missionName: e.target.value,
            completed: false
        }
        localStorage.setItem('allMission', JSON.stringify(allMission))


    })
})


function setProgress() {
    let comTask = 0
    let progressNUm = 0;
    let progressVlues = [
        allMission['first']['completed'],
        allMission['second']['completed'],
        allMission['third']['completed']
    ]
    comTask = progressVlues.filter((value) => {

        return value
    })
    comTask.forEach((e) => {
        progressNUm = progressNUm + 1
    })
    progressBar.firstChild.innerText = `${progressNUm}/3 completed`
    progressBar.style.width = `${progressNUm * 33.33}%`
    if (progressNUm === 0) {
        progressBar.firstChild.style.display = 'none'
    }






}





function saveCheckboxes2() {
    allInput.forEach((input) => {
        if (allMission[input.id]['completed']) {
            input.parentElement.classList.add('completed')
        }

    })

}
setProgress()
saveCheckboxes2()

// function saveCheckboxes() {

//     checboxList.forEach((chebox) => {

//         let classValue = chebox.parentElement.className

//         console.log(chebox.parentElement.className == classValue);
//         if (classValue) {
//             chebox.parentElement.classList.add('completed')
//         } else {
//             chebox.parentElement.classList.remove('completed')

//         }


//     })
// }




















// let hi = createElement('button','hi')



























// allInput.forEach((input) => {
//     let inputResutl = true
//     input.addEventListener('input', (e) => {

//         inputResutl = [...allInput].every((input) => {
//             console.log(input.value == '');

//             return input.value === ''
//         })
//         console.log(inputResutl);
//         if (!inputResutl) {
//             checboxList.forEach((chebox) => {
//                 chebox.addEventListener('click', (e) => {
//                     chebox.parentElement.classList.toggle('completed')

//                 })
//             })
//         } else {
//             console.log('set all goal')
//         }
//     })





// })
