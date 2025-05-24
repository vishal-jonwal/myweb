

// const students = [
//     { name: "John", scores: [85, 90, 78] },
//     { name: "Alice", scores: [99, 99, 95] },
//     { name: "Bob", scores: [90, 99, 80] },
//     { name: "David", scores: [88, 82, 91] },
//     { name: "Eva", scores: [95, 93, 97] },
//     { name: "Sam", scores: [72, 78, 85] }
// ]

// function checkTopper(students){

//     let top = 0
//     let topperName = ''
//     for (let i = 0; i < students.length-1; ++i) {

//       if(students[i].average>students[i+1].average){
//         top = students[i].average
//         topperName = students[i].name
//       }else{
//         top = students[i+1].average
//         topperName = students[i+1].name
//       }


// }
// console.log(`topper ${topperName} congratucation for ${top} % in exam.`)
// }


// // average 
// function average(scoreAve, i) {
//     students[i].average = Math.ceil(scoreAve)
//     // console.log(students[i])
// }

// calculateAverage(students)
// //calculateAverage score mark
// function calculateAverage(students) {
//     let sum = 0
//     let scoreAve = 0
//     for (let i = 0; i < students.length; ++i) {
//         students[i].scores.forEach(score => {
//             sum += score
//             //sum = sum + score
//         })
//         scoreAve = sum / 3
//         average(scoreAve, i)
//         scoreAve = 0
//         sum = 0
//     }
// }

// checkTopper(students)


// -------------------------------------------------------------------------------------------------------------------------

// Question: Library Book Tracker

// Create a function called getAverageRating(book) that returns the average rating of a single book.
// Loop through the array of books and add an averageRating property to each book using the function.
// Create another function called getTopRatedBook(books) that returns the book with the highest average rating.
// debugger

// const books = [
//     { title: "The Alchemist", author: "Paulo Coelho", ratings: [5, 4, 5, 3] },
//     { title: "Atomic Habits", author: "James Clear", ratings: [5, 5, 4, 5] },
//     { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", ratings: [4, 4, 4, 4] }
// ];

// // giving average Rating and also add average rating propety in array
// function getAverageRating(book) {
//     for (let i = 0; i < book.length; i++) {

//         let sum = 0
//         let scoreAve = 0

//         book[i].ratings.forEach(score => {
//             sum += score
//         })

//         scoreAve = sum / book[0].ratings.length
//         book[i].averageRating = scoreAve
//     }


// }
// getAverageRating(books)

// // get top rating book 

// function getTopRatedBook(book) {
//     debugger
//     let result = ''

//   for(let key = 0 ; key <book.length ; key++){
//     if (book[ parseInt(key)].averageRating > book[parseInt(key) + 1].averageRating) {
//         result = `${book[parseInt(key)].title} is book have top rating : ${book[parseInt(key)].averageRating}`
//     } else {
//         result = `${book[parseInt(key) + 1].title} is book have top rating : ${book[parseInt(key) + 1].averageRating}`
//     }
//   }

//     console.log(result)
// }

// getTopRatedBook(books)


// Q : make arrow function expression 
// make add  arrow function expression  just in line

// let add = (a,b) => a+b // no need Return keyword
// add(5,19)


// date : 13-may-25
//Q 1. Write a program that uses forEach to print each item in the array:
// debugger
// const fruits = ["apple", "banana", "mango"]

// fruits.forEach(function(index,el){
//     console.log(el,index)
// })

// for(let i = 0; i<fruits.length; i++){
//     console.log(fruits[i])
// }

// for(let fruit of fruits){
//     console.log(fruit)
// }

// Q 2. Use forEach to calculate and print the square of each number:
// const numbers = [2, 4, 6, 8]
// let squareNUmber = []
// numbers.forEach((num)=>{
//     console.log(`${num} num : square ${num*num}`);
//     return squareNUmber.push(num*num)
// })
// console.log(squareNUmber)

// debugger
// function squareRoot(numbers){
//     for(let square of numbers){
//         console.log(square*square)
//          return 'succesful'
//     }

// }
// let result = squareRoot([2, 4, 6, 8])
// console.log(result)

// Q 3. What is the difference between forEach and for loop in JavaScript?

// 1. forEach is the method and for of is loop 
// 2. forEach give prameter like element and index but in for of just element
// 3. forEach is good to use except anonomys function or normal fucntion


// Q 4. Modify the following code using forEach:
// const colors = ["red", "blue", "green"]

