//Sorting array

let num = [2,3,1,0,10,15,2]
const sorted =num.sort((a,b)=>{
 if (a===b) {
    return 0
 }
 return a<b ? -1 :1
});

console.log(sorted)


const courses = [
    {id:1 , course : "Math"},
    {id:2 , course : "English"},
]

const sorted1 = courses.sort((a,b)=>{
    const nameA = a.course.toUppserCase()
    if (a.course < b.course) return -1
    if (a.course > b.course) return 1
    else return 0

})

console.log(sorted1)