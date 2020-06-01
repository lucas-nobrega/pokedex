import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import {UserContext} from "../App.js"

const Profile = () => {

    const user = useContext(UserContext);
    const [userInfo, setUserInfo] = useState([]);
    const [pokemonsFavoritos, setPokemonsFavoritos] = useState([]);
    useEffect( () => {
        axios
            .get("https://pokedex20201.herokuapp.com/users/" + user)
            .then(res => {
                setUserInfo(res.data); 
                setPokemonsFavoritos(res.data.pokemons);
            });
    }, [] );
    
    const profileStyle = {
        width: "40%",
        backgroundColor: "#4285F4",
        marginRight: "auto",
        marginTop: "80px",
        marginLeft: "auto",
        borderRadius: "20px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column"
    };
    const cardStyle = {
        backgroundColor: "white",
        borderRadius: "7px",
        maxHeight: "min-content",
        maxWidth: "min-content",
        display: "flex",
        flexDirection: "column"
    };
    const favoritosStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap"
    };

    const CardPokemon = ({pokemon}) => { 
        return (
            <div key={pokemon.id} style={cardStyle} >
                <div><img src={pokemon.image_url} alt={pokemon.name} /></div>
                <span style={{textAlign: "center"}}>{pokemon.name}</span>
            </div>
        );
    };

    const Favoritos = () => {

        return (
            pokemonsFavoritos.map( (pokemon) => (
                <CardPokemon pokemon={pokemon} />
            ))
        );
    };
    return (
        <div className="profile">
            <div style={profileStyle}>
                <h1>{user}</h1>
                <div style={favoritosStyle}>
                    <Favoritos />
                </div>
            </div>
        </div>
    );
};

export default Profile