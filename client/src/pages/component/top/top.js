import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { AnalysisIcon, HomeIcon, ListenIcon, ReviewIcon } from "../../../util/appIcons";
import Dropdown from "./dropdown";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'


const Top = () => {
    return <div style={{ height: 120, }}>
        {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" >Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <Link to="/" class="nav-link" > <HomeIcon/>Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="analyze" class="nav-link" ><AnalysisIcon/>Analyze  </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="Listen" class="nav-link" > <ListenIcon/> Listen </Link>
                        
                    </li>
                    <li class="nav-item">
                        <Link to="review" class="nav-link" ><ReviewIcon/>Review </Link>
                       
                    </li>
                    <li class="nav-item">
                        <Link to="detailed" class="nav-link" >Detailed Page</Link>
                       
                    </li>
                    
                </ul>
                <form class="form-inline my-2 my-lg-0">
       <Dropdown/> 
      {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
        {/* </form>
            </div>
        </nav> */}

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/" className="nav-link" ><HomeIcon />Home</Link>
                    <Link to="/analyze" className="nav-link" ><AnalysisIcon />Analyze </Link>
                    <Link to="/listen" className="nav-link" > <ListenIcon /> Listen</Link>
                    <Link to="review" class="nav-link" ><ReviewIcon/>Review </Link>

                </Nav>
                <Nav>
                    
                        <NavDropdown alignRight={true} title="Songs" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action branston jr</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                   
                    <Nav.Link eventKey={2} href="#memes">   </Nav.Link>
                </Nav>
                
            </Navbar.Collapse>
        </Navbar>

    </div>

}

export default Top;