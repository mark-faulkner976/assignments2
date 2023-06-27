const express = require( "express" );
const commentRouter = express.Router();
const Comment = require( '../models/comment' );


// get all comments on an issue
commentRouter.get( "/", ( req, res, next ) => {
    Comment.find(
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
commentRouter.post('/new', (req, res, next) => {
    
    req.body.userId = req.auth._id
    const newComment = new Comment( req.body )

    try {
        newComment.save((err, comment) => {
            if (err) {
                res.send(err)
            } else {
                res.send(comment)
                console.log('comment saved', comment)
            }
        })
    } catch {
        res.status(500)
        res.send({ error : "Request error!" })
    }
})

// delete comment by ID
//, issue: issueId
commentRouter.delete( '/:commentId', ( req, res, next ) => {
    req.body.user = req.auth._id
    const issueId = req.params.issueId
    Comment.findOneAndDelete(
        { _id: req.params.commentId, user: req.body.user },
        ( err ) => {
            if( err ){
                res.status( 500 )
                return next( err )
            }
            return res.status( 200 ).send( `Successfully deleted comment` )
        })
})

module.exports = commentRouter