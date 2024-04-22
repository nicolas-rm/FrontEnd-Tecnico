
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import axios from 'axios';

// Sonner
import { toast, Toaster } from 'sonner'

function Login() {

    const navigate = useNavigate();

    // Estado para guardar el correo electrónico
    const [email, setEmail] = React.useState('');
    // Estado para guardar la contraseña
    const [password, setPassword] = React.useState('');


    const handleLogin = async () => {
        try {
            // Haz una solicitud POST a tu backend con los datos del formulario
            const response = await axios.post('http://localhost:2708/api/auth/login', {
                email: email,
                password: password,
            });

            if (response.data.token) {
                toast.success('Inicio de sesión exitoso');
                navigate('/home');
            } else {
                toast.error('Verifique las credenciales');
            }
        } catch (error) {
            toast.error('Ocurrió un error durante el inicio de sesión');
            // Aquí puedes manejar cualquier error que ocurra durante la solicitud
            console.error('Ocurrió un error durante el inicio de sesión', error);
        }
    };

    return (
        <div className="container">
            <h2>Iniciar sesión</h2>

            <div className="card">
                <div className="card-body">
                    <div className="form-group">
                        <label>Correo electrónico</label>
                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <label>Contraseña</label>
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <button className="btn btn-primary mt-4 w-100" onClick={handleLogin}>
                            Iniciar sesión
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
