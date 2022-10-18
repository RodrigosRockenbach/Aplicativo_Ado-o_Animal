import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/TelaLogin'
import Home from './pages/Home'
import Tudo from './pages/Tudo'
import Categorias from './pages/Categorias'
import Animais from './pages/Animais'
import Gato from './pages/Categoria/Gato'
import NoPage from './pages/NoPage';

function App() {

    return (

        //Rotas
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/' element={<Home />} /> 
                <Route path='/Tudo' element={<Tudo />} />
                <Route path='/Categorias' element={<Categorias />} />
                <Route path='/Animais' element={<Animais />} />
                <Route path='/gato' element={<Gato />} />
                <Route path='/*' element={<NoPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;