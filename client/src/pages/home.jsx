import React from 'react';
import { Router } from "react-router-dom";
import Top from "./component/top/top";
import Root from "./rootPage";

import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
        <div className="App">
            <Router>
                <Top />
                <div style={{ height: "calc(100vh - 120px)", }}>
                    <Root />
                </div>   
            </Router>
        </div>
    )
}

export default Home;