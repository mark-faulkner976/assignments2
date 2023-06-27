const mongoose = require('mongoose')
const Schema = mongoose.Schema

const issueSchema = new Schema ( {
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    upvotes: {
        type: Number,
        default: 0
    },
    downvotes: {
        type: Number,
        default: 0
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    upVote: [{
        type: Schema.Types.ObjectId,
        ref:"User"
    }],
    downVote: [{
        type: Schema.Types.ObjectId,
        ref:"User"
    }]
} )

module.exports = mongoose.model( "Issue", issueSchema )