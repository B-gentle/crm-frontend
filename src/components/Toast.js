import React from 'react';
import { Toast } from 'react-bootstrap';
import { MdDoneOutline, MdError } from 'react-icons/md';

const Toaster = ({onclose, showtoast, error, errormessage, success}) => {
  return (
        <Toast onClose={onclose} show={showtoast} className='toast mb-3'
                bg={error ? 'danger' : success ? 'success' : 'info' }
                >
          <Toast.Header>
            <strong className="me-auto">{error ? <MdError/> : success ? <MdDoneOutline/> : ''}</strong>
          </Toast.Header>
          <Toast.Body>{error ? errormessage : success ? 'Done' : ''}</Toast.Body>
        </Toast>
  )
}

export default Toaster