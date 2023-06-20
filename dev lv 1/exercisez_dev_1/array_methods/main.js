var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);

// 1
vegetables.pop()
console.log("vegetables: ", vegetables);

// 2
fruit.shift()
console.log("fruit: ", fruit);

// 3
console.log(fruit.indexOf("orange"))

//4
var num1 = fruit.indexOf("orange")
fruit.push(num1)
console.log("fruit: ", fruit);

// 5
var num2 = vegetables.length
console.log(num2);

// 6 
vegetables.push(num2)
console.log("vegetables: ", vegetables);

// 7
var newArr = fruit.concat(vegetables)
console.log(newArr)

//8
newArr.splice(4, 2)
console.log(newArr)

// 9 
newArr.reverse()
console.log(newArr)

// 10
var newString = newArr.toString()
console.log(newString)