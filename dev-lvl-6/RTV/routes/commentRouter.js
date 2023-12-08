const express = require( "express" );
const commentRouter = express.Router();
const Comment = require( '../models/comment' );


// get all comments on an issue
commentRouter.get( "/", ( req, res, next ) => {
    try { 
        Comment.find(
        ( err, comments ) => {
            if( err ) {
                res.status( 500 )
                return next( err )
            }
            res.status( 200 ).send( comments )
        })
    }
    catch {
        res.status(500)
        res.send({ error : "Get error!" })
    }
} )

// add new comment on an issue
commentRouter.post('/new/:issueId', async (req, res, next) => {
    
    try {
        req.body.userId = req.auth._id
        req.body.issueId = req.params.issueId
        const newComment = new Comment( req.body )
        const savedComment = await newComment.save()
        console.log( savedComment )
        return res.status( 201 ).send( savedComment )

    } catch( err ) {
        res.status( 500 ) 
        return next( err )
    }
})

// delete comment by ID
//, issue: issueId
commentRouter.delete( '/:commentId', ( req, res, next ) => {
    req.body.user = req.auth._id
    const issueId = req.params.issueId
    try {
        Comment.findOneAndDelete(
        { _id: req.params.commentId, user: req.body.user },
        ( err ) => {
            if( err ){
                res.status( 500 )
                return next( err )
            }
            return res.status( 200 ).send( `Successfully deleted comment` )
        })
    }
    catch {
        res.status(500)
        res.send({ error : "delete error!" })
    }
})

module.exports = commentRouter