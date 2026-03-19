interface Task {
    id: string;
    title: string;
    description: string;
    columnId: string;
    status: 'todo' | 'in-progress' | 'done';
}

interface Column {
    id: string;
    title: string;
    boardId: string;
    tasks?: Task[];
}

interface Board {
    id: string;
    title: string;
    columns?: Column[];
}

// Datos de ejemplo para tareas, columnas y tableros
export const mockBoards: Board[] = [
    { id: 'board-1', title: 'Tablero Principal' },
];

export const mockColumns: Column[] = [
    { id: 'column-1', title: 'Por hacer', boardId: 'board-1' },
    { id: 'column-2', title: 'En progreso', boardId: 'board-1' },
    { id: 'column-3', title: 'Hecho', boardId: 'board-1' },
];

export const mockTasks: Task[] = [
    {
        id: 'task-1',
        title: 'Configurar proyecto',
        description: 'Crear el proyecto con Create React App y configurar TypeScript.',
        columnId: 'column-1',
        status: 'todo',
    },
    {
        id: 'task-2',
        title: 'Diseñar UI',
        description: 'Crear los componentes de la interfaz de usuario con Tailwind CSS.',
        columnId: 'column-1',
        status: 'todo',
    },
    {
        id: 'task-3',
        title: 'Implementar arrastrar y soltar',
        description: 'Agregar funcionalidad de drag-and-drop para mover tareas entre columnas.',
        columnId: 'column-2',
        status: 'in-progress',
    },
    {
        id: 'task-4',
        title: 'Integrar Firebase',
        description: 'Conectar la aplicación con Firebase para almacenamiento y autenticación.',
        columnId: 'column-3',
        status: 'done',
    },
];

const getBoards = (): Board[] => mockBoards;

const getTasksByColumn = (columnId: string): Task[] => mockTasks.filter(task => task.columnId === columnId);