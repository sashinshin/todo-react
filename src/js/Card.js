import React from 'react';

const Card = ({ task, deleteTask, markTask }) => (
  <section className={`card ${task.isDone
    ? 'card--done'
    : ''}`}>
    <button className="card__content" onClick={() => markTask(task.id)} type="button">
      <h3>{task.title}</h3>
      <p>{task.content}</p>
    </button>
    {task.isDone
      ? <button type="button" className="btn card__delete-button" onClick={() => deleteTask(task.id)}>Delete</button>
      : ''}
  </section>
);

export default Card;
