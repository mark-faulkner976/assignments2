const express = require( 'express' )
const app = express()
const morgan = require( 'morgan' )
const mongoose = require( 'mongoose' )

// middleware
app.use(express.json()) // looks for a req body, turns it into 'req.body'
app.use(morgan('dev'))

// connect to db. the local server version is not owrking properly. used mongodb atlas as a host
mongoose.connect( , () => console.log( 'connected to database' ) )
// .then( () => console.log( "connected to MongoDB" ) )
// .catch( err => console.log( err ) )

// routes
app.use('/movies', require( './routes/movieRouter.js' ) )
app.use('/tvshows', require( './routes/tvshowRouter.js' ) )

// error handler
app.use( ( err, req, res, next ) => {
    console.log( err )
    return res.send( { errMsg: err.message } )
} )

// server listen
app.listen(9000, () => {
    console.log( "the server is running on Port 9000" )
})