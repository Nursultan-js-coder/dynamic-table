import {VISIBILITY_FILTERS} from "../constants";

export const getTodosState = store => store.todos;

export const getTodoList = store =>
    getTodosState(store).all ?? [];

export const getTodos = store => {
    return getTodoList(store);
}

export const getTodosBySort = (allTodos, sort) => {
    const {field, order} = sort;
    return sortBy(allTodos, field, order) ?? allTodos;
}


export const getTodosByVisibilityFilter = (store, visibilityFilter) => {
    const allTodos = getTodos(store);
    const {filter} = visibilityFilter;
    switch (filter) {
        case VISIBILITY_FILTERS.COMPLETED:
            return allTodos.filter((todo) => todo.completed);

        case VISIBILITY_FILTERS.NOT_COMPLETED:
            return allTodos.filter((todo) => !todo.completed);

        case VISIBILITY_FILTERS.ALL:
            return allTodos.filter(()=>true)

        default:
            return allTodos;
    }
};

function sortBy(todos, field, order) {
    let sortedTodos = [];
    if (order === "ASC") {
        sortedTodos = todos.sort((a, b) => a[field] < b[field] ? -1 : 1)
    } else {
        sortedTodos = todos.sort((a, b) => a[field] > b[field] ? -1 : 1)
    }
    return sortedTodos;
}

