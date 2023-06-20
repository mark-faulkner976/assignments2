rs = require("readline-sync")

class Player {
    constructor ({}) {
        this.name = ""
        this.totalCoins = 0
        this.status = 1
        this.hasStar = false
        this.statusOptions = ["Dead", "Small", "Big", "Powered Up"]
        this.gameRun = true
    }
    setName(){
        let options = ["Mario", "Luigi"]
        let name =2
        while (name > 1) {
            name = rs.keyInSelect(options, "Choose your character!")
        }
        this.name = options[name]
    }  
    gotHit(){
        if(!this.hasStar) {
            this.status = this.status - 1
            if (this.status === 0) {
                this.gameRun = !this.gameRun
            }
        } else {
            console.log(this.name + " is invincible?!?")
        }
    } 
    gotPowerUp() {
        if (this.status <= 2){
            this.status = this.status + 1
            if (this.status === 3){
                console.log(this.name + " has Powered up!!")
                this.hasStar = !this.hasStar
                setTimeout(() => {
                    console.log(this.name + " has lost his Star Buddy!!")
                    this.hasStar = !this.hasStar
                    this.status--
                }, 10000)
            }
        }
    }
    addCoin(){
        this.totalCoins++
        console.log(this.name + " found a coin!")
    } 
    print(){
        console.log(`Name: ${this.name}\nStatus: ${this.statusOptions[this.status]}\nTotal Coins: ${this.totalCoins}\n`)
    }
    
}

function getRange (){

    var number = Math.floor(Math.random() * 3)
    switch (number){
        case 0:
            player.gotHit()
            break
        case 1:
            player.gotPowerUp()
            break
        case 2:
            player.addCoin()
            break
        default:
            console.log("Problem with random number " + number)
    }
    player.print()
    if (!player.gameRun){
        clearInterval(gameRunning)
        console.log("game over nerd")
    }
}

function endGame() {
    if (this.status === 0) {
        console.log("Game Over")
    }
}

const player = new Player({})
player.setName()
const gameRunning = setInterval(getRange, 1000)