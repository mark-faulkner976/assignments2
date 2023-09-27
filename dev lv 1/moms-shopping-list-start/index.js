const list = document.getElementById('list')

document['addItem'].addEventListener('submit', function(event) {
    event.preventDefault()

    const input = document.getElementById('title').value
    document.getElementById('title').value = ''

    const li = document.createElement('li')
    const div = document.createElement('div')
    div.textContent = input
    list.append(li)
    li.append(div)

    const edit = document.createElement('button')
    edit.innerHTML = 'Edit'
    edit.addEventListener('click', event => {
        
        if (event.target.textContent === 'Edit' ){
        const newInput = document.createElement('input')
        newInput.type = 'text'
        newInput.value = div.textContent
        newInput.id = 'newInput'
        li.insertBefore(newInput, div)
        li.removeChild(div)
        edit.textContent = 'save'
        
        } else if (event.target.textContent === 'save'){
            const saveInput = li.firstElementChild
            const newDiv = document.createElement('div')
            newDiv.textContent = saveInput.value
            console.log(newDiv)
            li.insertBefore(newDiv, saveInput)
            li.removeChild(saveInput)
            edit.textContent = 'Edit'
        }
    })
    li.append(edit)

    const X = document.createElement('button')
    X.innerHTML = 'X'
    X.addEventListener('click', event => {
        list.removeChild(li)
    })
    li.append(X)

})