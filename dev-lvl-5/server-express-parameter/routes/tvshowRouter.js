const express = require('express')
const tvshowRouter = express.Router()
const {v4: uuidv4 } = require('uuid')

const tvShows = [
    { title: "Ricktholomew and Mortimuss", _id: uuidv4() },
    { title: "Watchpeople", _id: uuidv4() },
    { title: "Eastworld", _id: uuidv4() },
    { title: "Enemies", _id: uuidv4() }
]


// tvshowRouter.get('/', (req, res) => {
//     res.send(tvShows)
// })

// tvshowRouter.post('/', (req,res) => {
//     const newTvShow = req.body
//     newTvShow._id = uuidv4()
//     tvShows.push(newTvShow)
//     res.send(`Successfully added ${newTvShow.title} to the database!`)
// })

// way to streamline all reqs
tvshowRouter.route('/')
    .get((req, res) => {
        res.send(tvShows)
    })

    .post((req,res) => {
        const newTvShow = req.body
        newTvShow._id = uuidv4()
        tvShows.push(newTvShow)
        res.send(`Successfully added ${newTvShow.title} to the database!`)
    })

tvshowRouter.get("/:tvshowId", (req, res) =>{
    const tvshowId = req.params.tvshowId
    const foundShow = tvShows.find(show => show._id === tvshowId)
    res.send(foundShow)
})


module.exports = tvshowRouter