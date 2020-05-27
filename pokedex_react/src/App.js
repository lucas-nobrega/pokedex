import React from 'react';
import { Router } from "@reach/router";
import './App.css';

import Home from "./pages/Home"
import Login from "./pages/Login";
import Register from "./pages/Register"

function App() {
  return (
    <div className="App">
        <Router>
          <Home path = "/" />
          <Login path = "/login"/>
          <Register path = "/register"/>
        </Router>
    </div>
  );
}

export default App;
