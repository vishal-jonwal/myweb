// date 2/may/25
// shallow copy 

// in shallow copy doesn't work nested object or Array
// this we call shallow copy 

// const book = {
//     brand : 'classMate',
//     pages : 100,
//     more : {
//         type : 'one Line',
//     }
// }

// const book1 = {...book}
// book1.more.type = 'two Line'
// console.log('book : ',book)
// console.log('book1: ',book1)



//-------------------------------------------------------------------------------------------------------------------------
// So, we use Deep Copy 
// this included nested object

// 1.JSON // JavaScript Object Notation
// JSON.stringify() // object convert into JSON String
// JSON.parse() // JSON String convert again in Object
// Doesn't copy functions, undefined, Date, Map, Set, or circular references
// can't use for complex data


// const book = {
//     brand : 'classMate',
//     pages : 100,
//     name : undefined,
//     more : {
//         type : 'one Line',
//     },
//     function(){

//     }
// }

// const book1 = JSON.parse(JSON.stringify(book))
// let book1 = JSON.stringify(book)//convet to JSON String
// book1 = JSON.parse(book1) // convert JJSON String to Object again



// 2.structuredClone() Mehtod
// Fast, simple, supports most data types (objects, arrays, Dates, Maps, Sets, etc.)
// copy , undefined, Date, Map, Set, or circular references
// not copy Fuction

// const book = {
//     brand: 'classMate',
//     pages: 100,
//     name: undefined,
//     more: {
//         type: 'one Line',
//     }
// }

// const book1 = structuredClone(book) // Easy to Use



// 3. _.cloneDeep form Lodash 
// leanr later

//----------------------------------------------------------------------------------------------------------------------











