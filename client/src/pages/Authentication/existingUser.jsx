import React, { useRef } from 'react';
import { NavLink, Link } from "react-router-dom";
import { Form, Row, Col, Button} from 'react-bootstrap';
import { UseUserContext } from '../Authentication/Components/userContext';
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const ExistingUser = (props) => {
    console.log(props);
    const username = useRef();
    const password = useRef();
    const [user, dispatch] = UseUserContext();

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
                dispatch({
                    type: 'loggedInUser',
                    payload: data,
                })
                props.history.push('/home')
            }).catch((error) => {
                console.error('Error:', error)
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
                                            <Form.Control ref={password} type="email" placeholder="Password" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={{ span: 4, offset: 4 }}>
                                        <Button onClick={login}> Login </Button>
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
                    <Link to="/home"> Home </Link>
                </div>
            </div>
        );
    
}

export default ExistingUser;



















// const ExistingUser = (props) => {
//     console.log(props);
//     const username = useRef();
//     const password = useRef();
//     const [user, dispatch] = UseUserContext();

//     const login = () => {
//         let loginObj = {
//             email: username.current.value,
//             password: password.current.value,
//         }

//         fetch('/auth/register_login', {
//             method: 'POST',
//             headers: {
//                 Accept: "application/json, text/plain, */*",
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(loginObj),
//         }).then((response) => response.json())
//             .then((data) => {
//                 dispatch({
//                     type: 'loggedInUser',
//                     payload: data,
//                 })
//                 props.history.push('/home')
//             }).catch((error) => {
//                 console.error('Error:', error)
//             })
//     }
//         return (
//             <div id="form">
//                 <Form md={{ span: 6, offset: 3 }}>
//                     <Row>
//                         <Col md={{ span: 4, offset: 4 }}>
//                             <Form.Group controlId="formBasicEmail">
//                                 <Form.Label>User Name</Form.Label>
//                                 <Form.Control ref={username} type="email" placeholder="login@email.com" />
//                             </Form.Group>
//                         </Col>
//                     </Row>
//                     <Row>
//                         <Col md={{ span: 4, offset: 4 }}>
//                             <Form.Group controlId="formPassword">
//                                 <Form.Label>Password</Form.Label>
//                                 <Form.Control ref={password} type="email" placeholder="Password" />
//                             </Form.Group>
//                         </Col>
//                     </Row>
//                     <Row>
//                         <Col md={{ span: 4, offset: 4 }}>
//                             <Button onClick={login}> Login </Button>
//                         </Col>
//                     </Row>
//                     <Row>
//                         <Col md={{ span: 4, offset: 4 }}>
//                             <NavLink to="/NewUser" activeClassName="active"> Create new account. </NavLink>
//                         </Col>
//                     </Row>
//                 </Form>  
//             </div>
//         );
    
// }



















// const ExistingUser = () => {
//         return (
//             <div id="form">
//                 <Form md={{ span: 6, offset: 3 }}>
//                     <Row>
//                         <Col md={{ span: 4, offset: 4 }}>
//                             <Form.Group controlId="formBasicEmail">
//                                 <Form.Label>User Name</Form.Label>
//                                 <Form.Control type="email" placeholder="login@email.com" />
//                                 {/* <Form.Control ref={username} type="email" placeholder="login@email.com" /> */}
//                             </Form.Group>
//                         </Col>
//                     </Row>
//                     <Row>
//                         <Col md={{ span: 4, offset: 4 }}>
//                             <Form.Group controlId="formPassword">
//                                 <Form.Label>Password</Form.Label>
//                                 <Form.Control type="email" placeholder="Password" />
//                                 {/* <Form.Control ref={password} type="email" placeholder="Password" /> */}
//                             </Form.Group>
//                         </Col>
//                     </Row>
//                     <Row>
//                         <Col md={{ span: 4, offset: 4 }}>
//                             <Button> Login </Button>
//                             {/* <Button onClick={login}> Login </Button> */}
//                         </Col>
//                     </Row>
//                     <Row>
//                         <Col md={{ span: 4, offset: 4 }}>
//                             <NavLink to="/" activeClassName="active"> Oops, wrong page! </NavLink>
//                         </Col>
//                     </Row>
//                 </Form>  
//             </div>
//         );
    
// }
