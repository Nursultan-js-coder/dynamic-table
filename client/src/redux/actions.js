import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from "./actionTypes";

let nextTodoId = 2;

export const addTodo = todo => ({
  type: ADD_TODO,
  payload: {
    todo: {
      ...todo,
      id: ++nextTodoId,
    }
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
