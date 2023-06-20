/*fight giving me issues
hp for enemies arent being recognized once the loop activates? 
it's fixed now but only if i put the variables inside the fight function?*/

const readline = require("readline-sync")
console.log('Welcome to the Colossal Adventure RPG! Prepare yourself adventurer!')

let blazikenHP = 40
let goatHP = 1
let johnHP = 100

// create array of enemies
// const enemies  = [ {name: "", hp: 40} ...]

let userHP = 40
let inventory = []


const name = readline.question('Enter your name brave adventurer: ')

if (name === '') {
    console.log('Please start over and enter a name!')
} else {
    console.log('OK ' + name + ', prepare thineself!')
    console.log('press the w key to walk forward or p for your player information')
}


function walk(){  
    let input = readline.question('press w to walk or p to check status') 
    if (input === 'w') {
        encounter()
    } else if (input === 'p') {
        console.log(name + "'s HP: " + userHP + "\nInventory: " + inventory)
    }
}

function encounter(){
    let willFight = Math.floor((Math.random() * 100) + 1)
        if (willFight < 34){
            fight()
        } else {
            console.log("You didn't find anything. Continue walkning with w")
        }
        if (userHP <= 0){
            console.log('get guud fool. u ded')
        }
    }

function fight() {
    let enemy = Math.floor(Math.random() * 3)
    console.log(enemy)
    // let currentEnemt = enemies[enemy]
    if (enemy === 0 && userHP > 0){
        let action = readline.question("You've encountered a Blaziken!\n Will you fight (f) or run (r)?")
        if (action === 'f') {
            while (blazikenHP > 0 && userHP > 0){
            let dmg = Math.floor(Math.random() * 41)
            blazikenHP -= dmg
            console.log('You did ' + dmg + ' to Blaziken.\nBlaziken is now at ' + blazikenHP)
            let npcDMG = Math.floor(Math.random() * 15)
            userHP -= npcDMG
            console.log("Blaziken did " + npcDMG + ". You now have " + userHP + " HP")
            reward()
            }
        } else if (action === 'r') {
            let run = Math.floor((Math.random() * 100) + 1)
            if (run < 51) {
                return console.log('you escaped!')
            } else {
                console.log('you couldnt escape')
                let npcDMG = Math.floor(Math.random() * 11)
                userHP -= npcDMG
                console.log("You took damage!" + userHP)
                }
            }
        } 
    if (enemy === 1 && userHP > 0){
        let action = readline.question("You've encountered John Two Legs, the most powerful entity in the universe!\nWill you fight (f) or run (r)?")
        if (action === 'f') {
            while (johnHP > 0 && userHP > 0){
            console.log('John Two Legs has ' + johnHP + ' HP')
            let dmg = Math.floor(Math.random() * 88)
            johnHP -= dmg
            console.log('You did ' + dmg + ' to John Two Legs. You should have ran!')
            userHP -= 1000
            console.log('John Two Legs did 1000 damage!')
            }
        } else if (action === 'r') {
                let run = Math.floor((Math.random() * 100) + 1)
                if (run < 51) {
                    return console.log('you escaped!')
                } else {
                    console.log('you couldnt escape')
                    let npcDMG = Math.floor(Math.random() * 1000) + 5
                    userHP -= npcDMG
                    console.log("You took damage!" + userHP)
                }
            }
        } if (enemy === 2 && goatHP > 0) {
            let action = readline.question("You've encountered a Bold Billy-Goat\n Will you fight (f) or run (r)?")
            if (action === 'f') {
                while (goatHP > 0 && userHP > 0){
                let dmg = Math.floor(Math.random() * 101)
                goatHP -= dmg
                console.log('You did ' + dmg + ' to Bold Billy-Goat')
                let npcDMG = Math.floor(Math.random() * 6)
                userHP -= npcDMG
                console.log("Bold Billy-Goat did " + npcDMG + ". You now have " + userHP + " HP")
                reward()
                return userHP
                }
            } else if(action ==='r') {
                let run = Math.floor((Math.random() * 100) + 1)
                if (run < 51) {
                    return console.log('you escaped!')
                } else {
                    console.log('you couldnt escape')
                    let npcDMG = Math.floor(Math.random() * 6)
                    userHP -= npcDMG
                    console.log("You took damage!" + userHP)
                }
            }
        }
        function reward() {
            if (blazikenHP <= 0 || johnHP <= 0 || goatHP <= 0) {
                userHP += 10
                item()
                return userHP
            }
        }
}



function item() {
    let loot = Math.floor(Math.random() * 3) + 1
    if (loot === 1) {
        inventory.push('7 hamburgers')
        console.log('you found 7 hamburgers of the desicrated corpse')
    } else if (loot === 2) {
        inventory.push('2 golf balls')
        console.log('you found 2 golf balls of the desicrated corpse')
    } else {
        inventory.push('8 earth worms')
        console.log('you found 8 earth worms of the desicrated corpse')
    }
}




while (userHP > 0){
    walk()
}