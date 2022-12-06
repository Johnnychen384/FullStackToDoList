import {useState} from 'react'

const CreateTodo = (props) => {

    return (
        <>
            <div class="card">
                <div class="card-bidy">
                    <h5 class="card-title">{props.task}</h5>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="completed"/>
                        <label class="form-check-label" for="completed">
                            Completed
                        </label>
                    </div>
                    <div class="btn-group" role="group">
                        <button type="button" class="btn btn-primary">Edit</button>
                        <button type="button" class="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}