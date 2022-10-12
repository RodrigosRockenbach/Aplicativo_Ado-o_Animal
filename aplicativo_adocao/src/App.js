
function App() {
    return (
        <section>
            <form className="formLogin">
                <span>
                    <p>IMG</p>
                </span>
                <h3><b>LOGIN</b></h3>
                <p>Insira seus dados para continuar</p>

                <div className="containerLogin">
                    <p className="title"><b>EMAIL</b></p>
                    <div className="wrapInput">
                        <input className="input" type="email" placeholder="user@exemplo.com.br"/>
                    </div>

                    <p className="title"><b>SENHA</b></p>
                    <div className="wrapInput">
                        <input className="input" type="password" placeholder="******"/>
                    </div>
                </div>

                <div className="btnLoginContainer">
                    <button className="btnLogin">Entrar</button>
                </div>
            </form>
        </section>

      );
}

export default App;
