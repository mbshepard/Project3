import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import { AudioProvider } from './xsound/AudioProvider';

import Authentication from "./pages/Authentication/authentication";
import Layout from './layout';
import { outputUserContext } from './pages/Authentication/Components/userContext';
import PrivateRoute from './pages/Authentication/Components/protectedRoute';

// import reportWebVitals from './reportWebVitals';
// import App from '../src/App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path="/" component={Authentication}/>
    </BrowserRouter>
    <AudioProvider>
    {/* <App /> */}
    <Layout/>
    </AudioProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>(<Layout /></React.StrictMode>, document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// ReactDOM.render(
//   <React.StrictMode>
//     <outputUserContext>
//       <Switch>
//         <PrivateRoute path='/home'>
//           <AudioProvider>
//             {/* <App /> */}
//             <Layout/>
//           </AudioProvider>
//         </PrivateRoute>
//         <BrowserRouter>
//           <Route exact path="/" component={(props) => <Authentication {...props} />}/>
//           <Route>
//             <h1>404 NOT FOUND</h1>
//           </Route>
//         </BrowserRouter>
//       </Switch>
//     </outputUserContext>
//   </React.StrictMode>,
//   document.getElementById('root')
// );