
function Circle(radius) {
    this.radius = radius

    this.draw = function () {
        console.log("drawing")
    }
}

const circle1 = new Circle(1)
console.log(circle1.__proto__)

let person = { name: "Anurag" }

console.log(Object.entries(person))

//Protyping

function Circle1(radius) {
    //instance property
    this.radius = radius
    this.move = function () {
        console.log("move")
    }
}

//prototype members
Circle1.prototype.draw = function () {
    console.log("drawing")
    //also can refer each other members from function to proptype 
    this.move()
}

const c1 = new Circle1()

c1.draw()
//You can also overrite the prototype methods


//Iterating memebers and prototypes
//Object.keys only give instance members


//for in loop gives all methods
for (let key in c1) {
    console.log(key)

}






