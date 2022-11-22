//find element Primitive type

const num = [3,4,5,6,3]
if (3 in num){
    console.log("yes")
}

//index 
console.log(num.indexOf(5))

//last index of 
console.log(num.lastIndexOf(3))

//another method to find element
console.log(num.includes(3))

//Find element Reference type
const courses  = [
    {id:1, name :"Math"},
    {id:2, name :"Science"}
]

//return the match object
const course = courses.find((course)=> {
    return course.name==="Science"
})

console.log(course)

//return the match index
const course2 = courses.findIndex(function(course) {
    return course.name =="Math"
})

console.log(course2)