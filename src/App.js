import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/TelaLogin'
import Home from './pages/Home'
import Assunto from './pages/Assunto'

function App() {

    return (

        //Rotas
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/' element={<Home />} />
                <Route path='/categories' element={<Home />} />
                <Route path='/animals' element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;