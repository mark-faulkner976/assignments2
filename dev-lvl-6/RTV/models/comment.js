const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema( { 
    comment: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.String,
        ref:'User',
        required: true
    },
    issueId: {
        type: Schema.Types.String,
        ref: "Issue",
        required: true
    }
} )

module.exports = mongoose.model( "Comment", commentSchema )