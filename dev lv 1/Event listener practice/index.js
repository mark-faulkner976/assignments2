var square = document.getElementById("square")

square.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "blue";
})

square.addEventListener("mousedown", (event) => {
     event.target.style.backgroundColor = "red";
})

square.addEventListener("click", (event) => {
    event.target.style.backgroundColor = "yellow";
})

square.addEventListener("dblclick", (event) => {
    event.target.style.backgroundColor = "green";
})

window.addEventListener("wheel", () => {
    square.style.backgroundColor = "orange";
    })

    window.addEventListener("keydown", (event) => {
        if (event.key === "r"){
            square.style.backgroundColor = "red"
        }
        else if (event.key === "b"){
            square.style.backgroundColor = "blue"
        }
        else if (event.key === "y"){
            square.style.backgroundColor = "yellow"
        }
        else if (event.key === "g"){
            square.style.backgroundColor = "green"
        }
        else if (event.key === "o"){
            square.style.backgroundColor = "orange"
        }
    })