import React, { useRef, useContext } from 'react';
import { NavLink, Link } from "react-router-dom";
import { Form, Row, Col, Button} from 'react-bootstrap';
import { UseUserContext } from '../Authentication/Components/userContext';
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {SoundXContext} from "../../xsound/AudioProvider";

const ExistingUser = (props) => {
    console.log(props);
    const username = useRef();
    const password = useRef();
    const [user, dispatch] = UseUserContext();

    const {audioListener} = useContext(SoundXContext);

    const login = () => {
        
        let loginObj = {
            email: username.current.value,
            password: password.current.value,
        }

        fetch('/auth/createuser', {
            method: 'POST',
            headers: {
                Accept: "application/json, text/plain, */*",
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginObj),
        }).then((response) => response.json())
            .then((data) => {
                console.log(data)
                if(!!Object.keys(data).find(e=> e== "errors" || e =="err")) return
                dispatch({
                    type: 'loggedInUser',
                    payload: data,
                })
                ////------------------------------------>
                const user={
                    firstName:"",
                    lastName:"",
                    userId:data._id
                };
                
                audioListener.user=user;
                props.setUser(user)
               
                ////------------------------------------>

                props.history.push('/home')
            }).catch((error) => {
                console.error('Error:', error)
            })
    }
    const keyPressed=(e)=>{
        if (e.keyCode===13){
            login();
        }
    }
        return (
            <div className="backgroundPic">
                <div id="title"></div> 
                <div className="auth-body">
                    <div className="pForm">
                        <div id="form-background"></div>
                        <div id="form">
                            <Form md={{ span: 6, offset: 3 }}>
                                <Row>
                                    <Col md={{ span: 4, offset: 4 }}>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>User Name</Form.Label>
                                            <Form.Control ref={username} type="email" placeholder="login@email.com" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={{ span: 4, offset: 4 }}>
                                        <Form.Group controlId="formPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control ref={password} type="password" placeholder="Password" onKeyDown={keyPressed}/>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={{ span: 4, offset: 4 }}>
                                        <Button  onClick={login}> Login </Button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={{ span: 4, offset: 4 }}>
                                        <NavLink to="/NewUser" activeClassName="active"> Create new account. </NavLink>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        );
    
}

export default ExistingUser;





