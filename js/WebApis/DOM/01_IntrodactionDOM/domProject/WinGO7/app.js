
// debugger
const ul = document.body.children[1]
console.log(ul);

// setInterval(() => {

//     let randomNUm = Math.ceil(Math.random() * 2)
//     randomNUm === 1 ?
//         document.body.children[0].innerText = 'Small': document.body.children[0].innerText = 'Big'

// }, 1000
// )
setInterval(() => {
let li = document.createElement('li')

    let randomNUm = Math.ceil(Math.random() * 2)
    if(randomNUm === 1){
        document.body.children[0].innerText = 'Small'
        li='Small'
        ul.append(li)
        
        
    }else{
        document.body.children[0].innerText = 'Big'

    }
 }, 1000
)