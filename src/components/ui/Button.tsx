// ============================================================
// COMPONENTE REUTILIZABLE: Button
// ============================================================
// "interface" ButtonProps define exactamente qué props acepta
// este componente. TypeScript comprobará que cualquier lugar
// que use <Button> pase las props correctas.
// ============================================================

import React from 'react';

// Definimos los tipos de las props del componente.
// Todas las propiedades con "?" son opcionales.
interface ButtonProps {
  // React.ReactNode es el tipo para cualquier cosa que React puede renderizar:
  // texto, otros componentes, elementos HTML, null, etc.
  children: React.ReactNode;

  // Función que se ejecuta al hacer clic. El tipo "() => void" significa:
  // "una función que no recibe argumentos y no devuelve nada".
  onClick?: () => void;

  // "variant" controla el aspecto visual del botón.
  // Solo acepta uno de estos tres valores literales.
  variant?: 'primary' | 'secondary' | 'danger';

  disabled?: boolean;

  // "type" es el atributo HTML del botón. TypeScript conoce los valores válidos.
  type?: 'button' | 'submit';

  // Clases CSS adicionales para personalizar el botón desde fuera.
  className?: string;

  icon?: React.ReactNode;
}

// El componente Button recibe las props desestructuradas con sus tipos.
// Asignamos valores por defecto donde tiene sentido.
const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
  type = 'button',
  className = '',
  icon,
}): React.ReactElement => {

  // Clases base que siempre se aplican al botón
  const baseClasses: string =
    'inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed';

  // Clases que varían según el "variant". Usamos un objeto como mapa de clases.
  const variantClasses: Record<'primary' | 'secondary' | 'danger', string> = {
    primary:
      'bg-indigo-600 hover:bg-indigo-500 text-white focus:ring-indigo-500',
    secondary:
      'bg-gray-700 hover:bg-gray-600 text-gray-100 focus:ring-gray-500',
    danger:
      'bg-red-600 hover:bg-red-500 text-white focus:ring-red-500',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
