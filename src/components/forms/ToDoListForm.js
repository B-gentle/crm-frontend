import React from 'react';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import DepartmentSelection from '../forms/DepartmentSelection';
import buttonLoader from '../../images/button_loading.gif';

const ToDoListForm = ({onchange, onsubmit, task, visibility, update, edit, loading}) => {
  return (
    <Form onSubmit={ edit ? update : onsubmit} className='task-form'>
                    <FloatingLabel
                        controlId="tastTitle"
                        label="Task Title"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="Task Title" name='title' value={task.title} onChange={onchange} />
                    </FloatingLabel>

                    <FloatingLabel controlId="prioritySelect" label="Select Task Priority Level" className="mb-3">
                        <Form.Select aria-label="Priority Select Box" name='priority' value={task.priority} onChange={onchange}>
                            <option value="queue">Queue</option>
                            <option value="important">Important</option>
                            <option value="urgent">Urgent</option>
                        </Form.Select>
                    </FloatingLabel>

                    <FloatingLabel controlId="assignedTo" label="Assigned To" className="mb-3">
                        <DepartmentSelection onchange={onchange} name='assignedTo' value={task.assignedTo} />
                    </FloatingLabel>

                    <FloatingLabel controlId="taskDescription" label="Task Description" className="mb-3">
                        <Form.Control
                            onChange={onchange}
                            name='description'
                            value={task.description}
                            as="textarea"
                            placeholder="Type here"
                            style={{ height: '100px' }}
                        />
                    </FloatingLabel>
                    {loading ? <Button variant="success" type="submit" disabled>
                       <img src={buttonLoader} style={{height: '60%', width: '100%'}} alt='loading'/>
                    </Button> : <Button variant="success" type="submit">
                        { edit ? 'Edit' : visibility ? 'viewed' :'Create Task'}
                    </Button>}
                </Form>
  )
}

export default ToDoListForm