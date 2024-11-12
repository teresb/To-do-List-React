import React, { useState, useEffect, useRef } from 'react';

function Task({ task, editTask, deleteTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  // Create a ref to store the input element
  const inputRef = useRef(null);

  // Focus the input when editing starts
  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleEdit = () => {
    if (isEditing) {
      editTask(task.id, newTitle);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="task">
      {isEditing ? (
        <input
          ref={inputRef}  // Assign the ref to the input element
          type="text"
          className="title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
      ) : (
        <span>{task.title}</span>
      )}
      <div className="actions">
        <button className="edit" onClick={handleEdit}>
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <button className="delete" onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
}

export default Task;
