const express = require('express')
const movieRouter = express.Router()
const {v4: uuidv4 } = require('uuid')

const movies = [
    { title: "die hard", genre: 'action', _id: uuidv4() },
    { title: "star wars", genre: 'fantasy', _id: uuidv4() },
    { title: "lion queen", genre: 'fantasy', _id: uuidv4() },
    { title: "frisay the 9th", genre: 'horror', _id: uuidv4() }
]

// movieRouter.get('/', (req, res) => {
//     res.send(movies)
// })

// movieRouter.post('/', (req,res) => {
//     const newMovie = req.body
//     newMovie._id = uuidv4()
//     movies.push(newMovie)
//     res.send(`Successfully added ${newMovie.title} to the database!`)
// })

// alternate way to do requests if they all contain the same end point
movieRouter.route("/")
    .get((req, res) => {
        res.send(movies)
    })

    .post((req,res) => {
        const newMovie = req.body
        newMovie._id = uuidv4()
        movies.push(newMovie)
        res.send(`Successfully added ${newMovie.title} to the database!`)
    })



module.exports = movieRouter