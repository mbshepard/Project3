import React from 'react';
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
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = () => {
    return (<div className="App">
        <Router>
            <Top />
            <div style={{ height: "calc(100vh - 120px)", }}>
               
            <Root />
            </div>
        </Router>
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



