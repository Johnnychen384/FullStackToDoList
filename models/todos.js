const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const Todos = mongoose.model('Todo', todoSchema)

module.exports = Todos