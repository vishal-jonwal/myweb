//  What is the arguments object?
// It's a built-in object available inside all regular (non-arrow) functions.

// It contains an array-like collection of all arguments passed to the function.

// It's not an actual array, but it can be accessed using indices (arguments[0], arguments[1], etc.)

// function showArguments() {
//   console.log(arguments);
//   console.log("First:", arguments[0]);
//   console.log("Second:", arguments[1]);
// }

// showArguments("apple", "banana", "cherry");

// argument is old 
function add() {
    let sum = 0
    let arry = [...arguments]
    console.log(arry);

    arry.forEach((num) => {
        sum = sum + num
    })
    arry.push('hello')
    console.log(arry);
    return sum
}