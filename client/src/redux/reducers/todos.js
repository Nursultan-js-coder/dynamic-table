import { ADD_TODO, TOGGLE_TODO } from "../actionTypes";

const todos = [
  {
    id:0,
    user: {
      username: "nursultan00",
      email: "nurstunguch@gmail.com",
    },
    body: "Buy milk",
    completed: true
  },
  {
    id:1,
    user: {
      username: "aida93",
      email: "aida@gmail.com",
    },
    body: "Buy meat",
    completed: false
  },

]

const initialState = {
  allIds: todos,
  byIds: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const {todo} = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, todo.id],
        byIds: {
          ...state.byIds,
          [todo.id]: {
            ...todo,
            completed: false
          }
        }
      };
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed
          }
        }
      };
    }
    default:
      return state;
  }
}
