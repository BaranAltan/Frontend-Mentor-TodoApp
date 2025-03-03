import React, { useContext, useState } from "react";
import { GlobalContext } from "../Context/GlobalState";
import Cross from "../images/icon-cross.svg";

function Task() {
  const { tasks, removeTask, toggleComplete, inputBackground, filter, setTasks } = useContext(GlobalContext);
  const [draggedItemId, setDraggedItemId] = useState(null);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.isCompleted;
    if (filter === "completed") return task.isCompleted;
    return true;
  });

  const handleDragStart = (e, id) => {
    setDraggedItemId(id);
  };

  const handleDrop = (e, dropId) => {
    e.preventDefault();

    if (draggedItemId === null) return;

    const draggedIndex = tasks.findIndex((task) => task.id === draggedItemId);
    const droppedIndex = tasks.findIndex((task) => task.id === dropId);

    const newTasks = [...tasks];
    const [movedTask] = newTasks.splice(draggedIndex, 1);
    newTasks.splice(droppedIndex, 0, movedTask);

    setTasks(newTasks);
    setDraggedItemId(null); 
  };

  return (
    <div>
      <div className="mt-4">
        {filteredTasks.map((task) => (
          <div
            key={task.id}
            className="task-item"
            draggable 
            onDragStart={(e) => handleDragStart(e, task.id)} 
            onDragOver={(e) => e.preventDefault()} 
            onDrop={(e) => handleDrop(e, task.id)} 
          >
            <input
              type="checkbox"
              className="checkNull"
              checked={task.isCompleted}
              onChange={() => toggleComplete(task.id)}
            />
            <input
              className={`inputType ${inputBackground} inputBackground ${task.isCompleted ? "completed" : ""}`}
              value={task.content}
              readOnly
            />
            <img src={Cross} className="cross" onClick={() => removeTask(task.id)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Task;
