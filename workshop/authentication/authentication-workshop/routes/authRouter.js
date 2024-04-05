const express = require('express')
const authRouter = express.Router()
const User = require('../models/user')
const jwt = require('jsonwebtoken')

// signup
authRouter.post( '/signup', ( req, res, next) => {
    
})


module.exports = authRouter