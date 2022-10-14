import React from "react";
import '../styles/TelaLogin.css';

function TelaLogin() {

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
                    <button className="btnLogin">Entrar</button>
                </div>
            </form>
        </section>

    );

}

export default TelaLogin;