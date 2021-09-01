import React from 'react';

const InputForm = ({ addTask, showWarning }) => (
  <form className="form" onSubmit={addTask}>
    {showWarning
      ? <h4 className="form__warning">Title and description required!</h4>
      : <h4>Add a new task!</h4>}
    <input type="text" id="title" placeholder="Title..." maxLength="20" />
    <input type="content" id="content" placeholder="Description..." rows="5" />
    <button type="submit" className="btn form__button">Add</button>
  </form>
);

export default InputForm;
