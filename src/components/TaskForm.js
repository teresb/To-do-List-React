import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [taskTitle, setTaskTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle.trim()) {
      addTask(taskTitle);
      setTaskTitle(''); // Clear the input
    } else {
      alert("Please fill out the task");
    }
  };

  return (
    <header>
      <h1>To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="Enter a new task"
        />
        <button type="submit">Add Task</button>
      </form>
    </header>
  );
}

export default TaskForm;