import Home from './Home';

import '../styles/Conteudo.css';

function Tudo (){

    return(
        <article>
            <Home />
            <div className='quadroConteudo'>
            <h3>Resultados da busca:</h3> <p className="titleP">Tudo</p>

            </div>
        </article>
    )
}

export default Tudo;