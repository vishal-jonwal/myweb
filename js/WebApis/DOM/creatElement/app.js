// for (let i = 1; i <= 100; i++) {
//     const img = document.querySelector('img').cloneNode(true)
//     img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/${i}.png`
//     const body = document.body
//     body.appendChild(img)
// }

for (let i = 1; i <= 10000; i++) {
    const img = document.createElement('img')
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/${i}.png`
    const body = document.body
    body.appendChild(img)
}