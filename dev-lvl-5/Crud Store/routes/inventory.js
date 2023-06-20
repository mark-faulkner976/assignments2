const express = require( 'express' )
const inventoryRouter = express.Router()
const Inventory = require( '../models/inventory' )

// get all
inventoryRouter.get( '/', ( req, res, next ) => {
    Inventory.find( ( err, inventory ) => {
        if( err ){
            res.status( 500 )
            return next( err )
        }
        return res.status( 200 ).send( inventory )
    } )
} )

// get one
inventoryRouter.get( '/:itemId', ( req, res, next ) => {
    Inventory.find( ( err, itemId ) => {
        if ( err ) {
            res.status( 500 )
            return next( err )
        }
        return res.status( 200 ).send( itemId )
    } )
} )

// post one
inventoryRouter.post( '/', ( req, res, next ) => {
    const newItem = new Inventory( req.body )
    newItem.save( ( err, savedItem ) => {
        if( err ) {
            res.status( 500 )
            return next( err )
        }
        return res.status( 201 ).send( savedItem )
    } )
} )

// delete one
inventoryRouter.delete( '/:itemId', ( req, res, next ) => {
    Inventory.findOneAndDelete(
        { _id: req.params.itemId },
        ( err, deletedItem ) => {
            if( err ) {
                res.status( 500 )
                return next( err )
            }
            return res.status( 200 ).send( `Successfully deleted item ${deletedItem.title} from teh database`)
        }
    )
} )

// update one
inventoryRouter.put( "/:itemId", ( req, res, next ) => {
    Inventory.findOneAndUpdate(
        { _id: req.params.itemId },
        req.body,
        { new: true },
        ( err, updatedItem ) => {
            if( err ) {
                res.status( 500 )
                return next( err )
            }
            return res.status( 201 ).send( updatedItem )
        }
    )
} )

module.exports = inventoryRouter