import './style.css';
import {useEffect, useState} from 'react';
const mysql = require('mysql');

const Login = () =>{
    //constantes que conterão login e password 
    const [login,setLogin] = useState('');
    const [pass,setPass] = useState('');

    //manipula o submit do formulário de login
    function handleSubmit(e){
        e.preventDefault();
        alert("Login=>" + login +" Password=> "+ pass);
    }

    //manipula o input login
    function handleInputLogin(element){
        setLogin(element.target.value);
    }
    //manipula o input password
    function handleInputPass(element){
        setPass(element.target.value);
    }

    useEffect(()=>{
       
    },[]);

    return (
        <fieldset className="fieldset" style={{margin: 'auto', marginTop: window.screen.height/4}}>
            <legend className="legend"></legend>
            <form action="" method="post" className="form_login" onSubmit={handleSubmit}>
                <input type="text" name="login" className="input_login" placeholder="Login" onChange={handleInputLogin}/>
                <input type="password" name="senha" className="input_login" placeholder="Senha" onChange={handleInputPass}/>
                <input type="submit" value="Acessar" className='input_btn'/>
            </form>
        </fieldset>
    );
}

export default Login;