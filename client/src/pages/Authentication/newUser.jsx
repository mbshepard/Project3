import React, { useRef }from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';



const newUser = () => {
    return(
        <div id="form">
            <Form md={{ span: 6, offset: 3 }}>
                <Row>
                    <Col md={{ span: 4, offset: 4 }}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="email" placeholder="First Name" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 4, offset: 4 }}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Last Name" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 4, offset: 4 }}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Authentication</Form.Label>
                            <Form.Control type="email" placeholder="login@email.com" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 4, offset: 4 }}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Password" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 4, offset: 4 }}>
                        <Button> Create New User</Button>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 4, offset: 4 }}>
                        <NavLink to="/existinguser" activeClassName="active"> Already a User? </NavLink>
                    </Col>
                </Row>
            </Form>  
        </div>
    )
}

export default newUser;











