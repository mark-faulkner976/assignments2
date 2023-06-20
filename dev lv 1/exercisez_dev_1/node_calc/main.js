const readline = require('readline-sync')

function calculator(){
    var num1 = readline.questionInt('Number 1: ')
    var num2 = readline.questionInt('Number 2: ')
    var op = readline.question('Select an operator from the following list: '
        +'\nOptions:'
        +'\nSum (+)'
        +'\nSubtraction (-)'
        +'\nMultiplication (*)'
        +'\nDivision (/)\n')

    if (op === '+'){
        console.log(num1+num2)
    } 
    else if (op === '-'){
        console.log(num1 - num2)
    }
    else if (op === '*'){
        console.log(num1 * num2)
    }
    else if (op === '/'){
        console.log(num1 / num2)
    }
    else {
        console.log('Please use an operator listed above :)')
    } 
}
calculator()