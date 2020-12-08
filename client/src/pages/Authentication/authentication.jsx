import React, { Component } from 'react';
import { Route, Switch} from "react-router-dom";
import newUser from './newUser';
import existingUser from './existingUser';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';

class Authentication extends Component {
    render () {
        return (
            <div className="backgroundPic">
                <div id="title"></div> 
                <div className="auth-body">
                    <div className="pForm">
                        <div id="form-background"></div>
                        <Route render={({location}) => (
                            <TransitionGroup>
                                <CSSTransition 
                                    key={location.key}
                                    timeout={450}
                                    classNames="fade"
                                >
                                    <Switch location={location}>
                                        <Route exact path="/" component={newUser} />
                                        <Route path="/existingUser" component={existingUser} />
                                    </Switch>
                                </CSSTransition>
                            </TransitionGroup>
                        )} />
                    </div>
                </div>
            </div>
        );
    }
}


// const Authentication = () => {
//     return 
// }
export default Authentication;




