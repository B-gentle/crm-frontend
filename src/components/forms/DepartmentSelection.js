import React from 'react';
import { Form } from 'react-bootstrap';

const DepartmentSelection = ({value, onchange, name}) => {
  return (
    <Form.Select aria-label="Select Office" value={value} onChange={onchange} name={name}>
        <option>Click to Select Office</option>
        <option value="accountant">Accountant</option>
        <option value="CEO">Chief Executive Officer</option>
        <option value="Customer Care">Customer Care</option>
        <option value="Head Of Operations">Head of OPerations</option>
        <option value="Logistics">Logistics</option>
        <option value="Marketing">IT Marketing</option>
        <option value="Backend Developer/Software">Software Developer</option>
      </Form.Select>
  )
}

export default DepartmentSelection