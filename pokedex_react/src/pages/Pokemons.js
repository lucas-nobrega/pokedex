import React, { useContext } from "react"
import axios from 'axios'
import { navigate } from "@reach/router";
import {UserContext} from "../App.js";

const Pokemons = () =>{
    const {value,setValue} = useContext(UserContext);
    const[pokemons,setPokemons] = React.useState([])

    const profile = (p) =>{
        setValue({
            user: value.user,
            pokemon: p,
        })
        navigate("./pokemon_profile")
    }
    const starred = (p) =>{
        console.log(value)
        console.log(p)
        //axios.post(`https://pokedex20201.herokuapp.com/users/${value.username}/starred/${p}`)
        axios
            .get(`https://pokedex20201.herokuapp.com/users/${value.username}`)
            .then(res => console.log(res.data.pokemons))
    }

    React.useEffect(() =>{
        axios
        .get('https://pokedex20201.herokuapp.com/pokemons')
        .then((res) => setPokemons(res.data.data))
    },[])
    return(
        <>
            <h1>Pokemons</h1>
            <span>{value.user.username}</span>
            <div className = "pokemons">
                {pokemons.map(p=>(
                    <div className = "pokemon" key = {p.id}>
                        <img src = {p.image_url} />
                        <span>Name: {p.name}</span>
                        <button onClick = {() => profile(p)} >Profile</button>
                        <button onClick = {() => starred(p)}>Star</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Pokemons