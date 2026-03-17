// ============================================================
// PÁGINA: Home
// ============================================================
// Página principal de TaskBoard. Por ahora muestra un layout
// básico con diseño oscuro usando Tailwind CSS.
// ============================================================

import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

// React.FC es el tipo de un componente funcional de React.
// FC viene de "Function Component".
const Home: React.FC = (): React.ReactElement => {
  return (
    // Contenedor principal: ocupa toda la pantalla con fondo oscuro
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">

      {/* Barra de navegación superior */}
      <header className="border-b border-gray-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold text-indigo-400 tracking-tight">
            📋 TaskBoard
          </h1>
          <Link to="/login">
            <Button variant="secondary">Iniciar sesión</Button>
          </Link>
        </div>
      </header>

      {/* Sección hero: contenido central de bienvenida */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <div className="max-w-2xl">

          {/* Título principal */}
          <h2 className="text-5xl font-extrabold mb-4 text-white leading-tight">
            Organiza tu trabajo
            <span className="text-indigo-400"> visualmente</span>
          </h2>

          {/* Descripción */}
          <p className="text-gray-400 text-lg mb-8">
            TaskBoard es un tablero Kanban minimalista para gestionar tareas,
            organizar proyectos y trabajar de forma más eficiente.
          </p>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login">
              <Button variant="primary" className="text-base px-6 py-3">
                Comenzar gratis →
              </Button>
            </Link>
            <Button variant="secondary" className="text-base px-6 py-3">
              Ver demo
            </Button>
          </div>
        </div>

        {/* Placeholder para futura captura de pantalla de la app */}
        <div className="mt-16 w-full max-w-4xl rounded-xl border border-gray-700 bg-gray-800 h-64 flex items-center justify-center">
          <p className="text-gray-500 text-sm">
            🚧 Vista previa del tablero — próximamente
          </p>
        </div>
      </main>

      {/* Pie de página */}
      <footer className="border-t border-gray-800 px-6 py-4 text-center text-gray-600 text-sm">
        TaskBoard — Construido con React, TypeScript y Tailwind CSS
      </footer>
    </div>
  );
};

export default Home;
