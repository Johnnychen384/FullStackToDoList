import {useState, useEffect} from "react"
import  axios from "axios"
import './App.css';

function App() {
  const [allTasks, setAllTasks] = useState([])

  const getAllTask = () => {
    axios.get('http://localhost:3000/task')
    .then(res => setAllTasks(res.data), (error) => console.log(error))
    .catch(error => console.log(error))
  }

  const handleCreate = (task) => {
    axios.post('http://localhost:3000/task', task)
    .then(res => setAllTasks([...allTasks, res.data]))
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

  return (
    <>
      <h1>Hi</h1>
    </>
  )
}

export default App;
