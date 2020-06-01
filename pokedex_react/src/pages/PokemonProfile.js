import React, {useContext} from "react"
import {UserContext} from "../App.js"


const PokemonProfile = () =>{
    
    const {value,setValue} = useContext(UserContext)
    console.log(value.pokemon)
    return(
        <>
            <h1>Pokemon Profile</h1>
            <div className = "pokemons">
                
            </div>
        </>
    )
}

export default PokemonProfile