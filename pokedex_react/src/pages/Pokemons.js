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
        navigate("./profilePokemon")
    }
    const starred = async (p) =>{
        axios({ 
            method: 'post',
            url: 'https://pokedex20201.herokuapp.com/users/' + value.user.username + '/starred/' + p.name,
            data: {}
        }).then( () => { console.log("Favoritado") } )
        .catch( (err) => {
            
            if(err.response.status == 422){
                axios({
                    method: 'delete',
                    url: 'https://pokedex20201.herokuapp.com/users/' + value.user.username + '/starred/' + p.name,
                    params: {}
                }).then ( res => {
                    console.log(res);
                } ).catch ( err => {console.log(err);} )

            }
        });
    }

    React.useEffect(() =>{
        axios
        .get('https://pokedex20201.herokuapp.com/pokemons')
        .then((res) => setPokemons(res.data.data))
    },[])
    return(
        <div className ="pokemonsPage">
            <h1>Pokemons</h1>
            <p>Name: {value.user.username}</p>
            <button className = "profileButton" onClick = {() => navigate("./profile")}>Profile</button>
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
        </div>
    )
}

export default Pokemons