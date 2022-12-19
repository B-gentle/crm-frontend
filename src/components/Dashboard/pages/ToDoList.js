import React, { useState, useReducer } from 'react';
import Toaster from '../../Toast';
import axios from 'axios';
import './pages.css';
import ToDoListForm from '../../forms/ToDoListForm';
import { URL } from '../../../App';

const ToDoList = () => {
    const reducer = (state, action) =>{
switch (action.type) {
    case 'SUCCESS':
        return {...state, success: true, error: false, loading: false}
       case 'ERROR':
        return {...state, success: false, error: true, loading: false} 
        case 'PENDING' :
            return {...state, success: false, error: false, loading: true}

    default:
        return state;
}
    }
    const [{error, success, loading}, dispatch] = useReducer(reducer, { error: false, success: false, loading: false})

    const[displayMessage, setDisplayMessage] = useState('')
    const [showToast, setShowToast] = useState(false)
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

    const handleTaskSubmit = async (e) => {
        const { title, assignedTo } = task
        e.preventDefault();
        dispatch({type: 'PENDING'})

        if (title === '' || assignedTo === '') {
            return (setShowToast(true),
            setDisplayMessage('Please enter all input fields'),
            dispatch({ type: 'ERROR' }))
        }
        
        try {
            const response = await axios.post(`${URL}/api/task`, task)
            if(response.status === 200){
                dispatch({type: 'SUCCESS'})
                setShowToast(true)
                setDisplayMessage('Task Created')
            }
            setTask({
                title: '',
                priority: 'queue',
                assignedTo: '',
                description: ''
            })
        } catch (error) {
            console.log(error.message)
            dispatch({type: 'ERROR'})
            setShowToast(true)
            setDisplayMessage(error.message)
        }
    }

    const onclose = () => setShowToast(false)
        return (
            <div>
                <Toaster onclose={onclose} showtoast={showToast} error={error} errormessage={displayMessage} success={success}/>
                <ToDoListForm onsubmit={handleTaskSubmit} onchange={handleTaskChange} task={task} loading={loading} />
            </div>
        )
    }

    export default ToDoList