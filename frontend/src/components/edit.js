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
        checkIt = <input type='checkbox' class="form-check-input" id={todo._id} value={todo.completed} onChange={handleCheck} checked/>
    } else {
        checkIt = <input type='checkbox' class="form-check-input" id={todo._id} value={todo.completed} onChange={handleCheck}/>
    }



    return (
        <>
            <form onSubmit={handleSubmit} className="row g-3 align-items-center">
                <div className="col-auto">
                    <label htmlFor={todo._id} className="form-label">Edit task</label>
                    <input type="text" className="form-control" name="task" value={todo.task} id={todo._id} onChange={handleChange}/>
                </div>
                <div className="col-auto">
                    <div className='form-check'>
                        <label className="form-check-label" for={todo._id}>
                            Is completed?
                        </label>
                        {checkIt}
                    </div>
                </div>
                <div className="col-auto">
                    <button type="submit" className='btn btn-dark mb-3'>Submit</button>
                </div>
            </form>
        </>
    )
}

export default Edit