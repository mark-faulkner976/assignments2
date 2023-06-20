const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema

// bounty blueprint
const bountySchema = new Schema( {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        living: {
            type: String
        },
        bountyAmount: {
            type: Number,
            required: true
        },
        type: {
            type: String,
            enum: ["sith", 'Sith', 'jedi', "Jedi"] ,
            required: true
        }
} )

module.exports = mongoose.model( "Bounty", bountySchema )