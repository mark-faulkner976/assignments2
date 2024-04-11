// dependencies
const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const app = express();
require("dotenv").config();

// middleware
app.use(express.json());
app.use(morgan("dev"));

// connection to database function 
const connectToDb = async () => {
    try {
     await mongoose.connect("mongodb+srv://zakward85:oPOlFsKz0WpuKN72@cluster0.8z05imv.mongodb.net/")   
     console.log("Connected to the MongoDB")
    } catch (error) {
        console.log(error)
    }
}

// calling the connection to database function 
connectToDb() 

// routes
app.use("/todo", require("./routes/todoRouter"))

// error handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
}) 


// verify that the server is up and running
app.listen(7000, () => console.log("The server is running on Port 7000"))