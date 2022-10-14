import React from "react";
import '../styles/Header.css';
import '../pages/Home';

function Header(){
    
    return(

        <header>
            <h2>HOME</h2>
            <p>Escolha uma categoria para visualizar</p>
            <div className="DivSelect">
                <select>
                    <option>Todos</option>
                    <option>Categoria</option>
                    <option>Disponível</option>
                </select>
            </div>
            
        </header>
    )
}

export default Header;

