const express = require('express')
const app = express()

// middleware
app.use(express.json()) // looks for a req body, turns it into 'req.body'


// routes
app.use('/movies', require('./routes/movieRouter.js'))
app.use('/tvshows', require('./routes/tvshowRouter.js'))


// server listen
app.listen(9000, () => {
    console.log("the server is running on Port 9000")
})