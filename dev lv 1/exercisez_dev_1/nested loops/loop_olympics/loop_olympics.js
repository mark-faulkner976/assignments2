// preliminaries
for (i = 0; i < 10; i++){
    console.log(i)
}

for (x = 9; x > 0; x--){
    console.log(x)
}

const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
for (i = 0; i < fruit.length; i++){
    console.log(fruit[i])
}

//bronze
const numbers = [];

for (var  i = 0; i < 10; i++){
    numbers.push(i)
};

for (var  i = 0; i < 101; i++){
    if (i % 2 === 0){
        console.log(i)
    }
}

var newFruit = []
for (var  i = 0; i < fruit.length; i++){
    if ( i % 2 === 0){
        newFruit.push(fruit[i])
    }
}

//silver
const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]
  
  // ["Harrison Ford", "Vladimir Putin"] // names
  // ["Singer", "Entertainer"] // occupations

for (i = 0; i < peopleArray.length; i++){
    console.log(peopleArray[i].name)
}

var names = []
var occupations = []
// for (i = 0; i < peopleArray.length; i++){
    
//     names.push(peopleArray[i].name)
//     occupations.push(peopleArray[i].occupation)
// }
// console.log(names)
// console.log(occupations)
// above was commented out for brevity during exercise. it works

for (i = 0; i < peopleArray.length; i++){
    if (i % 2 === 0){
    names.push(peopleArray[i].name)
    }
    else if (i % 2 !== 0){
        occupations.push(peopleArray[i].occupation)
    }
}


//gold

// console.log(names) works, commented out for brevity
// console.log(occupations)

// const nesting = []
// for (i = 0; i < 3; i++){
//     for (j = 0; j < 1; j++){
//         nesting.push([0, 0, 0])
//     }
// }
// console.log(nesting)

// const nesting = [] works, commented out for brevity
// for (i = 0; i < 3; i++){
//     for (j = 0; j < 1; j++){
//         nesting.push([i, i, i])
//     }
// }
// console.log(nesting)

// const nesting = [] works, commented out for brevity
// for (i = 0; i < 3; i++){
//     for (j = 0; j < 1; j++){
//         nesting.push([0, 1, 2])
//     }
// }
// console.log(nesting)

const nesting = [[0, 1, 2], [0, 1, 2], [0, 1, 2]] 
for (i = 0; i < 3; i++){
    for (j = 0; j < 1; j++){
        nesting.pop()
    }
    for (u = 0; u < 1; u++){
        nesting.unshift(['x', 'x', 'x'])
    }
}

console.log(nesting)