const express = require( 'express' )
const bountyRouter = express.Router()
const app = express()
const mongoose = require ('mongoose' )
const morgan = require( 'morgan' )
const Bounty = require( './model/bounty' )

// middleware
app.use( express.json() ) // looks for a req body, turns it into 'req.body'
app.use( morgan( 'dev' ) )

// connect to db
mongoose.connect( `${process.env.MONGO_URL}`, () => console.log( 'connected to database' ) )

// fake data
// const bounties = [
//     { 
//         firstName: 'Darth',
//         lastName: 'Maul',
//         living: true,
//         bountyAmount: 4,
//         type: 'sith',
//         _id: uuidv4()
//      },
//     { 
//         firstName: 'Obi-won',
//         lastName: 'Kenobi',
//         living: true,
//         bountyAmount: 4,
//         type: 'jedi',
//         _id: uuidv4()
//      },
//     { 
//         firstName: 'Anakin',
//         lastName: 'Skywalker',
//         living: true,
//         bountyAmount: 4,
//         type: 'jedi',
//         _id: uuidv4()
//      }
// ]

// get and post

bountyRouter.get( '/', ( req, res, next ) => {
    Bounty.find( ( err, bounties ) => {
        if ( err ) {
            res.status( 500 )
            return next( err )
        }
        return res.status( 200 ).send( bounties )
    } )
} )

bountyRouter.post( '/', ( req,res, next ) => {
    const newBounty = new  Bounty( req.body )
    newBounty.save( ( err, savedBounty ) => {
        if ( err ) {
            res.status( 500 )
            return next( err )
        }
        return res.status( 201 ).send( savedBounty )
    } )
} )

// delete one
bountyRouter.delete( "/:bountyId", ( req, res, next ) => {
    Bounty.findOneAndDelete(
        { _id: req.params.bountyId },
        ( err, deletedItem ) => {
            if ( err ) {
                res.status( 500 )
                return next( err )
            }
            return res.status( 200 ).send( `Successfully turned in bounty for ${ deletedItem.firstName } ${ deletedItem.lastName }`)
        }
    )
} )

//update one
bountyRouter.put( "/:bountyId", ( req, res, next ) => {
    Bounty.findOneAndUpdate(
        { _id: req.params.bountyId },
        req.body,
        { new: true },
        ( err, updatedBounty ) => {
            if ( err ) {
                res.status( 500 )
                return next( err )
            }
            return res.status( 201 ).send( updatedBounty )
        }
    )
} )

// route
app.use('/bounty', bountyRouter)

// error handler
app.use( ( err, req, res, next ) => {
    console.log( err )
    return res.send( { errMsg: err.message } )
} )

// server listen
app.listen(9000, () => {
    console.log("the server is running on Port 9000")
})