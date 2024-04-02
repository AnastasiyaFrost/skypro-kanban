import { createContext, useState } from "react";


export const TasksContext = createContext(null);
export const TasksProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <TasksContext.Provider value={{ cards, setCards, isLoading, setIsLoading }}>
      {children}
    </TasksContext.Provider>
  );
}