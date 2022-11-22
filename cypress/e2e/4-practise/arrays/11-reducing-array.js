//Reducing array

const number = [1,2,3,4,5,6,-2,3]
let sum = 0
for (let n of number){
    sum += n
}
console.log(sum)
//reduce
let  sum2 = number.reduce((accumumator,current)=>{
    return accumumator+current
},0)
console.log(sum2)

