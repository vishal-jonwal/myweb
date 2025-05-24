
// debugger

one()

function one() {
    console.log('one')
    two()
    console.log('one print')
}

function two() {
    console.log('two')
    three()
    console.log('two print')
}

function three() {
    console.log("three")
    // one() // if i do this . this is callstack overflow // infinte recursion
} 


// The call stack in the image illustrates the order in which functions are executed in JavaScript, following the Last In, First Out (LIFO) principle. Here's a breakdown of the call stack's progression as depicted: 
// 1. Initial Call:
// one() is called and added to the stack.
// 2. one() calls two():
// two() is added on top of one().
// 3. two() calls three():
// three() is added on top of two() and one(). three() executes, logs "Call Stack," and then completes.
// 4. three() completes:
// three() is removed from the stack, and execution returns to two(), which then completes.
// 5. two() completes:
// two() is removed from the stack, and execution returns to one(), which then completes.
// 6. one() completes:
// The stack is empty, signifying the end of execution.

// debugger
function greet() {
    console.log("Hello");
    askName();
  }
  
  function askName() {
    console.log("What is your name?");
  }
  
  greet();

// greet() is called → pushed on the stack

// Inside greet, it logs "Hello"

// askName() is called → pushed on the stack

// Inside askName, it logs "What is your name?"

// askName() finishes → popped off

// greet() finishes → popped off

// Stack is now empty



debugger

// sayHi()

// const username = 'Anurag'
// const userAge = 25

// function sayHi() {
//     const a = 14
//     const b = 12
//     add(7, 9)
// }

// function add(x, y) {
//     kuchhBhi()
//     return x + y
// }

// function kuchhBhi() {
//     console.log('Kuchh bhi');
// }

function introduceMe() {
    console.log('Hi, My name is Anurag.');
    introduceMe()
}

introduceMe()

console.log('Program Ended');