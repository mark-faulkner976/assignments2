const people = [ "John", "Adam", "Amber" ]

function peopleElements(arr) {
    // insert your code here
    const array = arr.map(someFunction)
    return array
}

console.log(peopleElements(people))

// Expected Output: [ "<h1>John</h1>", "<h1>Adam</h1>", "<h1>Amber</h1>" ]

function someFunction(person) {
    return "<h1>" + person + "</h1>"
}