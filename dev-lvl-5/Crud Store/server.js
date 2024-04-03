const express = require( 'express' )
const app = express()
const morgan = require( 'morgan' )
const mongoose = require( 'mongoose' )
require("dotenv").config()

// middleware
app.use( express.json() )
app.use( morgan( 'dev' ) )

const inventory = []

// connect to the relavent server 
// mongoose.connect( `${process.env.MONGO_URL}`, () => console.log( 'connected to database' ) )
async function connectToDatabase() {
    try {
      await mongoose.connect(`${process.env.MONGO_URL}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Connected to the database');
    } catch (error) {
      console.error('Error connecting to the database:', error);
    }
  }

connectToDatabase()

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