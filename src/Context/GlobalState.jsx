import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("tasks");
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    const [inputBackground, setInputBackground] = useState("");
    const [checkState, setCheckState] = useState(false);
    const [filter, setFilter] = useState("all");

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (taskContent) => {
        const newTask = {
            id: Math.floor(Math.random() * 99999),
            content: taskContent,
            isCompleted: checkState, 
        };
        setTasks([...tasks, newTask]);
    };

    const removeTask = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId && !task.isCompleted));
    };

    const toggleComplete = (id) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
            )
        );
    };

    return (
        <GlobalContext.Provider 
            value={{ 
                tasks, setTasks, addTask, removeTask, toggleComplete, 
                checkState, setCheckState, inputBackground, setInputBackground, 
                filter, setFilter 
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
