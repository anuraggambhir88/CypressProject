function Shape() {

    Shape.prototype.duplicate = function () {
        console.log("Shape")
    }

}

let s = new Shape()

//s--> inherit from shape base ---> inhert from object base

function Circle(radius) {
    this.radius = radius
}

//Inheritance of shape base to circle
Circle.prototype = Object.create(Shape.prototype)



