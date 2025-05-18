import React from "react";

function TaskItem({ task, index, handleEdit, handleDelete }) {
  return (
    <li className="flex justify-between items-center border p-4 mb-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition duration-200">
      <div>
        <h2 className="text-xl font-semibold text-gray-800">
          {task.title}
        </h2>
        <p className="text-gray-600">{task.status}</p>
      </div>
      <div className="space-x-2">
        <button
          onClick={() => handleEdit(index)}
          className="btn btn-secondary text-white bg-yellow-600 rounded-md px-4 py-2 hover:bg-yellow-700 transition duration-200"
        >
          Edit
        </button>
        <button
          onClick={() => handleDelete(index)}
          className="btn btn-danger text-white bg-red-600 rounded-md px-4 py-2 hover:bg-red-700 transition duration-200"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TaskItem; 