
// Some and Every  method

// 1.Some return true or false
// just one condtion need to true
// const EvenNum = [2,4,6,8,10,12]
// let resultE = EvenNum.some((num)=>{
//     console.log(num)
//     return num % 2 === 0
// })
// console.log(resultE)

// // 2. Every return true or false
// // just all condtion need to true
// let resultO = EvenNum.every((num)=>{
//     console.log(num)
//     return num % 2 === 0
// })
// console.log(resultO)



// --------------------------------------------------------------------------------------------------------


// Map, Filter and Reduce
// 1.Map return Array []


// 2.Filter return Array [] base on codition
// debugger
// const months = [
//     "January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"
// ];
// my ans
// let MletterMonths = months.filter( (month)=>{

//     for (const letter of month) {
//         if(letter === 'm' || letter === 'M'){
//             return month
//         }
//     }

// })
// anurag ans
// let FilterMonths = months.filter((month)=>{
//     return month.toLocaleLowerCase().includes('m')
// })
// console.log(FilterMonths)


// Q . assigment 
const students = [
  { name: "Aarav", age: 14 },
  { name: "Bhavya", age: 15 },
  { name: "Chetan", age: 16 },
  { name: "Divya", age: 17 },
  { name: "Eshan", age: 18 },
  { name: "Farah", age: 19 },
  { name: "Gaurav", age: 20 },
  { name: "Harsha", age: 21 },
  { name: "Ishita", age: 22 },
  { name: "Jay", age: 23 },
  { name: "Kiran", age: 24 },
  { name: "Lakshmi", age: 25 },
  { name: "Manav", age: 26 },
  { name: "Nikita", age: 27 },
  { name: "Om", age: 28 },
  { name: "Pooja", age: 29 },
  { name: "Ravi", age: 30 },
  { name: "Simran", age: 16 },
  { name: "Tanmay", age: 18 },
  { name: "Vidya", age: 20 }
];
let adultStudets = students.filter((student,i)=>{
    console.log(students[i].age > 18)
    return  students[i].age > 18
})
// 3.Reduce


