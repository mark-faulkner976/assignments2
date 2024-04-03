const express = require('express')
const inventoryRouter = express.Router()
const Inventory = require('../model/inventory')

// Get all
inventoryRouter.get('/', (req, res, next) => {
    Inventory.find((err, items) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(items)
    })
})

inventoryRouter.get('/category', (req, res, next) => {
    Inventory.find({ category: req.query.category }, (err, items) => {
        if (err) {
            res.status(500)
            return (next(err))
        }
        return res.status(200).send(items)
    })
})

inventoryRouter.post('/', (req, res, next) => {
    const newInventory = new Inventory(req.body)
    newInventory.save((err, savedItem) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedItem)
    })
})

inventoryRouter.delete('/:itemId', (req, res, next) => {
    Inventory.findByIdAndDelete(req.params.itemId, (err, deletedItem) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Deleted Item: ${deletedItem.product}`)
    })
})

inventoryRouter.put('/:itemId', (req, res, next) => {
    Inventory.findOneAndUpdate(
        { _id: req.params.itemId },
        req.body,
        { new: true },
        (err, updatedItem) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedItem)
        })
})

module.exports = inventoryRouter