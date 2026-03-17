// ============================================================
// PUNTO DE ENTRADA: main.tsx
// ============================================================
// Este es el primer archivo que ejecuta React.
// Monta el componente App dentro del elemento #root del HTML.
// StrictMode activa advertencias adicionales durante el desarrollo.
// ============================================================

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// Obtenemos el elemento HTML con id="root" del index.html
// El "!" al final le dice a TypeScript que estamos seguros de que existe
const rootElement: HTMLElement = document.getElementById('root')!;

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
