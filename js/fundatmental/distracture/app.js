// Destructuring in JavaScript is a feature that allows unpacking values from arrays or objects into distinct variables. It simplifies the process of extracting and assigning values from data structures. 



// const student = {
//     name : 'vishal',
//     age :21,
//     more : {
//         isPass : true
//     }
// }

// // console.log(student.name,student.age)
// const {name,age,more:{isPass}} = student

// console.log(name,age)
// function sayHi(name ,age, isPass){
//     console.log(`name : ${name}, age : ${age}. is Pass : ${isPass}`)
// }
// sayHi(name,age,isPass)





// String Destructuring
// One use for destructuring is unpacking string characters.

// Example
// Create a String
// let name = "W3Schools";

// // Destructuring
// let [a1, a2, a3, a4, a5] = name;
// for(let i = 1 ; i<6 ; i++){
//     let a  = 'a'
//     console.log(`${a+i}`)
// }

// let str = "Ashman"
// console.log(str[0])
// for (let i = 0; str < str.length; i++) {
//     console.log(str)
// }

// let str = "Ashman";
// for (let i = 0; i < str.length; i++) {
//   console.log(str[i])
// }

const colors = ['red', 'blue', 'black', 'yellow', 'pink' ]
const [color1, ,, color2] = colors