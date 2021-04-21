import React, { Component } from "react";
import Header from './Header';
import { Link } from 'react-router-dom';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';


class Login extends Component {
    render() {
        return (
            <Container>
                <Header />
                <h1><center>Login</center></h1>
                <Form action='/'>
                    <Row>
                        <Col>
                            <Form.Group controlId="formBasicText">
                                <Form.Label>User Id</Form.Label>
                                <Form.Control type="text" placeholder="User Id" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button variant="primary" type="submit" block>
                        Sign In
                    </Button>
                    
                </Form><br></br>
                <Link to='/sign-up'>
                <Button variant='primary' type='submit' block>
                            Sign Up
                </Button>
                </Link>
            </Container>


        )
    }
}

export default Login;