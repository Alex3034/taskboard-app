import TaskCard, { type TaskCardProps } from "./TaskCard";

export interface ColumnCardProps {
    id: string;
    title: string;
    tasks: TaskCardProps[];
}

const ColumnCard: React.FC<ColumnCardProps> = ({
    title,
    tasks,
}): React.ReactElement => {
    return (
        <div className="bg-gray-800 rounded-lg shadow p-4 w-full">
            <h2 className="text-xl font-semibold mb-4">{title}</h2>
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
        </div>
    );
}

export default ColumnCard;