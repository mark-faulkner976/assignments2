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
    comment: {
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }
})

module.exports = mongoose.model( "Issue", issueSchema )