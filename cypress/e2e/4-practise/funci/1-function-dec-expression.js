//function declaration

function walk() {
    console.log("walking")
}

//function expression

const walk1 = function () {
    console.log("walking")
}

//difference is walk can be called before it is intialized
//function expression can only be called after the defination

walk()
walk1()

//passing n number of arguments
function sum(num1, num2) {
    console.log(arguments)
    let sum = 0
    for (const value of arguments) {
        sum += value

    }
    return sum
}

console.log(sum(1, 2, 3, 4, 5))