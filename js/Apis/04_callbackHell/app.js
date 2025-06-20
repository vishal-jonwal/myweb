




function makeHtppRequest(method, url, callback) {

    const xhr = new XMLHttpRequest()

    xhr.responseType = 'json'
    xhr.addEventListener('load', () => {

        callback(xhr.response)

    })
    xhr.open(method, url)
    xhr.send()
}
makeHtppRequest('GET', "https://fortnite-api.com", (date) => {
    console.log(data);
})
//  makeHtppRequest('GET', 'https://dummyjson.com/users/1')