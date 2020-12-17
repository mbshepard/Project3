import {Link, useHistory} from "react-router-dom";
import {AnalysisIcon, HomeIcon, ListenIcon, LogoutIcon, ReviewIcon} from "../../../util/appIcons";
import {Nav, Navbar, Button} from 'react-bootstrap'
import {SongLoader} from "../../../xsound/SongLoader";
import {PlayProgress} from "../../../xsound/PlayProgress"
import {FFTAnalyze} from "../../../xsound/analyzers/FFTAnalyze";
import {TimeAnalyze} from "../../../xsound/analyzers/TimeAnalyze";
import {TimeOverviewAnalyzer} from "../../../xsound/analyzers/TimeOverviewAnalyzer";
import {Fragment, useContext, useEffect, useState} from "react";
import {SoundXContext} from "../../../xsound/AudioProvider";
import {nbSpace} from "../../../util/Constants"

// const apiUrl = "http://localhost:3030";
const apiUrl = "";


const Top = (props) => {
    const history = useHistory();
    const {audioListener} = useContext(SoundXContext);
    const [songs, setSongs] = useState(false);
    const [progress, setProgress] = useState(false);
    const [top, setsetTop] = useState(-300);

    useEffect(() => {
        audioListener.showTopNav=showTopNav;
        return ()=>{
            audioListener.showTopNav=null;
        }
    }, []);


    const showTopNav=(songs,progress,timeOverView)=>{
        setSongs(songs);
        setProgress(progress);
        const top=timeOverView?120:-300;
        setsetTop(top);
    };

    const logout=()=>{
        props.setUser(null);
        setTimeout(()=>{
            history.go("/")

        })
    }

    return <div style={{height: 120,}}>


        <Navbar collapseOnSelect expand="lg" bg="light" variant="white">
            <Navbar.Brand href="/">BaRs</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Link style={{border:"1px solid lightgray"}}to="/home" className="nav-link"><HomeIcon/>{nbSpace(1)} Home</Link>
                    <Link style={{border:"1px solid lightgray"}}to="/analyze" className="nav-link"><AnalysisIcon/>{nbSpace(1)} Analyze </Link>
                    <Link style={{border:"1px solid lightgray"}}to="/listen" className="nav-link"> <ListenIcon/> {nbSpace(1)} Listen</Link>
                    <Link style={{border:"1px solid lightgray"}}to="review" className="nav-link"><ReviewIcon/>{nbSpace(1)} Review </Link>

                </Nav>
                <Nav>

                    <SongLoader apiUrl={apiUrl} show={songs}/>

                </Nav>
                <Nav>
                    <Button variant="secondary" size="sm" title={'Logout'} onClick={logout}>Logout</Button>
                </Nav>

            </Navbar.Collapse>
        </Navbar>


            <ul className="timefft" style={{display:progress?"":"none"}}>
                <li><FFTAnalyze key={1} w={80} h={50}/></li>
                <li><PlayProgress/></li>
                <li><TimeAnalyze key={2} w={80} h={50}/></li>
            </ul>

            <div style={{position:"relative",top:top,left:0}}>
                <TimeOverviewAnalyzer apiUrl={""} key={"analyzer"} w={800} h={100}/>
            </div>


    </div>

}

export default Top;