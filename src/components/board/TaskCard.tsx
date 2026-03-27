import { useState } from "react";
import Button from "../ui/Button";
import useAppContext from '../../context/AppContext';

export interface TaskCardProps {
    id: string;
    title: string;
    description: string;
    status: 'todo' | 'in-progress' | 'done';
    columnId: string;
}

const TaskCard: React.FC<TaskCardProps> = ({
    id,
    title,
    description,
    status,
    columnId
}): React.ReactElement => {
    const statusColors: Record<'todo' | 'in-progress' | 'done', string> = {
        'todo': 'bg-gray-600',
        'in-progress': 'bg-yellow-600',
        'done': 'bg-green-600',
    };

    const { editTask, deleteTask, moveTask } = useAppContext();
    const [isEditing, setIsEditing] = useState(false);
    const [taskTitle, setTaskTitle] = useState(title);
    const [taskDescription, setTaskDescription] = useState(description);

    return isEditing ? (
        
        <form onSubmit={(e) => {
            e.preventDefault();
            editTask( id, taskTitle, taskDescription);
            setIsEditing(false);
        }} className="flex flex-col gap-2">

            <div className="flex flex-col gap-2">
                <input
                    type="text"
                    placeholder="Título de la tarea"
                    value={taskTitle}
                    onChange={(e) => setTaskTitle(e.target.value)}
                    className="p-2 rounded bg-gray-800 text-white border border-gray-700"
                />
                <textarea
                    placeholder="Descripción de la tarea"
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                    className="p-2 rounded bg-gray-800 text-white border border-gray-700"
                />
            </div>
            <div className="flex justify-end gap-2">

                <Button
                    onClick={() => setIsEditing(false)}
                    variant="secondary" 
                    className="text-base px-6 py-3"
                >
                    Cancelar
                </Button>
                
                <Button
                    type="submit"
                    variant="primary" 
                    className="text-base px-6 py-3"
                >
                    Guardar
                </Button>
            </div>
        </form>
    ) : (
        <div className={`p-4 rounded-lg shadow ${statusColors[status]}`}>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p>{description}</p>
            <select value={columnId} onChange={(e) => moveTask(id, e.target.value)} className="mt-2 p-2 rounded bg-gray-800 text-white border border-gray-700">
                <option value="column-1">Por hacer</option>
                <option value="column-2">En progreso</option>
                <option value="column-3">Hecho</option>
            </select>
            <Button
                onClick={() => setIsEditing(true)}
                variant="secondary"
                className="text-sm px-4 py-2 mt-4"
            >
                Editar
            </Button>
            <Button
                onClick={() => deleteTask(id)}
                variant="secondary"
                className="text-sm px-4 py-2 mt-4"
            >
                Eliminar
            </Button>
        </div>
    );
}

export default TaskCard;