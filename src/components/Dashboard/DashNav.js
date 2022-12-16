import React, { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { linkIcons } from '../../data';

const DashNav = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <div className='canvas-click' onClick={handleShow}>
                {
                    linkIcons && linkIcons.map((linkIcon, id) => <NavLink key={id}>{<linkIcon.icon />}</NavLink>)
                }
            </div>

            <Offcanvas backdrop={false} show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Virtual Office</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='canvas-body'>
                {
                    linkIcons && linkIcons.map((linkIcon, id) => <Link to={linkIcon.url} className='nav-links' onClick={handleClose} key={id}>
                        <span>{<linkIcon.icon />}</span>
                        <span>{linkIcon.text}</span>
                        </Link>)
                }
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}

export default DashNav