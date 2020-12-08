import "./style.css"
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row, Col, Button} from 'react-bootstrap';

const existingUser = () => {
    return (
        <div id="form">
            <Form md={{ span: 6, offset: 3 }}>
                <Row>
                    <Col md={{ span: 4, offset: 4 }}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="email" placeholder="login@email.com" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 4, offset: 4 }}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="email" placeholder="Password" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 4, offset: 4 }}>
                        <Button> Login </Button>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 4, offset: 4 }}>
                        <NavLink to="/" activeClassName="active"> Oops, wrong page! </NavLink>
                    </Col>
                </Row>
            </Form>  
        </div>
    );
}
export default existingUser;