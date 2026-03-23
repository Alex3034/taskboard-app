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

  return (
    <AppContext.Provider value={{ user, setUser, tasks, addTask }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => React.useContext(AppContext);

export { AppProvider };
export default useAppContext;