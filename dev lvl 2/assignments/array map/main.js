// function doubleNumbers(arr){
//   // your code here
//   return arr.map(x => x * 2)
// }

// console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

// function stringItUp(arr){
//   // your code here
//   return arr.map(x => x.toString())
// }

// console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

// function capitalizeNames(arr){
//   // your code here
//   var i = arr.map(x => x.toLowerCase())
//   return i.map(x => x[0].toUpperCase() + x.substring(1))
// }

// console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 

// // Output:
// // ["John", "Jacob", "Jingleheimer", "Schmidt"]

// function namesOnly(arr){
//   // your code here
//   return arr.map(x => x.name)
// }

// console.log(namesOnly([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]));
// // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

function makeStrings(arr){
  // your code here

  let movie = arr.map(function(x) {
    if(x.age >= 17) {
     return x.name + ' can go to The Matrix';
    } else if(x.age) {
      return x.name + ' is under age!';
    } 
  })

  return movie;

}

console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));
// ["Angelina Jolie can go to The Matrix",
// "Eric Jones is under age!!",
// "Paris Hilton is under age!!",
// "Kayne West is under age!!",
// "Bob Ziroll can go to The Matrix"]


function readyToPutInTheDOM(arr){
  // your code here
  return arr.map(x => {
    return "<h1>" + x.name + "</h1>" + "<h2>" + x.age + "</h2>"
  })
}
console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));
// ["<h1>Angelina Jolie</h1><h2>80</h2>",
// "<h1>Eric Jones</h1><h2>2</h2>",
// "<h1>Paris Hilton</h1><h2>5</h2>",
// "<h1>Kayne West</h1><h2>16</h2>",
// "<h1>Bob Ziroll</h1><h2>100</h2>"]