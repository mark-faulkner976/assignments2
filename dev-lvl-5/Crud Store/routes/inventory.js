const express = require( 'express' )
const inventoryRouter = express.Router()
const Inventory = require( '../models/inventory' )

// get all
// inventoryRouter.get( '/', ( req, res, next ) => {
//     Inventory.find( ( err, inventory ) => {
//         if( err ){
//             res.status( 500 )
//             return next( err )
//         }
//         return res.status( 200 ).send( inventory )
//     } )
// } )

inventoryRouter.get( '/get', async ( req, res, next ) => {
    try {
        const inventory = await Inventory.find()
        res.status( 200 ).send( inventory )
    } catch (error) {
        res.status( 500 )
        return next( error )
    }
})

// get one
// inventoryRouter.get( '/:itemId', ( req, res, next ) => {
//     Inventory.find( ( err, itemId ) => {
//         if ( err ) {
//             res.status( 500 )
//             return next( err )
//         }
//         return res.status( 200 ).send( itemId )
//     } )
// } )

inventoryRouter.get( "/:itemId", async( req, res, next ) => {
    try {
        const item = await Inventory.find( { _id: req.params.itemId } )
        return res.status( 200 ).send( item )
    } catch (error) {
        res.status( 500 )
        return next( error )
    }
} )

// post one
// inventoryRouter.post( '/', ( req, res, next ) => {
//     const newItem = new Inventory( req.body )
//     newItem.save( ( err, savedItem ) => {
//         if( err ) {
//             res.status( 500 )
//             return next( err )
//         }
//         return res.status( 201 ).send( savedItem )
//     } )
// } )

inventoryRouter.post( '/', async (req, res, next) => {
    try {
        const newItem = new Inventory( req.body )
        const savedItem = await newItem.save()
        return res.status( 201 ).send( savedItem )
    } catch (error) {
        res.status( 500 )
        return next(error)
    }
})

// delete one
// inventoryRouter.delete( '/:itemId', async ( req, res, next ) => {
    // Inventory.findOneAndDelete(
    //     { _id: req.params.itemId },
    //     ( err, deletedItem ) => {
    //         if( err ) {
    //             res.status( 500 )
    //             return next( err )
    //         }
    //         return res.status( 200 ).send( `Successfully deleted item ${deletedItem.title} from teh database`)
    //     }
    // )

inventoryRouter.delete( '/:itemId', async ( req, res, next ) => {
    try {
        const deletedItem = await Inventory.findOneAndDelete( { _id: req.params.itemId } )
        return res.status( 200 ).send( `Successfully deleted item ${deletedItem.title} from teh database` )
    } catch (error) {
        res.status( 500 )
        return next( error )
    }
} )

// update one
// Inventory.findOneAndUpdate(
//     { _id: req.params.itemId },
//     req.body,
//     { new: true },
//     ( err, updatedItem ) => {
//         if( err ) {
//             res.status( 500 )
//             return next( err )
//         }
//         return res.status( 201 ).send( updatedItem )
//     }
// )
inventoryRouter.put( "/:itemId", async ( req, res, next ) => {
    try {
        const updatedItem = await Inventory.findOneAndUpdate( { _id: req.params.itemId }, req.body, { new: true } )
        return res.status( 201 ).send( updatedItem )
    } catch (error) {
        res.status( 500 )
        return next( error )
    }
} )

module.exports = inventoryRouter