const input = document.querySelector('input')


// input.addEventListener('click',()=>{
//     console.log('input clicked!')
// })
// input.addEventListener('dblclick',()=>{
//     console.log('input dblclicked!')
// })

// input.addEventListener('input',(e)=>{
//     console.log(e.target.value);
//     document.querySelector('p').innerText = e.target.value
//     // console.log('input event fire!')
// })
// input.addEventListener('change',(e)=>{
//     console.log(e.target.value);
//     document.querySelector('p').innerText = e.target.value
//     // console.log('input event fire!')
// })


// input.addEventListener('focus',(e)=>{
//     console.log(e.type);

//     document.querySelector('p').innerText = e.target.value
//     // console.log('input event fire!')
// })
// input.addEventListener('blur',(e)=>{
//     console.log(e.type);

//     document.querySelector('p').innerText = e.target.value
//     // console.log('input event fire!')
// })



// form event

// const form = document.querySelector('form')
// form.addEventListener('submit',(e)=>{
//     e.preventDefault()
//     console.log('sumbit');
    
// })
const form = document.querySelector('form')
form.addEventListener('click',(e)=>{
    e.preventDefault()
    console.log(e.target);
    console.log(e.currentTarget);
    // console.log('sumbit');
    
})