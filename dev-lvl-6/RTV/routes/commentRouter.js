const express = require( "express" );
const commentRouter = express.Router();
const Comment = require( '../models/comment' );

// get all comments on an issue
commentRouter.get( "/:issueId", ( req, res, next ) => {
    Comment.find(
        { issueId: req.params.issueId },
        ( err, comments ) => {
            if( err ) {
                res.status( 500 )
                return next( err )
            }
            res.status( 200 ).send( comments )
        }
    )
} )

// add new comment on an issue
commentRouter.post('/:issueId', (req, res, next) => {

    req.body.userId = req.auth._id
    const id = req.params.issueId
    const newComment = new Comment( req.body )

    Issue.findById( { _id: id }, ( err, issue ) => {
        if(err) {
            res.status( 500 )
            return next( err )
        }
        issue.comments.push( newComment )
        issue.populate( 'comments' )
        issue.save()
        
        return res.status( 200 ).send( issue )
    })
    
})

// delete comment by ID
commentRouter.delete( '/:commentId', ( req, res, next ) => {
    req.body.user = req.auth._id
    const issueId = req.params.issueId
    Comment.findOneAndDelete(
        { _id: req.params.commentId, user: req.body.user, issue: issueId },
        ( err, deletedComment ) => {
            if( err ){
                res.status( 500 )
                return next( err )
            }
            return res.status( 200 ).send( `Successfully deleted comment: ${deletedComment.comment}` )
        })
})

module.exports = commentRouter