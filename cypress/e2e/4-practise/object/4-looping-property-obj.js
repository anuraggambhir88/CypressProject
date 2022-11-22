let circle = {
    raduis:1,
    location : {
        x:5
    }
}

//Enum objects
for (const key in circle) {
    console.log(key, circle[key])
}

//for for loop using object entries
for (const value of Object.entries(circle)) {
    console.log(value)
}

//lopping using keys entries
for (const keys of Object.keys(circle)) {
    console.log(keys, circle[keys])
}

//finding the key exist in circle
if ("raduis" in circle){
    console.log("Yes present")
}

