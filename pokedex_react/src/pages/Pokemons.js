import React, { useContext } from "react"
import {UserContext} from "../App.js";
import axios from 'axios'
const Pokemons = () =>{
    const {value,setValue} = useContext(UserContext);
    React.useEffect(() =>{
        axios
        .get('https://pokedex20201.herokuapp.com/pokemons')
        .then((res) => console.log(res.data.data))
    },[])
    return(
        <div>
            <h1>Pokemons</h1>
            <span>{value.username}</span>
        </div>
    )
}

export default Pokemons