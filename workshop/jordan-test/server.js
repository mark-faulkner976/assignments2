const express = require('express')
const mongoose = require('mongoose')
const app = express()
const morgan = require('morgan')

app.use(express.json())
app.use(morgan('dev'))

mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://jordanburger:helloworld@cluster0.zrmjrwz.mongodb.net/',
    (err) => console.log('Connected to DB', err)
)


app.use('/inventory', require('./routes/inventoryRouter'))


app.use((err, req, res, next) => {
    console.log(err)
    return res.send({ errMsg: err.message })
})

app.listen(8000, () => console.log('Server running on port 8000'))