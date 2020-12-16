import React, { useRef }from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { NavLink, Link } from "react-router-dom";
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const NewUser = () => {

    const username = useRef();
    const password = useRef();
    const firstName = useRef();
    const lastName = useRef();

    const createUser = () => {
        let inputObj = {
            email: username.current.value,
            password: password.current.value,
        }
        fetch('/auth/createuser', {
            method: 'POST',
            headers: {
                Accept: "application/json, text/plain, */*",
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputObj),
        })
    }
    return (
        <div className="backgroundPic">
            <div id="title"></div> 
            <div className="auth-body">
                <div className="pForm">
                    <div id="form-background"></div>
                    <div id="form">
                        <Form md={{ span: 6, offset: 3 }}>
                            {/* <Row>
                                <Col md={{ span: 4, offset: 4 }}>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control ref={firstName} type="email" placeholder="First Name" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={{ span: 4, offset: 4 }}>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control ref={lastName} type="email" placeholder="Last Name" />
                                    </Form.Group>
                                </Col>
                            </Row> */}
                            <Row>
                                <Col md={{ span: 4, offset: 4 }}>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Authentication</Form.Label>
                                        <Form.Control ref={username} type="email" placeholder="login@email.com" />
                                        <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={{ span: 4, offset: 4 }}>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control ref={password} type="email" placeholder="Password" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={{ span: 4, offset: 4 }}>
                                    <Button onClick={createUser} > Create New User</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={{ span: 4, offset: 4 }}>
                                    <NavLink exact to="/" activeClassName="active"> Already a User? </NavLink>
                                </Col>
                            </Row>
                        </Form>  
                    </div>
                </div>
                <Link to="/home"> Home </Link>
            </div>
        </div>
    );
}

export default NewUser;











