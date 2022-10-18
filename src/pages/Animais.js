import React, { Component, useState } from "react";

import api from '../components/contexts/api';
import '../styles/Conteudo.css';
import Home from './Home'

class Animais extends Component{

    state={
        animals: [],
    }

    async componentDidMount(){
        const response = await api.get('/animals');

        this.setState({animals: response.data});
    }

    render(){
        let { animals } = this.state;

        return(
            
            <article>
                <Home />
                <div className="quadroConteudo">
                    <h3>Resultados da busca:</h3> <p className="titleP">Animais Disponíveis</p>
                    {animals.map(animal => (
                        <div className="DivQuadro">
                            <div>
                                <img className="imgCategories" src={animal.img} />
                            </div>
                            <div className="DivDesc">
                                <p>Id: {animal.id}</p>
                                <p>Nome: {animal.name}</p>
                                <p className="subFrase">{animal.age} Anos</p>
                            </div>
                            
                        </div>
                    ))}
                </div>
            </article>
        )
    }
}

export default Animais;