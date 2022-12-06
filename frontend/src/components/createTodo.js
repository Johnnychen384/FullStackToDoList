import {useState} from 'react'
import Edit from './edit'

const CreateTodo = (props) => {
    const [editIt, setEditIt] = useState(false)
    return (
        <>
            <div className="card my-2">
                <div className="card-body">
                    <h5 className="card-title">{props.task.task}</h5>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id={props.task._id}/>
                        <label className="form-check-label" htmlFor={props.task._id}>
                            Completed
                        </label>
                    </div>
                    <div className="btn-group" role="group">
                        <button type="button" className="btn btn-primary" onClick={() => {
                          setEditIt(prev => !prev)
                        }}>Edit</button>
                        <button type="button" className="btn btn-primary" onClick={() => {
                          props.handleDelete(props.task)
                        }}>Delete</button>
                    </div>
                </div>
                {editIt ? <Edit task={props.task} handleEdit={props.handleEdit}/> : null}
            </div>
        </>
    )
}

export default CreateTodo