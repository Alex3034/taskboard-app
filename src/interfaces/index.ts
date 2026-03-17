// ============================================================
// INTERFACES Y TIPOS DEL DOMINIO DE TASKBOARD
// ============================================================
// En TypeScript, una "interface" define la forma de un objeto:
// qué propiedades tiene y qué tipo es cada una.
// Un "type" es similar pero más flexible: también puede
// representar uniones de valores concretos (como un enum).
// ============================================================

// "type" alias: Priority solo puede ser uno de estos tres valores exactos.
// Si intentas usar otro valor, TypeScript te dará un error.
export type Priority = 'low' | 'medium' | 'high';

// "type" alias: los tipos de columna por defecto de un tablero Kanban.
export type ColumnType = 'todo' | 'in-progress' | 'done';

// "interface" Task: representa una tarea individual en el tablero.
// Cada propiedad tiene un tipo explícito para evitar errores en tiempo de desarrollo.
export interface Task {
  id: string;           // Identificador único de la tarea
  title: string;        // Título visible de la tarea
  description: string;  // Descripción detallada
  priority: Priority;   // Usa el type alias de arriba: 'low' | 'medium' | 'high'
  columnId: string;     // ID de la columna donde está la tarea
  boardId: string;      // ID del tablero al que pertenece
  createdAt: Date;      // Fecha de creación
  updatedAt: Date;      // Fecha de la última modificación
}

// "interface" Column: representa una columna del tablero (ej. "Por hacer", "En progreso").
export interface Column {
  id: string;
  title: string;
  type: ColumnType;   // Usa el type alias: 'todo' | 'in-progress' | 'done'
  boardId: string;
  order: number;      // Posición de la columna dentro del tablero
}

// "interface" Board: representa un tablero completo con sus columnas.
export interface Board {
  id: string;
  title: string;
  description: string;
  userId: string;       // ID del usuario propietario del tablero
  columns: Column[];    // Array (lista) de columnas — el [] indica "array de Column"
  createdAt: Date;
  updatedAt: Date;
}

// "interface" User: representa un usuario autenticado en la app.
export interface User {
  id: string;
  email: string;
  displayName: string;
  photoURL?: string;  // El "?" significa que esta propiedad es OPCIONAL.
                      // Un User puede tener foto de perfil o no tenerla.
}
