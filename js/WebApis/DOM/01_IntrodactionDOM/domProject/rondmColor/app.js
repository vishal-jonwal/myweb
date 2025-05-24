setInterval(()=>{
    let r = Math.floor(Math.random()*255)
    let g = Math.floor(Math.random()*255)
    let b = Math.floor(Math.random()*255)



    document.querySelector('.color-con').style.backgroundColor = `rgb(${r},${g},${b})`
    document.querySelector('.color-con').style.borderColor = `rgb(${r +50},${g+50},${b+50})`
    document.querySelector('.color-con').innerHTML = `rgb(${r},${g},${b})`
},1000)


