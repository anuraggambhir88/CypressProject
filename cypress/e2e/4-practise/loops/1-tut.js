let Name = "anurag"
console.log(Name)

let firstName="Anurag", secondName ="Gambhir"
console.log(firstName+secondName)


const firstName1 = "Anurag"
console.log(firstName1)


// primtiveType
let namethird = "Anurag" //String
let age = 30 //integer
let isApproved = true //Boolean

let firstName3 = undefined;
let firstName4 = null;

//typeof
console.log(typeof(firstName)) 

//Object type array, function, object

//Object
let person = {
    name : "Anurag",
    age: 30
}

//Object Reassign
console.log(person)
person.age = 31
console.log(person.age)

//Bracket Notation
person['name'] ="AAAAA"
console.log(person)


//Arrays
let listOfColour = ["Red","Orage","Yello"]
console.log(listOfColour)
console.log(listOfColour[0])
listOfColour[3] = "Black"
console.log(listOfColour.length)

//Functions
function greet(a,b) {
    console.log("Greet")
    return a+b
}


function greet1(name){
    console.log("Hello " + name)
}

console.log(greet(10,20))
console.log(greet1("John"))

function square(number){
    return number*number
}

console.log(square(2))


//Operators - Arthematic , logical , bitwise , comparision , equality

console.log(3+7)
console.log(10%3)
console.log(3**3)
let x = 10
console.log(++x)
console.log(x++)
console.log(x)

//Asignment operator
x +=5
console.log(x)

//equality operator
if(x>5){
    console.log("True")
}

console.log(x >= 5)
console.log(x<=5)
console.log(x===1)

//== and === 
// == lose equality
//=== strick equality
let y = "17"
console.log(x==y)
console.log(x===y)

//ternary operator
//if a customer has more than 100 points they are gold else they are silver customer
let points = 110
let type = points > 100  ? "Gold" : "Silver"

console.log(type)

//Logical operator && and ||

console.log(true && true)
console.log(false || true)

//Not Operator !
let applicant = false
let eligible = !applicant
console.log(eligible)

//Logical with Non boolean
//False - > undifined , NaN , 0 , false , '' , null 
//Truty -> All other are truty
console.log(false || "Anurag")
console.log(false || 1 || 2) // Short Circuiting

let userColor = false
let defaultColor = true
console.log(userColor || defaultColor)

//Operator precendance --> BODMAS

//Swapping variable
let a ="red"
let b = "blud"
console.log(a + " " + b)

let temp = undefined
temp = a 
a = b
b = temp

console.log(a + " " + b)









