
// debugger
function changeImgOne() {
    document.body.children[3].src = 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*kxBdslclglg4zgCw0NMIIA.png'
}

function changeImgTwo() {
    document.body.children[4].children[2].children[4].src = 'https://picperf.io/https://laravelnews.s3.amazonaws.com/featured-images/tailwind-v4-featured.png'
}

function removeImgTwo() {
    document.body.children[4].children[2].children[4].src =
        'http://127.0.0.1:5501/js/WebApis/DOM/IntrodactionDOM/images/css.png'
}

function removeImgOne() {
    document.body.children[3].src =
        'http://127.0.0.1:5501/js/WebApis/DOM/IntrodactionDOM/images/html-css-javascript.png'
}

function changeTitle(myTitle) {
    // let myTitle = prompt('Eenter New Title!')
    document.body.children[0].innerText = myTitle

}
function removeTitle(myName) {
    document.body.children[0].innerText = 'Frondend Development'
    return myName
}



// acees Element 
const allImges = document.querySelectorAll('img')
const imgesUrl = [
    'https://toneopfit.com/_next/image?url=https%3A%2F%2Ftoneopfit-strapi-prod.s3.ap-south-1.amazonaws.com%2FMindfulness_Meditation_For_Beginners_Find_Calm_In_The_Chaos_b7ebf901b8.jpg&w=2048&q=75',
   'https://toneopfit.com/blog/IBW.png',
    'https://www.vecteezy.com/photo/38941682-ai-generated-tranquil-zen-garden-at-dawn'
]
allImges.forEach((img,index)=>{
    img.src = imgesUrl[index]
})
