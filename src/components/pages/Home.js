import React, { Component, useState } from "react";
import api from '../contexts/api';
import '../styles/Home.css';

class Home extends Component{

    state={
        categories: [],
        animals: [],
    }

    async componentDidMount(){
        const response = await api.get('/categories');
        const responseAnimals = await api.get('/animals');

        this.setState({ categories: response.data });
        this.setState({ animals: responseAnimals.data });
    }

    render(){

        const { categories } = this.state;
        const { animals } = this.state;

        return(
            <article>
                <h3>Resultados da busca:</h3>
                
                {animals.map(animal => (
                    <div className="DivQuadro">
                        <div className="imgCategories">
                            {animal.img}
                        </div>
                        <div className="DivDesc">
                            <p>id: {animal.id}</p>
                            <p>Age: {animal.age}</p>
                            <p>Name: {animal.name}</p>
                        </div>
                        
                    </div>
                ))}
                {categories.map(categorie => (
                    <div className="DivQuadro">
                        <div className="imgCategories">
                            {categorie.img}
                        </div>
                        <div className="DivDesc">
                            <h4>{categorie.id}</h4>
                            <p>{categorie.name}</p>
                        </div>
                    </div>
                ))}
                    {console.log(animals)}

            </article>
        )
    }
}

export default Home;
