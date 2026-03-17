# 📋 TaskBoard

![React](https://img.shields.io/badge/React-18+-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=flat-square&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite&logoColor=white)

Aplicación web de gestión de tareas tipo Kanban construida con React, TypeScript y Tailwind CSS. Permite crear tableros, organizar tareas en columnas y gestionar proyectos de forma visual e intuitiva.

---

## 🚧 Demo

🚧 Coming soon

---

## 📸 Capturas de pantalla

> Próximamente...

---

## ✨ Características

- [ ] 🔐 Autenticación con Google (Firebase Auth)
- [ ] 📋 Crear y gestionar múltiples tableros
- [ ] 🗂️ Columnas personalizables (Por hacer, En progreso, Hecho)
- [ ] ✅ CRUD completo de tareas (crear, editar, eliminar, mover)
- [ ] 🎯 Prioridades de tareas (baja, media, alta)
- [ ] 🖱️ Drag & Drop entre columnas
- [ ] 🔍 Filtros por prioridad y fecha
- [ ] 📱 Diseño responsive (móvil + escritorio)
- [ ] 🌙 Tema oscuro por defecto

---

## 🛠️ Tecnologías

| Tecnología | Versión | Uso |
|---|---|---|
| [React](https://react.dev/) | 18+ | Librería de UI |
| [TypeScript](https://www.typescriptlang.org/) | 5 | Tipado estático |
| [Tailwind CSS](https://tailwindcss.com/) | 3 | Estilos |
| [Vite](https://vite.dev/) | 6 | Bundler y servidor de desarrollo |
| [React Router](https://reactrouter.com/) | 6 | Navegación entre páginas |
| [Firebase](https://firebase.google.com/) | — | Auth + Base de datos *(próximamente)* |

---

## 📁 Estructura del proyecto

```
src/
├── components/        # Componentes reutilizables de UI
│   └── ui/           # Componentes base (Button, Input, Modal...)
├── context/          # React Context providers (estado global)
├── hooks/            # Custom hooks
├── interfaces/       # Interfaces y tipos de TypeScript
│   └── index.ts      # Exporta todas las interfaces del dominio
├── pages/            # Páginas/vistas principales
│   ├── Home.tsx      # Página de inicio
│   └── Login.tsx     # Página de autenticación
├── services/         # Llamadas a APIs/Firebase
├── utils/            # Funciones helper
├── App.tsx           # Componente raíz con React Router
├── main.tsx          # Punto de entrada de la aplicación
└── index.css         # Estilos globales + directivas Tailwind
```

---

## 🚀 Instalación

```bash
# 1. Clona el repositorio
git clone https://github.com/Alex3034/taskboard-app.git

# 2. Entra en la carpeta del proyecto
cd taskboard-app

# 3. Instala las dependencias
npm install

# 4. Inicia el servidor de desarrollo
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

---

## 📚 Aprendizajes

Este proyecto es parte de mi proceso de aprendizaje activo. Con él estoy practicando:

- **TypeScript**: interfaces, tipos, genéricos, tipado de props en React
- **React avanzado**: Context API, custom hooks, React Router
- **Arquitectura frontend**: separación de responsabilidades, estructura escalable
- **Firebase**: autenticación, Firestore como base de datos en tiempo real
- **Buenas prácticas**: componentes reutilizables, código limpio, nomenclatura consistente

---

## 👤 Autor

**Alejandro Herrera**

- GitHub: [@Alex3034](https://github.com/Alex3034)
