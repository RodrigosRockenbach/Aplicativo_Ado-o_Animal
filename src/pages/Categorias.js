import React, { Component, useState } from "react";

import api from '../components/contexts/api';
import '../styles/Conteudo.css';
import Home from './Home';


class Categorias extends Component{
    state={
        categories: [],
    }

    async componentDidMount(){
        const response = await api.get('/categories');

        this.setState({ categories: response.data });
    }

    render(){
        const { categories } = this.state;

        return(
            <article>
                <Home />
                <div className="quadroConteudo">
                    <h3>Resultados da busca:</h3> <p className="titleP">Categoria</p>
                    
                    {categories.map(categorie => (
                        <div className="DivQuadro">
                            <div>
                                <img className="imgCategories" src={categorie.img} />
                            </div>
                            <div className="DivDesc">
                                <h4>{categorie.id}</h4>
                                <p>{categorie.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </article>
            
        )
    }
}

export default Categorias;
