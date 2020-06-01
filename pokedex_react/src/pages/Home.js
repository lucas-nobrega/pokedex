import React from "react";
import { navigate } from "@reach/router";


const Home = () => {
    return(
        <div className = "Home">
            <h1>Bem vindo</h1>
            <button onClick = {() => navigate("/login")}>Login</button>
            <button onClick = {() => navigate("/register")}>Registrar-se</button>
        </div>
    )
}

export default Home;