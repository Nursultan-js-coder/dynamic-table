import {ADD_TODO, DELETE_TODO, LOAD_TODOS, SET_FILTER, SET_SORT, TOGGLE_TODO} from "./actionTypes";

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

export const loadTodos = todos => ({
    type: LOAD_TODOS,
    payload: {
        todos
    }
});

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    payload: {id}
});

export const deleteTodo = id => ({
    type: DELETE_TODO,
    payload: {id}
});

export const setFilter = filter => ({type: SET_FILTER, payload: {filter}});

export const setSort = sort => ({type: SET_SORT, payload: {sort}})
