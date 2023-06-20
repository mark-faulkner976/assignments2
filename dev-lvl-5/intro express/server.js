//First Express SErver
const express = require("express")
const app = express()

// fake data
const users = [
    {name: "joe", age: 20},
    {name: "moe", age: 24},
    {name: "betty", age: 20},
    {name: "sarah", age: 20},
    {name: "mike", age: 20}
]

// needs an endpoint and a callback funciton, in that order
app.get("/users", (req, res) => {
    res.send(users)
})



// needs 2 arguments, port and callback
app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})