//An object is a collection of properties, and a property is an association between
//  a name (or key) and a value. A property's value can be a function, in which case 
// the property is known as a method. Objects in JavaScript, just as in many other
//  programming languages, can be compared to objects in real life.

// synatx
// const person = {} // empty object
// const person = { // key : value - pair
//     name : 'vishal',
//     age : 21
// }

// conditonal chain
// const person = { // key : value - pair
//     name : 'vishal',
//     age : 21,
//     moreDetails : {
//          isPass : true,
//          gfName : 'shevta'
//           
//      }
// }


// how to acess key 
// person['name'] // used brakect notation
// person.name // used dot notation


// how to add new keys 
// person.height = '5.1 inch'
// person['height'] = '5.1 inch'

// how to delete
// delete person.age


// adress never be same
// const user1 = {}
// const user2 = {}
// user1 === user2 
// output :- flase

// but in variable
// const suagrPrice = 40
// let 250gramchicken = 40
// suagrPrice === 250gramchicken 
// output :- ture

// in keyword
// 'age' in person
// return if key in person object
// output :- ture, if not return false.


// // freezone and seal 
// Object.freeze(): Makes an object immutable – you can't add, delete, or change properties.
// Object.seal(): You can change properties, but can't add or delete them.
// let obj1 = { name: "Vishal" };
// Object.freeze(obj1);
// obj1.name = "Amit"; // won't change
// console.log(obj1.name); // Vishal

// let obj2 = { age: 20 };
// Object.seal(obj2);
// obj2.age = 25;       // allowed
// obj2.newProp = 100;  // not added
// delete obj2.age;     // not deleted
// console.log(obj2);   // { age: 25 }












// my own code not lecture's
// debugger
// const userBio = {
//     userId : 'itxx__vishal_077',
//     password : 'chokil@17',
//     follwers : 128,
//     following : 679,

// }
// userBio.nickName = 'chiku'
// Object.freeze(userBio)
// console.log(userBio)
// userBio.location = 'Mh-20'


// const car = {
//     modal : 'mercdise',
//     brand : 'G-wagnar',
//     year : 2004,
//     owern : {
//         name : 'vishal kisan jonwal',
//         age : 21,
//         work : 'softwear enginner',
//         location : 'at Banglor'
//     }
// }
// console.log(car)


const student = {
  name: "Vishal",
  age: 16,
  grade: "10th"
};

// for (const key in student) {
//      console.log(key ,  Object.keys(student))
//      console.log(key ,  Object.values(student))
// }