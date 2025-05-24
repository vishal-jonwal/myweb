const numbers = [7,5,3,9,10]

function add(...res) {
    console.log(res);
    let sum = 0


    res.forEach((num) => {
        sum = sum + num
    })
   console.log(sum);
    return sum
}
add(...numbers)