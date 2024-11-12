import React from 'react';
import Task from './Task';

function TaskList({ tasks, editTask, deleteTask }) {
  return (
    <section>
      <h2>Tasks</h2>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            editTask={editTask}
            deleteTask={deleteTask}
          />
        ))
      ) : (
        <p>No tasks yet</p>
      )}
    </section>
  );
}

export default TaskList;