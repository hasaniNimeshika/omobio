
import React from 'react';
import './App.css';
import Login from './Login';
import Home from './Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
     <Router>
        <Route path="/" exact component={Login}/> 
        
        <Route path="/home" exact component={Home}/> 
      </Router>
    </div>
  );
}

export default App;
