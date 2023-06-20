// we want:
// 1. to return age of everyone 18+
// 2. sort alphabetically by last name
// 3. each name and age is embedded in a string that looks like an HTML li element


var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

function sortedOfAge(arr){
   // Your code here
   
   
   const eighteen = arr.sort(function(a, b) {
        let x = a.lastName.toLowerCase()
        let y = b.lastName.toLowerCase()
        if (x < y) {return -1}
        if (x > y ) {return 1}
        return 0
        }).reduce(function(final, people){
            if (people.age >= 18){
                final.push("<li>" + people.firstName + " " + people.lastName + " is " + people.age + " </li>")
            }
        return final
    }, [])
    return eighteen
}

console.log(sortedOfAge(peopleArray));

/*
Output:
[
    "<li>Kyle Mooney is 27</li>",
    "<li>Sarah Palin is 47</li>",
    "<li>Rick Sanchez is 78</li>",
    "<li>Morty Smith is 29</li>",
    "<li>Lev Tolstoy is 82</li>"
]
*/


