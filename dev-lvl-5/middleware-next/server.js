const express = require("express")
const app = express()

app.use(express.json())

app.use("/items", ( req, res, next ) => {
    console.log("the middleware was executed")
    next()
})


app.use("/items", ( req, res, next ) => {
    req.body = { name: "Rick"}
    next()
})

app.get("/items", ( req, res, next ) => {
    console.log("get rcvd")
    res.send(req.body)
})


app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})