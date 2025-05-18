import React, { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

function Task() {
  const [tasks, setTasks] = useState([]);

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
        const updatedTasks = [...tasks];
        updatedTasks[editingIndex] = form;
        setTasks(updatedTasks);
        setEditingIndex(null);
      }
    } else {
      setTasks([...tasks, form]);
    }

    setForm({ title: "", status: "pending" });
  };

  const handleEdit = (index) => {
    setForm(tasks[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const isConfirmed = confirm("Are you sure you want to delete?");
    if (isConfirmed) {
      const updatedTasks = [...tasks];
      updatedTasks.splice(index, 1);
      setTasks(updatedTasks);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Task Applications
      </h1>

      <TaskForm 
        form={form} 
        handleChange={handleChange} 
        handleSubmit={handleSubmit}
        editingIndex={editingIndex}
      />

      <TaskList 
        tasks={tasks}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default Task;
