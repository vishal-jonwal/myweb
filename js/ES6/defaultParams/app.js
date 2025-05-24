function multifly(a, b = 1) {
    return a * b
}
multifly(5)
multifly(7, undefined)
multifly(3, null)
multifly(3, '')

function dice(numdice = 6) {

    return Math.ceil(Math.random() * numdice)
}


function sayHi1(name = 'vishal') {
    console.log(`hi, ${name}. how are ${name}?`);
}

function sayHi2(name) {
    if (name === undefined) {
        name = 'virat'
    }
    console.log(`hi, ${name}. how are ${name}?`);
}

function sayHi3(name) {

    console.log(`hi, ${name || 'mahi'}. how are ${name || 'mahi'}?`);
}
