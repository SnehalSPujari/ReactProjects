import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import FeedBackInReact from './FeedBackInReact';
import reportWebVitals from './reportWebVitals';
// import MyClassComponent from '.components/MyClassComponent.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <MyClassComponent/> */}
  </React.StrictMode>
);

reportWebVitals();
