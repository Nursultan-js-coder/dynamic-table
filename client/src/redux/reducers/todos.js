import {ADD_TODO, DELETE_TODO, LOAD_TODOS, TOGGLE_TODO} from "../actionTypes";

const todos = []

const initialState = {
    all: todos,
    byIds: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOAD_TODOS: {
            const {todos} = action.payload;
            return {
                ...state,
                all: todos,
            };
        }
        case ADD_TODO: {
            const {todo} = action.payload;
            const {all} = state;
            return {
                ...state,
                all: [...all, {...todo, completed: false}],
            };
        }
        case TOGGLE_TODO: {
            const {id} = action.payload;
            return {
                ...state,
                all: state.all.map((todo) => {
                    if (todo.id === id) todo.completed = !todo.completed;
                    return todo;
                })
            };
        }
        case DELETE_TODO: {
            const {id} = action.payload;
            return {
                ...state,
                all: state.all.filter((todo) => todo.id !== id)
            };
        }


        default:
            return state;
    }
}
