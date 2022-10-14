import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/pages/Header';
import Home from './components/pages/Home';

/*
export default function App() {
    return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Header />} />
            <Route index element={<Home />} />
        </Routes>
    </BrowserRouter>
    );
    
}*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <Header />
      <Home />
    </React.StrictMode>
);


