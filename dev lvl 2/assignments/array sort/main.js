// function leastToGreatest(arr) {
//   // your code here
//   return arr.sort((a, b) => a-b)
// }

// console.log(leastToGreatest([1, 3, 5, 2, 90, 20])); // [1, 2, 3, 5, 20, 90]

// function greatestToLeast(arr) {
//     // your code here
//     return arr.sort((a, b) => b - a)
//   }
  
// console.log(greatestToLeast([1, 3, 5, 2, 90, 20])); // [90, 20, 5, 3, 2, 1]

// function lengthSort(arr) {
//     // your code here
//     return arr.sort((a, b) => a.length - b.length)
//   }
  
// console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "wolf", "eaten", "family"]

function alphabetical(arr) {
    return arr.sort()
}

console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "eaten", "family", "wolf"]

function byAge(arr){
    // your code here
    return arr.sort((a, b) => a.age - b.age)
  }
  
console.log(byAge([
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]));
  // => [ { name: 'Misunderstood Observer', age: 2 },
  //  { name: 'Quiet Samurai', age: 22 },
  //  { name: 'Unlucky Swami', age: 77 },
  //  { name: 'Arrogant Ambassador', age: 100 } ]

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
    return arr.sort((a,b) => a.lastName.localeCompare(b.lastName))
    .reduce((final, person) => {
      if(person.age >= 18){
        sortedPerson = `<li>${person.firstName } ${person.lastName} is ${person.age}</li>`
        // console.log(final)
        final.push(sortedPerson)
      }
      return final
    },[])
  }
  console.log(sortedOfAge(peopleArray));