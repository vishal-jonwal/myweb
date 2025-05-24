// date : 6/may/25
// lect notes
// syntax 
// resuseable piece of code 
// 1. result and print is diffent
// 2. return value

// function Defination
// username is variable scope
// defalut value username = 'harry' 

// function introduceMe(username = 'harry', proffesion = 'student', age = 17) { // parameter
//     console.log('hi');
//     console.log(`my name is ${username}.`); //username || 'harry'
//     console.log(`i am a ${proffesion}.`);
//     console.log(`i am ${age} years old`);

// }
//           function Call 
// let result = introduceMe()
// introduceMe('vishal', 'Youtuber') // agruments
// introduceMe('akash') 

// ------------------------------------------------------------------------------------------------------------------------------------------------


// console.log('hello')
// console.log('i am vishal')
// console.log('i am a creator')
// console.log('----------------------------------------------------')
// console.log('hello')
// console.log('i am vishal')
// console.log('i am a creator')
// console.log('----------------------------------------------------')

// console.log('hello')
// console.log('i am vishal')
// console.log('i am a creator')
// let user1 = 'mauli'
// let user2 = 'rushikesh'
// for (let i = 0; i < 3; ++i) {
//     console.log('hello')
//     console.log(`i am ${user1} `)
//     console.log('i am a creator')
//     console.log('----------------------------------------------------')
// }

// for (let i = 0; i < 3; ++i) {
//     console.log('hello')
//     console.log(`i am ${user2} `)
//     console.log('i am a creator')
//     console.log('----------------------------------------------------')
// }

// function userIntriducetion (name = 'vishal jonwal'){
//     console.log('hello')
//     console.log(`i am  ${name}`)
//     console.log('i am a creator')
//     return 'functionn'
// }
//  userIntriducetion()
//  userIntriducetion()
//  userIntriducetion('mauli')

// function add(){
//     return 'add funtion'
// }
// function sumOfTwoNumber (a,b){
// return add.name
// }


// let result = sumOfTwoNumber(15,5)
// console.log(result)


// sum of two number

// function addNumber (a,b){
//     let sum = a+b
//     return sum
// }

// console.log(addNumber('vishal',17))

// check even if not return fasle

// function isEven (num){
//     let ifOdd = true
//     if(num % 2 === 0){
//         console.log(`${num} is even num`)
//         ifOdd = false
//     }
//     if(ifOdd){
//         console.log(`false`)
//     }
//     return num
// }


// isEven(345)



// find largest num in Array

// let numbers = [2, 5, 7, 2, 7,]
// let array2 = [927896,9298759,932507,5829]
// function foundLargestNumber (numbers){
//      let max = 0
//     for(let i = 0; i<numbers.length - 1; ++i){

//         if(numbers[i]>numbers[i+1]){
//             max = numbers[i]
//         }else{
//             max = numbers[i+1]
//         }
//     }
//     return max
// }
// let result1 = foundLargestNumber(numbers)
// let result2 = foundLargestNumber(array2)

// stirng revsere

// function revsereName(name) {
//     let revsereName = ''
//     for (let i = name.length - 1; i >= 0; i--) {
//         // console.log(name[i])
//         revsereName = revsereName + name[i]
//     }
//     console.log(revsereName)
//     return revsereName
// }



// let result = revsereName(prompt())

//
// call back funtion
//my own
// function addNumber (a,b){
//     let sum = a+b
//     return sum
// }
// function subNumber (a,b){
//     let mines = a-b
//     return mines
// }
// function applyOperation(a,b,operation){
//     // let ans = [operation(a,b),subNumber(a,b)]
//     let ans =  operation(a,b)
//     return ans

// }
// let result = applyOperation(4,2,subNumber)
// console.log(result);
// by chatgpt
// function add (a,b){
//     return a+b
// }
// function subtract (a,b){
//     return a-b
// }
// function multiply (a,b){
//     return a*b
// }

// function applyOperation(a,b,operation){
//     return operation(a,b)
// }




//practice 6/may/25

// 1.greet function
// function greet(username) {
//     console.log(`Hello ${username}!`)
// }

// greet(true)
// greet('atul')


// date 7/may/25

// 2. What is the output of the following code?
// console.log(typeof null) // object

// 3. How can you find the length of a string and convert it to uppercase?
// Example: "hello world"
// const str = 'hello world'
// console.log(str.length)
// console.log(str.toLocaleUpperCase())


//4.  Write a for loop that prints all even numbers from 1 to 10.

// let num = 1
// while (num<=10){
//     console.log(`num : ${num}`)
//     num+=1 
//    //num = num + 1 // num++ 
// }

// 5.imp Create an object called person with name, age, and a method called greet() that prints "Hello, my name is [name]".
// debugger
// const person1 = {
//     name : 'vishal',
//     age : 21,
//     greet(greetName){
//         console.log(`Hello, my name is ${this.name}`)

//     }
// }

// console.log(person1.greet('dk'))

//6.imp What is the difference between a deep copy and a shallow copy in JavaScript?
// Try to show with an example using objects.


// const car = {
//     name: 'Mahindra',
//     modal: 'XUV700',
//     more : {
//         price : 122000
//     }
// }

// this is not shllaow copy this basic copy
// const car1 = car // in this case if you change value of car1 it even change car value too because there address is same

// shllaow copy
// two way to do  1. object.assign(value1,value2) car1 , car
// but doesn't works with nested object

//  let car1 =  {}
//  Object.assign(car1,car)
//  car1.modal = 'scorpio N'

// let car1 =  {...car}
// car1.modal = 'scorpio N'

// deep copy 

// const deep =  JSON.parse(JSON.stringify(car))
// const sC = structuredClone(car)

// 7 . Write a program that checks if a number is positive, negative, or zero using if...else if...else.

// let num = Math.floor(Math.random() * 101)
// // let num =0
// // let num = -1

// if (num > 0) {
//     console.log('postive Num')
// } else if (num<0){
//     console.log('negative Num')

// } else{
//     console.log('zero Num')

// }

// console.log(num)

// 8 .Operators
// What is the result of this expression?
// let x = 10;
// x += 5 * 2; // x = x + 5*2
// console.log(x)
// // 20

// 9 genrate random number 1 to 10
// let randomNum = Math.random()*10 + 1

// 10 Write a function called add that takes two numbers and returns their sum.
// function add (a,b){
//     let sum = a + b
//     return sum
// }

// 11 Arrays Question
// Create an array of fruits and add a new fruit to the end. Then remove the first fruit.
// const fruits = ['mango','apple']
// fruits.push('orange') // add value from Array ending
// fruits.shift()// remove value form Array staring

// 12 Use the ternary operator to check if a number is even or odd.
// debugger
// let num = Math.floor(Math.random() * 100) + 1
// let result = num % 2 === 0? 'even' : 'odd'
// console.log(num)


