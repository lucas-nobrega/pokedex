import React, { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";


const Form = () => {
    const [user, setUser] = useState("");

    const submitForm = (e) => {
        e.preventDefault();
        axios({
            method: 'post',
            url: 'https://pokedex20201.herokuapp.com/users',
            data: {
                username: user
            }
        })
        .then(() => alert("Usuario criado com sucesso!"))
        .catch(res => {console.log(res); alert("Ops deu erro!");});
        
        navigate('./login');
    };

    return (
        <form onSubmit={e => submitForm(e)}>
            <input type="text" placeholder="Digite seu nome de usuário" onChange={(e) => setUser(e.target.value)} />
            <button type="submit">Criar Usuário</button>
        </form>
    );
};

const Register = () => {
    return (
        <div className="register">
            <h1>Registrar-se</h1>
            <Form />
        </div>
    )
}

export default Register