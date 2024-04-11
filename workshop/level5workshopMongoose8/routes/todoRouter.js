// dependencies
const express = require('express');
// instantiating todoRouter as an express router
const todoRouter = express.Router()
// creating a variable called Todo that pulls from the todo model
const Todo = require("../models/todo");
const todo = require('../models/todo');


/*
* *  post request mongoose 6 (with callbacks)
?   todoRouter.post('/', (req, res, next) => {
?    const newTodo = new Todo(req.body)
?      newTodo.save((err, savedTodo) => {
?           if(err){
?                   res.status(500)
?                   return next(err)
?               }
?               return res.status(201).send(savedTodo)
?            })
?         })
            
*/

todoRouter.post( "/", async ( req, res, next ) => {
    try {
        const newTodo = new Todo( req.body )
        const savedTodo = await newTodo.save()
        return res.status( 201 ).send( savedTodo )
    } catch ( error ) {
        res.status( 500 )
        return next( error )
    }
})

/*
* * post request mongoose 8 (no callbacks, adding async await)
*/



/* 
* * get request mongoose 6 (with callbacks)
?   todoRouter.get('/', (req, res, next) => {
?       Todo.find((err, todos) => {
?           if(err){
?               res.status(500)
?               return next(err)
?           }
?           return res.status(200).send(todos)
?          })
?          })
*/
/*
* * get request mongoose 8 (no callbacks, async await)
*/

todoRouter.get("/", async (req, res, next) => {
    try {
        const allTodos = await Todo.find()
        return res.status( 200 ).send( allTodos )
    } catch ( error ) {
        res.status( 500 )
        return next( error )
    }
})


/*
* * delete request mongoose 6 (with callbacks)
?todoRouter.delete("/:id", (req, res, next) => {
?   Todo.findByIdAndDelete(
?       {_id: req.parms.id}
?       (err, deletedTodo) => {
?           if(err){
?               res.status(500)
?               return next(err)
?           }
?           return res.status(201).send({`Deleted ${deletedTodo.title}`)
?       }
?   )
?})
?})
*/

todoRouter.delete( "/:id", async ( req, res, next ) => {
    try {

        const deletedTodo = await Todo.findByIdAndDelete( req.params.id )
        return res.status( 201 ).send(`You have deleted ${deletedTodo.title}`)

    } catch ( error ) {

        res.status( 500 )
        return next( error )

    }
})

/* 
* * delete request mongoose 8 (no callbacks, async await)
*/




/*
* * put request mongoose 6 (with callbacks)

?   todoRouter.put("/:id", (req, res, next) => {
?       Todo.findByIdAndUpdate(
?           req.params.id, 
?           req.body, 
?           { new: true },
?           (error, foundTodo) => {
?               if (error) {
?               res.status(500);
?               return next(error);
?       }   
?       res.status(201).send(`You have successfully updated ${foundTodo.title}`);
?   });
?});

*/

todoRouter.put( '/:id', async ( req, res, next ) => {
    try {

        const updatedTodo = await Todo.findByIdAndUpdate( 
            req.params.id,
            req.body,
            { new: true }
        )
        return res.status( 201 ).send( updatedTodo )
        
    } catch ( error ) {
        res.status( 500 )
        return next( error )
    }
})

/*
* * put request mongoose 8 (no callbacks, async await)
*/




/*
* * get one request mongoose 6 (with callbacks)
?   todoRouter.get("/:id", (req, res, next) => {
?       Todo.findById(req.params.id, (error, foundTodo) => {
?           if (error) {
?               res.status(500);
?               return next(error);
?           }
?           res.status(200).send(foundTodo);
?       });
?     });
*/

todoRouter.get( '/:id', async ( req, res, next ) => {
    try {

        const oneTodo = await Todo.findById( req.params.id )
        return res.status( 200 ).send( oneTodo )
        
    } catch ( error ) {
        res.status( 500 )
        return next( error )
    }
})

/*
 * * get one Todo mongoose 8 (no callbacks, async await)
*/


module.exports = todoRouter