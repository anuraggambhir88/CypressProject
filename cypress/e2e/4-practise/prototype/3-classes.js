class Circle {
    radius
    constructor(radius) {
        this.radius = radius
        this.move = function () {
            console.log("moving")
        }

    }

    draw() {
        console.log("drawing")
    }
}

const circle1 = new Circle(1)
circle1.draw()
console.log(circle1)


//Class declaration - hoisting proof
class NewCircle {
    draw() {
        console.log("asd");
    }
}


//class expression - hoisting not work
let newCircle = class {
    draw() {
        console.log("ass")
    }
}


let c1 = new NewCircle()
let c2 = new newCircle()
c1.draw()
c2.draw()


//Static code


class NewCircle1 {
    draw() {
        console.log("asd");
    }
    static shape() {
        console.log("shape")
    }
}


NewCircle1.shape()

//This keyword
const Circle6 = function () {
    this.draw = function () {
        console.log("drawing")
    }
}


const c3 = new Circle()
//method call
c3.draw()

//getting reference of draw function
let draw = c3.draw

//function call
draw()

///When we enable stick mode this will disable functional call this to window object
//use strict

//Abstraction
//Private variable
// using  # in front 
class Family {

    member1 = "Anurag"
    #member2 = "Gambhir"

    //getter function
    get getfamilyName() {
        return this.member1 + this.#member2
    }

    set setfamilyName(name) {
        this.#member2 = name
    }
}

let family = new Family
//Can't be acced as function but as property
console.log(family.getfamilyName)
family.setfamilyName = "Gupta"
console.log(family.getfamilyName)

