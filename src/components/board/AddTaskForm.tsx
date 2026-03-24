import React, { useState } from 'react';
import useAppContext from '../../context/AppContext';
import Button from '../ui/Button';

interface AddTaskFormProps {
    columnId: string;
    onClose: () => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({
    columnId,
    onClose,
}) => {
    const { addTask } = useAppContext();
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");

    const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!taskTitle.trim() || !taskDescription.trim()) return;
        addTask(taskTitle, taskDescription, columnId);
        setTaskTitle("");
        setTaskDescription("");
        onClose();
    };

    return (
        <form onSubmit={handleAddTask} className="flex flex-col gap-2">

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
                    onClick={onClose}
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
                    Agregar tarea
                </Button>
            </div>
        </form>
    );
};

export default AddTaskForm;
