// App.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa Routes en lugar de Switch
import Login from './Login';
import Dashboard from './Dashboard';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Toaster } from 'sonner'
import Home from './Home';

function App() {

    return (
        <>
            <Router>
                <Routes> {/* Usa Routes en lugar de Switch */}
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </Router>
            <Toaster position='top-right' />

        </>
    );
}

export default App;
