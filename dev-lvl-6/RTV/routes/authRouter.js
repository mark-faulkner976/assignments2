const express = require("express")
const authRouter = express.Router()
const User = require('../models/user.js')
const jwt = require("jsonwebtoken")

// sign up route
// authRouter.post("/signup", ( req, res, next ) => {
//     User.findOne({ username: req.body.username.toLowerCase() }, ( err, user ) => {
//         // error handling
//         if( err ) {
//             res.status( 500 )
//             return next( err )
//         }
//         // make sure unique username
//         if( user ) {
//             res.status( 403 )
//             return next( new Error("that username is already taken. please try a different username") )
//         }
//         // if username sign up passes previous ifs, makes new username
//         const newUser = new User( req.body )
//         newUser.save( ( err, savedUser ) => {
//             if( err ) {
//                 res.status( 500 )
//                 return next( err )
//             }
//             const token = jwt.sign( savedUser.toObject(), process.env.SECRET )
//             return res.status( 201 ).send( { token, user: savedUser } )
//         } )
//     } )
// } )

authRouter.post("/signup", async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.body.username.toLowerCase() });

        // Make sure unique username
        if (user) {
            res.status(403);
            throw new Error("That username is already taken. Please try a different username.");
        }

        // If username sign up passes previous if, create new user
        const newUser = new User(req.body);
        const savedUser = await newUser.save();

        const token = jwt.sign(savedUser.toObject(), process.env.SECRET);
        return res.status(201).send({ token, user: savedUser });
    } catch (err) {
        res.status(500);
        return next(err);
    }
});

// Login
authRouter.post( "/login", ( req, res, next ) => {
    User.findOne( { username: req.body.username.toLowerCase() }, ( err, user ) => {
        if( err ) {
            res.status( 500 )
            return next( err )
        }
        if( !User ) {
            res.status( 403 )
            return next( new Error( "Username or Password are incorrect" ) )
        }
        user.checkPassword( req.body.password, ( err, isMatch ) => {
            if( err ) {
              res.status( 403 )
              return next( new Error( "Username or Password are incorrect" ) )
            }
            if( !isMatch ) {
              res.status( 403 )
              return next( new Error( "Username or Password are incorrect" ) )
            }
            const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
            return res.status( 200 ).send( { token, user: user.withoutPassword() } )
          } )
    } ) 
} )


module.exports = authRouter