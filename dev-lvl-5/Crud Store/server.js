const express = require( 'express' )
const app = express()
const morgan = require( 'morgan' )
const mongoose = require( 'mongoose' )

// middleware
app.use( express.json() )
app.use( morgan( 'dev' ) )

const inventory = []

// connect to the relavent server 
mongoose.connect( , () => console.log( 'connected to database' ) )

// routes
app.use( '/inventory', require( './routes/inventory' ) )

// error handler 
app.use( ( err, req, res, next ) => {
    console.log( err )
    return res.send( { errMsg: err.message } )
} )

// server listen
app.listen( 9000, () => {
    console.log( "the server is running on Port 9000" )
} )