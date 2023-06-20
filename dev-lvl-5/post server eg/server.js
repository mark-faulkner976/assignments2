const express = require("express")
const app = express()
const {v4: uuidv4} = require("uuid")

// Middleware
app.use(express.json())

//fake data
const movies = [
    { title: "die hard", genre: 'action', _id: uuidv4() },
    { title: "star wars", genre: 'fantasy', _id: uuidv4() },
    { title: "lion queen", genre: 'fantasy', _id: uuidv4() },
    { title: "frisay the 9th", genre: 'horror', _id: uuidv4() }
]

app.get("/movies", (req, res) => {
    res.send(movies)
})

// add with postman and the "actual data" is never updated. The data is static here in the code and 
// is not being updated outside of the immediate instance
app.post("/movies", (req, res) => {
    const newMovie = req.body
    newMovie._id = uuidv4()
    movies.push(newMovie)
    res.send(`Successfully added ${newMovie.title} to the database!`)
})


app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})