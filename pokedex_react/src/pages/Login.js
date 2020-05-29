import React from "react";
import axios from "axios"
import { navigate } from "@reach/router";

const Login = () =>{
    const [err,setErr] = React.useState('')
    const [err_2,setErr_2] = React.useState('')
    const [hide,setHide] = React.useState(true)
    const [hide_2, setHide_2] = React.useState(true);
    const input = React.useRef();
    let [users, setUsers] = React.useState([]);
    const [name, setName] = React.useState(null);
    
    
    const set = (event) =>{
        event.preventDefault();
        setName(input.current.value);
        setHide(false);
    }

    const verefy = (event) =>{
        event.preventDefault();
        if(users.length !== 0){
            setHide_2(false);
            setErr('');
            setErr_2('');
        }
        else{
            setErr(`Nome não encontrado, por favor faça o registro`);
            setErr_2('Para tentar novamente digite o nome correto, aperte enter e verefique novamente');
        }
        
    }

    const enter = () => {
        navigate('./pokemons')
    }
    React.useEffect(() =>{
        axios
        .get('https://pokedex20201.herokuapp.com/users')
        .then((res) => setUsers(res.data.data.filter(user => user.username === `${name}`)))
    },[name])
    return(
        <div className = "login">
            <h1>Login</h1>
            <form className = 'form_login' onSubmit = {set}>
                <label>Usuário</label>
                <input type = "text" ref = {input}/>
            </form>
                {hide || <button onClick = {verefy}>verificar</button>}
                {hide_2 || <button onClick = {enter}>entrar</button>}
                <p><a href = "./register">Registrar-se</a></p>
                <p>{err}</p>
                <p>{err_2}</p>
        </div>
    )
}

export default Login;
