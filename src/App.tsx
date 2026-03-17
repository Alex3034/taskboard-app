// ============================================================
// COMPONENTE RAÍZ: App
// ============================================================
// App.tsx es el punto de entrada de la aplicación React.
// Aquí configuramos React Router para manejar la navegación
// entre páginas sin recargar el navegador (SPA - Single Page App).
// ============================================================

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importamos las páginas que hemos creado
import Home from './pages/Home';
import Login from './pages/Login';

const App: React.FC = (): React.ReactElement => {
  return (
    // BrowserRouter: habilita la navegación basada en la URL del navegador.
    // Routes: contenedor de todas las rutas de la app.
    // Route: define qué componente renderizar para cada URL.
    <BrowserRouter>
      <Routes>
        {/* Ruta raíz: cuando la URL es "/" mostramos la página Home */}
        <Route path="/" element={<Home />} />

        {/* Ruta de login: cuando la URL es "/login" mostramos Login */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
