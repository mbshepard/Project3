import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import NewSongs from '../client/src/component/newSongs'
import Listen from "./component/listen/Listen";
import LandingPage from "./component/landing page/landingPage";
import "./component/songStyle.css"
import Rating from "./component/Rating/Rating";
import React, { useState, useEffect } from "react";
import SongInfoContext from "../client/src/util/songInfo";


const App = () => {
    const [songInfoState, setSongInfoState] = useState({
        name: "",
        song: "",
        image: ""
    });
    return (
       

            <div>
                
                <Router>
               
                    <div>
                        <Route exact path="/" component={LandingPage} />
                        <Route exact path="/newSongs" component={NewSongs} />
                        <Route exact path="/listen" component={Listen} />
                        <Route exact path="/rating/:artistId" component={Rating} />
                        
                        
                    </div>
                </Router>
               

            </div>
        // </SongInfoContext.provider>

    );



}
export default App
