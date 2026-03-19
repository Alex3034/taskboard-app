import React from "react";

interface User {
  name: string;
  email: string;
}

interface AppContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

const AppContext = React.createContext<AppContextType>({
  user: null,
  setUser: () => {},
});

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = React.useState<User | null>(null);

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => React.useContext(AppContext);

export { AppProvider };
export default useAppContext;