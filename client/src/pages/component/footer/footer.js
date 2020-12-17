import Navbar from 'react-bootstrap/Navbar';


const Footer = () => {
    return <Navbar bg="dark" fixed="sticky" collapseOnSelect expand="lg">
            <Navbar.Collapse id="responsive-navbar-nav"> 
            <Navbar.Brand>
                © 2020 Song Snip
            </Navbar.Brand>
            </Navbar.Collapse>
    </Navbar>
    
}

export default Footer;