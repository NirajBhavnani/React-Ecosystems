import React, { useState } from "react";
import { connect } from "react-redux";
import { createTodo } from "./actions";
import './NewTodoForm.css';

const NewTodoForm = ({ todos, onCreatePressed }) => {
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
      <button className="new-todo-button" 
      type="button"
      onClick={ () => {
        const isDuplicateText = todos.some(todo => todo.text === inputValue);
        if(!isDuplicateText){
          onCreatePressed(inputValue);
          setInputValue('');
        }
      }}
      >Create Todo</button>
    </div>
  );
};

// take this state object and return another object containing the pieces 
// of that state that our component needs access to
const mapStateToProps = state => ({
  todos: state.todos
});

// dispatch is a function that allows our components to trigger actions
// that our redux store will respond to
const mapDispatchToProps = dispatch => ({
  onCreatePressed: text => dispatch(createTodo(text))
});

//higher order function: 2nd argument is basically the component that we want to connect to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
