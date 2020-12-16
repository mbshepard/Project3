import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';
import Home from './pages/home';
import './index.css';
import AudioProvider from './xsound/AudioProvider';

ReactDOM.render(
  <React.StrictMode>
    <AudioProvider>    
      <Layout />
    </AudioProvider>
  </React.StrictMode>, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();




































