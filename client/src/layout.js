import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Home from './pages/home';
import NewUser from './pages/Authentication/newUser';
import ExistingUser from './pages/Authentication/existingUser';
import PrivateRoute from './pages/Authentication/Components/protectedRoute';
import { UserProvider } from './pages/Authentication/Components/userContext';
import AudioProvider from './xsound/AudioProvider';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function Layout() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        //Todo Here we check the user context to know if a user had previously log in
        // setUser(user from context); // This method will be called to set the
        // user if it exist in the context
    }, []);
    return(
        <Router>
            <UserProvider>
                <div>
                    <Switch>
                        <PrivateRoute path='/home'>
                            <Home setUser={setUser}/>
                        </PrivateRoute>
                        <Route exact path="/NewUser" component={NewUser} />
                        <Route exact path="/" component={(props) => <ExistingUser {...props} setUser={setUser} />} />
                    </Switch>
                </div>
            </UserProvider>
        </Router>
    );
};

export default Layout;





















