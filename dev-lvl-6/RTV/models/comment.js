const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema( { 
    description: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref:'User',
        required: true
    }
} )