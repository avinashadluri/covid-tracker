import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ReactGA from "react-ga";
const trackingId = "UA-164329346-1";
// ReactGA.initialize(trackingId);
ReactGA.initialize(trackingId)
ReactGA.pageview(window.location.pathname + window.location.search);
ReactDOM.render(<App />, document.getElementById('root'));

 