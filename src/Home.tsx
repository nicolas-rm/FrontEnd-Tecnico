// Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Bienvenido a nuestra plataforma de contenidos</h1>
            <Link to="/login">Iniciar sesión o registrarse</Link>
        </div>
    );
}

export default Home;
