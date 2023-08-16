// dependencies
const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

// middleware
app.use(express.json())
app.use(morgan('dev'))
mongoose.set("strictQuery", true)
mongoose.connect('mongodb+srv://mark_faulkner976:Vb0&8CPzN18y@cluster0.jcsxmpk.mongodb.net/', () => {
    console.log('Connected to the DB')
})

// routes
app.use('/api/posts', require('./routes/postRouter'))

// error handler
app.use( (err, req, res, next)  => {
    console.log( err )
    return  res.send( { errMsg: err.message } )
} )

app.listen( 8000, () => {
    console.log('Server is running on port 8000')
})