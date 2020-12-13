import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Row} from 'react-bootstrap';
import Button from "react-bootstrap/Button";


const Authentication = (props) => {

    const login=()=>{
        props.setUser({name:"Ralph"})
    }
    
    return <div className="backgroundPic">
            <div id="title"> </div> 
            <div className="auth-body">
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
                            <Button onClick={login}>Login</Button>
                        </Form>  
                    </div>
                </div>
            </div>

       

        {/* <Link to="/landingpage">New Songs</Link> */}
    </div>
}
export default Authentication;