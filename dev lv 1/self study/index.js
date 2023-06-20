document.getElementById("myBtn").addEventListener("click", displayText);

function displayText() {
    //creating a p tag
    const paragraph = document.createElement("p")
    document.body.append(paragraph)
    paragraph.innerHTML = document.getElementById("input").value
    console.log(document.getElementById("input").value)
}
