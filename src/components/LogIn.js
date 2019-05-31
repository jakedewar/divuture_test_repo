import React, {Component} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Card from "react-bootstrap/Card";

export default class Login extends React.Component {
  constructor(...args) {
    super(...args);

  }

  render() {
    return (
      <Card>
      <Form>
        <Form.Group>
          <b><Form.Label> Please Login </Form.Label></b>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <b><Form.Label>Email address: </Form.Label></b>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <b><Form.Label>Password: </Form.Label></b>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicChecbox">
          <Form.Check type="checkbox" label="Remember Me" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
      </Card>
    );
  }
};