// for (let i = 0; i < colors.length; i++) {
//     console.log(colors[i]);
// }
// debugger
// colors.forEach( element => console.log(element) )


// Q 5.Convert this normal function into an arrow function:

// function add(a, b) {
//   return a + b
// }
// console.log(add(1,2))

// const newAdd = (a,b)=>{
//   return a + b

// }

// console.log(newAdd(3,4))

// Q 6. Write an arrow function that takes a name and returns "Hello, [name]".
// const sayHi = (name) =>{ console.log(`"Hello, ${name}`)}

//  Create an array of numbers and use map with an arrow function to return their cubes.
// let numbers =  [2, 4, 6, 8]
// let cube = numbers.map((num)=>{
//     console.log(num)
//     return num**3
// })
// console.log(cube);

// let numbers = [2, 4, 6, 8];

// let cube = numbers.map(num => num ** 3);



// Q 7. Fix the error in this arrow function:
// const greet = name => {
//   return "Hello " + name;
// }
//  no error this is the vaild code

// Q 8.Use map() to convert an array of numbers into an array of their doubles:
// const nums = [1, 2, 3, 4];
// let doubleNums = nums.map((num)=>{
//     return num + num
// })
// console.log(doubleNums)

// Q 9.Write code that uses map() to create an array of the lengths of each word:
// const words = ["sun", "moon", "star", "earth"];

// const strLength = words.map((word) => {
//     return word.length
// })
// console.log(words);
// console.log(strLength)

// short version
// const strLength = words.map(word => word.length)

// Q 10. Use map() and an arrow function to capitalize all strings in an array:

// const items = ["pen", "book", "lamp"]
// const capitalize = items.map(item => item.toLocaleUpperCase())
// console.log(capitalize)

// const capitalizedFirst = items.map(item => item[0].toUpperCase() + item.slice(1));

// console.log(capitalizedFirst);
// Output: ["Pen", "Book", "Lamp"]

//  Q 11
// debugger
// function createTimers() {
//     for (var i = 1; i <= 3; i++) {
//         setTimeout(function timer() {
//             console.log('Timer:', i);
//         }, i * 100);
//     }

//     var i = 0;
//     console.log('After loop, i =', i);
// }

// createTimers();
// wron answer
//  After loop, i = 0
// 'Timer:', 1
// 'Timer:', 2
// 'Timer:', 3
// right answer 
// After loop, i = 0
// 'Timer:', 0
// 'Timer:', 0
// 'Timer:', 0
// debugger
// const users = [
//   { name: 'Alice', delay: 100 },
//   { name: 'Bob',   delay: 200 },
//   { name: 'Carol', delay: 300 }
// ];

// function greetAll() {
//   for (const user of users ) {
//     setTimeout(() => {
//       console.log(`Hello, ${user.name}!`);
//     }, user.delay);
//   }
//   console.log('Greetings scheduled');
// }

// greetAll();

// debugger
// const users = [
//   { name: 'Alice', delay: 100 },
//   { name: 'Bob',   delay: 200 },
//   { name: 'Carol', delay: 300 }
// ];

// function greetAll() {
//   for (var i = 0; i < users.length; i++) {
//     const idx = i
//     setTimeout(() => {
//       console.log(`Hello, ${users[idx].name}!`);
//     }, users[idx].delay);
//   }
//   console.log('Greetings scheduled');
// }

// greetAll();




// for (var i = 0; i < users.length; i++) {
//   let idx = i;                       // new `idx` for each iteration
//   setTimeout(() => {
//     console.log(`Hello, ${users[idx].name}!`);
//   }, users[idx].delay);
// }


// (function() {
//   console.log('1:', a);

//   setTimeout(() => {
//     console.log('2: timeout →', a);
//   }, 0);

//   var a = 5;

//   console.log('3: after init →', a);
// })();


// 17 - may -25
// Create an object called person with properties: name, age, and city.

// const person = {
//   name: 'vishal',
//   age: 21,
//   city: 'Sambhajinager sp Ranjanva'
// }
// console.log(person)
// modify 
// debugger
// const car = { 
//   brand: "Toyota", year: 2020 
// }
// // ans
// car['year'] = 2022
// car.color = 'red'
// console.log(car)


// print all key

// function printAll(car){
//   console.log(car.brand)
//   console.log(car.year)
// }
// printAll()
// ans right
// for (let val in car) {
//   console.log(car[val])
//   console.log(car.val)
// }
