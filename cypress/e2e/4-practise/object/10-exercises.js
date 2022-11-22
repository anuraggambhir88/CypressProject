//Exercise 1 - create address object with street, city and zipcode
//function to display the content of object


let address = {
    street: "123 street",
    city : "faridabad",
    zipcode : "121008"
}

function displayeAddress(address) {
    for (const key in address) {
        console.log(key, ":", address[key])
    }
}

displayeAddress(address)


//Exercise 2 - Create a address function first using factory function second using constructor function

function addressFunction(street,city,zipcode) {
    return{
        street,
        city,
        zipcode
    }
}

const address1 = addressFunction('a','b','c')
console.log(address1)

//Exercise 4 -Create a function using constructor function

function Address(street,city,zipcode){
    this.street = street
    this.zipcode = zipcode
    this.city = city
}

const address2 = new Address('a','b','c')
console.log(address2)

// Exercise 5 - two functions areEqual - check two objects are equal
//Second part areSame() - check two object have same reference


function areEqual(obj1,obj2) {
    for (const key in obj1) {
        if (key in obj2){
            console.log("inside")
            if(obj1[key] === obj2[key]){
                console.log("Inside valye")
            }else{
                return false
            }
        }else{
            return false
        }
    } 
    return true  
}



const address3 = new Address('a','b','c')
const address4 = new Address('a','b','c')
console.log(areEqual(address3,address4))


//Exercise - 7 Blog post object
