import React, { Component, useState } from "react";

import Icon from '@mdi/react'
import { mdiCat } from '@mdi/js';

import api from '../../components/contexts/api'
import Home from '../Home'

class Gato extends Component{

    state={
        categories: [],
    }

    async componentDidMount(){
        const response = await api.get('/categories');

        this.setState({categories: response.data});
    }

    render(){
        let { categories } = this.state;

        return(
            
            <article>
                <Home />
                <div className="quadroConteudo">
                    <h3>Resultados da busca:</h3> <p className="titleP">Gatos</p>
                    
                    {categories.map(categoria => (
                        <div className="DivQuadro">
                            <div>
                                <img className="imgCategories" src={categoria.img} />
                            </div>
                            <div className="DivDesc">
                                <h4>Gato {categoria.id}</h4>
                                <span> <Icon className="icone" path={mdiCat}/></span>
                                {categoria.name}
                                <p className="subFrase">{categoria.age} Anos</p>
                            </div>
                            
                        </div>
                    ))}
                </div>
            </article>
        )
    }
}

export default Gato;