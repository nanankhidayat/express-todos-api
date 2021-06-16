const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, 'todo not be empty']
    },
    completed:{
        type: Boolean,
        default: false
    }
}, {timestamps: true})

const Todo = mongoose.model('todo', todoSchema)

module.exports= Todo