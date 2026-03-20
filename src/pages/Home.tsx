// ============================================================
// PÁGINA: Home
// ============================================================
// Página principal de TaskBoard. Por ahora muestra un layout
// básico con diseño oscuro usando Tailwind CSS.
// ============================================================

import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Header from '../components/ui/Header';
import { mockBoards, mockColumns, getTasksByColumn } from '../utils/mockData';
import BoardView from '../components/board/BoardView';

const columnsWithTasks = mockColumns.map(column => ({
  id: column.id,
  title: column.title,
  tasks: getTasksByColumn(column.id),
}));

// React.FC es el tipo de un componente funcional de React.
// FC viene de "Function Component".
const Home: React.FC = (): React.ReactElement => {
  return (
    // Contenedor principal: ocupa toda la pantalla con fondo oscuro
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">

      {/* Barra de navegación superior */}
      <Header title="📋 TaskBoard" shouldShowLoginButton={true} />

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
        <BoardView
          id={mockBoards[0].id}
          title={mockBoards[0].title}
          columns={columnsWithTasks}
        />
      </main>

      {/* Pie de página */}
      <footer className="border-t border-gray-800 px-6 py-4 text-center text-gray-600 text-sm">
        TaskBoard — Construido con React, TypeScript y Tailwind CSS
      </footer>
    </div>
  );
};

export default Home;
