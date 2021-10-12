import React, { useState } from "react";
import './NewTodoForm.css';

const NewTodoForm = () => {
  // In order to keep track of the value in our input box
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="new-todo-form">
      <input
        className="new-todo-input"
        type="text"
        placeholder="Type new todo"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <button className="new-todo-button" type="button">Create Todo</button>
    </div>
  );
};

export default NewTodoForm;
