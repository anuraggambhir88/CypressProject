//Arrays

const numbers = [3,4]

numbers.push(5,6)

//add at the stat
numbers.unshift(1,2)

//Middle
numbers.splice(2,0,"a","b")

//Finding premitive
const n1 = [1,2,3,4]
n1.indexOf(2)
n1.includes(2)

//Finfing object 
const n2 =[
    {id:1,name:"anurag"},
    {id:2,name:"gambhir"},
]

const find = n2.find(function(n4){
    return n4.name === "anurag"
})

console.log(find)

//Remove element from array
//remove last element
const number = [2,3,4,5,]
const last = number.pop()

//remove first
number.shift()

//middle
number.splice()

//Empty array
let num = [4,5,6,7,7]
num =[]

//Number.length
num.length = 0

//Combining arrays
const first = [12,13]
const second = [15,16]
const combiner =  first.concat(second)

const combiner1 = [...first,...second]

//iterating an array
first.forEach(function(n){
console.log(n)
})


//join array
const n7 = [1,2,3]
n7.join(n1)

let numbers4 = [3,4,5,6]
numbers4.sort()