const form = document.myForm

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const goomba = Number(form.goomba.value)
    const bomb = Number(form.bomb.value)
    const cheep = Number(form.cheep.value)
    const h1 = document.createElement('h1')
    console.log(goomba)

    h1.textContent = (goomba*5) + (bomb*7) + (cheep*11) + " coins will be the required payment for pest control services"

    document.getElementsByTagName('form')[0].append(h1)
})