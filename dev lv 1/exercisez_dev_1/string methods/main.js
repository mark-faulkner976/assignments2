var string ='hi'

var upperString = string.toUpperCase()
console.log(string + upperString)

var math = 'Hello World'
function findMiddleIndex(){
    
    
    var newMath = math.slice(0, Math.floor(math.length / 2))
    var newerMath = newMath.toUpperCase()
    var backHalf = math.slice(Math.floor(math.length / 2))
    var backHalfLower = backHalf.toLowerCase()
    console.log(newerMath + backHalfLower)
}
findMiddleIndex()

