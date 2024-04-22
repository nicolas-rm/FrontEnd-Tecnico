// Dashboard.js
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Dashboard() {
    const [content, setContent] = React.useState('');
    const [category, setCategory] = React.useState('');

    const handleAddContent = async () => {
        try {
            const response = await axios.post('http://localhost:2708/add-content', {
                content: content,
                category: category
            });

            if (response.data.success) {
                console.log('Contenido agregado exitosamente');
            } else {
                console.error('Error al agregar contenido');
            }
        } catch (error) {
            console.error('Ocurrió un error al agregar contenido', error);
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light position-relative">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Mi Sitio</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/ruta1">Ruta 1</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/ruta2">Ruta 2</Link>
                        </li>
                        {/* Agrega más rutas aquí */}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Dashboard;
