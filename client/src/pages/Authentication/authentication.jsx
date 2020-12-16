import React, { Component } from 'react';
import { Link, Route, Switch} from "react-router-dom";
import NewUser from './newUser';
import ExistingUser from './existingUser';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const NewUser = () => {
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

<Link to="/newSongs">New Songs</Link>

export default Authentication;

{/* <Route exact path="/" component={NewUser} />
<Route path="/ExistingUser" component={ExistingUser} /> */}


// class Authentication extends Component {
//     render () {
//         return (
//             <div className="backgroundPic">
//                 <div id="title"></div> 
//                 <div className="auth-body">
//                     <div className="pForm">
//                         <div id="form-background"></div>
//                         <Route render={({location}) => (
//                             <TransitionGroup>
//                                 <CSSTransition 
//                                     key={location.key}
//                                     timeout={450}
//                                     classNames="fade"
//                                 >
//                                     <Switch location={location}>
//                                         <Route exact path="/" component={ExistingUser} />
//                                         <Route path="/NewUser" component={NewUser} />
//                                     </Switch>
//                                 </CSSTransition>
//                             </TransitionGroup>
//                         )} />
//                     </div>
//                     <Link to="/home"> Home </Link>
//                 </div>
//             </div>
//         );
//     }
// }

