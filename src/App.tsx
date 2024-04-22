// App.tsx
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa Routes en lugar de Switch
import Login from './Login';
import Dashboard from './Dashboard';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Toaster } from 'sonner'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Router>
                <Routes> {/* Usa Routes en lugar de Switch */}
                    <Route path="/login" element={<Login />} /> {/* Usa el prop 'element' en lugar de 'component' */}
                    <Route path="/dashboard" element={<Dashboard />} /> {/* Usa el prop 'element' en lugar de 'component' */}
                    <Route path="/" element={
                        <>
                            <div>
                                <a href="https://vitejs.dev" target="_blank">
                                    <img src={viteLogo} className="logo" alt="Vite logo" />
                                </a>
                                <a href="https://react.dev" target="_blank">
                                    <img src={reactLogo} className="logo react" alt="React logo" />
                                </a>
                            </div>
                            <h1>Vite + React</h1>
                            <div className="card">
                                <button onClick={() => setCount((count) => count + 1)}>
                                    count is {count}
                                </button>
                                <p>
                                    Edit <code>src/App.tsx</code> and save to test HMR
                                </p>
                            </div>
                            <p className="read-the-docs">
                                Click on the Vite and React logos to learn more
                            </p>
                        </>
                    } /> {/* Usa el prop 'element' en lugar de 'component' */}
                </Routes>
            </Router>
            <Toaster position='top-right' />

        </>
    );
}

export default App;