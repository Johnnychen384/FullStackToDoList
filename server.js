const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Todos = require('./models/todos.js')

app.use(express.json())

mongoose.connect('mongodb://localhost:27017/todos')
mongoose.connection.once('open', () => {
    console.log('connected to mongod...')
})

app.listen(3000, () => {
    console.log('listening...')
})

// Create - Add a task
app.post('/task', (req, res) => {
    Todos.create(req.body, (error, todo) => {
        res.json(todo)
    })
})

// Read - View tasks
app.get('/task', (req, res) => {
    Todos.find({}, (error, allTasks) => {
        res.json(allTasks)
    })
})

// Update - Edit tasks
app.put('/task/:id', (req, res) => {
    Todos.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, todo) => {
        res.json(todo)
    })
})

// Delete - Delete tasks
app.delete('/task/:id', (req, res) => {
    Todos.findByIdAndRemove(req.params.id, (error, todo) => {
        res.json(todo)
    })
})