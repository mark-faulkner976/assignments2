const express = require('express')
const fruitRouter = express.Router()
const app = express()
const { v4: uuidv4 } = require('uuid')

// middleware
app.use(express.json()) // looks for a req body, turns it into 'req.body'

// fake data
const fruit = [
    [
        {
            name: "banana",
            type: "food",
            price: 200,
        },{
            name: "pants",
            type: "clothing",
            price: 2500,
        },{
            name: "basket ball",
            type: "toy",
            price: 1000,
        },{
            name: "rockem sockem robots",
            type: "toy",
            price: 1500,
        },{
            name: "shirt",
            type: "clothing",
            price: 800,
        },{
            name: "soup",
            type: "food",
            price: 300,
        },{
            name: "flour",
            type: "food",
            price: 100,
        }
    ]
]

fruitRouter.route("/")
    .get((req, res) => {
        res.send(fruit)
    })

    .post((req,res) => {
        const newFruit = req.body
        newFruit._id = uuidv4()
        bounties.push(newFruit)
        res.send(`Successfully added ${newFruit.title} to the database!`)
    })

fruitRouter.get("/search/type", (req, res) => {
    const type = req.query.type
    const filteredFruit = fruit.filter( fruit => fruit.type === type )
    res.send(filteredFruit)
})

fruitRouter.get("/search/type", (req, res) => {
    const type = req.query.type
    const filteredFruit = fruit.filter( fruit => fruit.type === type )
    res.send(filteredFruit)
})

app.use('/fruit', fruitRouter)

app.listen(9000, () => {
    console.log("the server is running on Port 9000")
})