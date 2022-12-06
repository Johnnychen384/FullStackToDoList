import {useState} from 'react'

const CreateTodo = (props) => {
    const [todo, setTodo] = useState({task: '', completed: false})

    const handleChange = (e) => {
        setTodo({...todo, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleCreate(todo)
    }

    return (
        <h1>HTML for the create page goes here</h1>
    )

}