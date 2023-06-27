const mongoose = require( 'mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema ( {
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    genre: {
        type: String
    },
    platform: {
        type: String
    }
} )

module.exports = mongoose.model( "User", userSchema )