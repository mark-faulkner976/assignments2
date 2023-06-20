const express = require("express")
const app = express()





app.use('/numbers', require('./middleMan'))

app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})