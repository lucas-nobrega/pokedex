import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import { UserContext } from "../App.js"


const ProfilePokemon = () => {
    const {value,setValue} = useContext(UserContext);
    const [pokemonInfo, setPokemonInfo] = useState([]);
    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        const script = document.createElement('script');

        script.src = "https://kit.fontawesome.com/fd365e0e6e.js";
        script.crossOrigin = "anonymous";
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);

    useEffect(() => {
        axios
            .get("https://pokedex20201.herokuapp.com/pokemons/" + value.pokemon.name)
            .then(res => {
                setPokemonInfo(res.data);
                console.log(res.data);
            });
        axios
            .get("https://pokedex20201.herokuapp.com/users/" + value.user.username)
            .then(res => {
                setUserInfo(res.data);
                console.log(res.data);
            });

    }, []);

    /*
    */
   const profilePokemonStyle = {
       display: "flex",
       flexDirection: "row",
       justifyContent: "center"
    };
    const profilePokemonStyle2 = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "max-content",
        backgroundColor: "#4285F4",
        borderRadius: "7px"
    };
    const addFavoritos = () => {
        
        axios({ 
            method: 'post',
            url: 'https://pokedex20201.herokuapp.com/users/' + value.user.username + '/starred/' + value.pokemon.name,
            data: {}
        }).then( () => { console.log("Favoritado") } )
        .catch( (err) => {
            
            if(err.response.status == 422){
                axios({
                    method: 'delete',
                    url: 'https://pokedex20201.herokuapp.com/users/' + value.user.username + '/starred/' + value.pokemon.name,
                    params: {}
                }).then ( res => {
                    console.log(res);
                } ).catch ( err => {console.log(err);} )
            }
        });
    };

    const FavoriteStar = () => { 
        return (
            <i className="fas fa-star" onClick={addFavoritos}></i>
        );
    };

    return (
        <div className="profilePokemon" style={profilePokemonStyle}>
            <div style={profilePokemonStyle2}>
                <span>{pokemonInfo.name} <FavoriteStar /> </span>
                <img src={pokemonInfo.image_url} />
                <span>{pokemonInfo.weight}</span>
                <span>{pokemonInfo.height}</span>
                <span>{pokemonInfo.kind}</span>
            </div>
        </div>
    );
};

export default ProfilePokemon;