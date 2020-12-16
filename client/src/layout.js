import React from 'react';
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
                    </Switch>
                </div>
            </UserProvider>
        </Router>
    );
};

export default Layout;





















