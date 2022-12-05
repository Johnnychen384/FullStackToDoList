const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Todos = require('./models/todos.js')

mongoose.connect('mongodb://localhost:27017/animaladoption')
mongoose.connection.once('open', () => {
    console.log('connected to mongod...')
})

app.listen(3000, () => {
    console.log('listening...')
})

// Create - Add a task

// Read - View tasks
app.get('/', (req, res) => {
    res.send("Hello world")
})

// Update - Edit tasks

// Delete - Delete tasks