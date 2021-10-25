import { CREATE_TODO, REMOVE_TODO } from "./actions";

// reducers take 2 arguments: state, action
export const todos = (state=[], action) => {
    const { type, payload } = action;
    switch(type){
        case CREATE_TODO:{
            // fetching the text property from CREATE_TODO payload
            const { text } = payload;
            // new state: newTodo
            const newTodo = {
                text,
                isCompleted: false,
            };
            return state.concat(newTodo); //returning new state
        }
        case REMOVE_TODO:{
            const { text } = payload;
            return state.filter(todo => todo.text !== text);
        }
        // we always have to return the unchanged state, if our reducer doesn't make any changes
        // otherwise to redux it'll look like reducer is returning undefined and it will throw an error
        default:{
            return state;
        }
    }
}