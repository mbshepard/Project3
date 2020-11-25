import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import NewSongs from './component/newSongs'
import Listen from "./component/listen/Listen";
import LandingPage from "./component/landing page/landingPage";
import "./component/songStyle.css"
import Rating from "./component/Rating/Rating";
import React, { useState, useEffect } from "react";
import SongInfoContext from "./util/songInfo";
import { AudioStartReact } from "./component/XsoundTest/AudioStartReact";
import { AudioStart } from "./component/XsoundTest/AudioStart";

const App = () => {
    const [songInfoState, setSongInfoState] = useState({
        name: "",
        song: "",
        image: ""
    });
    return (
        // <SongInfoContext.provider value={{}}>

            <div>
                {/* <AudioStartReact/>
                 */}
                <Router>
                    {/* <Link to="/"> Home </Link>
             <Link to="/listen"> Listen </Link> */}
                    <div>
                        <Route exact path="/" component={LandingPage} />
                        <Route exact path="/newSongs" component={NewSongs} />
                        <Route exact path="/listen" component={Listen} />
                        <Route exact path="/rating/:artistId" component={Rating} />
                        <Route exact path="/XsoundReact" component={AudioStartReact} />
                        <Route exact path="/Xsound" component={AudioStart} />
                        
                    </div>
                </Router>
                {/* <div>
                    <Rating />
                </div> */}

            </div>
        // </SongInfoContext.provider>

    );



}
export default App
