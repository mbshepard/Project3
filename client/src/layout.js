import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/home';
import NewUser from './pages/Authentication/newUser';
import ExistingUser from './pages/Authentication/existingUser';
import PrivateRoute from './pages/Authentication/Components/protectedRoute';
import { UserProvider } from './pages/Authentication/Components/userContext';
import AudioProvider from './xsound/AudioProvider';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function Layout() {
    return(
        <Router>
            <UserProvider>
                <div>
                    <Switch>
                        <PrivateRoute path='/home'>
                                 <Home/>
                        </PrivateRoute>
                        <Route exact path="/NewUser" component={NewUser} />
                        <Route exact path="/" component={(props) => <ExistingUser {...props} />} />
                        {/* <Route>
                            <h1>404 NOT FOUND</h1>
                        </Route> */}
                    </Switch>
                </div>
            </UserProvider>
        </Router>
    );
};

export default Layout;






// import Authentication from './pages/Authentication/authentication';
// <Route exact path="/" component={(props) => <Authentication {...props} />}/>
















// import React, {useEffect, useState} from "react";
// import Authentication from './pages/Authentication/authentication';
// import { OutputUserContext, UserProvider } from "./pages/Authentication/Components/userContext"
// import { BrowserRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import PrivateRoute from './pages/Authentication/Components/protectedRoute';

// const Layout = () => {
//     return (
//         <Router>
//             <UserProvider>
//                 <div>
//                     <Switch>
//                         <PrivateRoute path='/home'>
//                             <AudioProvider>
//                                 <Home />
//                             </AudioProvider>
//                         </PrivateRoute>
//                         <BrowserRouter>
//                             {/* <Route exact path="/" component={(props) => <Authentication {...props} />}/> */}
//                             <Route exact path="/" component={(props) => <Authentication {...props} />}/>
//                             {/* <Route>
//                                 <h1>404 NOT FOUND</h1>
//                             </Route> */}
//                         </BrowserRouter>
//                     </Switch>
//                 </div>
//             </UserProvider>
//         </Router>
//     );
// }
















// import App from "./App";
// import Top from "./pages/component/top/top";
// import Root from "./pages/rootPage";




// const Layout = () => {
//     const [user, setUser] = useState(null);
//     useEffect(() => {
//         //Todo Here we check the user context to know if a user had previously log in
//         // setUser(user from context); // This method will be called to set the
//         // user if it exist in the context
//     }, []);
//     return (<div className="App">
//         { user ?
//             <Router>
//                 <Top setUser={setUser}/>
//                 <div style={{height: "calc(100vh - 120px)",}}>
//                     {/* <App /> */}
//                     <Root/>
//                 </div>
//             </Router>:
//             <Authentication setUser={setUser}/> 

//         }
//     </div>);
// }

