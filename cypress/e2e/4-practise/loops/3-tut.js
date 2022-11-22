//Object-Oriented-programming

let circle = {
    radious:1,
    location:{
        x:2,
        y:3
    },
    isVisible : true,
    draw: function(){
        console.log("draw")
    }
}

circle.draw() //Method
//Factory Function
function createCircle(radius){
    return {
        radius,
        draw() {
            console.log("draw")
        }
    }
}

const circle1 =createCircle(1)
console.log(circle1.draw)

//Constructor function
//Pascal notation
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log("Draw object")
    }
}

const circle2 = new Circle(1)
circle2.draw()

//Dynamic nature of objects
const circleObject = {
    radius : 1
}

circleObject.color = "Yellow"
circleObject.draw  = function(){
    console.log("draw")
}

console.log(circleObject.draw())

//Constuctor Property - everyone has it
console.log(circleObject.constructor)

//Refrence type Object Function array

//pass by value
let x = 10
let y = x
x = 20

console.log(x)
console.log(y)

//Pass by refrence
let x1 = {value:10}
let y1 = x1
x1.value = 20
console.log(y1)

//Enum property of Object

let circle4 = {
    radious:1,
    location:{
        x:2,
        y:3
    },
    isVisible : true,
    draw: function(){
        console.log("draw")
    }
}

for (let key in circle4) {
    console.log(key, circle[key])
}

for (let iterator of Object.keys(circle4)) {
    console.log(iterator)
}

for (let iterator of Object.entries(circle4)){
    console.log(iterator[0],iterator[1])
}

//Copy Object  - Clone Object
let anpthercircle =Object.assign({},circle4)
console.log(anpthercircle)
const another = {...circle4}

//String
const message  = "hi"

//Template litterals 
const message1 = `this is ${message}
new message`
console.log(message1)

//Date function
const date = new Date()
console.log(date.getDate().toString())


//Exercise
let address = {
    street:"123",
    city:"Faridabad",
    zipcode:"121008"
}

function addressFunction(address) {
    for (let key in address) {
        console.log(key, address[key])
    }
}


function ShowAddress(){
    this.street = "123"
    this.city = "Faridabad"
    this.zipcode = "121008"
}

function streetAddress(street,city,zipcode){
    return{
        street,
        zipcode,
        city
    }
}

let streetAddress1 = streetAddress("123",231,123)
let showAddress = new ShowAddress()
console.log(showAddress)
console.log(streetAddress1)





