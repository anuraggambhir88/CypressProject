//This keyword - object that is executing the current function
//if function is part of object means its method then this will refer to the obj
//if function is standlone then this will refer to window object

//method - obj 
//function - standalone - window /global in node
//constructor funciton this will refer to obj

const video = {
    title: 'a',
    play() {
        console.log(this)
    }
}


function start(params) {
    console.log(this)
}


const video1 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function (value) {
            console.log(this.title, value)
        }, this)

    }

}
console.log(video1.showTags())
//To solve the issue with window object we can assign it to varible and get the behavior changed
const video2 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        const self = this
        this.tags.forEach(function (value) {
            console.log(self.title, value)
        })

    }

}
console.log(video1.showTags())


function playvide(a, b) {
    console.log(this)
}

playvide.call({ name: "Anurag" })
playvide.apply({ name: "Chirag" })
const fn = playvide.bind({ name: "Nitin" })
fn()

//Solution 3 for replacing window object
const video3 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        const self = this
        this.tags.forEach(function (value) {
            console.log(self.title, value)
        }.bind(this))

    }

}

video3.showTags()

//Solution 4 use arrow function
const video4 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        const self = this
        this.tags.forEach((value) => {
            console.log(self.title, value)
        })
    }
}

video4.showTags()