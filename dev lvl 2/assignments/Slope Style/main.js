// function collectAnimals(...animal) {
//     /*and here*/
//     let animals = []
//     animals.push(animal)
//     return console.log(animals)
// }

// collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");
// ["dog", "cat", "mouse", "jackolope", "platypus"]

// function combineFruit(fruit, sweets, vegetables){
//     return console.log({fruit, sweets, vegetables})
// }

// combineFruit(["apple", "pear"],
//              ["cake", "pie"],
//              ["carrot"])
/*=> {
        fruit: ["apple", "pear"],
        sweets: ["cake", "pie"],
        vegetables: ["carrot"]
     }*/

// function parseSentence({location, duration}){
//     return console.log(`We're going to have a good time in ${location} for ${duration}`)
//     }
      
// parseSentence({
//     location: "Burly Idaho",
//     duration: "2 weeks"
// });


// function returnFirst(items){
//     const firstItem = items[0]; /*change this line to be es6*/
//     return firstItem
// }


// function returnFirst(items){
//     const [firstItem, ] = items ; /*change this line to be es6*/
//     return firstItem
// }


// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// function returnFavorites(arr){
//     /*your code here*/
//     const [firstFav, secondFav, thirdFav] = arr
//     return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`;
// }

// console.log(returnFavorites(favoriteActivities))


// function combineAnimals(real, ...mysterious) {
//   let arr = []
//   return arr.concat(...real, ...mysterious)
// }

// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];

// console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals))

// // ["dog", "cat", "mouse", "jackolope", "platypus"]


// function product(a, ...b) {
//     var numbers = [a, ...b];
  
//     return numbers.reduce((acc, number) => acc * number, 1)
//   }


  function unshift(array, a) {
    return [...a].concat(array);
  }


function populatePeople(names){
return names.map(name => {
    name = name.split(" ");
    console.log(name)
    // your code
    var newName = []
    return newName.push({
        firstName: name[0],
        lastName: name[1]
        })
    })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]

