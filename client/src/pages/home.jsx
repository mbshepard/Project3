import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Top from "./component/top/top";
import Footer from "./component/footer/footer";
import Analyze from "./analyze";
import DetailedPage from "./detailedPage";
import LandingPage from "./landingPage";
import Listen from "./Listen";
import Review from "./review";


import 'bootstrap/dist/css/bootstrap.min.css';

const Home = (props) => {
    return (
            <div className="App">
                <Router>
                    <Top  setUser={props.setUser} />
                    <div style={{ height: "calc(100vh - 120px)", }}>
                        <Route exact path="/home" component={LandingPage} />
                        <Route exact path="/analyze" component={Analyze} />
                        <Route exact path="/listen" component={Listen} />
                        <Route exact path="/review" component={Review} />
                        <Route exact path="/detailed" component={DetailedPage} />
                    </div>
                    <Footer />
                </Router>
            </div>
    )
}

export default Home;