import {useState} from 'react'

const Edit = (props) => {
    const [todo, setTodo] = useState({...props.task})
    console.log(todo)

    const handleChange = (e) => {
        setTodo({...todo, [e.target.name]: e.target.value})
    }

    const handleCheck = (e) => {
        setTodo(prev => {
            return {...todo, completed: !prev.completed }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleEdit(todo)
    }

    let checkIt;

    if(todo.completed){
        checkIt = <input type='checkbox' value={todo.completed} onChange={handleCheck} checked/>
    } else {
        checkIt = <input type='checkbox' value={todo.completed} onChange={handleCheck}/>
    }



    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="task" value={todo.task} onChange={handleChange}/>
                {checkIt}
                <input type="submit"/>
            </form>
            
        </>
       
    )
}

export default Edit