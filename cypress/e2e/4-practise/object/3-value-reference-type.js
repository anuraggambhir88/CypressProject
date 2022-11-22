// Value and reference types
//Value tupes - String, boolean , numbers , NaN, undefined
//Reference Types - Functions , Array , Objects

//Value types
let x = 10
let y = x
x = 20

//When we copied x into y copy is passed as number are value type and change in x
//did not effect y
console.log(x)
console.log(y)

//When we are passing object reference is passed change in one object effect other
let z = {value:20}
let n = z
z.value = 30

//Change in z will effect n also
console.log(z.value)
console.log(n.value)


//Pass by value example
let number = 10

function counter(number) {
    number++
}

counter()
console.log(number)

//pass by reference

let number2 = {value:10}

function counter2(number2) {
    number2.value++
}

counter2(number2)
console.log(number2)

