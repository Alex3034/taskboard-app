import TaskCard, { type TaskCardProps } from "./TaskCard";

interface ColumnCardProps {
    title: string;
    tasks: TaskCardProps[];
}

const ColumnCard: React.FC<ColumnCardProps> = ({
    title,
    tasks,
}): React.ReactElement => {
    return (
        <div className="bg-white rounded-lg shadow p-4 w-full">
            <h2 className="text-xl font-semibold mb-4">{title}</h2>
            {tasks.map((task) => (
                <TaskCard
                    key={task.id}
                    title={task.title}
                    description={task.description}
                    status={task.status}
                />
            ))}
        </div>
    );
}

export default ColumnCard;