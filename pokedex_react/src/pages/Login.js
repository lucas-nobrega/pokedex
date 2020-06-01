import React, {useContext} from "react";
import axios from "axios"
import { navigate } from "@reach/router";
import {UserContext} from "../App.js"
const Login = () =>{
    const {value,setValue} = useContext(UserContext)

    const [err,setErr] = React.useState('');
    const [err_2,setErr_2] = React.useState('');
    const input = React.useRef();
    const [users,setUsers] = React.useState(null);
    
    const set = (event) =>{
        event.preventDefault();
        axios
            .get(`https://pokedex20201.herokuapp.com/users/${input.current.value}`)
            .then((res) => setUsers(res.data.user))
            .catch(err => {
                setErr(`Nome não encontrado, por favor faça o registro`);
                setErr_2('Para tentar novamente digite o nome correto, aperte enter e verefique novamente');
            })
    }

    

    const enter = () => {
        setValue({
            user: users,
            pokemon: value.pokemon
        });
        navigate('./pokemons');
    }
    return(
        <div className = "login">
            <h1>Login</h1>
            <form className = 'form_login' onSubmit = {(event) =>{
                set(event)
                setErr('')
                setErr_2('')
            }}>
                <input type = "text" ref = {input} placeholder = "Usuário"/>
            </form>
                {users && <button onClick = {enter}>Entrar</button>}
                <p><button onClick = {() => navigate("/register")}>Registrar-se</button></p>
                <p className = "err">{err}</p>
                <p className = "err">{err_2}</p>
        </div>
    )
}

export default Login;
