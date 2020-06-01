import React, { createContext } from 'react';
import { Router } from "@reach/router";
import './App.css';


import Home from "./pages/Home"
import Login from "./pages/Login";
import Register from "./pages/Register"
import Pokemons from "./pages/Pokemons"
import Profile from './pages/Profile';
export  const UserContext = createContext(null);

function App() {
  const [value, setValue] = React.useState([])
  return (
    <div className="App">
        <UserContext.Provider value = {{value, setValue}}>
          <Router>
            <Home path = "/" />
            <Login path = "/login"/>
            <Register path = "/register"/>
            <Pokemons path = "/pokemons"/>
            <Profile path = "/profile" />
          </Router>
        </UserContext.Provider>
    </div>
  );
}

export default App;
