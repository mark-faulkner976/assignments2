const xhr = new XMLHttpRequest()
        // method  // url                     // async?
xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        console.log(data)
        showData(data.objects[0])
    }
}

function showData(arr){
    for(let i=0; i < arr.pokemon.length; i++){
        const h1 = document.createElement('h1')
        const h2 = document.createElement('h2')
        h1.textContent = arr.pokemon[i].name
        h2.textContent = arr.pokemon[i].resource_uri
        document.body.appendChild(h1)
        document.body.appendChild(h2)
    }
}

axios.get("https://api.vschool.io/scrimbalessons/todo")
    .then(response => {
        for(let i = 0; i < response.data.length; i++){
            const h1 = document.createElement('h1')
            h1.textContent = response.data[i].title
            document.body.appendChild(h1)
        }
    })
    .catch(error => console.log(error))