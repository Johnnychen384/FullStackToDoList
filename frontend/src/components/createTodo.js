import {useState, useEffect} from 'react'
import Edit from './edit'

const CreateTodo = (props) => {
    console.log(props.task)
    const [editIt, setEditIt] = useState(false)
    let checkIt;

    if(props.task.completed){
        checkIt = <input className="form-check-input" type="checkbox" id={props.task._id} checked/>
    } else {
        checkIt = <input className="form-check-input" type="checkbox" id={props.task._id} />
    }


    return (
        <>
            <div className="card my-2">
                <div className="card-body">
                    <h5 className="card-title">{props.task.task}</h5>
                    <div className="form-check">
                        {checkIt}
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