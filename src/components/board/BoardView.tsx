import ColumnCard, { type ColumnCardProps} from "./ColumnCard";

interface BoardViewProps {
    id: string;
    title: string;
    columns: ColumnCardProps[];
}

const BoardView: React.FC<BoardViewProps> = ({
    title,
    columns,
}): React.ReactElement => {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">{title}</h1>
            <div className="flex space-x-4">
                {columns.map((column) => (
                    <ColumnCard
                        key={column.id}
                        id={column.id}
                        title={column.title}
                        tasks={column.tasks}
                    />
                ))}
            </div>
        </div>
    );
}

export default BoardView;