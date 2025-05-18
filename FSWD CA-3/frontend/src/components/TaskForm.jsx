import React from "react";

function TaskForm({ form, handleChange, handleSubmit, editingIndex }) {
  return (
    <div className="mb-6 p-4 border rounded-lg shadow-lg bg-white">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Task Title"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="input input-bordered w-full p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <div>
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="select select-bordered w-full p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <div>
          <button
            type="submit"
            className="btn btn-primary w-full py-2 text-white font-semibold bg-blue-600 rounded-md shadow-md hover:bg-blue-700 transition duration-200"
          >
            {editingIndex !== null ? "Update Task" : "Add Task"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm; 