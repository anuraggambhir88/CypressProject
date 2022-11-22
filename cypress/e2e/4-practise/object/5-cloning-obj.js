let circle = {
    raduis:1,
    location : {
        x:5
    }
}


let circle2 = {}
//Coping using loop
for (const key in circle) {
    circle2[key] = circle[key]
}
console.log(circle2)


//coping using object assign
const circle3 = Object.assign({},circle)
console.log(circle3)

//Copy using spread operator

const circle4 = {...circle}
console.log(circle4)

