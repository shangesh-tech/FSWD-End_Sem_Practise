import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, handleEdit, handleDelete }) {
  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            index={index}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList; 