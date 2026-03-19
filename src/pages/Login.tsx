// ============================================================
// PÁGINA: Login
// ============================================================
// Página de inicio de sesión. Por ahora solo tiene UI,
// sin funcionalidad real (eso se añade cuando conectemos Firebase).
// ============================================================

import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import GoogleIcon from '../components/icons/GoogleIcon';

const Login: React.FC = (): React.ReactElement => {
  // Esta función se llamará cuando el usuario haga clic en "Iniciar sesión con Google".
  // Por ahora solo muestra un mensaje. Más adelante conectará con Firebase Auth.
  const handleGoogleSignIn = (): void => {
    // TODO: Implementar autenticación con Firebase en el siguiente sprint
    alert('Autenticación con Google — próximamente 🚀');
  };

  return (
    // Fondo oscuro centrado, ocupa toda la pantalla
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">

      {/* Tarjeta de login */}
      <div className="w-full max-w-md bg-gray-800 rounded-2xl border border-gray-700 p-8 shadow-xl">

        {/* Cabecera de la tarjeta */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            📋 TaskBoard
          </h1>
          <p className="text-gray-400">
            Inicia sesión para acceder a tus tableros
          </p>
        </div>

        {/* Botón de inicio de sesión con Google */}
        <Button
          variant="secondary"
          onClick={handleGoogleSignIn}
          className="w-full py-3 text-base gap-2"
          icon={ <GoogleIcon /> }
        >          
          Iniciar sesión con Google
        </Button>

        {/* Separador visual */}
        <div className="my-6 flex items-center gap-3">
          <div className="flex-1 h-px bg-gray-700" />
          <span className="text-gray-500 text-sm">o</span>
          <div className="flex-1 h-px bg-gray-700" />
        </div>

        {/* Placeholder para login con email/contraseña (próximamente) */}
        <p className="text-center text-gray-500 text-sm">
          Login con email — próximamente
        </p>

        {/* Enlace para volver a la página principal */}
        <div className="mt-8 text-center">
          <Link
            to="/"
            className="text-indigo-400 hover:text-indigo-300 text-sm transition-colors"
          >
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
