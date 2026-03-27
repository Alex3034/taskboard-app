import React from "react";
import { mockTasks } from '../utils/mockData';
import type { Task } from '../types';

interface User {
  name: string;
  email: string;
}

interface AppContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  tasks: Task[];
  addTask: (title: string, description: string, columnId: string) => void;
  editTask: (id: string, title: string, description: string) => void;
  deleteTask: (id: string) => void;
  moveTask: (id: string, newColumnId: string) => void;
}

const columnStatusMap: Record<string, Task['status']> = {
  'column-1': 'todo',
  'column-2': 'in-progress',
  'column-3': 'done'
};

const AppContext = React.createContext<AppContextType>({
  user: null,
  setUser: () => { },
  tasks: [],
  addTask: () => { },
  editTask: () => { },
  deleteTask: () => { },
  moveTask: () => { },
});

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = React.useState<User | null>(null);
  const [tasks, setTasks] = React.useState<Task[]>(mockTasks);

  const addTask = (title: string, description: string, columnId: string): void => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      description,
      columnId,
      status: columnStatusMap[columnId] || 'todo',
    };
    setTasks([...tasks, newTask]);
  };

  const editTask = (id: string, title: string, description: string): void => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, title, description } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id: string): void => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }

  const moveTask = (id: string, newColumnId: string): void => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, columnId: newColumnId, status: columnStatusMap[newColumnId] || 'todo' } : task
    );
    setTasks(updatedTasks);
  }

  return (
    <AppContext.Provider value={{ user, setUser, tasks, addTask, editTask, deleteTask, moveTask }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => React.useContext(AppContext);

export { AppProvider };
export default useAppContext;