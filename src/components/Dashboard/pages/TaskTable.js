import React, { useEffect, useState } from 'react';
import { GrFormEdit } from 'react-icons/gr';
import { IoCheckmarkDoneCircleSharp, IoTrash, IoEyeOutline } from 'react-icons/io5';
import { Table } from 'react-bootstrap';
import Toaster from '../../../components/Toast'
import { URL } from '../../../App';
import axios from 'axios';
import loader from '../../../images/loader.gif';
import './pages.css';
import ToDoListForm from '../../forms/ToDoListForm';

const TaskTable = () => {

  // component states
  const [taskTable, setTaskTable] = useState([]);
  const [tasksCompleted, setTasksCompleted] = useState([])
  const [visible, setvisible] = useState(false);
  const [isEdit, setIsEdit] = useState(false)
  const [error, setError] = useState(false);
  const [taskId, setTaskId] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [showToast, setShowToast] = useState(false);
  const [task, setTask] = useState({
    title: '',
    priority: 'queue',
    assignedTo: '',
    description: '',
    completed: false
  })

  const handleTaskChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value })
}

  // get task function
  const getTaskapicall = async () => {
    setIsLoading(true)
    try {
      const res = await axios.get(`${URL}/api/task`)
      setTaskTable(res.data)
      setIsLoading(false)
    } catch (err) {
      console.log(err)
      setIsLoading(false)
      setError(true)
      setShowToast(true)
      setErrorMessage(err.message)
    }
  }

  // get single task
  const getSingleTask = async (task) => {
    setvisible(true)
    setIsEdit(false)
    setTaskId(taskTable._id)
    window.scrollTo(0, 0)
    setTask({
      title: task.title,
      priority: task.priority,
      assignedTo: task.assignedTo,
      description: task.description,
      completed: task.completed
    })
  } 

  // edit button function
  const toUpdateTask = async (task) => {
    setvisible(true)
    setIsEdit(true)
    window.scrollTo(0, 0)
    setTask({
      title: task.title,
      priority: task.priority,
      assignedTo: task.assignedTo,
      description: task.description,
      completed: task.completed
    })
    setTaskId(task._id)
  }

  // submit updated form function
  const updateTask = async (e) => {
    e.preventDefault();
    if (task.title === '' || task.assignedTo === '') {
      return (setShowToast(true),
        setErrorMessage('Please enter all input fields'),
        setError(true))
    }

    try {
      await axios.patch(`${URL}/api/task/${taskId}`, task)
      setTask({
        title: '',
    priority: 'queue',
    assignedTo: '',
    description: '',
    completed: false
      })
      setIsEdit(false)
      getTaskapicall();
    } catch (error) {
      showToast(true)
      setErrorMessage('unable to edit task')
    }
  }

  // delete task function
  const deleteTask = async (id) => {
    alert('Are you sure you want to delete task?')
    try {
      await axios.delete(`${URL}/api/task/${id}`)
      setShowToast(true)
      setErrorMessage('Task Deleted')
      getTaskapicall()
    } catch (error) {
      console.log(error.message)
      setShowToast(true)
      setErrorMessage('Could not delete task')
    }
  }

  // set To Complete
  const setToComplete = async (task) => {
    const newFormData = {
      title: task.title,
      priority: task.priority,
      assignedTo: task.assignedTo,
      description: task.description,
      completed: true
    }

    try {
      await axios.put(`${URL}/api/task/${task._id}`, newFormData)
      getTaskapicall();
    } catch (error) {
      setErrorMessage(error.message)
      setShowToast(true)
    }
  }

  useEffect(() => {
    getTaskapicall()
  }, [])

  useEffect(() => {
   const comTask = taskTable.filter((task) => {
      return task.completed === true
    })
    setTasksCompleted(comTask)
  }, [taskTable])


const onclose = () => setShowToast(false)


return (
  <>

    {visible && <ToDoListForm task={task} visibility={visible} edit={isEdit} update={updateTask} onchange={handleTaskChange} />}

    {isLoading && <div className='loading-img'>
      <img src={loader} alt='loading' />
    </div>}

    {error && <Toaster onclose={onclose} showtoast={showToast} error={error} errormessage={errorMessage} />}
    {!error && taskTable.length === 0 ? <div>No Task Found in the database</div> : !visible ? <><div className='task-details'>
      <p><b>Total task</b> : {taskTable.length}</p>
      <p><b>Completed task</b> : {tasksCompleted.length}</p>
    </div><Table bordered responsive className='task-table'>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Task Title</th>
            <th>Assigned To</th>
            <th>Priority</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {taskTable && taskTable.map((row, id) =>
            <tr key={id} style={{ backgroundColor: row.completed === true ? 'var(--green)' : row.priority === 'urgent' ? 'red' : '', color: row.completed === true ? '#fff' : row.priority === 'urgent' ? '#fff' : '' }}>
              <td>{id + 1}</td>
              <td>{row.title}</td>
              <td>{row.assignedTo}</td>
              <td>{row.priority}</td>
              <td className='table-icons'>
                <span><GrFormEdit onClick={() => { toUpdateTask(row) }} /></span>
                <span><IoEyeOutline onClick={() => { getSingleTask(row) }} /></span>
                <span><IoCheckmarkDoneCircleSharp onClick={() => { setToComplete(row) }} /></span>
                <span><IoTrash onClick={() => { deleteTask(row._id) }} /></span>
              </td>
            </tr>)}
        </tbody>
      </Table>
    </> : ''
    }
  </>
)
}

export default TaskTable