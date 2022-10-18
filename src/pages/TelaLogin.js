import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../styles/TelaLogin.css';


function TelaLogin() {


    /*const login = () =>{
        var email = String(document.getElementsByClassName('email').value);
        var senha = Number(document.getElementsByClassName('senha').value);

        var res= ''
        if(email === "admin" && senha === "admin"){
            res = 'Logado'

        }else{
            res = 'Erro'
        }

        alert(res)
    }*/

    return (
        <section>
            <form className="formLogin">
                <span>
                    <img className="imgLogo" src="http://localhost:3000/ico.png"/>
                </span>
                <h3><b>LOGIN</b></h3>
                <p>Insira seus dados para continuar</p>

                <div className="containerLogin">
                    <p className="title"><b>EMAIL</b></p>
                    <div className="wrapInput">
                        <input 
                            className="input" 
                            type="text" 
                            name="email" 
                            data-testid='email'
                            placeholder="user@exemplo.com.br"/>
                    </div>

                    <p className="title"><b>SENHA</b></p>
                    <div className="wrapInput">
                        <input 
                            className="input" 
                            type="password" 
                            name="senha" 
                            placeholder="******"/>
                    </div>
                </div>
                

                <div className="btnLoginContainer">
                    <button className="btnLogin">
                        <Link to="/"><span>Entrar</span></Link>
                    </button>
                </div>
            </form>
        </section>

    );

}

export default TelaLogin;