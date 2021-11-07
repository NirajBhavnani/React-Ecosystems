import {
  CREATE_TODO,
  REMOVE_TODO,
  MARK_TODO_AS_COMPLETED,
  LOAD_TODOS_IN_PROGRESS,
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS_FAILURE,
} from "./actions";

export const isLoading = (state = false, action) => {
    const { type } = action;

    switch (type) {
    case LOAD_TODOS_IN_PROGRESS:
        return true;
    case LOAD_TODOS_SUCCESS:
    case LOAD_TODOS_FAILURE:
        return false;
    default:
        return state;
    }
}

// reducers take 2 arguments: state, action
export const todos = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_TODO: {
      // fetching the text property from CREATE_TODO payload
      const { text } = payload;
      // new state: newTodo
      const newTodo = {
        text,
        isCompleted: false,
      };
      return state.concat(newTodo); //returning new state
    }
    case REMOVE_TODO: {
      const { text } = payload;
      return state.filter((todo) => todo.text !== text);
    }
    case MARK_TODO_AS_COMPLETED: {
      const { text } = payload;
      return state.map((todo) => {
        if (todo.text === text) {
          return { ...todo, isCompleted: true };
        }
        return todo;
      });
    }
    // we always have to return the unchanged state, if our reducer doesn't make any changes
    // otherwise to redux it'll look like reducer is returning undefined and it will throw an error
    default: {
      return state;
    }
  }
};
