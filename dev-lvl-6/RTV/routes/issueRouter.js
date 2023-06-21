const express = require( "express" )
const issuesRouter = express.Router()
const Issue = require( '../models/issue' )

// Get all Issues
todoRouter.get( "/", ( req, res, next ) => {
    Issue.find( ( err, issues ) => {
        if( err ) {
            res.status( 500 )
            return next( err )
        }
        return res.status( 200 ).send( issues )
    })
} )

// get issue by userId
