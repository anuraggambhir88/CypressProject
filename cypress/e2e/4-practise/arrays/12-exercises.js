//Array from range

const { execute } = require("wd/lib/commands")

const number = araryfromrange(-6, -1)

console.log(number)

function araryfromrange(start, end) {
    let newnumber = []
    for (let index = start; index <= end; index++) {
        newnumber.push(index)
    }
    return newnumber
}

//return all the value except the number given
const num2 = [1, 2, 3, 4, 5, 6]

function exclude(numberArray, exclude) {
    let newArray = numberArray.filter((value) => {
        if (value !== exclude) {
            return value
        }
    })
    return newArray
}

console.log(exclude(num2, 1))

//Moving element in array
//Three value , array , index to move and offset

const num3 = [1, 2, 3, 4, 5, 6]
const output = move(num3, 0, 3)
console.log(output)

function move(num3, index, offset) {
    if ((index + offset) < num3.length) {
        let numberAtconst = num3[index]
        let filtered = num3.filter((value) => {
            return value !== numberAtconst
        })
        filtered[index + offset] = numberAtconst
        console.log(filtered)
    } else {
        return "Out of range"
    }
}

