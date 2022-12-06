
const Edit = (props) => {
    return (
        <>
            <input type="text" name="task" value={props.task.task}/>
            <input type='checkbox' value={props.task.completed}/>
        </>
       
    )
}

export default Edit