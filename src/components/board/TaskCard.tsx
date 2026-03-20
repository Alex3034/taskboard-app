export interface TaskCardProps {
    id: string;
    title: string;
    description: string;
    status: 'todo' | 'in-progress' | 'done';
}

const TaskCard: React.FC<TaskCardProps> = ({
    title,
    description,
    status,
}): React.ReactElement => {
    const statusColors: Record<'todo' | 'in-progress' | 'done', string> = {
        'todo': 'bg-gray-600',
        'in-progress': 'bg-yellow-600',
        'done': 'bg-green-600',
    };

    return (
        <div className={`p-4 rounded-lg shadow ${statusColors[status]}`}>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default TaskCard;