import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState'; 

function Footer() {

  const { tasks, removeTask, filter, setFilter } = useContext(GlobalContext);

  const remainingTasks = tasks.filter(task => !task.isCompleted).length

  return (
    <div>
    <div className="footerInput flex justify-content-around align-items-center">
      <span>{remainingTasks} Items Left</span>
      <div className="filter flex align-items-center  justify-content-between">
          <span className={filter === "all" ? "activeFilter" : ""} onClick={() => setFilter("all")}>All</span>
          <span className={filter === "active" ? "activeFilter" : ""} onClick={() => setFilter("active")}>Active</span>
          <span className={filter === "completed" ? "activeFilter" : ""} onClick={() => setFilter("completed")}>Completed</span>
      </div>
      <span className='clear' onClick={removeTask}>Clear Completed</span>

      </div>
      <div className='flex justify-content-around align-items-center mt-7 color'>
      Drag and drop to reorder list 
      </div>
    </div>
  );
  
}

export default Footer

