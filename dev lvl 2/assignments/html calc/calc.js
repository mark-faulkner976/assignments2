const calcAdd = document['add']

calcAdd.addEventListener('submit', function(event){
    event.preventDefault()

    const num1 = Number(calcAdd.num1.value)
    const num2 = Number(calcAdd.num2.value)
  
    calcAdd.num1.value = ""
    calcAdd.num2.value = ""

    const num3 = num1 +num2
    const h1 = document.createElement('h1')
    h1.textContent = num3
    document.getElementsByClassName('add')[0].append(h1)
})

const calcSubtract = document['subtract']

calcSubtract.addEventListener('submit', function(event){
    event.preventDefault()

    const num1 = Number(calcSubtract.num1.value)
    const num2 = Number(calcSubtract.num2.value)
    
    calcSubtract.num1.value = ""
    calcSubtract.num2.value = ""
    
    const h1 = document.createElement('h1')
    h1.textContent = num1 - num2
    document.getElementsByClassName('subtract')[0].append(h1)
})

const calcMultiply = document['multiply']

calcMultiply.addEventListener('submit', function(event){
    event.preventDefault()

    const num1 = Number(calcMultiply.num1.value)
    const num2 = Number(calcMultiply.num2.value)
    
    calcMultiply.num1.value = ""
    calcMultiply.num2.value = ""
    
    const h1 = document.createElement('h1')
    h1.textContent = num1 * num2
    document.getElementsByClassName('multiply')[0].append(h1)
})