
setInterval(() => {
    let randomNUm = Math.ceil(Math.random() * 3)
    document.body.children[0].children[0].src = `http://127.0.0.1:5501/js/WebApis/DOM/IntrodactionDOM/domProject/rondomImg/images/${randomNUm}.png`

},1000
)

