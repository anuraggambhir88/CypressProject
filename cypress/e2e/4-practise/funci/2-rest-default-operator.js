//REst operator
function sum(...args) {
    console.log(args)
}

sum(1, 2, 3, 4, 5, 6)
//arguments gives index, value
//...args gives index
function sum1(discount, ...price) {
    let dis = discount

}



//Default value
function sum2(a = 10, b = 20) {
    return a + b
}

console.log(sum2(20, 30))