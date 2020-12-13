import React,{useState} from "react";
import './index.css';
import { AudioProvider } from './xsound/AudioProvider';
import Authentication from "./pages/Authentication/authentication";
import Home from "./pages/home";
import { outputUserContext } from './pages/Authentication/Components/userContext';
import PrivateRoute from './pages/Authentication/Components/protectedRoute';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


// import App from "./App";
import Top from "./pages/component/top/top";
import Root from "./pages/rootPage";
import 'bootstrap/dist/css/bootstrap.min.css'
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


// const Layout = () => {
//     return (
//         <Router>
//             {/* <outputUserContext> */}
//                 <Switch>
//                     <PrivateRoute path='/home'>
//                         <AudioProvider>
//                             <Home />
//                         </AudioProvider>
//                     </PrivateRoute>
//                     <BrowserRouter>
//                         <Route exact path="/" component={(props) => <Authentication {...props} />}/>
//                         <Route>
//                             <h1>404 NOT FOUND</h1>
//                         </Route>
//                     </BrowserRouter>
//                 </Switch>
//             {/* </outputUserContext> */}
//         </Router>
//     );
// }

export default Layout;



