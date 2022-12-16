import React from 'react';
import './Dashboard.css';
import { IoIosNotifications } from 'react-icons/io';
import DashNav from './DashNav';
import { Outlet } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Container>
        <Row>
          <Col xs='2'><DashNav /></Col>
          <Col xs='10' className='dash-row-cont'>
            <Row>
              <nav className='dash-top-nav'>
                <h5>Hello Username</h5>
                <IoIosNotifications />
              </nav>
            </Row>
            <Row>
              <Col><Outlet /></Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Dashboard