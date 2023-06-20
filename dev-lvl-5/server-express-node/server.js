const express = require('express')
const app = express()
const morgan = require('morgan')

// middleware
app.use(express.json()) // looks for a req body, turns it into 'req.body'
app.use(morgan('dev')) // logs reqs to the console

// routes
app.use('/movies', require('./routes/movieRouter.js'))
app.use('/tvshows', require('./routes/tvshowRouter.js'))


// server listen
app.listen(9000, () => {
    console.log("the server is running on Port 9000")
})