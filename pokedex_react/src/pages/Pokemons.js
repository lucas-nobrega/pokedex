import React, { useContext } from "react"
import {UserContext} from "../App.js";

const Pokemons = () =>{
    const {value,setValue} = useContext(UserContext);
    return(
        <div>
            <h1>Pokemons</h1>
            <span>{value.username}</span>

        </div>
    )
}

export default Pokemons