const express = require( "express" )
const issuesRouter = express.Router()
const Issue = require( '../models/issue' )

// Get all Issues
issuesRouter.get( "/", ( req, res, next ) => {
    Issue.find( ( err, issues ) => {
        if( err ) {
            res.status( 500 )
            return next( err )
        }
        return res.status( 200 ).send( issues )
    })
} )

// get issue by userId
issuesRouter.get("/user", ( req, res, next ) => { 
    Issue.find( { user: req.auth._id }, ( err, issues ) => {
        if( err ) {
            res.status( 500 )
            return next( err )
        }
        return res.status( 200 ).send( issues )
    } )
})

// add new issues
issuesRouter.post( "/", ( req, res, next ) => {
    req.body.user = req.auth._id
    const newIssue = new Issue( req.body )
    newIssue.save( ( err, savedIssue ) => {
        if( err ) {
            res.status( 500 )
            return next( err )
        }
        return res.status( 201 ).send( savedIssue )
    } )
} )

// delete issue
issuesRouter.delete( "/:issueId", ( req, res, next ) => {
    Issue.findOneAndDelete(
      { _id: req.params.issueId, user: req.auth._id },
      ( err, deletedIssue ) => {
        if( err ){
          res.status( 500 ) 
          return next( err )
        }
        return res.status( 200 ).send( `Successfully delete issue: ${deletedIssue.title}` )
      }
    )
  })

// update issue
issuesRouter.put( "/:issueId", ( req, res, next ) => {
    Issue.findOneAndUpdate(
      { _id: req.params.IssueId, user: req.auth._id },
      req.body,
      { new: true },
      ( err, updatedIssue ) => {
        if( err ){
          res.status( 500 )
          return next( err )
        }
        return res.status( 201 ).send( updatedIssue )
      }
    )
  })


module.exports = issuesRouter