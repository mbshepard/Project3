import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { AnalysisIcon, HomeIcon, ListenIcon, ReviewIcon } from "../../util/appIcons";
import Dropdown from "./dropdown";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import {SongLoader} from "../../xsound/SongLoader";
import {PlayProgress} from "../../xsound/PlayProgress"
import { FFTAnalyze } from "../../xsound/analyzers/FFTAnalyze";
import { TimeAnalyze } from "../../xsound/analyzers/TimeAnalyze";

// const apiUrl = "http://localhost:3030";
const apiUrl = "";



const Top = () => {
    return <div style={{ height: 120, }}>
       

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/" className="nav-link" ><HomeIcon />Home</Link>
                    <Link to="/analyze" className="nav-link" ><AnalysisIcon />Analyze </Link>
                    <Link to="/listen" className="nav-link" > <ListenIcon /> Listen</Link>
                    <Link to="review" className="nav-link" ><ReviewIcon/>Review </Link>

                </Nav>
                <Nav>
                    
                        {/* <NavDropdown alignRight={true} title="Songs" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action branston jr</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
            <SongLoader apiUrl={apiUrl} />
                   
                    <Nav.Link eventKey={2} href="#memes">   </Nav.Link>
                </Nav>
                
            </Navbar.Collapse>
        </Navbar>
        <ul className="timefft">
        <li><FFTAnalyze key={1} w={80} h={50}/></li>
         <li><PlayProgress/></li>
          <li><TimeAnalyze key={2} w={150} h={50}/></li>
         </ul>
         </div>

}

export default Top;