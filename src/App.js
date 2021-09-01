import React, { useState } from 'react';

import Header from './js/Header';
import InputForm from './js/InputForm';
import Main from './js/Main';

const App = () => {
  const [tasks, updateState] = useState(() => (localStorage.getItem('tasks')
    ? JSON.parse(localStorage.getItem('tasks'))
    : []));

  const [inputWarning, updateInputWarning] = useState(false);

  const setTasks = taskList => {
    localStorage.setItem('tasks', JSON.stringify(taskList));
    updateState(taskList);
  };

  const nextId = taskList => {
    const highestId = taskList.reduce((accumulator, currentValue) => (currentValue.id > accumulator
      ? currentValue.id
      : accumulator), 0);
    return Number.parseInt(highestId, 10) + 1;
  };

  const addTask = event => {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if (title && content) {
      const newTask = {
        id: nextId(tasks),
        title,
        content,
        isDone: false,
      };
      document.getElementById('title').value = '';
      document.getElementById('content').value = '';

      updateInputWarning(false);
      setTasks([...tasks, newTask]);
    } else {
      updateInputWarning(true);
    }
  };

  const markTask = id => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return { ...task, isDone: !task.isDone };
      }
      return task;
    }));
  };

  const deleteTask = id => setTasks((tasks.filter(task => task.id !== id)));

  return (
    <div className="main-container">
      <Header />
      <InputForm addTask={addTask} showWarning={inputWarning} />
      {tasks.length > 0
        ? <Main tasks={tasks} markTask={markTask} deleteTask={deleteTask} />
        : 'No tasks to show'}
    </div>
  );
};

export default App;
