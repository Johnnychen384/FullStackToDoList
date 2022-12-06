import {useState, useEffect} from "react"
import  axios from "axios"
import './App.css';
import CreateTodo from "./components/createTodo"

function App() {
  const [allTasks, setAllTasks] = useState([])
  const [todo, setTodo] = useState({task: '', completed: false})


  const getAllTask = () => {
    axios.get('http://localhost:3000/task')
    .then(res => setAllTasks(res.data), (error) => console.log(error))
    .catch(error => console.log(error))
  }

  const handleCreate = (task) => {
    axios.post('http://localhost:3000/task', task)
    .then(res => setAllTasks([...allTasks, res.data]))
  }

  const handleChange = (e) => {
    setTodo({...todo, [e.target.name]: e.target.value})
}

  const handleSubmit = (e) => {
    e.preventDefault()
    handleCreate(todo)
    document.getElementById('floatingInput').value = ''

  }

  const handleEdit = (task) => {
    axios.put('http://localhost:3000/task/' + task._id, task)
    .then(res => {
      const newTasks = allTasks.map(item => item._id !== task._id ? item : task)
      setAllTasks(newTasks)
    })
  }

  const handleDelete = (task) => {
    axios.delete('http://localhost:3000/task/' + task._id)
    .then(res => {
      const newTasks = allTasks.filter(item => item._id !== task._id)
      setAllTasks(newTasks)
    })
  }

  useEffect(() => {
    getAllTask()
  }, [])

  const taskArray = allTasks.map((task, i) => <CreateTodo key={i} task={task} handleEdit={handleEdit} handleDelete={handleDelete}/>)

  return (
    <>
      <main className="w-50 mx-auto my-5 text-center">
        <form onSubmit={handleSubmit}>
          <h1 className="h3 mb-3 fw-normal">Please Add A Task</h1>

          <div className="form-floating">
            <input type="text" className="form-control" id="floatingInput" placeholder="What to do..." name="task" onChange={handleChange}/>
            <label htmlFor="floatingInput">Your Task....</label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Add Task</button>

        </form>
      </main>
      <div className="w-75 mx-auto">
        {taskArray}
      </div>
    </>
  )
}

export default App;
