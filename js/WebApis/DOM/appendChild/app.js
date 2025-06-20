const container = document.querySelector(".container")
const card = document.querySelector('.card')



for (let i = 2; i <= 100; i++) {
    let newCard = card.cloneNode(true)
    newCard.innerText = i
    container.appendChild(newCard)
}

// Element.append() allows you to also append strings, whereas Node.appendChild() only accepts Node objects.
// Element.append() has no return value, whereas Node.appendChild() returns the appended Node object.
// Element.append() can append several nodes and strings, whereas Node.appendChild() can only append one node.

// const h1 = document.querySelector('h1')
// const container = document.querySelector(".container")
// const card = document.querySelector('.card')

// container.appendChild(h1)
// container.appendChild(h1.cloneNode(true))

// for (let i = 2; i <=100; i++) {
//     const newCard = card.cloneNode()
//     newCard.innerText = i
//     container.append(newCard)
// }
