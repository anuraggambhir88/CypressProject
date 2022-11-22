let circle = {
    radius : 4,
    x:5,
    y:6,
    location:{
        z:7
    },
    draw:function () {
        return "Drawing"
    }
}

console.log(circle)
console.log(circle.draw())


//Factory Functions
function circleff(radius) {
    return{
       radius,
       draw() {
        console.log("Constructor function")
       }
    }
}

const circle1 = circleff(1)
console.log(circle1.radius)
console.log(circle1.draw())
