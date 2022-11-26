
//Global Scope
let color = 'red'
function start() {
    //Local Scope
    var message = "Hi"
}

function stop() {
    //Local Scope
    const message = "Bye"
}

start()


//Var vs Let
//Var scope is function 
//Let has block scope
let x = 10
var y = 10

function sum() {
    let sum = 0;
    for (let index = 0; index < 5; index++) {
        var i = 2
        if (index == i) {
            console.log(i)
        }

    }
    console.log(y)
    console.log(i)
}

sum()

//var can be accesed using a window object window.x inside function