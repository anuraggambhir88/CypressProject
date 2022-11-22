//Conditional Statement

//if hoour between 6 am 12 pm 
//12 pm tp 6 pm = Good aftrnoon

let hour = 13 
if (hour >= 6 && hour <= 12) {
    console.log("Good morning")
} else if (hour > 12 && hour <= 18) {
    console.log("good afternoon")
} else {
    console.log("good evening")
}

let role ="employee"

switch (role) {
    case "Guest":
        console.log("Guest role")
        break;
    case "employee":
        console.log("employee")
        break; 
    default:
        console.log("Other")
        break;
}

for (let index = 1; index < 10; index++) {
    console.log(index)
}
let i = 1
while (i<10) {
    i++
    console.log(i)
}

//for In loop
let person = {
    name :"Anurag",
    last :"Gambhir"
}

for (const key in person) {
    console.log(person[key])
}

let color = ["red","bule","black"]

for (const index in color) {
    console.log(color[index])
}

for (let color1 of color) {
    console.log(color1)
    
}

function max(a,b) {
    return (a>b) ? a : b
    
}

console.log(max(10,20))


function fizzBuzz(number){
    console.log(typeof(number))
    if((typeof(number)) !== "number"){
        return "Not a number"
    }else if (number % 3 ==0 && number % 5 == 0) {
        return "FizzBuzz"
    } else if (number % 3 ==0){
        return "Fizz"
    }else if (number % 5 == 0) {
        return "Buzz"
    }else {
        return number
    }

}

console.log(fizzBuzz("asd"))

function checkspeed(number){
    if (number <=50) {
        console.log("Ok")
    }else if (number >=120){
        console.log("License suspended")
        return "License suspended"
    }
    let newNumber = number - 50
    let points = Math.floor(newNumber/5)
    if (points >=1){
        console.log(points)
    }

}
checkspeed(55)


function primenumber(limit){
    let numbers =[]
    for (let i = 2; i <= limit; i++) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if(i%j==0){
                isPrime = false
                break;
            }
        }
        if (isPrime){
            numbers.push(i)
        }  
    }
    return numbers
}

console.log(primenumber(19))