import { VISIBILITY_FILTERS } from "../constants";

export const getTodosState = store => store.todos;

export const getTodoList = store =>
getTodosState(store).all ?? [];

export const getTodoById = (store, id) => ({ ...getTodosState(store).byIds[id], id }) ;

/**
 * example of a slightly more complex selector
 * select from store combining information from multiple reducers
 */
export const getTodos = store =>{
  const todos = getTodoList(store)
  return todos;
}

export const getTodosByVisibilityFilter = (store, visibilityFilter) => {
  const allTodos = getTodos(store);
  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.COMPLETED:
      return allTodos.filter(todo => todo.completed);
    case VISIBILITY_FILTERS.INCOMPLETE:
      return allTodos.filter(todo => !todo.completed);
    case VISIBILITY_FILTERS.ALL:
    default:
      return allTodos;
  }
};
