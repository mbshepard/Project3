import "./style.css"
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Container, Row, Col } from 'react-bootstrap';

const Authentication = () => {
    return <div className="backgroundPic">
            <div id="title"> </div> 
            <body>
                <div className="pForm">
                    <div id="form-background"></div>
                    <div id="form">
                        <Form>
                            <Row>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control type="email" placeholder="First Name" />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Last Name" />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Authentication</Form.Label>
                                    <Form.Control type="email" placeholder="login@email.com" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Password" />
                                </Form.Group>
                            </Row>
                        </Form>  
                    </div>
                </div>
            </body>

       

        {/* <Link to="/landingpage">New Songs</Link> */}
    </div>
}
export default Authentication;