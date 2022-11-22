//Filter value

const num = [1,2,3,4,5,6,7,-1 , 3 ,-2]
let anothernum = num.filter(value=> value>=0)
console.log(anothernum)

//Mapping array

let another = anothernum.map(value => "<li>" + value + "</li>")
console.log(another)

const html = "<ul>" + another.join("") + "</ul>"
console.log(html)

//Mapping to object

const anotheritem = num.map((value)=>{
    const obj = {number:value}
    return obj
})

console.log(anotheritem)