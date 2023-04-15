import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './register.css'
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='register'>
      <h2> Register here </h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>

        <b></b>
        <b>Already registered ? <Link to='/login'>please login</Link></b>
      </Form>
    </div>
  );
};

export default Register;