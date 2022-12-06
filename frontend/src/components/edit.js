import {useState} from 'react'

const Edit = (props) => {
    const [todo, setTodo] = useState({...props.task})

    const handleChange = (e) => {
        setTodo({...todo, [e.target.name]: e.target.value})
    }

    const handleCheck = (e) => {
        setTodo({...todo, [e.target.checked]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleEdit(todo)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="task" value={todo.task} onChange={handleChange}/>
                <input type='checkbox' value={todo.completed} onChange={handleCheck}/>
                <input type="submit"/>
            </form>
            
        </>
       
    )
}

export default Edit