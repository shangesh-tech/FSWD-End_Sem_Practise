```javascript

import React, { useState } from "react";

function App() {
  const [task, setTask] = useState([]);

  const [form, setForm] = useState({
    title: "",
    status: "pending",
  });

  const [editingIndex, setEditingIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingIndex !== null) {
      const isConfirmed = confirm("Are you sure you want to update the changes?");
      
      if (isConfirmed) {
        const updatedTaks = [...task];
        updatedTaks[editingIndex] = form;
        setTask(updatedTaks);
        setEditingIndex(null);
      }
    } else {
      setTask([...task, form]);
    }

    setForm({ title: "", status: "pending" });
  };

  const handleEdit = (index) => {
    setForm(task[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const isConfirmed = confirm("Are you sure you want to delete?");
    if (isConfirmed) {
      const updatedTasks = [...task];
      updatedTasks.splice(index, 1);
      setTask(updatedTasks);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Task Applications
      </h1>

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

      <div>
        <ul>
          {task.map((u, index) => (
            <li
              key={index}
              className="flex justify-between items-center border p-4 mb-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition duration-200"
            >
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {u.title}
                </h2>
                <p className="text-gray-600">{u.status}</p>
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
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
```