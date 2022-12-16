import React from 'react';
import { Card, Form, FloatingLabel, Button, Container, Row, Col } from 'react-bootstrap';
import logo from '../../../images/logo.png';
import DepartmentSelection from '../../forms/DepartmentSelection';
import './pages.css';

const Request = () => {
    return (
        <Container>
            <Row>
                <Col>
            <Card style={{ width: '25rem' }}>
                <Card.Header className='card-header'><img src={logo} alt='nri' /><h2>Authorization Request</h2></Card.Header>
                <Card.Body className='card-body'>
                    <Form className='form login-form'>
                        <FloatingLabel
                            controlId="floatingTextarea"
                            label="Type your Request Here"
                            className="mb-3"
                        >
                            <Form.Control as="textarea" placeholder="Type your request here" />
                        </FloatingLabel>
                        <FloatingLabel controlId="officeSelect" label="Select Office You're Making Request To" className="mb-3">
                            <DepartmentSelection />
                        </FloatingLabel>
                        <Button variant="success" type="submit">Submit</Button>
                    </Form>
                </Card.Body>
            </Card>
            </Col>

            <Col>
            <Card style={{ width: '25rem' }}>
                <Card.Header className='card-header'><img src={logo} alt='nri' /><h2>Respond To Request</h2></Card.Header>
                <Card.Body className='card-body'>
                    We will have a table here showing the request and the departments they are coming from 
                </Card.Body>
            </Card>
            </Col>
            </Row>
        </Container>
    )
}

export default Request