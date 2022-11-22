//Constructor Functions

//Pascal notation
function Circle(radius) {
    this.radius = radius
    this.draw = function () {
        console.log("Drawing CF")
    }
}

const circle1 = new Circle(1)

//Displaying property of circle
console.log(circle1.radius)
console.log(circle1.draw())


//Dynamic nature of objects that you can add objects and remove them 
//here adding additional y in circle 1
circle1.y = 3
console.log(circle1)

//Constructor function gives the function/object used to construct the object so circle1 is 
//constructed from circle
console.log(circle1.constructor)
console.log(Circle.constructor)

//Functions are objects
console.log(Circle.name)
console.log(Circle.length)