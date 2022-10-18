import { Link } from 'react-router-dom';

import Icon from '@mdi/react'
import { mdiHome } from '@mdi/js';

import '../styles/Conteudo.css';
import Home from './Home'


const NoPage = () => {

    return (
        <footer>
            <div className='containerERRO'>
                <h1 className='hGiga'>ERRO 404</h1>
                <br></br>
                <h2>PÁGINA NÃO ENCONTRADA :/</h2>
                <h4>Desculpe, esta página ainda não esta pronta..</h4>
            </div>
            <Link to="/">
                <Icon className="botaoRetorno" path={mdiHome}/>
            </Link>
        </footer>
    )
}

export default NoPage;