// for loop that counts to 100
// if i % 3 === 0 statement 
// if i % 5 === 0 statement

var fizzbuzz = 0
var fizz = 0
var buzz = 0

for (i = 1; i < 101; i++) {
    
    if (i % 3 === 0 && i % 5 ===0){
        console.log('FizzBuzz')
        fizzbuzz++
    }
    else if (i % 3 === 0){
        console.log('Fizz')
        fizz++
    }
    else if (i % 5 === 0) {
        console.log('Buzz')
        buzz++
    }
    else {
        console.log(i)
    }
}

console.log('fizzbuzz: ' + fizzbuzz + ',' + '\nfizz: ' + fizz + ',' + '\nbuzz: ' + buzz)