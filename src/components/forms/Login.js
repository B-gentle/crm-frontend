import React from 'react';
import { Button, Form, FloatingLabel, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './forms.css';

const Login = () => {
    return (
        <div className='form-group'>
            <Card style={{ width: '25rem' }}>
                <Card.Header className='card-header'><img src={logo} alt='nri' /><h2>Login</h2></Card.Header>
                <Card.Body className='card-body'>
                    <Form className='form login-form'>
                        <FloatingLabel
                            controlId="username"
                            label="Username"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="Enter Username" />
                        </FloatingLabel>
                        <FloatingLabel controlId="Password" label="Password">
                            <Form.Control type="password" placeholder="Password" />
                        </FloatingLabel>
                        <small>
                            <span>Not yet a member?</span><Link to='/signup'>Sign up here</Link>
                        </small>
                        <small>Forgot Password?</small>
                        <Button variant="success" type="submit">Submit</Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Login