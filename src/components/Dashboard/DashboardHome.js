import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import TaskTable from './pages/TaskTable';

const DashboardHome = () => {
  const [user, setUser] = useState({})
  useEffect(()=>{
    fetch('http://localhost:5000/api/users/all-users')
    .then((res)=>{return res.json()})
    .then((data)=>{setUser(data)})
    .catch(err=>console.log(err))
  }, [])
  
  return (
    <Container>    
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{user.fullname}</Card.Title>
                <Card.Text>
                  {user.office}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>2 of 2</Col>
        </Row>
        
        <Row>
          <Col className='mt-4'>
          <TaskTable/>
          </Col>
        </Row>
      </Container>
  )
}

export default DashboardHome