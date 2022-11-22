//Iterating an array

num = [1,2,3,4,5]

//normal for loop
for (const key in num) {
    console.log(key)
}

//for each loop
num.forEach((value,index,number)=>{
    console.log("Index ",index, " Value ",  value)
})