import TaskCard, { type TaskCardProps } from "./TaskCard";
import Button from "../ui/Button";
import AddTaskForm from "./AddTaskForm";
import { useState } from "react";
import type { Task } from '../../types';

export interface ColumnCardProps {
    id: string;
    title: string;
    tasks: Task[];
}

const ColumnCard: React.FC<ColumnCardProps> = ({
    id,
    title,
    tasks,
}): React.ReactElement => {
    const [isAddingTask, setIsAddingTask] = useState(false);

    return (
        <div className="bg-gray-800 rounded-lg shadow p-4 w-full">
            <h2 className="text-xl font-semibold mb-4">{title}</h2>
            <Button 
                variant="primary" 
                onClick={() => setIsAddingTask(!isAddingTask)}
                disabled={isAddingTask}
                className="text-base px-6 py-3">
                + Agregar tarea
            </Button>
            <div className="space-y-4">
                {tasks.map((task) => (
                    <TaskCard
                    key={task.id}
                    id={task.id}
                        title={task.title}
                        description={task.description}
                        status={task.status}
                    />
                ))}
            </div>
            {isAddingTask && (
                <div className="mt-4">
                    <AddTaskForm columnId={id} onClose={() => setIsAddingTask(false)} />
                </div>
            )}
        </div>
    );
}

export default ColumnCard;