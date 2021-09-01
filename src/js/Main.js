import React from 'react';
import Card from './Card';

const Main = ({ tasks, deleteTask, markTask }) => (
  <main className="card-container">
    {tasks.map(task => (
      <Card key={task.id} task={task} markTask={markTask} deleteTask={deleteTask} />
    ))}
  </main>
);

export default Main;
