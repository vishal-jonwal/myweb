
// const h1 = document.querySelector('h1')

// // h1.onclick = sayHi;
// // h1.onclick = ()=>{
// //     console.log('hello');
// // };



// function sayHi(){
//     console.log('hi');
// }





// // Thard way to listen Event
// h1.addEventListener('click',sayHi)

// h1.addEventListener('click',()=>{
//     console.log('hello');
// })

// // task
// const card = document.querySelector('.card')
// card.addEventListener('click',function (){
//     card.style.color='green'
//     console.log('task is done.');
// })


// add new card task
let countCard = 1;
const card = document.querySelector('.card')
const body = document.querySelector('.card-con')
card.addEventListener('click',()=>{
    // let newCard = document.createElement('div')
    let newCard = card.cloneNode()
    // newCard.classList.add('card')
    newCard.classList.remove('addBtn')
    console.log(newCard);

    newCard.innerText = countCard++
    // countCard++  //post increament
    body.append(newCard)
    

    console.log('newCard added!');
})

