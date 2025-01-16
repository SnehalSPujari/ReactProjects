import React from 'react';
//import './App.css';
// import FeedBackInReact from './FeedBackInReact'; // Import the component that handles the form
// import MyClassComponent from './components/MyClassComponent.js'; // Import the Class Component
import jsxComponent from './jsxAndFragments/jsxComponent.jsx';


function App() {
  return (
    <div className="main">
     {/* <FeedBackInReact /> Render the Feedback Form Component
      <MyClassComponent /> Render the Class Component */}

      <jsxComponent /> Render the JSX Component
      </div>
  );
}

export default App;

