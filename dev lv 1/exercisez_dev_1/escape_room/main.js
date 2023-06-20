const readline = require("readline-sync");
const game = readline.question("1. Put hand in hole \n2. Find the Key \n3. Open the Door ");
  
console.log(game)
const door = 'door is locked'

if (game === '1'){
    console.log('you died. git guud')
} else if (game === '2'){
    console.log('you found the key!')
    let key = true
    while (key === true){
        let game2 = readline.question("1. Put hand in hole \n3. Open the Door")
            if (game2 === '3') {
                console.log('you win. u must be guud')
                break;
            } else {
                console.log('you died')
                break;
            }
    }
} else {
    console.log(door)    
}

/* ok so in parts:
1. make an options list in the console using readline
2. if statement for outcomes ok
*/