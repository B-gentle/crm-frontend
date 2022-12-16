import React from 'react';
import { Button, Form, FloatingLabel, Card } from 'react-bootstrap';
import logo from '../../../images/logo.png';

const RegisterComplaint = () => {
  return (
    <div>
      <Card style={{ width: '25rem' }}>
        <Card.Header><img src={logo} alt='nri' /><h2>Register Complain</h2></Card.Header>
        <Card.Body className='card-body'>
          <Form className='form'>
            <FloatingLabel
              controlId="username"
              label="Customer's Username"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Enter Username" />
            </FloatingLabel>
            <FloatingLabel controlId="SelectComplainType" label="Select Complain Type" className="mb-3">
              <Form.Select aria-label="Select Complain Type">
                <option>Click to Select Complain Type</option>
                <option value="accountModification">Account Modification</option>
                <option value="walletTransfer">Wallet Transfer</option>
                <option value="unpaidBonus">Unpaid Bonus</option>
                <option value="accessCode">Access Code</option>
                <option value="placement">Placement Issue</option>
                <option value="creditWallet">Wallet Crediting</option>
              </Form.Select>
            </FloatingLabel>

            <FloatingLabel controlId="Selectpriority" label="Select Priority" className="mb-3">
              <Form.Select aria-label="Select Priority">
                <option>Click to Select Priority</option>
                <option value="important">Important</option>
                <option value="urgent">Urgent</option>
                <option value="queue">Queue</option>
              </Form.Select>
            </FloatingLabel>

            <FloatingLabel controlId="specifyComplain" label="Specify Complain">
              <Form.Control
                as="textarea"
                placeholder="Type here"
                className="mb-3"
                style={{ height: '100px' }}
              />
            </FloatingLabel>
            
            <Button variant="success" type="submit">Submit</Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}

export default RegisterComplaint