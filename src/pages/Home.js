import React from "react";
import { Link } from "react-router-dom";
import '../styles/Home.css';
import './Assunto';

function Home(){
    
    return(

        <header>
            <h2>HOME</h2>
            <p>Escolha uma categoria para visualizar</p>
            <div className="DivSelect">
                <select>
                    <option>Todos</option>
                    <option><Link to="/categories">Categoria</Link></option>
                    <option><Link to="/animals">Disponível</Link></option>
                </select>
            </div>
            
        </header>
    )
}

export default Home;

