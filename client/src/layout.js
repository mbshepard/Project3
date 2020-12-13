import React,{useState} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import App from "./App";
import Top from "./component/top/top";
import Root from "./pages/rootPage";
import 'bootstrap/dist/css/bootstrap.min.css'
import Authentication from "./pages/Authentication/authentication";
import { useEffect } from "react";


const Layout = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        //Todo here check the user context to know if a user had previously log in 
        //setUser(user from context); // This method will be called to set the user if it exist in the context
    }, []);
    return (<div className="App">
        { user ?
            <Router>
                <Top setUser={setUser}/>
                <div style={{height: "calc(100vh - 120px)",}}>
                    {/* <App /> */}
                    <Root/>
                </div>
            </Router>:
            <Authentication setUser={setUser}/> 

        }
    </div>);
}

export default Layout;