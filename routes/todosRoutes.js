const express = require('express')
const router = express.Router()

const {
    getTodos,
    createTodo,
    getSingelTodo,
    updateTodo,
    deleteTodo
} = require('../controllers/todosController')

router.get('/', getTodos)
router.post('/', createTodo)
router.get('/:id', getSingelTodo)
router.patch('/:id', updateTodo)
router.delete('/:id', deleteTodo)

module.exports = router