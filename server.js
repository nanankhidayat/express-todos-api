require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const connectDB = require('./config/db')

// Connect to DB
connectDB()

// Initialization
const app = express()
port = process.env.PORT || 5000

// Controller
const todosRoutes = require('./routes/todosRoutes.js')

// Middleware
app.use(morgan('dev'))
app.use(express.json())

// Routes
app.use('/api/v1/todos', todosRoutes)

app.listen(port, () => console.log(`Server running on port : ${port}`))