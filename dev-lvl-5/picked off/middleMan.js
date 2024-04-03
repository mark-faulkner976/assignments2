const express = require("express")
const middleMan = express.Router()
const {v4: uuidv4 } = require('uuid')


const numbers = [ 
    { num: 1, _id: uuidv4() }, 
    { num: 2, _id: uuidv4() }, 
    { num: 3, _id: uuidv4() }, 
    { num: 4, _id: uuidv4() }, 
    { num: 5, _id: uuidv4() }, 
    { num: 6, _id: uuidv4() } 
]



middleMan.use("/", ( req, res, next ) => {
    console.log('i work')
    next()
})

middleMan.get("/", ( req, res, next ) => {
    res.send(numbers)
    next()
})



module.exports = middleMan