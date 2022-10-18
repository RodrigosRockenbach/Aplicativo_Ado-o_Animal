import React from "react";
import { NavLink, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Icon from '@mdi/react'
import { mdiChevronDown } from '@mdi/js';


import '../styles/Home.css';

function Home(){
    
    return(
        <header>
            <h2>HOME</h2>
            <p>Escolha uma categoria para visualizar</p>
            <NavLink className="Menu">
                <ul>
                    <li>
                        <Link to="/Tudo">
                                <span>Todos <Icon className="iconeSeta" path={mdiChevronDown}/></span>
                        </Link>
                        <ul>
                            <li>
                                <Link to="/Categorias"><span>Categoria</span></Link>
                                <ul>
                                    <li>
                                        <Link to="/Gato"><span>Gato</span></Link>
                                    </li>
                                    <li>
                                    <Link to="/*"><span>Cachorro</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/*"><span>Coelho</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/*"><span>Peixe</span></Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/Animais"><span>Disponível</span></Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </NavLink>
            
        </header>
    )
}

export default Home;
