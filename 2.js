// There are three ways to write function

// function declaration

function add(x, y) {
    console.log(x + y)
}
add(10, 20)

// function expression 

let add1 = function(x, y) {
    console.log(x + y)
}
add1(10, 30)

// arrow function

let add2 = (x, y) => {
    console.log(x + y)
}
add(40, 50)