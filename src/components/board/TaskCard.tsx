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
        'todo': 'bg-gray-200',
        'in-progress': 'bg-yellow-200',
        'done': 'bg-green-200',
    };

    return (
        <div className={`p-4 rounded-lg shadow ${statusColors[status]}`}>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-gray-700">{description}</p>
        </div>
    );
}

export default TaskCard;