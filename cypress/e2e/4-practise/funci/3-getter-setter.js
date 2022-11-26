//Getter setter in function

const person = {
    firstName: "Anurag",
    latName: "Gambhir",
    get fullName() {
        return this.firstName + " " + this.latName
    },

    set fullName(value) {
        let parts = value.split(" ")
        this.firstName = parts[0]
        this.latName = parts[1]
    }
}


console.log(person.fullName)
person.fullName = "Anurag Kumar"
console.log(person.fullName)
