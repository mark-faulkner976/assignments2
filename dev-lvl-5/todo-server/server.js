const express = require('express')
const todoRouter = express.Router()
const app = express()
const { v4: uuidv4 } = require('uuid')


app.use(express.json()) // looks for a req body and turns it into a 'req.body'


const todoList = [
    {
        name: "The name",
        description: "The description of the todo",
        imageUrl: "http://www.myimage....",
        completed: false,
        _id: uuidv4()
    },
    {
        name: "seven",
        description: "it b how it do tho",
        imageUrl: "http://www.google.com",
        completed: true,
        _id: uuidv4()
    }
]

// ge and post req
todoRouter.route("/")
    .get((req, res) => {
        res.send(todoList)
    })

    .post((req,res) => {
        const newTodo = req.body
        console.log(req.body)
        newTodo._id = uuidv4()
        todoList.push(newTodo)
        res.send(`Successfully added ${newTodo.title} to the database!`)
    })

// delete one
todoRouter.delete("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todoList.findIndex(todo => todo._id === todoId)
    todoList.splice(todoIndex, 1)
    res.send(`Successfully deleted!`)
})

//update one
todoRouter.put("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const updateObject = req.body
    const todoIndex = todoList.findIndex(todo => todo._id === todoId)
    const updatedTodoList = Object.assign(todoList[todoIndex], updateObject)
    res.send(updatedTodoList)
})

// get one
todoRouter.get('/:todoId', (req, res) => {
    const todoId = req.params.todoId
    const foundTodo= todoList.find( todo => todo._id === todoId )
    res.send(foundTodo)
})


app.use('/todo', todoRouter)

app.listen(9000, () => {
    console.log("the server is running on Port 9000")
})