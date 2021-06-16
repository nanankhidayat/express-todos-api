const Todo = require('../models/Todo')

const getTodos = async(req, res) => {
    try {
       const todos = await Todo.find({})
       res.status(200).json({todos}) 
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Server Error'})
    }
}

const createTodo = async (req, res) => {
    try {
        const todo = new Todo(req.body)
        todo.save()
        res.status(201).json({todo})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Server Error'})
    }
}

const getSingelTodo = async (req, res, next) => {
    try {
        id = req.params.id
        todo = await Todo.findById({_id: id})

        if(!todo){
            return res.status(404).json({message: 'todo not found'})
        }

        res.status(200).json({todo})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Server Error'})
    }
}

const updateTodo = async (req, res) => {
    try {
        filter = {_id: req.params.id}
        update = req.body
        todo = await Todo.findOneAndUpdate(filter, update, {new: true})

        if(!todo){
            return res.status(404).json({message: 'todo not found'})
        }

        res.status(201).json({todo})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Server Error'})
    }
}

const deleteTodo = async (req, res) => {
    try {
        id = req.params.id
        todo = await Todo.findOneAndDelete({_id: id})

        if(!todo){
            return res.status(404).json({message: 'todo not found'})
        }
        
        res.status(200).json({message: 'Todo delete'})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Server Error'})
    }
}

module.exports = {
    getTodos,
    createTodo,
    getSingelTodo,
    updateTodo,
    deleteTodo
}