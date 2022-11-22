//Test element in list
let num = [1,2,3,4,-1]

//all number are negative or not
let positive = num.every((value)=>{
    return value<=0
})

//Atleast one matches 
let positvenum = num.some(value=>{
    return value >=0
})


console.log(positvenum)
console.log(positive)

