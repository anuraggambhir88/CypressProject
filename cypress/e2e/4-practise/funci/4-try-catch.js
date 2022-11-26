const person = {
    firstName: "Anurag",
    latName: "Gambhir",
    get fullName() {
        return this.firstName + " " + this.latName
    },

    set fullName(value) {
        if (typeof (value) !== 'string') {
            throw new Error('Value is not a string');
        }
        let parts = value.split(" ")
        this.firstName = parts[0]
        this.latName = parts[1]
    }
}


try {
    person.fullName = 2
} catch (e) {
    console.log(e)
}

