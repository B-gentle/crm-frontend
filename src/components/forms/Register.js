import React, { useState } from 'react';
import { Button, Form, FloatingLabel, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import DepartmentSelection from './DepartmentSelection';
import axios from 'axios'
import './forms.css';
import { URL } from '../../App';

const Register = () => {
    const [userDetails, setUserDetails] = useState({
        fullname: '',
        office: '',
        email: '',
        username: '',
        password: '',
        cPassword: ''
    })

    const handleChange = (e) => {
setUserDetails({...userDetails, [e.target.name] : e.target.value})
    }

    const submitHandler = async(e) => {
e.preventDefault();
const details = userDetails;
try {
  await axios.post(`${URL}/api/users/register`, details)
} catch (error) {
    console.log(error)
}
    }

    return (
        <div className='form-group'>
            <Card style={{ width: '25rem' }}>
                <Card.Header><img src={logo} alt='nri' /><h2>Sign Up</h2></Card.Header>
                <Card.Body className='card-body'>
                    <Form className='form' onSubmit={submitHandler}>
                        <FloatingLabel
                            controlId="FullName"
                            label="Enter Full Name"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="Enter Fullname" name='fullname' onChange={handleChange} value={userDetails.fullname} />
                        </FloatingLabel>
                        <FloatingLabel controlId="officeSelect" label="Select Office" className="mb-3">
                            <DepartmentSelection name='office' value={userDetails.office} onchange={handleChange} />
                        </FloatingLabel>
                        <FloatingLabel controlId="Email" label="Enter Email" className="mb-3">
                            <Form.Control type="email" placeholder="Email" name='email' onChange={handleChange} value={userDetails.email}/>
                        </FloatingLabel>
                        <FloatingLabel controlId="username" label="Choose Username" className="mb-3">
                            <Form.Control type="text" placeholder="Username" name='username' onChange={handleChange} value={userDetails.username} />
                        </FloatingLabel>
                        <FloatingLabel controlId="password" label="Choose Password" className="mb-3">
                            <Form.Control type="password" placeholder="password" name='password' onChange={handleChange} value={userDetails.password} />
                        </FloatingLabel>
                        <FloatingLabel controlId="confirmPassword" label="Confirm Password" className="mb-3">
                            <Form.Control type="password" placeholder="confirm password" name='cPassword' onChange={handleChange} value={userDetails.cPassword} />
                        </FloatingLabel>
                        <small>
                            <span>Already a member?</span><Link to='/'>Log in instead</Link>
                        </small>
                        <Button variant="success" type="submit">Submit</Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Register