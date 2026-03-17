/** @type {import('tailwindcss').Config} */
export default {
  // Tailwind escanea estos archivos para generar solo los estilos que usas
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

