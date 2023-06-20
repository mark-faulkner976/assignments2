const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema

// inventory blueprint
const inventorySchema = new Schema( { 
    title: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }
} )

module.exports = mongoose.model( "Inventory", inventorySchema )