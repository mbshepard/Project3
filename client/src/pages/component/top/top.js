import {Link} from "react-router-dom";
import {AnalysisIcon, HomeIcon, ListenIcon, LogoutIcon, ReviewIcon} from "../../../util/appIcons";
import {Nav, Navbar} from 'react-bootstrap'
import {SongLoader} from "../../../xsound/SongLoader";
import {PlayProgress} from "../../../xsound/PlayProgress"
import {FFTAnalyze} from "../../../xsound/analyzers/FFTAnalyze";
import {TimeAnalyze} from "../../../xsound/analyzers/TimeAnalyze";
import {TimeOverviewAnalyzer} from "../../../xsound/analyzers/TimeOverviewAnalyzer";
import {Fragment, useContext, useEffect, useState} from "react";
import {SoundXContext} from "../../../xsound/AudioProvider";

// const apiUrl = "http://localhost:3030";
const apiUrl = "";


const Top = (props) => {
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
    }

    return <div style={{height: 120, backgroundColor: "rgb(38, 50, 56)"}}>


        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">BaRs</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/home" className="nav-link"><HomeIcon/>Home</Link>
                    <Link to="/analyze" className="nav-link"><AnalysisIcon/>Analyze </Link>
                    <Link to="/listen" className="nav-link"> <ListenIcon/> Listen</Link>
                    <Link to="review" className="nav-link"><ReviewIcon/>Review </Link>

                </Nav>
                <Nav>

                    <SongLoader apiUrl={apiUrl} show={songs}/>

                </Nav>
                <Nav>
                    <LogoutIcon title={'Logout'} onClick={logout}/>
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