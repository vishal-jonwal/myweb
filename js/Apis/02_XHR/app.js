const xhr = new XMLHttpRequest()
console.log(xhr);
xhr.responseType = 'json'
xhr.open('GET', 'https://dog.ceo/api/breeds/image/random')
xhr.send()
setTimeout((e) => {
    document.querySelector('img').src = xhr.response.message
}, 4000)

document.querySelector('button').addEventListener('click', (e) => {
    xhr.open('GET', 'https://dog.ceo/api/breeds/image/random')
    xhr.send()
    setTimeout((e) => {
        document.querySelector('img').src = xhr.response.message
    }, 4000)
})
